import React, { useContext, useEffect, useState } from "react";
import Button from "./Button";
import styled from "styled-components";
import { StopWatchContext } from "../../mycontext/MyContexts";
//import {myColors} from "../../utils/helpers";
import { ThemeContext } from "../../mycontext/MyThemeContexts";
import myColors from "../../utils/helpers";


const Container = styled.div`
  //   background-color: lightgrey;
  align-items: center;
  font-size: 20px;
`;
// align text in a grid
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
//==============================Stop Watch Timer========================================================================
/**
 * Handle the stopwatch  ONLY timer functional component
 * @returns {JSX.Element}
 * @constructor
 */
export const StopWatchButtons = () => {
    // get the theme from the theme context
    const {roundedbuttons, setCounterDisplay} = React.useContext(ThemeContext)
    // get the stopwatch provider context
    const {

        setSeconds,
        onstart,
        setOnStart,
        setFastForward,
    } = useContext(StopWatchContext)
    // set the interval initial values
    const [intervalId, setIntervalId] = useState(0);

    return (

        <Container>
            <div style={positionButtons}>
                <Button text={"Done"} onClick={() => {
                    // The 'Done" button handle the fast forward feature
                    setSeconds(() => 0);
                    setOnStart(() => true);
                    setFastForward(() => true);
                    clearInterval(intervalId);
                    setIntervalId(() => null);
                    setOnStart(() => false)
                }
                }
                        disabled={true} style={roundedbuttons}/>
                <Button text={"Start"} onClick={() => {

                    setFastForward(() => false);
                    // start timer if it not already started
                    if (!onstart) {
                        setIntervalId(setInterval(() => {
                            setSeconds(seconds => seconds + 1)
                        }, 1000))
                        setOnStart(() => true)
                        //change the color of the display
                        setCounterDisplay(() => myColors["yellow-green"])
                    }


                }
                }
                        style={roundedbuttons}
                        disabled={true} id="idStopWatchButton"/>
                <Button text={"Stop"} onClick={() => {
                    clearInterval(intervalId);

                    setOnStart(() => false)
                    setCounterDisplay(() => myColors["orange-yellow"])
                    // change the start button to "resume" to continue after a pause
                    let changeText = document.getElementById('idStopWatchButton')
                    changeText.innerHTML = "Resume "


                }} style={roundedbuttons}/>
                <Button text={"Reset"} onClick={() => {
                    // reset everything back to it original values
                    clearInterval(intervalId);
                    setSeconds(() => 0);

                    setOnStart(() => false)
                    setCounterDisplay(() => myColors["eggshell-white"])
                    let changeText = document.getElementById('idStopWatchButton');
                    changeText.innerHTML = "Start";
                }} style={roundedbuttons}/>
            </div>
        </Container>
    );

}
//===============================CountDown and XY Timers=====================================================================================
/**
 * The Functional Component handles 2 of the stop watches
 * CountDown Timer
 * XY Timer
 */


