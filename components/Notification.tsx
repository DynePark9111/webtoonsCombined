import type { NextPage } from "next";
import { useContext, useEffect, useReducer, useState } from "react";
import { AlertContext } from "../context/alertContext";
import styles from "../styles/Notification.module.scss";
import { MessageProps } from "../types/types";

const Notification: NextPage = () => {
  const { alerts } = useContext(AlertContext);

  return (
    <div className={styles.Notification}>
      {alerts?.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default Notification;

const Message: NextPage<MessageProps> = ({ message }) => {
  const [exit, setExit] = useState(false);
  const { deleteAlert } = useContext(AlertContext);
  useEffect(() => {
    const timer = setTimeout(() => {
      deleteAlert(message.id);
    }, 6500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message.id]);

  return (
    <div
      className={`${styles.Message} ${styles[message.status]}`}
      id={exit ? styles.exit : ""}
      title="닫기"
      onClick={() => setExit((prev) => !prev)}
    >
      {message.message}
    </div>
  );
};
