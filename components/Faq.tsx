import type { NextPage } from "next";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { FaqArray } from "../data/arrays";
import styles from "../styles/Faq.module.scss";

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

export default Faq;

const Question: NextPage<QuestionProps> = ({ faq, isOpen, Toggle }) => {
  return (
    <div className={styles.question} onClick={() => Toggle(faq.id)}>
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
      className={styles.answer}
      id={isOpen.includes(faq.id) ? styles.show : ""}
    >
      <div className={styles.A}>A.</div>
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
