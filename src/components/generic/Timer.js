import React from "react";
import styled from "styled-components";
import { convertToSeconds, secondsToTime } from "../../utils/helpers";

const Container = styled.div`
  display: flex;
  border-radius: 20%;
  width: 160px;
  height: 160px;
  margin-left: 30px;
  align-items: center;
  padding-bottom: 10px;
  border-style: outset;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 4px 6px rgba(0, 0, 0, 0.45);
  /* center text in the middle of the component */
  justify-content: center;

`;

const Timer = (props) => {
  // const { setStopwatchtype } = useContext(StopWatchContext);
  const calcsecs = convertToSeconds(props.hrs, props.mins, props.secs);
  // convert the number of seconds to  hour and minutes and seconds for the display
  const convertSeconds = secondsToTime(calcsecs);
  const combineHours = (parseInt(props.hrs) + parseInt(props.hrsrest));
  const combineMinutes = (parseInt(props.mins) + parseInt(props.minsrest));
  const combineSeconds = (parseInt(props.secs) + parseInt(props.secsrest));
  const totaltime = (convertToSeconds(combineHours,combineMinutes,combineSeconds) * props.rounds);
 let totalSeconds = secondsToTime(totaltime);
  if (totaltime === 0){
    totalSeconds = secondsToTime(calcsecs)
  }
  return (
    <Container onClick={() => {
      props.onClick(props.value);

    }} style={props.style}>
      <div>

        <p>
          {props.value}
        </p>
        <p style={{ color: 'red', fontWeight: "bolder" }}>
          {("0" + convertSeconds.hours).slice(-2)}:{("0" + convertSeconds.minutes).slice(-2)}:{("0" + convertSeconds.seconds).slice(-2)}
        </p>
        <p style={{ color: 'green', fontWeight: "bolder"}}>
          rounds: {props.rounds}
        </p>
        <p style={{ color: 'lightyellow',  fontWeight: "bolder"}}>
          Total time: {("0" + totalSeconds.hours).slice(-2)}:{("0" + totalSeconds.minutes).slice(-2)}:{("0" + totalSeconds.seconds).slice(-2)}
        </p>
      </div>
    </Container>
  );

};
Timer.defaultProps = {
  //dishes: [],
  onClick: () => {
  }
};


export default Timer;
