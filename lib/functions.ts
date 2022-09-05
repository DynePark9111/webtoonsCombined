import axios from "axios";

export const capitalize = (word: string | undefined | string[]) => {
  if (typeof word === "string") {
    return word[0].toUpperCase() + word.slice(1);
  }
  return undefined;
};

export const randomID = Math.random().toString();

//auth
export const validateUsername = (username: string) => {
  return /^[A-Za-z0-9]{3,16}$/.test(username);
};

export const validateEmail = (email: string) => {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

export const validatePassword = (password: string) => {
  return /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/.test(
    password
  );
};

export const fetcherInfinite = async (url: string) => {
  const res = await axios.get(url);
  return res.data;
};
