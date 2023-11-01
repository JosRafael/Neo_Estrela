import React, { useContext } from "react";
import styled from "styled-components";

import { AuthContext } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";

import Logo from "../../assets/logovsg.svg";
import { Link } from "react-router-dom";


const Container = styled.nav`
  width: 100vw;
  display: flex;
  justify-content: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  position: fixed;
  height: 60px;
`;

const Options = styled.div`
  filter: blur(0px);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  
  align-items: center;
`;

const OptionImg = styled.img`
  height: 20px;
`;
const Buttons = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const Logout = styled.button`
  background: transparent;
  border: none;
  margin-left: 10px;
`;
const Button = styled.button`
  background-color: #14b1a4;
box-shadow: 0 0 15px #14b1a4;
color: #fff;
padding: 5px;
margin-right: 5px;
width: 80px;
border: none;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;

`;

export default function Nav() {
  const navigate = useNavigate(); // Step 2: Initialize useNavigate
  const { user, modal, modalSaque, modalDeposito,setModalSaque, setModalDeposito, logout, modalRoleta } = useContext(AuthContext);
  return (
    <>
      {modal || modalSaque|| (modalRoleta && (user.pro === 0))  || modalDeposito ? null : (
        <Container>
          <Options>
          <OptionImg 
              src={Logo} 
              alt="Logo" 
              onClick={() => navigate('/home')} // Step 3: Trigger navigation on click
            />
            <Buttons>
              <Button  onClick={() => setModalSaque(true)}>Saque</Button>
              <Button  onClick={() => setModalDeposito(true)}>Depósito</Button>
              <Logout onClick={() => logout()}>
                <RiLogoutCircleRLine size={34} color="#fff" />
              </Logout>
            </Buttons>
          </Options>
        </Container>
      )}
    </>
  );
}
