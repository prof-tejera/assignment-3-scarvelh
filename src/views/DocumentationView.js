import React from "react";
import styled from "styled-components";
import DocumentComponent from "../components/documentation/DocumentComponent";
import StopWatchButtons from "../components/generic/StopWatchButtons";
import { StopWatchTimerDisplay } from "../components/generic/TimerDisplay";
import Button from "../components/generic/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  //------------------------------

`;

const Title = styled.div`
  font-size: 2rem;
`;
const DisableComponent = styled.div`
  //font-size: 2rem;
  width: auto;
  border-radius: 20%;
  border-style: outset;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 4px 6px rgba(0, 0, 0, 0.45);

  // turn off point to disable
  pointer-events: none;
`;

class Documentation extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <Title>Documentation</Title>
          <DocumentComponent
            title="StopWatch Types Tabata"
            component={<DisableComponent>{<Button text={"Tabata"} />}</DisableComponent>}
            propDocs={[
              {
                prop: "text",
                description: "Stop watch type 'Tabata",
                type: "string",
                defaultValue: "Stop watch type Tabata"
              }
            ]}
          />
          <DocumentComponent
            title="Stop Watch Buttons"
            component={<DisableComponent><StopWatchButtons /></DisableComponent>}
            propDocs={[
              {
                prop: "text",
                description: "Display 'Start' 'Stop','Reset'",
                type: "string",
                defaultValue: "'Start' 'Stop','Reset'"
              }
            ]}
          />

          <DocumentComponent
            title="Input field 'hours' minutes' 'seconds'"
            component={<DisableComponent><input type="number" min="0" placeholder={0} /></DisableComponent>}
            propDocs={[
              {
                prop: "type",
                description: "What type of field is the html input field",
                type: "number",
                defaultValue: "number"
              }
            ]}

          />
          <DocumentComponent
            title="Input field 'hours' minutes' 'seconds'"
            component={<DisableComponent><input type="number" min="0" placeholder={0} /></DisableComponent>}
            propDocs={[
              {
                prop: "min",
                description: "Make sure that you cannot use up and down arrow and enter minus values",
                type: "string",
                defaultValue: "0"
              }
            ]}

          />
          <DocumentComponent
            title="Input field 'hours' minutes' 'seconds'"
            component={<DisableComponent><input type="number" min="0" placeholder={0} /></DisableComponent>}
            propDocs={[
              {
                prop: "placeholder",
                description: "Default value for input string",
                type: "string",
                defaultValue: "0"
              }
            ]}

          />
        </div>
      </Container>
    );
  }
}

export default Documentation;
