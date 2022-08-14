import type { NextPage } from "next";
import { useRouter } from "next/router";
import { IoArrowBackOutline } from "react-icons/io5";
import styles from "../../styles/Webtoon/Icons.module.scss";
import EllipsisButton from "../Commons/EllipsisButton";

type IconsP = {
  webtoon_id: string;
};

const Icons: NextPage<IconsP> = ({ webtoon_id }) => {
  const router = useRouter();

  return (
    <nav className={styles.Icons}>
      <EllipsisButton webtoon_id={webtoon_id} />
      <div
        className={styles.backArrow}
        title="돌아가기"
        onClick={() => router.back()}
      >
        <IoArrowBackOutline />
      </div>
    </nav>
  );
};

export default Icons;
