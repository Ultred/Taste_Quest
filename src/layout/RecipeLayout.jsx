import React from "react";
import { Outlet } from "react-router-dom";

function RecipeLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default RecipeLayout;
