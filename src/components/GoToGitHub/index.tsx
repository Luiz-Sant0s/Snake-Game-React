import React from "react";
import ImageGlobal from "../../helpers/ImageGlobal";

import * as S from "./styles";

interface GoToGitHubProps {
  props?: string;
}

const GoToGitHub: React.FC<GoToGitHubProps> = () => {
  return (
      <S.LinkToGitHub href="https://github.com/J0se-Luiz/Snake-Game-React" target="_blank">
    <S.GoToGitHubStyle>
        <S.ImgGit
          src={ImageGlobal.GoToGitHub}
          alt="Go to GitHub"
        />
        <S.TextGitHub>Go to GitHub</S.TextGitHub>
    </S.GoToGitHubStyle>
      </S.LinkToGitHub>
  );
};

export default GoToGitHub;
