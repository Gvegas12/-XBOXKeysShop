import React from "react";
import Logo from "../../templates/Logo";
import UserCard from "../../templates/UserCard";

import styles from "./index.module.scss";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Logo />
        <UserCard />
      </div>
    </header>
  );
};

export default Header;
