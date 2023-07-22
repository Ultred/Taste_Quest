import React from "react";
import Hero from "../components/Hero";
import { Outlet } from "react-router-dom";
import Categories from "../components/Categories";
function MainLayout() {
  return (
    <>
      <Hero />
      <Categories />
      <Outlet />
    </>
  );
}

export default MainLayout;
