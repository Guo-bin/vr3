import React, { memo } from "react";
import { v4 as uuidv4 } from "uuid";
import viewpointGuide from "public/images/icon/viewpointGuide.svg";
import languageGuide from "public/images/icon/languageGuide.svg";
import viewpointMap from "public/images/icon/viewpointMap.svg";
import language from "public/images/icon/language.svg";
import close from "public/images/icon/close.svg";
import styles from "./index.module.scss";
const InstructionData = [
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
];
const InstructionPage = ({ setOpenItem }) => {
  const closeHandler = () => {
    setOpenItem(null);
  };

  return (
    <div className={styles.instructionPage}>
      <h3 className={styles.title}>操作說明</h3>

      <div className={styles.container}>
        {InstructionData.map((instruction) => (
          <section className={styles.section} key={uuidv4()}>
            <img className={styles.icon} src={instruction.icon} alt='' />
            <div className={styles.textArea}>
              <h4 className={styles.instructionTitle}>{instruction.title}</h4>
              <p className={styles.introduce}>{instruction.introduce}</p>
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
const instructionPageComponent = memo(InstructionPage);
export default instructionPageComponent;
