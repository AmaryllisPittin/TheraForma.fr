import React from 'react';
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import bannerEllelFrance from "../img/bannerEllelFrance.png";
import logo from "../img/logo.png";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Network from '../components/Network';
import CardsContainer from '../components/FranceCenterList';

const TheraFormaFrance = () => {
  return (
    <div>
        <Navbar />
      <div className="banner">
        <img className="banner__img" src={bannerEllelFrance} alt="Bannière de présentation - forêt avec puit de lumière"></img>
        <span className="logo-span"></span>
        <img className="logo" src={logo} alt="logo TheraForma"></img>
      </div>
      <Aside />
      <Network />
      <section className='vision-ellel'>
        <p className='vision-ellel__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium excepturi quod exercitationem vitae magnam enim ex corporis! Quaerat numquam animi at. Optio doloremque eveniet incidunt illum voluptatibus ipsa vel ex!</p>
        <p className='vision-ellel__text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque reiciendis est debitis doloremque soluta, porro quod sapiente iusto consequatur, natus labore esse amet quas delectus voluptate qui expedita ipsum inventore!</p>
        <p className='vision-ellel__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quidem autem minus eos, iure corrupti quos! Eius, voluptates ex. Cum rem omnis earum ipsum. Omnis, quibusdam. Itaque aliquid deserunt ipsum!</p>
      </section>
      <section className='ellel-france-places'>
            <div className='ellel-france-places__h1'>
              <h1>Les centres en France</h1>
            </div>
            <div className='ellel-france-places-container'>
              <CardsContainer />
            </div>
          </section>

      <Footer />
    </div>
  );
};

export default TheraFormaFrance;