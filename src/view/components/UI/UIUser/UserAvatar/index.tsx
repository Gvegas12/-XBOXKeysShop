import React from "react";
import { useCheckClassName } from "../../../../hooks/useCheckClassName";
import { IUserChildProps } from "../types";

import styles from "./index.module.scss";

const UserAvatar: React.FC<IUserChildProps> = ({ className }) => {
  const cls = useCheckClassName(className);
  return (
    <a href="/">
      <div className={styles.root + cls} />
    </a>
  );
};

export default UserAvatar;
