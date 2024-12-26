import React from 'react';
import { NavLink } from 'react-router-dom';

const Aside = () => {

  return (
    <div className="aside">
        <h1 className='aside__h1'>Soutenir ThéraForma France</h1>
        <h2 className='aside__h2'>Faire un don</h2>
        
        <form className='form-aside'>
            <label className='form-aside__label' htmlFor="money">Monnaie</label>
            <select id="money" className='form-aside__money'>
                <option value="Euro">Euro</option>
                <option value="US Dollar">US Dollar</option>
                <option value="Pounds Sterling">Pounds Sterling</option>
                <option value="Canadian Dollar">Canadian Dollar</option>
                <option value="Yen">Yen</option>
            </select>

            <label className='form-aside__label' htmlFor="amount">Montant :</label>
            <input className='form-aside__input' type="number" id="amount" name="amount" min="0" step="1" placeholder="0"></input>
            <button className='form-aside__send' type="submit">Envoyer</button>
        </form>

        <NavLink className="aside__link" to="/don-mensuel">Faire un don mensuel</NavLink>
    </div>
  );
};

export default Aside;