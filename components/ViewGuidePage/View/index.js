import React from "react";
import dog from "public/images/dog.jpg";
import styles from "./index.module.scss";
const View = ({ data }) => {
  return (
    <div className={styles.view}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={dog.src} alt='' />
      </div>
      <p className={styles.title}>布農族百步蛇的報仇{data}</p>
    </div>
  );
};

export default View;
