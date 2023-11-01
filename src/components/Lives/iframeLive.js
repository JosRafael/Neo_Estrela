import React from "react";
import styled from "styled-components";

const IframeContainer = styled.iframe`
  width: 100%;
  height: 200px; /* Defina a altura desejada para o iframe */
`;

const IframeComponent = () => {
  return (
    <IframeContainer
      src="https://www.youtube.com/watch?v=17TyCn_YR38&ab_channel=PapaKillFF"
      title="Live"
      frameborder="0"
      scrolling="on"
    ></IframeContainer>
  );
};

export default IframeComponent;