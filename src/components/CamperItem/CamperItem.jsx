import styles from "./CamperItem.module.css";

export function CamperItem({ camper }) {
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
          <p>{camper.rating}</p>
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

        <button type="submit" className={styles.btn}>
          Show more
        </button>
      </div>
    </div>
  );
}
