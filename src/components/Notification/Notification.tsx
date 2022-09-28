import { ReactNode, useEffect, useState } from "react";
import style from "./notification.module.css";
import { MdNotificationsActive, MdClose } from "react-icons/md";

interface INotification {
  duration?: number;
  text: string;
  icon?: ReactNode;
  visible?: boolean;
}

export const Notification = ({
  duration = 0,
  icon = <MdNotificationsActive size={20} />,
  text,
  visible = false,
}: INotification) => {
  const [isVisible, setIsVisbile] = useState<boolean>(false);

  useEffect(() => {
    setIsVisbile(visible);
  }, [visible]);

  const hanldeClose = () => {
    setIsVisbile(false);
  };

  useEffect(() => {
    if (isVisible)
      setTimeout(() => {
        setIsVisbile(false);
      }, Number(`${duration}000`));
  }, [isVisible]);

  return (
    <div
      className={
        isVisible ? style.notificationShow : style.notificationContainer
      }
    >
      <div className={style.icon}>{icon}</div>
      <div>{text}</div>
      <button className={style.closeBtn} onClick={hanldeClose}>
        <MdClose size={18} />
      </button>
    </div>
  );
};
