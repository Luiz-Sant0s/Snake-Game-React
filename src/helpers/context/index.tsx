import React from "react";

import { GameContextProvider } from "./GameContext/context";

const GlobalContext: React.FC = ({ children }) => {
  return (
      <GameContextProvider>{children}</GameContextProvider>
  );
};

export default GlobalContext;
