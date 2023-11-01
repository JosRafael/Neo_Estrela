import React, { useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logoImage from "../../assets/logovsg.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import IframeComponent from "../../components/Iframes/Boomg";
import {AuthContext} from "../../context/auth";
import GameErrorMessageContainer from "../../components/GameError";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  logo: {
    marginTop: 25,
    marginBottom: 0,
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    padding: 20,
    borderRadius: 10,
  },
  input: {
    display: "flex",
    marginBottom: "8px",
    fontFamily: "inherit",
    fontSize: "1rem",
    width: "90%",
    color: "white",
    backgroundColor: "#1D2023",
    border: 0,
    padding: "8px 16px",
    borderRadius: 4,
  },
  titleGradient: {
    background: "linear-gradient(to bottom, #14b1a4, white)",
    "-webkit-background-clip": "text",
    color: "transparent",
  },
  greenButton: {
    backgroundColor: "#14b1a4",
    color: "white",
    borderRadius: 20,
    padding: 10,
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
    textAlign: "center",
    width: "90%", // este é apenas um valor estimado, você pode ajustar conforme necessário
    margin: "10px 0", // espaçamento acima e abaixo do botão
  },
  button1: {
    width: "100%",
    padding: 10,
    border: "none",
    borderRadius: 5,
    backgroundColor: "#FFF",
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
  },
  signUpLink: {
    marginTop: 25,
    marginBottom: 5,
    color: "#FFFFFF",
    textDecoration: "none",
  },
  italicText: {
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 10,
    color: "white",
    background: "linear-gradient(to bottom, #c4c4c4, #2c2c2c)",
    "-webkit-background-clip": "text",
  },

  highlight: {
    color: "#fdd92d",
  },
  passwordContainer: {
    position: "relative",
    width: "100%",
    marginBottom: "8px",
  },
  passwordIcon: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
  },
  checkboxContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
  marginTop: 15,
    marginBottom: 5,
  },
  checkboxLabel: {
    color: "white",
  },
  check: {
    marginRight: 5,
    backgroundColor: '#993917'
  },
  checkLabel:{
      paddingBottom: 1
  },
  button: {
    marginTop: "5px",
    width: "100%",
    padding: 15,
    border: "none",
    borderRadius: 5,
    backgroundColor: "#fdd92d", // Gradient start color
    background: "linear-gradient(45deg, #fdd92d, #fdd92d)", // Linear gradient colors
    color: "#FFFFFF", // White text color
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // A subtle shadow for depth
    transition: "all 0.3s ease-in-out", // A transition for smooth hover effect
    "&:hover": {
      background: "linear-gradient(45deg, #fdd92d, #fdd92d)", // Invert gradient on hover
      transform: "translateY(-2px)", // Slight lift on hover
      boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)", // More pronounced shadow on hover
    },
    "&:active": {
      transform: "translateY(0px)", // Reset position on click
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Reset shadow on click
    },
    iframeStyle: {
      width: "100%", // Você pode ajustar essas dimensões conforme necessário
      height: "100px",
      border: "none",
      borderRadius: "5px",
    },
    invisibleButton: {
      position: "absolute",
      width: "100%",
      height: "100px",
      top: 0,
      left: 0,
      background: "transparent",
      border: "none",
      cursor: "pointer",
      zIndex: 10,
    },

    iframeWrapper: {
      position: "relative",
      width: "100%",
      height: "100px",
    },

  },
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [keepLoggedIn, setKeepLoggedIn] = useState(false); // Estado para checkbox "Manter Login"
  const [deveRenderizar, setDeveRenderizar] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const {setLogged, user} = useContext(AuthContext)

  useEffect(() => {
    const temporizador = setTimeout(() => {
      setDeveRenderizar(true);
    }, 20000);

    return () => {
      clearTimeout(temporizador);
    };
  }, []);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (isChecked) {
        localStorage.setItem("logged", user.email);
        setLogged(user.email);
        toast.success("Seja bem-vindo!");
    } else {
      toast.error("Por favor, marque a opção 'Manter Login' para continuar");
    }
  };

  return (
    <div style={styles.container}>
      <ToastContainer />
      <img style={styles.logo} src={logoImage} alt="Logo" />
      <div style={styles.formContainer}>
        <h3 style={styles.titleGradient}>QUER JOGAR DIRETO NO APLICATIVO?</h3>

        <p style={styles.italicText}>
          FAÇA SEU CADASTRO NA <span style={styles.highlight}>ESTRELA</span> PARA
          TER ACESSO COMPLETO AOS NOSSOS SINAIS!
        </p>       
        <GameErrorMessageContainer/>
        <br />

        <div style={styles.iframeWrapper}>
          <IframeComponent />
        </div>

        {deveRenderizar && (
          <>
          <div  style={styles.checkboxContainer}>

        
            <label style={styles.checkLabel}>

              <input
                style={styles.check}
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              /> 
              Confirmo que criei uma conta na casa.
            </label>
            
            </div>


            <button style={styles.button} onClick={()=> handleLoginClick()} /* href="/home" */>
              ENTRAR
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;