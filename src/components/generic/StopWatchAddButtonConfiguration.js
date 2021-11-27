import Button from "./Button";
import React, { useContext } from "react";
import { ConfigurationContext } from "../../mycontext/StopWatchConfigurationContext";
import { StopWatchContext } from "../../mycontext/MyContexts";

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
  const { stop_watch, setStop_watch } = React.useContext(ConfigurationContext);
  const {
    originalseconds,
    originalminutes,
    originalhours,

    originalrepeat,
} = useContext(StopWatchContext);
 /* const context = React.useContext(ConfigurationContext);
  for (const kind of context.stopwatches) {
    console.log("Adding" + kind.mins);
  }*/
  return (

    <>
      <div style={positionButtons}>
        <Button text={"Add"} onClick={() => {
          const newStopWatch = { stop_watch, originalhours, originalminutes, originalseconds, originalrepeat  };
          setStop_watch(() => newStopWatch);
         console.log("fff");
        }
        }
                disabled={true} />
      </div>
    </>
  );
};
export default StopWatchAddButtonConfiguration;
