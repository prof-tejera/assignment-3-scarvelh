import { TimerContext } from "../../mycontext/MyContexts";
import React, { useContext } from "react";

/**
 * Let the user know the round that they are on
 * Please note that "Rounds is directed ties to my variable 'repeat' and function 'setReap'
 * @returns {JSX.Element}
 * @constructor
 */
function StopWatchRounds() {
    // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
 let {

        repeat,
        setRepeat,
        originalrepeat,
 } = useContext(TimerContext)
    // had some sync issues this fixes it.
    if (repeat <= 0) {
        repeat = 0;
    }
    // had some sync issues this fixes it.
    if (repeat > originalrepeat) {

        setRepeat(repeat => originalrepeat)
    }
    // return the number of rounds output
    return (

        <div>
            <p>Rounds {parseInt(repeat)} of {originalrepeat}</p>

        </div>
    );
}

/**
 * Display the number of rounds for  the stopwatch Tabata time
 * // Differs from the other timer I added another output "Workout" or "Resting" to illustrate
 * what current period you are in
 * @returns {JSX.Element}
 * @constructor
 */
export function StopWatchRoundsTabata() {
    // Get the countdown Tabata context
    let {

        repeat,
        setRepeat,
        originalrepeat,

        workoutperiod,

    } = useContext(TimerContext)
    // had some sync issues this fixes it.
    if (repeat <= 0) {
        repeat = 0;
    }
// had some sync issues this fixes it.
    if (repeat > originalrepeat) {

        setRepeat(repeat => originalrepeat)
    }

    return (

        <div>
            <p>Rounds {parseInt(repeat)} of {originalrepeat}</p>
            <p>{workoutperiod}</p>
        </div>
    );
}

export default StopWatchRounds;
