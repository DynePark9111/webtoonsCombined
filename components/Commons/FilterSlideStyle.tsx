import type { NextPage } from "next";
import styles from "../../styles/Commons/FilterSlideStyle.module.scss";
import { FilterSlideStyleProps } from "../../types/types";

const FilterSlideStyle: NextPage<FilterSlideStyleProps> = ({
  array,
  selected,
  setSelected,
}) => {
  const width = 8;
  return (
    <div
      className={styles.FilterSlideStyle}
      style={{ width: `${width * array.length}em` }}
    >
      <ul className={styles.wrapper}>
        {array.map((item, i) => {
          return (
            <li
              key={item.id}
              onClick={() => setSelected(i)}
              id={selected === i ? styles.selected : ""}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
      <div style={{ transform: `translate(${width * selected}em)` }}></div>
    </div>
  );
};

export default FilterSlideStyle;
