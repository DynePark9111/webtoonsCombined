import type { NextPage } from "next";
import styles from "../../styles/Webtoon/Rating.module.scss";
import { webtoonP } from "../../types/types";
import ReplyForm from "../Comments/ReplyForm";
import TopLvComments from "../Comments/TopLvComments";

const Rating: NextPage<webtoonP> = ({ webtoon }) => {
  return (
    <div className={styles.Rating}>
      {/* <Comment /> */}
      <ReplyForm postId={webtoon._id} isTopLevel={true} />
      <TopLvComments parentId={webtoon._id} />
    </div>
  );
};

export default Rating;
