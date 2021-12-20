import React, { useContext, useEffect } from "react";
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
  let {
    hours,
    minutes,
    seconds,
    setSeconds,
    setHours,
    setMinutes,
    fastforward,
    timers,
    activeTimerIndex
  } = useContext(TimerContext);
  // get display theme from theme context
  const { counterdisplay, setCounterDisplay } = React.useContext(ThemeContext);
  if(activeTimerIndex === null){
    activeTimerIndex=0;
  }
  useEffect(() => {
    if (seconds === undefined) {
      setSeconds(timers[activeTimerIndex].originalseconds);
    }

  });
  // convert hour + minutes + seconds
  const calcsecs = convertToSeconds(hours, minutes, seconds);
  const total_orig_secs = convertToSeconds(timers[activeTimerIndex].originalhours, timers[activeTimerIndex].originalminutes, timers[activeTimerIndex].originalseconds);

  // convert the number of seconds to  hour and minutes and seconds for the display
  let convertSeconds = secondsToTime(calcsecs);

  // set the second minutes and hours if it goes into negative values set the values back to '0'
  useEffect(() => {
    if (
      parseInt(convertSeconds.seconds) < 0 ||

      parseInt(convertSeconds.minutes) < 0 ||
      parseInt(convertSeconds.hours) < 0 /*&& !onstart*/
    ) {
      convertSeconds.seconds = 0;
      convertSeconds.minutes = 0;
      convertSeconds.hours = 0;
      setSeconds(() => 0);
      setMinutes(() => 0);
      setHours(() => 0);
      setCounterDisplay(() => myColors["eggshell-white"]);
    }
    if (timers[activeTimerIndex].type === "Stopwatch") {
      if (calcsecs >= total_orig_secs) {
        convertSeconds.seconds = 0;
        convertSeconds.minutes = 0;
        convertSeconds.hours = 0;
        setSeconds(() => timers[activeTimerIndex].originalseconds);
        setMinutes(() => timers[activeTimerIndex].originalminutes);
        setHours(() => timers[activeTimerIndex].originalhours);

        setCounterDisplay(() => myColors["eggshell-white"]);
      }
    }


    // set values to '0' wired timing issue
    if (seconds !== 0 && hours !== 0 && minutes !== 0) {
      convertSeconds.seconds = 0;
      convertSeconds.minutes = 0;
      convertSeconds.hours = 0;
    }
    //  change color of timer display
    if (counterdisplay.backgroundColor !== myColors["eggshell-white"]) {
      let name = document.getElementById("timerCountDownID");
      name.style.backgroundColor = counterdisplay;
    }
  }, [
    convertSeconds.hours,
    convertSeconds.minutes,
    convertSeconds.seconds,
    counterdisplay,
    hours,
    minutes,
    seconds,
    setCounterDisplay,
    setHours,
    setMinutes,
    setSeconds,
    timers,
    activeTimerIndex,
    calcsecs,
    total_orig_secs
  ]);

  // change the number display to congratulation
  if (
    fastforward &&
    (convertSeconds.hours === 0 ||
      convertSeconds.hours ===
      parseInt(timers[activeTimerIndex].originalhours)) &&
    (convertSeconds.minutes === 0 ||
      convertSeconds.minutes ===
      parseInt(timers[activeTimerIndex].originalminutes)) &&
    (convertSeconds.seconds === 0 ||
      convertSeconds.seconds ===
      parseInt(timers[activeTimerIndex].originalseconds)) &&
    activeTimerIndex >= timers.length - 1
  ) {
    // ****************Continue to the  next timer *******************

    return (
      <AnimatedComponent id="timerCountDownID">
        <h1 style={{ color: "red" }}> Congratulations workout completed!</h1>
      </AnimatedComponent>
    );
  } else {
    return (
      <div style={timerFormat} id="timerCountDownID">
        <span className="hours">{("0" + convertSeconds.hours).slice(-2)}:</span>
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
    setMinutes,
    setHours,
    setSeconds,
    fastforward
  } = useContext(TimerContext);
  let { counterdisplay, setCounterDisplay } = React.useContext(ThemeContext);
  useEffect(() => {
    if (seconds === undefined || hours === undefined || minutes === undefined) {

      setSeconds(0);
      setHours(0);
      setMinutes(0);
    }
  });
  // get information from theme context

  // convert hour+minutes+ seconds  to seconds
  const calcsecs = convertToSeconds(hours, minutes, seconds);
  // convert seconds in hour minutes seconds  for the stopwatch display.
  const convertSeconds = secondsToTime(calcsecs);
  useEffect(() => {
    if (
      convertSeconds.seconds < 0 ||
      convertSeconds.minutes < 0 ||
      convertSeconds.hours < 0
    ) {
      convertSeconds.seconds = 0;
      convertSeconds.minutes = 0;
      convertSeconds.hours = 0;
      setSeconds(() => 0);
      setMinutes(() => 0);
      setHours(() => 0);
      setCounterDisplay(() => myColors["eggshell-white"]);
    }
    if (counterdisplay.backgroundColor !== myColors["eggshell-white"]) {
      let name = document.getElementById("timerTabataID");
      name.style.backgroundColor = counterdisplay;
    }

  }, [convertSeconds.hours,
    convertSeconds.minutes,
    convertSeconds.seconds,
    counterdisplay,
    hours,
    minutes,
    seconds,
    setCounterDisplay,
    setMinutes,
    setSeconds,
    setHours
  ]);


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
        <span className="hours">{("0" + convertSeconds.hours).slice(-2)}:</span>
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
