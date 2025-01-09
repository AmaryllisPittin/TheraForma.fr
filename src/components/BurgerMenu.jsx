import React, { useState } from "react";
import { NavLink } from 'react-router-dom'; 

const BurgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false); 

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="burger-menu" style={{ position: 'absolute', top: '0', right: '48px' }}>
      <ul>
        <li className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </li>
      </ul>

      {showMenu && (
        <div className="dropdown-menu">
          <ul className="dropdown-menu__container">
            {/* Ajout de la gestion de sous-menu si nécessaire */}
            <li className="container-link first-burger-link">
              <span onClick={toggleDropdown}>
              </span>
              {isDropdownOpen && (
                <ul>
                  <li><NavLink className="dropdown-link" to="/vision-theraforma">La vision de TheraForma</NavLink></li>
                  <li><NavLink className="dropdown-link" to="/theraforma-france">TheraForma France</NavLink></li>
                  <li><NavLink className="dropdown-link" to="/theraforma-international">TheraForma International</NavLink></li>
                </ul>
              )}
            </li>
            {/* Liens principaux */}
            <li><NavLink className="dropdown-link" to="/evenements">Evènements</NavLink></li>
            <li><NavLink className="dropdown-link" to="/Nos-formations-thera">Nos formations Thera</NavLink></li>
            <li><NavLink className="dropdown-link" to="/nous-retrouver">Nous retrouver</NavLink></li>
            <li><NavLink className="dropdown-link" to="/programme-2025">Programme 2025</NavLink></li>
            <li><NavLink className="dropdown-link" to="/inscription">Inscription</NavLink></li>
            <li><NavLink className="dropdown-link" to="/librairie">Librairie</NavLink></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