export const StopWatchButtonsCountDown = () => {
// get vales from CountDown Context
    const {
        seconds,
        setSeconds,
        minutes,
        setMinutes,
        hours,
        setHours,
        onstart,
        setOnStart,

        setReset,
        repeat,
        setRepeat,
        originalseconds,
        originalminutes,
        originalhours,

        originalrepeat,

        setFastForward,

    } = useContext(StopWatchContext);
    //Get the values from the theme context
    const {roundedbuttons, setCounterDisplay} = React.useContext(ThemeContext)
    const [intervalId, setIntervalId] = useState(0);
    //--------------Save Previous values ---------------------------
    const [previousseconds, setPreviousSeconds] = useState(0);
    const [previousminutes, setPreviousMintues] = useState(0);
    const [previoushours, setPreviousHours] = useState(0);
    // handle when the stop button have been pressed
    const [paused, setPaused] = useState(false)

    useEffect(() => {

        if (hours === 0 && minutes === 0 && seconds === 0 && onstart && intervalId !== null && originalrepeat > repeat) {


            setSeconds(() => originalseconds);
            setMinutes(() => originalminutes);
            setHours(() => originalhours);

            setOnStart(() => true);
            // the repeat variable handles the number of rounds
            setRepeat(() => repeat + 1);
        }

        // Once the counter reaches 0 minutes 0 seconds 0 hours reset everything
        if (((hours === 0 && minutes === 0 && seconds === 0) && onstart && intervalId !== null && repeat >= originalrepeat)) {
            // pause timer for the seconds
            clearInterval(intervalId);

            setInterval(() => null);
            setOnStart(() => false);
            setSeconds(() => 0);
            setOnStart(() => true);
            setFastForward(() => true);
            setOnStart(() => false)
        }
    });

// return vales to render
    return (


        <Container>
            <div style={positionButtons}>
                <Button text={"Done"} onClick={() => {
                    // Fast Forward Feature
                    setSeconds(() => 0);
                    setOnStart(() => true);
                    setFastForward(() => true);
                    clearInterval(intervalId);
                    setIntervalId(() => null);
                    setOnStart(() => false)


                }
                }
                        disabled={true} style={roundedbuttons}/>

                <Button text={"Start"} onClick={() => {
                    setFastForward(() => false);
                    // if the stop watch is pauses get the values of the seconds minutes hours from the previous seconds
                    if (paused) {
                        setSeconds(() => previousseconds);
                        setHours(() => previoushours);
                        setMinutes(() => previousminutes);
                        // get the value from the original number of second minutes and seconds
                    } else {
                        setSeconds(() => originalseconds);
                        setHours(() => originalhours);
                        setMinutes(() => originalminutes);


                    }
                    setRepeat(() => 0);
                    // if the start button is not click start the timer
                    if (!onstart) {

                        // start interval timer
                        setIntervalId(setInterval(() => {
                            setSeconds(seconds => seconds - 1)

                        }, 1000))
                        setOnStart(() => true);
                        setReset(() => false);
                        // change counter display color
                        setCounterDisplay(() => myColors["yellow-green"]);

                    }


                }
                }
                        disabled={true} style={roundedbuttons} id="sButton"/>

                <Button text={"Stop"} onClick={() => {
                    // when "stop button is press pause the stopwatch
                    setPaused(() => true);
                    // save the current hours minutes and seconds
                    setPreviousSeconds(() => seconds);
                    setPreviousMintues(() => minutes);
                    setPreviousHours(() => hours);
                    // pause or stop timer
                    clearInterval(intervalId);

                    setOnStart(() => false)
                    // change the display color
                    setCounterDisplay(() => myColors["orange-yellow"])
                    // change "Start" button to "Resume"
                    let changeText = document.getElementById('sButton')
                    changeText.innerHTML = "Resume "

                }} style={roundedbuttons}/>

                <Button text={"Reset"} onClick={() => {
                    // Put everything back to it original values
                    setFastForward(() => false);
                    clearInterval(intervalId);
                    // reset to the original values
                    setSeconds(() => originalseconds);
                    setHours(() => originalhours);
                    setMinutes(() => originalminutes);
                    setInterval(() => null);
                    setOnStart(() => false);
                    setReset(() => true);
                    setCounterDisplay(() => myColors["eggshell-white"]);
                    let changeText = document.getElementById('sButton');
                    changeText.innerHTML = "Start";
                    setRepeat(() => 0);
                    setPaused(() => false)
                }} style={roundedbuttons}/>
            </div>


        </Container>


    );

}
// ========================================== Tabata Buttons countdown =====================================

