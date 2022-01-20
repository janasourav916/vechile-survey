import { memo, useRef } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";

function SideDrawer({ open = false, children, onClose }) {
  const drawerRef = useRef();
  const handleClick = (e) => {
    if (open) {
      onClose();
    }
  };
  if (!open) return null;
  const drawerElement = (
    <aside className={styles.drawer__overlay} onClick={handleClick}>
      <div className={styles.drawer__container} ref={drawerRef}>
        {children}
      </div>
      ;
    </aside>
  );
  return createPortal(drawerElement, document.getElementById("portal"));
}

SideDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};
export default memo(SideDrawer);
