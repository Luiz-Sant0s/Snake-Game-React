import React, { useContext } from "react";
import GameContext from "../../helpers/context/GameContext/context";
import * as S from "./style";

const StartOrReplay = () => {
  const { state, start } = useContext(GameContext);

  return (
    <S.ContainerStartOrReplay
      open={
        state.isGameOver || state.msgStart || state.msgStart === undefined
          ? true
          : false
      }
    >
      {state.isGameOver && (
        <>
          <S.TitleModal>GAME OVER</S.TitleModal>
          <S.DescriptionModal>
            Your score: {state.pontuation}
          </S.DescriptionModal>
          <S.BtnReplay onClick={start} />
        </>
      )}

      {state.msgStart ||
        (state.msgStart === undefined && (
          <>
            <S.TitleModal>Hello, let's play?</S.TitleModal>
            <p>Go press start</p>
            <S.BtnStart onClick={start} />
          </>
        ))}
    </S.ContainerStartOrReplay>
  );
};

export default StartOrReplay;
