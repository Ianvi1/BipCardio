import Navbar from "./Navbar";
import './apr3.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {Link} from 'react-router-dom';

const Apr3 = () => {
  return (
    <div>
      <div className="AprArea">
        <div className="imageApr3"></div>
        <h1 className="NameTitle">Deyse <span className="Green">Azevedo</span> </h1>
        <div className="DescAreaApr">
          <p className="DescAreaAprText">
          Eu me chamo Deyse, tenho 22 anos e sou muito interessada na área da tecnologia. Neste projeto, mergulhei na pesquisa sobre a ansiedade e a realização da documentação. Estou animada para continuar contribuindo nesse universo em constante evolução.        </p>
        </div>
      </div>
      <Navbar/>
      <Link to="/apr2" className="ReturnArrow3"><IoIosArrowBack color="#FFF" size={44}/> </Link>
      <Link to="/apr4" className="NextArrow3"><IoIosArrowForward color="#FFF" size={44}/> </Link>

    </div>
  )
}

export default Apr3
