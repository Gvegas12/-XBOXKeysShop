import React from "react";

import UserAvatar from "./UserAvatar";
import UserContainer from "./UserContainer";
import UserName from "./UserName";
import UserCategory from "./UserCategory";

interface IUIUserProps {
  children?: React.ReactNode;
}

export default class UIUser extends React.Component<IUIUserProps> {
  static Container = UserContainer;
  static Avatar = UserAvatar;
  static Category = UserCategory;
  static Name = UserName;

  render() {
    return <>{this.props.children}</>;
  }
}
