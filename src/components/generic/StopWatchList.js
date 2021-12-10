import React from "react";
import { ConfigurationContext } from "../../mycontext/StopWatchConfigurationContext";

const StopWatchList = (props) => {
  //const context = React.useContext(ConfigurationContext);
  const { stopwatch, setStopwatch } = React.useContext(ConfigurationContext);
  return (
    <table className="stopwat-list">
      <thead>
      <tr>
        <th>StopWatch Type</th>

      </tr>

      </thead>
      <tbody>



         <tr >
         <td>{stopwatch.saved_type}</td>

         </tr>








      </tbody>
    </table>
  );
};

export default StopWatchList;
