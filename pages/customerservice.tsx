import type { NextPage } from "next";
import Link from "next/link";
import Faq from "../components/Faq";
import Introduction from "../components/Introduction";
import styles from "../styles/CustomerService.module.scss";

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
