import React from "react";
import { TimerDisplay } from "../generic/TimerDisplay";
import { Container } from "../../utils/helpers";
import { ThemeContext, ThemeProvider } from "../../mycontext/MyThemeContexts";
import StopWatchRounds from "../generic/StopWatchRounds";


function App() {
  const { themexy } = React.useContext(ThemeContext);
  return (

    <ThemeProvider>
      <Container style={themexy}>

        <TimerDisplay />
        <StopWatchRounds />
        <hr />


      </Container>
    </ThemeProvider>

  );
}


export default App;
