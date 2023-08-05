import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { FiClock } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import Viewrecipebtn from "./viewrecipebtn";
import "@splidejs/react-splide/css";

function Hero() {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [perPage, setPerPage] = useState(window.innerWidth >= 1024 ? 2 : 1);

  useEffect(() => {
    fetchTrending();
    const handleResize = () => {
      setPerPage(window.innerWidth >= 1024 ? 2 : 1);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fetchTrending = async () => {
    try {
      const check = localStorage.getItem("trending");

      if (check) {
        setTrending(JSON.parse(check));
      } else {
        const Trending_URL = "https://api.spoonacular.com/recipes/random";
        const api = await fetch(
          `${Trending_URL}?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&number=5`
        );
        const data = await api.json();

        localStorage.setItem("trending", JSON.stringify(data.recipes));
        setTrending(data.recipes);
      }
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError("Error fetching data");
      console.error(error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h1 className="font-Oswald text-5xl text-colormain flex flex-col items-center mt-32 mb-10">
        <span className="absolute h-[2px] w-32 bg-colormain"></span>
        TRENDING
      </h1>
      <div className="max-w-screen-xl  mx-auto px-3">
        <Splide
          options={{
            pagination: false,
            autoplay: true,
            type: "loop",
            perPage: perPage,
            gap: "4rem",
          }}
        >
          {trending.map((trends) => {
            return (
              <SplideSlide key={trends.id}>
                <div className="relative ">
                  <img
                    className="rounded-t-md w-full "
                    src={trends.image}
                    alt="Trending"
                  />
                  <div className="text-center md:text-left text-colormain ">
                    <div className=" whitespace-normal flex bg-colormain justify-between pl-3 py-4 rounded-b-md">
                      <h2 className="text-lg md:text-xl py-2 lg:text-2xl text-ellipsis font-Oswald text-colorwhite">
                        {trends.title}
                      </h2>
                      <Viewrecipebtn trending={trends.id} />
                    </div>
                    <div className="flex justify-center md:justify-start gap-4 md:text-lg font-Oswald absolute top-[4%] right-[6%] ">
                      <div className="flex justify-center items-center gap-2 bg-colorwhite p-1 rounded-xl w-[90px]">
                        <FiClock />
                        <p>{trends.readyInMinutes} MIN</p>
                      </div>
                      <div className="flex justify-center items-center gap-2 bg-colorwhite p-1 rounded-xl w-[80px]">
                        <BsPerson />
                        <p>{trends.servings}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
}

export default Hero;
