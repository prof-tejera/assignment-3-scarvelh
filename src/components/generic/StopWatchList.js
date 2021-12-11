import React from "react";
import { TimerContext } from "../../mycontext/MyContexts";

const StopWatchList = (props) => {


  const context = React.useContext(TimerContext);
  return (
    <table className="stopwat-list">
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
        </tr>
      ))
      }
      </tbody>
    </table>
  );
};

export default StopWatchList;
