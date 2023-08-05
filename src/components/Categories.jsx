import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import menuItems from "./data/menuItems";

function Categories() {
  const [id, setID] = useState("");
  const handleActive = (id) => {
    setID(id);
  };

  return (
    <>
      <div className="bg-colormain  ">
        <div className="flex gap-5 items-center justify-between mx-auto max-w-screen-xl  text-colorwhite px-3 pt-3 overflow-x-auto">
          {menuItems.map((item, index) => (
            <NavLink
              className={`${
                id === index ? "bg-white text-colormain rounded-t-md" : ""
              } min-w-[6rem]`}
              to={item.to}
              key={index}
              onClick={() => {
                handleActive(index);
              }}
            >
              <p className="text-sm font-semibold p-4 pb-4">{item.text}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}

export default Categories;
