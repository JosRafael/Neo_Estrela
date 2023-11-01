import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;
`;

const LoadingText = styled.p`
  margin-top: 10px;
  font-size: 18px;
  color: #fff;
`;

const Loading = () => (
  <LoadingWrapper>
    <Spinner />
    <LoadingText>Carregando...</LoadingText>
  </LoadingWrapper>
);

export default Loading;
