import { useState } from "react";
import styles from "./CamperItem.module.css";
import CamperModal from "../CamperModal/CamperModal";
import { FaRegHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favoritesSlice";
import { FaHeart, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function CamperItem({ camper }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items) || [];

  const isFavorite = favorites.some((fav) => fav._id === camper._id);

  const handleClick = () => {
    setIsOpen(true);
    navigate(`/catalog/${camper._id}`);
  };

  const onClose = () => {
    navigate("/catalog");
    setIsOpen(false);
  };

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites({ camperId: camper._id }));
    } else {
      dispatch(addToFavorites({ camper }));
    }
  };
  return (
    <div className={styles.div}>
      {camper.gallery.length > 0 && (
        <img
          src={camper.gallery[0]}
          alt={camper.name}
          className={styles.image}
        />
      )}
      <div className={styles.text}>
        <div className={styles.price}>
          <h3>{camper.name}</h3>
          <div className={styles.fav}>
            <h3 className={styles.price}>€ {camper.price},00</h3>
            <button type="submit" onClick={handleFavorite}>
              {isFavorite ? (
                <FaHeart className={styles.iconFav} />
              ) : (
                <FaRegHeart className={styles.icon} />
              )}
            </button>
          </div>
        </div>
        <div className={styles.desc}>
          <p className={styles.rating}>
            <FaStar className={styles.ratingIcon} />
            {camper.rating}({camper.reviews.length} Reviews)
          </p>
          <p>{camper.location}</p>
        </div>
        <div className={styles.description}>{camper.description}</div>

        <ul className={styles.list}>
          <li className={styles.item}>
            <p> {camper.adults} adults</p>
          </li>
          <li className={styles.item}>
            <p>{camper.transmission}</p>
          </li>
          <li className={styles.item}>
            <p>{camper.engine}</p>
          </li>
          {camper.details.kitchen !== "" && (
            <li className={styles.item}>
              <p>Kitchen</p>
            </li>
          )}
          <li className={styles.item}>
            <p>{camper.details.beds} beds</p>
          </li>
          <li className={styles.item}>
            <p>AC</p>
          </li>
        </ul>

        <button onClick={handleClick} type="submit" className={styles.btn}>
          Show more
        </button>
        {modalIsOpen && (
          <CamperModal onClose={onClose} camper={camper}></CamperModal>
        )}
      </div>
    </div>
  );
}
