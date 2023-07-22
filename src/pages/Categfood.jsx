import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppContext } from "../context/appContext";
function Categfood() {
  let params = useParams();
  const [categList, setcateglist] = useState([]);
  const { favorite, addFavorites, removeFavorites } = useAppContext();

  function FavoriteChecker(id) {
    const checker = favorite.some((recipe) => recipe.id === id);
    return checker;
  }

  const getCategories = async (name) => {
    const check = localStorage.getItem(params.type);

    if (check) {
      setcateglist(JSON.parse(check));
    } else {
      const categ_URL = "https://api.spoonacular.com/recipes/complexSearch";
      const api = await fetch(
        `${categ_URL}?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&type=${name}&number=10`
      );
      const data = await api.json();

      localStorage.setItem(params.type, JSON.stringify(data.results));
      setcateglist(data.results);
    }
  };

  useEffect(() => {
    getCategories(params.type);
  }, [params.type]);

  return (
    <>
      <div className="max-w-screen-xl  mx-auto px-6">
        <h1 className="text-2xl text-left md:text-3xl  uppercase py-9 lg:text-4xl text-colormain">
          <span className="relative font-bold">
            {params.type}
            <span className="absolute w-20 bottom-0 -left-[4%] bg-colorsec h-1"></span>
            &nbsp;&nbsp;Recipes
          </span>
        </h1>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-3 justify-center items-start">
          {categList.map((foods) => (
            <div key={foods.id}>
              <Link to={"/recipe/" + foods.id}>
                <div className="outline outline-2 outline-colormain w-[20rem] rounded-lg bg-colorsec text-colormain relative">
                  <img
                    className="w-[20rem] p-5  border-[8px] border-solid border-white"
                    src={foods.image}
                    alt={foods.title}
                  />
                  <h2 className="uppercase font-Serif font-medium text-lg bg-white p-6">
                    {foods.title}
                  </h2>
                  <div className="absolute top-0 hidden hover:block bg-slate-500 w-full h-full"></div>
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
    </>
  );
}

export default Categfood;
