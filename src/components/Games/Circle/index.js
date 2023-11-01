import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.button`
  background-color: #474a51;
  width: 60px;
  height: 60px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 25px #14b1a4; /* Aumenta a sombra no hover */
  background-size: cover;
  background-position: center;
`;

const Titulo = styled.h4`
  margin-top: 5px;
  color: #fff;
`;



const Circle = ({ name, bgImage, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Icon style={{ backgroundImage: `url(${bgImage})` }}></Icon>
      <Titulo>{name}</Titulo>
    </Container>
  );
};

export default Circle;
