import './meditexer1.css';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const MeditExer1 = () => {
  return (
    <body>
       <div className='cardTitle'>
          <h1 className='cardTitleText'>Meditação</h1>  
       </div>
        <div className='cardExerVideo1'>
          <div className='cardBarColorVideoLeft1'></div>
          <h3 className='cardExerTitleVideo1'>Exercicio 1:</h3>
          <div className='cardBarColorVideoRight1'></div>
        </div>
        <div className='VideoMeditArea1'>
          <iframe max-width="280" height="200" className='VideoCfg' src="https://www.youtube.com/embed/uLVvZWL2FUg?controls=1&si=3JssU7EZmJQWNI4C" allowFullScreen allow="fullscreen"></iframe>
        </div>
          <p className='VideoMeditDescText1'>Meditação guiada: é uma técnica que envolve a formação de imagens e sensações mentais de lugares, de situações, de cheiros, sons, texturas durante o processo. </p>
        <Link to="/cardmedit" className="ReturnArrow1"><IoIosArrowBack color="#FFF" size={44}/> </Link>
      <Navbar/>
    </body>
  )
}

export default MeditExer1
