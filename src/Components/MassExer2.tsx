import './massexer2.css';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const MeditExer1 = () => {
  return (
    <body>
       <div className='cardTitle'>
          <h1 className='cardTitleText'>Massagem</h1>  
       </div>
        <div className='cardExerVideo5'>
          <div className='cardBarColorVideoLeft5'></div>
          <h3 className='cardExerTitleVideo5'>Exercicio 2:</h3>
          <div className='cardBarColorVideoRight5'></div>
        </div>
        <div className='VideoMeditArea5'>
          <iframe max-width="280" height="200" className='VideoCfgOrange' src="https://www.youtube.com/embed/7jePuLcaz64?si=QpCA-avtllmWMbip" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
          <p className='VideoMeditDescText5'>Acupressão: é um recurso terapêutico  que envolve a estimulação de meridianos e pontos de acupuntura específicos no corpo utilizando a pressão do dedo.</p>
        <Link to="/cardmass" className="ReturnArrow1"><IoIosArrowBack color="#FFF" size={44}/> </Link>
      <Navbar/>
    </body>
  )
}

export default MeditExer1