export const StopWatchButtonsCountDownTabata = () => {

    const {
        seconds,
        setSeconds,
        minutes,
        setMinutes,
        hours,
        setHours,
        onstart,
        setOnStart,

        setReset,
        repeat,
        setRepeat,
        originalseconds,

        originalminutes,

        originalhours,

        setWorkOutPeriod,
        workoutperiod,
        originalsecondsrest,
        originalminutesrest,
        originalhoursrest,
        //setReset,

        originalrepeat,

        setSecondsRest,
        setMinutesRest,
        setHoursRest,

        setFastForward,
    } = useContext(StopWatchContext);
    const {roundedbuttons, setCounterDisplay} = React.useContext(ThemeContext)
//--------------Save Previous values ---------------------------
    const [previousseconds, setPreviousSeconds] = useState(0);
    const [previousminutes, setPreviousMintues] = useState(0);
    const [previoushours, setPreviousHours] = useState(0);
    const [paused, setPaused] = useState(false)
    const [intervalId, setIntervalId] = useState(0);
    const toddleworkout = workoutperiod === "Workout" ? "Resting" : "Workout";

    useEffect(() => {
        if (hours === 0 && minutes === 0 && seconds === 0 && onstart && intervalId !== null && originalrepeat > repeat) {


            if (toddleworkout === "Resting") {
                setSeconds(() => parseInt(originalsecondsrest));
                setMinutes(() => parseInt(originalminutesrest));
                setHours(() => parseInt(originalhoursrest));
                setWorkOutPeriod(() => "Resting")


            }


            if (toddleworkout === "Workout") {
                setSeconds(() => parseInt(originalseconds));
                setMinutes(() => parseInt(originalminutes));
                setHours(() => parseInt(originalhours));
                setWorkOutPeriod(() => "Workout")
                setRepeat(() => repeat + 1);


            }

            setReset(() => false);
            setOnStart(() => true);

        }
    });


    useEffect(() => {
        // Once the counter reaches 0 minutes 0 seconds 0 hours reset everything
        if (hours === 0 && minutes === 0 && seconds === 0 && onstart && intervalId !== null && repeat >= originalrepeat) {
            clearInterval(intervalId);

            setRepeat(() => 0);
            setIntervalId(() => null);
            setOnStart(() => false);

            setReset(() => true);
            setFastForward(() => true);


            setWorkOutPeriod(() => "");


        }

    }, [hours, minutes, seconds, onstart, intervalId, repeat, originalrepeat, setRepeat, setOnStart, setReset, setFastForward, setWorkOutPeriod]);
    useEffect(() => {
        if (toddleworkout === "Resting" && onstart) {
            setCounterDisplay(() => myColors["yellow-green"]);


        }
        if (toddleworkout === "Workout" && onstart) {
            setCounterDisplay(() => myColors["resting"])
        }
    });
    return (


        <Container>
            <div style={positionButtons}>
                <Button text={"Done"} onClick={() => {
                    setSeconds(() => 0);
                    setOnStart(() => true);
                    setFastForward(() => true);
                    clearInterval(intervalId);
                    setIntervalId(() => null);
                    setOnStart(() => false)

                }
                }
                        disabled={true} style={roundedbuttons}/>


                <Button text={"Start"} onClick={() => {
                    if (paused) {
                        setSeconds(() => previousseconds);
                        setHours(() => previoushours);
                        setMinutes(() => previousminutes);
                    } else {
                        setSeconds(() => originalseconds);
                        setHours(() => originalhours);
                        setMinutes(() => originalminutes);
                    }

                    setRepeat(() => 0);

                    if (!onstart) {

                        console.log(seconds);
                        setIntervalId(setInterval(() => {


                            setSeconds(seconds => seconds - 1)


                        }, 1000))
                        setOnStart(() => true);
                        setReset(() => false);
                        setCounterDisplay(() => myColors["yellow-green"])
                    }
                }
                }
                        disabled={true} style={roundedbuttons} id="idStopWatchTabataButton"/>

                <Button text={"Stop"} onClick={() => {

                    // initialize the resting values

                    setPaused(() => true);
                    setPreviousSeconds(() => seconds);
                    setPreviousMintues(() => minutes);
                    setPreviousHours(() => hours);

                    clearInterval(intervalId);
                    setIntervalId(() => null);
                    setOnStart(() => false)
                    setCounterDisplay(() => myColors["orange-yellow"]);
                    let changeText = document.getElementById('idStopWatchTabataButton')
                    changeText.innerHTML = "Resume "
                }} style={roundedbuttons}/>

                <Button text={"Reset"} onClick={() => {

                    // Put everything back to it original values
                    setFastForward(() => false);
                    clearInterval(intervalId);

                    // reset to the original values
                    setSeconds(() => originalseconds);
                    setHours(() => originalhours);
                    setMinutes(() => originalminutes);
                    setInterval(() => null);
                    setSecondsRest(() => originalsecondsrest);
                    setMinutesRest(() => originalminutesrest);
                    setHoursRest(() => originalhoursrest);

                    setOnStart(() => false);
                    setReset(() => true);
                    setCounterDisplay(() => myColors["eggshell-white"]);
                    let changeText = document.getElementById('idStopWatchTabataButton');
                    changeText.innerHTML = "Start";
                    setRepeat(() => 1);
                    setWorkOutPeriod(() => "Workout")
                    setPaused(() => false)
                }} style={roundedbuttons}/>
            </div>
        </Container>
    );
}
export default StopWatchButtons;
