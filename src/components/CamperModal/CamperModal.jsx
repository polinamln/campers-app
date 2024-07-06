import { NavLink, Outlet } from "react-router-dom";
import styles from "./CamperModal.module.css";
import { useEffect } from "react";

export default function CamperModal({ onClose, camper }) {
  useEffect(() => {
    function handleEscKeyPress(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleEscKeyPress);

    return () => {
      window.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.target.classList.contains(styles.backdrop)) {
      onClose();
    }
  };

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <div className={styles.divName}>
          <h1>{camper.name}</h1>
          <button className={styles.btnClose} type="button" onClick={onClose}>
            <svg width="32" height="32">
              <use href="#icon-star"></use>
            </svg>
          </button>
        </div>

        <div className={styles.desc}>
          <p className={styles.rating}>
            <svg width="16" height="16">
              <use href="#icon-Ratinggg"></use>
            </svg>
            {camper.rating}({camper.reviews.length} Reviews)
          </p>
          <p>{camper.location}</p>
        </div>

        <h3 className={styles.price}>€ {camper.price},00</h3>

        <div className={styles.pictures}>
          <ul className={styles.picturesList}>
            {camper.gallery.map((img, index) => (
              <li key={index}>
                <img src={img} alt={camper.name} />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.description}>{camper.description}</div>

        <div className={styles.nav}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.navLink
            }
            to="features"
            state={camper}
          >
            Features
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.navLink
            }
            to="reviews"
          >
            Reviews
          </NavLink>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
