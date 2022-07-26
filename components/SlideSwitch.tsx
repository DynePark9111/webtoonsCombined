import type { NextPage } from "next";
import styles from "../styles/SlideSwitch.module.scss";

type SlideSwitchProps = {
  isChecked: boolean;
  toggle: () => void;
};

const SlideSwitch: NextPage<SlideSwitchProps> = ({ isChecked, toggle }) => {
  return (
    <label className={styles.SlideSwitch}>
      <input type="checkbox" checked={isChecked} onChange={() => toggle()} />
      <span className={styles.slider} />
    </label>
  );
};

export default SlideSwitch;
