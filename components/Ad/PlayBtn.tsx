import type { NextPage } from "next";
import { IoPlayCircleOutline, IoStopCircleOutline } from "react-icons/io5";
import styles from "../../styles/Ad/PlayBtn.module.scss";

type PlayBtnProps = {
  isActive: boolean;
  setIsActive: (arg: boolean) => void;
};

const PlayBtn: NextPage<PlayBtnProps> = ({ isActive, setIsActive }) => {
  return (
    <div className={styles.PlayBtn} onClick={() => setIsActive(!isActive)}>
      {isActive ? (
        <IoStopCircleOutline className={styles.stop} />
      ) : (
        <IoPlayCircleOutline className={styles.play} />
      )}
    </div>
  );
};

export default PlayBtn;
