import type { NextPage } from "next";
import { useContext } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { UserContext } from "../../context/userContext";
import styles from "../../styles/Layout/LogoutBtn.module.scss";
import { signOut } from "next-auth/react";

const LogoutBtn: NextPage = () => {
  const { logout } = useContext(UserContext);
  return (
    <button
      className={styles.LogoutBtn}
      onClick={() => {
        logout();
        signOut();
      }}
    >
      <IoPersonCircleOutline />
      <span>로그아웃</span>
    </button>
  );
};

export default LogoutBtn;
