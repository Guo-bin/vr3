import React from "react";
import styles from "./index.module.scss";
const Title = ({ language }) => {
  return (
    <div className={styles.title}>
      <h3>
        {language == "Zh"
          ? "雙龍七彩吊橋龍七彩吊橋龍七彩吊橋龍七彩吊橋龍七彩吊橋龍七彩吊橋龍七彩吊橋龍七彩吊橋龍七彩吊橋"
          : "This is a series of animated short stories to help children learn English with their parents. Each story"}
      </h3>
    </div>
  );
};

export default Title;
