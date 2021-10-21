import React, { useContext } from 'react';
import Square from '../Square';
import GameContext from "../../helpers/context/GameContext/context";

const Fruit = () => {

    const { state } = useContext(GameContext);
    const { top, left } = state.fruit;
    
    return (
        <Square style={{top, left, background: '#fa0800', borderRadius: '20px'}} />
    )
};

export default Fruit;