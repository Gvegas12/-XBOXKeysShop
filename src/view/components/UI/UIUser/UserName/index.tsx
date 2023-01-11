import React from "react";
import { IUserChildProps } from "../types";

const UserName: React.FC<IUserChildProps> = ({ className }) => {
  return (
    <a href="/">
      <div className={className}>UserName</div>
    </a>
  );
};

export default UserName;
