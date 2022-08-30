import React from "react";
import icon from "public/images/icon/languageGuide.svg";
import styles from "./index.module.scss";
const LanguageGuide = ({ setOpenItem, language }) => {
  return (
    <div className={styles.languageGuide} id='LanguageGuide'>
      <img className={styles.icon} src={icon.src} alt='' />
      <p className={styles.title}>{language == "Zh" ? "族語導覽" : "Audio"}</p>
    </div>
  );
};

export default LanguageGuide;
