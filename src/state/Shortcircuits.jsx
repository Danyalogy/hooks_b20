import React, { useState } from "react";

const ShortCircuits = () => {
  const [text, setText] = useState(0);

  return (
    <>
      <h1 className="text-5xl text-center">
        {text ? "Text is true" : "Text is false"}
      </h1>
    </>
  );
};

export default ShortCircuits;
