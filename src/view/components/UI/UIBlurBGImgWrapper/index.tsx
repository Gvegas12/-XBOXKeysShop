import React from "react";

import styles from "./index.module.scss";

type IUIBlurBGImgWrapperProps = {
  bluredImgURL: string;
  style?: object;
  styleForBlur?: object;
  children: React.ReactNode;
};

const UIBlurBGImgWrapper: React.FC<IUIBlurBGImgWrapperProps> = ({
  bluredImgURL,
  style,
  styleForBlur,
  children,
}) => {
  return (
    <>
      <div
        className={styles.blurBGImageWrapper__BGImage}
        style={{
          backgroundImage: `url(${bluredImgURL})`,
          ...style,
        }}
      />
      <div
        className={styles.blurBGImageWrapper__blurBGImage}
        style={styleForBlur}
      />
      {children}
    </>
  );
};

export default UIBlurBGImgWrapper;
