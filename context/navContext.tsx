import { createContext, useState } from "react";
import { childrenProps, createNavContextType } from "../types/types";

export const NavContext = createContext({} as createNavContextType);

export const NavContextProvider = ({ children }: childrenProps) => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  function toggleNav() {
    setIsNavOpen((pre) => !pre);
  }

  return (
    <NavContext.Provider value={{ isNavOpen, toggleNav }}>
      {children}
    </NavContext.Provider>
  );
};
