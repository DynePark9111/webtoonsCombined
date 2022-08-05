import type { NextPage } from "next";
import { useContext } from "react";
import {
  IoBookmarkOutline,
  IoEyeOffOutline,
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
  const { user, handleBookmark, handleWatchLater, handleLikedWebtoon } =
    useContext(UserContext);
  const includeBookmark = user.bookmark?.includes(webtoon_id);
  const includeWatchlater = user.watchLater?.includes(webtoon_id);
  const includeLikedWebtoon = user.likedWebtoon?.includes(webtoon_id);

  const needLogin = () => {
    if (user._id === undefined) {
      addAlert("로그인이 필요합니다", "error");
    }
  };

  const onClickBookmark = () => {
    needLogin();
    if (includeBookmark) {
      handleBookmark(webtoon_id);
      addAlert("북마크에서 지웠습니다.", "success");
    } else {
      handleBookmark(webtoon_id);
      addAlert("저장되었습니다.", "success");
    }
  };
  const onClickWatchlater = () => {
    needLogin();
    if (includeWatchlater) {
      handleWatchLater(webtoon_id);
      addAlert("나중에 볼 리스트에서 지웠습니다.", "success");
    } else {
      handleWatchLater(webtoon_id);
      addAlert("저장되었습니다.", "success");
    }
  };
  const onClickHide = () => {
    needLogin();
    handleLikedWebtoon(webtoon_id);
    addAlert("웹툰을 숨깁니다.", "success");
  };
  const onClickAlert = () => {
    addAlert("🚩 under development", "normal");
  };
  return (
    <ul className={styles.EllipsisPopup}>
      <li onClick={() => onClickBookmark()} title="북마크">
        <IoBookmarkOutline />
        <span>북마크{includeBookmark ? " 지우기" : "에 추가"}</span>
      </li>
      <li onClick={() => onClickWatchlater()} title="나중에 보기">
        <IoTimeOutline />
        <span>나중에 볼 웹툰에{includeWatchlater ? "서 지우기" : " 저장"}</span>
      </li>
      <li onClick={() => onClickAlert()} title="공유">
        <IoShareSocialOutline />
        <span>공유</span>
      </li>
      <hr />
      <li onClick={() => onClickHide()} title="숨기기">
        <IoEyeOffOutline />
        <span>웹툰 숨기기{includeLikedWebtoon && " 취소"}</span>
      </li>
      <li onClick={() => onClickAlert()} title="신고">
        <IoFlagOutline />
        <span>신고</span>
      </li>
    </ul>
  );
};

export default EllipsisPopup;
