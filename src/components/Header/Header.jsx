import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : styles.a)}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : styles.a)}
            to="/catalog"
          >
            Catalog
          </NavLink>
        </li>
        <li className={styles.li}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : styles.a)}
            to="/favorites"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
