import React, { memo } from "react";
import { v4 as uuidv4 } from "uuid";
import viewpointGuide from "public/images/icon/viewpointGuide.svg";
import languageGuide from "public/images/icon/languageGuide.svg";
import viewpointMap from "public/images/icon/viewpointMap.svg";
import language from "public/images/icon/language.svg";
import close from "public/images/icon/close.svg";
import styles from "./index.module.scss";
const InfoPageData = {
  Zh: [
    {
      icon: viewpointGuide.src,
      title: "景點介紹",
      introduce: "介紹文介紹文介紹文介紹文介紹文介紹文介紹文紹文紹文紹文",
    },
    {
      icon: languageGuide.src,
      title: "族語介紹",
      introduce: "介紹文介紹文介紹文介紹文介紹文介紹文介紹文紹文紹文",
    },
    {
      icon: viewpointMap.src,
      title: "景點一覽",
      introduce: "介紹文介紹文介紹文介紹文介紹文介紹文介紹文",
    },
    {
      icon: language.src,
      title: "系統語言",
      introduce: "介紹文介紹文介紹文介紹文介紹文介紹文介紹文",
    },
  ],
  En: [
    {
      icon: viewpointGuide.src,
      title: "Introduce",
      introduce:
        "This is a series of animated short stories to help children learn ",
    },
    {
      icon: languageGuide.src,
      title: "Audio",
      introduce:
        "This is a series of animated short stories to help children, help children",
    },
    {
      icon: viewpointMap.src,
      title: "Attractions",
      introduce:
        "This is a series of animated short stories to help children learn help children",
    },
    {
      icon: language.src,
      title: "Language",
      introduce:
        "This is a series of animated short stories to help children learn English  ",
    },
  ],
};
const InfoPage = ({ setOpenItem, language }) => {
  const closeHandler = () => {
    setOpenItem(null);
  };

  return (
    <div className={styles.infoPage}>
      <h3 className={styles.title}>
        {language == "Zh" ? "操作介紹" : "Infomation"}
      </h3>
      <div className={styles.container}>
        {InfoPageData[language].map((info) => (
          <section className={styles.section} key={uuidv4()}>
            <img className={styles.icon} src={info.icon} alt='' />
            <div className={styles.textArea}>
              <h4 className={styles.infoTitle}>{info.title}</h4>
              <p className={styles.introduce}>{info.introduce}</p>
            </div>
          </section>
        ))}
      </div>
      <img
        className={styles.close}
        src={close.src}
        alt=''
        onClick={closeHandler}
      />
    </div>
  );
};
const InfoPageComponent = memo(InfoPage);
export default InfoPageComponent;
