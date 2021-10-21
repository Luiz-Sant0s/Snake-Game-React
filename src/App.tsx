import React from 'react';
import GlobalContext from "./helpers/context/index";
import Game from './components/template/Game';

function App() {
  return (
    <GlobalContext>
      <Game/>  
    </GlobalContext>
  );
}

export default App;
