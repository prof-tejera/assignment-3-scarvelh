import React, { useState } from "react";
import StopWatchProvider from "../mycontext/MyContexts";
import { StopWatchDisplayTypes } from "./TimersView_New";

export const DisplayTimersView = () => {
  const [types, setTypes] = useState("");
  return (

      <>
        <StopWatchDisplayTypes />
      </>

  );
};
export default DisplayTimersView;
