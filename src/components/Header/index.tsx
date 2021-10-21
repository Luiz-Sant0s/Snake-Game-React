import React, { useContext } from 'react';
import GameContext from "../../helpers/context/GameContext/context";
import * as S from './styles';

const Header: React.FC = () => {
    const { state } = useContext(GameContext);

    return(
        <S.HeaderContainer>
            <h1>Snake Game</h1>
           
            <S.PointScreenContainer>
            Score: {state.pontuation} 
        </S.PointScreenContainer>
           
        </S.HeaderContainer>
    );
};

export default Header;