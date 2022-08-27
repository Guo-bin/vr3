import React from "react";
import phone from "public/images/icon/phone.svg";
import rotateArrow from "public/images/icon/rotateArrow.svg";
import styles from "./index.module.scss";
const Orientation = () => {
  return (
    <div className={styles.orientation}>
      <h3 className={styles.title}>目前尚未提供橫式顯示，請把裝置轉成直式！</h3>
      <img src={phone.src} alt='' />
      <img src={rotateArrow.src} alt='' />
    </div>
  );
};

export default Orientation;
