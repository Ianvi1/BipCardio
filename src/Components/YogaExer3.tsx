import './yogaexer3.css';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const YogaExer3 = () => {
  return (
    <body>
       <div className='cardTitle'>
          <h1 className='cardTitleText'>Yoga</h1>  
       </div>
        <div className='cardExerVideo9'>
          <div className='cardBarColorVideoLeft9'></div>
          <h3 className='cardExerTitleVideo9'>Exercicio 3:</h3>
          <div className='cardBarColorVideoRight9'></div>
        </div>
        <div className='VideoMeditArea9'>
          <iframe max-width="280" height="200" className='VideoCfgBlue' src="https://www.youtube.com/embed/sDHWJ58VNzk?si=6w9F_wMQREX37EeW"  frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
          <p className='VideoMeditDescText9'>Relaxamento: O relaxamento na yoga é um aspecto fundamental que complementa a prática física e mental desta disciplina. É um estado de repouso profundo que permite ao corpo e à mente recuperarem-se do estresse e da tensão diária. </p>
        <Link to="/cardyoga" className="ReturnArrow2"><IoIosArrowBack color="#FFF" size={44}/> </Link>
      <Navbar/>
    </body>
  )
}

export default YogaExer3
