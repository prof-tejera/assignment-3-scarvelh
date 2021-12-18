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
  const { repeat, originalrepeat } = useContext(TimerContext);

  // return the number of rounds output
  return (
    <div>
      <p>
        Rounds {parseInt(repeat)} of {originalrepeat}
      </p>
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
  const {
    repeat,
    setRepeat,
    originalrepeat,
    timers,
    activeTimerIndex,
    workoutperiod,
  } = useContext(TimerContext);

  // had some sync issues this fixes it.
  if (repeat > originalrepeat) {
    setRepeat(() => timers[activeTimerIndex].originalrepeat);
  }

  return (
    <div>
      <p>
        Rounds {parseInt(repeat)} of {timers[activeTimerIndex].originalrepeat}
      </p>
      <p>{workoutperiod}</p>
    </div>
  );
}

export default StopWatchRounds;
