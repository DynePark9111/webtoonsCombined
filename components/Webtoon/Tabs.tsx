import type { NextPage } from "next";
import styles from "../../styles/Webtoon/Tabs.module.scss";

type TabsP = {
  tab: string;
  setTab: (arg: string) => void;
};

const Tabs: NextPage<TabsP> = ({ tab, setTab }) => {
  const tabArray = ["평점", "비슷한 작품"];
  return (
    <div className={styles.Tabs}>
      {tabArray.map((i) => (
        <div
          className={styles.tab}
          key={i}
          id={tab === i ? styles.selected : ""}
          onClick={() => setTab(i)}
        >
          {i}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
