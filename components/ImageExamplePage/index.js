import React, { useState } from "react";
import { useRouter } from "next/router";
import arrow from "public/images/icon/arrow.svg";
import img from "public/images/bridge.png";
import close from "public/images/icon/viewpointGuidClose.svg";
import leftArrow from "public/images/icon/left_arrow.svg";
import phone from "public/images/icon/phone.svg";
import styles from "./index.module.scss";
const ImageExamplePage = ({ setOpenItem, setBtnIsShow, isBtnShow }) => {
  const router = useRouter();
  const closeHandler = () => {
    setOpenItem(null);
    setBtnIsShow(true);
  };
  const goBackPage = () => {
    router.push("/");
  };
  return (
    <div className={styles.imageExamplePage}>
      {isBtnShow && (
        <div className={styles.close}>
          <img src={close.src} alt='' onClick={closeHandler} />
        </div>
      )}
      {!isBtnShow && (
        <img
          className={styles.leftArrow}
          src={leftArrow.src}
          alt=''
          onClick={goBackPage}
        />
      )}

      <div className={styles.container}>
        <h3 className={styles.title}>
          尋找與照片中一致的位置來發現 3D 娃娃吧！
        </h3>
        <img className={styles.arrow} src={arrow.src} alt='' />
        <div className={styles.imgContainer}>
          <img className={styles.img} src={img.src} alt='' />
          <img className={styles.phone} src={phone.src} alt='' />
        </div>
        {!isBtnShow && (
          <a className={styles.btn} onClick={closeHandler}>
            開始探索
          </a>
        )}
      </div>
    </div>
  );
};

export default ImageExamplePage;
