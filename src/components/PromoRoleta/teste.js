import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate
import roletaImage from '../../assets/roleta-start.png.webp';
import flechaImage from '../../assets/Flecha.webp';
import playImage from '../../assets/playImage.png';
import CongratulationsModal from '../ModalPromo/PromotionalModal';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(3655deg);  // 10 voltas + 10 graus para cair no 50%
  }
`;

const ArrowImage = styled.img`
  width: 33px;
  height: auto;
  position: absolute;
  top: 27%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const PlayImage = styled.img`
  width: 50px;
  height: auto;
  position: absolute;
  top: 49.5%;
  left: 51%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const WheelContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: ${props => (props.show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  
  z-index: 1; // Defina um índice de z para a roleta
`;

const CongratulationsModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2; // Defina um índice de z maior para o modal
`;

const Wheel = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
  animation: ${props =>
    props.spinning &&
    css`
      ${spin} 6s ease-out forwards
    `};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 70px;
  right: 20px;
  background-color: #ff0000;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

const PromoWheel = ({ show, onClose }) => {
  const [spinning, setSpinning] = useState(false);
  const [showCongratulationsModal, setShowCongratulationsModal] = useState(false);
  const [showWheel, setShowWheel] = useState(true); // Variável de estado para controlar a visibilidade da roleta
  const navigate = useNavigate(); // Usando useNavigate para redirecionamento

  const handleSpin = () => {
    setSpinning(true);

    // Simulando a roleta parar no valor 50 após 5 segundos
    setTimeout(() => {
      setSpinning(false);
      setShowCongratulationsModal(true);
      setShowWheel(false); // Oculta a roleta quando o modal é exibido
      navigate('/promotional'); // Redireciona para a rota /promotional
    }, 6500);
  };

  useEffect(() => {
    if (showCongratulationsModal) {
      // Você pode adicionar lógica adicional aqui, como envio de pontuação ou realização de ações após a vitória.
    }
  }, [showCongratulationsModal]);

  return (
    <>
      <WheelContainer show={show && showWheel}>
        <Wheel src={roletaImage} alt="Roleta Promocional" onClick={handleSpin} spinning={spinning} />
        <PlayImage src={playImage} alt="Play" />
        <ArrowImage src={flechaImage} alt="Flecha" />
      </WheelContainer>

      {/* Renderize o modal de parabenização quando showCongratulationsModal for verdadeiro */}
      {showCongratulationsModal && (
        <CongratulationsModalContainer>
          <CongratulationsModal onClose={() => setShowCongratulationsModal(false)} />
        </CongratulationsModalContainer>
      )}
    </>
  );
};

export default PromoWheel;