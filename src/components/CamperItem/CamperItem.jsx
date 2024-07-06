import { useState } from "react";
import styles from "./CamperItem.module.css";
import CamperModal from "../CamperModal/CamperModal";

export function CamperItem({ camper }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
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
            <h3>€ {camper.price},00</h3>
            <button type="submit">a</button>
          </div>
        </div>
        <div className={styles.desc}>
          <p className={styles.rating}>
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
          <li className={styles.item}>
            <p>Kitchen</p>
          </li>
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
