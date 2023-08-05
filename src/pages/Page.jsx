import React from "react";
import Section1 from "../components/section1";
import Hero from "../components/SliderHero";
import Section2 from "../components/section2";
import Marquee from "../components/Marquee";
function Page() {
  return (
    <>
      <Hero />
      <Section1 />
      <Marquee />
      <Section2 />
    </>
  );
}

export default Page;
