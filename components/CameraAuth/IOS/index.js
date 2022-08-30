import React from "react";
import phoneCma from "public/images/icon/phoneCma.svg";
import styles from "./index.module.scss";
const IOS = ({ language }) => {
  return (
    <div className={styles.ios}>
      <img src={phoneCma.src} alt='' />
      <p>
        {language == "Zh"
          ? "此 AR 服務需要開啟攝影機權限，若您按到不允許，請重新整理網頁並允許權限"
          : "This AR service need to use your camera for scanning. Please reload this page and allow the access."}
      </p>
    </div>
  );
};

export default IOS;
