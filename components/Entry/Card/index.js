import React, { useEffect, useState } from "react";
import arrow from "public/images/icon/arrow.svg";
import { useRouter } from "next/router";
import rectangle1 from "public/images/rectangle.png";
import rectangle2 from "public/images/rectangle2.png";
import dottedLine from "public/images/icon/dottedLine.svg";
import classnames from "classnames";
import styles from "./index.module.scss";
const CardLeft = ({ data, classname, currentLan, final }) => {
  const { cardTitle, picture } = data;
  const router = useRouter();

  return (
    <div
      onClick={() =>
        router.push({ pathname: "/test", query: { language: currentLan } })
      }
      className={classnames({
        [styles.cardLeft]: classname == "left",
        [styles.cardRight]: classname == "right",
      })}>
      <h5 className={styles.cardTitle}>{cardTitle}</h5>
      <img
        className={styles.backgroundImg}
        src={classname == "left" ? rectangle2.src : rectangle1.src}
        alt=''></img>
      <img className={styles.arrow} src={arrow.src} alt=''></img>
      <div className={styles.picture}>
        <img src={picture.src} alt='' />
      </div>
      {final || (
        <img className={styles.dottedLine} src={dottedLine.src} alt='' />
      )}
    </div>
  );
};

export default CardLeft;
