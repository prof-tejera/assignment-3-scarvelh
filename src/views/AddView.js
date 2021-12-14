import React from "react";
import useDropdown from "../hooks/StopWatchDropdown";

import { Container, different_timers } from "../utils/helpers";
import StopWatchBodyCountDown from "../components/generic/StopWatchBodyCountDown";
import StopWatchAddButtonConfiguration from "../components/generic/StopWatchAddButtonConfiguration";
import StopWatchBodyXY from "../components/generic/StopWatchBodyXY";
import StopWatchBodyTabata from "../components/generic/StopWatchBodyTabata";
import StopWatchBodyRegular from "../components/generic/StopWatchBodyRegular";
import StopWatchProvider from "../mycontext/MyContexts";
import ConfigurationProvider from "../mycontext/StopWatchConfigurationContext";
import StopWatchList from "../components/generic/StopWatchList";

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
  backgroundColor: "white",
  width: "500px",
  padding: "30px",
  borderStyle: "outset",
  boxShadow: "inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 4px 6px rgba(0, 0, 0, 0.45)"
};
const AddView = () => {
  //const saved_type = localStorage.getItem("stop_type");
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

      <ConfigurationProvider>
        <Container style={backColor}>
          <StopWatchDropdown />
          <div style={ButtonPosition}>
            {selectedTimerType}
          </div>
          <p />
          <StopWatchAddButtonConfiguration />
          <p>Selected Timer Types</p>
          < hr />
          <StopWatchList />
        </Container>
      </ConfigurationProvider>

  );
};


export default AddView;
