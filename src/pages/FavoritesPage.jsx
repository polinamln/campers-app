import { useSelector } from "react-redux";
import Header from "../components/Header/Header";
import { CamperItem } from "../components/CamperItem/CamperItem";
import styles from "./FavoritesPage.module.css";

export default function FavoritesPage() {
  const campers = useSelector((state) => state.favorites.items);
  return (
    <div className={styles.div}>
      <Header></Header>
      <ul className={styles.list}>
        {campers &&
          campers.map((camper) => (
            <li key={camper._id}>
              <CamperItem camper={camper} />
            </li>
          ))}
      </ul>
    </div>
  );
}
