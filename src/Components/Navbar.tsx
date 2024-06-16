import { FaHome, FaReact } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  
  const location = useLocation();
  
  const getActivePage = () => {
    if (location.pathname === '/home' || location.pathname === '/cardmedit' || location.pathname === '/cardmass' || location.pathname === '/cardyoga'  
        || location.pathname === '/meditexer1' || location.pathname === '/meditexer2' || location.pathname === '/meditexer3' 
        || location.pathname === '/massexer1' || location.pathname === '/massexer2' || location.pathname === '/massexer3' 
        || location.pathname === '/yogaexer1' || location.pathname === '/yogaexer2' || location.pathname === '/yogaexer3'
    ) return 'home';
    if (location.pathname === '/sobredisp' || location.pathname === '/sdcarc' || location.pathname === '/manual1') return 'react';
    if (location.pathname === '/sobrenos' || location.pathname === '/apr1' || location.pathname === '/apr2' || location.pathname === '/apr3' || location.pathname === '/apr4' || location.pathname === '/apr5' || location.pathname === '/apr6') return 'people';
    return '';
  }

  const activePage = getActivePage();

  return (
      <div className="MobileBar">
          <ul>
            <li className={activePage === 'home' ? 'active' : ''}>
              <Link to="/home" className="navbarHome">
                <FaHome color={activePage === 'home' ? '#3ce2fb' : '#b5b6b7'} size={32}/>
              </Link>
            </li>
            <li className={activePage === 'react' ? 'active' : ''}>
              <Link to="/sobredisp" className="navbarReact">
                <FaReact color={activePage === 'react' ? '#3ce2fb' : '#b5b6b7'} size={32}/>
              </Link>
            </li>
            <li className={activePage === 'people' ? 'active' : ''}>
              <Link to="/sobrenos">
                <BsFillPeopleFill color={activePage === 'people' ? '#3ce2fb' : '#b5b6b7'} size={32}/>
              </Link>
            </li>
          </ul>
      </div>
  );
}

export default Navbar;