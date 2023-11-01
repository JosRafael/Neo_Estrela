import styled from "styled-components";

export const Container = styled.div`
  width: 95vw;
  min-height: 100vh;
  max-height: 100vh; /* Defina a altura máxima desejada */
  overflow: auto; /* Adicione uma barra de rolagem quando necessário */
  @media (max-width: 768px) {
    /* Quando a largura da tela for menor ou igual a 768px (tamanho de celular), ajuste o tamanho do plano de fundo */
    background-size: 100%;
    background-position: center;
  }
`;
export const Banner = styled.div`
  background: green;
  height: 200px;
`;