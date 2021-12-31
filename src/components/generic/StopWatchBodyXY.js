import { customStyleInput } from "../timers/Countdown";
import { TimerContext } from "../../mycontext/MyContexts";
import React, { useContext } from "react";
//import {myColors} from "../../utils/helpers";
import { ThemeContext } from "../../mycontext/MyThemeContexts";
import { myColors } from "../../utils/helpers";


const hoursInput = React.createRef();
const minutesInput = React.createRef();
const secondsInput = React.createRef();
const repeatInput = React.createRef();

const StopWatchBodyXY = () => {
    // get countdown Context
    const {
        seconds,
        minutes,
        hours,
        reset,
        setReset,
        setOriginalHours,
        setOriginalSeconds,
        setOriginalMinutes,
        setOriginalRepeat,

    } = useContext(TimerContext)
    // get values from them context
    const {setCounterDisplay} = React.useContext(ThemeContext);
    // reset the selected values
    if (reset && (seconds <= 0 && minutes <= 0 && hours <= 0)) {
        hoursInput.current.value = 0;
        minutesInput.current.value = 0;
        secondsInput.current.value = 0;
        repeatInput.current.value = 0;
        setReset(() => false);
        setCounterDisplay(() => myColors["eggshell-white"])
        setReset(() => false);
        setOriginalRepeat(() => 0);

        //-----------------------------------Just Added

    }
    // return XY timer body
    return (
        <>
            <p>(Hours)</p>
            <input ref={hoursInput} type="number" placeholder={0} name="hours" onChange={() => {


                setOriginalHours(() => hoursInput.current.val);
            }} min="0"
                   style={customStyleInput}/>
            <p>(Minutes)</p>
            <input ref={minutesInput} type="number" placeholder={0} name="minutes" onChange={() => {


                setOriginalMinutes(() => minutesInput.current.value);

            }}
                   min="0" style={customStyleInput}/>
            <p>(Seconds)</p>
            <input ref={secondsInput} type="number" placeholder={0} name="seconds" onChange={() => {


                setOriginalSeconds(() => secondsInput.current.value)

            }}
                   min="0" style={customStyleInput}/>
            <p>Repeat number of Times</p>
            <input ref={repeatInput} type="number" placeholder={0} name="numTimes" onChange={() => {

                // set original value repeat(number of rounds)
                setOriginalRepeat(() => repeatInput.current.value);
            }}
                   min="0" style={customStyleInput}/>

        </>
    )

}
export default StopWatchBodyXY;
