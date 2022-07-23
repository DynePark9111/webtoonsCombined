import type { NextPage } from "next";
import {
  IoBookmarkOutline,
  IoFlagOutline,
  IoShareSocialOutline,
  IoTimeOutline,
  IoTrashOutline,
} from "react-icons/io5";
import styles from "../styles/EllipsisPopup.module.scss";

const EllipsisPopup: NextPage = () => {
  return (
    <ul className={styles.EllipsisPopup}>
      <li onClick={() => alert("북마크에 추가")}>
        <IoBookmarkOutline />
        <span>북마크에 추가</span>
      </li>
      <li onClick={() => alert("나중에 볼 웹툰에 저장")}>
        <IoTimeOutline />
        <span>나중에 볼 웹툰에 저장</span>
      </li>
      <li onClick={() => alert("공유")}>
        <IoShareSocialOutline />
        <span>공유</span>
      </li>
      <hr />
      <li onClick={() => alert("웹툰 추천 안함")}>
        <IoTrashOutline />
        <span>웹툰 추천 안함</span>
      </li>
      <li onClick={() => alert("신고")}>
        <IoFlagOutline />
        <span>신고</span>
      </li>
    </ul>
  );
};

export default EllipsisPopup;
