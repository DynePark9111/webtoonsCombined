import type { NextPage } from "next";
import { useContext } from "react";
import {
  IoBookmarkOutline,
  IoFlagOutline,
  IoShareSocialOutline,
  IoTimeOutline,
  IoTrashOutline,
} from "react-icons/io5";
import { AlertContext } from "../../context/alertContext";
import { UserContext } from "../../context/userContext";
import styles from "../../styles/Commons/EllipsisPopup.module.scss";
import { EllipsisButtonP } from "../../types/types";

const EllipsisPopup: NextPage<EllipsisButtonP> = ({ webtoon_id }) => {
  const { addAlert } = useContext(AlertContext);
  const { user, handleBookmark } = useContext(UserContext);
  const bookmarkExist = user.bookmark?.includes(webtoon_id);

  const handlebookmark = () => {
    if (user._id === undefined) {
      addAlert("로그인이 필요합니다", "error");
    }
    if (bookmarkExist) {
      handleBookmark(webtoon_id);
      addAlert("북마크에서 지웠습니다.", "success");
    } else {
      handleBookmark(webtoon_id);
      addAlert("저장되었습니다.", "success");
    }
  };
  return (
    <ul className={styles.EllipsisPopup}>
      <li onClick={() => handlebookmark()}>
        <IoBookmarkOutline />
        <span>북마크{bookmarkExist ? " 지우기" : "에 추가"}</span>
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
      <li onClick={() => addAlert("신고 접수 완료", "success")}>
        <IoFlagOutline />
        <span>신고</span>
      </li>
    </ul>
  );
};

export default EllipsisPopup;
