import { createContext, useEffect, useRef, useState } from "react";
import { childrenProps } from "../types/types";
import LocalStorage from "../lib/localStorage";

type darkmodeContextType = {
  isDark: boolean;
  toggleDarkmode: () => void;
};

export const darkmodeContext = createContext({} as darkmodeContextType);

export const DarkmodeContextProvider = ({ children }: childrenProps) => {
  const [isDark, setIsDark] = useState(true);
  const didMountRef = useRef(false);

  const toggleDarkmode = () => {
    setIsDark((pre: boolean) => !pre);
  };

  const detectMode = () => {
    if (typeof window !== "undefined") {
      let matched = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return matched ? true : false;
    }
    return true;
  };

  useEffect(() => {
    const local = LocalStorage.getItem("isDark");
    if (local === null) {
      const detect = detectMode();
      LocalStorage.setItem("isDark", JSON.stringify(detect));
      setIsDark(detect);
    } else {
      const isDark = LocalStorage.getItem("isDark") === "true";
      LocalStorage.setItem("isDark", JSON.stringify(isDark));
      setIsDark(isDark);
    }
  }, []);

  useEffect(() => {
    if (didMountRef.current) {
      LocalStorage.setItem("isDark", JSON.stringify(isDark));
    }
    didMountRef.current = true;
  }, [isDark]);

  return (
    <darkmodeContext.Provider value={{ isDark, toggleDarkmode }}>
      {children}
    </darkmodeContext.Provider>
  );
};
