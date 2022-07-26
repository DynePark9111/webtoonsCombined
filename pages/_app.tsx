import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { NavContextProvider } from "../context/navContext";
import AlertContextProvider from "../context/alertContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavContextProvider>
      <AlertContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AlertContextProvider>
    </NavContextProvider>
  );
}

export default MyApp;
