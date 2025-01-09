import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import BurgerMenu from './BurgerMenu';

const Navbar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      };

  return (
    <div className="navbar">
      <div className="navbar__links-logo">
        <div className="navigation__nav">
          <NavLink className="navbar-link" to="/">Accueil</NavLink>
          <ul className="navbar-list">
            <li className="navbar-item dropdown">
            <span className="navbar-link" onClick={toggleDropdown}>
                Qui sommes-nous ?
            </span>
            <ul className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
              <li className="hide-on-mobile"><NavLink className="navbar-link" to="/vision-theraforma">La vision de TheraForma</NavLink></li>
              <li className="hide-on-mobile"><NavLink className="navbar-link" to="/theraforma-france">TheraForma France</NavLink></li>
              <li className="hide-on-mobile"><NavLink className="navbar-link" to="/theraforma-international">TheraForma International</NavLink></li>
            </ul>
            </li>
        </ul>
        <li className="hide-on-mobile">
          <NavLink className="navbar-link" to="/evenements">Evènements</NavLink>
        </li>
        <li className="hide-on-mobile">
          <NavLink className="navbar-link" to="/Nos-formations-thera">Nos formations Thera</NavLink>
        </li>
        <li className="hide-on-mobile">
          <NavLink className="navbar-link" to="/nous-retrouver">Nous retrouver</NavLink>
        </li>
        <li className="hide-on-mobile">
          <NavLink className="navbar-link" to="/programme-2025">Programme 2025</NavLink>
        </li>
        <li className="hide-on-mobile">
          <NavLink className="navbar-link" to="/inscription">Inscription</NavLink>
        </li>
        <li className="hide-on-mobile">
          <NavLink className="navbar-link" to="/librairie">Librairie</NavLink>
        </li>
        </div>
      </div>
      <BurgerMenu />
    </div>
  );
};

export default Navbar;