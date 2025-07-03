import React, { useEffect, useState } from "react";

const CleanUpFunction = () => {
  const [size, setSize] = useState(window.innerWidth);
  const handleSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleSize);
    console.log("component re rendered");

    return () => {
      window.removeEventListener("resize", handleSize);
      console.log("clean up ran");
    };
  });

  return (
    <>
      <h1 className="text-5xl text-center">Window size:{size}px</h1>
    </>
  );
};

export default CleanUpFunction;
