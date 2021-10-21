import React, { useContext } from "react";
import GameContext from "../../helpers/context/GameContext/context";
import * as S from "./styles";
import Fruit from "../Fruit";
import Snake from "../Snake";
import GAME_SETTINGS from "../../helpers/config/gameSettings";

const PlayArea = () => {

  const { playingField } = useContext(GameContext);
  const { width, height } = GAME_SETTINGS.gameResolution;
  return (
    <S.PlayAreaContainer ref={playingField} tabIndex={-1} style={{ width, height }}>
      <Fruit />
      <Snake />
    </S.PlayAreaContainer>
  );
};

export default PlayArea;
