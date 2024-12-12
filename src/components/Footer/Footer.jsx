import { NavLink } from "react-router-dom";
import css from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={css.footer}>
      <div className={css.footerBox}>
        <div className={css.footerBoxText}>
          <h1 className={css.logo}>
            <span className={css.logoAccent}>C</span> ampers
          </h1>
          <p className={css.text}>
            We offer camper van rentals across Ukraine. Discover the convenience
            and freedom of traveling with our comfortable motorhomes.
          </p>
        </div>

        <div>
          <ul className={css.footerNav}>
            <li>
              <NavLink className={css.footerNavLink} to="/catalog">
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink className={css.footerNavLink} to="/favorites">
                Favorites
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
