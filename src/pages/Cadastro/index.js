import React, {useState, useContext} from "react";
import styled from "styled-components";
import { Container, Banner } from "./styles";
import { Link } from "react-router-dom"; // Importe o componente Link
import backCassino from "../../assets/logovsg.svg";
import acessarLoginImage from "../../assets/ACESSAR.png"; // Importe a imagem local aqui
import { AuthContext } from "../../context/auth";

import { toast } from "react-toastify";
import { validarEmail } from "../../utilities/utils";

const CustomIconListItem = styled.div`
  display: flex;
  align-items: center;
  border-radius: 24px;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 220px;
  padding: 5px 10px;
  border: 3px solid var(--primria-bet-700, #bf81be);
  background: #9cff0010;
`;

const WelcomeText = styled.span`
  color: #bf81be; /* Cor roxa */
  
`;

const AdditionalText = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 6.3vw;
  margin-top: 10px;
  padding: 5px 10px;
  text-align: left;
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(217, 217, 217, 0.10);
  backdrop-filter: blur(7px);
  font-family: ubuntu, Sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1.3em;
  z-index: 2;
  
  /* Gradient do primeiro caractere até o último */
  background: linear-gradient(90deg, #14b1a4 0%, #fff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  
  @media screen and (min-width: 768px) {
    /* Estilos para telas maiores, por exemplo, telas maiores que 768px de largura */
    font-size: 24px;
  }
`;

const EmailTextContainer = styled.div`
  color: #c6c6ca;
  font-family: inter, Sans-serif;
  font-size: 16px;
  font-weight: 400;
  z-index: 2;
  padding: 5px 10px;
  margin-top: 5px;
`;
const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const BannerContainerIMG = styled.img`
  height: auto;
  width: 400px;
  object-fit: cover;
`;

const InputContainer = styled.div`
  display: flex;
  padding: 5px 10px;
  align-items: center;
  margin-top: 5px;
`;

const Input = styled.input`
  width: 90%;
  padding: 12px 10px;
  border: 1px solid #69727d; /* Alterando a cor da borda */
  border-radius: 4px;
  font-size: 16px;
  color: white;
  background-color: #1d2023c7;
  border-color: #373c41;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  &::placeholder {
    color: #999;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 5px 10px;
`;

const CheckboxLabel = styled.label`
  color: #DCDDDF;
  margin-left: 10px;
  font-size: 16px;
  font-family: inter, sans-serif;
  cursor: pointer;
`;

const AccessButton = styled.button`
  background-image: url(${acessarLoginImage}); /* Usando a imagem importada como plano de fundo */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%; /* Defina a largura desejada para o botão */
  height: 120px; /* Defina a altura desejada para o botão */
  padding: 32px 0;
  margin-top: -10px;
  background-color: #56cca100;
  border: none;
  cursor: pointer;
`;

const TermsLink = styled(Link)`
  color: #4B4B4B;
  text-decoration: underline;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  display: block; /* Tornando o link um bloco para que ele fique embaixo do botão */
  margin-top: -15px; /* Adicionando margem superior para espaçamento */
`;

const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Cadastro = () => {

  const { cadastro } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  function handleLogin() {
    if (email !== "") {
      if (validarEmail(email)) {
        cadastro(email);
      } else {
        toast.error("Formato inválido!");
      }
    } else {
      toast.error("Campo vazio!");
    }
  }

  return (
    <Container>
      <BannerContainer>
        <BannerContainerIMG src={backCassino} alt="Logo Cassino" />
      </BannerContainer>

      <AdditionalText>
        O ÚNICO APLICATIVO COM <br />
        ANÁLISES HUMANIZADAS EM
        TEMPO REAL
      </AdditionalText>
      <EmailTextContainer className="elementor-1137 elementor-element elementor-element-a04ad91">
        Insira abaixo seu email utilizado na compra do <br />
        acesso a nossa plataforma
      </EmailTextContainer>
      <InputContainer>
        <Input
          size="1"
          type="email"
          name="form_fields[email]"
          id="form-field-email"
          className="elementor-field elementor-size-md  elementor-field-textual"
          placeholder="Seu e-mail"
          required="required"
          aria-required="true"
          onChange={(e) => setEmail(e.target.value)}

        />
      </InputContainer>
      <CheckboxContainer>
        <input type="checkbox" id="termosUso" />
        <CheckboxLabel htmlFor="termosUso">Li e aceito os termos de uso</CheckboxLabel>
      </CheckboxContainer>
      <CenteredContent>
        <AccessButton  onClick={() => handleLogin() }  type="submit" id="form-login" />
        <TermsLink to="/termos">Termos de uso e Política de Privacidade</TermsLink>
      </CenteredContent>
    </Container>
  );
};

export default Cadastro;
