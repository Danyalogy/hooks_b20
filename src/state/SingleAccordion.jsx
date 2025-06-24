import React, { useState } from "react";

import { RiArrowDropDownFill } from "react-icons/ri";

const SingleAccordion = ({ id, question, answer }) => {
  const [show, setShow] = useState(false);
  //   const handleClick = () => {
  //     // if (show) {
  //     //   setShow(false);
  //     // } else {
  //     //   setShow(true);
  //     // }

  //     setShow(!show);
  //   };
  return (
    <>
      <div className="p-3 rounded md shadow-xl my-3 bg-gray-100">
        <div className="flex justify-between  text-gray-600 items-center">
          <h2 className="text-xl capitalize font-semibold">
            {question} #{id}
          </h2>
          <RiArrowDropDownFill
            onClick={() => setShow(!show)}
            size={35}
            className={`cursor-pointer transition-all duration-300 ${
              show ? "-rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>

      <p
        className={`text-gray-600 ${
          show ? "h-[70px] p-4" : "h-0"
        } overflow-hidden shadow bg-white transition-all rounded-md`}
      >
        {answer}
      </p>
    </>
  );
};

export default SingleAccordion;
