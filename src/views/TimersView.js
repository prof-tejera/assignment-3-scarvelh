import React, { Component } from "react";
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
import Timer from "../components/generic/Timer";
import TimerTitle from "../components/generic/TimerTitle";
import styled from "styled-components";


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

class TimersView extends Component {
  static contextType = ConfigurationContext;
  state = {
    // keep the value ot type os stop watch
    timerTypeValues: "Stopwatch"
  };


  handleTimerClick = (timerType) => {

    //console.log("I am click" + timerType);
    //this.setState({ timerTypeValues: this.state.timerTypeValues = timerType });
    this.setState({ timerTypeValues: timerType });
  };


  //kind of contextType) {
  //    console.log("Adding" + kind.mins);
   // }
  // function;

  // App() {

  timers = [
    {
      title: "Stopwatch",
      C: <Stopwatch />,
      customStyling: { backgroundColor: "#add8e6", alignItems: "center", cursor: "pointer" }
    }
    // { title: "Countdown", C: <Countdown />, customStyling: { backgroundColor: "#ffffe0", alignItems: "center" ,cursor:"pointer"} },
    //{ title: "Tabata", C: <Tabata />, customStyling: { backgroundColor: "#FF7F7F", alignItems: "center",justifyItems: "center", cursor:"pointer"} }
  ];

//console.log("55555");
  render() {
    let selectedTimerType;
    if (this.state.timerTypeValues === "Stopwatch") {

      // selectedTimerType = <Stopwatch />;
    }

    switch (this.state.timerTypeValues) {
      case "Stopwatch":
        selectedTimerType = <Stopwatch style={this.timers[0].customStyling} />;
        break;
      case "Countdown":
        selectedTimerType = <Countdown style={this.timers[1].customStyling} />;
        break;
      case "XY":
        selectedTimerType = <XY style={this.timers[2].customStyling} />;
        break;
      case "Tabata":
        selectedTimerType = <Tabata style={this.timers[3].customStyling} />;
        break;

      default:

        selectedTimerType = <Stopwatch style={this.timers[0].customStyling} />;
    }


    return (
      <Container>
        <div style={AlignGrid}>
          {this.timers.map((timer) => (
            <Timer title={timer.title} onClick={this.handleTimerClick(timer.title)} value={timer.title} style={timer.customStyling}
                   key={timer.title}>
              <TimerTitle>{timer.title}</TimerTitle>
              {timer.C}
            </Timer>
          ))}
        </div>
        {selectedTimerType}

      </Container>
    );

  }
}

//console.log("stop");
export default TimersView;
