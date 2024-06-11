import './home.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='content'>
      <h1>Início</h1>
      <p>Aqui está a sessão principal, onde encontrará formas para acalmar sua ansiedade, escolha uma delas e veja se é uma boa opção para você</p>
      <Link to="/cardmedit" className="cardButton">
      <div className="Card1">
        <h2>Meditação</h2>
      </div>
        </Link>
      <div className="Card2">
        <h2 className='Card2h2'>Massagem</h2>
      </div>
      <div className="Card3">
        <h2>Yoga</h2>
      </div>
      <Navbar/>
    </div>
  )
}

export default Home
