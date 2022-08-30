import React from "react";
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
          })}
          onClick={() => {
            setLanguage("En");
          }}
          style={{ background: language == "En" ? "#2e8ab7" : "#fff" }}>
          En
        </div>
        <div
          className={classnames(styles.chinese, {
            [styles.chineseAnimation]: openItem == "ChangeLanguage",
          })}
          onClick={() => setLanguage("Zh")}
          style={{ background: language == "Zh" ? "#2e8ab7" : "#fff" }}>
          中
        </div>
      </div>
    </div>
  );
};

export default ChangeLanguage;
