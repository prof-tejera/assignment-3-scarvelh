import React, { useContext } from "react";
import styled from "styled-components";
import { StopWatchContext } from "../../mycontext/MyContexts";

const Container = styled.div`
  display: flex;
  border-radius: 20%;
  width: 120px;
  height: 75px;
  margin-left: 30px;
  align-items: center;
  padding-bottom: 10px;
  border-style: outset;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 4px 6px rgba(0, 0, 0, 0.45);
  /* center text in the middle of the component */
  justify-content: center;

`;

const Timer = (props) =>{
  const { setStopwatchtype } = useContext(StopWatchContext);

  return (
    <Container  onClick={() => {props.onClick(props.value)
    console.log(props.value)


      setStopwatchtype(() => props.value);

    }} style={props.style}>
      {props.value}
    </Container>
  );

}
Timer.defaultProps = {
  //dishes: [],
  onClick: () => { },
};



export default Timer;