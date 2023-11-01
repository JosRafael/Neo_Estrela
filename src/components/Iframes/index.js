import React from "react";
import styled from "styled-components";

const IframeContainer = styled.iframe`
  width: 98%;
  height: 500px; /* Defina a altura desejada para o iframe */
  border-radius: 20px;
`;

const Container = styled.div`
display: flex;
justify-content: center;
`;

const IframeComponent = ({link}) => {
  return (
    <Container>
    <IframeContainer
      src={link}
      title="Live"
      frameborder="0"
      scrolling="on"
    ></IframeContainer>
    </Container>
  );
};

export default IframeComponent;