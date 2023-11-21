import React, { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("App Context Undefined");
  }
  return context;
};

function AppContextProvider({ children }) {
  const [favorite, setFavorite] = useState([]);
  const addFavorites = (recipe) => {
    const newRecipe = [...favorite, recipe];
    setFavorite(newRecipe);
    localStorage.setItem("Favorites", JSON.stringify(newRecipe));
  };

  const removeFavorites = (id) => {
    const check = localStorage.getItem("Favorites");

    if (check) {
      const favoriteData = JSON.parse(check);
      const newRecipe = favoriteData.filter((recipe) => recipe.id !== id);
      setFavorite(newRecipe);
      localStorage.setItem("Favorites", JSON.stringify(newRecipe));
    }
  };
  return (
    <AppContext.Provider
      value={{ favorite, setFavorite, addFavorites, removeFavorites }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
