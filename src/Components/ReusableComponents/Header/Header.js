import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../../Assets/SpookyLogo.png';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className='main-header'>
      <div className="header-content">
        <NavLink className="home-nav-link" to="/" onClick={closeMobileMenu}>
          <img className='logo' src={logo} alt="Logo" />
        </NavLink>
        <div className="hamburger" onClick={handleHamburgerClick}>
          &#9776;
        </div>
      </div>
      <nav className="nav">
      <NavLink className="nav-link" to="/fineart">Fine Art</NavLink>
          <NavLink className="nav-link" to="/photography">Photography</NavLink>
          <NavLink className="nav-link" to="/webdesign">Web Design</NavLink>
          <NavLink className="nav-link" to="/about">About</NavLink>
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </nav>
      {mobileMenuOpen && (
        <nav className="nav-mobile">
          <NavLink className="nav-link" to="/fineart" onClick={closeMobileMenu}>Fine Art</NavLink>
          <NavLink className="nav-link" to="/photography" onClick={closeMobileMenu}>Photography</NavLink>
          <NavLink className="nav-link" to="/webdesign" onClick={closeMobileMenu}>Web Design</NavLink>
          <NavLink className="nav-link" to="/about" onClick={closeMobileMenu}>About</NavLink>
          <NavLink className="nav-link" to="/contact" onClick={closeMobileMenu}>Contact</NavLink>
        </nav>
      )}
    </header>
  );
}

export default Header;