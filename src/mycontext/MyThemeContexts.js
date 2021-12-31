import React, { useState } from "react";
import myColors from "../utils/helpers";
// styling for the different stop watches


export const themes = {
    customStylingStopWatch: {backgroundColor: "#add8e6", alignItems: "center", cursor: "pointer" },

    customStylingCountDown: {backgroundColor: "#ffffe0", alignItems: "center", cursor: "pointer"},
    customStylingXY: {backgroundColor: "#20b2aa", alignItems: "center", cursor: "pointer"},
    customStylingTabata: {backgroundColor: "#FF7F7F", alignItems: "center", justifyItems: "center", cursor: "pointer"},
    roundedButtons: {fontSize: "20px", borderRadius: "20%"},
    counterDisplay: {backgroundColor: myColors["eggshell-white"]},

}
export const initialState = {

    themestopwatch: themes.customStylingStopWatch,
    themecountdown: themes.customStylingCountDown,
    themexy: themes.customStylingXY,
    themetabata: themes.customStylingTabata,
    roundedbuttons: themes.roundedButtons,
    counterdisplay: themes.counterDisplay,
}
// create theme context
export const ThemeContext = React.createContext(initialState);

// create theme providers
export function ThemeProvider({children}) {
    const [themestopwatch, setThemeStopWatch] = useState(themes.customStylingStopWatch);
    const [themecountdown, setThemeCountDown] = useState(themes.customStylingCountDown);
    const [themexy, setThemeXY] = useState(themes.customStylingXY);
    const [themetabata, setThemeTabata] = useState(themes.customStylingTabata);
    const [roundedbuttons, setRoundedButtons] = useState(themes.roundedButtons);
    const [counterdisplay,setCounterDisplay] = useState(themes.counterDisplay);

    return (
        <ThemeContext.Provider value={{
            themestopwatch,
            themecountdown,
            themexy,
            themetabata,
            setThemeStopWatch,
            setThemeCountDown,
            setThemeXY,
            setThemeTabata,
            roundedbuttons,
            setRoundedButtons,
            counterdisplay,
            setCounterDisplay,
        }}>
            {children}
        </ThemeContext.Provider>
    )

}

//export {ThemeProvider, ThemeContext}
 //export default ThemeProvider;
