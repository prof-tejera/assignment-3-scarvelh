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
  justifyItems: "center",
};

export const StopWatchButtonsTimers = () => {
  const {
    seconds,
    setSeconds,
    timers,
    activeTimerIndex,
    setActiveTimerIndex,
    isRunning,
    setIsRunning,
  } = useContext(TimerContext);

  useEffect(() => {
    let timerId;
    const currentTimer = timers[activeTimerIndex];

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
      }
    };

    if (isRunning && currentTimer) {
      timerId = setInterval(() => {
        if (currentTimer.type === "Stopwatch") {
          // we have reached the end
          if (seconds === currentTimer.originalseconds) {
            moveToNextTimer();
          } else {
            setSeconds(seconds + 1);
          }
        } else if (currentTimer.type === "Countdown") {
          // we have reached the end
          if (seconds === 0) {
            moveToNextTimer();
          } else {
            setSeconds(seconds - 1);
          }
        }
        // TODO add the rest of the timers
      }, 1000);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [activeTimerIndex, isRunning, seconds, setSeconds, timers]);

  const onStart = () => {
    setActiveTimerIndex(0);
    setIsRunning(true);

    // check what the first timer is, so we can initalize seconds
    const firstTimer = timers[0];
    if (firstTimer.type !== "Stopwatch") {
      setSeconds(firstTimer.originalseconds);
    } else {
      setSeconds(0);
    }
  };

  const onPause = () => {
    setIsRunning(false);
  };

  return (
    <Container>
      <div style={positionButtons}>
        <Button text="Done" onClick={() => {}} />
        <Button text="Start" onClick={onStart} />

        <Button text="Stop" onClick={onPause} />

        <Button text="Reset" onClick={() => {}} />
      </div>
    </Container>
  );
};
export default StopWatchButtonsTimers;
