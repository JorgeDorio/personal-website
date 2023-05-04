import React, { ReactNode, useState } from "react";

type props = {
  children: ReactNode;
};

export const MainContext = React.createContext({} as any);

export function MainProvider({ children }: props) {
  const [nodeSelected, setNodeSelected] = useState(false);
  const [dotnetSelected, setDotnetSelected] = useState(false);

  const value = {
    nodeSelected,
    setNodeSelected,
    dotnetSelected,
    setDotnetSelected,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}
