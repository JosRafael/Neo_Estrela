import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  General,
  Header,
  ImageHeader,
  Main,
  MainMsg,
  MainName,
  MainBody,
  HighlightedText,
} from "./styles";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import IframeComponent from "../../../components/Iframes/";
import UserImg from "../../../assets/user.jpg";
import axios from "axios";
import { AuthContext } from "../../../context/auth";
import api from "../../../config/api";
import PanelRoleta from "../BacboPanel";
import LinkGame from "../../../config/linkGames.json";


const BacBo = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [analistaMsgs, setAnalistaMsgs] = useState([]);
  const [mensagemAtual, setMensagemAtual] = useState(
    <span>Analisando padrões...</span>
  );
  const { user } = useContext(AuthContext);
  const [estrategiaSelecionada, setEstrategiaSelecionada] = useState("");

  const [currentStrategy, setCurrentStrategy] = useState("");

  const estrategias = [
    (tempoExpiracao) => (
      <span>
        Entrada confirmada na cor 🔵 até{" "}
        <HighlightedText>2 proteções</HighlightedText>, válido até{" "}
        {tempoExpiracao}
      </span>
    ),
    (tempoExpiracao) => (
      <span>
        Entrada confirmada na cor 🔴 até{" "}
        <HighlightedText>2 proteções</HighlightedText>, válido até{" "}
        {tempoExpiracao}
      </span>
    ),
  ];

  useEffect(() => {
    const messageSequence = [
      {
        message: "Estou analisando qual a melhor estratégia nesse momento 🤑",
        delay: 0,
      },
      { message: "Digitando...", delay: 10000 },
      { message: "Possível Entrada, fiquem alertas!🔥", delay: 13000 },
      { message: "generateStrategy", delay: 18000 }, // Esta é uma ação especial para gerar a estratégia
    ];

    const runMessageSequence = () => {
      messageSequence.forEach((item, index) => {
        setTimeout(() => {
          if (item.message === "generateStrategy") {
            generateStrategy();
          } else {
            setMensagemAtual(item.message);
          }
        }, item.delay);
      });
    };

    const generateStrategy = () => {
      const dataAtual = new Date();
      const tempoExpiracao = new Date(dataAtual.getTime() + 2 * 60 * 1000)
        .toLocaleTimeString()
        .slice(0, 5);
      const strategyIndex = Math.floor(Math.random() * estrategias.length);
      const estrategiaAleatoria = estrategias[strategyIndex];
      const mensagem = estrategiaAleatoria(tempoExpiracao);
      setMensagemAtual(mensagem);
      const strategies = ["🔵", "🔴"];
      setCurrentStrategy(strategies[strategyIndex]);
    };

    runMessageSequence();

    const intervalId = setInterval(runMessageSequence, 148000); // 128000 + 20000 (maior delay da sequência)

    // Certifique-se de que fetchData é chamado
    fetchData();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const fetchData = async () => {
    try {
      await api
        .get("/games/ultimosNumeros", {
          headers: {
            Authorization: `Basic ${user.token}`,
          },
        })
        .then((response) => {
          setData(response.data.ultimosNumeros);
        })
        .catch((error) => {
          console.log(error);
        });

      // ... Restante do seu código de busca e análise ...

      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      setError(error.message);
      setIsLoading(false);
    }
  };

  const fetchNewData = () => {
    fetchData();
  };

  useEffect(() => {
    console.log("Dados atualizados:", data);
  }, [data]);

  return (
    <Container>
      <Link to="/cassinoHome">
        <AiOutlineArrowLeft color="#fff" size="32" />
      </Link>

      <General>
        <Header>
          <ImageHeader src={UserImg} alt="" />
        </Header>
        <Main>
          <MainMsg>
            <MainName>Breno Santiago</MainName>
            {isLoading ? (
              <MainBody>Analisando dados...</MainBody>
            ) : error ? (
              <MainBody>Analista não está presente</MainBody>
            ) : (
              <MainBody>
                {analistaMsgs.length > 0 && (
                  <>
                    {analistaMsgs.map((msg, index) => (
                      <p key={index}>{msg}</p>
                    ))}
                  </>
                )}
                {analistaMsgs.length === 0 && <p>{mensagemAtual}</p>}
              </MainBody>
            )}
          </MainMsg>
        </Main>
      </General>
      <PanelRoleta strategy={currentStrategy} />

      <IframeComponent link={LinkGame[5].link} />
      <br />
      <br />
    </Container>
  );
};

export default BacBo;
