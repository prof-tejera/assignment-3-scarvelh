import React, { useContext } from "react";
import { convertToSeconds, myColors, secondsToTime } from "../../utils/helpers";
import { TimerContext } from "../../mycontext/MyContexts";

import { ThemeContext } from "../../mycontext/MyThemeContexts";
import styled, { keyframes } from "styled-components";


const timerFormat = {
  margin: "20px",
  display: "flex",
  //height: "12%",
  justifyContent: "center",
  alignItems: "center",
  height: "55px",
  width: "200px",
  backgroundColor: "eggshell-white",
  //backgroundColor: 	"#7CFC00",
  fontSize: "45px",
  borderRadius: "20%",
  //make display float right
  float: "right",
  border: "1px solid black"
};

// function handle blinking effect
function blinkingEffect() {
  return keyframes`
    50% {
      opacity: 0;
    }
  `;
}


// handle the blink animation
const AnimatedComponent = styled.div`
  animation: ${{ blinkingEffect }} 1s linear infinite;

`;


///===================================================CountDown and XY Timer Display=================================================
export function TimerDisplay() {
  // get information from context storage
  const {
    hours,
    minutes,
    seconds,
    reset,
    fastforward,
    timers,
    currentbuttonindex

  } = useContext(TimerContext);
  // get display theme from theme context
  const { counterdisplay, setCounterDisplay } = React.useContext(ThemeContext);
  // convert hour + minutes + seconds
  const calcsecs = convertToSeconds(hours, minutes, seconds);
  // convert the number of seconds to  hour and minutes and seconds for the display
  const convertSeconds = secondsToTime(calcsecs);
  // set the second minutes and hours if it goes into negative values set the values back to '0'
  if ((convertSeconds.seconds < 0 || convertSeconds.minutes < 0 || convertSeconds.hours < 0) /*&& !onstart*/) {
    convertSeconds.seconds = 0;
    convertSeconds.minutes = 0;
    convertSeconds.hours = 0;
    setCounterDisplay(() => myColors["eggshell-white"]);

  }
  // set values to '0' wired timing issue
  if (!reset && seconds !== 0 && hours !== 0 && minutes !== 0) {
    convertSeconds.seconds = 0;
    convertSeconds.minutes = 0;
    convertSeconds.hours = 0;
  }
  //  change color of timer display
  if (counterdisplay.backgroundColor !== myColors["eggshell-white"]) {

    let name = document.getElementById("timerCountDownID");
    name.style.backgroundColor = counterdisplay;
  }
  // change the number display to congratulation
  if (fastforward && (convertSeconds.hours === 0 || convertSeconds.hours === parseInt(timers[currentbuttonindex].originalhours)) &&
    (convertSeconds.minutes === 0 || convertSeconds.minutes === parseInt(timers[currentbuttonindex].originalminutes)) &&
    (convertSeconds.seconds === 0 || convertSeconds.seconds === parseInt(timers[currentbuttonindex].originalseconds)) && currentbuttonindex >= timers.length -1) {
    // ****************Continue to the  next timer *******************

    return (
      <AnimatedComponent id="timerCountDownID">
        <h1 style={{ color: "red" }}> Congratulations workout completed!</h1>
      </AnimatedComponent>
    );

  } else {


    return (

      <div style={timerFormat} id="timerCountDownID">
      <span className="hours">
        {("0" + convertSeconds.hours).slice(-2)}:
      </span>
        <span className="minutes">
        {("0" + convertSeconds.minutes).slice(-2)}:
      </span>
        <span className="seconds">
        {("0" + convertSeconds.seconds).slice(-2)}
      </span>
      </div>

    );

  }
}

///===================================================Tabata Timer Display=================================================
export function TimerDisplayTabata() {
// get information from provider context for the Tabata display
  let {
    hours,
    minutes,
    seconds,

    fastforward

  } = useContext(TimerContext);
  // get information from theme context
  let { counterdisplay, setCounterDisplay } = React.useContext(ThemeContext);
  // convert hour+minutes+ seconds  to seconds
  const calcsecs = convertToSeconds(hours, minutes, seconds);
  // convert seconds in hour minutes seconds  for the stopwatch display.
  const convertSeconds = secondsToTime(calcsecs);

  if ((convertSeconds.seconds < 0 || convertSeconds.minutes < 0 || convertSeconds.hours < 0)) {
    convertSeconds.seconds = 0;
    convertSeconds.minutes = 0;
    convertSeconds.hours = 0;
    setCounterDisplay(() => myColors["eggshell-white"]);
  }
  if (counterdisplay.backgroundColor !== myColors["eggshell-white"]) {

    let name = document.getElementById("timerTabataID");
    name.style.backgroundColor = counterdisplay;
  }
  // fast forward display congratulation message
  if (fastforward) {
    return (
      <AnimatedComponent id="timerTabataID">
        <h1 style={{ color: "red" }}> Congratulations workout completed!</h1>
      </AnimatedComponent>
    );

  } else {
    // display the regular
    return (

      <div style={timerFormat} id="timerTabataID">
      <span className="hours">
        {("0" + convertSeconds.hours).slice(-2)}:
      </span>
        <span className="minutes">
        {("0" + convertSeconds.minutes).slice(-2)}:
      </span>
        <span className="seconds">
        {("0" + convertSeconds.seconds).slice(-2)}
      </span>
      </div>


    );
  }
}


export default TimerDisplay;
