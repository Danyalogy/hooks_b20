import React, { useState } from "react";
import SingleCard from "./SingleCard";
import { bdays } from "./data";

const Birthday = () => {
  const [myData, setMyData] = useState(bdays);
  const handleDelete = () => {
    if (myData.length == 0) {
      setMyData(bdays);
    } else {
      setMyData([]);
    }
  };
  const removeSingle = (id) => {
    let newData = myData.filter((item, index) => {
      return item.id !== id;
    });
    setMyData(newData);
  };
  return (
    <>
      <div className="container w-1/2 p-10 rounded-md shadow-lg mx-auto">
        <h1 className="text-center text-4xl text-green-500">
          {myData.length} Birthdays Today
        </h1>
        {myData.map((item, index) => {
          return (
            <SingleCard
              remove={removeSingle}
              {...item}
              key={item.id || index}
            />
          );
        })}

        <button
          onClick={handleDelete}
          className={`px-5 w-full mx-auto block cursor-pointer active:scale-[0.98]  py-2 rounded-md text-white shadow ${
            myData.length == 0
              ? "bg-green-500  hover:bg-green-700"
              : "bg-red-500  hover:bg-red-700"
          }`}
        >
          {myData.length == 0 ? "Refresh All" : "Remove All"}
        </button>
      </div>
    </>
  );
};

export default Birthday;
