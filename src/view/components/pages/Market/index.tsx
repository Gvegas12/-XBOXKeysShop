import React from "react";
import Hero from "../../sections/Hero";
import Products from "../../sections/Products";

import styles from "./index.module.scss";

interface IMarketProps {}

const Market: React.FC<IMarketProps> = () => {
  return (
    <div className={styles.content}>
      <Hero />
      <Products />
    </div>
  );
};

export default Market;
