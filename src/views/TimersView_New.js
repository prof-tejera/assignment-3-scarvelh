import React, { useCallback, useContext } from "react";
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
import Timer from "../components/generic/Timer";
import TimerTitle from "../components/generic/TimerTitle";
import styled from "styled-components";
import { StopWatchContext } from "../mycontext/MyContexts";
import { useUpdateContext } from "../hooks/StopWatchDropdown";

const Container = styled.div`
  background-color: #C0C0C0;
  display: inline-flex;
  //padding: 30px;
  // border: 5px solid blue;
  border-radius: 20%;
  // border-radius: 10px;
  align-items: center;
  margin-left: 60px;
  //float: right;
  border-style: outset;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 4px 6px rgba(0, 0, 0, 0.45);
`;
// align text in a grid
const AlignGrid = {
  margin: "30px",
  alignItems: "center"
};


//kind of contextType) {
//    console.log("Adding" + kind.mins);
// }
// function;

// App() {

const timers = [
  {
    title: "Stopwatch",
    C: <Stopwatch />,
    customStyling: { backgroundColor: "#add8e6", alignItems: "center", cursor: "pointer" }
  },
  {
    title: "Countdown",
    C: <Countdown />,
    customStyling: { backgroundColor: "#ffffe0", alignItems: "center", cursor: "pointer" }
  }
  //{ title: "Tabata", C: <Tabata />, customStyling: { backgroundColor: "#FF7F7F", alignItems: "center",justifyItems: "center", cursor:"pointer"} }
];

 export const HandleTimerClick = (timerType) => {
  //// useCallback(() => {
     //const { setStopwatchtype } = useContext(StopWatchContext);

      //setStopwatchtype(() => timerType);

  //const[stopwatchlabel,setStopwatchlabel] = useUpdateContext(timerType)
     console.log("Handler" + timerType);
  // });

 }

  export const StopWatchDisplayTypes = () => {
//export const TimersView_New = () => {
   let {

      stopwatchtype,


    } = useContext(StopWatchContext);
    //stopwatchtype = "Stopwatch"

    let selectedTimerType;


    switch (stopwatchtype) {
      case "Stopwatch":
        selectedTimerType = <Stopwatch style={timers[0].customStyling} />;
        break;
      case "Countdown":
        selectedTimerType = <Countdown style={timers[1].customStyling} />;
        break;
      case "XY":
        selectedTimerType = <XY style={timers[2].customStyling} />;
        break;
      case "Tabata":
        selectedTimerType = <Tabata style={timers[3].customStyling} />;
        break;

      default:


    }
    const { setStopwatchtype } = useContext(StopWatchContext);



    return (
      <Container>
        <div style={AlignGrid}>
          {timers.map((timer) => (
            <Timer title={timer.title} onClick={
              () => {
                HandleTimerClick(timer.title)
                //setStopwatchtype(() => timer.title);
              }

            }


                   value={timer.title} style={timer.customStyling}
                   key={timer.title}>
              <TimerTitle>{timer.title}</TimerTitle>
              {timer.C}
            </Timer>
          ))}
        </div>
        {selectedTimerType}

      </Container>
    );

  };
//}
//export default TimersView_New;

  export default StopWatchDisplayTypes;