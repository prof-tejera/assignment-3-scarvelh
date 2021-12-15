import React from "react";
import { StopWatchTimerDisplayCountDown, TimerDisplay } from "../generic/TimerDisplay";
import { StopWatchButtonsCountDown } from "../generic/StopWatchButtons";
import { Container } from "../../utils/helpers";
import StopWatchBodyXY from "../generic/StopWatchBodyXY";
import { ThemeContext, ThemeProvider } from "../../mycontext/MyThemeContexts";
import StopWatchRounds from "../generic/StopWatchRounds";


const ButtonPosition = {
    /* The size of the buttons passed */
    fontSize: "20px",
    alignItems: "center",
    //border: ".1rem red solid",
    borderRadius: "20%",
    //float: "top"
    paddingTop: "20px"
};


function App() {
    const {themexy} = React.useContext(ThemeContext)
    return (

            <ThemeProvider>
                <Container style={themexy}>

                    <TimerDisplay/>
                    <StopWatchRounds />
                    <hr />


                </Container>
            </ThemeProvider>

    );
}



export default App;
