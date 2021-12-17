import React from "react";
import { TimerDisplay } from "../generic/TimerDisplay";
import { Container } from "../../utils/helpers";
import { ThemeContext, ThemeProvider } from "../../mycontext/MyThemeContexts";
import StopWatchRounds from "../generic/StopWatchRounds";


export const customStyleInput = {
  borderRadius: "15%",
  //fontSize: "15px"
  height: "20px"
};


function App() {
  const { themecountdown } = React.useContext(ThemeContext);


  return (

    <ThemeProvider>
      <Container style={themecountdown}>
        <TimerDisplay />
        <StopWatchRounds />
        <hr />

      </Container>
    </ThemeProvider>

  );
}


export default App;
