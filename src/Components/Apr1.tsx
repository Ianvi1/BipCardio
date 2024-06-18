import Navbar from "./Navbar";
import './apr1.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {Link} from 'react-router-dom';

const Apr1 = () => {
  
  return (
    <div>
      <div className="AprArea">
        <div className="imageApr1"></div>
        <h1 className="NameTitle">Alinne <span className="Green">Tannus</span> </h1>
        <div className="DescAreaApr">
          <p className="DescAreaAprText">
          Me chamo Alinne, tenho 19 anos e sou apaixonada por tecnologia. No projeto atual, desempenho um papel importante, cuidando da documentação e do design do aplicativo. Estou empolgada com as oportunidades que surgem e comprometida em contribuir para o sucesso deste projeto!
          </p>
        </div>
      </div>
      <Navbar/>
      <Link to="/home" className="ReturnArrow3"><IoIosArrowBack color="#FFF" size={44}/> </Link>
      <Link to="/apr2" className="NextArrow3"><IoIosArrowForward color="#FFF" size={44}/> </Link>
    </div>
  )
}

export default Apr1
