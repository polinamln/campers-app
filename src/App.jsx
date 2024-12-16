import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import CatalogPage from "./pages/CatalogPage.jsx";
import Features from "./components/Features/Features.jsx";
import Reviews from "./components/Reviews/Reviews.jsx";
// import CamperModal from "./components/CamperModal/CamperModal.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/catalog" element={<CatalogPage />}></Route>
      <Route path="/catalog/:id" element={<CatalogPage />}>
        <Route path="features" element={<Features></Features>} />
        <Route path="reviews" element={<Reviews></Reviews>} />
      </Route>
    </Routes>
  );
}

export default App;
