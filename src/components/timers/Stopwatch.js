import { TimerDisplay } from "../generic/TimerDisplay";
import { ThemeContext, ThemeProvider } from "../../mycontext/MyThemeContexts";
import React from "react";
import { Container } from "../../utils/helpers";
import StopWatchRounds from "../generic/StopWatchRounds";


function App() {
// get the themes from Theme context
  const { themestopwatch } = React.useContext(ThemeContext);

  return (


    <ThemeProvider>
      <Container style={themestopwatch}>

        <TimerDisplay />
        <StopWatchRounds />
        <hr />
      </Container>
    </ThemeProvider>

  );
}


export default App;
