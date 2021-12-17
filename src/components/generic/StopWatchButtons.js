import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import styled from "styled-components";
import { TimerContext } from "../../mycontext/MyContexts";

import { ThemeContext } from "../../mycontext/MyThemeContexts";


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
      repeat,
      setRepeat,
      setWorkOutPeriod,
      workoutperiod,
      originalrepeat,
      setOriginalRepeat,
      setFastForward,
      timers,
      currentbuttonindex,
      setCurrentButtonIndex,
      starttimer,
      setStartTimer,
      setWorkoutController
    } = useContext(TimerContext);
    const { roundedbuttons } = React.useContext(ThemeContext);
//--------------Save Previous values ---------------------------
    const [previousseconds, setPreviousSeconds] = useState(0);
    const [previousminutes, setPreviousMintues] = useState(0);
    const [previoushours, setPreviousHours] = useState(0);
    const [paused, setPaused] = useState(false);
    const [intervalId, setIntervalId] = useState(0);
    const toddleworkout = workoutperiod === "Workout" ? "Resting" : "Workout";
//***************** Only for stopwatch *********************************
    useEffect(() => {

      console.log("Current Index <><>" + currentbuttonindex);
      if (currentbuttonindex < timers.length) {

        if (timers[currentbuttonindex].type === "Stopwatch") {
          if (!onstart) {
            setSeconds(() => 0);
            setMinutes(() => 0);
            setHours(() => 0);
            setOnStart(() => true);

          }


          if (onstart && hours >= timers[currentbuttonindex].originalhours && minutes >= timers[currentbuttonindex].originalminutes && seconds >= timers[currentbuttonindex].originalseconds) {

            //setCurrentButtonIndex((currentbuttonindex) => 0)
            if (currentbuttonindex < timers.length) {
              setCurrentButtonIndex((currentbuttonindex) => parseInt(currentbuttonindex + 1));
              setOnStart(() => false);
              //setStartTimer(() => true);
            }

            if ((currentbuttonindex + 1) >= timers.length) {

              setFastForward(() => true);
              clearInterval(intervalId);
              setIntervalId(() => null);
              setStartTimer(() => true);

            }
            if ((currentbuttonindex + 1) === timers.length) {
              setFastForward(() => true);
              setSeconds((() => 0));
              setMinutes(() => 0);
              setHours(() => 0);

              clearInterval(intervalId);
              setIntervalId(() => null);
              setStartTimer(true);
            }
          }

        }
      }
    }, [setIntervalId, currentbuttonindex, timers, onstart, hours, minutes, seconds, setSeconds, setMinutes, setHours, setOnStart, setCurrentButtonIndex, setFastForward, intervalId, setStartTimer]);

