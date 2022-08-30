import React from "react";
import icon from "public/images/group.png";
import styles from "./index.module.scss";
const Intro = ({ language }) => {
  return (
    <div className={styles.intro} id='IntroPage'>
      <img className={styles.icon} src={icon.src} alt='' />
      <p className={styles.title}>{language == "Zh" ? "景點介紹" : "Intro"}</p>
    </div>
  );
};

export default Intro;
