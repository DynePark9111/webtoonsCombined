import type { NextPage } from "next";
import { IoFilterOutline } from "react-icons/io5";
import { Filter2Array } from "../../data/arrays";
import styles from "../../styles/Commons/FilterYoutubeStyle.module.scss";

type filterCategoryT = {
  uploaded: string;
  platform: string;
  genre: string;
  day: string;
  orderBy: string;
  page: number;
};

type FilterYoutubeStyleProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  filterCategory: filterCategoryT;
  setFilterCategory: (arg: filterCategoryT) => void;
};

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
        {Filter2Array.map((item) => (
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

type FilterGroupProps = {
  title: string;
  category: string;
  options: string[];
  filterCategory: any;
  setFilterCategory: (arg: filterCategoryT) => void;
};

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