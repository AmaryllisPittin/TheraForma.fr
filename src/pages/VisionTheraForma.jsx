import React from 'react';
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import banner from "../img/banner.png";
import logo from "../img/logo.png";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Network from '../components/Network';

const VisionTheraForma = () => {
  return (
    <div>
        <Navbar />
      <div className="banner">
        <img className="banner__img" src={banner} alt="Bannière de présentation - forêt avec puit de lumière"></img>
        <span className="logo-span"></span>
        <img className="logo" src={logo} alt="logo Ellel Ministries France"></img>
        <span className='h1-span'></span>
        <h1 className='banner__h1'>Notre vision</h1>
      </div>
      <Aside />
      <Network />
      <section className='vision-theraforma'>
        <div className='vision-theraforma__h1'>
          <h1>La vision de TheraForma</h1>
        </div>
        <p className='vision-theraforma__text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat id porro dolore delectus numquam non aut nesciunt et, similique beatae magnam voluptatem tempore ducimus? Quas beatae dolorem maiores totam quaerat.</p>
        <h2 className='vision-theraforma__h2'>Notre mission</h2>
        <p className='vision-theraforma__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat maiores animi earum voluptatibus quia. Totam quis consequuntur saepe voluptatibus voluptates sed corporis nemo enim porro cumque accusamus, molestiae, et possimus.</p>
           <p className='vision-theraforma__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio reiciendis odit ab! Explicabo, enim corrupti! Eveniet, optio fugit aperiam itaque maiores iure cum ex laboriosam explicabo suscipit doloremque ducimus qui.</p>
          <div>
            <div className='vision-theraforma-verses'>
            <h3 className='vision-theraforma__h3'>Notre mission est fondée sur: </h3>
              <p className='vision-theraforma-verses__verse'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur error nulla minima ratione architecto at sed id suscipit iste aspernatur dignissimos harum, vitae voluptatum, eveniet sit aperiam, debitis doloremque voluptates.</p>
              <p className='vision-theraforma-verses__verse'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui excepturi quasi eum saepe expedita eligendi? Ipsa, eveniet? Tempore nobis laudantium itaque sequi nisi distinctio quis sint rem, corrupti velit tempora.</p>
              <p className='vision-theraforma-verses__verse'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita atque voluptatibus numquam iste aliquid, eaque odit mollitia eligendi nostrum exercitationem. Vel et facilis quae. Optio temporibus eaque laborum dolorem perferendis!</p>
              <p className='vision-theraforma-verses__verse'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint earum ex veritatis voluptate eligendi minima maiores necessitatibus. Quae nulla, eos, quasi error ipsa nemo dignissimos voluptas fugit consequatur excepturi placeat.</p>
              <p className='vision-theraforma-verses__verse'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam error repellendus magnam recusandae nobis repudiandae deleniti, vel consectetur quam dolorem doloremque, atque quisquam reprehenderit dolore laboriosam! Itaque debitis ratione provident!</p>
              <p className='vision-theraforma-verses__verse'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et a quos eius expedita fugit corrupti, iure dolorum neque error, sapiente non fuga ut vel repellendus veritatis quidem cupiditate! Eligendi, fugit.</p>
            </div>
          </div>
      </section>
      <section className='precision'>
        <div className='precision__h1'>
          <h1>Précisions utiles</h1>
        </div>
        <p className='precision__text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, totam distinctio, fugit laudantium laborum inventore dolorem perferendis quaerat reprehenderit pariatur perspiciatis rem a, dolore commodi dignissimos sapiente aperiam similique doloribus?</p>
        <div className='button-precision-container'>
          <p className='button-precision-container__text'>En savoir plus:</p>
          <div className="button-formation button-margin">
            <NavLink className="button" to="/">TheraForma France</NavLink>
          </div>
          <div className="button-formation">
            <NavLink className="button" to="/">TheraForma International</NavLink>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisionTheraForma;