import React from "react";
import icon from "public/images/group.png";
import styles from "./index.module.scss";
const ViewInstruction = () => {
  return (
    <div className={styles.viewInstruction} id='ViewInstructionPage'>
      <img className={styles.icon} src={icon.src} alt='' />
      <p className={styles.title}>景點介紹</p>
    </div>
  );
};

export default ViewInstruction;
