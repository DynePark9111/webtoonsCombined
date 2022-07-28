import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/Common/Introduction.module.scss";

type IntroductionProps = {
  title: string;
  subtitle?: string;
  subtitle2?: string;
  src?: string;
};

const Introduction: NextPage<IntroductionProps> = ({
  title,
  subtitle,
  subtitle2,
  src,
}) => {
  return (
    <div className={styles.Introduction}>
      <div className={styles.texts}>
        <h3>{title}</h3>
        {subtitle && <h2>{subtitle}</h2>}
        {subtitle2 && <h4>{subtitle2}</h4>}
      </div>
      <div className={styles.icon}>
        {src && <Image src={src} alt={title} layout="fill" />}
      </div>
    </div>
  );
};

export default Introduction;
