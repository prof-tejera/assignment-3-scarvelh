import React from "react";
import StopWatchBodyTabata from "../generic/StopWatchBodyTabata";
import { ThemeContext, ThemeProvider } from "../../mycontext/MyThemeContexts";
import styled from "styled-components";
import { StopWatchRoundsTabata } from "../generic/StopWatchRounds";
import { TimerDisplayTabata } from "../generic/TimerDisplay";

const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  padding: 20px;
  border-radius: 20%;
  align-items: center;
  padding-left: 50px;
  animation: shake 0.8s;
  @keyframes shake {
    0% {
      transform: translateX(0)
    }
    25% {
      transform: translateX(25px);
    }

    50% {
      transform: translateX(-25px);
    }
    100% {
      transform: translateX(0px);
    }

  };
  border-style: outset;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 4px 6px rgba(0, 0, 0, 0.45);
  /*---------------------------------*/
  flex-direction: column; /* make main-axis vertical */
  justify-content: center; /* align items vertically, in this case */
`;

const ButtonPosition = {
    /* The size of the buttons passed */
    fontSize: "20px",
    alignItems: "right",
    //border: ".1rem red solid",
    borderRadius: "20%",
    float: "left"

};


function App() {
    const {themetabata} = React.useContext(ThemeContext)
    return (

            <ThemeProvider>
                <Container >
                    <TimerDisplayTabata/>
                    <StopWatchRoundsTabata/>
                    <hr style={{color: "black"}}/>


                </Container>
            </ThemeProvider>

    );
}




export default App;
