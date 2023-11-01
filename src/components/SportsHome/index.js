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

import Nav from "../Nav";
import Menu from "../Menu";
import GameCircle from "../Games/Circle";
import Cards from "../Games/Cards";
import PromoWheel from '../PromoRoleta'; // Certifique-se de corrigir esse caminho para o local correto
import InstallModal from '../InstallModal';  // Atualize o caminho para o arquivo do modal
import { useNavigate } from 'react-router-dom';

import styled, { createGlobalStyle, keyframes } from "styled-components";

import Cassino from "../../assets/HomePhoto/Roleta.png";
import Slots from "../../assets/HomePhoto/Slots.png";
import Sports from "../../assets/HomePhoto/Sports.png";
import Crash from "../../assets/HomePhoto/Crash.png";

import { AuthContext } from "../../context/auth";
import { FaApple, FaAndroid } from 'react-icons/fa';


import elite from "../../assets/MESTRE.png";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { TbCards } from "react-icons/tb";
import { RiLiveLine } from "react-icons/ri";

import Banner1 from "../../assets/BannerLobo.png";
import Banner2 from "../../assets/iphone.png";
import AnalystImg from "../../assets/user.jpg";
import Aviator from "../../assets/games/aviator.png";
import AviatorAltas from "../../assets/games/aviatorAltas.png";
import Fortune from "../../assets/games/fortune.png";
import Mines from "../../assets/games/mines.png";
import Spaceman from "../../assets/games/spacemanAltas.png";
import Roleta from "../../assets/games/roleta.png";
import Modal from 'react-modal';

Modal.setAppElement('#root');

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
  @media (max-width: 720px) { // Estilos para telas até 720px de largura
    font-size: 10px;  // Diminui o tamanho da fonte
    padding: 10px 15px;  // Reduz o padding para o botão ficar menor
  }

  &:first-child { // Estilo específico para o botão iOS
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    padding-right: 20px;
  }

  &:last-child { // Estilo específico para o botão Android
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    padding-left: 20px;
  }
`;

const Home = () => {
    const [currentBanner, setCurrentBanner] = useState(0);
    const { user } = useContext(AuthContext);

    const [showModal, setShowModal] = useState(false); // Estado para controlar a exibição do modal
    const [modalType, setModalType] = useState(null);  // Estado para determinar o tipo de modal ('iOS' ou 'Android')
    const navigate = useNavigate();
    const handleGameClick = (game) => {
        if (game === 'Crash') {
            navigate('/crashHome');
        }
        if (game === 'Cassino') {
            navigate('/cassinoHome');
        }
        if (game === 'Slots') {
            navigate('/slotsHome');
        }

    };


    const openModal = (type) => {
        setModalType(type);   // Define o tipo de modal
        setShowModal(true);   // Mostra o modal
    };

    const closeModal = () => {
        setShowModal(false);  // Esconde o modal
    };



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
                    <GameCircle name="Crash" bgImage={Crash} onClick={() => handleGameClick('Crash')} />

                    <GameCircle name="Cassino" bgImage={Cassino} onClick={() => handleGameClick('Cassino')}>
                        <TbCards color="#D3D3D3" size={30} />
                    </GameCircle>
                    <GameCircle name="Slots" bgImage={Slots} onClick={() => handleGameClick('Slots')}>
                        <BsFillRocketTakeoffFill color="#D3D3D3" size={30} />
                    </GameCircle>
                    <GameCircle name="Sports" bgImage={Sports} onClick={() => handleGameClick('Sports')}>
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
                                Players={415}
                                NumberGreen={413}
                                NumberRed={21}
                                CardImg={Aviator}
                                LinkGame="/aviator"
                            />  <Cards
                                Pro={true}
                                AnalystPhoto={AnalystImg}
                                NameAnalyst="Eduardo Rubert"
                                Players={415}
                                NumberGreen={413}
                                NumberRed={21}
                                CardImg={Aviator}
                                LinkGame="/aviator"
                            />    <Cards
                                Pro={user.pro === 1 ? true : false}
                                AnalystPhoto={AnalystImg}
                                NameAnalyst="Júlia Fonseca"
                                Players={1042}
                                NumberGreen={612}
                                NumberRed={18}
                                CardImg={AviatorAltas}
                            />   <Cards
                                Pro={true}
                                AnalystPhoto={AnalystImg}
                                NameAnalyst="Manoela Cecílio"
                                Players={1398}
                                NumberGreen={103}
                                NumberRed={2}
                                CardImg={Spaceman}
                            />   <Cards
                                Pro={true}
                                AnalystPhoto={AnalystImg}
                                NameAnalyst="Manoela Cecílio"
                                Players={1398}
                                NumberGreen={103}
                                NumberRed={2}
                                CardImg={Spaceman}
                            />

                            <Cards
                                Pro={user.pro === 1 ? true : false}
                                AnalystPhoto={AnalystImg}
                                NameAnalyst="Manoela Cecílio"
                                Players={1398}
                                NumberGreen={103}
                                NumberRed={2}
                                CardImg={Spaceman}
                            />
                        </OperationsMainCards>
                    </OperationsMain>
                    <CustomButton className="blink-button"></CustomButton>
                    <InstallButtonContainer>
                        <InstallButton href="#" onClick={() => openModal('iOS')}>
                            <FaApple size={20} style={{ marginRight: '10px' }} />
                            Instalar no iPhone
                        </InstallButton>
                        <InstallButton href="#" onClick={() => openModal('Android')}>
                            <FaAndroid size={20} style={{ marginRight: '10px' }} />
                            Instalar no Android
                        </InstallButton>

                        {showModal && <InstallModal type={modalType} onClose={closeModal} />}

                    </InstallButtonContainer>
                </Operations>
            </Container>
            <Menu />

        </>
    );
};

export default Home;
