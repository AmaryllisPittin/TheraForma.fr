import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

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
                <li><NavLink className="navbar-link" to="/vision-ellel-ministries">La vision de TheraForma</NavLink></li>
                <li><NavLink className="navbar-link" to="/ellel-france">TheraForma France</NavLink></li>
                <li><NavLink className="navbar-link" to="/ellel-international">TheraForma International</NavLink></li>
            </ul>
            </li>
        </ul>
          <NavLink className="navbar-link" to="/evenements">Evènements</NavLink>
          <NavLink className="navbar-link" to="/Nos-formations-Explore">Nos formations Thera</NavLink>
          <NavLink className="navbar-link" to="/nous-retrouver">Nous retrouver</NavLink>
          <NavLink className="navbar-link" to="/programme-2025">Programme 2025</NavLink>
          <NavLink className="navbar-link" to="/inscription">Inscription</NavLink>
          <NavLink className="navbar-link" to="/librairie">Librairie</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;