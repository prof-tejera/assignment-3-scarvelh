import Button from "./Button";
import React, { useContext } from "react";
import { ConfigurationContext } from "../../mycontext/StopWatchConfigurationContext";
import { TimerContext } from "../../mycontext/MyContexts";

const positionButtons = {
  display: "flex",
  justifyContent: "space-between",
  width: "10rem",
  borderRadius: "20%",
  alignItems: "center",
  //padding: "40px",
  //float: "right",
  fontSize: "20px",
  paddingLeft: "5px",
  justifyItems: "center"

};
const StopWatchAddButtonConfiguration = () => {
  const { stopwatch, setStopwatch, addStopWatchType } = React.useContext(ConfigurationContext);
  // const context = React.useContext(ConfigurationContext);
  const {
    originalseconds,
    originalminutes,
    originalhours,

    originalrepeat,

    setTimers,
  } = useContext(TimerContext);
  console.log("ttt");
  return (

    <>
      <div style={positionButtons}>
        <Button text={"Add"} onClick={() => {
          const saved_type = localStorage.getItem("stop_type");
          const newStopWatch = { saved_type, originalhours, originalminutes, originalseconds, originalrepeat };
          //const newStopWatch = { saved_type, originalhours, originalminutes, originalseconds, originalrepeat };
         /* const addStopWatchType = (saved_type,originalhours,originalminutes,originalseconds,originalrepeat) => {
           const newStopWatch = { saved_type, originalhours, originalminutes, originalseconds, originalrepeat };
            setStop_watch(prevStop => [...prevStop, { saved_type, originalhours, originalminutes, originalseconds, originalrepeat}]);
          };*/
          setStopwatch(() => newStopWatch);
          setTimers(()=>newStopWatch)
          console.log("fff");
        }
        }
                disabled={true} />
      </div>
    </>
  );
};
export default StopWatchAddButtonConfiguration;
