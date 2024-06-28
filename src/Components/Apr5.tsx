import Navbar from "./Navbar";
import './apr5.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {Link} from 'react-router-dom';

const Apr5 = () => {
  return (
    <div>
      <div className="AprArea">
        <div className="imageApr5"></div>
        <h1 className="NameTitle">Danyella <span className="Green">Marcelino</span> </h1>
        <div className="DescAreaApr">
          <p className="DescAreaAprText">
Me chamo Danyella, tenho 22 anos e Neste projeto, participei do desenvolvimento do conceito final do dispositivo e do aplicativo.
          </p>
        </div>
      </div>
      <Navbar/>
      <Link to="/apr4" className="ReturnArrow3"><IoIosArrowBack color="#FFF" size={44}/> </Link>
      <Link to="/apr6" className="NextArrow3"><IoIosArrowForward color="#FFF" size={44}/> </Link>

    </div>
  )
}

export default Apr5
