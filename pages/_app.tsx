import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { NavContextProvider } from "../context/navContext";
import AlertContextProvider from "../context/alertContext";
import { DarkmodeContextProvider } from "../context/darkmodeContext";
import AuthLayout from "../components/Layout/AuthLayout";
import UserContextProvider from "../context/userContext";
import { SessionProvider } from "next-auth/react";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
  ...appProps
}: AppProps) {
  const authPath = [
    "/auth",
    "/auth/login",
    "/auth/signup",
    "/auth/social",
    "/auth/findpw",
  ];
  const isAuthPath = authPath.includes(appProps.router.pathname);
  const LayoutComponent = isAuthPath ? AuthLayout : Layout;
  return (
    <SessionProvider session={session}>
      <UserContextProvider>
        <NavContextProvider>
          <AlertContextProvider>
            <DarkmodeContextProvider>
              <LayoutComponent>
                <Component {...pageProps} />
              </LayoutComponent>
            </DarkmodeContextProvider>
          </AlertContextProvider>
        </NavContextProvider>
      </UserContextProvider>
    </SessionProvider>
  );
}

export default MyApp;
