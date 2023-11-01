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
import IframeComponent from "../../../components/Iframes";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import UserImg from "../../../assets/user.jpg";
import styled from "styled-components";
import LinkGame from "../../../config/linkGames.json";


import { AuthContext } from "../../../context/auth";

const MatrixRow = styled.div`
  display: flex;
  justify-content: center;
`;

const MatrixCell = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  background-color: #00bfff;
  border-radius: 5px;
`;

const Star = styled.span`
  font-size: 20px;
  align-items: center;
  justify-content: center;
  color: #ffd700;
`;

const AnalystName = styled.span`
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
  display: block;
`;

const PatternFoundMessage = styled.span`
  color: #ffffff;
  font-weight: arial;
  font-size: 16px;
  margin-bottom: 10px;
  display: block;
`;

const EntryPatternMessage = styled.span`
  color: #fff;
  font-size: 14px;
  margin-bottom: 15px;
  display: block;
`;

const HighlightedText = styled.span`
  color: #ffffff;
  font-weight: bold;
`;

const Mines = () => {
  const [mensagemAtual, setMensagemAtual] = useState(
    "Galera, padrão formado. Fiquem alertas, bora fazer nossa entradinha aí"
  );
  const [minesMatrix, setMinesMatrix] = useState([]);
  const [showMatrix, setShowMatrix] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const { user } = useContext(AuthContext);

  const generateMinesMatrix = () => {
    const totalCells = 25;
    const minStars = 3;
    const maxStars = 5;
    const totalStars = Math.floor(
      Math.random() * (maxStars - minStars + 1) + minStars
    );
    let matrix = new Array(5).fill(null).map(() => new Array(5).fill(""));
    let count = 0;

    while (count < totalStars) {
      const randomRow = Math.floor(Math.random() * 5);
      const randomCol = Math.floor(Math.random() * 5);
      if (matrix[randomRow][randomCol] !== "★") {
        matrix[randomRow][randomCol] = "★";
        count++;
      }
    }

    return matrix;
  };

  const startFlux = () => {
    setTimeout(() => {
      setIsTyping(true);
      setMensagemAtual("Digitando...");
      setTimeout(() => {
        setIsTyping(false);
        const newMessage = `Entrem nesse padrão até ${new Date().getHours()}:${
          (new Date().getMinutes() + 2) % 60
        }`;
        setMensagemAtual(newMessage);
        setMinesMatrix(generateMinesMatrix());
        setShowMatrix(true);
      }, 3000); // 3 segundos após "Digitando..."
    }, 10000); // 10 segundos após a primeira mensagem
  };

  useEffect(() => {
    startFlux();
    const intervalId = setInterval(startFlux, 123000); // 2 minutos + 10 segundos + 3 segundos

    return () => {
      clearInterval(intervalId);
    };
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
          <MainName>
            <AnalystName>Natale Colombo</AnalystName>
          </MainName>
          <MainBody>
            {mensagemAtual ===
              "Galera, padrão formado. Fiquem alertas, bora fazer nossa entradinha aí" && (
              <PatternFoundMessage>
                Galera, padrão formado. Fiquem alertas, bora fazer nossa
                entradinha aí
              </PatternFoundMessage>
            )}

            {mensagemAtual === "Digitando..." && <span>Digitando...</span>}

            {mensagemAtual.includes("Entrem nesse padrão até") && (
              <>
                <PatternFoundMessage>Padrão encontrado!</PatternFoundMessage>
                <EntryPatternMessage>
                  Entrem nesse padrão até{" "}
                  <HighlightedText>
                    {mensagemAtual.split(" ").slice(4, 6).join(" ")}
                  </HighlightedText>
                  , configurem <HighlightedText>03 minas</HighlightedText>, até
                  3 vezes.
                </EntryPatternMessage>
                <div>
                  {showMatrix &&
                    minesMatrix.map((row, rowIndex) => (
                      <MatrixRow key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <MatrixCell key={cellIndex}>
                            {cell === "★" && <Star>★</Star>}
                          </MatrixCell>
                        ))}
                      </MatrixRow>
                    ))}
                </div>
              </>
            )}
          </MainBody>
        </Main>
      </General>
    
      <IframeComponent link={LinkGame[11].link} />
      
      <br />
    </Container>
  );
};

export default Mines;
