import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  return (
    <>
      <div className="container text-center">
        <h1
          className={`text-9xl ${
            count > 0
              ? "text-green-500"
              : count == 0
              ? "text-yellow-500"
              : "text-red-500"
          }`}
        >
          {count}
        </h1>
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 mx-3 text-white cursor-pointer active:scale-95 transition-all rounded-full duration-300 hover:bg-gradient-to-r bg-gradient-to-l from-red-500 to-blue-600"
        >
          Decrease
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 mx-3 text-white cursor-pointer active:scale-95 transition-all rounded-full duration-300 hover:bg-gradient-to-r bg-gradient-to-l from-orange-500 to-yellow-600"
        >
          Reset
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 mx-3 text-white cursor-pointer active:scale-95 transition-all rounded-full duration-300 hover:bg-gradient-to-r bg-gradient-to-l from-green-500 to-purple-600"
        >
          Increase
        </button>
      </div>
    </>
  );
};

export default Counter;
