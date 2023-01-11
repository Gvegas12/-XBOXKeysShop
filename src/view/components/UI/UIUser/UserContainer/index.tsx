import React from "react";
import { IUserChildProps } from "../types";

interface IUserContainer extends IUserChildProps {
  children: React.ReactNode;
}

const UserContainer: React.FC<IUserContainer> = ({
  children,
  className,
}) => {
  return <div className={className}>{children}</div>;
};

export default UserContainer;
