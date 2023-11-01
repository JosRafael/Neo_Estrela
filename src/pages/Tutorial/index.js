import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import YouTube from "react-youtube";
import Modal from "react-modal";

import { Container, ButtonClose, ButtonDiv} from "./styles";
import Nav from "../../components/Nav";
import Menu from "../../components/Menu";

import Banner1 from '../../assets/Tutorial/Banner1.png'
import Banner2 from '../../assets/Tutorial/Banner2.png'
import Banner3 from '../../assets/Tutorial/Banner3.webp'
import gestao from '../../assets/Tutorial/Gestao.png'
import aprendaRoleta from '../../assets/Tutorial/AprendaRoleta.webp'
import aprendaBacbo from '../../assets/Tutorial/AprendaBacbo.webp'
import aprendaSpaceMan from '../../assets/Tutorial/AprendaSpaceman.webp'
import aprendaFootball from '../../assets/Tutorial/AprendaFootball.webp'
import THUMB2 from '../../assets/Tutorial/THUMB2.png'
import THUMB3 from '../../assets/Tutorial/THUMB3.png'
import THUMB4 from '../../assets/Tutorial/THUMB4.png'


const AdditionalText = styled.div`
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 18px;
  text-align: center; /* centraliza o texto */
  color: #fff;
  font-family: ubuntu, Sans-serif;
  font-size: 21px;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 80px;
  text-transform: uppercase;
  line-height: 1.3em;
  z-index: 2;
  @media (max-width: 768px) {
    padding: 1px;
    text-align: center; /* assegura que o texto está centralizado em dispositivos menores */
    background-size: 100%;
    background-position: center;
  }
`;

const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 7px;
  margin-top: 5px; /* Espaço para o banner */
`;

const TextoPequeno = styled.label`
  display: flex;
  padding-left: 12px;
  margin-right: 50%;
  margin-top: 20px;
  color: #DCDDDF;
  font-size: 16px;
  margin-left: 5px; /* Afasta para a direita */
  
  margin-bottom: 10px; /* Adicione margem para distanciar os elementos */
`;

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column; /* Alterado para uma coluna para permitir a rolagem vertical */
  overflow-y: auto; /* Adicionado overflow-y para rolagem vertical */
  scroll-snap-type: y mandatory; /* Define o tipo de rolagem vertical como obrigatório */
  width: 100%; /* Largura total do container */
  max-height: 600px; /* Altura máxima para limitar a rolagem vertical */
  min-height: 1px; /* Defina uma altura mínima para evitar o problema de fundo em branco */
  -webkit-overflow-scrolling: touch; /* Adiciona suporte para scroll suave em dispositivos iOS */
  position: relative;

`;

const BannerItem = styled.div`
  flex: 0 0 auto;
  scroll-snap-align: start;
  margin-right: 10px;
  cursor: pointer;
`;

const BannerImage = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 130px; /* Altura máxima dos banners */
  border-radius: 10px; /* Borda arredondada */
  margin-left: 5px; /* Afasta para a direita */
  /* Adicione outros estilos conforme necessário */
`;

const BannerImage2 = styled.img`
  max-width: 100%;
  height: auto;
  max-height: 150px; /* Altura máxima dos banners */
  border-radius: 10px; /* Borda arredondada */
  margin-left: 5px; /* Afasta para a direita */
  /* Adicione outros estilos conforme necessário */
`;

const AccessButton = styled.button`
  background-image: url(/wp-content/uploads/2023/08/acessar-login.png);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #14b1a4;
  border: none;
  width: 100%;
  height: 40px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #14b1a4;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const EmailTextContainer = styled.div`
  color: #14b1a4;
  font-family: Verdana, Sans-serif;
  font-size: 16px;
  font-weight: 400;
  z-index: 2;
  text-align: center; /* centraliza o texto */
`;

const PaginationDot = styled.span`
  width: 5px;
  height: 5px;
  margin: 0 5px;
  background-color: ${(props) => (props.active ? "#14b1a4" : "#fff")};
  border-radius: 50%;
  cursor: pointer;
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
const VideoContainer = styled.div`
  border: 1px solid #ccc; /* Adicione uma borda sólida */
  border-radius: 10px; /* Adicione uma borda arredondada */
  max-width: 340px; /* Largura máxima do vídeo */
`;

