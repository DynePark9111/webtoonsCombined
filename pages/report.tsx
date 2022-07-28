import axios from "axios";
import type { NextPage } from "next";
import { FormEvent, useContext, useState } from "react";
import Introduction from "../components/Commons/Introduction";
import { AlertContext } from "../context/alertContext";
import styles from "../styles/Pages/Report.module.scss";

const Report: NextPage = () => {
  const URL = process.env.NEXT_PUBLIC_URL;
  const { addAlert } = useContext(AlertContext);
  const [value, setValue] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addAlert("문의 점수중...", "normal");
    try {
      const res = await axios.post(`${URL as string}/report`, value);
      console.log(res);
      addAlert("정상적으로 접수되었습니다.", "success");
    } catch (err) {
      addAlert("문의 접수가 실패했습니다.", "error");
      console.error(err);
    }
  };

  return (
    <div className={styles.Report}>
      <Introduction
        title="의견 보내기"
        subtitle="제안하고 싶은 사항이나 의견을 보내주시면 적극적으로 참고하겠습니다."
        src="/images/message.svg"
      />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={value.name}
          placeholder="귀하의 성함"
          onChange={(e) => setValue({ ...value, name: e.target.value })}
          required
        />
        <input
          type="email"
          name="email"
          value={value.email}
          placeholder="귀하의 이메일 주소"
          onChange={(e) => setValue({ ...value, email: e.target.value })}
          required
        />
        <input
          type="text"
          name="phone"
          value={value.phoneNumber}
          placeholder="귀하의 전화번호"
          onChange={(e) => setValue({ ...value, phoneNumber: e.target.value })}
        />
        <textarea
          placeholder="내용"
          name="message"
          value={value.message}
          onChange={(e) => setValue({ ...value, message: e.target.value })}
          required
        />
        <h5>
          빠른시일 내로 답변드리겠습니다. 문의 접수시 확인 이메일이 보내집니다.
        </h5>
        <div className={styles.check}>
          <input type="checkbox" id="checkbox" required />
          <label htmlFor="checkbox">위 내용을 이해하였습니다.</label>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Report;
