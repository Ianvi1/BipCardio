import Navbar from "./Navbar";
import './apr2.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {Link} from 'react-router-dom';

const Apr2 = () => {
  return (
    <div>
      <div className="AprArea">
        <div className="imageApr2"></div>
        <h1 className="NameTitle">Ian <span className="Green">Vieira</span> </h1>
        <div className="DescAreaApr">
          <p className="DescAreaAprText">
          Eu me chamo Ian Vieira, tenho 20 anos e a tecnologia sempre esteve comigo desde criança. Neste projeto, estou envolvido no desenvolvimento do aplicativo, nosso projeto é um incentivador a ter mais contribuições sobre ajuda mental na vida das pessoas, e esperamos continuar com isto.
          </p>
        </div>
      </div>
      <Navbar/>
      <Link to="/apr1" className="ReturnArrow3"><IoIosArrowBack color="#FFF" size={44}/> </Link>
      <Link to="/apr3" className="NextArrow3"><IoIosArrowForward color="#FFF" size={44}/> </Link>

    </div>
  )
}

export default Apr2
