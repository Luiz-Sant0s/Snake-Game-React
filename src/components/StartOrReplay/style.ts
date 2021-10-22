import styled from "styled-components";
import ImageGlobal from "../../helpers/ImageGlobal";

interface OpenDialogType {
  open: boolean;
}

export const ContainerStartOrReplay = styled.dialog<OpenDialogType>`
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const TitleModal = styled.h1`
  font-weight: bold;
`;

export const DescriptionModal = styled.p``;

export const BtnStart = styled.button`
  cursor: pointer;
  height: 77px;
  width: 77px;
  background-image: url(${ImageGlobal.Start});
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  background-color: transparent;

  @media (max-width: 1024px) {
    font-size: 0.8rem;
    border-width: 3px;
    padding: 4px 8px;
  }
  &:active {
    opacity: 0.2;
    cursor: wait;
  }
`;

export const BtnReplay = styled.button`
  cursor: pointer;
  height: 71px;
  width: 72px;
  background-image: url(${ImageGlobal.Replay});
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  background-color: transparent;

  @media (max-width: 1024px) {
    font-size: 0.8rem;
    border-width: 3px;
    padding: 4px 8px;
  }
  &:active {
    opacity: 0.2;
    cursor: wait;
  }
`;
