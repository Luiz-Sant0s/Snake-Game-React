import React, { KeyboardEvent, useContext } from "react";
import PlayArea from "../../PlayArea";
import Header from "../../Header";
import { GameContainer } from "./styles";
import GameContext from "../../../helpers/context/GameContext/context";
import DirectionToGo from "../../../helpers/DirectionToGo";
import GAME_SETTINGS from "../../../helpers/config/gameSettings";
import StartOrReplay from "../../StartOrReplay";
import MobileControls from "../../MobileControls";

const Game = () => {
  const { width } = GAME_SETTINGS.gameResolution;
  const { changeDirection, state } = useContext(GameContext);

  const handleGame = (e: KeyboardEvent) => {
    switch (e.code) {
      case "KeyS":
      case "ArrowDown": {
        changeDirection(DirectionToGo.BOTTOM);
        break;
      }

      case "KeyW":
      case "ArrowUp": {
        changeDirection(DirectionToGo.TOP);
        break;
      }

      case "KeyD":
      case "ArrowRight": {
        changeDirection(DirectionToGo.RIGHT);
        break;
      }

      case "KeyA":
      case "ArrowLeft": {
        changeDirection(DirectionToGo.LEFT);
        break;
      }
    }
  };

  return (
    <>
      <GameContainer
        cursorVisible={state.isGameOver}
        role="button"
        tabIndex={0}
        onKeyUp={handleGame}
        onKeyDown={() => {}}
        style={{ width }}
      >
        <Header />
        <PlayArea />
        <StartOrReplay />
      </GameContainer>
      <MobileControls />
    </>
  );
};

export default Game;
