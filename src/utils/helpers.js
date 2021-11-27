// Add helpers here. This is usually code that is just JS and not React code. Example: write a function that
// calculates number of minutes when passed in seconds. Things of this nature that you don't want to copy/paste
// everywhere.

// Move to utils after
import styled from "styled-components";
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
import React from "react";

export const myColors = {
  "yellow-green": "#43a876",
  "orange-yellow": "#f5bd1f",
  "eggshell-white": "#FAF9F6",
  "resting": "#40E0D0"
};

export function convertToSeconds(hours, minutes, seconds) {
  // Calculated the number of seconds
  let calculated_seconds = Math.floor(seconds);
  // Calulate the number of minutes
  let calculated_minutes = Math.floor((minutes * 60));
  // Calculate the number of hours
  let calulated_hours = Math.floor((hours * 60 * 60));
  // add hour+ minutes + seconds together
  let total_seconds = Math.floor((calculated_seconds + calculated_minutes + calulated_hours));
  // return total number of seconds
  return total_seconds;
}

// build component Container for 'StopWatch' 'CountDown' and 'XY' types of stop watches
export const Container = styled.div`
  width: auto;
  //width:400px;
  height: auto;
  border-radius: 20%;
  align-items: center;
  padding-bottom: 30px;
  // removed on 11/16/2021
  padding-left: 40px;
  /*---------- automation  ------------ */
  animation: shake 1s;
  @keyframes shake {
    0% {
      transform: translateX(0)
    }
    25% {
      transform: translateX(25px);
    }
    50% {
      transform: translateX(-25px);
    }
    100% {
      transform: translateX(0px);
    }
  };
  border-style: outset;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 4px 6px rgba(0, 0, 0, 0.45);

`;
// Originally from from https://www.py4u.net/discuss/283439 made a few modifications
//  calculate the number of hours, minutes, and second from input of seconds
export function secondsToTime(secs) {
  var hours = Math.floor(secs / (60 * 60));

  var divisor_for_minutes = secs % (60 * 60);
  var minutes = Math.floor(divisor_for_minutes / 60);

  var divisor_for_seconds = divisor_for_minutes % 60;
  var seconds = Math.ceil(divisor_for_seconds);

  var timerObject = {
    "hours": hours,
    "minutes": minutes,
    "seconds": seconds
  };
  // return the timer object above
  return timerObject;
}

/**
 * Stop watch screen colors
 * yellow-green (when the start button have been clicked)
 * orange-yellow ( when the stop button have been clicked)
 * eggshell-white (The default color for the sop watch screens)
 *
 *
 * @type {{resting: string, "yellow-green": string, "orange-yellow": string, "eggshell-white": string}}
 */



export const different_timers = [
  {
    title: "Stopwatch",
    C: <Stopwatch />,
    customStyling: { backgroundColor: "#add8e6", alignItems: "center", cursor: "pointer",width:"100px" }
  },
  {
    title: "Countdown",
    C: <Countdown />,
    customStyling: { backgroundColor: "#ffffe0", alignItems: "center", cursor: "pointer" }
  },
  { title: "XY", C: <XY />, customStyling: { backgroundColor: "#20b2aa", alignItems: "center", cursor: "pointer" } },
  {
    title: "Tabata",
    C: <Tabata />,
    customStyling: { backgroundColor: "#FF7F7F", alignItems: "center", justifyItems: "center", cursor: "pointer" }
  }
];
export default myColors;
