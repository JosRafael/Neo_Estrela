import styled from "styled-components";

export const IframeContainer = styled.div`
  padding: 25px; /* Espaçamento nos lados do iframe */
  margin-top: -15px;
  
`;

export const IframeComponentWrapper = styled.div`
  overflow: hidden; /* Esconde as barras de rolagem */
  padding: 10px;
  height: 550px; /* Altura do iframe */
`;

export const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  overflow: hidden; /* Esconde as barras de rolagem */
  border: none; 
  border-radius: 8px; /* Adicione bordas arredondadas, se desejar */
  box-shadow: -2px 4px 3px rgba(23, 23, 23, 0.2);
`;