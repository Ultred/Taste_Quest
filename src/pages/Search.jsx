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
    <>
      <div className="font-Oswald max-w-screen-xl  mx-auto px-6">
        <h1 className="text-2xl text-left md:text-3xl  uppercase py-9 lg:text-4xl text-colormain">
          {paramSearch.search}
          &nbsp;&nbsp;Recipes
          <span className="text-sm text-gray-500">
            / It has a Limit of 5 recipe since I'm using free API
          </span>
        </h1>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-3 justify-center items-start">
          {search.length === 0 ? (
            <h1>No Recipe Found</h1>
          ) : (
            search.map((foods) => (
              <div key={foods.id}>
                <Link to={"/recipe/" + foods.id}>
                  <div className="relative group">
                    <img
                      src={foods.image}
                      alt=""
                      className="w-full h-auto rounded-t-md "
                    />
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50">
                      <h1 className="text-left text-xl font-bold font-Oswald text-white p-4">
                        {foods.title}
                      </h1>
                    </div>
                  </div>
                </Link>
                {FavoriteChecker(foods.id) ? (
                  <button
                    className="w-full py-3 rounded-b-md text-colorwhite bg-red-700 font-Lato font-semibold"
                    onClick={() => removeFavorites(foods.id)}
                  >
                    Remove To favorites
                  </button>
                ) : (
                  <button
                    className=" w-full py-3 rounded-b-md text-colorwhite bg-colormain font-Lato font-semibold"
                    onClick={() => addFavorites(foods)}
                  >
                    Add To Favorites
                  </button>
                )}
              </div>
            ))
          )}
          {}
        </div>
      </div>
    </>
  );
}

export default Search;
