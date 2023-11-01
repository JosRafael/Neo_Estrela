
import styled from "styled-components";

export const Container = styled.div`
  width: 110vw;
  height: 110vh;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;

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

export const Banner = styled.div`
  background: green;
  height: 160px;
`;
