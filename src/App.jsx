import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import CatalogPage from "./pages/CatalogPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
    </Routes>
  );
}

export default App;
