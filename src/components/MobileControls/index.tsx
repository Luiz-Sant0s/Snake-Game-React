import React, { useContext } from "react";
import DirectionToGo from "../../helpers/DirectionToGo";
import GameContext from "../../helpers/context/GameContext/context";
import * as S from "./styles";

const MobileControls = () => {
  const { changeDirection } = useContext(GameContext);
  return (
    <S.MobileControlsContainer>
      <S.BodyControls>
        <S.BtnUp
          onClick={() => changeDirection(DirectionToGo.TOP)}
        ></S.BtnUp>
        <div>
          <S.BtnLEFT onClick={() => changeDirection(DirectionToGo.LEFT)}>
           
          </S.BtnLEFT>
          <S.BtnRIGHT
            onClick={() => changeDirection(DirectionToGo.RIGHT)}
          ></S.BtnRIGHT>
        </div>
        <S.BtnDown
          onClick={() => changeDirection(DirectionToGo.BOTTOM)}
        ></S.BtnDown>
      </S.BodyControls>
    </S.MobileControlsContainer>
  );
};

export default MobileControls;
