import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid #121212;
  margin: 20px 0;
`;

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  font-size: 1.3rem;
`;

const RenderComponent = styled.div`
  padding: 25px;
  display: flex;
  align-items: center;
  //-------------------------
  //font-size:10px;
  //width:20px;
  //padding-right: 10px;
  //justify-content: space-between;
`;

const Documentation = styled.table``;

class DocumentComponent extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>{this.props.title}</Title>
        <Container>
          <RenderComponent>{this.props.component}</RenderComponent>
          <Documentation>
            <tr>
              <th>Prop</th>
              <th>Description</th>
              <th>Type</th>
              <th>Default value</th>
            </tr>
            {this.props.propDocs.map((doc) => {
              return (
                <tr>
                  <td>{doc.prop}</td>
                  <td>{doc.description}</td>
                  <td>{doc.type}</td>
                  <td>
                    <code>{doc.defaultValue}</code>
                  </td>
                </tr>
              );
            })}
          </Documentation>
        </Container>
      </Wrapper>
    );
  }
}

export default DocumentComponent;
