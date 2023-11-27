import React from 'react'
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect,useState } from 'react';
function Navbar() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div>
        <div className="nav-bar-header" data-aos="fade-down">
     <div className='nav-left'>
    <img src="/assets/J.png" alt='image-missing' className='web-logo' />
     </div>
     <div className={`nav-container ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className='nav-toggle' onClick={toggleMenu} >
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
      <div className='nav-right'>
        <ul className={`nav-ul ${isMenuOpen ? 'show-menu' : ''}`}>
          <li className='nav-li'><Link to="/Contact" >Contact</Link></li>
          <li className='nav-li'><Link to="/Expertise" >Expertise</Link></li>
          <li className='nav-li'><Link to="/Portfolio" >Portfolio</Link></li>
          <li className='nav-li'><Link to="/Experience" >Experience</Link></li>
          <li className='nav-li'><Link to="/" >About</Link></li>
        </ul>
      </div>
    </div>
        </div>
    </div>
  )
}

export default Navbar