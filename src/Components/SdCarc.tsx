import './sdcarc.css';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const SdCarc = () => {
  return (
    <div>
      <div className='AreaSD'>
        <h1 className='TitleAreaSD'> Características</h1>
          <div className='DescAreaSD'>
            <div className='ImageWhiteSD'></div>
            <p className='TitleTextAreaSD'>Monitoramento dos batimentos cardíacos</p>
            <p className='DescTextAreaSD'>O dispositivo está equipado com sensores 
capazes de monitorar os batimentos 
cardíacos  da pessoa em tempo real.</p>
<p className='TitleTextAreaSD2'>Algorítmos de análise</p>
            <p className='DescTextAreaSD2'>Algoritmos para analisar os padrões 
dos batimentos cardíacos e identificar
possíveis  mudanças que  indiquem o 
início de uma possível crise de ansiedade, enviando um sinal de vibração.
</p>
          </div>
      </div>
      <Navbar />
      <Link to="/home" className="ReturnArrowSD"><IoIosArrowBack color="#FFF" size={44}/> </Link>
      <Link to="/manual1" className="NextArrowSD"><IoIosArrowForward color="#FFF" size={44}/> </Link>
    </div>
  )
}

export default SdCarc
