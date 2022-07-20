import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../../styles/WebtoonDetail.module.scss";

const WebtoonDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.WebtoonDetail}>
      <h1>WebtoonDetail</h1>
      <h1>{id}</h1>
    </div>
  );
};

export default WebtoonDetail;
