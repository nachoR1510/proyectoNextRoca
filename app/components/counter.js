import React, { useState } from "react";
import Button from "./button";

const counter = () => {
  const [counter, setCounter] = useState(0);
  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);
  return (
    <div className="flex">
      <Button
        onClick={decrease}
        className="text-5xl text-white bgRojo rounded h-auto w-10 text-center"
      >
        {" "}
        -{" "}
      </Button>
      <div className="text-5xl text-white">{counter}</div>
      <Button
        onClick={increase}
        className="text-5xl text-white bgRojo rounded h-auto w-10 text-center"
      >
        {" "}
        +{" "}
      </Button>
    </div>
  );
};

export default counter;
