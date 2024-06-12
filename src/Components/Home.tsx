import './home.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='content'>
      <div className='headerTitle'>
         <h1 className='titleHome'>Início</h1>  
      </div>
      <p className='textHome'>Está é a sessão inicial, onde temos práticas para acalmar a mente em situações de ansiedade, escolha uma delas a sua preferência.</p>
      <Link to="/cardmedit" className="cardButton">
      <div className="Card1">
        <h2 className='Card1h2'>Meditação</h2>
      </div>
        </Link>
        <Link to="/cardmass" className='cardButton'>      
      <div className="Card2">
        <h2 className='Card2h2'>Massagem</h2>
      </div>
        </Link>
        <Link to="/cardyoga" className='cardButton'>
      <div className="Card3">
        <h2 className='Card3h2'>Yoga</h2>
      </div>
        </Link>
      <Navbar/>
    </div>
  )
}

export default Home
