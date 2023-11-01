import styled from "styled-components";
import backCassino from "../../assets/BackGround.png";

export const Container = styled.div`
  display: flex;
  background-image: url(${backCassino});
  background-size: cover;
  background-attachment: fixed;
  margin-top: 10px;
  background-position: center;
  height: 100%;
  width: 100%;
  align-items: center;
  flex-direction: column;
  margin: 0;

  @media screen and (max-width: 768px) {
    /* Estilos para telas menores, por exemplo, telas menores que 768px de largura */
    background-size: contain; /* Altere para "contain" para que a imagem caiba inteiramente no contêiner */
    background-position: center top; /* Mova a imagem para o topo */
  }
`;

export const Child = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const Titulo = styled.h1``;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  
`;
export const MainModal = styled.div`
  display: flex;
  width: 25%;
  margin-bottom: 60px;
  background: rgba(47, 69, 56, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  border: 1px solid #14b1a4;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 150px;
`;
export const ModalHeaderImg = styled.img`
  width: 50%;
  margin-top: 60px;
  height: 40px;
`;
export const ModalHeaderButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  position: fixed;
  top: 15px;
  left: 90%;
  border: none;
  @media (max-width: 768px) {
    left: 85%;
    top: 40px;
  }
`;
export const ModalHeaderTxt = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;
export const ModalTitleTxt = styled.h1`
  text-transform: uppercase;
  font-size: 32px;
  font-weight: bold;
  color: #14b1a4;
`;
export const ModalSubtitleTxt = styled.p`
  font-size: 16px;
  color: #fff;
  text-align: center;
  margin: 5px;
`;
export const ModalSubtitleTxtUp = styled.p`
  text-transform: uppercase;
  font-size: 18px;
  color: #fff;
  text-align: center;
  margin: 5px;
  font-weight: bold;
`;
export const ModalList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #14b1a4;
  width: 90%;
  margin-top: 5px;
`;
export const ModalListTxt = styled.span`
  color: #fff;
  margin-left: 5px;
`;

export const ModalPrices = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin: 10px;
`;
export const ModalPricesBefore = styled.div`
  font-size: 18px;
  color: #fff;
`;
export const ModalPricesBeforeNumber = styled.span`
  color: red;
  text-decoration: line-through;
  font-weight: bold;
  margin-left: 5px;
  font-size: 22px;
`;
export const ModalPricesAfter = styled.div`
  font-size: 18px;
  color: #fff;
`;
export const ModalPricesAfterNumber = styled.span`
  color: green;
  font-weight: bold;
  margin-left: 5px;
  font-size: 22px;
`;

export const ModalButton = styled.button`
  width: 90%;
  background-color: #14b1a4;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 5px;
  border: none;
`;
export const ModalButtonTxt = styled.span`
  text-transform: uppercase;
  margin-left: 5px;
  font-weight: bold;
  color: black;
`;

export const ModalSaque = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainModalSaque = styled.div`
  display: flex;
  width: 98%;
  height: 90%;
  background: rgba(47, 69, 56, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  border: 1px solid #14b1a4;
  align-items: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ModalHeaderSaque = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
`;

export const ModalRoleta = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainModalRoleta = styled.div`
  display: flex;
  width: 400px;
  height: 100%;
  background: rgba(47, 69, 56, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  border: 1px solid #14b1a4;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ModalHeaderRoleta = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
`;
export const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius:10px;
`;