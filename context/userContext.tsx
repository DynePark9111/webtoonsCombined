import { NextPage } from "next";
import React, { useReducer, createContext } from "react";
import { childrenProps } from "../types/types";

type userType = {
  userId: string;
  username: string;
  email: string;
  bookmark: string[];
};

type LoginAction = {
  type: "LOGIN";
  payload: userType;
};

type LogoutAction = {
  type: "LOGOUT";
};

type AuthAction = LoginAction | LogoutAction;

const defaultUser = {
  userId: "",
  username: "",
  email: "",
  bookmark: [],
};

function userReducer(state: userType, action: AuthAction) {
  switch (action.type) {
    case "LOGIN": {
      return {
        userId: action.payload.userId,
        username: action.payload.username,
        email: action.payload.email,
        bookmark: action.payload.bookmark,
      };
    }
    case "LOGOUT": {
      return defaultUser;
    }
  }
}

//Context
type ContextType = {
  user: userType;
  login: (
    userId: string,
    username: string,
    email: string,
    bookmark: string[]
  ) => void;
  logout: () => void;
};

export const UserContext = createContext<ContextType>({
  user: defaultUser,
  login: () => {},
  logout: () => {},
});

const UserContextProvider: NextPage<childrenProps> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, defaultUser);

  const login = (
    userId: string,
    username: string,
    email: string,
    bookmark: string[]
  ): void => {
    dispatch({
      type: "LOGIN",
      payload: {
        userId,
        username,
        email,
        bookmark,
      },
    });
  };

  const logout = (): void => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <UserContext.Provider
      value={{
        user: state,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
