import { memo } from "react";
import PropTypes from "prop-types";
import images from "../../assets/images";
import styles from "./styles.module.css";

function UserRow({ user = {} }) {
  return (
    <div className={styles.user__container}>
      <img
        className={styles.user__avatar}
        alt="profile"
        src={images.dummayAvatar}
      />
      <div className={styles.user__content}>
        <h4>{user?.username}</h4>
        <p>Age: {user?.age}</p>
      </div>
    </div>
  );
}
UserRow.propTypes = {
  user: PropTypes.object.isRequired
};
export default memo(UserRow);
