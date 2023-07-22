import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppContext } from "../context/appContext";

function Search() {
  let paramSearch = useParams();
  const { favorite, addFavorites, removeFavorites } = useAppContext();
  const [search, setSearch] = useState([]);

  function FavoriteChecker(id) {
    const checker = favorite.some((recipe) => recipe.id === id);
    return checker;
  }

  const getSearch = async (name) => {
    const search_URL = "https://api.spoonacular.com/recipes/complexSearch";
    const api = await fetch(
      `${search_URL}?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&query=${name}&number=5`
    );
    const data = await api.json();
    setSearch(data.results);
  };
  useEffect(() => {
    getSearch(paramSearch.search);
  }, [paramSearch.search]);
  return (
    <div>
      <h1 className="uppercase">{paramSearch.search}</h1>
      <div className="grid grid-cols-2">
        {search.map((foods) => (
          <div>
            <Link key={foods.id} to={"/recipe/" + foods.id}>
              <div>
                <img
                  className="w-[16rem]"
                  src={foods.image}
                  alt={foods.title}
                />
                <h2 className="uppercase">{foods.title}</h2>
              </div>
            </Link>
            {FavoriteChecker(foods.id) ? (
              <button onClick={() => removeFavorites(foods.id)}>
                Remove To favorites
              </button>
            ) : (
              <button onClick={() => addFavorites(foods)}>
                Add To Favorites
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
