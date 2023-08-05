import React from "react";
import { Outlet } from "react-router-dom";
import Categories from "../components/Categories";
function MainLayout() {
  return (
    <>
      <Categories />
      <Outlet />
    </>
  );
}

export default MainLayout;
