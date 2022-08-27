import React from "react";
import threeDot from "public/images/icon/threeDot.svg";
import arrow from "public/images/icon/arrow.svg";
import styles from "./index.module.scss";
const Android = () => {
  return (
    <div className={styles.android}>
      <h3 className={styles.title}>允許你的攝影機權限</h3>
      <div className={styles.step}>
        <h4>步驟一：</h4>
        <p>
          點選右上角的 <img src={threeDot.src} alt='' />
          符號。
        </p>
      </div>
      <div className={styles.step}>
        <h4>步驟二：：</h4>
        <p>
          選擇設定 {">"} 進階 {">"} 網站設定 {">"} 攝影機。
        </p>
      </div>
      <div className={styles.step}>
        <h4>步驟三：</h4>
        <p>在已封鎖的網址裡找到該服務網址並允許使用權限。</p>
      </div>
      <div className={styles.step}>
        <h4>步驟四：</h4>
        <p>關閉 Chrome 應用程式並重新掃描 QR Code。</p>
      </div>

      <div className={styles.topSection}>
        <p>從這裡開始！</p>
        <img className={styles.arrow} src={arrow.src} alt='' />
      </div>
    </div>
  );
};

export default Android;
