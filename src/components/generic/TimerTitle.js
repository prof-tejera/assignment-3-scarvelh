import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  padding: 10px;
  border: 1px solid black;
  width: 60px;
  align-items: center;
`;

class TimerTitle extends Component {
  TimerTitle = styled.div``;

  render() {
    return (
      <Container onClick={() => this.props.onClick(this.props.value)} style={this.props.style}>
        {this.props.value}
      </Container>
    );
  }
}
TimerTitle.propTypes = {
  // FOR TESTING COMMENTED OUT
  //style: PropTypes.string
  style: PropTypes.object,
  onClick: PropTypes.func,

};
export default TimerTitle;
