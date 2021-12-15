import { TimerDisplay } from "../generic/TimerDisplay";
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


            <ThemeProvider>
                <Container style={themestopwatch}>

                    <TimerDisplay/>

                </Container>
            </ThemeProvider>

    );
};



export default App;
