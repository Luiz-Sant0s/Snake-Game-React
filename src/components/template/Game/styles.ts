import styled, { css } from "styled-components";
import ImageGlobal from "../../../helpers/ImageGlobal";

interface CursorType {
  cursorVisible: boolean;
}

export const GameContainer = styled.section<CursorType>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5% auto;
  border: 2px solid #000;
  padding: 0;
  background-image: url(${ImageGlobal.BackgroundGame});

  &:focus {
    outline: none;
  }

  @media (max-width: 1024px) {
    margin-top: 4px;
    margin: 1% auto;
  }

  ${({ cursorVisible }) => 
    cursorVisible || cursorVisible === undefined
      ? css`
          cursor: url(${ImageGlobal.Cursor}), default;
        `
      : css`
          cursor: none;
        `};
`;
