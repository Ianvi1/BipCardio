// src/Start.js
import { Link } from 'react-router-dom';
import './start.css';

const Start = () => {
  return (
    <div className="contentStart">
      <img src="../public/hands.png" alt="hands" />
      <h1>Bem Vindo!</h1>
      <p>Olá usuário! este é o BipCardio.<br />Clique abaixo para começar a <br /> experimentar o nosso aplicativo!</p>
      <Link to="/home" className="ButtonPress">Começar</Link>
    </div>
  );
}

export default Start;