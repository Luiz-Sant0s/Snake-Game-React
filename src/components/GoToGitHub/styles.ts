import styled from "styled-components";
import { keyframes } from "styled-components";

const RotateIconGit = keyframes`
  0% { transform: rotate(40deg) }
  10% {  transform: rotate(347deg) }
  20% {   transform: rotate(17deg) }
  30% {   transform: rotate(-60deg) }
  40% {  transform: rotate(40deg)  }
  60% {   transform: rotate(-70deg) }
  80% {   transform: rotate(50deg) }
  100% {  transform: rotate(-60deg) } 
`;

export const GoToGitHubStyle = styled.button`
  background: #929eaa;
  border-radius: 50%;
  height: 65px;
  width: 65px;
  position: fixed;
  bottom: 45px;
  right: 11px;
  cursor: pointer;

  :hover {
    background-color: #b1b6bb;
  }
  :active {
    opacity: 0.7;
  }
`;

export const LinkToGitHub = styled.a`
  text-decoration: none;
  color: black;
`;

export const ImgGit = styled.img`
  height: 50px;
  width: 50px;
  transform: rotate(-20deg);
  animation-name: ${RotateIconGit};
  animation-duration: 2.8s;
  animation-iteration-count: infinite;
  margin-top: 5px;

  :hover {
    opacity: 0.7;
  }
`;

export const TextGitHub = styled.p`
  width: 60px;
  text-align: center;
  position: relative;
  right: 10px;
  font-weight: bold;
`;
