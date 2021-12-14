import React, { useContext } from "react";
import { TimerContext } from "../../mycontext/MyContexts";
import styled from 'styled-components';
const DeleteButton = styled.button`
  background-color: lightcoral;
`;
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
