import React from "react";
import InstructionPage from "components/InstructionPage";
import icon from "public/images/icon/instruction.svg";
import styles from "./index.module.scss";
const Instruction = () => {
  return (
    <div className={styles.instruction} id='InstructionPage'>
      <img className={styles.icon} src={icon.src} alt='' />
      <p className={styles.title}>操作介紹</p>
    </div>
  );
};

export default Instruction;
