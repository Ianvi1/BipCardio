import Navbar from "./Navbar";
import './apr6.css';
import { IoIosArrowBack } from "react-icons/io";
import {Link} from 'react-router-dom';

const Apr6 = () => {
  return (
    <div>
      <div className="AprArea">
        <div className="imageApr6"></div>
        <h1 className="NameTitle">Miguel <span className="Green">Batista</span> </h1>
        <div className="DescAreaApr">
          <p className="DescAreaAprText">
          Me chamo Miguel, tenho 17 anos e gosto muito de tecnologia. Estou animado para continuar ajudando nessa área, aprendendo coisas novas e encontrando soluções criativas.          </p>
        </div>
      </div>
      <Navbar/>
      <Link to="/apr5" className="ReturnArrow3"><IoIosArrowBack color="#FFF" size={44}/> </Link>
    </div>
  )
}

export default Apr6
