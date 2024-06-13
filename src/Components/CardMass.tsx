import './cardmass.css';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import Navbar from './Navbar';
import { IoMdArrowDropright } from "react-icons/io";


const CardMedit = () => {
  return (
    <div className='content'>
      <div className='cardTitle'>
         <h1 className='cardTitleText'>Massagem</h1>  
      </div>
      <p className='cardDescText2'>A massagem traz o aumento de hormônios que causam bem-estar, melhora o humor, reduz o estresse e diminui o cortisol.</p>
       <div className='cardTaskOrange'>
        <p className='cardText2'>Veja quais exercícios abaixo de massagem você deseja ver:</p>
       </div>
       <Link to="/massexer1" className='cardButton'>
       <div className='cardExer'>
          <div className='cardBarColorOrange'></div>
          <h3 className='cardExerTitle'>Exercicio 1:</h3>
          <p className='cardExerDesc'>Automassagem</p>
          <IoMdArrowDropright className='ArrowIcon' size={24} color='#F1f1f1'/>
       </div>
       </Link>    
       <Link to="/massexer2" className='cardButton'>
       <div className='cardExer2'>
          <div className='cardBarColorOrange'></div>
          <h3 className='cardExerTitle'>Exercicio 2:</h3>
          <p className='cardExerDesc'>Acupressão</p>
          <IoMdArrowDropright className='ArrowIcon' size={24} color='#F1f1f1'/>
       </div>
       </Link>    
       <Link to="/massexer3" className='cardButton'>
       <div className='cardExer3'>
          <div className='cardBarColorOrange'></div>
          <h3 className='cardExerTitle'>Exercicio 3:</h3>
          <p className='cardExerDesc'>Reflexologia Podal</p>
          <IoMdArrowDropright className='ArrowIcon' size={24} color='#F1f1f1'/>
       </div>
       </Link>   
       
      <Link to="/home" className="ReturnArrow2"><IoIosArrowBack color="#FFF" size={44}/> </Link>
      <Navbar/>
    </div>
  )
}

export default CardMedit
