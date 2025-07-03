import React from "react";

const SingleCard = ({ id, name, image, age, remove }) => {
  return (
    <>
      <section className="p-4 my-3 rounded-md shadow bg-gray-100">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <img
              src={image}
              className="h-[70px] w-[70px] rounded-full object-cover"
              alt=""
            />
            <div className="flex flex-col">
              <h3 className="text-green-700 font-bold">{name}</h3>
              <p className="text-gray-400">{age} years</p>
            </div>
          </div>
          <button
            onClick={() => remove(id)}
            className="px-5 hover:bg-red-700 cursor-pointer active:scale-[0.9]  py-2 rounded-md text-white shadow bg-red-500"
          >
            Delete
          </button>
        </div>
      </section>
    </>
  );
};

export default SingleCard;
