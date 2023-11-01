import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  max-height: 100vh; /* Defina a altura máxima desejada */
  overflow: auto; /* Adicione uma barra de rolagem quando necessário */
  padding-left: 20%;
  padding-right: 20%;
  @media (max-width: 768px) {
    /* Quando a largura da tela for menor ou igual a 768px (tamanho de celular), ajuste o tamanho do plano de fundo */
    padding: 10px;
    background-size: 100%;
    background-position: center;
  }
`;

export const Banner = styled.div`
  background: green;
  height: 200px;
`;

export const ButtonClose = styled.button`
  background-color: transparent;
  color: white;
  padding: 5px;
  font-size: 16px;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: 1px solid #fff;
  margin: 5px 0;
  text-align: right;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
    width: 100%;
  }
`;