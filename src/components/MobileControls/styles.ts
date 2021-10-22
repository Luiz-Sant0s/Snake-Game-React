import styled from "styled-components";
import ImageGlobal from "../../helpers/ImageGlobal";

const btn = `${process.env.PUBLIC_URL}/img/BtnTop.png`;

const Btn = {
  BtnTOP: `${process.env.PUBLIC_URL}/img/BtnTop.png`,
  BtnBOTTOM: `${process.env.PUBLIC_URL}/img/BtnBottom.png`,
  BtnLEFT: `${process.env.PUBLIC_URL}/img/BtnLeft.png`,
  BtnRIGHT: `${process.env.PUBLIC_URL}/img/BtnRight.png`,
};

export const MobileControlsContainer = styled.div`
  position: relative;
  padding: 20px;
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
`;

export const BodyControls = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    gap: 20px;
  }
`;

const BtnMobile = styled.button`
  cursor: pointer;
  height: 60px;
  width: 60px;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  background-color: transparent;

  &:focus,
  &:active {
    outline: none;
  }
  &:active {
    opacity: 0.7;
  }
`;

export const BtnUp = styled(BtnMobile)`
  height: 70px;
  background-image: url(${ImageGlobal.Button.Up});
  position: relative;
  top: 15px;
`;

export const BtnLEFT = styled(BtnMobile)`
  width: 70px;
  background-image: url(${ImageGlobal.Button.Left});
`;

export const BtnRIGHT = styled(BtnMobile)`
  width: 70px;
  background-image: url(${ImageGlobal.Button.Right});
`;

export const BtnDown = styled(BtnMobile)`
  height: 70px;
  background-image: url(${ImageGlobal.Button.Down});
  position: relative;
  bottom: 20px;
`;
