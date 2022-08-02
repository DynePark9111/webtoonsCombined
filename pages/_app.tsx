import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { NavContextProvider } from "../context/navContext";
import AlertContextProvider from "../context/alertContext";
import { DarkmodeContextProvider } from "../context/darkmodeContext";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const noLayout = ["/auth/login", "auth/register"];

  if (noLayout.includes(router.asPath)) {
    return <Component {...pageProps} />;
  }
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
