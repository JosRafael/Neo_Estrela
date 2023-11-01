import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  General,
  Header,
  ImageHeader,
  Main,
  MainName,
  MainBody
} from "./styles";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import UserImg from "../../../assets/user.jpg";
import IframeComponent from "../../../components/Iframes";
import styled from "styled-components";

import { AuthContext } from "../../../context/auth";
import LinkGame from "../../../config/linkGames.json";


const AnalystName = styled.span`
  color: #FFFFFF;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
  display: block;
`;

const Message = styled.span`
  color: ${(props) => (props.tigrinho ? "#FFFFFF" : "#FFFFFF")};
  font-weight: ${(props) => (props.tigrinho ? "arial" : "normal")};
  font-size: ${(props) => (props.tigrinho ? "16px" : "14px")};
  margin-bottom: ${(props) => (props.tigrinho ? "10px" : "15px")};
  display: block;
`;

const Tiger = () => {
  const {user} = useContext(AuthContext);
  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const generateRandomMultiplicador = () => {
    return Math.floor(Math.random() * 13) + 2;
  };

  const generateNewStrategies = () => {
    const novaEstrategiaTurbo = { multiplicador: generateRandomMultiplicador() };
    const novaEstrategiaNormal = { multiplicador: generateRandomMultiplicador() };
    return { novaEstrategiaTurbo, novaEstrategiaNormal };
  };

  const [estrategiaTurbo, setEstrategiaTurbo] = useState(generateRandomMultiplicador());
  const [estrategiaNormal, setEstrategiaNormal] = useState(generateRandomMultiplicador());
  const [mensagemAtual, setMensagemAtual] = useState("Estou buscando uma oportunidade"); // Mensagem inicial
  const [isTyping, setIsTyping] = useState(false);
  const [turboAtivo, setTurboAtivo] = useState(true); // Começa com o turbo ativo
  const [exibindoMensagemInicial, setExibindoMensagemInicial] = useState(true); // Controla a exibição da mensagem inicial

  const alternarMensagemInicial = () => {
    setExibindoMensagemInicial((prevState) => !prevState);
  };

  const alternarEstrategias = () => {
    const { novaEstrategiaTurbo, novaEstrategiaNormal } = generateNewStrategies();
    setEstrategiaTurbo(novaEstrategiaTurbo);
    setEstrategiaNormal(novaEstrategiaNormal);
    setTurboAtivo((prevState) => !prevState);

    // Exibe a mensagem correspondente à estratégia atual com o horário atual mais 2 minutos
    const currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() + 2);
    const horaFormatada = formatTime(currentDate);
    const mensagem = turboAtivo
      ? `Tigrinho tá pagando até ${horaFormatada} entrem ${novaEstrategiaTurbo.multiplicador}x Turbo e ${novaEstrategiaNormal.multiplicador}x Normal`
      : `Tigrinho tá pagando até ${horaFormatada} entrem ${novaEstrategiaNormal.multiplicador}x Normal e ${novaEstrategiaTurbo.multiplicador}x Turbo`;
    setMensagemAtual(mensagem);

    // Reinicia o processo após 2 minutos
    setTimeout(() => {
      setIsTyping(true);
      setMensagemAtual("Digitando...");
      alternarMensagemInicial();
      setTimeout(() => {
        setIsTyping(false);
        alternarEstrategias();
      }, 5000);
    }, 120000); // 2 minutos
  };

  const startFlux = () => {
    const iniciarNovoFluxo = () => {
      setIsTyping(true);
      setMensagemAtual(exibindoMensagemInicial ? "Possível entrada para a gente, vamos esperar mais um pouco" : "Digitando...");
      alternarMensagemInicial(); // Alterna entre mensagens iniciais
      setTimeout(() => {
        setIsTyping(false);
        alternarEstrategias(); // Inicia com a primeira estratégia
      }, 5000); // 5 segundos após "Digitando..."
    };

    // Atraso para exibir a mensagem inicial antes de alternar
    setTimeout(iniciarNovoFluxo, 10000); // 10 segundos após a primeira mensagem
  };

  useEffect(() => {
    startFlux();
  }, []);

  return (
    <Container>
      <Link to="/slotsHome">
        <AiOutlineArrowLeft color="#fff" size="32" />
      </Link>
      <General>
        <Header>
          <ImageHeader src={UserImg} alt="" />
        </Header>
        <Main>
          <MainName><AnalystName>Clarisse Souza</AnalystName></MainName>
          <MainBody>
            {isTyping ? (
              <span>{mensagemAtual}</span>
            ) : (
              <Message tigrinho>{mensagemAtual}</Message>
            )}
          </MainBody>
        </Main>
      </General>
      
      <IframeComponent link={LinkGame[6].link} />
     
    </Container>
  );
};

export default Tiger;
