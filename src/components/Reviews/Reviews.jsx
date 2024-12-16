import { useLocation } from "react-router-dom";
import ModalForm from "../ModalForm/ModalForm";
import styles from "./Reviews.module.css";
import { FaStar } from "react-icons/fa";

export default function Reviews() {
  const location = useLocation();
  const camper = location.state;
  return (
    <div className={styles.div}>
      <div className={styles.reviews}>
        <ul>
          {camper.reviews.map((item, index) => (
            <li key={index} className={styles.reviewsCard}>
              <div className={styles.inf}>
                <div className={styles.avatar}>{item.reviewer_name[0]}</div>
                <div>
                  <h3>{item.reviewer_name}</h3>
                  <div className={styles.ratingDiv}>
                    {Array.from({ length: item.reviewer_rating }, (_, i) => (
                      <FaStar key={i} className={styles.ratingIcon} />
                    ))}
                  </div>
                </div>
              </div>
              <p>{item.comment}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ModalForm></ModalForm>
      </div>
    </div>
  );
}
