import React, { useState } from "react";


// Create Context

//*********************************** Generic StopWatch context ********************************************************
export const StopWatchContext = React.createContext({
    hours: 0,
    minutes: 0,
    seconds: 0,
    hoursrest: 0,
    minutesrest: 0,
    secondsrest: 0,
    orginalhours: 0,
    orginalminutes: 0,
    originalseconds: 0,
    // rest  timer
    orginalhoursrest: 0,
    orginalminutesrest: 0,
    originalsecondsrest: 0,
    onstart: false,
    repeat: 1,
    reset: false,
    workoutperiod: "Workout",
    fastforward: false,
    stopwatchtype: "",
    setSeconds: () => {
    },
    setMinutes: () => {
    },
    setHours: () => {
    },
    setOnStart: () => {
    },
    setRepeat: () => {
    },
    setReset: () => {
    },
    setOriginalSeconds: () => {
    },
    setOriginalMinutes: () => {
    },
    setOriginalHours: () => {
    },
    // rest timer
    setOriginalSecondsRest: () => {
    },
    setOriginalMinutesRest: () => {
    },
    setOriginalHoursRest: () => {
    },
    setWorkOutPeriod: () => {
    },
    setOriginalReapeat: () => {
    },
    setFastForward: () => {

    },
    setStopwatchtype: () => {

    }
  }
);

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


  const [onstart, setOnStart] = useState(false);
  const [repeat, setRepeat] = useState(1);
  const [originalrepeat, setOriginalRepeat] = useState(1);
  const [reset, setReset] = useState(false);
  const [workoutperiod, setWorkOutPeriod] = useState("Workout");
  const [fastforward, setFastForward] = useState(false);
  const [stopwatchtype, setStopwatchtype] = useState("");
  return <StopWatchContext.Provider
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
      stopwatchtype

    }}>{children}</StopWatchContext.Provider>;
}

//export default CountProvider;


export default StopWatchProvider;



