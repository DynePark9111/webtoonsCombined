import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Introduction.module.scss";

type IntroductionProps = {
  title: string;
  subtitle: string;
  src: string;
};

const Introduction: NextPage<IntroductionProps> = ({
  title,
  subtitle,
  src,
}) => {
  return (
    <div className={styles.Introduction}>
      <div className={styles.texts}>
        <h3>{title}</h3>
        <h2>{subtitle}</h2>
      </div>
      <div className={styles.icon}>
        <Image src={src} alt={title} layout="fill" />
      </div>
    </div>
  );
};

export default Introduction;
