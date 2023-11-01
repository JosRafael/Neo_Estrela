import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";

import { Link } from "react-router-dom";

import { AuthContext } from "../../../context/auth";


const Container = styled.div`
  width: 170px;
  height: 350px;
  margin: 10px;
  border-radius: 10px;
  border: 2px solid #14b1a4;
`;

const Header = styled.div``;

const Analyst = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

const AnalystImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  object-fit: cover;
  margin: 0px 5px;
`;

const AnalystName = styled.span`
  font-weight: 600;
  color: #14b1a4;
`;

const UsersOnline = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const UsersOnlineTopic = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: green;
  margin-right: 5px;
`;
const UsersOnlineTxt = styled.span`
  font-size: 12px;
  color: #fff;
`;

const Latest = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 5px;
  border-bottom: 1px solid #14b1a4;
  padding: 5px;
`;

const LatestTxt = styled.span`
  font-size: 10px;
  color: #fff;
`;

const LatestHits = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 5px;
`;

const Vicktory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid green;
  width: 30px;
  height: 15px;
  border-radius: 15px;
  color: green;
  margin-right: 5px;
  font-size: 12px;
`;

const Defeat = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid red;
  width: 30px;
  height: 15px;
  border-radius: 15px;
  color: red;
  font-size: 12px;
`;

const UserPro = styled.button`
  display: flex;
  width: 100%;
  height: 65%;
  flex-direction: column;
  z-index: 1;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
`;

const UserMainPro = styled.div`
  width: 90%;
`;

const BannerGamerPro = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  animation: pulse 2s infinite;
  width: 100%;
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const ImageGamePro = styled.img`
  width: 100%;
  display: block;
  border-radius: 10px;
  box-shadow: 5px 5px 5px rgba(200, 200, 200, 0.5),
    -5px 5px 5px rgba(200, 200, 200, 0.5), 5px -5px 5px rgba(200, 200, 200, 0.5),
    -5px -5px 5px rgba(200, 200, 200, 0.5);
`;
const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(150, 150, 150, 0.5);
  z-index: 1;
  border-radius: 10px;
`;

const ButtonEntrarPro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
`;
const ButtonEntrarBntPro = styled.div`
  text-transform: uppercase;
  width: 95%;
  height: 40px;
  margin: 5px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d0d0d0;
  color: #555555;
`;

const BannerGamer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const UserSimple = styled.div`
  display: flex;
  width: 100%;
  height: 65%;
  flex-direction: column;
  z-index: 1;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
`;

const UserMain = styled.div`
  width: 90%;
`;

const ImageGame = styled.img`
  width: 100%;
  border-radius: 10px;

  box-shadow: 5px 5px 5px #14b1a4, -5px 5px 5px #14b1a4, 5px -5px 5px #14b1a4,
    -5px -5px 5px #14b1a4;

  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const ButtonEntrar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
`;
const ButtonEntrarBnt = styled.button`
  text-transform: uppercase;
  width: 100%;
  height: 40px;
  margin: 5px 0;
  background-color: #14b1a4;
  font-size: 16px;
  font-weight: bold;

  a:visited {
    color: black;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10px;
  margin: 0;
`;

const Spinner = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-top: 2px solid #fff;
  border-radius: 50%;
  width: 5px; /* Tamanho reduzido para 5px */
  height: 5px; /* Tamanho reduzido para 5px */
  animation: ${spin} 2s linear infinite;
`;

const SLink = styled(Link)`
  color: black; // Cor padrão do texto
  text-decoration: none; // Remove o sublinhado

  &:hover {
    color: black; // Cor quando o mouse passa por cima
  }

  &:active {
    color: black; // Cor quando o link é clicado (ativo)
  }

  &:visited {
    color: black; // Cor após o link ser visitado
  }
`;

const Cards = ({
  Pro,
  AnalystPhoto,
  NameAnalyst,
  Players,
  NumberGreen,
  NumberRed,
  CardImg,
  LinkGame,
}) => {
  const { setModal } = useContext(AuthContext);
  return (
    <Container>
      <Header>
        <Analyst>
          <AnalystImg src={AnalystPhoto} alt="" />
          <AnalystName>Analista {NameAnalyst}</AnalystName>
        </Analyst>

        <UsersOnline>
          <UsersOnlineTopic />
          <UsersOnlineTxt>{Players} jogadores nesta sala</UsersOnlineTxt>
        </UsersOnline>

        <Latest>
          <LatestTxt>Últimas 24 horas</LatestTxt>
          <LatestHits>
            <Vicktory>
              {NumberGreen === 0 ? (
                <SpinnerContainer>
                  <Spinner />
                </SpinnerContainer>
              ) : (
                NumberGreen
              )}
            </Vicktory>
            <Defeat>
              {NumberRed === 0 ? (
                <SpinnerContainer>
                  <Spinner />
                </SpinnerContainer>
              ) : (
                NumberRed
              )}
            </Defeat>
          </LatestHits>
        </Latest>
      </Header>

      {!Pro ? (
        <UserPro onClick={() => setModal(true)}>
          <UserMainPro>
            <BannerGamerPro>
              <ImageGamePro src={CardImg} alt="" />
              <ImageOverlay />
            </BannerGamerPro>
            <ButtonEntrarPro>
              <ButtonEntrarBntPro>Entrar na Sala</ButtonEntrarBntPro>
            </ButtonEntrarPro>
          </UserMainPro>
        </UserPro>
      ) : (
        <UserSimple>
          <UserMain>
            <BannerGamerPro>
              <SLink to={LinkGame}>
                <ImageGame src={CardImg} alt="" />
              </SLink>
            </BannerGamerPro>
            <ButtonEntrar>
              <ButtonEntrarBnt>
                <SLink to={LinkGame}>Entrar na Sala</SLink>
              </ButtonEntrarBnt>
            </ButtonEntrar>
          </UserMain>
        </UserSimple>
      )}
    </Container>
  );
};

export default Cards;