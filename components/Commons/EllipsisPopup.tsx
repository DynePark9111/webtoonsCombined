import type { NextPage } from "next";
import { useContext } from "react";
import {
  IoBookmarkOutline,
  IoEyeOffOutline,
  IoFlagOutline,
  IoShareSocialOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { AlertContext } from "../../context/alertContext";
import { UserContext } from "../../context/userContext";
import styles from "../../styles/Commons/EllipsisPopup.module.scss";
import { EllipsisButtonP } from "../../types/types";

const EllipsisPopup: NextPage<EllipsisButtonP> = ({ webtoon_id }) => {
  const { addAlert } = useContext(AlertContext);
  const { user, handleBookmark, handleWatchLater, handleLikedWebtoon } =
    useContext(UserContext);
  const isBookmark = user.bookmark?.includes(webtoon_id);
  const isWatchlater = user.watchLater?.includes(webtoon_id);
  const isLikedWebtoon = user.likedWebtoon?.includes(webtoon_id);
  const isGuest = user._id === undefined;
  const needLogin = () => {
    if (isGuest) {
      addAlert("로그인이 필요합니다", "error");
    }
  };

  const onClickBookmark = () => {
    needLogin();
    if (isBookmark && !isGuest) {
      handleBookmark(webtoon_id);
      addAlert("북마크에서 지웠습니다.", "success");
    }
    if (!isBookmark && !isGuest) {
      handleBookmark(webtoon_id);
      addAlert("저장되었습니다.", "success");
    }
  };
  const onClickWatchlater = () => {
    needLogin();
    if (isWatchlater && !isGuest) {
      handleWatchLater(webtoon_id);
      addAlert("나중에 볼 리스트에서 지웠습니다.", "success");
    }
    if (!isWatchlater && !isGuest) {
      handleWatchLater(webtoon_id);
      addAlert("저장되었습니다.", "success");
    }
  };
  const onClickHide = () => {
    needLogin();
    if (!isGuest) {
      handleLikedWebtoon(webtoon_id);
      addAlert("웹툰을 숨깁니다.", "success");
    }
  };
  const onClickAlert = () => {
    addAlert("🚩 under development", "normal");
  };
  return (
    <ul className={styles.EllipsisPopup}>
      <li onClick={() => onClickBookmark()} title="북마크">
        <IoBookmarkOutline />
        <span>북마크{isBookmark ? " 지우기" : "에 추가"}</span>
      </li>
      <li onClick={() => onClickWatchlater()} title="나중에 보기">
        <IoTimeOutline />
        <span>나중에 볼 웹툰에{isWatchlater ? "서 지우기" : " 저장"}</span>
      </li>
      <li onClick={() => onClickAlert()} title="공유">
        <IoShareSocialOutline />
        <span>공유</span>
      </li>
      <hr />
      <li onClick={() => onClickHide()} title="숨기기">
        <IoEyeOffOutline />
        <span>웹툰 숨기기{isLikedWebtoon && " 취소"}</span>
      </li>
      <li onClick={() => onClickAlert()} title="신고">
        <IoFlagOutline />
        <span>신고</span>
      </li>
    </ul>
  );
};

export default EllipsisPopup;
