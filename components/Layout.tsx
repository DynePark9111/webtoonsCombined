import type { NextPage } from "next";
import { ReactNode, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import styles from "../styles/Layout.module.scss";

type T = {
  children: ReactNode;
};

const Layout: NextPage<T> = ({ children }) => {
  const [navOpen, isNavOpen] = useState(false);
  return (
    <div className={styles.Layout}>
      <div className={styles.top}>
        <Header navOpen={navOpen} isNavOpen={isNavOpen} />
      </div>
      <div className={styles.main}>
        <Navbar navOpen={navOpen} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
