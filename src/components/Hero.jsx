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

  useEffect(() => {
    fetchTrending();
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
    <Splide
      options={{
        pagination: false,
        autoplay: true,
        type: "loop",
      }}
    >
      {trending.map((trends) => {
        return (
          <SplideSlide key={trends.id}>
            <div className="flex  items-center justify-center  font-medium  pl-6 flex-col-reverse md:h-[90vh] md:flex-row md:justify-between lg:pl-[4rem]">
              <div className="text-center md:text-left text-colormain md:max-w-lg ">
                <h1 className="text-2xl md:text-3xl  uppercase pt-9 lg:text-4xl">
                  <span className="relative font-bold">
                    Trending
                    <span className="absolute w-20 bottom-0 -left-[4%] bg-colorsec h-1"></span>
                  </span>
                  &nbsp;&nbsp;Today
                </h1>
                <div className=" whitespace-normal">
                  <h2 className="text-lg md:text-xl py-2 lg:text-2xl text-ellipsis">
                    {trends.title}
                  </h2>
                </div>
                <div className="flex justify-center md:justify-start gap-4 md:text-lg font-Serif ">
                  <div className="flex items-center gap-2">
                    <FiClock />
                    <p>{trends.readyInMinutes} Minutes</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsPerson />
                    <p>{trends.servings}</p>
                  </div>
                </div>
                <Viewrecipebtn trending={trends.id} />
              </div>
              <div className="md:bg-colormain md:rounded-l-xl md:w-[43rem] md:h-full md:relative">
                <img
                  className="rounded-t-xl md:outline md:outline-[1rem] md:outline-colorsec shadow-xl w-[39rem] md:w-[500px] md:rounded-none"
                  src={trends.image}
                  alt="Trending"
                />
              </div>
            </div>
          </SplideSlide>
        );
      })}
    </Splide>
  );
}

export default Hero;
