import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { NavContextProvider } from "../context/navContext";
import AlertContextProvider from "../context/alertContext";
import { DarkmodeContextProvider } from "../context/darkmodeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavContextProvider>
      <AlertContextProvider>
        <DarkmodeContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </DarkmodeContextProvider>
      </AlertContextProvider>
    </NavContextProvider>
  );
}

export default MyApp;
