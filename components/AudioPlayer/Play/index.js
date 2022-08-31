import React from "react";
import play_arrow from "public/images/icon/play_arrow.svg";
import styles from "./index.module.scss";
const Play = () => {
  return (
    <div className={styles.play}>
      <img src={play_arrow.src} alt='' />
    </div>
  );
};
export default Play;
