import type { NextPage } from "next";
import { IoFilterOutline } from "react-icons/io5";
import { FilterArray } from "../../data/arrays";
import styles from "../../styles/Commons/FilterYoutubeStyle.module.scss";
import { FilterGroupProps, FilterYoutubeStyleProps } from "../../types/types";

const FilterYoutubeStyle: NextPage<FilterYoutubeStyleProps> = ({
  isOpen,
  setIsOpen,
  filterCategory,
  setFilterCategory,
}) => {
  return (
    <div className={styles.FilterYoutubeStyle}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        title={isOpen ? "검색 필터 닫기" : "검색 필터 열기"}
      >
        <IoFilterOutline />
        <span>필터</span>
      </button>
      <div className={styles.filterGroups}>
        {FilterArray.map((item) => (
          <FilterGroup
            key={item.id}
            title={item.title}
            category={item.category}
            options={item.options}
            filterCategory={filterCategory}
            setFilterCategory={setFilterCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterYoutubeStyle;

const FilterGroup: NextPage<FilterGroupProps> = ({
  title,
  category,
  options,
  filterCategory,
  setFilterCategory,
}) => {
  return (
    <div className={styles.FilterGroup}>
      <h4>{title}</h4>
      <ul>
        {options.map((option) => (
          <li
            key={option}
            id={filterCategory[category] === option ? styles.selected : ""}
            onClick={() =>
              setFilterCategory({ ...filterCategory, [category]: option })
            }
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};
