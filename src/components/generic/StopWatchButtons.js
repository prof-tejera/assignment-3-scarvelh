import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import styled from "styled-components";
import { TimerContext } from "../../mycontext/MyContexts";
//import {myColors} from "../../utils/helpers";
import { ThemeContext } from "../../mycontext/MyThemeContexts";
import myColors from "../../utils/helpers";


const Container = styled.div`
  //   background-color: lightgrey;
  align-items: center;
  font-size: 20px;
`;
// align text in a grid
const positionButtons = {
  display: "flex",
  justifyContent: "space-between",
  width: "10rem",
  borderRadius: "20%",
  alignItems: "center",
  //padding: "40px",
  //float: "right",
  fontSize: "20px",
  paddingLeft: "5px",
  justifyItems: "center"

};

export const StopWatchButtonsTimers = () => {

  const {
    seconds,
    setSeconds,
    minutes,
    setMinutes,
    hours,
    setHours,
    onstart,
    setOnStart,

    setReset,
    repeat,
    setRepeat,
    originalseconds,

    originalminutes,

    originalhours,

    setWorkOutPeriod,
    workoutperiod,
    originalsecondsrest,
    originalminutesrest,
    originalhoursrest,
    //setReset,

    originalrepeat,

    setSecondsRest,
    setMinutesRest,
    setHoursRest,

    setFastForward,
    timers,
    currentbuttonindex,
    setCurrentButtonIndex,
    starttimer,
    setStartTimer
  } = useContext(TimerContext);
  const { roundedbuttons, setCounterDisplay } = React.useContext(ThemeContext);
//--------------Save Previous values ---------------------------
  const [previousseconds, setPreviousSeconds] = useState(0);
  const [previousminutes, setPreviousMintues] = useState(0);
  const [previoushours, setPreviousHours] = useState(0);
  const [paused, setPaused] = useState(false);
  const [intervalId, setIntervalId] = useState(0);
  const toddleworkout = workoutperiod === "Workout" ? "Resting" : "Workout";

  useEffect(() => {
    //***************** Only for stopwatch *********************************
    console.log("Current Index <><>" + currentbuttonindex);
    if (currentbuttonindex < timers.length) {
      if (timers[currentbuttonindex].type === "Stopwatch") {

        if (hours >= timers[currentbuttonindex].originalhours && minutes >= timers[currentbuttonindex].originalminutes && seconds >= timers[currentbuttonindex].originalseconds) {

          //if (timers.length > 1) {
          if (currentbuttonindex < timers.length) {


            setSeconds(() => 0);
            setMinutes(() => 0);
            setHours(() => 0);


            setCurrentButtonIndex((currentbuttonindex) => parseInt(currentbuttonindex + 1));

          } else {

            setFastForward(() => true);
          }


        }

        // Once the counter reaches 0 minutes 0 seconds 0 hours reset everything

        if (hours === timers[currentbuttonindex].originalhours && minutes === timers[currentbuttonindex].originalminutes && seconds === timers[currentbuttonindex].originalseconds) {

          /// removeTimer(0);
          //  if (timers.length > 1) {
          if (currentbuttonindex < timers.length) {
            setCurrentButtonIndex((currentbuttonindex) => parseInt(currentbuttonindex + 1));

            setIntervalId(() => null);
          }
        }

      } else {
        //*******************Run for all other timers  ******************************
        if (!onstart) {
          setSeconds(() => parseInt(timers[currentbuttonindex].originalseconds));
          setMinutes(() => parseInt(timers[currentbuttonindex].originalminutes));
          setHours(() => parseInt(timers[currentbuttonindex].originalhours));

          setIntervalId(() => null);
          //setStartTimer(() => true);

          setOnStart(() => true);
        }


        if (hours >= timers[currentbuttonindex].originalhours && minutes >= timers[currentbuttonindex].originalminutes && seconds >= timers[currentbuttonindex].originalseconds) {


          if (intervalId === 0) {
            setStartTimer(() => true);
          }

          if (timers[currentbuttonindex].type === "Tabata") {
            if (toddleworkout === "Resting") {
              setSeconds(() => parseInt(originalsecondsrest));
              setMinutes(() => parseInt(originalminutesrest));
              setHours(() => parseInt(originalhoursrest));
              setWorkOutPeriod(() => "Resting");


            }


            if (toddleworkout === "Workout") {
              setSeconds(() => parseInt(timers[currentbuttonindex].originalseconds));
              setMinutes(() => parseInt(timers[currentbuttonindex].originalminutes));
              setHours(() => parseInt(timers[currentbuttonindex].originalhours));
              setWorkOutPeriod(() => "Workout");
              setRepeat(() => repeat + 1);


            }

          }
          setFastForward(() => true);
        }
        if (hours === timers[currentbuttonindex].originalhours && minutes === timers[currentbuttonindex].originalminutes && seconds === timers[currentbuttonindex].originalseconds) {

          /// removeTimer(0);
          if (timers.length > 1) {

            setCurrentButtonIndex((currentbuttonindex) => parseInt(currentbuttonindex + 1));
            setIntervalId(() => null);
          }
          setFastForward(() => true);
        }
      }
      if (timers.length === currentbuttonindex) {
        setCurrentButtonIndex((currentbuttonindex) => parseInt(currentbuttonindex + 1));
        setIntervalId(() => null);
      }
    }
  });


  useEffect(() => {


    //************************************************************
    if (starttimer) {

      console.log(seconds);
      setIntervalId(setInterval(() => {

        if (timers[currentbuttonindex].type === "Stopwatch") {
          setSeconds(seconds => parseInt(seconds + 1));
        } else {
          setSeconds(seconds => parseInt(seconds - 1));
        }
        console.log(seconds);

      }, 1000));

      setStartTimer(() => false);
      //setCounterDisplay(() => myColors["yellow-green"]);
    }


    //*******************************************************8*****

  });

  return (
    <Container>
      <div style={positionButtons}>
        <Button text={"Done"} onClick={() => {
          setSeconds(() => 0);
          //setOnStart(() => true);
          setFastForward(() => true);

          setIntervalId(() => null);
          // setOnStart(() => false);
        }
        }
                disabled={true} style={roundedbuttons} />
        <Button text={"Start"} onClick={() => {
          if (paused) {
            setSeconds(() => previousseconds);
            setHours(() => previoushours);
            setMinutes(() => previousminutes);
          } else {
            if (timers[currentbuttonindex].type === "Stopwatch") {
              setSeconds(() => 0);
              setHours(() => 0);
              setMinutes(() => 0);
            } else {
              setSeconds(() => parseInt(timers[currentbuttonindex].originalseconds));
              setHours(() => parseInt(timers[currentbuttonindex].originalhours));
              setMinutes(() => parseInt(timers[currentbuttonindex].originalminutes));
            }
          }

          setRepeat(() => 0);
          // setOnStart(() => false);
          setStartTimer(() => true);

        }
        }
                disabled={true} style={roundedbuttons} id="idStopWatchTabataButton" />

        <Button text={"Stop"} onClick={() => {

          // initialize the resting values

          setPaused(() => true);
          setPreviousSeconds(() => seconds);
          setPreviousMintues(() => minutes);
          setPreviousHours(() => hours);

          clearInterval(intervalId);
          setIntervalId(() => null);
          // setOnStart(() => false);
          // setCounterDisplay(() => myColors["orange-yellow"]);
          let changeText = document.getElementById("idStopWatchTabataButton");
          changeText.innerHTML = "Resume ";
        }} style={roundedbuttons} />

        <Button text={"Reset"} onClick={() => {

          // Put everything back to it original values
          setCurrentButtonIndex(() => 0);
          //setReset(() => true);
          // setCounterDisplay(() => myColors["eggshell-white"]);
          let changeText = document.getElementById("idStopWatchTabataButton");
          changeText.innerHTML = "Start";
          setRepeat(() => 0);
          setWorkOutPeriod(() => "Workout");
          setPaused(() => false);
        }} style={roundedbuttons} />
      </div>
    </Container>
  );
};
export default StopWatchButtonsTimers;
