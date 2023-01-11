import React from "react";

import styles from "./index.module.scss";

interface IUIHoverSliderWindowProps {
  children: React.ReactNode;
}

const step = 100;
const startCount = 1;
const UIHoverSliderWindow: React.FC<IUIHoverSliderWindowProps> = ({
  children,
}) => {
  const [offset, setOffset] = React.useState<number>(0);
  const [sliderItems, setSliderItems] = React.useState<React.ReactNode>();
  const endCount = React.useCallback(
    (): number => React.Children.toArray(children).length,
    [React.Children.toArray(children).length]
  );
  // const [userIsHoverSliderImg, setUserIsHoverSliderImg] =
  //   React.useState<boolean>(false);

  const isFirstItem = offset <= 0;
  const isLastItem = offset >= endCount() * step - step;

  React.useEffect(() => {
    const hoverImageInterval = setInterval(() => {
      onRight();
      if (isLastItem) {
        clearInterval(hoverImageInterval);
      }
    }, 5000);
    return () => {
      clearInterval(hoverImageInterval);
    };
  }, [isLastItem]);

  React.useEffect(() => {
    const style = {
      transform: `translateX(-${offset}%)`,
      transition: "transform 0.5s ease",
      textAlign: "center",
    };

    setSliderItems(
      React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement<any>, {
          style,
        });
      })
    );
  }, [offset]);

  const onLeft = () => {
    if (isFirstItem) {
      return;
    }
    setOffset((prevState) => (prevState -= step));
  };
  const onRight = () => {
    if (isLastItem) {
      return;
    }
    setOffset((prevState) => (prevState += step));
  };

  return (
    <div className={styles.hoverSlider}>
      <button
        onClick={onLeft}
        className={
          styles.hoverSlider__navBtn + " " + styles.hoverSlider__navBtnLeft
        }
      >
        left
      </button>
      <div className={styles.hoverSlider__window}>{sliderItems}</div>
      <button
        onClick={onRight}
        className={
          styles.hoverSlider__navBtn + " " + styles.hoverSlider__navBtnRight
        }
      >
        right
      </button>
    </div>
  );
};

export default UIHoverSliderWindow;
