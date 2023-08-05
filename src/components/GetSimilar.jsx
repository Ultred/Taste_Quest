import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaExclamation } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
function GetSimilar({ similar }) {
  const [similarRecipe, setSimilarRecipe] = useState([]);

  const getsimRecipe = async (id) => {
    const simrecipe_URL = "https://api.spoonacular.com/recipes/";
    const api = await fetch(
      `${simrecipe_URL}${id}/similar?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=4`
    );
    const data = await api.json();
    setSimilarRecipe(data);
  };
  useEffect(() => {
    getsimRecipe(similar);
  }, [similar]);
  return (
    <div className="text-left">
      <h1 className="font-Oswald text-2xl text-colormain my-11 md:mt-0 lg:text-4xl flex items-center">
        Recipe You Might Also Like <FaExclamation />
      </h1>
      {similarRecipe.map((similar) => (
        <Link
          className="text-xl "
          key={similar.id}
          to={"/recipe/" + similar.id}
        >
          <div className="flex items-center font-light font-Lato text-xl my-2 gap-8 border border-colormain bottom-3 rounded-md p-6">
            <MdFastfood /> {similar.title}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default GetSimilar;
