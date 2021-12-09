import React, { useState } from "react";

const useDropdown = (label, stopwatchoptions, defaultstate) => {
  const [state, setState] = useState(defaultstate);
  const DropDownStopWatch = () => (
    <label htmlFor={label}>
      {label}
      <select
        id={label}
        value={state}
        onChange={e => {setState(e.target.value);
          localStorage.setItem("stop_type", e.target.value);
        }}
        disabled={!stopwatchoptions.length}


      >
        <option>---</option>
        {stopwatchoptions.map(item =>
          <option key={item} value={item}>{item}</option>)}
      </select>
    </label>
  );
  return [state, DropDownStopWatch, setState];
};


export default useDropdown;
