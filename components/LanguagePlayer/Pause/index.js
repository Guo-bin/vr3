import React from "react";
import pause from "public/images/icon/pause.svg";
import styles from "./index.module.scss";
const Pause = ({ handleClick }) => {
  return (
    <div className={styles.pause} onClick={() => handleClick()}>
      <img src={pause.src} alt='' />
    </div>
  );
};

export default Pause;