const Tutorial = () => {
  const [currentIndexComecePorAqui, setCurrentIndexComecePorAqui] = useState(0);
  const [currentIndexMentalidadeEGestao, setCurrentIndexMentalidadeEGestao] = useState(0);
  const [currentIndexComoJogar1, setCurrentIndexComoJogar1] = useState(0);
  const [currentIndexComoJogar2, setCurrentIndexComoJogar2] = useState(0);

  const bannersComecePorAqui = [
    {
      image: Banner1,
      //  videoId: "8YvdbPJlw9I", // Substitua pelo ID do primeiro vídeo
    },
    {
      image: Banner2,
      // videoId: "8YvdbPJlw9I", // Substitua pelo ID do segundo vídeo
    },
    {
      image: Banner3,
      // videoId: "8YvdbPJlw9I", // Substitua pelo ID do terceiro vídeo
    },
  ];

  const bannersMentalidadeEGestao = [
    {
      image: gestao,
      // videoId: "8YvdbPJlw9I", // Substitua pelo ID do vídeo de gestão
    },
  ];

  const bannersComoJogar1 = [
    {
      image: aprendaBacbo,
      // videoId: "8YvdbPJlw9I", // Substitua pelo ID do quarto vídeo
    },
    {
      image: aprendaSpaceMan,
      // videoId: "8YvdbPJlw9I", // Substitua pelo ID do quinto vídeo
    },
    {
      image: aprendaFootball,
      // videoId: "8YvdbPJlw9I", // Substitua pelo ID do sexto vídeo
    },
  ];
  
  const bannersComoJogar2 = [
    {
      image: THUMB2,
      // videoId: "VIDEO_ID_GESTAO_2", // Substitua pelo ID do segundo vídeo de gestão
    },
    {
      image: THUMB3,
      // videoId: "VIDEO_ID_GESTAO_2", // Substitua pelo ID do segundo vídeo de gestão
    },
    {
      image: THUMB4,
      // videoId: "VIDEO_ID_GESTAO_2", // Substitua pelo ID do segundo vídeo de gestão
    },

  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const openModal = (videoId) => {
    setSelectedVideoId(videoId);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedVideoId(null);
    setModalIsOpen(false);
  };

  const opts = {
    height: '400', // Altura do vídeo
    width: '340',  // Largura do vídeo
    playerVars: {
      autoplay: 1, // 0 para desativar a reprodução automática
    },
    style: {
      border: '1px solid #ccc', // Adicione uma borda sólida
      borderRadius: '10px', // Adicione uma borda arredondada
    }
  };

  return (
    <>
      <GlobalStyle />
      <Nav></Nav>
      <Container>
        <AdditionalText>
          TORNE-SE UM JUSTICEIRO <br />
        </AdditionalText>

        <EmailTextContainer className="elementor-1137 elementor-element elementor-element-a04ad91">
        Aulas em Construção...
        </EmailTextContainer>

        <TextoPequeno>
          Comece por aqui.
        </TextoPequeno>
        <CarouselContainer
          style={{ transform: `translateX(-${currentIndexComecePorAqui * 100}%)` }}
        >
          <BannerContainer>
            {bannersComecePorAqui.map((banner, index) => (
              <BannerItem key={index} onClick={() => openModal(banner.videoId)}>
                <BannerImage src={banner.image} alt={`Banner ${index + 1}`} />
              </BannerItem>
            ))}
          </BannerContainer>
        </CarouselContainer>

        <PaginationContainer>
          {bannersComecePorAqui.map((_, index) => (
            <PaginationDot
              key={index}
              active={index === currentIndexComecePorAqui}
              onClick={() => setCurrentIndexComecePorAqui(index)}
            />
          ))}
        </PaginationContainer>

        <TextoPequeno>
          Mentalidade e Gestão.
        </TextoPequeno>
        <CarouselContainer
          style={{ transform: `translateX(-${currentIndexMentalidadeEGestao * 100}%)` }}
        >
          <BannerContainer>
            {bannersMentalidadeEGestao.map((banner, index) => (
              <BannerItem key={index} onClick={() => openModal(banner.videoId)}>
                <BannerImage2 src={banner.image} alt={`Banner ${index + 1}`} />
              </BannerItem>
            ))}
          </BannerContainer>
        </CarouselContainer>

        <TextoPequeno>
          Como Jogar.
        </TextoPequeno>
        <CarouselContainer
          style={{ transform: `translateX(-${currentIndexComoJogar1 * 100}%)` }}
        >
          <BannerContainer>
            {bannersComoJogar1.map((banner, index) => (
              <BannerItem key={index} onClick={() => openModal(banner.videoId)}>
                <BannerImage src={banner.image} alt={`Banner ${index + 1}`} />
              </BannerItem>
            ))}
          </BannerContainer>
        </CarouselContainer>

        <PaginationContainer>
          {bannersComoJogar1.map((_, index) => (
            <PaginationDot
              key={index}
              active={index === currentIndexComoJogar1}
              onClick={() => setCurrentIndexComoJogar1(index)}
            />
          ))}
        </PaginationContainer>

        <TextoPequeno>
          Estratégias
        </TextoPequeno>
        <CarouselContainer
          style={{ transform: `translateX(-${currentIndexComoJogar2 * 100}%)` }}
        >
          <BannerContainer>
            {bannersComoJogar2.map((banner, index) => (
              <BannerItem key={index} onClick={() => openModal(banner.videoId)}>
                <BannerImage2 src={banner.image} alt={`Banner ${index + 1}`} />
              </BannerItem>
            ))}
          </BannerContainer>
        </CarouselContainer>
        <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
      </Container>
      <Menu></Menu>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Vídeo do YouTube"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            top: '50%',
            left: '50%',
            width: '70%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            background: 'none',
            overflow: 'hidden',
            textAlign: 'right',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          },
        }}
      >
        {/* <ButtonDiv>

        <ButtonClose onClick={()=> closeModal()}>x</ButtonClose>
        </ButtonDiv> */}

        {/* {selectedVideoId && (
         <VideoContainer>
         <YouTube videoId={selectedVideoId} opts={opts} />
       </VideoContainer>
        )} */}
      </Modal>
    </>
  );
};

export default Tutorial;