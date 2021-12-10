import React from "react";
import { TimerContext } from "../../mycontext/MyContexts";

const StopWatchList = (props) => {
  //const context = React.useContext(ConfigurationContext);
//  const [ stopwatch, setStopwatch ] = React.useContext(ConfigurationContext);

  const [timers] = React.useContext(TimerContext);
  return (
    <table className="stopwat-list">
      <thead>
      <tr>
        <th>StopWatch Type</th>

      </tr>

      </thead>
      <tbody>



         <tr >
         <td>{timers}</td>

         </tr>








      </tbody>
    </table>
  );
};

export default StopWatchList;
