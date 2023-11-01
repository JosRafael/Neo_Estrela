import styled from "styled-components";
import backCassino from "../../assets/purple.jpg";

export const Container = styled.div`
  width: 100vw;
  background-image: url(${backCassino});background: transparent;
  border: 10px;
  max-height: 100vh; /* Defina a altura máxima desejada */
  overflow-y: absolute;
  overflow-x: hidden;
  backdrop-filter: blur(5px);
  z-index: 0;
  padding-left: 30%;
  padding-right: 30%;  
  
  @media (max-width: 1100px) {
    /* Quando a largura da tela for menor ou igual a 768px (tamanho de celular), ajuste o tamanho do plano de fundo */
  padding-left: 20%;
  padding-right: 20%;  
  }
  @media (max-width: 768px) {
    /* Quando a largura da tela for menor ou igual a 768px (tamanho de celular), ajuste o tamanho do plano de fundo */
  padding-left: 0%;
  padding-right: 0%;  
  }
`;

export const Titulo = styled.h1`
  color: #fff;
`;
