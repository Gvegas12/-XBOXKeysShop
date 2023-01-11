import React from "react";
import LogoImg from "../../templates/Logo/LogoImg";

import styles from "./index.module.scss";

type INewsProps = {};

const News: React.FC<INewsProps> = () => {
  return (
    <div className={styles.news}>
      {/* <div className={styles.news_slider}>
        <div className={styles.news_slider_2}></div>
      </div>
      <LogoImg className={styles.bg_img} /> */}
    </div>
  );
};

export default News;
