import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import StopWatchProvider from "./mycontext/MyContexts";

ReactDOM.render(
  <React.StrictMode>
    <StopWatchProvider>
    <App />
    </StopWatchProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

