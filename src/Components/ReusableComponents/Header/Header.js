import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../../Assets/SpookyLogo.png';

function Header() {
  return (
    <header className='main-header'>
      <div className='flex-header'>
           <NavLink className="nav-link" to="/">
        <img className='logo' src={logo} alt="Logo" />
      </NavLink>
      <nav>
            <NavLink className="nav-link" to="/fineart">Fine Art</NavLink>
            <NavLink className="nav-link" to="/photography">Photography</NavLink>
            <NavLink className="nav-link" to="/webdesign">Web Design</NavLink>
            <NavLink className="nav-link" to="/about">About Me</NavLink>
      </nav>
      </div>
 
    </header>
  );
}

export default Header;
