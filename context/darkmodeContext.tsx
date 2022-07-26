import { createContext, useEffect, useState } from "react";
import { childrenProps } from "../types/types";
import LocalStorage from "../lib/localStorage";

type darkmodeContextType = {
  isDark: boolean;
  toggleDarkmode: () => void;
};

export const darkmodeContext = createContext({} as darkmodeContextType);

export const DarkmodeContextProvider = ({ children }: childrenProps) => {
  const detectMode = () => {
    if (typeof window !== "undefined") {
      let matched = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return matched ? true : false;
    }
  };

  const getLocal = () => {
    const local = LocalStorage.getItem("isDark");
    console.log(local);
    return local ? JSON.parse(local) : detectMode();
  };

  const [isDark, setIsDark] = useState(getLocal());

  function toggleDarkmode() {
    setIsDark((pre: boolean) => !pre);
  }

  useEffect(() => {
    LocalStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <darkmodeContext.Provider value={{ isDark, toggleDarkmode }}>
      {children}
    </darkmodeContext.Provider>
  );
};
