import styled from "styled-components";

export const Container = styled.div`
  margin-top: 70px;
  width: 95%;
  min-height: 100vh;
  max-width: 100%;   // Isso garante que o Container não exceda a largura da tela
  max-height: 100vh; /* Defina a altura máxima desejada */
  overflow-y: absolute;
  overflow-x: hidden;
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
  height: auto;
`;

export const BannerImg = styled.img`
  max-height: 200px;
  width: 100%;
`;

export const Titulo = styled.h2`
margin: 20px 0 10px 0;
  color: #fff;
  text-align: center ;

  @media (max-width: 768px) {
    font-size: 16px;
  }

`;

export const GamesCircle = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 25px;
justify-content: space-around;
margin-top: 15px;
`;
export const Operations = styled.div`
display: flex;
justify-content: space-around;
margin-top: 15px;
justify-content: flex-start;
flex-direction: column;
`;

export const OperationsHeader = styled.div`
display: flex;

align-items: center;
`;
export const OperationsTitle = styled.h4`
  text-align: center;
  align-items: center;
  width: 100%; /* Adicionado */
  color: #fff;
`;


export const OperationsMain = styled.div`

`;
export const OperationsMainHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  margin-bottom: 10px;
  justify-content: center; /* Adicionado */
`;

export const OperationsMainSubtitle = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-right: 10px;
font-size: 14px;
font-family: "Roboto", sans-serif; /* Adicionado */
`;
export const Topic = styled.div`
background-color: ${props => props.color};
width: 16px;
height: 16px;
border-radius: 8px;
margin-right: 5px;
`;

export const OperationsMainSubtitleTxt = styled.span`
color: ${props => props.color};
font-size: 14px;
`;

export const OperationsMainCards = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
justify-content: center;
align-items: center;

@media (max-width: 768px) {
  /* Quando a largura da tela for menor ou igual a 768px (tamanho de celular), ajuste o tamanho do plano de fundo */
font-size: 16px;
grid-template-columns: 1fr 1fr;
 align-items: center;
}

`;
export const ButtonElite = styled.button`
`;