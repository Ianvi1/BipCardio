import './yogaexer2.css';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const MeditExer1 = () => {
  return (
    <body>
       <div className='cardTitle'>
          <h1 className='cardTitleText'>Yoga</h1>  
       </div>
        <div className='cardExerVideo8'>
          <div className='cardBarColorVideoLeft8'></div>
          <h3 className='cardExerTitleVideo8'>Exercicio 2:</h3>
          <div className='cardBarColorVideoRight8'></div>
        </div>
        <div className='VideoMeditArea8'>
          <iframe max-width="280" height="200" className='VideoCfgBlue' src="https://www.youtube.com/embed/UCyQC9S0JKg?si=YAUEFomGOTkN5kMj"  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
          <p className='VideoMeditDescText8'>Técnicas Respiratórias: são uma parte fundamental do yoga, e sua importância abrange várias dimensões da saúde e bem-estar.</p>
        <Link to="/cardyoga" className="ReturnArrow2"><IoIosArrowBack color="#FFF" size={44}/> </Link>
      <Navbar/>
    </body>
  )
}

export default MeditExer1
