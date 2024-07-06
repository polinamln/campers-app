import styles from "./Features.module.css";
import { useLocation } from "react-router-dom";

export default function Features() {
  const location = useLocation();
  const camper = location.state;

  return (
    <div className={styles.div}>
      <div className={styles.text}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <p> {camper.adults} adults</p>
          </li>
          <li className={styles.item}>
            <p>{camper.transmission}</p>
          </li>
          <li className={styles.item}>
            <p>AC</p>
          </li>
          <li className={styles.item}>
            <p>{camper.engine}</p>
          </li>
          {camper.details.kitchen && (
            <li className={styles.item}>
              <p>Kitchen</p>
            </li>
          )}

          <li className={styles.item}>
            <p>{camper.details.beds} beds</p>
          </li>
          <li className={styles.item}>
            <p>{camper.details.beds} beds</p>
          </li>
          <li className={styles.item}>
            <p>{camper.details.airConditioner} air conditioner</p>
          </li>
          <li className={styles.item}>
            <p>{camper.details.CD} </p>
          </li>
          {camper.details.radio && (
            <li className={styles.item}>
              <p>Radio</p>
            </li>
          )}

          <li className={styles.item}>
            <p>{camper.details.hob} hob</p>
          </li>
        </ul>

        <h3 className={styles.details}>Vehicle details</h3>

        <ul className={styles.detailsList}>
          <li className={styles.detailsItem}>
            <p>Form</p>
            <p>{camper.form}</p>
          </li>
          <li className={styles.detailsItem}>
            <p>Length</p>
            <p>{camper.length}</p>
          </li>
          <li className={styles.detailsItem}>
            <p>Width</p>
            <p>{camper.width}</p>
          </li>
          <li className={styles.detailsItem}>
            <p>Height</p>
            <p>{camper.height}</p>
          </li>
          <li className={styles.detailsItem}>
            <p>Tank</p>
            <p>{camper.tank}</p>
          </li>
          <li className={styles.detailsItem}>
            <p>Consumption</p>
            <p>{camper.consumption}</p>
          </li>
        </ul>
      </div>
      <div className={styles.form}></div>
    </div>
  );
}