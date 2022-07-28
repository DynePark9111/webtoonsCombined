import type { NextPage } from "next";
import Link from "next/link";
import styles from "../../styles/Common/Ribbon.module.scss";
import { RibbonProps } from "../../types/types";

const Ribbon: NextPage<RibbonProps> = ({ line1, line2, href }) => {
  return (
    <div className={styles.Ribbon}>
      <div className={styles.wrapper}>
        <div className={styles.title}>{line1}</div>
        {href && (
          <Link href={href} className={styles.link}>
            <div className={styles.link} title="바로가기">
              {line2}
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Ribbon;
