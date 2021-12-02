import React from "react";
import useDropdown from "../hooks/StopWatchDropdown";

import { Container, different_timers } from "../utils/helpers";

import { ThemeProvider } from "../mycontext/MyThemeContexts";
import StopWatchBodyCountDown from "../components/generic/StopWatchBodyCountDown";
import StopWatchAddButtonConfiguration from "../components/generic/StopWatchAddButtonConfiguration";
import { StopWatchContext } from "../mycontext/MyContexts";
import StopWatchBodyXY from "../components/generic/StopWatchBodyXY";
import StopWatchBodyTabata from "../components/generic/StopWatchBodyTabata";
import StopWatchTimerDisplay from "../components/generic/TimerDisplay";
import { ConfigurationProvider } from "../mycontext/StopWatchConfigurationContext";
import StopWatchBodyRegular from "../components/generic/StopWatchBodyRegular";

const stopwatch_types = ["Stopwatch", "Countdown", "XY", "Tabata"];
const ButtonPosition = {
  /* The size of the buttons passed */
  fontSize: "20px",
  borderRadius: "20%"

};
export const backColor = {
  borderRadius: "15%",
  //fontSize: "15px"
  height: "auto",
  backgroundColor:"white",
  width:"500px",
  padding:"30px",
  borderStyle: "outset",
boxShadow: "inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 4px 6px rgba(0, 0, 0, 0.45)"
};
const AddView = () => {
  const [stopwatch, StopWatchDropdown] = useDropdown("Stopwatch Configuration", stopwatch_types, true);
  console.log("xxx" + stopwatch);
  let selectedTimerType;


  switch (stopwatch) {
    case "Stopwatch":
      selectedTimerType = <StopWatchBodyRegular style={different_timers[0].customStyling} />;
      break;
    case "Countdown":
      selectedTimerType = <StopWatchBodyCountDown style={different_timers[1].customStyling} />;
      break;
    case "XY":
      selectedTimerType = <StopWatchBodyXY style={different_timers[2].customStyling} />;
      break;
    case "Tabata":
      selectedTimerType = <StopWatchBodyTabata style={different_timers[3].customStyling} />;
      break;

    default:


  }

  return (

        <Container  style={backColor}>
          <StopWatchDropdown />
          <div style={ButtonPosition}>
            {selectedTimerType}
          </div>
          <StopWatchAddButtonConfiguration />
        </Container>

  );
};



export default AddView;
