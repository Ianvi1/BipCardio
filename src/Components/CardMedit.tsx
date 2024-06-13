import './cardmedit.css';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
import Navbar from './Navbar';
import { IoMdArrowDropright } from "react-icons/io";


const CardMedit = () => {
  return (
    <body>
      <div className='cardTitle'>
         <h1 className='cardTitleText'>Meditação</h1>  
      </div>
      <p className='cardDescText1'>Meditação é considerada uma sabedoria no mundo religioso, por ser uma prática de técnicas focadas para esvaziar sua mente visando alcançar um estado de clareza mental e emocional.</p>
       <div className='cardTask1'>
        <p className='cardText1'>Veja quais exercícios abaixo de meditação você deseja ver:</p>
       </div>
       <Link to="/meditexer1" className='cardButton'>
       <div className='cardExer'>
          <div className='cardBarColor'></div>
          <h3 className='cardExerTitle'>Exercicio 1:</h3>
          <p className='cardExerDesc'>Descrição legal</p>
          <IoMdArrowDropright className='ArrowIcon' size={24} color='#F1f1f1'/>
       </div>
       </Link>
       <div className='cardExer2'>
          <div className='cardBarColor'></div>
          <h3 className='cardExerTitle'>Exercicio 2:</h3>
          <p className='cardExerDesc'>Descrição legal</p>
          <IoMdArrowDropright className='ArrowIcon' size={24} color='#F1f1f1'/>
       </div>
       <div className='cardExer3'>
          <div className='cardBarColor'></div>
          <h3 className='cardExerTitle'>Exercicio 3:</h3>
          <p className='cardExerDesc'>Descrição legal</p>
          <IoMdArrowDropright className='ArrowIcon' size={24} color='#F1f1f1'/>
       </div>
      <Link to="/home" className="ReturnArrow1"><IoIosArrowBack color="#FFF" size={44}/> </Link>
      <Navbar/>
    </body>
  )
}

export default CardMedit
