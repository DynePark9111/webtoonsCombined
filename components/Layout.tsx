import type { NextPage } from "next";
import { ReactNode, useContext } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import styles from "../styles/Layout.module.scss";
import Notification from "./Notification";
import { darkmodeContext } from "../context/darkmodeContext";

type T = {
  children: ReactNode;
};

const Layout: NextPage<T> = ({ children }) => {
  const { isDark } = useContext(darkmodeContext);
  return (
    <div className={styles.Layout} data-theme={isDark ? "dark" : "light"}>
      <div className={styles.top}>
        <Header />
      </div>
      <div className={styles.main}>
        <Navbar />
        {children}
      </div>
      <Notification />
    </div>
  );
};

export default Layout;
