import React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { Container } from "./styles";
import Nav from "../../components/Nav";
import Menu from "../../components/Menu";
import gestao from '../../assets/Tutorial/Gestao.png';
import quebraPadrao from '../../assets/Tutorial/THUMB_TELEGRAM.png';
import crieUmaContaButton from '../../assets/CRIE_UMA_CONTA.png'; // Importe a imagem do botão
import telegram from '../../assets/telegram.png'; // Importe a imagem do botão

const blinkAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

const AdditionalText = styled.div`
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
  margin-top: 90px;
  text-align: left;
  color: #fff;
  font-family: ubuntu, Sans-serif;
  font-size: 21px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1.3em;
  z-index: 2;
  text-align: center;
`;

const EmailTextContainer = styled.div`
  color: #14b1a4;
  font-family: "Verdana", Geneva,sans-serif;
  font-size: 16px;
  font-weight: 400;
  z-index: 2;
  text-align: center;
`;

const GradientRectangle = styled.div`
  background: linear-gradient(to bottom, #14b1a4, rgba(187, 240, 39, 0));
  border-radius: 15px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  max-width: 80%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Adiciona sombra escura */
  margin-bottom: 20px; /* Espaçamento entre os containers */
`;

const Banner = styled.img`
  max-width: 100%;
  max-height: 90%;
  width: auto;
  height: auto;
  
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Adiciona sombra escura */
`;

const BannerText = styled.div`
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
  margin-top: 10px; /* Espaçamento entre o banner e o texto */
  text-align: center; /* Centralizando o texto */
  font-family: ubuntu, Sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1.3em;
  z-index: 2;

`;

const BlueText = styled.span`
  color: #2ca6ff; /* Cor azul */
  font-size: 18px;
`;

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
  ::-webkit-scrollbar {
    width: 0 !important;
  }
  ::-webkit-scrollbar-thumb {
    background-color: transparent !important;
  }
`;

const ButtonWithBlink = styled.button`
  background-color: #2ca6ff;
  color: #fff;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  display: block;
  margin: 20px auto;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Adiciona sombra escura */
  animation: ${blinkAnimation} 2s linear infinite; /* Aplica a animação */
`;

const ButtonWithBlink1 = styled(ButtonWithBlink)`
  background-color: #ecbf41;
`;

const CustomButton = styled.button`
  background-image: url(${crieUmaContaButton}); // Define a imagem de fundo do botão
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%; /* Defina a largura desejada para o botão */
  height: 120px; /* Defina a altura desejada para o botão */
  padding: 32px 0;
  margin-top: -30px;
  background-color: #56cca100;
  border: none;
  cursor: pointer;
  &.blink-button {
    animation: ${blinkAnimation} 2s linear infinite; /* Aplica a animação apenas a essa classe */
  }
}`
const CustomButton2 = styled.button`
  background-image: url(${telegram}); // Define a imagem de fundo do botão
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%; /* Defina a largura desejada para o botão */
  height: 120px; /* Defina a altura desejada para o botão */
  padding: 32px 0;
  margin-top: -30px;
  background-color: #56cca100;
  border: none;
  cursor: pointer;
  &.blink-button {
    animation: ${blinkAnimation} 2s linear infinite; /* Aplica a animação apenas a essa classe */
  }
`;

const Tutorial = () => {
  return (
    <>
      <GlobalStyle />
      <Nav></Nav>
      <Container>

        <AdditionalText>
          Resgate seus bônus <br />
        </AdditionalText>
        <EmailTextContainer className="elementor-1137 elementor-element elementor-element-a04ad91">
          Todo dia um bônus diferente te aguarda aqui!
        </EmailTextContainer>

        <GradientRectangle>
          <Banner src={gestao} alt="Banner" />
          <BannerText>Essa é a única casa com integração direta!</BannerText>

        </GradientRectangle>

        <a href="https://record.partnersboomg.com/_zNe6BecKMYuVAv0U_Fv2nWNd7ZgqdRLk/2/?payload=poslogin" target="_blank" rel="noopener noreferrer">
          <CustomButton className="blink-button"></CustomButton>
        </a>
        {/* Clona o conteúdo abaixo do botão */}
        <GradientRectangle>
          <Banner src={quebraPadrao} alt="Banner" />
          <BannerText>Operações ao vivo e sorteios de pix todos os dias no <BlueText>Telegram</BlueText></BannerText>

        </GradientRectangle>

        <a href="https://t.me/+-x9u7oi3j6thMDI5" target="_blank" rel="noopener noreferrer">
          <CustomButton2 className="blink-button"></CustomButton2>
        </a>

        <br /><br /><br /><br /> <br /> <br /> <br /> <br /> <br />
      </Container>
      <Menu></Menu>
    </>
  );
};

export default Tutorial;