import React from "react";
import icon from "public/images/icon/viewpointMap.svg";
import styles from "./index.module.scss";
const ViewGuide = () => {
  return (
    <div className={styles.viewGuide} id='ViewGuidePage'>
      <img className={styles.icon} src={icon.src} alt='' />
      <p className={styles.title}>景點導覽</p>
    </div>
  );
};

export default ViewGuide;
