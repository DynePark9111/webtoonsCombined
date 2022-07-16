import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Ribbon.module.scss";

type props = {
  line1: string;
  line2?: string;
  href?: string;
};

const Ribbon: NextPage<props> = ({ line1, line2, href }) => {
  return (
    <div className={styles.Ribbon}>
      <div className={styles.wrapper}>
        <span className={styles.title}>{line1}</span>
        {href && (
          <Link href={href} className={styles.link}>
            {line2}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Ribbon;
