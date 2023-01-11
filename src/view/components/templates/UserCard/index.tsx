import React from "react";
import UI from "../../UI";

import styles from "./index.module.scss";

interface IUserCardProps {}

const UserCard: React.FC<IUserCardProps> = () => {
  return (
    <UI.User.Container className={styles.userCard}>
      <UI.User.Avatar className={styles.userCardAvatar} />
      <div className={styles.userCardTextWrapper}>
        <UI.User.Name />
        <small>
          <UI.User.Category />
        </small>
      </div>
    </UI.User.Container>
  );
};

export default UserCard;
