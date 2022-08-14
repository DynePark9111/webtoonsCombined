import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { FormEvent, useCallback, useContext, useState } from "react";
import FormInput from "../../components/Commons/FormInput";
import { AlertContext } from "../../context/alertContext";
import {
  validateEmail,
  validatePassword,
  validateUsername,
} from "../../lib/functions";
import styles from "../../styles/Pages/authpages/Signup.module.scss";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const Signup: NextPage = () => {
  const URL = process.env.NEXT_PUBLIC_URL;
  const { addAlert } = useContext(AlertContext);
  const router = useRouter();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const signupArray = [
    {
      id: 0,
      name: "username",
      type: "text",
      placeholder: "username",
      errorMessage: "아이디는 길이는 3~16, 특수문자를 포함할 수 없습니다.",
      label: "아이디",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "username@gmail.com",
      errorMessage: "올바른 이메일을 입력해 주세요.",
      label: "이메일",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "password",
      errorMessage:
        "비밀번호 길이는 8~20, 문자, 숫자, 특수문자가 포함되어야 합니다.",
      label: "비밀번호",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "confirmPassword",
      type: "password",
      placeholder: "password",
      errorMessage: "비밀번호가 일치하지 않습니다.",
      label: "비밀번호 확인",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSumitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!executeRecaptcha) {
      return addAlert("recaptcha not yet available!", "error");
    }
    executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
      signup(gReCaptchaToken);
    });
  };

  const signup = async (gRecaptchaToken: string) => {
    const res = await axios.post(`${URL}/auth/signup`, {
      ...values,
      gRecaptchaToken,
    });
    if (res.status === 201) {
      addAlert("가입 성공!", "success");
      router.push("/auth/login");
    } else {
      addAlert("가입 실패!", "error");
    }
  };

  const disabled = () => {
    return !(
      validateUsername(values.username) &&
      validateEmail(values.email) &&
      validatePassword(values.password) &&
      values.password === values.confirmPassword
    );
  };

  return (
    <div className={styles.Signup}>
      <form onSubmit={handleSumitForm}>
        {signupArray.map((input) => (
          <FormInput
            key={input.id}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            errorMessage={input.errorMessage}
            label={input.label}
            pattern={input.pattern}
            required={input.required}
            values={values}
            setValues={setValues}
          />
        ))}

        <button type="submit" disabled={disabled()}>
          가입
        </button>
      </form>
    </div>
  );
};

export default Signup;
