import React, { useContext, useState } from "react";
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
import Timer from "../components/generic/Timer";
import TimerTitle from "../components/generic/TimerTitle";
import styled from "styled-components";
import { TimerContext } from "../mycontext/MyContexts";
import { convertToSeconds, secondsToTime } from "../utils/helpers";
import {
  StopWatchButtonsCountDown,
  StopWatchButtonsCountDownTabata,
  StopWatchButtonsTimers
} from "../components/generic/StopWatchButtons";

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
const ButtonPosition = {
  /* The size of the buttons passed */
  fontSize: "20px",
  alignItems: "right",
  //border: ".1rem red solid",
  borderRadius: "20%",
  float: "left"

};
const myStyle = {
  backgroundColor: "#add8e6", alignItems: "center", cursor: "pointer"

};
const activeTimer ={
  backgroundColor: "lightblue", alignItems: "center", cursor: "pointer"
}
const timers1 = [
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
//const create_timers = [];

export const StopWatchDisplayTypes = () => {
  const create_timers = [];
  const [type, setType] = useState("Stopwatch");


  const {
    timers,
    setStopwatchtype,
    currentbuttonindex
  } = useContext(TimerContext);

  //***********************************************************
  const context = React.useContext(TimerContext);
  //useEffect(() => {
  // if (context.timers) {
  context.timers.map((type, i) => {
    let n = new Map();

    n.set("title", type.type);
    n.set("C", <Countdown />);
    n.set("customStyling", "{ backgroundColor: \"#ffffe0\", alignItems: \"center\", cursor: \"pointer\" }");
    create_timers.push(n);
    console.log(create_timers);
    //create_timers.set(n);

  });
  //}
  // });
  // **********************************************************


  //stopwatchtype = "Stopwatch"
  function HandleTimerClick(timerType) {


    setStopwatchtype(() => timerType);

    console.log("Handler" + timerType);

    setType(() => timerType);

  }

  const { stop_watch, setStop_watch } = React.useContext(TimerContext);


  let selectedTimerType;
  if (create_timers.length > 0) {
    let t = context.timers[0].type;
    //switch (type) {
    switch (t) {
      case "Stopwatch":
        selectedTimerType = <Stopwatch style={myStyle} />;
        break;
      case "Countdown":
        selectedTimerType = <Countdown style={myStyle} />;
        break;
      case "XY":
        selectedTimerType = <XY style={myStyle} />;
        break;
      case "Tabata":
        selectedTimerType = <Tabata style={myStyle} />;
        break;

      default:

    }
  }
  return (

    <Container >
      <div style={ButtonPosition}>
      <StopWatchButtonsTimers style={ButtonPosition}/>
    </div>
      <div style={AlignGrid}>

        {create_timers.map((c_timer, i) => (
          <Timer title={c_timer.get("title") } onClick={
          () => {
          HandleTimerClick(c_timer.get("title"));
        }
        }
          value={c_timer.get("title")} style={c_timer.customStyling}
          key={i.toString()}
          hrs={timers[i].originalhours}
          mins={timers[i].originalminutes}
          secs={timers[i].originalseconds}
          rounds={timers[i].originalrepeat}
          style={{
            backgroundColor: i===currentbuttonindex ? '#958f46': 'lightgrey',

            }}          >
          <TimerTitle>{c_timer.get("title")}</TimerTitle>

        {c_timer.get("C")}
          </Timer>
          ))
        }
      </div>
      {selectedTimerType}

    </Container>
  );
};
export default StopWatchDisplayTypes;
