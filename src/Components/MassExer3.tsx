import './massexer3.css';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const MeditExer1 = () => {
  return (
    <body>
       <div className='cardTitle'>
          <h1 className='cardTitleText'>Massagem</h1>  
       </div>
        <div className='cardExerVideo6'>
          <div className='cardBarColorVideoLeft6'></div>
          <h3 className='cardExerTitleVideo6'>Exercicio 3:</h3>
          <div className='cardBarColorVideoRight6'></div>
        </div>
        <div className='VideoMeditArea6'>
          <iframe max-width="280" height="200" className='VideoCfgOrange' src="https://www.youtube.com/embed/ZjVMKelQ1ps?si=gKOoUDjgtFgwNzPX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
          <p className='VideoMeditDescText6'>Reflexologia Podal: é a aplicação de pressão em pontos dos pés, com objetivos terapêuticos diversos, como alívio de dores, equilíbrio energético, relaxamento e estímulo à circulação sanguínea.</p>
        <Link to="/cardmass" className="ReturnArrow1"><IoIosArrowBack color="#FFF" size={44}/> </Link>
      <Navbar/>
    </body>
  )
}

export default MeditExer1
