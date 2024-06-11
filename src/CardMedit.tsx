import './cardmedit.css';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";

const CardMedit = () => {
  return (
    <div>
      <div className="MeditImg">
        <h2>Meditação</h2>
      </div>
      <p>Meditação é considerada uma sabedoria no mundo religioso, por ser uma prática de técnicas focadas para esvaziar sua mente visando alcançar um estado de clareza mental e emocional.</p>
      <div className="cardExer">
        <p className='cardText'>Veja Quais exercícios abaixo de meditação você deseja ver:</p>
      </div>
      <Link to="/home" className="ReturnArrow"><IoIosArrowBack color="#FFF" size={44}/> </Link>
    </div>
  )
}

export default CardMedit
