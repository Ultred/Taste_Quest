import React, { useState } from "react";

const StepsRecipe = ({ recipeInfo }) => {
  const [expandedStepIndexes, setExpandedStepIndexes] = useState([]);

  const toggleAccordion = (index) => {
    if (expandedStepIndexes.includes(index)) {
      setExpandedStepIndexes((prevIndexes) =>
        prevIndexes.filter((i) => i !== index)
      );
    } else {
      setExpandedStepIndexes((prevIndexes) => [...prevIndexes, index]);
    }
  };

  return (
    <div>
      {recipeInfo.analyzedInstructions?.[0].steps?.map((props, index) => (
        <div className="border rounded-md mb-4" key={props.id}>
          <button
            className="w-full rounded-md py-5 px-4 text-left bg-colormain text-colorwhite hover:bg-amber-950 focus:outline-none uppercase font-medium font-Oswald text-lg"
            onClick={() => toggleAccordion(index)}
          >
            Step {props.number}
            <span
              className={`float-right transform ${
                expandedStepIndexes.includes(index) ? "rotate-180" : ""
              }`}
            >
              &#x25BE;
            </span>
          </button>
          {expandedStepIndexes.includes(index) && (
            <div className="grid grid-cols-1 md:grid-cols-3 font-Lato">
              <ul className="p-3">
                <h2 className="font-semibold text-lg"> Equipment:</h2>
                {props.equipment.length === 0 ? (
                  <li>None</li>
                ) : (
                  props.equipment.map((props2) => (
                    <li key={props2.id}>{props2.name}</li>
                  ))
                )}
              </ul>
              <ul className="border-t-2 border-b-2 md:border-t-0 md:border-b-0 md:border-l-2 md:border-r-2 p-3">
                <h2 className="font-semibold text-lg">Ingredients :</h2>
                {props.ingredients.length === 0 ? (
                  <li>None</li>
                ) : (
                  props.ingredients.map((props2) => (
                    <li key={props2.id}>{props2.name}</li>
                  ))
                )}
              </ul>
              <div className="p-3">
                <h2 className="font-semibold text-lg">Step:</h2>
                {props.step}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepsRecipe;
