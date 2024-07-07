import CampersList from "../components/CampersList/CampersList";
import Header from "../components/Header/Header";
import styles from "./CatalogPage.module.css";

export default function CatalogPage() {
  return (
    <div className={styles.div}>
      <Header></Header>
      <CampersList></CampersList>
    </div>
  );
}
