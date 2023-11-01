import React from "react";
import styled from "styled-components";

const IframeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px; /* Adiciona um espaçamento ao redor do container do iframe */
  background-color: #fff; /* Defina uma cor de fundo se desejar */
  border-radius: 20px;
  box-shadow: 0px 0px 15px 2px #fdd92d; /* Adiciona uma sombra com a cor desejada */
  overflow: hidden; /* Garante que o conteúdo não vaze fora do border-radius */
`;

const IframeContainer = styled.iframe`
  width: 600px; /* Largura padrão para dispositivos maiores (desktop) */
  height: 400px; /* Altura padrão */
  border-radius: 20px;
  border: none; /* Remove a borda padrão do iframe */

  @media (max-width: 768px) {
    width: 350px; /* Largura para dispositivos menores (celular) */
  }
`;

const IframeComponent = () => {
  return (
    <IframeWrapper>
      <IframeContainer
        src="https://estrelabet.com/pb#/overview"
        title="Live"
        scrolling="on"
      ></IframeContainer>
    </IframeWrapper>
  );
};

export default IframeComponent;
