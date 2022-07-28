import type { NextPage } from "next";
import { useContext } from "react";
import { IoFlagOutline } from "react-icons/io5";
import { AlertContext } from "../../context/alertContext";
import styles from "../../styles/CommentEllipsis.module.scss";

const CommentEllipsis: NextPage = () => {
  const { addAlert } = useContext(AlertContext);

  return (
    <ul className={styles.CommentEllipsis}>
      <li onClick={() => addAlert("신고 접수 완료", "success")}>
        <IoFlagOutline />
        <span>신고</span>
      </li>
    </ul>
  );
};

export default CommentEllipsis;
