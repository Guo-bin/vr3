import React from "react";
import Entry from "pages/entry";
import styles from "./index.module.scss";
const Home = () => {
  return (
    <div className={styles.home}>
      <Entry />
    </div>
  );
};

export default Home;
