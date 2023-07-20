import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../../Assets/Spooky Logo.svg';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Welcome</NavLink>
          </li>
          <li>
            <NavLink to="/fineart">Fine Art</NavLink>
          </li>
          <li>
            <NavLink to="/photography">Photography</NavLink>
          </li>
          <li>
            <NavLink to="/webdesign">Web Design</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Me</NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to="/">
        <img src={logo} alt="Logo" />
      </NavLink>
    </header>
  );
}

export default Header;
