import React from 'react';
import Navbar from "../components/Navbar";
import bannerEllelInternational from "../img/bannerEllelInternational.png";
import logo from "../img/logo.png";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Network from '../components/Network';

const TheraFormaInternational = () => {
  return (
    <div>
        <Navbar />
      <div className="banner">
        <img className="banner__img" src={bannerEllelInternational} alt="Bannière de présentation - forêt avec puit de lumière"></img>
        <span className="logo-span"></span>
        <img className="logo" src={logo} alt="logo Ellel Ministries France"></img>
      </div>
      <Aside />
      <Network />
      <section className='vision-ellel'>

        <div className='vision-ellel__title'>
            <h2>Historique</h2>
        </div>
        <p className='vision-ellel__text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam earum ipsa reiciendis praesentium omnis blanditiis totam nesciunt, numquam quod iusto dolore, eum explicabo corporis dicta impedit harum nam sequi temporibus.</p>

            <div className='vision-ellel__title'>
            <h2>Que veut dire TheraForma ?</h2>
        </div>
        <p className='vision-ellel__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam est explicabo quam tempora! Dolorum quam eligendi ut vero cumque alias, delectus aspernatur sequi aliquam minima veritatis ratione, beatae enim saepe.</p>
        
        <div className='vision-ellel__title'>
            <h2>Comment est dirigée l'oeuvre ?</h2>
        </div>
        <p className='vision-ellel__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente vel illum necessitatibus quae modi possimus nisi obcaecati delectus et, ea perferendis error atque sit explicabo deleniti asperiores ullam fugit vero!Lorem</p>
      </section>

      <Footer />
    </div>
  );
};

export default TheraFormaInternational;