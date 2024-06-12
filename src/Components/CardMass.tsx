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
      <p className='cardDescText'>A massagem traz o aumento de hormônios que causam bem-estar, melhora o humor, reduz o estresse e diminui o cortisol.</p>
       <div className='cardTaskOrange'>
        <p className='cardText'>Veja quais exercícios abaixo de massagem você deseja ver:</p>
       </div>
       <div className='cardExer'>
          <div className='cardBarColorOrange'></div>
          <h3 className='cardExerTitle'>Exercicio 1:</h3>
          <p className='cardExerDesc'>Descrição legal</p>
          <IoMdArrowDropright className='ArrowIcon' size={24} color='#F1f1f1'/>
       </div>
       <div className='cardExer2'>
          <div className='cardBarColorOrange'></div>
          <h3 className='cardExerTitle'>Exercicio 2:</h3>
          <p className='cardExerDesc'>Descrição legal</p>
          <IoMdArrowDropright className='ArrowIcon' size={24} color='#F1f1f1'/>
       </div>
       <div className='cardExer3'>
          <div className='cardBarColorOrange'></div>
          <h3 className='cardExerTitle'>Exercicio 3:</h3>
          <p className='cardExerDesc'>Descrição legal</p>
          <IoMdArrowDropright className='ArrowIcon' size={24} color='#F1f1f1'/>
       </div>
      <Link to="/home" className="ReturnArrow"><IoIosArrowBack color="#FFF" size={44}/> </Link>
      <Navbar/>
    </div>
  )
}

export default CardMedit
