import React from "react";
//

export const ConfigurationContext = React.createContext({

  stopwatches: [],
  addStopWatchType: (name, hrs, mins, secs,rounds) => {
  }
});

export function ConfigurationProvider({ children }) {
  const [stop_watch, setStop_watch] = React.useState([]);

  return <ConfigurationContext.Provider
    value={{
      stop_watch,
      setStop_watch

    }}>{children}</ConfigurationContext.Provider>;
}
