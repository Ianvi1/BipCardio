// src/Start.js
import { Link } from 'react-router-dom';
import  bipcardio from '../../public/Bipcardio.png';
import './start.css';

const Start = () => {
  return (
    <div className="contentStart">
      <p className='textAlert'>*Sujeito a erros, versão demonstrativa.</p>
      <img src={bipcardio} alt="hands" />
      <h1 className='StartTitle'>Bem Vindo!</h1>
      <p className='StartText'>Este é o BipCardio, aplicativo que auxilia você a se cuidar em situações de ansiedade. Clique abaixo para começar a experimentar o nosso aplicativo!</p>
      <Link to="/home" className="ButtonPress">Começar</Link>
    </div>
  );
}

export default Start;