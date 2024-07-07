import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/operations";
import CatalogFilter from "../CatalogFilter/CatalogFilter";
import styles from "./CampersList.module.css";
import { CamperItem } from "../CamperItem/CamperItem";

export default function CampersList() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const campers = useSelector((state) => state.campers.items) || [];
  const [filteredCampers, setFilteredCampers] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const loading = useSelector((state) => state.campers.loading);
  const error = useSelector((state) => state.campers.error);

  const ITEMS_PER_PAGE = 4;

  useEffect(() => {
    dispatch(fetchCampers(page));
  }, [dispatch, page]);

  const handleClick = () => {
    setPage(page + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const isEndOfCollection =
    campers.length % ITEMS_PER_PAGE !== 0 || campers.length === 0;

  const onFilter = (location, selectedEquipment, selectedType) => {
    const filtered = campers.filter((camper) => {
      const matchesLocation = camper.location
        .toLowerCase()
        .includes(location.toLowerCase());
      const matchesEquipment = selectedEquipment.every(
        (equipment) => camper.details[equipment]
      );
      const matchesType = selectedType ? camper.form === selectedType : true;
      return matchesLocation && matchesEquipment && matchesType;
    });
    setFilteredCampers(filtered);
    setIsFiltered(true);
  };

  const campersToDisplay =
    isFiltered && filteredCampers.length > 0 ? filteredCampers : campers;

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.container}>
      <CatalogFilter campers={campers} onFilter={onFilter} />
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className={styles.div}>
          <ul className={styles.list}>
            {campersToDisplay.map((camper) => (
              <li key={camper._id}>
                <CamperItem camper={camper} />
              </li>
            ))}
          </ul>

          {!isEndOfCollection && (
            <button
              className={styles.loadMore}
              type="button"
              onClick={handleClick}
            >
              Load more
            </button>
          )}
        </div>
      )}
    </div>
  );
}
