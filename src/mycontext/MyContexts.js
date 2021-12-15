import React, { useState } from "react";


// Create Context

//*********************************** Generic StopWatch context ********************************************************
export const TimerContext = React.createContext({});

// create context for stopwatches
export function StopWatchProvider({ children }) {

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [originalseconds, setOriginalSeconds] = useState(0);
  const [originalminutes, setOriginalMinutes] = useState(0);
  const [originalhours, setOriginalHours] = useState(0);
  // rest Timer information
  const [, setSecondsRest] = useState(0);
  const [, setMinutesRest] = useState(0);
  const [, setHoursRest] = useState(0);
  const [originalsecondsrest, setOriginalSecondsRest] = useState(0);
  const [originalminutesrest, setOriginalMinutesRest] = useState(0);
  const [originalhoursrest, setOriginalHoursRest] = useState(0);


  const [onstart, setOnStart] = useState(true);
  const [repeat, setRepeat] = useState(0);
  const [originalrepeat, setOriginalRepeat] = useState(0);
  const [reset, setReset] = useState(false);
  const [workoutperiod, setWorkOutPeriod] = useState("Workout");
  const [fastforward, setFastForward] = useState(false);
  const [stopwatchtype, setStopwatchtype] = useState("");
  const [timers, setTimers] = useState([]);
  const [starttimer, setStartTimer] = useState(false);
  const addTimer = (config) => {
    const timers1 = [...timers, config];
    setTimers(timers1);
  };

  const removeTimer = (index) => {
    timers.splice(index, 1);
    setTimers(timers);
  };
  const [currentbuttonindex, setCurrentButtonIndex] = useState(0);
  return <TimerContext.Provider
    value={{
      hours,
      setHours,
      minutes,
      setMinutes,
      seconds,
      setSeconds,
      onstart,
      setOnStart,
      repeat,
      setRepeat,
      reset,
      setReset,
      originalhours,
      setOriginalHours,
      originalminutes,
      setOriginalMinutes,
      originalseconds,
      setOriginalSeconds,
      //===== Tabata Rest timer =================
      originalhoursrest,
      setOriginalHoursRest,
      originalminutesrest,
      setOriginalMinutesRest,
      originalsecondsrest,
      setOriginalSecondsRest,
      setSecondsRest,
      setMinutesRest,
      setHoursRest,
      setOriginalRepeat,
      //========== set work out period =============
      workoutperiod,
      setWorkOutPeriod,
      originalrepeat,
      //setOriginalRepeat,
      fastforward,
      setFastForward,
      setStopwatchtype,
      stopwatchtype,
      timers,
      setTimers,
      addTimer,
      removeTimer,
      currentbuttonindex,
      setCurrentButtonIndex,
      starttimer,
      setStartTimer,

    }}>{children}</TimerContext.Provider>;
}

export default StopWatchProvider;



