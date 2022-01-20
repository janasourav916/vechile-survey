import { memo, useState } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import SideDrawer from "../SideDrawer";
import Field from "../Field";
function UserDetailsDrawer({ user, open, onClose }) {
  return (
    <SideDrawer open={!!open} onClose={onClose}>
      <div>
        <div className={styles.drawer__header}>
          <h2>User Details</h2>
        </div>
        <div className={styles.drawer__container}>
          <h4 className={styles.fields__title}>Basic Info</h4>
          <div className={styles.fields}>
            <Field label="Username" value={user?.username} />
            <Field label="Age" value={user?.age} />
            <Field label="Phone" value={user?.phoneNumber} />
            <Field label="Occupation" value={user?.occupation} />
          </div>
          <hr className={styles.fields__divider} />
          <h4 className={styles.fields__title}>Address Info</h4>
          <div className={styles.fields}>
            <Field label="Street" value={user?.address?.street} />
            <Field label="City" value={user?.address?.city} />
            <Field label="state" value={user?.address?.state} />
            <Field label="Zip Code" value={user?.address?.zipCode} />
            <Field label="Country" value={user?.address?.country} />
          </div>
          <hr className={styles.fields__divider} />
          <h4 className={styles.fields__title}>Vechile Info</h4>
          <div className={styles.fields}>
            <Field label="Maker" value={user?.vehicle?.make} />
            <Field label="Model" value={user?.vehicle?.model} />
            <Field label="Price" value={user?.vehicle?.price} />
            <Field label="age" value={user?.vehicle?.age} />
            <Field
              label="Color"
              value={
                <span
                  className={styles.vechileColor}
                  style={{ backgroundColor: user?.vehicle?.color }}
                ></span>
              }
            />
          </div>
        </div>
      </div>
    </SideDrawer>
  );
}

UserDetailsDrawer.propTypes = {
  user: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default memo(UserDetailsDrawer);
