import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { NavContextProvider } from "../context/navContext";
import AlertContextProvider from "../context/alertContext";
import { DarkmodeContextProvider } from "../context/darkmodeContext";
import { useRouter } from "next/router";
import AuthLayout from "../components/Layout/AuthLayout";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const noLayout = [
    "/auth",
    "/auth/login",
    "/auth/signup",
    "/auth/social",
    "/auth/findpw",
  ];

  if (noLayout.includes(router.asPath)) {
    return (
      <AlertContextProvider>
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      </AlertContextProvider>
    );
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
