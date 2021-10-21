import React from 'react';
import GAME_SETTINGS from '../../helpers/config/gameSettings';
import * as S from './styles';
const { squareArea } = GAME_SETTINGS.gameResolution;

interface SquareTypes {
    style?: React.CSSProperties;
}

const Square: React.FC<SquareTypes> = ({ style }) => {
    return <S.SquareDesign style={{...style, width: squareArea, height: squareArea}}/>
};

export default Square;