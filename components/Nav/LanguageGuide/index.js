import React from "react";
import icon from "public/images/icon/languageGuide.svg";
import styles from "./index.module.scss";
const LanguageGuide = ({ setOpenItem }) => {
  return (
    <div className={styles.languageGuide} id='LanguageGuide'>
      <img className={styles.icon} src={icon.src} alt='' />
      <p className={styles.title}>族語導覽</p>
    </div>
  );
};

export default LanguageGuide;
