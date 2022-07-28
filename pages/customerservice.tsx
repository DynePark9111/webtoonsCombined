import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import Introduction from "../components/Commons/Introduction";
import { FaqArray } from "../data/arrays";
import styles from "../styles/Pages/CustomerService.module.scss";

const CustomerService: NextPage = () => {
  return (
    <div className={styles.CustomerService}>
      <Introduction
        title="고객센터"
        subtitle="무엇을 도와드릴까요?"
        src="/images/account2.svg"
      />
      <section>
        <h2>QNA</h2>
        <Faq />
      </section>
      <section>
        <h3>기타 문의사항은 의견보내기를 이용해 주세요</h3>
        <Link href="/report">문의하러 가기</Link>
      </section>
    </div>
  );
};

export default CustomerService;

const Faq: NextPage = () => {
  const [isOpen, setIsOpen] = useState([-1]);
  function Toggle(id: number) {
    isOpen.includes(id)
      ? setIsOpen([...isOpen].filter((x) => x !== id))
      : setIsOpen([...isOpen, id]);
  }
  return (
    <ul className={styles.Faq}>
      {FaqArray.map((faq) => (
        <li key={faq.id}>
          <Question faq={faq} isOpen={isOpen} Toggle={Toggle} />
          <Answer faq={faq} isOpen={isOpen} />
        </li>
      ))}
    </ul>
  );
};

const Question: NextPage<QuestionProps> = ({ faq, isOpen, Toggle }) => {
  return (
    <div className={styles.Question} onClick={() => Toggle(faq.id)}>
      <div>Q.</div>
      <div className={styles.text}>{faq.question}</div>
      <IoChevronDown
        className={styles.chevron}
        id={isOpen.includes(faq.id) ? styles.down : ""}
      />
    </div>
  );
};

const Answer: NextPage<AnswerProps> = ({ faq, isOpen }) => {
  return (
    <div
      className={styles.Answer}
      id={isOpen.includes(faq.id) ? styles.show : ""}
    >
      <div className={styles.letterA}>A.</div>
      <div>{faq.answer}</div>
    </div>
  );
};

type faq = {
  id: number;
  question: string;
  answer: string;
};

type QuestionProps = {
  faq: faq;
  isOpen: number[];
  Toggle: (id: number) => void;
};

type AnswerProps = {
  faq: faq;
  isOpen: number[];
};
