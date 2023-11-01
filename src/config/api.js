import axios from 'axios';

export default axios.create({
 baseURL: 'https://api-estrela.onrender.com'
  //BASE DA API ON-LINE baseURL: 'https://api-neobet.onrender.com'
  //BASE PARA RODAR LOCALMENTE baseURL: 'http://localhost:3333/'   
}); 