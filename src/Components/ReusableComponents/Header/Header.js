import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../../Assets/SpookyLogo.png';

function Header() {
  return (
    <header className='main-header'>
           <NavLink className="home-nav-link" to="/">
        <img className='logo' src={logo} alt="Logo" />
      </NavLink>
      <nav>
            <NavLink className="nav-link" to="/fineart">Fine Art</NavLink>
            <NavLink className="nav-link" to="/photography">Photography</NavLink>
            <NavLink className="nav-link" to="/webdesign">Web Design</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
