import React from "react";
import { Outlet } from "react-router-dom";

function RecipeLayout() {
  return (
    <div>
      <h1>Your Recipe</h1>
      <Outlet />
    </div>
  );
}

export default RecipeLayout;
