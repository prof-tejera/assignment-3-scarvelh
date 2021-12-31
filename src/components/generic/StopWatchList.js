import React from "react";
import { TimerContext } from "../../mycontext/MyContexts";


const StopWatchList = (props) => {


  const context = React.useContext(TimerContext);
  return (
    <table className="stopwatch-list">
      <thead>
      <tr>
        <th>StopWatch Type</th>
      </tr>
      </thead>
      <tbody>
      {context.timers.map((type, i) => (
        <tr key={i.toString()}>
          <td>
            {type.type}
          </td>
          <td>

            <button onClick={
              () => {console.log("Deleting" + i.toString());
              context.removeTimer({i})
              }} >Delete</button>
          </td>
        </tr>
      ))
      }
      </tbody>
    </table>
  );
};

export default StopWatchList;
