import React from "react";
import Close from "public/images/icon/viewpointGuidClose.svg";
import View from "./View";
import styles from "./index.module.scss";
const AttractionsPage = ({ setOpenItem, language }) => {
  const closeHandler = () => {
    setOpenItem(null);
  };
  return (
    <div className={styles.attractionsPage}>
      <div className={styles.container}>
        <h3 className={styles.title}>
          {language == "Zh" ? "雙龍部落景點一覽" : "Attractions in Isingan"}
        </h3>

        <div className={styles.viewpointContainer}>
          <View language={language} />
          <View language={language} />
          <View language={language} />
          <View language={language} />
          <View language={language} data={"AASDADASDASDASDASDASDASDASDSDASD"} />
          <View language={language} />
          <View language={language} />
          <View language={language} />
          <View language={language} />
        </div>
      </div>
      <div className={styles.close}>
        <img src={Close.src} alt='' onClick={closeHandler} />
      </div>
    </div>
  );
};

export default AttractionsPage;
