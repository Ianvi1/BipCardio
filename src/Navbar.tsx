import { FaHome, FaReact } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import "./navbar.css";

const Navbar = () => {
  return (
      <div className="MobileBar">
          <ul>
            <li className="Home"><a href="/"><FaHome color="#b5b6b7" size={32}/></a></li>
            <li className="React"><a href="/"><FaReact color="#b5b6b7" size={32}/></a></li>
            <li className="People"><a href="/"><BsFillPeopleFill color="#b5b6b7" size={32}/></a></li>
          </ul>
      </div>
  )
}

export default Navbar
