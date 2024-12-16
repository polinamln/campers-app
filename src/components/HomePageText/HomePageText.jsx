import styles from "./HomePageText.module.css";

export default function HomePageText() {
  return (
    <div className={styles.container}>
      <div className={styles.containerImg}>
        <h1 className={styles.heading}>Welcome!</h1>
        <p className={styles.paragraph}>
          We offer camper van rentals across Ukraine.
          <br />
          Discover the convenience and freedom of traveling with our comfortable
          motorhomes.
        </p>
        <p className={styles.paragraph}>Our services include:</p>
      </div>
      <ul className={styles.list}>
        <li>
          A wide selection of camper vans in various sizes and configurations
        </li>
        <li>Flexible rental options and convenient terms</li>
        <li>Professional support and consultations</li>
        <li>Safety and reliability at every stage</li>
      </ul>
      <div className={styles.box}>
        <img src="/campers.jpeg" className={styles.img}></img>
        <img src="/camper3.webp" className={styles.img}></img>
      </div>
    </div>
  );
}
