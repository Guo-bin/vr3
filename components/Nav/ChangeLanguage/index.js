import React from "react";
import icon from "public/images/icon/changeLanguage.svg";
import classnames from "classnames";
import styles from "./index.module.scss";
const ChangeLanguage = ({ setOpenItem, openItem }) => {
  return (
    <div className={styles.changeLanguage} id='ChangeLanguage'>
      <img className={styles.icon} src={icon.src} alt='' />
      <p className={styles.title}>切換語系</p>

      <div className={styles.language}>
        <div
          className={classnames(styles.english, {
            [styles.englishAnimation]: openItem == "ChangeLanguage",
          })}>
          En
        </div>
        <div
          className={classnames(styles.chinese, {
            [styles.chineseAnimation]: openItem == "ChangeLanguage",
          })}>
          中
        </div>
      </div>
    </div>
  );
};

export default ChangeLanguage;
