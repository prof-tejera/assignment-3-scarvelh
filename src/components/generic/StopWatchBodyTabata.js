import { customStyleInput } from "../timers/Countdown";
import React, { useContext } from "react";
import { StopWatchContext } from "../../mycontext/MyContexts";


const AlignGrid = {

    //display: "flex",
    display: "flex",
    //alignItems: "center",
    flexDirection: "column",

    justifyContent: "center", /* align items vertically, in this case */
    alignItems: "flex-start",
    marginLeft: "10px",
    paddingBottom: "10px"
    //float: "left"
};
const hoursInput = React.createRef();
const minutesInput = React.createRef();
const secondsInput = React.createRef();
// Rest counters
const hoursRestInput = React.createRef();
const minutesRestInput = React.createRef();
const secondsRestInput = React.createRef();

const repeatInput = React.createRef();
/**
 *  The body of the StopWatch Tabatya
 * @returns {JSX.Element}
 * @constructor
 */
export const StopWatchBodyTabata = () => {
    const {
        setOriginalHours,
        setOriginalSeconds,
        setOriginalMinutes,
        setOriginalHoursRest,
        setOriginalSecondsRest,
        setOriginalMinutesRest,
        setOriginalRepeat,

    } = useContext(StopWatchContext)


// return the body of the Stop watch Tabata body
    return (
        <>

            <div style={{display: "flex"}}>
                <div style={AlignGrid}>
                    <p>Timer 1 (Hours)</p>
                    <input ref={hoursInput} type="number" placeholder={0} name="hours" onChange={() => {

                        setOriginalHours(() => parseInt(hoursInput.current.value));
                    }}
                           min="0" style={customStyleInput}/>
                    <p>Timer 1 (Minutes)</p>
                    <input ref={minutesInput} type="number" placeholder={0} name="minutes"
                           onChange={() => {

                               setOriginalMinutes(() => parseInt(minutesInput.current.value));

                           }}
                           min="0" style={customStyleInput}/>
                    <p>Timer 1 (Seconds)</p>
                    <input ref={secondsInput} type="number" placeholder={0} name="seconds"
                           onChange={() => {

                               setOriginalSeconds(() => parseInt(secondsInput.current.value))

                           }}
                           min="0" style={customStyleInput}/>
                </div>
                <div style={AlignGrid}>
                    <p>Timer 2 (Rest Hours)</p>
                    <input ref={hoursRestInput} type="number" placeholder={0} name="hours" onChange={() => {

                        setOriginalHoursRest(() => parseInt(hoursRestInput.current.value));
                    }}
                           min="0" style={customStyleInput}/>
                    <p>Timer 2 (Rest Minutes)</p>
                    <input ref={minutesRestInput} type="number" placeholder={0} name="minutes"
                           onChange={() => {


                               setOriginalMinutesRest(() => parseInt(minutesRestInput.current.value));

                           }}
                           min="0" style={customStyleInput}/>
                    <p>Timer 2 (Rest Seconds)</p>
                    <input ref={secondsRestInput} type="number" placeholder={0} name="seconds"
                           onChange={() => {


                               setOriginalSecondsRest(() => parseInt(secondsRestInput.current.value))

                           }}
                           min="0" style={customStyleInput}/>
                </div>

                <div style={AlignGrid}>
                    <p>Repeat number of Times</p>
                    <input ref={repeatInput} type="number" placeholder={1} name="numTimes"
                           onChange={() => {


                               setOriginalRepeat(() => parseInt(repeatInput.current.value));

                           }}
                           min="0" style={customStyleInput}/>
                </div>
            </div>

        </>
    )
}
export default StopWatchBodyTabata;
