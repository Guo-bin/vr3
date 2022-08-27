import React from "react";
import bridge from "public/images/bridge.png";
import styles from "./index.module.scss";
const Thumbnail = () => {
  return (
    <div className={styles.thumbnail} id='ImageExamplePage'>
      <img className={styles.img} src={bridge.src} alt='' />
    </div>
  );
};

export default Thumbnail;
