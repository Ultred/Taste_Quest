import React from "react";
import { motion } from "framer-motion";
import herobg from "./img/herobg.jpg";
function Herobg() {
  return (
    <div
      className=" bg-cover bg-center h-[89vh]"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="text-white relative text-center pt-40 flex flex-col items-center">
        <motion.span
          initial={{
            x: -100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
          className="absolute h-[2px] w-32 bg-white "
        ></motion.span>
        <h2 className="font-Lato pt-1 text-lg ">DISCOVER THE NEW WAY TO</h2>
        <h1 className="font-Oswald text-7xl font-bold mb-3 leading-[0.8] lg:text-[8.5rem]">
          LOVE FOOD
        </h1>
        <motion.span
          initial={{
            x: 100,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 2,
          }}
          className="absolute h-[3px] w-32 bg-white -bottom-1"
        ></motion.span>
      </div>
    </div>
  );
}

export default Herobg;
