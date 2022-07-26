import type { NextPage } from "next";
import { useContext } from "react";
import {
  IoBookmarkOutline,
  IoFlagOutline,
  IoShareSocialOutline,
  IoTimeOutline,
  IoTrashOutline,
} from "react-icons/io5";
import { AlertContext } from "../context/alertContext";
import styles from "../styles/EllipsisPopup.module.scss";

const EllipsisPopup: NextPage = () => {
  const { addAlert } = useContext(AlertContext);

  return (
    <ul className={styles.EllipsisPopup}>
      <li onClick={() => addAlert("북마크에 추가.", "success")}>
        <IoBookmarkOutline />
        <span>북마크에 추가</span>
      </li>
      <li onClick={() => addAlert("나중에 볼 웹툰에 저장.", "success")}>
        <IoTimeOutline />
        <span>나중에 볼 웹툰에 저장</span>
      </li>
      <li onClick={() => alert("공유")}>
        <IoShareSocialOutline />
        <span>공유</span>
      </li>
      <hr />
      <li onClick={() => addAlert("웹툰 추천 안함.", "success")}>
        <IoTrashOutline />
        <span>웹툰 추천 안함</span>
      </li>
      <li onClick={() => addAlert("신고 접수", "success")}>
        <IoFlagOutline />
        <span>신고</span>
      </li>
    </ul>
  );
};

export default EllipsisPopup;
