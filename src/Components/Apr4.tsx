import Navbar from "./Navbar";
import './apr4.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {Link} from 'react-router-dom';

const Apr4 = () => {
  return (
    <div>
      <div className="AprArea">
        <div className="imageApr4"></div>
        <h1 className="NameTitle">Ramon <span className="Green">Sousa</span> </h1>
        <div className="DescAreaApr">
          <p className="DescAreaAprText">
          Me chamo Ramon, tenho 25 anos e tenho paixão por computadores e tecnologia desde quando eu era uma criança. Sou responsável pela criação de nosso dispositivo (definir nome dispositivo), tanto a parte física quanto a parte lógica. Espero que nosso projeto possa ajudar diversas pessoas que tem sua rotina afetada por conta da ansiedade.          </p>
        </div>
      </div>
      <Navbar/>
      <Link to="/apr3" className="ReturnArrow3"><IoIosArrowBack color="#FFF" size={44}/> </Link>
      <Link to="/apr5" className="NextArrow4"><IoIosArrowForward color="#FFF" size={44}/> </Link>

    </div>
  )
}

export default Apr4
