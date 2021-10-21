import styled, { css } from "styled-components";

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
  background-image: url("img/background.jpg");

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
          cursor: url("img/Cursor2.png"), default;
        `
      : css`
          cursor: none;
        `};
`;
