import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { NavContextProvider } from "../context/navContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NavContextProvider>
  );
}

export default MyApp;
