import styled from "styled-components";

export const MobileControlsContainer = styled.div`
  position: relative;
  padding: 20px;
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
`;

export const DPadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    gap: 20px;
  }
`;


export const BtnTOP = styled.button`
  cursor: pointer;
  height: 60px;
  width: 60px;
  background-image: url('img/BtnTop.png');
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  background-color: transparent;
  position: relative;
    top: 15px;

  &:focus,
  &:active {
    outline: none;
  }
  &:active {
    opacity: 0.2;
  }
`;

export const BtnLEFT = styled.button`
  cursor: pointer;
  height: 60px;
  width: 60px;
  background-image: url('img/BtnLeft.png');
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  background-color: transparent;

  &:focus,
  &:active {
    outline: none;
  }
  &:active {
    opacity: 0.2;
  }

`;


export const BtnRIGHT = styled.button`
  cursor: pointer;
  height: 50px;
  width: 60px;
  background-image: url('img/BtnRight.png');
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  background-color: transparent;

  &:focus,
  &:active {
    outline: none;
  }
  &:active {
    opacity: 0.2;
  }
`;

export const BtnBOTTOM = styled.button`
  cursor: pointer;
  height: 60px;
  width: 60px;
  background-image: url('img/BtnBottom.png');
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  background-color: transparent;
  position: relative;
    bottom: 20px;

  &:focus,
  &:active {
    outline: none;
  }
  &:active {
    opacity: 0.2;
  }
`;
