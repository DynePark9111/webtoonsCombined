import type { NextPage } from "next";
import { useState } from "react";
import { IoCloseSharp, IoSearchOutline } from "react-icons/io5";
import styles from "../../styles/Layout/Searchbox.module.scss";

const Searchbox: NextPage = () => {
  const [value, setValue] = useState("");

  return (
    <div className={styles.Searchbox}>
      <form>
        <div className={styles.searchIcon}>
          <IoSearchOutline />
        </div>
        <input
          type="text"
          placeholder="검색"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div
          className={styles.closeIcon}
          onClick={() => setValue("")}
          title="지우기"
        >
          <IoCloseSharp />
        </div>
      </form>
      <button className={styles.searchBtn} title="검색">
        <IoSearchOutline />
      </button>
    </div>
  );
};

export default Searchbox;
