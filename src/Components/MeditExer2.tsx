import './meditexer2.css';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const MeditExer1 = () => {
  return (
    <body>
       <div className='cardTitle'>
          <h1 className='cardTitleText'>Meditação</h1>  
       </div>
        <div className='cardExerVideo2'>
          <div className='cardBarColorVideoLeft2'></div>
          <h3 className='cardExerTitleVideo2'>Exercicio 2:</h3>
          <div className='cardBarColorVideoRight2'></div>
        </div>
        <div className='VideoMeditArea2'>
        <iframe className='VideoCfg' width="280" height="200" src="https://www.youtube.com/embed/f0fKbGEpJeQ?si=X1H-5aluvVLRBYnv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>        </div>
          <p className='VideoMeditDescText2'>Meditação com Mantra: pode ser usada na busca por silenciar a mente ou alcançar um objetivo. Sendo assim, é bom que a prática seja feita em um local confortável e silencioso, que favoreça seu relaxamento.  </p>
        <Link to="/cardmedit" className="ReturnArrow1"><IoIosArrowBack color="#FFF" size={44}/> </Link>
      <Navbar/>
    </body>
  )
}

export default MeditExer1
