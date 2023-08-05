import React from "react";
import Bgpic1 from "./img/Bgpic1.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import RevealOnScroll from "./Revealscroll";

function Section1() {
  return (
    <div className="max-w-screen-xl my-32  mx-auto px-3">
      <RevealOnScroll threshold={0.2}>
        <div
          className=" bg-cover bg-center h-[100vh] flex justify-end items-center lg:relative lg:left-1/2 lg:right-0 lg:w-1/2 lg:bg-right lg:rounded-md"
          style={{ backgroundImage: `url(${Bgpic1})` }}
        >
          <div className="text-right text-colorwhite  mx-3 lg:absolute">
            <div className="border-r-2 border-colorwhite pr-4">
              <h2 className="font-Lato pt-1 text-lg ">EXPLORE RECIPES FROM</h2>
              <h1 className="font-Oswald text-7xl font-bold mb-3 leading-[1] lg:text-[7.5rem]">
                AROUND THE WORLD
              </h1>
            </div>
            <Link>
              <motion.button className="border border-colorwhite text-colorwhite mr-4 p-3 rounded-md bg-green-900 hover:bg-green-800 font-Lato font-extrabold">
                View More
              </motion.button>
            </Link>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}

export default Section1;
