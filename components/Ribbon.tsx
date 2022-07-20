import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Ribbon.module.scss";
import { RibbonProps } from "../types/types";

const Ribbon: NextPage<RibbonProps> = ({ line1, line2, href }) => {
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
