import { memo } from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
function Field({ label, value }) {
  return (
    <div>
      <label className={styles.label}>{label}</label>
      <p className={styles.value}>{value || "--"}</p>
    </div>
  );
}

Field.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired
};

export default memo(Field);
