import React from "react";

import UIHoverSliderItem from "./UIHoverSliderItem";
import UIHoverSliderWindow from "./UIHoverSliderWindow";

interface IUIHoverSliderProps {
  children: React.ReactNode;
}

export default class UIHoverSlider extends React.Component<IUIHoverSliderProps> {
  static Item = UIHoverSliderItem;
  render() {
    return <UIHoverSliderWindow>{this.props.children}</UIHoverSliderWindow>;
  }
}
