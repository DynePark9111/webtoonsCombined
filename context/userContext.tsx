import axios from "axios";
import { NextPage } from "next";
import React, { useReducer, createContext } from "react";
import { AuthAction, UserContextType, userType } from "../types/contextTypes";
import { childrenProps } from "../types/types";

const defaultUser = {
  _id: undefined,
  username: undefined,
  email: undefined,
  bookmark: undefined,
  watchLater: undefined,
  likedWebtoon: undefined,
};

function userReducer(state: userType, action: AuthAction) {
  switch (action.type) {
    case "LOGIN": {
      return {
        _id: action.payload._id,
        username: action.payload.username,
        email: action.payload.email,
        bookmark: action.payload.bookmark,
        watchLater: action.payload.watchLater,
        likedWebtoon: action.payload.likedWebtoon,
      };
    }
    case "LOGOUT": {
      return defaultUser;
    }
    case "PUT_BOOKMARK": {
      const bookmark = action.payload.bookmark;
      return { ...state, bookmark };
    }
    case "PUT_WATCHLATER": {
      const watchLater = action.payload.watchLater;
      return { ...state, watchLater };
    }
    case "PUT_LIKEDWEBTOON": {
      const likedWebtoon = action.payload.likedWebtoon;
      return { ...state, likedWebtoon };
    }
  }
}

//Context
export const UserContext = createContext<UserContextType>({
  user: defaultUser,
  login: () => {},
  logout: () => {},
  checkUser: () => {},
  handleBookmark: () => {},
  handleWatchLater: () => {},
  handleLikedWebtoon: () => {},
});

const UserContextProvider: NextPage<childrenProps> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, defaultUser);
  const URL = process.env.NEXT_PUBLIC_URL;

  const login = (
    _id: string,
    username: string,
    email: string,
    bookmark: string[],
    watchLater: string[],
    likedWebtoon: string[]
  ) => {
    dispatch({
      type: "LOGIN",
      payload: {
        _id,
        username,
        email,
        bookmark,
        watchLater,
        likedWebtoon,
      },
    });
  };

  const logout = async () => {
    try {
      await axios.get(`${URL}/auth/logout`, { withCredentials: true });
      dispatch({ type: "LOGOUT" });
    } catch (err) {
      console.log(err);
    }
  };

  const checkUser = async () => {
    try {
      const res = await axios.get(`${URL}/auth/check`, {
        withCredentials: true,
      });
      const { _id, username, email, bookmark, watchLater, likedWebtoon } =
        res.data;
      login(_id, username, email, bookmark, watchLater, likedWebtoon);
    } catch (err) {
      console.log(err);
      logout();
    }
  };

  const handleBookmark = async (bookmark: string) => {
    try {
      const res = await axios.patch(
        `${URL}/user/bookmark`,
        { bookmark },
        { withCredentials: true }
      );
      const newItem = res.data.bookmark;
      dispatch({ type: "PUT_BOOKMARK", payload: { bookmark: newItem } });
    } catch (err) {
      console.log(err);
    }
  };

  const handleWatchLater = async (watchLater: string) => {
    try {
      const res = await axios.patch(
        `${URL}/user/watchlater`,
        { watchLater },
        { withCredentials: true }
      );
      const newItem = res.data.watchLater;
      dispatch({
        type: "PUT_WATCHLATER",
        payload: { watchLater: newItem },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleLikedWebtoon = async (likedWebtoon: string) => {
    try {
      const res = await axios.patch(
        `${URL}/user/liked`,
        { likedWebtoon },
        { withCredentials: true }
      );
      const newItem = res.data.likedWebtoon;
      dispatch({
        type: "PUT_LIKEDWEBTOON",
        payload: { likedWebtoon: newItem },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user: state,
        login,
        logout,
        checkUser,
        handleBookmark,
        handleWatchLater,
        handleLikedWebtoon,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
