import React from "react";
import UI from "..";

import styles from "./index.module.scss";

export interface IUIGameCard {
  name: string;
  price: string | number;
  status: string;
  images: Array<{ url: string }>;
}

const UIGameCard: React.FC<IUIGameCard> = ({ name, price, status, images }) => {
  const blurWrapperTotalStyles = { borderRadius: "10px" };

  return (
    <div className={styles.gameCard}>
      <UI.BlurBGImageWrapper
        bluredImgURL={images[0].url}
        style={blurWrapperTotalStyles}
        styleForBlur={{
          backgroundColor: "rgba(0, 0, 0, 0.25)",
          ...blurWrapperTotalStyles,
        }}
      >
        <div className={styles.gameCard__imgContainer}>
          {images.map(({ url }, i) => (
            <img className={styles.gameCard__img} src={url} alt="" />
          ))}
        </div>
        <div className={styles.gameCard__description}>
          <h5 className={styles.gameCard__name}>{name}</h5>
          <span className={styles.gameCard__status}>{status}</span>
          <p className={styles.gameCard__descriptionText}>
            HITMAN 3 — эффектное завершение трилогии «Мир наемных убийц».
            Станьте легендарным убийцей Агентом 47, используйте фантазию и
            импровизируйте, совершая самые гениальные и зрелищные заказные
            убийства в огромных уровнях-«песочницах», разбросанных по всему
            миру.
          </p>
          <span className={styles.gameCard__price}>{price} Р</span>
        </div>
      </UI.BlurBGImageWrapper>
    </div>
  );
};

export default UIGameCard;
