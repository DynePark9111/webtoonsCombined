import type { NextPage } from "next";
import Ribbon from "../components/Ribbon";

const test: NextPage = () => {
  return (
    <div className={"Test"}>
      <Ribbon line1="모든 웹툰은 공식 웹사이트로 연결되어 있습니다" />
    </div>
  );
};

export default test;
