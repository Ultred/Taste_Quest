import React from "react";
import bgpic2 from "./img/bg-pic2.jpg";
import RevealOnScroll from "./Revealscroll";
function Section2() {
  return (
    <RevealOnScroll threshold={0.3}>
      <div className="max-w-screen-xl my-32  mx-auto px-3 lg:flex lg:gap-10 lg:justify-between">
        <div
          className="bg-cover bg-center h-[100vh] lg:w-[24.3%] rounded-md "
          style={{ backgroundImage: `url(${bgpic2})` }}
        >
          <h1 className="font-Oswald text-7xl font-bold mb-3 leading-[1] lg:text-[4.5rem] px-[1.41rem] pt-24 text-colorwhite">
            ABOUT US
          </h1>
        </div>
        <div className="border-r-2 border-colormain my-16 lg:w-[60%] lg:my-auto font-Lato">
          <p className="text-justify text-colormain pr-3 lg:text-2xl indent-12">
            At <span className="font-bold font-Oswald">TASTE QUEST</span>, we're
            on a mission to bring the world's culinary delights to you. With a
            diverse assortment of global recipes at your fingertips, we believe
            in the power of food to unite people through the love of delicious
            dishes and diverse flavors. Join us on this flavorful journey of
            exploration and connection.
          </p>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default Section2;
