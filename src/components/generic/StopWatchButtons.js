import React, { useContext, useEffect } from "react";
import Button from "./Button";
import styled from "styled-components";
import { TimerContext } from "../../mycontext/MyContexts";
import { ThemeContext } from "../../mycontext/MyThemeContexts";

const Container = styled.div`
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
  fontSize: "20px",
  paddingLeft: "5px",
  justifyItems: "center"
};

export const StopWatchButtonsTimers = () => {
    const {
      seconds,
      setSeconds,
      setMinutes, setHours,
      setWorkOutPeriod, workoutperiod,
      timers,
      activeTimerIndex,
      setActiveTimerIndex,
      isRunning,
      setIsRunning,
      setOriginalRepeat,
      setFastForward,
      setRepeat,
      repeat,

    } = useContext(TimerContext);
    const toddleworkout = workoutperiod === "Workout" ? "Resting" : "Workout";
    console.log(toddleworkout);
    useEffect(() => {
      let timerId;
      let currentTimer = timers[activeTimerIndex];

      const moveToNextTimer = () => {
        // if completed workout then stop, else go to the next timer
        if (activeTimerIndex === timers.length - 1) {
          setActiveTimerIndex(null);
          setIsRunning(false);
          setSeconds(0);
        } else {
          const newIndex = activeTimerIndex + 1;
          const nextTimer = timers[newIndex];

          if (nextTimer.type !== "Stopwatch") {
            setSeconds(nextTimer.originalseconds);
          } else {
            setSeconds(0);
          }

          setActiveTimerIndex(activeTimerIndex + 1);
          setRepeat(0);
        }
      };

      if (isRunning && currentTimer) {

        timerId = setInterval(() => {


            if (currentTimer.type === "Stopwatch") {
              // we have reached the end
              if (seconds === currentTimer.originalseconds) {
                if (activeTimerIndex === timers.length - 1) {
                  setFastForward(true);
                  setIsRunning(false);
                } else {
                  moveToNextTimer();
                  setRepeat(0);
                  setOriginalRepeat(0);
                }

              } else {
                setSeconds(seconds + 1);
              }
              //setOriginalRepeat(timers[activeTimerIndex].originalrepeat);
              setRepeat(0);
            } else if (currentTimer.type === "Countdown") {
              // we have reached the end
              if (seconds === 0) {
                if (activeTimerIndex === timers.length - 1) {

                  setFastForward(true);
                  setIsRunning(false);
                } else {

                  moveToNextTimer();
                  setRepeat(0);
                  // setOriginalRepeat( timers[activeTimerIndex].originalrepeat);
                }
              } else {
                setSeconds(seconds - 1);
              }
              setOriginalRepeat(timers[activeTimerIndex].originalrepeat);
              setRepeat(0);
            } else if (currentTimer.type === "XY") {
              console.log(seconds);
              // we have reached the end
              if (seconds === 0) {
                setRepeat(repeat + 1);
                if (repeat < timers[activeTimerIndex].originalrepeat) {


                  setSeconds(currentTimer.originalsecond);
                  setRepeat(repeat + 1);

                } else {

                  if (activeTimerIndex === timers.length - 1) {
                    setFastForward(true);
                    setIsRunning(false);
                  } else {
                    setOriginalRepeat(timers[activeTimerIndex].originalrepeat);

                    moveToNextTimer();
                   // setRepeat(1);
                  }

                }
              } else {
                setSeconds(seconds - 1);
                setOriginalRepeat(timers[activeTimerIndex].originalrepeat);


              }


            } else if (currentTimer.type === "Tabata") {
              // we have reached the end

              //-----NEW STUFFF-------------------
              console.log(seconds);
              // we have reached the end
              if (seconds === 0) {

                if (repeat < timers[activeTimerIndex].originalrepeat) {

                  if (toddleworkout === "Resting") {
                    setSeconds(() => parseInt(timers[activeTimerIndex].originalsecondsrest));
                    setMinutes(() => parseInt(timers[activeTimerIndex].originalminutesrest));
                    setHours(() => parseInt(timers[activeTimerIndex].originalhoursrest));
                    setWorkOutPeriod(() => "Resting");


                  }


                  if (toddleworkout === "Workout") {

                    setSeconds(() => parseInt(timers[activeTimerIndex].originalseconds));
                    setMinutes(() => parseInt(timers[activeTimerIndex].originalminutes));
                    setHours(() => parseInt(timers[activeTimerIndex].originalhours));


                    setWorkOutPeriod(() => "Workout");
                    setRepeat(repeat + 1);
                  }


                } else {

                  if (activeTimerIndex === timers.length - 1) {
                    setFastForward(true);
                    setIsRunning(false);
                  } else {
                    //  setOriginalRepeat(timers[activeTimerIndex].originalrepeat);

                    moveToNextTimer();
                    //  setRepeat(1);
                  }

                }
              } else {

                //setOriginalRepeat(timers[activeTimerIndex].originalrepeat);
                setSeconds(seconds - 1);


              }


              //-------NEW STUFF------------------
            }


            // TODO add the rest of the timers
          }
          ,
          1000);
      }

      return () => {
        clearInterval(timerId);
      };
    }, [activeTimerIndex, isRunning, seconds, setSeconds, timers, repeat, setActiveTimerIndex, setIsRunning, setOriginalRepeat, setRepeat,setFastForward,setHours,setMinutes,setWorkOutPeriod,toddleworkout,])
    ;

    const onStart = () => {
      setActiveTimerIndex(0);
      setIsRunning(true);

      // check what the first timer is, so we can initialize seconds
      const firstTimer = timers[0];
      if (firstTimer.type !== "Stopwatch") {
        setSeconds(firstTimer.originalseconds);
        setOriginalRepeat(firstTimer.originalrepeat);
        setRepeat(1);
      } else {
        setSeconds(0);
      }
    };
    const onPause = () => {
      setIsRunning(false);
    };
    const onReset = () => {
      setActiveTimerIndex(0);
      setRepeat(0);
      setIsRunning(false);
      setFastForward(false);
      setSeconds(0);
      //   clearInterval(timerId);
    };
    const onDone = () => {
      setActiveTimerIndex(0);
      setRepeat(0);
      setIsRunning(false);
      setFastForward(true);
      setSeconds(0);
      //   clearInterval(timerId);
    };
    return (
      <Container>
        <div style={positionButtons}>
          <Button text="Done" onClick={onDone} />
          <Button text="Start" onClick={onStart} />

          <Button text="Stop" onClick={onPause} />

          <Button text="Reset" onClick={onReset} />
        </div>
      </Container>
    );
  }
;
export default StopWatchButtonsTimers;
