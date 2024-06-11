import './home.css';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className='content'>
      <h1>Início</h1>
      <p>Aqui está a sessão principal, onde encontrará formas para acalmar sua ansiedade, escolha uma delas e veja se é uma boa opção para você</p>
      <div className="Card1">
        <h2>Meditação</h2>
      </div>
      <Navbar/>
    </div>
  )
}

export default Home
