import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/operations";
import CatalogFilter from "../CatalogFilter/CatalogFilter";
import styles from "./CampersList.module.css";
import { CamperItem } from "../CamperItem/CamperItem";

export default function CampersList() {
  const dispatch = useDispatch();
  const campers = useSelector((state) => state.campers.items);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <CatalogFilter />
      <ul>
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
