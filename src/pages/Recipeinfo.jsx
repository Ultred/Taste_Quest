import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetSimilar from "../components/GetSimilar";
import { useAppContext } from "../context/appContext";
import StepsRecipe from "../components/StepsRecipe";
import { FaRegDotCircle } from "react-icons/fa";

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
  // console.log(recipeInfo.analyzedInstructions?.[0].steps);
  return (
    <div className="max-w-screen-xl my-32  mx-auto px-3">
      <div className="flex justify-between items-center my-7">
        <h1 className="font-Oswald text-2xl text-colormain lg:text-4xl">
          {recipeInfo.title}
        </h1>
        {FavoriteChecker(recipeInfo.id) ? (
          <button
            className="border border-colorwhite text-colorwhite mr-4 p-3 rounded-md bg-red-900 hover:bg-red-800 font-Lato font-extrabold"
            onClick={() => removeFavorites(recipeInfo.id)}
          >
            Remove To favorites
          </button>
        ) : (
          <button
            className="border border-colorwhite text-colorwhite mr-4 p-3 rounded-md bg-green-900 hover:bg-green-800 font-Lato font-extrabold"
            onClick={() => addFavorites(recipeInfo)}
          >
            Add To Favorites
          </button>
        )}
      </div>
      <div className="grid grid-cols-1 mt-8 mb-20 md:grid-cols-2 md:gap-28">
        <img
          className="rounded-md shadow-md"
          src={recipeInfo.image}
          alt={recipeInfo.title}
        />
        <div className="text-left text-colormain">
          <h2 className="font-Oswald text-2xl text-colormain my-11 md:mt-0 lg:text-4xl">
            INGREDIENTS:
          </h2>
          <ul>
            {recipeInfo.extendedIngredients?.map((props) => (
              <li className="flex items-center font-Lato text-lg my-2 gap-3">
                <FaRegDotCircle /> {props.original}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 mt-8 md:grid-cols-2 md:gap-28 md:flex-row-reverse">
        <StepsRecipe recipeInfo={recipeInfo} />
        <GetSimilar similar={idRecipe.name} />
      </div>
    </div>
  );
}

export default Recipeinfo;
