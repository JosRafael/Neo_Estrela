import React from "react";
import styled from "styled-components";

const ErrorMessageContainer = styled.div`
  margin: 10px 0;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ErrorBoxContainer = styled.div`
  background-color: #363636;
  color: rgb(255, 255, 255);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  background-image: none;
  overflow: hidden;
  padding: 10px;
  width: calc(100% - 40px);
  margin: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 10px #fdd92d; /* Aumente a opacidade aqui */
  
  svg {
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentcolor;
    flex-shrink: 0;
    font-size: 14px;
    margin-right: 4px;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fdd92d;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const GameErrorMessageContainer = ({ link }) => {
  const handleClick = () => {
    window.location.href = 'https://record.partnersboomg.com/_zNe6BecKMYuVAv0U_Fv2nWNd7ZgqdRLk/2/?payload=poslogin'; // Redireciona para o link do iframe
  };

  return (
    <ErrorMessageContainer>
      <ErrorBoxContainer>
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-7i67f2"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="InfoOutlinedIcon"
        >
          <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>{" "}
        <span> A Página Não Carregou? </span>
        <a onClick={handleClick}>
           Clique aqui
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-7i67f2"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="InfoOutlinedIcon"
          >
            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
          </svg>
        </a>
      </ErrorBoxContainer>
    </ErrorMessageContainer>
  );
};

export default GameErrorMessageContainer;