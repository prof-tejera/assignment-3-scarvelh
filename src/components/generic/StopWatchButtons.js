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
      repeatprevious,
      setRepeatPrevious,
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
      setOriginalRepeat,
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

        } else if (timers[currentbuttonindex].type === "Countdown" || timers[currentbuttonindex].type === "XY") {
          if (!onstart) {
            setSeconds(() => timers[currentbuttonindex].originalseconds);
            setMinutes(() => timers[currentbuttonindex].originalminutes);
            setHours(() => timers[currentbuttonindex].originalhours);
            if (timers[currentbuttonindex].type === "XY") {
              setOriginalRepeat(() => timers[currentbuttonindex].originalrepeat);
              // setRepeat(()=> 1)
              // setOriginalRepeat(() => 0);
            }
            setOnStart(() => true);
          }

          // useEffect(() => {

          if (onstart && hours >= timers[currentbuttonindex].originalhours && minutes >= timers[currentbuttonindex].originalminutes && seconds >= timers[currentbuttonindex].originalseconds && originalrepeat >= repeat) {

            if (currentbuttonindex < timers.length && currentbuttonindex !== 0) {
              if (timers[currentbuttonindex].type === "Countdown") {
                setCurrentButtonIndex((currentbuttonindex) => parseInt(currentbuttonindex + 1));

                setFastForward(() => true);
              }
              // handles XY Timer
              else {

              /*  if (repeat < timers[currentbuttonindex].originalrepeat) {
                  setRepeat((repeat) => parseInt(repeat + 1));
                  setOnStart(() => false);
                } else {
                  setCurrentButtonIndex((currentbuttonindex) => parseInt(currentbuttonindex + 1));
                  setOnStart(() => false);
                  setFastForward(() => true);
                }*/

              }
            }
          }


          // Once the counter reaches 0 minutes 0 seconds 0 hours reset everything
          if (hours === 0 && minutes === 0 && seconds === 0 && originalrepeat >= repeat && onstart) {

            /// removeTimer(0);
            if (currentbuttonindex < timers.length) {
              if (timers[currentbuttonindex].type === "Countdown") {
                setCurrentButtonIndex((currentbuttonindex) => parseInt(currentbuttonindex + 1));
                //setIntervalId(() => null);
                setOnStart(() => false);
              }
              //handle XY Timer
              else {

                if (repeat < timers[currentbuttonindex].originalrepeat) {
                  setRepeat((repeat) => parseInt(repeat + 1));
                  setOnStart(() => false);
                } else {
                  setCurrentButtonIndex((currentbuttonindex) => parseInt(currentbuttonindex + 1));
                  //setRepeat(() =>1);
                  setOnStart(() => false);
                  setFastForward(() => true);
                }


              }
            }
          }


        } else if (timers[currentbuttonindex].type === "Tabata") {
          if (hours === 0 && minutes === 0 && seconds === 0 && onstart && intervalId !== null && originalrepeat > repeat) {


            if (toddleworkout === "Resting") {
              setSeconds(() => parseInt(originalsecondsrest));
              setMinutes(() => parseInt(originalminutesrest));
              setHours(() => parseInt(originalhoursrest));
              setWorkOutPeriod(() => "Resting");


            }


            if (toddleworkout === "Workout") {
              setSeconds(() => parseInt(originalseconds));
              setMinutes(() => parseInt(originalminutes));
              setHours(() => parseInt(originalhours));
              setWorkOutPeriod(() => "Workout");
              setRepeat(() => repeat + 1);


            }

            setReset(() => false);
            setOnStart(() => true);

          }
          // Once the counter reaches 0 minutes 0 seconds 0 hours reset everything
          if (hours === 0 && minutes === 0 && seconds === 0 && onstart && intervalId !== null && repeat >= originalrepeat) {
            clearInterval(intervalId);

            setRepeat(() => 0);
            setIntervalId(() => null);
            setOnStart(() => false);

            setReset(() => true);
            setFastForward(() => true);


            setWorkOutPeriod(() => "");


          }

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
            if (timers[currentbuttonindex].type === "XY" || timers[currentbuttonindex].type === "Tabata") {
              setRepeat(() => 1);
            } else {
              setRepeat(() => 0);
            }
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
  }
;
export default StopWatchButtonsTimers;
