import React from 'react';
import { NavLink } from "react-router-dom";
import { FaFacebook, FaSoundcloud, FaYoutube } from 'react-icons/fa';

const Network = () => {

  return (
    <div className="network">
        <NavLink className="network__link" to="#" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></NavLink>
        <NavLink className="network__link" to="#" target="_blank" rel="noopener noreferrer"><FaSoundcloud size={30} /></NavLink>
        <NavLink className="network__link" to="#" target="_blank" rel="noopener noreferrer"><FaYoutube size={30} /></NavLink>
    </div>
  );
};

export default Network;