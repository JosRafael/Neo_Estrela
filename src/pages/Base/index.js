import React, { useContext } from "react";
import {
  Container,
  Child,
  Modal,
  MainModal,
  ModalHeader,
  ModalHeaderButton,
  ModalHeaderImg,
  ModalHeaderTxt,
  ModalTitleTxt,
  ModalSubtitleTxt,
  ModalSubtitleTxtUp,
  ModalList,
  ModalListTxt,
  ModalPrices,
  ModalPricesBefore,
  ModalPricesBeforeNumber,
  ModalPricesAfter,
  ModalPricesAfterNumber,
  ModalButton,
  ModalButtonTxt,
  ModalSaque,
  MainModalSaque,
  ModalHeaderSaque,
  ModalRoleta,
  MainModalRoleta,
  ModalHeaderRoleta,
  BannerImg,
} from "./styled";
import x from "../../assets/logovsg.svg";

import { HiAcademicCap } from "react-icons/hi";
import ButtonIframe from "../../components/Nav/Iframes/ButtonIframe";


import DescontoImg from "../../assets/50desconto.png";

import { AuthContext } from "../../context/auth";
import PromoWheel from "../../components/PromoRoleta";

const Base = ({ children }) => {
  const {
    modalRoletaPromo,
    user,
    modal,
    setModal,
    modalSaque,
    modalDeposito,
    setModalSaque,
    setModalDeposito,
    modalRoleta,
    setModalRoleta,
    logged,
    setModalRoletaPromo,
  } = useContext(AuthContext);

  const handleClick = () => {
    setModalRoleta(false);
    setModalRoletaPromo(false);

  };

  return (
    <Container>
      <Child>{children}</Child>

      {modal ? (
        <Modal>
          <MainModal>
            <ModalHeader>
              <ModalHeaderImg src={x} alt="" />
              <ModalHeaderButton onClick={() => setModal(false)}>
                <ModalHeaderTxt>x</ModalHeaderTxt>
              </ModalHeaderButton>
            </ModalHeader>

            <ModalTitleTxt>SEJA PRO!</ModalTitleTxt>
            <ModalSubtitleTxt>
              Quer subir de nível, aumentar seus resultados e até mesmo se
              tornar um ANALISTA da nossa comunidade?
            </ModalSubtitleTxt>
            <ModalSubtitleTxtUp>Conheça o plano PRO!</ModalSubtitleTxtUp>
            <ModalList>
              <HiAcademicCap color="#14b1a4" size={26} />
              <ModalListTxt>Acesso a 18 jogos/salas</ModalListTxt>
            </ModalList>
            <ModalList>
              <HiAcademicCap color="#14b1a4" size={26} />
              <ModalListTxt>Analistas 24 horas</ModalListTxt>
            </ModalList>
            <ModalList>
              <HiAcademicCap color="#14b1a4" size={26} />
              <ModalListTxt>Lives de Alavancagem no App</ModalListTxt>
            </ModalList>
            <ModalList>
              <HiAcademicCap color="#14b1a4" size={26} />
              <ModalListTxt>Sorteios de Pixs</ModalListTxt>
            </ModalList>
            <ModalList>
              <HiAcademicCap color="#14b1a4" size={26} />
              <ModalListTxt>Estratégias dos Analistas </ModalListTxt>
            </ModalList>
            <ModalList>
              <HiAcademicCap color="#14b1a4" size={26} />
              <ModalListTxt>Aqui você pode se tornar um analista</ModalListTxt>
            </ModalList>
            <ModalPrices>
              <ModalPricesBefore>
                De <ModalPricesBeforeNumber>R$ 297</ModalPricesBeforeNumber>
              </ModalPricesBefore>
              <ModalPricesAfter>
                Por <ModalPricesAfterNumber>R$ 97</ModalPricesAfterNumber>
              </ModalPricesAfter>
            </ModalPrices>
            <ModalButton>
              <HiAcademicCap color="#000" size={26} />
              <ModalButtonTxt>Quero ser PRO</ModalButtonTxt>
            </ModalButton>
          </MainModal>
        </Modal>
      ) : null}

      {modalSaque ? (
        <ModalSaque>
          <MainModalSaque>
            <ModalHeaderSaque>
              <ModalHeaderButton onClick={() => setModalSaque(false)}>
                <ModalHeaderTxt>x</ModalHeaderTxt>
              </ModalHeaderButton>
            </ModalHeaderSaque>
            <ButtonIframe
              title="Saque"
              link="https://www.boomg.com/minha-conta/saque"
            />
          </MainModalSaque>
        </ModalSaque>
      ) : null}

      {modalDeposito ? (
        <ModalSaque>
          <MainModalSaque>
            <ModalHeaderSaque>
              <ModalHeaderButton onClick={() => setModalDeposito(false)}>
                <ModalHeaderTxt>x</ModalHeaderTxt>
              </ModalHeaderButton>
            </ModalHeaderSaque>
            <ButtonIframe
              title="Saque"
              link="https://www.boomg.com/minha-conta/deposito"
            />
          </MainModalSaque>
        </ModalSaque>
      ) : null}

      {user && logged && modalRoleta && user.pro === 0? (
        <ModalRoleta>
          <MainModalRoleta>
            <ModalHeaderRoleta>
              <ModalHeaderButton onClick={() => handleClick()}>
                <ModalHeaderTxt>x</ModalHeaderTxt>
              </ModalHeaderButton>
            </ModalHeaderRoleta>
            
            {!modalRoletaPromo ? (
              <PromoWheel
                show={modalRoleta}
                onClose={() => setModalRoleta(false)}
              />
            ) : (
             <a href="https://go.perfectpay.com.br/PPU38CNB92G?&utm_source=app&utm_medium=roleta"><BannerImg src={DescontoImg} alt="Banner de desconto" /></a> 
            )}
          </MainModalRoleta>
        </ModalRoleta>
      ) : null}
    </Container>
  );
};

export default Base;