import Button from "./Button";
import React, { useContext } from "react";
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

  const {
    originalseconds,
    originalminutes,
    originalhours,
    originalsecondsrest,
    originalminutesrest,
    originalhoursrest,
    originalrepeat,


    addTimer,
    setFastForward,
  } = useContext(TimerContext);
  console.log("ttt");


  return (


    <>
      <div style={positionButtons}>
        <Button text={"Add"} onClick={() => {

          ///******************************************************
          const saved_type = localStorage.getItem("stop_type");
           setFastForward(()=> false)

          addTimer({type:saved_type, originalhours, originalminutes, originalseconds, originalrepeat,originalhoursrest, originalminutesrest, originalsecondsrest, });
          //***********************************************************


        }
        } disabled={true} />
      </div>
    </>
  );
};
export default StopWatchAddButtonConfiguration;
