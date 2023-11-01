import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import videoFogos from '../../assets/Videos/50Desconto.mp4';

const ModalImage = () => {
  const [showImage, setShowImage] = useState(true);
  const navigate = useNavigate();

  const handleImageClick = (e) => {
    if (e.clientY > window.innerHeight / 2) {
      window.location.href = 'https://checkout.perfectpay.com.br/pay/PPU38CM52JF?';
    }
  };

  const handleCloseClick = () => {
    navigate('/home');
  };

  const containerStyle = {
     display: showImage ? 'block' : 'none', // Controla a visibilidade da imagem de fundo
    position: 'fixed',
    top: -20,
    left: 0,
    width: '100%',
    height: '110vh',
    zIndex: 999, // Certifique-se de que o modal esteja na frente de outros elementos
  };

  const videoStyle = {
    width: '100%',
    height: '100%',
    cursor: 'pointer',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '40px',
    right: '20px',
    fontSize: '24px',
    color: '#fff',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <video
        src={videoFogos}
        autoPlay
        loop
        muted
        style={videoStyle}
        onClick={(e) => handleImageClick(e)}
      />
      <span style={closeButtonStyle} onClick={handleCloseClick}>
        &times;
      </span>
      <a href="https://checkout.perfectpay.com.br/pay/PPU38CM52JF?">
        {/* Você também pode adicionar conteúdo dentro do container */}
        {/* Por exemplo, um botão de redirecionamento */}
      </a>
    </div>
  );
};

export default ModalImage;