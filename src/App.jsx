import React from "react";
import "./globals.css";
import ChangeTitle from "./state/ChangeTitle";
import Counter from "./state/Counter";
import ShortCircuits from "./state/Shortcircuits";
import Accordions from "./state/Accordions";
import Birthday from "./state/reminder/Birthday";
import SecondHook from "./effect/SecondHook";
import CleanUpFunction from "./effect/CleanUpFunction";
import Api from "./apis/Api";

const App = () => {
  return (
    <>
      {/* <ChangeTitle /> */}
      {/* <Counter /> */}
      {/* <ShortCircuits /> */}
      {/* <Accordions /> */}
      {/* <Birthday /> */}
      {/* <SecondHook /> */}
      {/* <CleanUpFunction /> */}
      <Api />
    </>
  );
};

export default App;
