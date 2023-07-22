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
      <h2 className="text-2xl md:text-3xl  uppercase pt-28 lg:text-4xl text-center text-colormain">
        <span className="relative font-bold">
          Categories
          <span className="absolute w-20 bottom-0 -left-[4%] bg-colorsec h-1"></span>
        </span>
      </h2>
      <div className="grid place-items-center grid-cols-4 lg:grid-cols-8 max-w-screen-xl px-6 mx-auto gap-10 text-colormain py-10">
        {menuItems.map((item, index) => (
          <NavLink
            to={item.to}
            key={index}
            onClick={() => {
              handleActive(index);
            }}
          >
            <img
              className={`min-w-[5rem] w-[5rem] h-[5rem] md:min-w-[9rem] md:w-[9rem] md:h-[9rem] border-[3px]  rounded-full border-solid ${
                id === index ? "border-colormain" : "border-colorsec"
              }`}
              src={item.imgSrc}
              alt={item.imgAlt}
            />

            <p className="active:text-2xl">{item.text}</p>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Categories;
