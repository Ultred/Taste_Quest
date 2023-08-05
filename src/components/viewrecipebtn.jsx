import React from "react";
import { useNavigate } from "react-router-dom";

function Viewrecipebtn({ trending }) {
  let navigate = useNavigate();

  return (
    <button
      className="border border-colorwhite text-colorwhite mr-4 p-3 rounded-md bg-green-900 hover:bg-green-800 font-Lato font-extrabold"
      onClick={() => {
        navigate("/recipe/" + trending);
      }}
    >
      View Recipe
    </button>
  );
}

export default Viewrecipebtn;
