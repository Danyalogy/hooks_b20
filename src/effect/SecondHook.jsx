import React, { useEffect, useState } from "react";

const SecondHook = () => {
  const [number, setNumber] = useState(0);
  const handleIncrease = () => {
    setNumber(number + 1);
  };

  useEffect(() => {
    document.title = `(${number}) new messages`;
  }, [number]);
  return (
    <>
      <div className="container text-center mx-auto">
        <h1 className="text-9xl">{number}</h1>
        <button
          onClick={handleIncrease}
          className="px-5 rounded-full bg-green-500 text-white active:scale-95 cursor-pointer hover:bg-green-600"
        >
          Increase
        </button>
      </div>
    </>
  );
};

export default SecondHook;
