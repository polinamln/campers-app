// import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HomePageText from "../components/HomePageText/HomePageText";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.home}>
      <Header />
      <HomePageText></HomePageText>
      {/* <Footer></Footer> */}
    </div>
  );
}
