import './cardyoga.css';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import Navbar from './Navbar';
import { IoMdArrowDropright } from "react-icons/io";


const CardMedit = () => {
  return (
    <div className='content'>
      <div className='cardTitle'>
         <h1 className='cardTitleText'>Yoga</h1>  
      </div>
      <p className='cardDescText3'>O yoga é benéfico para muitas coisas, na questão da ansiedade, ajuda a levar a sua atenção para o momento presente, para que cada um repare na sua respiração, observando seu corpo e mente.</p>
       <div className='cardTaskBlue'>
        <p className='cardText3'>Veja quais exercícios abaixo de yoga você deseja ver:</p>
       </div>
       <div className='cardExer'>
          <div className='cardBarColorBlue'></div>
          <h3 className='cardExerTitle'>Exercicio 1:</h3>
          <p className='cardExerDesc'>Descrição legal</p>
          <IoMdArrowDropright className='ArrowIcon' size={24} color='#F1f1f1'/>
       </div>
       <div className='cardExer2'>
          <div className='cardBarColorBlue'></div>
          <h3 className='cardExerTitle'>Exercicio 2:</h3>
          <p className='cardExerDesc'>Descrição legal</p>
          <IoMdArrowDropright className='ArrowIcon' size={24} color='#F1f1f1'/>
       </div>
       <div className='cardExer3'>
          <div className='cardBarColorBlue'></div>
          <h3 className='cardExerTitle'>Exercicio 3:</h3>
          <p className='cardExerDesc'>Descrição legal</p>
          <IoMdArrowDropright className='ArrowIcon' size={24} color='#F1f1f1'/>
       </div>
      <Link to="/home" className="ReturnArrow3"><IoIosArrowBack color="#FFF" size={44}/> </Link>
      <Navbar/>
    </div>
  )
}

export default CardMedit
