import './sobredisp.css';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const SobreDisp = () => {
  return (
    <div>
      <div className='SobreDispArea'>
        <h1 className='TextSDA'>Sobre o <span className='Green'>Dispositivo</span></h1>
      </div>
          <p className='DescSDA'>Após uma série de pesquisas sobre o aumento de pessoas que possuem ansiedade, analisamos que dispositivos voltados para a saúde mental é muito escasso no mercado atualmente. Com esse raciocínio, elaboramos um dispositivo para pessoas que possuem o diagnóstico, ele faz a leitura dos batimentos cardíacos do usuário (Batidas por minuto), quando os batimentos chegam acima de 100, o módulo vibrador é acionado.</p>
          <div className='ImageArea'>
            <div className='ImageWhite'></div>
          </div>
      <Navbar/>
      <Link to="/home" className="ReturnArrow3"><IoIosArrowBack color="#FFF" size={44}/> </Link>
      <Link to="/sdcarc" className="NextArrow3"><IoIosArrowForward color="#FFF" size={44}/> </Link>
    </div>
  )
}

export default SobreDisp
