import { useEffect } from "react";
import { useParams, Outlet, NavLink } from "react-router-dom";
import styles from "./CamperModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneCamper } from "../../redux/operations";
import { FaStar } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function CamperModal({ onClose }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector((state) => state.camper.item) || {};

  const loading = useSelector((state) => state.camper.loading);
  const error = useSelector((state) => state.camper.error);

  useEffect(() => {
    dispatch(fetchOneCamper({ id }));
  }, [dispatch, id]);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleCLose = (event) => {
    if (event.target.classList.contains(styles.backdrop)) {
      onClose();
    }
  };

  return (
    <div className={styles.backdrop} onClick={handleCLose}>
      <div className={styles.modal}>
        <div className={styles.divName}>
          <h1>{camper.name}</h1>

          <button className={styles.btnClose} type="button" onClick={onClose}>
            <RxCross2 className={styles.btnCloseIcon} />
          </button>
        </div>

        <div className={styles.desc}>
          <p className={styles.rating}>
            <FaStar className={styles.ratingIcon} />
            {camper.rating}({camper.reviews ? camper.reviews.length : 0}{" "}
            Reviews)
          </p>
          <p>{camper.location}</p>
        </div>

        <h3 className={styles.price}>€ {camper.price},00</h3>

        <div className={styles.pictures}>
          <ul className={styles.picturesList}>
            {camper.gallery &&
              camper.gallery.map((img, index) => (
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
            state={camper}
          >
            Reviews
          </NavLink>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
