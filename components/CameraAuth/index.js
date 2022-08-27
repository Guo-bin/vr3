import React from "react";
import phoneCma from "public/images/icon/phoneCma.svg";
import styles from "./index.module.scss";
const CameraAuth = () => {
  return (
    <div className={styles.cameraAuth}>
      <img src={phoneCma.src} alt='' />
      <p>
        此 AR 服務需要開啟攝影機權限，若您按到不允許，請重新整理網頁並允許權限
      </p>
    </div>
  );
};

export default CameraAuth;
