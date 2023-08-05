import React from "react";

const Marquee = () => {
  return (
    <div className="marquee bg-colormain text-colorwhite py-7 text-lg uppercase">
      <div className="marquee-content">
        <span>Discover New Recipes </span>
        <span>Delicious Dishes from Around the World</span>
        <span>Try Our Mouthwatering Desserts and Snacks</span>
        <span>Quick and Easy Meals for Busy Days</span>
        <span>Join Our Cooking Community Today!</span>
      </div>
    </div>
  );
};

export default Marquee;
