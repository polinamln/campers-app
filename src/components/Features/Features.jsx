import ModalForm from "../ModalForm/ModalForm";
import styles from "./Features.module.css";
import { useLocation } from "react-router-dom";

export default function Features() {
  const location = useLocation();
  const camper = location.state;

  console.log(camper);

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
          {camper.details.kitchen !== "" && (
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
          {camper.details.CD !== 0 && (
            <li className={styles.item}>
              <p>CD </p>
            </li>
          )}

          {camper.details.radio !== 0 && (
            <li className={styles.item}>
              <p>Radio</p>
            </li>
          )}

          {camper.details.shower !== 0 && (
            <li className={styles.item}>
              <p>Shower</p>
            </li>
          )}

          {camper.details.toilet && (
            <li className={styles.item}>
              <p>Toilet</p>
            </li>
          )}
          {camper.details.freezer !== 0 && (
            <li className={styles.item}>
              <p>Freezer</p>
            </li>
          )}
          {camper.details.microwave && (
            <li className={styles.item}>
              <p>Microwave</p>
            </li>
          )}
          {camper.details.gas !== "" && (
            <li className={styles.item}>
              <p>Gas</p>
            </li>
          )}
          {camper.details.water !== "" && (
            <li className={styles.item}>
              <p>Water</p>
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
      <div className={styles.form}>
        <ModalForm></ModalForm>
      </div>
    </div>
  );
}
