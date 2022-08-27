import React from "react";
import arrow from "public/images/icon/arrow.svg";
import img from "public/images/bridge.png";
import leftArrow from "public/images/icon/left_arrow.svg";
import phone from "public/images/icon/phone.svg";
import styles from "./index.module.scss";
const ImageExamplePage = ({ setOpenItem }) => {
  const closeHandler = () => {
    setOpenItem(null);
  };

  return (
    <div className={styles.imageExamplePage}>
      <img
        onClick={closeHandler}
        className={styles.leftArrow}
        src={leftArrow.src}
        alt=''
      />
      <div className={styles.container}>
        <h3 className={styles.title}>
          尋找與照片中一致的位置來發現 3D 娃娃吧！
        </h3>
        <img className={styles.arrow} src={arrow.src} alt='' />
        <div className={styles.imgContainer}>
          <img className={styles.img} src={img.src} alt='' />
          <img className={styles.phone} src={phone.src} alt='' />
        </div>
        <button className={styles.btn} onClick={closeHandler}>
          開始探索
        </button>
      </div>
    </div>
  );
};

export default ImageExamplePage;
