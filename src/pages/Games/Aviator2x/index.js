import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  General,
  Header,
  ImageHeader,
  Main,
  MainName,
  MainBody,
} from "./styles";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import UserImg from "../../../assets/user.jpg";

import styled from "styled-components";
import IframeComponent from "../../../components/Iframes/";
import { AuthContext } from "../../../context/auth";

import LinkGame from "../../../config/linkGames.json";



const AnalystName = styled.span`
  color: #FFFFFF;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
  display: block;
`;

const EntryPatternMessage = styled.span`
  color: #fff;
  font-size: 14px;
  margin-bottom: 15px;
  display: block;
`;

const Aviator = () => {
  const { user } = useContext(AuthContext);
  const [mensagemAtual, setMensagemAtual] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const generateAviatorSignal = () => {
    const minEntry = 1.51;
    const maxEntry = 2.01;
    const randomEntry = (Math.random() * (maxEntry - minEntry) + minEntry).toFixed(2);
    const message = `Entrem no Aviator com entrada de ${randomEntry}x até ${new Date().getHours()}:${(new Date().getMinutes() + 2) % 60}`;
    return message;
  };

  const startFlux = () => {
    
    setIsTyping(true);
    setMensagemAtual("Digitando...");

    setTimeout(() => {
      setIsTyping(false);
      const newMessage = generateAviatorSignal();
      setMensagemAtual(newMessage);
    }, 3000); // 3 segundos após "Digitando..."
  };

  useEffect(() => {
    startFlux();
    const intervalId = setInterval(startFlux, 100000); // 2 minuto

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Container>
      <Link to="/crashHome">
        <AiOutlineArrowLeft color="#fff" size="32" />
      </Link>
      <General>
        <Header>
          <ImageHeader src={UserImg} alt="" />
        </Header>
        <Main>
          <MainName>
            <AnalystName>Francisco S.</AnalystName>
          </MainName>
          <MainBody>
            {mensagemAtual === "Digitando..." && <span>Digitando...</span>}

            {mensagemAtual.includes("Entrem no Aviator com entrada de") && (
              <EntryPatternMessage>{mensagemAtual}</EntryPatternMessage>
            )}
          </MainBody>
        </Main>
      </General>
        <IframeComponent link={LinkGame[1].link} />
    </Container>
  );
};

export default Aviator;
