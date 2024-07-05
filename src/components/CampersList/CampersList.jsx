import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/operations";
import CatalogFilter from "../CatalogFilter/CatalogFilter";
import styles from "./CampersList.module.css";
import { CamperItem } from "../CamperItem/CamperItem";

export default function CampersList() {
  const dispatch = useDispatch();
  const campers = useSelector((state) => state.campers.items);
  const status = useSelector((state) => state.campers.status);
  const error = useSelector((state) => state.campers.error);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  console.log(campers);

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
