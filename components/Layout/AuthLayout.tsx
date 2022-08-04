import type { NextPage } from "next";
import { ReactNode } from "react";
import styles from "../../styles/Layout/AuthLayout.module.scss";
import Notification from "./Notification";

type T = {
  children: ReactNode;
};

const AuthLayout: NextPage<T> = ({ children }) => {
  const COMPANY = process.env.NEXT_PUBLIC_COMPANY || "WebtoonsCombined";
  return (
    <div className={styles.AuthLayout}>
      <h1>{COMPANY}</h1>
      <div>{children}</div>
      <Notification />
    </div>
  );
};

export default AuthLayout;
