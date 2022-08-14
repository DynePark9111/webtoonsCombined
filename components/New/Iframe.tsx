import type { NextPage } from "next";
import { IoClose, IoCloseOutline } from "react-icons/io5";
import styles from "../../styles/New/Iframe.module.scss";

type IframeP = {
  link: string;
  setIsIframeOpen: (arg: boolean) => void;
};

const Iframe: NextPage<IframeP> = ({ link, setIsIframeOpen }) => {
  const onClick = () => setIsIframeOpen(false);
  return (
    <div className={styles.Iframe} onClick={onClick} title="">
      <div className={styles.wrapper}>
        <iframe src={link} frameBorder="0" />
      </div>
      <button className={styles.close} onClick={onClick} title="닫기">
        <IoClose />
      </button>
      <div className={styles.rainbow} onClick={onClick} title="닫기" />
    </div>
  );
};

export default Iframe;
