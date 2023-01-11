import React from "react";
import UI from "../../UI";
import { gameListData } from "../Hero";

import styles from "./index.module.scss";

interface IProductsProps {}

const Products: React.FC<IProductsProps> = () => {
  return (
    <section className={styles.products}>
      <ul className={styles.products__list}>
        {gameListData.map(({ images, name, price, status }, i) => (
          <li className={styles.products__item} key={i}>
            <UI.GameCard
              images={images.slice(0, 2)}
              name={name}
              price={price}
              status={status}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Products;
