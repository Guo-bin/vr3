import React from "react";
import Close from "public/images/icon/viewpointGuidClose.svg";
import View from "./View";
import styles from "./index.module.scss";
const ViewGuidePage = ({ setOpenItem }) => {
  const closeHandler = () => {
    setOpenItem(null);
  };
  return (
    <div className={styles.viewGuidePage}>
      <div className={styles.container}>
        <h3 className={styles.title}>園區景點一覽</h3>

        <div className={styles.viewpointContainer}>
          <View />
          <View />
          <View />
          <View />
          <View data={"AASDADASDASDASDASDASDASDASDSDASD"} />
          <View />
          <View />
          <View />
          <View />
        </div>
      </div>
      <div className={styles.close}>
        <img src={Close.src} alt='' onClick={closeHandler} />
      </div>
    </div>
  );
};

export default ViewGuidePage;
