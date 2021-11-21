import React, {Component} from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  border: 1px solid black;
  width: 60px;
`;

class Timers extends Component {
  Timers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `;

  render() {
    return (
      <Container>
        {this.props.value}
      </Container>
    );
  }
}

export default Timers;
