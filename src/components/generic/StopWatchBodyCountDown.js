import React, { useContext } from "react";
import { StopWatchContext } from "../../mycontext/MyContexts";
import { customStyleInput } from "../timers/Countdown";

const hoursInput = React.createRef();
const minutesInput = React.createRef();
const secondsInput = React.createRef();
/**
 * This handles the body of the countdown timer
 *  Functional Component
 * @returns {JSX.Element}
 * @constructor
 */
const StopWatchBodyCountDown = () => {
    // get the values from countdown provider context
    const {

        setOriginalMinutes,
        setOriginalSeconds,
        setOriginalHours
    } = useContext(StopWatchContext)


  // return the values of the body of the CountDown timer
    return (


        <>
            <p>(Hours)</p>
            <input ref={hoursInput} type="number" placeholder={0} name="hours" onChange={(e) => {

                setOriginalHours(originalhours => hoursInput.current.value)
            }}
                   min="0"
                   style={customStyleInput}/>
            <p>(Minutes)</p>
            <input ref={minutesInput} type="number" placeholder={0} name="minutes" onChange={(e) => {

                setOriginalMinutes(originalminutes => minutesInput.current.value)

            }}
                   min="0" style={customStyleInput}/>

            <p>(Seconds)</p>
            <input ref={secondsInput} type="number" placeholder={0} name="seconds" onChange={(e) => {

                setOriginalSeconds(originalseconds => secondsInput.current.value);

            }}
                   min="0" style={customStyleInput}/>
        </>
    )
}

export default StopWatchBodyCountDown;
