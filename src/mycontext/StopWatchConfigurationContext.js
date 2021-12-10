import React from "react";
//

export const ConfigurationContext = React.createContext({

  stopwatches: [],
  addStopWatchType: (name, hrs, mins, secs,rounds) => {
  },
});

export function ConfigurationProvider({ children }) {
  const [stopwatch, setStopwatch] = React.useState([]);
  const [addstopwatchtype,addStopWatchType] = React.useState(0)
  return <ConfigurationContext.Provider
    value={{
      stopwatch,
      setStopwatch,
      addStopWatchType,

   }}>{children}</ConfigurationContext.Provider>;
 //   }}></ConfigurationContext.Provider>;
}
 export default ConfigurationProvider;
