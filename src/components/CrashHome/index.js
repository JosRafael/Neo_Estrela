import React, { useEffect, useState, useContext } from "react";
import {
  Container,
  Banner,
  BannerImg,
  Titulo,
  GamesCircle,
  Operations,
  OperationsHeader,
  OperationsTitle,
  OperationsMain,
  OperationsMainHeader,
  OperationsMainSubtitle,
  Topic,
  OperationsMainCards,
  OperationsMainSubtitleTxt,
  ButtonElite,
} from "./styles";

import Nav from "../../components/Nav";
import Menu from "../../components/Menu";
import GameCircle from "../../components/Games/Circle";
import Cards from "../../components/Games/Cards";
import PromoWheel from "../../components/PromoRoleta"; // Certifique-se de corrigir esse caminho para o local correto
import InstallModal from "../../components/InstallModal"; // Atualize o caminho para o arquivo do modal
import { useNavigate } from "react-router-dom";

import styled, { createGlobalStyle, keyframes } from "styled-components";

import Cassino from "../../assets/HomePhoto/Roleta.png";
import Slots from "../../assets/HomePhoto/Slots.png";
import Sports from "../../assets/HomePhoto/Sports.png";
import Crash from "../../assets/HomePhoto/Crash.png";

import api from "../../config/api";

import { AuthContext } from "../../context/auth";
import { FaApple, FaAndroid } from "react-icons/fa";

import elite from "../../assets/MESTRE.png";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { TbCards } from "react-icons/tb";
import { RiLiveLine } from "react-icons/ri";

import Banner1 from "../../assets/BannerLobo.png";
import Banner2 from "../../assets/iphone.png";
import AnalystImg from "../../assets/user.jpg";
import Aviator from "../../assets/games/aviator.png";
import Aviator2 from "../../assets/games/aviator-2x.webp";
import AviatorAltas from "../../assets/games/aviatorAltas.png";
import Fortune from "../../assets/games/fortune.png";
import Mines from "../../assets/games/mines.png";
import Spaceman from "../../assets/games/spacemanAltas.png";
import Spaceman1 from "../../assets/games/spaceman-15x.webp";
import Spaceman2 from "../../assets/games/spaceman-2x.webp";
import Roleta from "../../assets/games/roleta.png";
import Modal from "react-modal";

Modal.setAppElement("#root");

const GlobalStyle = createGlobalStyle`
  body {
    position: fixed;   // Fixa a posição do corpo
    width: 100vw;      // Define a largura para a largura da viewport
    height: 100vh;     // Define a altura para a altura da viewport
    overflow: auto;    // Permite rolagem se necessário
    overflow-x: hidden;// Impede a rolagem horizontal
    font-family: "Roboto", sans-serif; /* Adicionado */
  }
  ::-webkit-scrollbar {
    width: 0 !important;
  }
  ::-webkit-scrollbar-thumb {
    background-color: transparent !important;
  }
`;

const blinkAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
    
  }
`;

const CustomButton = styled.button`
  background-image: url(${elite});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 170px;
  padding: 32px 0;
  margin-bottom: 200px;
  background-color: #56cca100;
  border: none;
  cursor: pointer;
  &.blink-button {
    animation: ${blinkAnimation} 0.8s linear infinite;
  }
`;
const InstallButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -210px; // Margem negativa para mover para cima
  margin-bottom: 250px;
`;

const InstallButton = styled.a`
  padding: 15px 20px;
  margin: 0 10px;
  background-color: #9cff000d;
  border: 1px solid #9cff0020;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  color: #14b1a4; // Define a cor do texto
  display: flex; // Adicionado para alinhar ícone e texto horizontalmente
  align-items: center;
  justify-content: center;

  box-shadow: 0px 0px 10px rgba(0, 0, 255, 0.3);

  &:hover {
    background-color: #333;
  }
  @media (max-width: 720px) {
    // Estilos para telas até 720px de largura
    font-size: 10px; // Diminui o tamanho da fonte
    padding: 10px 15px; // Reduz o padding para o botão ficar menor
  }

  &:first-child {
    // Estilo específico para o botão iOS
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    padding-right: 20px;
  }

  &:last-child {
    // Estilo específico para o botão Android
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    padding-left: 20px;
  }
`;
const CustomButton1 = styled.button`
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 170px;
  padding: 32px 0;
  margin-bottom: 100px;
  background-color: #56cca100;
  border: none;
  cursor: pointer;
  &.blink-button {
    animation: ${blinkAnimation} 1.5s linear infinite;
  }
`;

