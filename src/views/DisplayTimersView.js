import React, { useContext, useEffect, useState } from "react";
import StopWatchProvider from "../mycontext/MyContexts";

export const DisplayTimersView = () => {
  return (
    <StopWatchProvider>
      <>
        <TimersView_New />
      </>
    </StopWatchProvider>
  );
};
