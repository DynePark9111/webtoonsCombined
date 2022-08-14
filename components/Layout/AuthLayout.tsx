import type { NextPage } from "next";
import { ReactNode } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import styles from "../../styles/Layout/AuthLayout.module.scss";
import Notification from "./Notification";

type T = {
  children: ReactNode;
};

const AuthLayout: NextPage<T> = ({ children }) => {
  const COMPANY = process.env.NEXT_PUBLIC_COMPANY;
  const SITEKEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE;

  return (
    <GoogleReCaptchaProvider reCaptchaKey={SITEKEY as string}>
      <div className={styles.AuthLayout}>
        <h1>{COMPANY}</h1>
        <div>{children}</div>
        <Notification />
      </div>
    </GoogleReCaptchaProvider>
  );
};

export default AuthLayout;
