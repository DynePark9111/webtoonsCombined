import { NextPage } from "next";
import { useState } from "react";
import Filter from "../components/Filter";
import FilterSlideStyle from "../components/FilterSlideStyle";
import { platformFilter } from "../data/arrays";

const Test: NextPage = () => {
  const [platform, setPlatform] = useState(["전체"]);
  const [platform2, setPlatform2] = useState(1);
  return (
    <div>
      <Filter
        array={platformFilter}
        selected={platform}
        setSelected={setPlatform}
      />
      <FilterSlideStyle
        array={platformFilter}
        selected={platform2}
        setSelected={setPlatform2}
      />
    </div>
  );
};

export default Test;
