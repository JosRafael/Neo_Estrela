import axios from 'axios';

export default axios.create({
 baseURL: 'http://localhost:3333/'
  //BASE DA API ON-LINE baseURL: 'https://api-neobet.onrender.com'
  //BASE PARA RODAR LOCALMENTE baseURL: 'http://localhost:3333/'   
}); 