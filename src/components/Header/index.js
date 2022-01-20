import { NavLink } from "react-router-dom";
import images from "../../assets/images";
import styles from "./header.module.css";
export default function Header() {
  const getNavActiveClass = ({ isActive }) => {
    return isActive ? styles.nav__active : styles.nav__default;
  };
  return (
    <header className={styles.header}>
      <div className={styles.header__identity}>
        <img src={images.siteLogo} className={styles.header__logo} alt="logo" />
        <NavLink to="" className={styles.header__title}>
          Vehicle Serve
        </NavLink>
      </div>
      <nav className={styles.header__navigation}>
        <ul className="nav">
          <li>
            <NavLink to="/dashboard" className={getNavActiveClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" className={getNavActiveClass}>
              Users
            </NavLink>
          </li>
          <li>
            <NavLink to="/cars" className={getNavActiveClass}>
              Cars
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
