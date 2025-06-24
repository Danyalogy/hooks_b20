import React from "react";
import SingleAccordion from "./SingleAccordion";
import { questions } from "./Questions";

const Accordions = () => {
  return (
    <>
      <div className="conatiner  mx-auto w-[50%] bg-gray-100 p-5 shadow-xl my-10">
        {questions.map((item, index) => {
          return <SingleAccordion {...item} key={index} />;
        })}
      </div>
    </>
  );
};

export default Accordions;
