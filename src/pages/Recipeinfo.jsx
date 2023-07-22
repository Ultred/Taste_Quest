import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetSimilar from "../components/GetSimilar";
import { useAppContext } from "../context/appContext";

function Recipeinfo() {
  const idRecipe = useParams();
  const [recipeInfo, setRecipeInfo] = useState([]);
  const { favorite, addFavorites, removeFavorites } = useAppContext();

  function FavoriteChecker(id) {
    const checker = favorite.some((recipe) => recipe.id === id);
    return checker;
  }
  const getRecipe = async (id) => {
    const recipe_URL = "https://api.spoonacular.com/recipes/";
    const api = await fetch(
      `${recipe_URL}${id}/information?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`
    );
    const data = await api.json();
    setRecipeInfo(data);
  };
  useEffect(() => {
    getRecipe(idRecipe.name);
  }, [idRecipe.name]);

  return (
    <div>
      <h1>{recipeInfo.title}</h1>
      {/* <p>{recipeInfo.instructions}</p> */}

      <img
        className="w-[30rem]"
        src={recipeInfo.image}
        alt={recipeInfo.title}
      />
      {FavoriteChecker(recipeInfo.id) ? (
        <button onClick={() => removeFavorites(recipeInfo.id)}>
          Remove To favorites
        </button>
      ) : (
        <button onClick={() => addFavorites(recipeInfo)}>
          Add To Favorites
        </button>
      )}
      <GetSimilar similar={idRecipe.name} />
    </div>
  );
}

export default Recipeinfo;
