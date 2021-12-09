import React from "react";
import { ConfigurationContext } from "../../mycontext/StopWatchConfigurationContext";

const StopWatchList = (props) => {
  const context = React.useContext(ConfigurationContext);
  return (
    <table className="stopwat-list">
      <thead>
      <tr>
        <th>StopWatch Type</th>

      </tr>

      </thead>
      <tbody>
      {context.stopwatches.map(({stop, i}) => (
        <tr key={stop.name}>
          <td>{stop.name}</td>

        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default StopWatchList;
