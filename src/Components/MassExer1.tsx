import './massexer1.css';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const MeditExer1 = () => {
  return (
    <body>
       <div className='cardTitle'>
          <h1 className='cardTitleText'>Massagem</h1>  
       </div>
        <div className='cardExerVideo4'>
          <div className='cardBarColorVideoLeft4'></div>
          <h3 className='cardExerTitleVideo4'>Exercicio 1:</h3>
          <div className='cardBarColorVideoRight4'></div>
        </div>
        <div className='VideoMeditArea4'>
          <iframe max-width="280" height="200" className='VideoCfgOrange' src="https://www.youtube.com/embed/KUnVAoHPfoY?si=SHzyM28hVUH6LF7B"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
          <p className='VideoMeditDescText4'>Automassagem: é um ato de cuidado consigo em que a pessoa toca e exerce uma leve força em alguns pontos e áreas do corpo para aliviar tensões, dores e ter momentos de relaxamento.</p>
        <Link to="/cardmass" className="ReturnArrow1"><IoIosArrowBack color="#FFF" size={44}/> </Link>
      <Navbar/>
    </body>
  )
}

export default MeditExer1
