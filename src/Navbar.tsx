import { FaHome, FaReact } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  const [activePage, setActivePage] = useState<string>('home');

  const handleSetActivePage = (page: string) => {
    setActivePage(page);
  }

  return (
      <div className="MobileBar">
          <ul>
            <li className={activePage === 'home' ? 'active':''} onClick={() => handleSetActivePage('home')}><Link to="/home" className="navbarHome"><FaHome color={activePage === 'home' ? '#3ce2fb' : '#b5b6b7'} size={32}/></Link></li>
            <li className={activePage === 'react' ? 'active':''} onClick={() => { setActivePage('react'); }}><Link to="/sobredisp" className="navbarReact"><FaReact color={activePage === 'react' ? '#3ce2fb' : '#b5b6b7'} size={32}/></Link></li>
            <li className={activePage === 'people' ? 'active':''} onClick={() => handleSetActivePage('people')}><a href="/"><BsFillPeopleFill color={activePage === 'people' ? '#3ce2fb' : '#b5b6b7'} size={32}/></a></li>
          </ul>
      </div>
  )
}

export default Navbar;