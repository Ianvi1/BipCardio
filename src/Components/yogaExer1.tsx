import './yogaexer1.css';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const MeditExer1 = () => {
  return (
    <body>
       <div className='cardTitle'>
          <h1 className='cardTitleText'>Yoga</h1>  
       </div>
        <div className='cardExerVideo7'>
          <div className='cardBarColorVideoLeft7'></div>
          <h3 className='cardExerTitleVideo7'>Exercicio 1:</h3>
          <div className='cardBarColorVideoRight7'></div>
        </div>
        <div className='VideoMeditArea7'>
          <iframe max-width="280" height="200" className='VideoCfgBlue' src="https://www.youtube.com/embed/5aHGlekF2lQ?si=QmRGznb72OIzAAz3" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
          <p className='VideoMeditDescText7'>Redução de estresse: Pra reduzirmos a ansiedade e o estresse que vem com ela, devemos trabalhar o nosso foco no momento presente.</p>
        <Link to="/cardyoga" className="ReturnArrow2"><IoIosArrowBack color="#FFF" size={44}/> </Link>
      <Navbar/>
    </body>
  )
}

export default MeditExer1
