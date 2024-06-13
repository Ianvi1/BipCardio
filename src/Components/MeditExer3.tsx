import './meditexer3.css';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const MeditExer1 = () => {
  return (
    <body>
       <div className='cardTitle'>
          <h1 className='cardTitleText'>Meditação</h1>  
       </div>
        <div className='cardExerVideo3'>
          <div className='cardBarColorVideoLeft3'></div>
          <h3 className='cardExerTitleVideo3'>Exercicio 3:</h3>
          <div className='cardBarColorVideoRight3'></div>
        </div>
        <div className='VideoMeditArea3'>
          <iframe max-width="280" height="200" className='VideoCfg' src="https://www.youtube.com/embed/kyRctJm1smo?si=ntr55DM0LgbdHWAg"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
          <p className='VideoMeditDescText3'>Meditação Mindfulness: As técnicas de mindfulness reduzem o estresse porque ajudam a direcionar a atenção para o momento presente, afastando as preocupações passadas e futuras. </p>
        <Link to="/cardmedit" className="ReturnArrow1"><IoIosArrowBack color="#FFF" size={44}/> </Link>
      <Navbar/>
    </body>
  )
}

export default MeditExer1
