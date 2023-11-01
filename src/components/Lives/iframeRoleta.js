import React from "react";
import styled from "styled-components";

const IframeContainer = styled.iframe`
  width: 100%;
  height: 500px; /* Defina a altura desejada para o iframe */
  border-radius: 20px;
`;

const IframeComponent = () => {
  return (
    <IframeContainer
      src="https://record.partnersboomg.com/_zNe6BecKMYv6PBA04iUMN2Nd7ZgqdRLk/1/?payload=american-roulette-live-play&link=/cassino-ao-vivo/roleta/american-roulette-live-play"
      title="Live"
      frameborder="0"
      scrolling="on"
    ></IframeContainer>
  );
};

export default IframeComponent;