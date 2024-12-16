import { useState } from "react";
import styles from "./CatalogFilter.module.css";
import Icon from "../Icon";

const vehicleEquipment = [
  { label: "AC", value: "airConditioner" },
  { label: "Automatic", value: "bathroom" },
  { label: "Kitchen", value: "kitchen" },
  { label: "TV", value: "tv" },
  { label: "Shower/WC", value: "shower" },
];

const vehicleType = [
  { label: "Van", value: "van" },
  { label: "Fully Integrated", value: "fullyIntegrated" },
  { label: "Alcove", value: "alcove" },
];

export default function CatalogFilter({ onFilter }) {
  const [location, setLocation] = useState("");
  const [selectedVehicleEquipment, setSelectedVehicleEquipment] = useState([]);
  const [selectedVehicleType, setSelectedVehicleType] = useState("");
  const [errors, setErrors] = useState({ location: "", vehicleType: "" });

  const handleLocation = (e) => {
    setLocation(e.target.value);
    if (e.target.value) {
      setErrors((prevErrors) => ({ ...prevErrors, location: "" }));
    }
  };

  const handleEquipmentChange = (e) => {
    const { value, checked } = e.target;
    const updatedEquipment = checked
      ? [...selectedVehicleEquipment, value]
      : selectedVehicleEquipment.filter((item) => item !== value);
    setSelectedVehicleEquipment(updatedEquipment);
  };

  const handleTypeChange = (e) => {
    setSelectedVehicleType(e.target.value);
    if (e.target.value) {
      setErrors((prevErrors) => ({ ...prevErrors, vehicleType: "" }));
    }
  };

  const handleSearch = (e) => {
    let hasError = false;
    const newErrors = { location: "", vehicleType: "" };

    // if (!location) {
    //   newErrors.location = "Location is required.";
    //   hasError = true;
    // }

    // if (!selectedVehicleType) {
    //   newErrors.vehicleType = "Vehicle type is required.";
    //   hasError = true;
    // }

    setErrors(newErrors);

    if (!hasError || e.key === "Shift") {
      onFilter(location, selectedVehicleEquipment, selectedVehicleType);
    }
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterSection}>
        <label className={styles.location}>
          Location
          <div className={styles.inputWithIcon}>
            <input
              className={styles.locationInput}
              type="text"
              value={location}
              onChange={handleLocation}
              placeholder="Ukraine, Kyiv"
              onKeyDown={handleSearch}
            />
            <Icon
              id="icon-map-pin"
              w="15px"
              h="18px"
              className={styles.iconMap}
            />
          </div>
        </label>

        {errors.location && (
          <p className={styles.errorText}>{errors.location}</p>
        )}
      </div>

      <div className={styles.filterSectionSecond}>
        <p className={styles.filterText}>Filters</p>
        <h2 className={styles.filterTitle}>Vehicle equipment</h2>
        <ul className={styles.filterList}>
          {vehicleEquipment.map((option) => (
            <li key={option.value} className={styles.filterSectionSecondItem}>
              <input
                className={styles.filterSectionCheckbox}
                type="checkbox"
                value={option.value}
                onChange={handleEquipmentChange}
              />
              <div className={styles.filterSectionTextBox}>
                <Icon
                  id={option.value}
                  w="25px"
                  h="25px"
                  className={styles.icon}
                />

                <p className={styles.filterSectionText}>{option.label}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.filterSection}>
        <h2 className={styles.filterTitle}>Vehicle type</h2>
        <ul className={styles.filterList}>
          {vehicleType.map((option) => (
            <li key={option.value} className={styles.filterSectionSecondItem}>
              <input
                type="radio"
                name="vehicleType"
                value={option.value}
                onChange={handleTypeChange}
                className={styles.filterSectionCheckbox}
              />
              <div className={styles.filterSectionTextBox}>
                <Icon id={option.value} w="40px" h="28px" color="#101828" />

                <p className={styles.filterSectionText}>{option.label}</p>
              </div>
            </li>
          ))}
        </ul>
        {errors.vehicleType && (
          <p className={styles.errorText}>{errors.vehicleType}</p>
        )}
      </div>

      <button className={styles.searchButton} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
