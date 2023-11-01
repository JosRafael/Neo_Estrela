import { React } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Container } from "./styles";
import IframeRoleta from "../../components/Lives/iframeRoleta";
import YouTube from "react-youtube";
import Nav from "../../components/Nav";
import Menu from "../../components/Menu";



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
const AdditionalText = styled.div`
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
  margin-top: 90px;
  text-align: center;
  color: #fff;
  font-family: ubuntu, Sans-serif;
  font-size: 21px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1.3em;
  z-index: 2;
`;

const AdditionalText1 = styled.div`
color: white;
font-weight: bold;
text-transform: uppercase;
font-size: 18px;
margin-top: 20px;
text-align: center;
color: #fff;
font-family: ubuntu, Sans-serif;
font-size: 21px;
font-weight: 600;
text-transform: uppercase;
line-height: 1.3em;
z-index: 2;
`;
const EmailTextContainer = styled.div`
  color: #14b1a4;
  font-family: Verdana, Sans-serif;
  font-size: 16px;
  font-weight: 400;
  z-index: 2;
  text-align: center
  
`;

const EmailTextContainer1 = styled.div`
  color: #14b1a4;
  font-family: Verdana, Sans-serif;
  font-size: 16px;
  font-weight: 400;
  z-index: 2;
  text-align: center;
  
`;

const AccessButton = styled.button`
  background-image: url(/wp-content/uploads/2023/08/acessar-login.png);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #ecbf41;
  border: none;
  width: 100%;
  height: 40px; /* Altura do botão */
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ecbf41; /* Cor do botão ao passar o mouse */
  }
`;

// Live link
// https://www.twitch.tv/courtesy

const Tutorial = () => {

  const videoId = "0-ANWrh-y1o"; // Substitua pelo ID do vídeo do YouTube que deseja incorporar

  const opts = {
    height: "220  ", // Defina a altura como "0" para que o aspectRatio controle a altura
    width: "100%", // O vídeo ocupará toda a largura do contêiner
    playerVars: {
      // Opções adicionais do player do YouTube (opcional)
      // Consulte a documentação do YouTube para obter mais opções: https://developers.google.com/youtube/player_parameters
      autoplay: 1, // 1 para reprodução automática, 0 para não
    },
    // Proporção de aspecto personalizada (largura:altura)
    // Neste exemplo, definimos uma proporção de aspecto de 1:1.2 para tornar o vídeo um pouco mais alto
    playerVars: {
      autoplay: 1,
      controls: 0, // Esconda os controles do player (opcional)
      modestbranding: 1, // Esconda o logotipo do YouTube (opcional)
    },
  };

  return (
    <>
      <GlobalStyle />
      <Nav></Nav>
      <Container>

        <AdditionalText>
          Lives de Operações <br />
        </AdditionalText>
        <EmailTextContainer className="elementor-1137 elementor-element elementor-element-a04ad91">
          Veja nossos analistas faturando ao vivo!
        </EmailTextContainer>
        <br/> <br/>
        {/* Espaço em branco */}


        {/* Sustitua a imagem pelo componente IframeComponent */}
        <div>
          <YouTube videoId={videoId} opts={opts} />
        </div>

        <AdditionalText1>
          JOGUE AO VIVO!  <br />
        </AdditionalText1>

        <EmailTextContainer1 className="elementor-1137 elementor-element elementor-element-a04ad91">
          Faça suas operações sem mudar de página!
        </EmailTextContainer1>
        <br></br>

        <IframeRoleta />
        <br></br><br></br><br></br> <br></br><br></br><br></br><br></br> <br/> <br/> <br/> <br/> <br/>
      </Container>
      <Menu></Menu>
    </>
  );
};

export default Tutorial;