import { StopWatchTimerDisplay } from "../generic/TimerDisplay";
import StopWatchButtons from "../generic/StopWatchButtons";
import { StopWatchProvider } from "../../mycontext/MyContexts";
import { ThemeContext, ThemeProvider } from "../../mycontext/MyThemeContexts";
import React from "react";
import { Container } from "../../utils/helpers";
//import ReactDOM from "react-dom";
// align text in a grid
const ButtonPosition = {
    /* The size of the buttons passed */
    fontSize: "20px",
    borderRadius: "20%"

};

function App() {
// get the themes from Theme context
    const {themestopwatch} = React.useContext(ThemeContext)

    return (

        <StopWatchProvider>
            <ThemeProvider>
                <Container style={themestopwatch}>

                    <StopWatchTimerDisplay/>
                    <div style={ButtonPosition}>
                        <StopWatchButtons style={ButtonPosition}/>
                    </div>
                </Container>
            </ThemeProvider>
        </StopWatchProvider>
    );
};



export default App;
