import React, { useEffect } from 'react'; // Certifique-se de importar o useEffect
import styled from 'styled-components';
import backCassino from "../../assets/BackGround.png";
import Nav from '../../components/Nav';
import { FaWhatsapp } from 'react-icons/fa'; // Importando o ícone do WhatsApp
import ChatSimulator from '../../components/ChatSimulator';
import { FaArrowLeft } from 'react-icons/fa'; // Importando ícone de seta à esquerda
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
    background-image: url(${backCassino});
   max-height: 110vh;
    height: 110vh;
    padding: 20px;
    margin-top: -20px;
    width: 100vw;
  justify-content: center;
    color: #fff;
  
`;
const AdditionalText = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 6.3vw;
  margin-top: 120px;
  padding: 5px 10px;
  text-align: left;
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(217, 217, 217, 0.10);
  backdrop-filter: blur(7px);
  font-family: ubuntu, Sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1.3em;
  z-index: 2;
  
  /* Gradient do primeiro caractere até o último */
  background: linear-gradient(90deg, #14b1a4 0%, #fff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  
  @media screen and (min-width: 768px) {
    /* Estilos para telas maiores, por exemplo, telas maiores que 768px de largura */
    font-size: 24px;
  }
`;
const AdditionalText1 = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 6.3vw;
  margin-top: 30px;
  padding: 5px 10px;
  text-align: left;
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(217, 217, 217, 0.10);
  backdrop-filter: blur(7px);
  font-family: ubuntu, Sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1.3em;
  z-index: 2;
  
  /* Gradient do primeiro caractere até o último */
  background: linear-gradient(90deg, #14b1a4 0%, #fff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  
  @media screen and (min-width: 768px) {
    /* Estilos para telas maiores, por exemplo, telas maiores que 768px de largura */
    font-size: 24px;
  }
`;

const Title = styled.h1`
    background-color: #1E2028;
    text-align: center;
    padding: 10px 0;
    margin-top: 100px;
    margin-bottom: 30px;
    font-size: 15px;
    border-radius: 10px;
    color: #FFD700; 
`;
const BackButton = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    font-size: 20px;
    position: absolute;
    top: 80px;
    left: 20px;
    cursor: pointer;
    z-index: 10;
    display: flex;
    align-items: center;

    &:hover {
        color: #FFD700; // Mudando a cor ao passar o mouse
    }
`;

const RankingItem = styled.p`
    background-color: #1E2028;
    padding: 10px 20px;
    margin: 10px 0;
    border-radius: 10px;
    font-size: 12px;
`;

const Emoji = styled.span`
    font-size: 20px;
    margin-right: 10px;
    color: #FFD700;
`;

const RankingContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const LeftContainer = styled.div`
    display: flex;
    align-items: center;
`;

const RightContainer = styled.div`
    text-align: right;
`;

const SimpleText = styled.h2`
    text-align: center;
    margin-top: 30px;
`;

const InstructionText = styled.p`
    background-color: #1E2028;
    padding: 15px;
    border-radius: 10px;
    font-size: 16px;
    margin-top: 20px;
    line-height: 1.6;
`;
const InstructionText1 = styled.p`
    background-color: #1E2028;
    padding: 15px;
    border-radius: 10px;
    font-size: 16px;
    margin-top: 20px;
    line-height: 1.6;
`;

const WhatsappButton = styled.button`
    display: flex; // Mude para flex para posicionar o ícone e o texto lado a lado
    align-items: center; // Centralizar verticalmente
    justify-content: center; // Centralizar horizontalmente
    background-color: #25D366;
    color: white; // Cor preta para o texto
    padding: 15px;
    border: none;
    border-radius: 10px;
    width: 100%;
    font-size: 18px;
    cursor: pointer;
    margin-top: 30px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
`;

const WhatsappIcon = styled.span`
    font-size: 20px;
    margin-top: 4px;
    margin-right: 12px;
`;
const WhatsappLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #25D366;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 10px;
    margin-top: 30px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    text-decoration: none; // Remove o sublinhado do link
`;

const IndicationScreen = () => {
    const whatsappShareLink = "https://api.whatsapp.com/send?text=" + encodeURIComponent("Confira o melhor app com analises totalmente humanizadas: https://neobetacademy.com/");
    const navigate = useNavigate();
    useEffect(() => {
        // Função para lidar com erros em tempo de execução
        const handleError = (event) => {
            if (event.message === "ResizeObserver loop completed with undelivered notifications") {
                event.preventDefault();
            }
        };
    
        // Adiciona o ouvinte de evento
        window.addEventListener('error', handleError);
    
        // Retorna uma função para remover o ouvinte de evento quando o componente for desmontado
        return () => {
            window.removeEventListener('error', handleError);
        };
    }, []);
    
    return (
        <Container>
            <BackButton onClick={() => { navigate('/home') }}>
                <FaArrowLeft /> Voltar
            </BackButton>
            <Nav />
            <AdditionalText>RANKING TOP 5 DE INDICAÇÕES</AdditionalText>

            <RankingItem>
                <RankingContainer>
                    <LeftContainer>
                        <Emoji>🏆</Emoji>TOP 01
                    </LeftContainer>
                    <RightContainer>
                        MARINA <span style={{ color: "#FFD700" }}>INDICOU</span> 45 AMIGOS E <span style={{ color: "#32CD32" }}>GANHOU</span> R$ 810,00
                    </RightContainer>
                </RankingContainer>
            </RankingItem>

            <RankingItem>
                <RankingContainer>
                    <LeftContainer>
                        <Emoji>🏆</Emoji>TOP 02
                    </LeftContainer>
                    <RightContainer>
                        FABIANA <span style={{ color: "#FFD700" }}>INDICOU</span> 32 AMIGOS E <span style={{ color: "#32CD32" }}>GANHOU</span> R$ 759,00
                    </RightContainer>
                </RankingContainer>
            </RankingItem>

            <RankingItem>
                <RankingContainer>
                    <LeftContainer>
                        <Emoji>🏆</Emoji>TOP 03
                    </LeftContainer>
                    <RightContainer>
                        BRENO <span style={{ color: "#FFD700" }}>INDICOU</span>  27 AMIGOS E <span style={{ color: "#32CD32" }}>GANHOU</span> R$ 643,00
                    </RightContainer>
                </RankingContainer>
            </RankingItem>

            <RankingItem>
                <RankingContainer>
                    <LeftContainer>
                        <Emoji>🏆</Emoji>TOP 04
                    </LeftContainer>
                    <RightContainer>
                        JHON <span style={{ color: "#FFD700" }}>INDICOU</span> 21 AMIGOS E <span style={{ color: "#32CD32" }}>GANHOU</span> R$ 501,00
                    </RightContainer>
                </RankingContainer>
            </RankingItem>

            <RankingItem>
                <RankingContainer>
                    <LeftContainer>
                        <Emoji>🏆</Emoji>TOP 05
                    </LeftContainer>
                    <RightContainer>
                        FILIPE <span style={{ color: "#FFD700" }}>INDICOU</span> 17 AMIGOS E <span style={{ color: "#32CD32" }}>GANHOU</span> R$ 472,00
                    </RightContainer>
                </RankingContainer>
            </RankingItem>

            <AdditionalText1>PRA VOCÊ INDICAR É BEM SIMPLES <Emoji>🤩</Emoji></AdditionalText1>
            <ChatSimulator />
            <WhatsappLink href={whatsappShareLink} target="_blank">
                <WhatsappIcon><FaWhatsapp /></WhatsappIcon>
                WHATSAPP DE INDICAÇÃO
            </WhatsappLink>
        </Container>
    );
}

export default IndicationScreen;