import React, { useState } from 'react';
import styled from 'styled-components';
import ExpandIcon from '../PanelRoleta/ExpandIcon';
import AlertIcon from '../PanelRoleta/AlertIcon';

// Importando as imagens diretamente
import Bacbo from '../../../assets/BacboFotos/bacbo02.png'; 
import BacBo1 from '../../../assets/BacboFotos/bacbo01.png'; 
// Mapeamento de estratégias para imagens
const roletaImages = {
  "🔵": Bacbo,
  "🔴": BacBo1,
  // ... adicione outros mapeamentos com imagens importadas conforme necessário
};

const PanelContainer = styled.div`
  background-color: #181818;
  color: white;
  padding: 15px;
  border-radius: 10px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PanelHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const AlertIconContainer = styled.div`
  margin-right: 10px; // Ajuste conforme necessário.
`;

const SignalImage = styled.img`
  width: 550px;
  max-width: 100%;
  border: solid !important;
  border-radius: 20px !important;
  border-width: 2px !important;
  border-color: #ff5b29 !important;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5) !important;
}`;

const PanelTitle = styled.h3`
  margin: 0;
  font-size: 16px;
`;

const StrategyInfo = styled.div`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #ff5b29;
  text-align: center;
`;

const ConfirmadaPanel = ({strategy}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandIcon, setExpandIcon] = useState(true);

  const toggleIcon = () => {
    setIsExpanded(!isExpanded);
    setExpandIcon(!expandIcon);
  };

  return (
    <PanelContainer>
      <PanelHeader>
        <AlertIconContainer>
          <AlertIcon />
        </AlertIconContainer>
        <PanelTitle>
          {strategy ? "Entrada Confirmada" : "Analista buscando entrada"}
        </PanelTitle>
        {strategy ? (
          <ExpandIcon
            onClick={toggleIcon}
            expandIcon={expandIcon}
          />
        ) : (
          <>!</> // Emoji de "não expansível". Você pode substituir por um ícone se preferir.
        )}
      </PanelHeader>
      {isExpanded && strategy && (
        <>
          <StrategyInfo>Entrada encontrada para {strategy}</StrategyInfo>
          <SignalImage src={roletaImages[strategy]} alt="Signal" />
        </>
      )}
    </PanelContainer>
  );
};

export default ConfirmadaPanel;
