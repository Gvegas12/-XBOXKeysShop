import React from "react";
import { IUserChildProps } from "../types";

const UserCategory: React.FC<IUserChildProps> = ({ className }) => {
  return (
    <a href="/">
      <div className={className}>UserCategory</div>
    </a>
  );
};

export default UserCategory;
