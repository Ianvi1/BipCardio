import Navbar from './Navbar';
import './aboutus.css';
import LogoA from '../../public/PessoasCriandoCoisas.png';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div>
      <div className="AboutUsArea">
          <img className='Logo'src={LogoA} alt="Logo"/>
        <h1 className='AboutUsTitle'>Sobre <span>Nós</span></h1>
        <p className='AboutUsText'>Somos a equipe <span>Pessoas Criando Coisas</span> e temos o intuito de ajudar as pessoas que sofrem de crises de ansiedade através de um dispositivo que proporcione o autogerenciamento sobre as crises.</p>
        <Link to="/apr1" className="ButtonPress1">Clique para Conhecer!</Link>
      </div>
      <Navbar />
    </div>
  )
}

export default AboutUs
