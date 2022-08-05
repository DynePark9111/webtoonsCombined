import axios from "axios";
import type { NextPage } from "next";
import Link from "next/link";
import { useContext, useState } from "react";
import FormInput from "../../components/Commons/FormInput";
import styles from "../../styles/Pages/auth/Login.module.scss";
import { loginArray } from "../../data/arrays";
import { AlertContext } from "../../context/alertContext";
import { useRouter } from "next/router";
import { validateEmail, validatePassword } from "../../lib/functions";
import { UserContext } from "../../context/userContext";

const Login: NextPage = () => {
  const URL = process.env.NEXT_PUBLIC_URL || "http://localhost:3001";
  const { addAlert } = useContext(AlertContext);
  const { login } = useContext(UserContext);

  const router = useRouter();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const disabled = () => {
    return !(validateEmail(values.email) && validatePassword(values.password));
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`${URL}/auth/login`, values, {
        withCredentials: true,
      });
      if (res.status === 200) {
        const { _id, username, email, bookmark } = res.data;
        addAlert(`안녕하세요 ${username}님`, "success");
        login(_id, username, email, bookmark);
        router.push("/");
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        addAlert(err.message, "error");
      } else {
        console.log("unexpected Error: ", err);
      }
    }
  };

  return (
    <div className={styles.Login}>
      <form onSubmit={(e) => e.preventDefault()}>
        {loginArray.map((input) => (
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
        <Link href="/auth/findpw">비밀번호 찾기</Link>
        <button
          type="submit"
          onClick={() => handleSubmit()}
          disabled={disabled()}
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
