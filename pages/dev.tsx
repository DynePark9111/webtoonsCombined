import type { NextPage } from "next";
import Image from "next/image";
import Introduction from "../components/Commons/Introduction";
import styles from "../styles/Pages/Dev.module.scss";

const Dev: NextPage = () => {
  const COMPANY = process.env.NEXT_PUBLIC_COMPANY;

  return (
    <div className={styles.Dev}>
      <Introduction
        title="개발자"
        subtitle={`${COMPANY} Dev Log`}
        subtitle2="last updated: 2022-07-22"
      />
      <section>
        <h2>Prototype</h2>
        <div className={styles.diagram1}>
          <Image src="/diagram/type1.png" layout="fill" alt="chart1" />
        </div>
      </section>
      <section>
        <h2>Current</h2>
        <div className={styles.diagram2}>
          <Image src="/diagram/type2.png" layout="fill" alt="chart1" />
        </div>
      </section>
    </div>
  );
};

export default Dev;
