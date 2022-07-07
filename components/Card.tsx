import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Card.module.scss";

const Card: NextPage = () => {
  return (
    <div className={styles.Card}>
      <img
        alt="img"
        src="https://noonoo-images.studiouniversal.net/info/tv/197067/ojSRH9af35TQXBJtk8WedJScRDc.jpg"
      />
      <div className={styles.title}>대충 제목 들어가는곳</div>
      <div className={styles.episode}>1화 : 에피소드 제목</div>
      <div className={styles.platform}>플랫폼</div>
    </div>
  );
};

export default Card;
