import type { NextPage } from "next";
import styles from "../styles/Filter.module.scss";
import { FilterProps } from "../types/types";

const Filter: NextPage<FilterProps> = ({ array, selected, setSelected }) => {
  function toggleButton(item: string) {
    selected.includes(item)
      ? setSelected([...selected, item].filter((x) => x !== item))
      : setSelected([...selected, item].filter((x) => x !== "전체"));
  }
  selected.length === 0 && setSelected(["전체"]);

  return (
    <ul className={styles.Filter}>
      <li
        id={selected.includes("전체") ? styles.selected : ""}
        onClick={() => setSelected(["전체"])}
      >
        전체
      </li>
      {array.map((item) => (
        <li
          key={item.id}
          id={selected.includes(item.name) ? styles.selected : ""}
          onClick={() => toggleButton(item.name)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default Filter;
