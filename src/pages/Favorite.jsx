import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
function Favorite() {
  const { favorite, removeFavorites, setFavorite } = useAppContext();
  const updateFavoriteFromLocalStorage = () => {
    const localStorageData = localStorage.getItem("Favorites");
    if (localStorageData) {
      const favoriteData = JSON.parse(localStorageData);
      setFavorite(favoriteData);
    }
  };
  useEffect(() => {
    updateFavoriteFromLocalStorage();
  }, [setFavorite]);

  return (
    <div className="max-w-screen-xl  mx-auto px-6">
      <h1 className="font-Oswald text-5xl text-colormain flex flex-col items-center mt-28 mb-10">
        <span className="absolute h-[2px] w-32 bg-colormain"></span>
        FAVORITES
      </h1>
      <div>
        {favorite.length === 0 ? (
          <h1>No Favorite</h1>
        ) : (
          favorite.map((food) => (
            <div
              key={food.id}
              className="flex outline rounded-md flex-col outline-colormain my-5 md:justify-between md:items-center md:flex-row "
            >
              <Link
                className="flex items-center md:gap-6 font-Oswald lg:text-xl md:flex-row flex-col"
                to={"/recipe/" + food.id}
              >
                <img
                  className="w-full md:w-[20rem] "
                  src={food.image}
                  alt={food.title}
                />
                <p className="my-8 md:my-0">{food.title}</p>
              </Link>
              <button
                className="md:h-[15rem] bg-red-900 hover:bg-red-800 font-Lato font-extrabold p-[1.3rem] "
                onClick={() => removeFavorites(food.id)}
              >
                Remove as Favorite
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Favorite;
