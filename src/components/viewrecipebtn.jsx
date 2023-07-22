import React from "react";
import { useNavigate } from "react-router-dom";

function Viewrecipebtn({ trending }) {
  let navigate = useNavigate();

  return (
    <button
      className="outline outline-2 outline-colormain rounded-md px-6 py-3 font-bold my-4 hover:bg-colorsec"
      onClick={() => {
        navigate("/recipe/" + trending);
      }}
    >
      View Recipe
    </button>
  );
}

export default Viewrecipebtn;