//***************** Only for Countdown and XY *********************************
    useEffect(() => {
      if (currentbuttonindex < timers.length) {
        if (timers[currentbuttonindex].type === "Countdown" || timers[currentbuttonindex].type === "XY") {
          if (!onstart) {
            setSeconds(() => parseInt(timers[currentbuttonindex].originalseconds));
            setMinutes(() => parseInt(timers[currentbuttonindex].originalminutes));
            setHours(() => parseInt(timers[currentbuttonindex].originalhours));
            if (timers[currentbuttonindex].type === "XY") {
              setOriginalRepeat(() => parseInt(timers[currentbuttonindex].originalrepeat));

            }
            setOnStart(() => true);

            console.log("rttt" + intervalId);

          }


          if (onstart && hours >= timers[currentbuttonindex].originalhours && minutes >= timers[currentbuttonindex].originalminutes && seconds >= timers[currentbuttonindex].originalseconds && originalrepeat >= repeat) {

            if (currentbuttonindex < timers.length && currentbuttonindex !== 0) {
              if (timers[currentbuttonindex].type === "Countdown") {


                setFastForward(() => true);
                clearInterval(intervalId);
                setIntervalId(() => null);

              }
              // handles XY Timer
              else {

                /* if (repeat < timers[currentbuttonindex].originalrepeat) {
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


            if (currentbuttonindex < timers.length) {
              if (timers[currentbuttonindex].type === "Countdown") {
                setCurrentButtonIndex(() => parseInt(currentbuttonindex + 1));
                setOnStart(() => false);
                if (currentbuttonindex >= timers.length) {
                  setFastForward(() => true);
                  clearInterval(intervalId);
                  setIntervalId(() => null);
                  setStartTimer(() => true);
                }
                setStartTimer(() => true);
              }
              //handle XY Timer
              else {

                if (repeat < timers[currentbuttonindex].originalrepeat) {
                  setRepeat(() => parseInt(repeat + 1));
                  setOnStart(() => false);
                } else {
                  setCurrentButtonIndex(() => parseInt(currentbuttonindex + 1));

                  setOnStart(() => false);
                  setFastForward(() => true);

                }


              }
            }
          }


        }
      }
    }, [currentbuttonindex, timers, onstart, hours, minutes, seconds, originalrepeat, repeat, setSeconds, setMinutes, setHours, setOnStart, setOriginalRepeat, setFastForward, intervalId, setStartTimer, setCurrentButtonIndex, setRepeat]);
    //});
//***************** Only for Tabata *********************************
    useEffect(() => {
      if (currentbuttonindex < timers.length) {
        if (timers[currentbuttonindex].type === "Tabata") {
          if (!onstart) {
            setSeconds(() => timers[currentbuttonindex].originalseconds);
            setMinutes(() => timers[currentbuttonindex].originalminutes);
            setHours(() => timers[currentbuttonindex].originalhours);
            setWorkOutPeriod(() => "Workout");

            setOnStart(() => true);

          }


          if (hours === 0 && minutes === 0 && seconds === 0 && onstart && timers[currentbuttonindex].originalrepeat >= repeat) {

            if (toddleworkout === "Resting") {
              setSeconds(() => parseInt(timers[currentbuttonindex].originalsecondsrest));
              setMinutes(() => parseInt(timers[currentbuttonindex].originalminutesrest));
              setHours(() => parseInt(timers[currentbuttonindex].originalhoursrest));
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
          if (hours === 0 && minutes === 0 && seconds === 0 && onstart && repeat < originalrepeat && currentbuttonindex >= timers.length) {
            setCurrentButtonIndex(() => parseInt(currentbuttonindex + 1));
            setRepeat(() => 1);
            setFastForward(() => true);
            setWorkOutPeriod(() => "Workout");
            setCurrentButtonIndex(() => 0);
            //clearInterval(intervalId);
            //setIntervalId(() => null);
            setOnStart(() => false);
          }
          if (currentbuttonindex < timers.length) {

            if (currentbuttonindex >= timers.length) {
              setFastForward(() => true);
              clearInterval(intervalId);
              setIntervalId(() => null);
              setStartTimer(() => true);
            }
            //setStartTimer(() => true);

          }
          if (hours === 0 && minutes === 0 && seconds === 0 && onstart && currentbuttonindex < timers.length && repeat === timers[currentbuttonindex].originalrepeat) {
            setCurrentButtonIndex(() => parseInt(currentbuttonindex + 1));
            setOnStart(() => false);
            setRepeat(() => 1);


            if ((currentbuttonindex + 1) >= timers.length) {

              setFastForward(() => true);
              clearInterval(intervalId);
              //setIntervalId(() => null);
              //setStartTimer(() => true);

            }

          }


        }

      }
    }, [setStartTimer, intervalId, currentbuttonindex, timers, hours, minutes, seconds, setSeconds, setMinutes, setHours, setCurrentButtonIndex, setFastForward, onstart, originalrepeat, repeat, setOnStart, setOriginalRepeat, setRepeat, setWorkOutPeriod, setWorkoutController, toddleworkout]);


    useEffect(() => {


      //************************************************************
      if (starttimer) {

        console.log(seconds);
        setIntervalId(setInterval(() => {
          if (currentbuttonindex > timers.length) {
            setCurrentButtonIndex(() => 0);
          }
          if (currentbuttonindex < timers.length) {
            if (timers[currentbuttonindex].type === "Stopwatch") {
              setSeconds((seconds) => parseInt(seconds + 1));
            } else {
              setSeconds((seconds) => parseInt(seconds - 1));
            }
          }
          console.log("My seconds" + seconds);

        }, 1000));

        setStartTimer(() => false);

      }


      //*******************************************************8*****

    }, [starttimer, setStartTimer, currentbuttonindex, timers, hours, minutes, seconds, setSeconds, setMinutes, setHours, setCurrentButtonIndex, setFastForward, onstart, originalrepeat, repeat, setOnStart, setOriginalRepeat, setRepeat, setWorkOutPeriod, setWorkoutController, toddleworkout]);

    return (
      <Container>
        <div style={positionButtons}>
          <Button text={"Done"} onClick={() => {
            setSeconds(() => 0);

            setFastForward(() => true);

            setIntervalId(() => null);

          }
          }
                  disabled={true} style={roundedbuttons} />
          <Button text={"Start"} onClick={() => {
            if (paused) {
              setSeconds(() => previousseconds);
              setHours(() => previoushours);
              setMinutes(() => previousminutes);
            } else {
              // fix a wierd bug
              if (currentbuttonindex > timers.length) {
                setCurrentButtonIndex(() => parseInt(currentbuttonindex - 1));
              }
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


            let changeText = document.getElementById("idStopWatchTabataButton");
            changeText.innerHTML = "Resume ";
          }} style={roundedbuttons} />

          <Button text={"Reset"} onClick={() => {

            // Put everything back to it original values
            setCurrentButtonIndex(() => 0);
            setFastForward((() => false));

            let changeText = document.getElementById("idStopWatchTabataButton");
            changeText.innerHTML = "Start";
            setRepeat(() => 1);
            setWorkOutPeriod(() => "Workout");
            setPaused(() => false);
            clearInterval(intervalId);
            setIntervalId(() => null);
            setOnStart(() => false);
            setHours(() => 0);
            setMinutes(() => 0);
            setSeconds(() => 0);

          }} style={roundedbuttons} />
        </div>
      </Container>
    );
  }
;
export default StopWatchButtonsTimers;
