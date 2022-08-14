import type { NextPage } from "next";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { IoCloseSharp, IoSearchOutline } from "react-icons/io5";
import styles from "../../styles/Layout/Searchbox.module.scss";

const Searchbox: NextPage = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.length >= 2) {
      router.push(
        {
          pathname: "/result",
          query: { search_query: search },
        },
        `/result?search_query=${search}`
      );
    } else {
      alert("2자 이상을 입력해 주세요");
    }
  };
  return (
    <div className={styles.Searchbox}>
      <form onSubmit={handleSubmit} id="search">
        <div className={styles.searchIcon}>
          <IoSearchOutline />
        </div>
        <input
          type="text"
          placeholder="검색"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div
          className={styles.closeIcon}
          onClick={() => setSearch("")}
          title="지우기"
        >
          <IoCloseSharp />
        </div>
      </form>
      <button
        className={styles.searchBtn}
        title="검색"
        type="submit"
        form="search"
      >
        <IoSearchOutline />
      </button>
    </div>
  );
};

export default Searchbox;
