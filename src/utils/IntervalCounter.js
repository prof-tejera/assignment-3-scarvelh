import React, { useState } from "react";

const CounterUp = ({ delay = 1000 }) => {
  const [intervalId, setIntervalId] = useState(0);

  setIntervalId(setInterval(() => {
    setSeconds(seconds => seconds + 1);
  }, 1000));
};

const CounterDown  = ({ delay = 1000 }) => {
  const [intervalId, setIntervalId] = useState(0);


  setIntervalId(setInterval(() => {
    setSeconds(seconds => seconds - 1);
  }, 1000));

};

export default CounterDown;
