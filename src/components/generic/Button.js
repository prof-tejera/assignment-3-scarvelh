import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  // removed on 11/16/2021
  //padding: 10px;
  
  //border: 2px solid blue;
 // width: 60px;
  width: auto;
  right: 0;
  bottom: 0;
  align-items: center;
  //display:flex;
  //align:"center";
  border-style: outset;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.16), 0 4px 6px rgba(0, 0, 0, 0.45);
`;


class Button extends Component {


    render() {


        return (
            <Container onClick={() => this.props.onClick(this.props.value)} text={this.props.text}
                       style={this.props.style} disabled={this.props.disabled} id={this.props.id}>

                {this.props.value}
                {this.props.text}
            </Container>
        )
    }

}

Button.propTypes = {
    text: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,

};
export default Button;
