import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./index.module.scss";

type NavBarItemType = {
  path: string;
  text: string;
};
interface INavBarProps {
  NavBarItemsArray: Array<NavBarItemType>;
  className?: string;
  props?: object;
}
const NavBar: React.FC<INavBarProps> = ({
  NavBarItemsArray,
  className,
  ...props
}) => {
  const isActiveHandler = (isActiveState: boolean) => {
    return isActiveState ? `${styles.navBarLinkActive} ` : "";
  };

  const classNames = className ? " " + className : "";
  return (
    <nav {...props} className={styles.navBar + classNames}>
      <ul className={styles.navBarList}>
        {NavBarItemsArray.map(({ text, path }, i) => (
          <li key={i} className={styles.navBarItem}>
            <NavLink
              className={({ isActive }) =>
                isActiveHandler(isActive) + `${styles.navBarLink}`
              }
              to={path}
            >
              <span>{text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
