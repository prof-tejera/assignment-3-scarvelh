import React from "react";
import {StopWatchTimerDisplayCountDown} from "../generic/TimerDisplay";
import {StopWatchButtonsCountDown} from "../generic/StopWatchButtons";
import {Container} from "../../utils/helpers";

import {CountDownProvider} from "../../mycontext/MyContexts";
import StopWatchBodyCountDown from "../generic/StopWatchBodyCountDown";
import {ThemeContext, ThemeProvider} from "../../mycontext/MyThemeContexts";


const ButtonPosition = {
    /* The size of the buttons passed */
    fontSize: "20px",
    alignItems: "center",
    //border: ".1rem red solid",
    borderRadius: "20%",
    //float: "left",
    paddingTop: "20px"
};
export const customStyleInput = {
    borderRadius: "15%",
    //fontSize: "15px"
    height: "20px"
};


function App() {
    const {themecountdown} = React.useContext(ThemeContext)


    return (
        <CountDownProvider>
            <ThemeProvider>
                <Container style={themecountdown}>
                    <StopWatchTimerDisplayCountDown/>
                    <StopWatchBodyCountDown/>
                    <div style={ButtonPosition}>
                        <StopWatchButtonsCountDown style={ButtonPosition}/>
                    </div>
                </Container>
            </ThemeProvider>
        </CountDownProvider>
    );
}




export default App;
