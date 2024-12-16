import Icon from "../Icon";
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
            <Icon id="icon-adults" w="14px" h="20px" />
            <p> {camper.adults} adults</p>
          </li>
          <li className={styles.item}>
            <Icon id="bathroom" w="14px" h="20px" />

            <p>{camper.transmission}</p>
          </li>
          <li className={styles.item}>
            <Icon
              id="airConditioner"
              w="14px"
              h="20px"
              className={styles.icon}
            />

            <p>AC</p>
          </li>
          <li className={styles.item}>
            <Icon
              id="icon-petrol"
              w="14px"
              h="20px"
              className={styles.iconPetrol}
            />

            <p>{camper.engine}</p>
          </li>
          {camper.details.kitchen !== "" && (
            <li className={styles.item}>
              <Icon id="icon-c" w="14px" h="20px" className={styles.icon} />

              <p>Kitchen</p>
            </li>
          )}

          <li className={styles.item}>
            <Icon id="icon-bed" w="14px" h="20px" className={styles.icon} />

            <p>{camper.details.beds} beds</p>
          </li>
          <li className={styles.item}>
            <Icon
              id="airConditioner"
              w="14px"
              h="20px"
              className={styles.icon}
            />

            <p>{camper.details.airConditioner} air conditioner</p>
          </li>
          {camper.details.CD !== 0 && (
            <li className={styles.item}>
              <Icon id="icon-cd" w="14px" h="20px" className={styles.icon} />

              <p>CD </p>
            </li>
          )}

          {camper.details.radio !== 0 && (
            <li className={styles.item}>
              <Icon id="icon-radio" w="14px" h="20px" className={styles.icon} />

              <p>Radio</p>
            </li>
          )}

          {camper.details.shower !== 0 && (
            <li className={styles.item}>
              <Icon id="bathroom" w="14px" h="20px" className={styles.icon} />

              <p>Shower</p>
            </li>
          )}

          {camper.details.toilet && (
            <li className={styles.item}>
              <Icon id="icon-toilet" w="14px" h="20px" />

              <p>Toilet</p>
            </li>
          )}
          {camper.details.freezer !== 0 && (
            <li className={styles.item}>
              <Icon
                id="icon-freezer"
                w="14px"
                h="20px"
                className={styles.icon}
              />

              <p>Freezer</p>
            </li>
          )}
          {camper.details.microwave && (
            <li className={styles.item}>
              <Icon id="icon-micro" w="14px" h="20px" className={styles.icon} />

              <p>Microwave</p>
            </li>
          )}
          {camper.details.gas !== "" && (
            <li className={styles.item}>
              <Icon id="icon-gas" w="14px" h="20px" />

              <p>Gas</p>
            </li>
          )}
          {camper.details.water !== "" && (
            <li className={styles.item}>
              <Icon
                id="icon-water-outline"
                w="14px"
                h="20px"
                className={styles.icon}
              />

              <p>Water</p>
            </li>
          )}

          <li className={styles.item}>
            <Icon id="icon-hob" w="14px" h="20px" className={styles.icon} />
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
