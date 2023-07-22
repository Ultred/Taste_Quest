import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Recipeinfo from "./Recipeinfo";
import Categfood from "./Categfood";
import Page from "./Page";
import Favorite from "./Favorite";
import Search from "./Search";
import RecipeLayout from "../layout/RecipeLayout";
import MainLayout from "../layout/MainLayout";
function Home() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Page />} />
            <Route path="categfood/:type" element={<Categfood />} />
            <Route path="searched/:search" element={<Search />} />
          </Route>
          <Route path="recipe" element={<RecipeLayout />}>
            <Route path=":name" element={<Recipeinfo />} />
          </Route>
          <Route path="favorites" element={<Favorite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Home;
