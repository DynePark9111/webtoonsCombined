import type { NextPage } from "next";
import { ReactNode, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import styles from "../styles/Layout.module.scss";

type T = {
  children: ReactNode;
};

const Layout: NextPage<T> = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <div className={styles.top}>
        <Header />
      </div>
      <div className={styles.main}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
