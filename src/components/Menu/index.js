import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { LuGamepad2 } from "react-icons/lu";
import { TbPigMoney } from "react-icons/tb";
import { MdOutlineSmartDisplay } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi";
import { TiBusinessCard } from "react-icons/ti";

import { AuthContext } from "../../context/auth";
import { NavLink, useLocation } from "react-router-dom";

const Container = styled.nav`
  width: 95vw;
  display: flex;
  justify-content: space-around;
  color: #fff;
  background: rgba(2, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  position: fixed;
  height: 70px;
  bottom: 0;
  border-radius: 25px;
  margin: 10px;
  z-index: 1;
  align-items: center;
`;

const Button = styled(NavLink)`
  border: none;
  background: transparent;
  color: ${(props) => (props.isActive ? "#14b1a4" : "#fff")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 10px; /* Espaçamento acima do ícone */
  padding-bottom: 10px; /* Espaçamento abaixo do ícone */
  transition: color 0.3s; /* Adiciona uma transição suave na cor */
  text-decoration: none; /* Remova a decoração de texto padrão dos links */

  &.active {
    color: #14b1a4;
  }
`;

const Text = styled.span`
  font-size: 12px;
  margin-top: 5px;
  text-align: center; /* Alinhe o texto no centro na quebra de linha */
`;

const SupportIcon = styled.img`
  width: 30px;
  height: 30px;
  filter: brightness(0) invert(1); /* Aplica um filtro para tornar a imagem branca */
`;

const Indicator = styled.div`
  width: 35px; // Ajuste a largura para alinhar corretamente sob o ícone
  height: 2px;
  background-color: #14b1a4;
  position: absolute;
  top:1px;
  left: ${(props) => `${props.position}%`};
  transition: left 0.8s ease-in-out;
`;


export default function Menu() {
  const { user, modal, modalSaque, modalDeposito, modalRoleta} = useContext(AuthContext);
  const location = useLocation();

  const initialPosition = localStorage.getItem('indicatorPosition') || 0;
  const [indicatorPosition, setIndicatorPosition] = useState(initialPosition);

  useEffect(() => {
    switch (location.pathname) {
      case "/home":
        setIndicatorPosition(6); // Ajuste a posição para alinhar corretamente
        break;
      case "/bonus":
        setIndicatorPosition(27); // Ajuste a posição
        break;
      case "/lives":
        setIndicatorPosition(49); // Ajuste a posição
        break;
      case "/tutorial":
        setIndicatorPosition(69); // Ajuste a posição
        break;
      case "/gerenciamento":
        setIndicatorPosition(86.6); // Ajuste a posição
        break;
    }
  }, [location.pathname]);

  useEffect(() => {
    localStorage.setItem('indicatorPosition', indicatorPosition);
  }, [indicatorPosition]);


  const isActive = (path) => location.pathname === path;

  return (
    <>
      {modal || modalSaque || (modalRoleta && (user.pro === 0)) || modalDeposito  ? null : (
        <Container>
          <Indicator position={indicatorPosition} />
          <Button exact to={"/home"} activeClassName="active">

            <LuGamepad2 size={30} />
            <Text>Salas de Operações</Text>
          </Button>

          <Button to={"/bonus"} activeClassName="active">

            <TbPigMoney size={30} />
            <Text>Resgate Seu Bônus</Text>
          </Button>

          <Button to={"/lives"} activeClassName="active">

            <MdOutlineSmartDisplay size={30} />
            <Text>Lives de Operações</Text>
          </Button>

          <Button to={"/tutorial"} activeClassName="active">

            <HiAcademicCap size={30} />
            <Text>Aprenda a Jogar</Text>
          </Button>

          <Button to={"/gerenciamento"} activeClassName="active">

            <TiBusinessCard size={30} />
            <Text>Gerenciar Perfil</Text>
          </Button>
        </Container>
      )}
    </>
  );
}