const Home = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const { user, games } = useContext(AuthContext);

  const [showModal, setShowModal] = useState(false); // Estado para controlar a exibição do modal
  const [modalType, setModalType] = useState(null); // Estado para determinar o tipo de modal ('iOS' ou 'Android')
  const [playersCount, setPlayersCount] = useState(getRandomPlayers());
  const [increasing, setIncreasing] = useState(true); // State to check if the count is increasing or decreasing
  const initialPlayers = Array(6)
    .fill()
    .map(() => getRandomPlayers(253, 947));
  const [playersCounts, setPlayersCounts] = useState(initialPlayers);
  const navigate = useNavigate();

  // Função para obter um número aleatório de jogadores
  function getRandomPlayers(min = 0, max = 947) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  useEffect(() => {
    const updatePlayers = () => {
      setPlayersCounts((prevCounts) => {
        return prevCounts.map((count) => {
          let newCount = count + (Math.random() > 0.5 ? 1 : -1);
          if (newCount > 947) return 947;
          if (newCount < 253) return 253;
          return newCount;
        });
      });
    };

    const interval = setInterval(updatePlayers, 20000); // Atualizar a cada 1 segundo

    return () => clearInterval(interval);
  }, []);
  const handleGameClick = (game) => {
    if (game === "Cassino") {
      navigate("/cassinoHome");
    }
    if (game === "Slots") {
      navigate("/slotsHome");
    }
    if (game === "Sports") {
      navigate("/sportsHome");
    }
  };

  const openModal = (type) => {
    setModalType(type); // Define o tipo de modal
    setShowModal(true); // Mostra o modal
  };

  const closeModal = () => {
    setShowModal(false); // Esconde o modal
  };

  const [greenAviator, setGreenAviator] = useState(0);
  const [redAviator, setRedAviator] = useState(0);

  const [greenAviator2, setGreenAviator2] = useState(0);
  const [redAviator2, setRedAviator2] = useState(0);

  const [greenAviatorVA, setGreenAviatorVA] = useState(0);
  const [redAviatorVA, setRedAviatorVA] = useState(0);

  const [greenSpaceman, setGreenSpaceman] = useState(0);
  const [redSpaceman, setRedSpaceman] = useState(0);

  const [greenSpaceman2, setGreenSpaceman2] = useState(0);
  const [redSpaceman2, setRedSpaceman2] = useState(0);

  const [greenSpacemanVA, setGreenSpacemanVA] = useState(0);
  const [redSpacemanVA, setRedSpacemanVA] = useState(0);

  useEffect(() =>{
    function greensAndReds(){

      if(games){
        setGreenAviator2(games.values[12].green)
        setRedAviator2(games.values[12].red)

        setGreenSpaceman2(games.values[15].green)
        setRedSpaceman2(games.values[15].red)

        setGreenSpacemanVA(games.values[16].green)
        setRedSpacemanVA(games.values[16].red)

        setGreenAviator(games.values[11].green)
        setRedAviator(games.values[11].red)

        setGreenAviatorVA(games.values[13].green)
        setRedAviatorVA(games.values[13].red)

        setGreenSpaceman(games.values[14].green)
        setRedSpaceman(games.values[14].red)
      }
    }
    greensAndReds()
  }, [games])
  
  useEffect(() => {
    // Configure a troca automática de banners a cada 5 segundos
    const intervalId = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner === 0 ? 1 : 0));
    }, 5000);

    // Limpe o intervalo quando o componente for desmontado
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <Nav />
      <Container>
        <Titulo>Com quais jogos você deseja lucrar hoje?</Titulo>

        <GamesCircle>
          <GameCircle
            name="Crash"
            bgImage={Crash}
            onClick={() => handleGameClick("Crash")}
          />

          <GameCircle
            name="Cassino"
            bgImage={Cassino}
            onClick={() => handleGameClick("Cassino")}
          >
            <TbCards color="#D3D3D3" size={30} />
          </GameCircle>
          <GameCircle
            name="Slots"
            bgImage={Slots}
            onClick={() => handleGameClick("Slots")}
          >
            <BsFillRocketTakeoffFill color="#D3D3D3" size={30} />
          </GameCircle>
          <GameCircle
            name="Sports"
            bgImage={Sports}
            onClick={() => handleGameClick("Sports")}
          >
            <TbCards color="#D3D3D3" size={30} />
          </GameCircle>
        </GamesCircle>

        <Operations>
          <OperationsHeader>
            <OperationsTitle>ESCOLHA A SALA QUE DESEJA ENTRAR</OperationsTitle>
          </OperationsHeader>
          <OperationsMain>
            <OperationsMainHeader>
              <OperationsMainSubtitle>
                <Topic color="yellow" />
                <OperationsMainSubtitleTxt color="yellow">
                  Possível Entrada
                </OperationsMainSubtitleTxt>
              </OperationsMainSubtitle>
              <OperationsMainSubtitle>
                <Topic color="green" />
                <OperationsMainSubtitleTxt color="green">
                  Entrada confirmada
                </OperationsMainSubtitleTxt>
              </OperationsMainSubtitle>
            </OperationsMainHeader>

            <OperationsMainCards>
              <Cards
                Pro={true}
                AnalystPhoto={AnalystImg}
                NameAnalyst="Eduardo Rubert"
                Players={playersCounts[0]}
                NumberGreen={greenAviator}
                NumberRed={redAviator}
                CardImg={Aviator}
                LinkGame="/aviator"
              />{" "}
              <Cards
                Pro={
                  user.pro === 1
                    ? true
                    : false || user.admin === 1
                    ? true
                    : false
                }
                AnalystPhoto={AnalystImg}
                NameAnalyst="Francisco S."
                Players={playersCounts[1]}
                NumberGreen={greenAviator2}
                NumberRed={redAviator2}
                CardImg={Aviator2}
                LinkGame="/aviator2x"
              />{" "}
              <Cards
                Pro={
                  user.pro === 1
                    ? true
                    : false || user.admin === 1
                    ? true
                    : false
                }
                AnalystPhoto={AnalystImg}
                NameAnalyst="Júliana Fonseca"
                Players={playersCounts[2]}
                NumberGreen={greenAviatorVA}
                NumberRed={redAviatorVA}
                CardImg={AviatorAltas}
                LinkGame="/aviatorVelas"
              />{" "}
              <Cards
                Pro={true}
                AnalystPhoto={AnalystImg}
                NameAnalyst="Manoela Cecílio"
                Players={playersCounts[3]}
                NumberGreen={greenSpaceman}
                NumberRed={redSpaceman}
                CardImg={Spaceman1}
                LinkGame="/space"
              />{" "}
              <Cards
                Pro={
                  user.pro === 1
                    ? true
                    : false || user.admin === 1
                    ? true
                    : false
                }
                AnalystPhoto={AnalystImg}
                NameAnalyst="Marcos Vinicius"
                Players={playersCounts[4]}
                NumberGreen={greenSpaceman2}
                NumberRed={redSpaceman2}
                CardImg={Spaceman2}
                LinkGame="/space2x"
              />
              <Cards
                Pro={
                  user.pro === 1
                    ? true
                    : false || user.admin === 1
                    ? true
                    : false
                }
                AnalystPhoto={AnalystImg}
                NameAnalyst="Gabriel Santos"
                Players={playersCounts[5]}
                NumberGreen={greenSpacemanVA}
                NumberRed={redSpacemanVA}
                CardImg={Spaceman}
                LinkGame="/spaceVelas"
              />
            </OperationsMainCards>
            {
            user.pro === 1 || user.admin === 1 ? <CustomButton1></CustomButton1> : (
              <a href="https://go.perfectpay.com.br/PPU38CNB924?&utm_source=app&utm_medium=home" target="_blank" rel="noopener noreferrer">
              <CustomButton className="blink-button"></CustomButton>
            </a>
            ) 
          }
          </OperationsMain>
          <InstallButtonContainer>
            <InstallButton href="#" onClick={() => openModal("iOS")}>
              <FaApple size={20} style={{ marginRight: "10px" }} />
              Instalar no iPhone
            </InstallButton>
            <InstallButton href="#" onClick={() => openModal("Android")}>
              <FaAndroid size={20} style={{ marginRight: "10px" }} />
              Instalar no Android
            </InstallButton>

            {showModal && (
              <InstallModal type={modalType} onClose={closeModal} />
            )}
          </InstallButtonContainer>
        </Operations>
      </Container>
      <Menu />
    </>
  );
};

export default Home;
