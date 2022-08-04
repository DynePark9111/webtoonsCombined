import axios from "axios";
import { NextPage } from "next";
import React, { useReducer, createContext } from "react";
import { childrenProps } from "../types/types";

type userType = {
  _id: string | undefined;
  username: string | undefined;
  email: string | undefined;
  bookmark: string[] | undefined;
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
  _id: undefined,
  username: undefined,
  email: undefined,
  bookmark: undefined,
};

function userReducer(state: userType, action: AuthAction) {
  switch (action.type) {
    case "LOGIN": {
      return {
        _id: action.payload._id,
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
    _id: string,
    username: string,
    email: string,
    bookmark: string[]
  ) => void;
  logout: () => void;
  checkUser: () => void;
};

export const UserContext = createContext<ContextType>({
  user: defaultUser,
  login: () => {},
  logout: () => {},
  checkUser: () => {},
});

const UserContextProvider: NextPage<childrenProps> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, defaultUser);
  const URL = process.env.NEXT_PUBLIC_URL || "http://localhost:3001";

  const login = (
    _id: string,
    username: string,
    email: string,
    bookmark: string[]
  ) => {
    dispatch({
      type: "LOGIN",
      payload: {
        _id,
        username,
        email,
        bookmark,
      },
    });
  };

  const logout = async () => {
    try {
      await axios.get(`${URL}/logout`, { withCredentials: true });
      dispatch({ type: "LOGOUT" });
    } catch (err) {
      console.log(err);
    }
  };

  const checkUser = async () => {
    try {
      const res = await axios.get(`${URL}/check`, { withCredentials: true });
      const { _id, username, email, bookmark } = res.data;
      login(_id, username, email, bookmark);
    } catch (err) {
      console.log(err);
      logout();
    }
  };

  return (
    <UserContext.Provider
      value={{
        user: state,
        login,
        logout,
        checkUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
