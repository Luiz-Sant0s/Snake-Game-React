import React, { createContext, useState, useEffect, useRef } from "react";
import GAME_SETTINGS from "../../config/gameSettings";
import DirectionToGo from "../../DirectionToGo";

interface StartingPosition {
  top: number;
  left: number;
}

const { width, height, squareArea } = GAME_SETTINGS.gameResolution;

const createInitalSnake = () => {
  const { height, width, squareArea } = GAME_SETTINGS.gameResolution;  
  const top = Math.floor(Math.floor(height/squareArea)/2) * squareArea;
  const left = Math.floor(Math.floor(width/squareArea)/2) * squareArea;

  let snake: StartingPosition[] = [];

  for(let i = 0; i < 3; i++){
    snake.push({top, left: left + (squareArea * i)});
  }

  return snake;
};

const getRandomPosition = ():StartingPosition => {
  let left = getRandomInt(0, width/squareArea) * squareArea;
  let top = getRandomInt(0, height/squareArea) * squareArea;
  
  if(left === width)
      left = left - squareArea;
  if(top === height)
      top = top - squareArea;
  
  return { left, top};
};

const getRandomInt = (min: number, max: number) => {   
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

type GameType = {
  fruit: StartingPosition;
  snake: StartingPosition[];
  pontuation: number;
  moveDirection: DirectionToGo;
  isGameOver: boolean;
  msgStart: boolean;
};

type PropsGameContext = {
  playingField?: any;
  state: GameType;
  setState: React.Dispatch<React.SetStateAction<GameType>>;
  start: () => void;
  changeDirection: (newDirection: DirectionToGo) => void;
};
const DEFAULT_VALUE = {
  state: {
    fruit: getRandomPosition(),
    pontuation: 0,
    moveDirection: DirectionToGo.RIGHT,
    snake: createInitalSnake(),
  } as GameType,
  setState: () => {},
  start: () => {},
  changeDirection: (newDirection: DirectionToGo) => {},
  isGameOver: false,
  msgStart: true,
};
const GameContext = createContext<PropsGameContext>(DEFAULT_VALUE);
const GameContextProvider: React.FC = ({ children }) => {
  const playingField = useRef(null);
  const [state, setState] = useState(DEFAULT_VALUE.state);
  const [currentIntervalId, setCurrentIntervalId] = useState<NodeJS.Timeout>();
  const [isStart, setIsStart] = useState(false);
  const [speedSeconds, setSpeedSeconds] = useState(GAME_SETTINGS.speed.initial);

  const useInitialfocus = (ref: any) => {
    ref.current.focus();
  };

  const start = () => {
    if (currentIntervalId !== undefined) clearInterval(currentIntervalId);
    setState({
      ...state,
      fruit: getRandomPosition(),
      snake: createInitalSnake(),
      moveDirection: DirectionToGo.RIGHT,
      pontuation: 0,
      isGameOver: false,
      msgStart: false,
    });
    setSpeedSeconds(GAME_SETTINGS.speed.initial);
    setIsStart(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useInitialfocus(playingField);
  };

  const gameOver = () => {
    setIsStart(false);
    setState({
      ...state,
      msgStart: false,
      isGameOver: true,
    });

    if (currentIntervalId !== undefined) clearInterval(currentIntervalId);
  };

  const moveSnake = (removeLastNode = true) => {
    let newSnake = state.snake;
    const { squareArea } = GAME_SETTINGS.gameResolution;

    const currentSnakeHead = newSnake[newSnake.length - 1];
    switch (state.moveDirection) {
      case DirectionToGo.RIGHT: {
        if (removeLastNode) newSnake.shift();
        newSnake.push({
          top: currentSnakeHead.top,
          left: currentSnakeHead.left + squareArea,
        });
        break;
      }
      case DirectionToGo.LEFT: {
        if (removeLastNode) newSnake.shift();
        newSnake.push({
          top: currentSnakeHead.top,
          left: currentSnakeHead.left - squareArea,
        });
        break;
      }
      case DirectionToGo.TOP: {
        if (removeLastNode) newSnake.shift();
        newSnake.push({
          top: currentSnakeHead.top - squareArea,
          left: currentSnakeHead.left,
        });
        break;
      }
      case DirectionToGo.BOTTOM: {
        if (removeLastNode) newSnake.shift();
        newSnake.push({
          top: currentSnakeHead.top + squareArea,
          left: currentSnakeHead.left,
        });
        break;
      }
    }
    setState({
      ...state,
      snake: newSnake,
    });
  };

  const changeDirection = (newDirection: DirectionToGo) => {
    if (
      state.moveDirection === DirectionToGo.RIGHT &&
      newDirection === DirectionToGo.LEFT
    )
      return;
    if (
      state.moveDirection === DirectionToGo.LEFT &&
      newDirection === DirectionToGo.RIGHT
    )
      return;
    if (
      state.moveDirection === DirectionToGo.TOP &&
      newDirection === DirectionToGo.BOTTOM
    )
      return;
    if (
      state.moveDirection === DirectionToGo.BOTTOM &&
      newDirection === DirectionToGo.TOP
    )
      return;

    setState({
      ...state,
      moveDirection: newDirection,
    });
  };

  const checkSnakeCollidedWithItself = () => {
    const currentSnakeHead = state.snake[state.snake.length - 1];
    if (currentSnakeHead) {
      const { left, top } = currentSnakeHead;
      if (
        state.snake.filter((item) => item.left === left && item.top === top)
          .length > 1
      ) {
        gameOver();
      }
    }
  };

  const checkSnakeCollidedWithBorders = () => {
    const currentSnakeHead = state.snake[state.snake.length - 1];
    const { width, height, squareArea } = GAME_SETTINGS.gameResolution;
    if (currentSnakeHead) {
      if (
        currentSnakeHead.left < 0 ||
        currentSnakeHead.left > width - squareArea
      ) {
        gameOver();
      }
      if (
        currentSnakeHead.top < 0 ||
        currentSnakeHead.top > height - squareArea
      ) {
        gameOver();
      }
    }
  };

  const verifyColision = () => {
    checkSnakeCollidedWithBorders();
    checkSnakeCollidedWithItself();
  };

  const verifyFruit = () => {
    const currentSnakeHead = state.snake[state.snake.length - 1];
    if (
      currentSnakeHead.top === state.fruit.top &&
      currentSnakeHead.left === state.fruit.left
    )
      toEatFruit();
  };

  const toEatFruit = () => {
    moveSnake(false);
    changeSpeed();
    setState({
      ...state,
      fruit: getRandomPosition(),
      pontuation: state.pontuation + 1,
    });
  };
  const changeSpeed = () => {
    const { minSpeed, speedDecay } = GAME_SETTINGS.speed;
    if (speedSeconds > minSpeed) setSpeedSeconds(speedSeconds - speedDecay);
  };

  useEffect(() => {
    if (isStart) {
      if (currentIntervalId !== undefined) clearInterval(currentIntervalId);
      moveSnake();
      const intervalId = setInterval(() => moveSnake(), speedSeconds);
      setCurrentIntervalId(intervalId);
    }
  }, [state.moveDirection, isStart, state.fruit]);

  useEffect(() => {
    verifyColision();
    verifyFruit();
  }, [JSON.stringify(state.snake)]);

  return (
    <GameContext.Provider
      value={{
        playingField,
        state,
        setState,
        start,
        changeDirection,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
export { GameContextProvider };
export default GameContext;
