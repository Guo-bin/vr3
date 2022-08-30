import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import classnames from "classnames";
import styles from "./index.module.scss";
const CardLeft = ({ data, classname }) => {
  const { arrow, dottedLine, cardTitle, backgroundImg, picture, finial } = data;
  const router = useRouter();
  console.log(router.query);
  const [currentLan, setCurrentLan] = useState();
  useEffect(() => {
    const userLanguage =
      window.navigator.userLanguage || window.navigator.language;
    if (
      userLanguage.substr(0, 2) == "en" ||
      userLanguage.substr(0, 2) == "En"
    ) {
      setCurrentLan("En");
    } else {
      setCurrentLan("Zh");
    }
  }, []);

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
        src={backgroundImg.src}
        alt=''></img>
      <img className={styles.arrow} src={arrow.src} alt=''></img>
      <div className={styles.picture}>
        <img src={picture.src} alt='' />
      </div>
      {finial || (
        <img className={styles.dottedLine} src={dottedLine.src} alt='' />
      )}
    </div>
  );
};

export default CardLeft;
