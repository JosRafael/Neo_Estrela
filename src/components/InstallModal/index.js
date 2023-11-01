import React from 'react';
import styled from 'styled-components';
import { FaApple, FaAndroid } from 'react-icons/fa';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalWrapper = styled.div`
  background-color: #181818; /* Cor de fundo escura */
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  width: 60%; /* Reduzindo a largura máxima */
  max-width: 400px;
  padding: 20px;
  border: 2px solid #14b1a4; /* Cor da borda verde */
  color: #fff; /* Cor do texto */
  position: relative; /* Para posicionar o botão X */
  overflow-y: auto; /* Adicionando rolagem caso o conteúdo seja longo */
  max-height: 80%; /* Limitando a altura máxima */
  text-align: left; /* Alinhar o texto à esquerda */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  border-radius: 50%; /* Para criar o círculo verde */
  padding: 12px; /* Espaçamento dentro do círculo */
`;

const Icon = styled.div`
  font-size: 40px;
  color: #fff; /* Cor dos ícones */
`;

const Title = styled.h3`
  text-align: center;
  font-size: 24px;
  color: #14b1a4;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 16px;
  margin-bottom: 20px;
`;

const InstructionsBackground = styled.div`
  background-color: #1f1f1f; /* Cor de fundo para as instruções */
  border-radius: 10px;
  padding: 16px;
  margin-top: 20px;
`;

const Instructions = styled.ol`
  padding-left: 20px;
  list-style: none; /* Removendo os marcadores de lista padrão */
  margin: 0; /* Removendo margem padrão */
`;

const ListItem = styled.li`
  margin-left: -20px;
  margin-bottom: 10px;
  display: flex;
  align-items: flex-start; /* Alinhando itens à esquerda */
`;

const NumberSquare = styled.span`
  display: inline-flex;
  width: 24px;
  height: 24px;
  background-color: #14b1a4; /* Cor dos números quadrados */
  color: #fff; /* Cor do texto dentro dos números quadrados */
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  border-radius: 4px;
  font-weight: bold;
  flex-shrink: 0; /* Impedindo a redução de tamanho */
`;

const IconImage = styled.img`
  width: 24px; /* Reduzindo o tamanho da imagem */
  height: 24px; /* Reduzindo o tamanho da imagem */
  margin-right: 8px; /* Espaçamento à direita */
`;

const IconSvg = styled.svg`
  width: 24px;
  height: 24px;
  fill: #fff;
  margin-right: 8px; /* Espaçamento à direita */
`;
const IconBackground = styled.div`
  background-color: #1f1f1f; /* Cor de fundo dos ícones */
  border-radius: 50%;
  padding: 10px;
`;

const StepText = styled.span`
  flex-grow: 1; /* Permitindo que o texto cresça para ocupar o espaço restante */
`;

const InstallModal = ({ type, onClose }) => {
  const isIOS = type === 'iOS';

  return (
    <Overlay onClick={onClose}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <IconContainer>
          <IconBackground>
            {isIOS ? <FaApple size={40} /> : <FaAndroid size={40} />}
          </IconBackground>
        </IconContainer>
        <Title>Instale o app da Neobet!</Title>
        <Subtitle>
          Siga as etapas abaixo para instalar o nosso app no seu {type}:
        </Subtitle>
        <InstructionsBackground>
          <Instructions>
            {isIOS ? (
              <>
                <ListItem>
                  <NumberSquare>01</NumberSquare>
                  <StepText>Toque no ícone de Compartilhar</StepText>
                </ListItem>
                <ListItem>
                  <NumberSquare>02</NumberSquare>
                  <StepText>
                    Desça e toque em Adicionar à Tela de Início
                   
                  </StepText> <IconImage
                      src="https://tropadabet.com/wp-content/uploads/2023/08/icon-add.webp"
                      alt=""
                    />
                </ListItem>
                <ListItem>
                  <NumberSquare>03</NumberSquare>
                  <StepText>
                    Clique em Adicionar no canto superior direito
                  
                  </StepText>  <IconSvg
                      aria-hidden="true"
                      class="e-font-icon-svg e-fas-mobile-alt"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"
                        fill="#fff"
                      />
                    </IconSvg>
                </ListItem>
              </>
            ) : (
              <>
                <ListItem>
                  <NumberSquare>01</NumberSquare>
                  <StepText>Clique no ícone de "Mais opções" no canto superior direito</StepText>
                </ListItem>
                <ListItem>
                  <NumberSquare>02</NumberSquare>
                  <StepText>Depois clique em "Instalar Aplicativo" ou "Adicionar a tela Iniciar"</StepText>
                </ListItem>
                <ListItem>
                  <NumberSquare>03</NumberSquare>
                  <StepText>
                    Confirme a ação clicando em "Instalar" no popup que aparece

                  </StepText>
                </ListItem>
              </>
            )}
          </Instructions>
        </InstructionsBackground>
      </ModalWrapper>
    </Overlay>
  );
};

export default InstallModal;
