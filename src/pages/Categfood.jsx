import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import { motion } from "framer-motion";
function Categfood() {
  let params = useParams();
  const [categList, setcateglist] = useState([]);
  const { favorite, addFavorites, removeFavorites } = useAppContext();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(categList.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = categList.slice(indexOfFirstItem, indexOfLastItem);

  function FavoriteChecker(id) {
    const checker = favorite.some((recipe) => recipe.id === id);
    return checker;
  }

  const getCategories = async (name) => {
    const check = localStorage.getItem(params.type);

    if (check) {
      setcateglist(JSON.parse(check));
    } else {
      const categ_URL = "https://api.spoonacular.com/recipes/complexSearch";
      const api = await fetch(
        `${categ_URL}?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&type=${name}&number=10`
      );
      const data = await api.json();

      localStorage.setItem(params.type, JSON.stringify(data.results));
      setcateglist(data.results);
    }
  };

  useEffect(() => {
    getCategories(params.type);
  }, [params.type]);

  return (
    <>
      <div className="font-Oswald max-w-screen-xl  mx-auto px-6">
        <h1 className="text-2xl text-left md:text-3xl  uppercase py-9 lg:text-4xl text-colormain">
          {params.type}
          &nbsp;&nbsp;Recipes
        </h1>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-3 justify-center items-start">
          {currentItems.map((foods) => (
            <motion.div
              initial={{ scale: 0, x: -100 }}
              animate={{
                x: 0,
                scale: 1,
              }}
              key={foods.id}
            >
              <Link to={"/recipe/" + foods.id}>
                <div className="relative group drop-shadow-2xl">
                  <img
                    src={foods.image}
                    alt=""
                    className="w-full h-auto rounded-t-md "
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50">
                    <h1 className="text-left text-xl font-bold font-Oswald text-white p-4">
                      {foods.title}
                    </h1>
                  </div>
                </div>
              </Link>
              {FavoriteChecker(foods.id) ? (
                <button
                  className="w-full py-3 rounded-b-md text-colorwhite bg-red-700 font-Lato font-semibold"
                  onClick={() => removeFavorites(foods.id)}
                >
                  Remove To favorites
                </button>
              ) : (
                <button
                  className=" w-full py-3 rounded-b-md text-colorwhite bg-colormain font-Lato font-semibold"
                  onClick={() => addFavorites(foods)}
                >
                  Add To Favorites
                </button>
              )}
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button
            className="mx-1 px-4 py-2 rounded-md bg-gray-200 text-black"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              className={`mx-1 px-4 py-2 rounded-md ${
                currentPage === index + 1
                  ? "bg-colormain text-colorwhite"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="mx-1 px-4 py-2 rounded-md bg-gray-200 text-black"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Categfood;
