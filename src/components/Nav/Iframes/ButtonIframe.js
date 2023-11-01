import React from "react";
import styled from "styled-components";

const IframeContainer = styled.iframe`
  width: 95%;
  height: 90%; /* Defina a altura desejada para o iframe */
  border-radius: 20px;
`;

const ButtonIframe = ({title, link}) => {
  return (
    <IframeContainer
      src={link}
      title={title}
      frameborder="0"
      scrolling="on"
    ></IframeContainer>
  );
};

export default ButtonIframe;