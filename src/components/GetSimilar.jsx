import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <div>
      <h1>Recipe You Might Also Like</h1>
      {similarRecipe.map((similar) => (
        <Link key={similar.id} to={"/recipe/" + similar.id}>
          <div>
            <h2>{similar.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default GetSimilar;
