import React, { useState } from "react";
import icon from "public/images/icon/changeLanguage.svg";
import classnames from "classnames";
import styles from "./index.module.scss";
const ChangeLanguage = ({ setOpenItem, openItem, setLanguage, language }) => {
  return (
    <div className={styles.changeLanguage} id='ChangeLanguage'>
      <img className={styles.icon} src={icon.src} alt='' />
      <p className={styles.title}>
        {language == "Zh" ? "切換語系" : "Language"}
      </p>

      <div className={styles.language}>
        <div
          className={classnames(styles.english, {
            [styles.englishAnimation]: openItem == "ChangeLanguage",
            [styles.isSelector]: language == "En",
          })}
          onClick={() => {
            setLanguage("En");
          }}>
          En
        </div>
        <div
          className={classnames(styles.chinese, {
            [styles.chineseAnimation]: openItem == "ChangeLanguage",
            [styles.isSelector]: language == "Zh",
          })}
          onClick={() => setLanguage("Zh")}>
          中
        </div>
      </div>
    </div>
  );
};

export default ChangeLanguage;
