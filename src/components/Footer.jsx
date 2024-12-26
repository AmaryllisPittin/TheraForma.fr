import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
        <h1 className='footer__h1'>Contacter TheraForma France</h1>
        <p>site "La Psychologie ensemble"</p>
        <p>10 Avenue Salvador Allende</p>
        <p>30000 Paris</p>
        <p>00 00 00 00 00</p>
        <NavLink to="#" className="contact-link">contact@theraforma.fr</NavLink>
        <p className='copyright'>(C) THERAFORMA - Tout droit réservé</p>
    </div>
  );
};

export default Footer;