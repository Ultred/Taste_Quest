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
    <div>
      <h1>Your Favorites</h1>
      <div>
        {favorite.length === 0 ? (
          <h1>No Favorite</h1>
        ) : (
          favorite.map((food) => (
            <div key={food.id}>
              <Link to={"/recipe/" + food.id}>
                <img
                  className="w-[20rem] p-5  border-[8px] border-solid border-white"
                  src={food.image}
                  alt={food.title}
                />
                <p>{food.title}</p>
              </Link>
              <button onClick={() => removeFavorites(food.id)}>
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
