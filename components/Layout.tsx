import type { NextPage } from "next";
import { ReactNode } from "react";
import Header from "./Header";
import Navbar from "./Navbar";

type T = {
  children: ReactNode;
};

const Layout: NextPage<T> = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
