import React from "react";
import UI from "../..";

import styles from "./index.module.scss";

interface IUIHoverSliderProps {
  gameData: {
    name: string;
    price: string | number;
    status: string;
    images: { url: string }[];
  };
  style?: React.StyleHTMLAttributes<any>;
}

const UIHoverSliderItem: React.FC<IUIHoverSliderProps> = ({
  gameData,
  style,
}) => {
  const [activeImageURL, setActiveImageURL] = React.useState("");

  const blurWrapperTotalStyles = {
    borderRadius: "15px",
  };

  React.useEffect(() => {
    setActiveImageURL(gameData.images[0].url);
  }, []);

  return (
    <div style={style} className={styles.hoverSliderItem}>
      <UI.BlurBGImageWrapper
        bluredImgURL={activeImageURL}
        style={blurWrapperTotalStyles}
        styleForBlur={blurWrapperTotalStyles}
      >
        <div className={styles.hoverSliderItem__activeImageContainer}>
          <img
            src={activeImageURL}
            alt="game image"
            className={styles.hoverSliderItem__activeImage}
          />
        </div>
        <div className={styles.hoverSliderItem__descriptionContainer}>
          <h3 className={styles.hoverSliderItem__name}>{gameData.name}</h3>
          <div className={styles.hoverSliderItem__hoverImage}>
            {gameData.images.map(({ url }, i) => (
              <img
                key={i}
                src={url}
                alt="game image"
                className={styles.hoverSliderItem__hoverImageItem}
                onMouseEnter={(e) => setActiveImageURL(e.currentTarget.src)}
              />
            ))}
          </div>
          <div className={styles.hoverSliderItem__status}>
            {gameData.status}
          </div>
          <span className={styles.hoverSliderItem__price}>
            {gameData.price} Р
          </span>
        </div>
      </UI.BlurBGImageWrapper>
    </div>
  );
};

export default UIHoverSliderItem;
