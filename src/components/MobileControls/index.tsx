import React, { useContext } from "react";
import DirectionToGo from "../../helpers/DirectionToGo";
import GameContext from "../../helpers/context/GameContext/context";
import * as S from "./styles";

const MobileControls = () => {
  const { changeDirection } = useContext(GameContext);
  return (
    <S.MobileControlsContainer>
      <S.DPadContainer>
        <S.BtnTOP
          onClick={() => changeDirection(DirectionToGo.TOP)}
        ></S.BtnTOP>
        <div>
          <S.BtnLEFT onClick={() => changeDirection(DirectionToGo.LEFT)}>
           
          </S.BtnLEFT>
          <S.BtnRIGHT
            onClick={() => changeDirection(DirectionToGo.RIGHT)}
          ></S.BtnRIGHT>
        </div>
        <S.BtnBOTTOM
          onClick={() => changeDirection(DirectionToGo.BOTTOM)}
        ></S.BtnBOTTOM>
      </S.DPadContainer>
    </S.MobileControlsContainer>
  );
};

export default MobileControls;
