import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import banner from "../img/banner.png";
import logo from "../img/logo.png";
import Aside from "../components/Aside";
import EventsList from "../components/EventList";
import VideoDiscover from "../components/VideoDiscover";
import guerisonEmotionnelle from "../img/guerisonemotionnelle.png";
import CléPyschologie from "../img/clé.png";
import Footer from "../components/Footer";
import Network from "../components/Network";

const Index = () => {
  return (
    <div>
      <Navbar />
      <div className="banner">
        <img className="banner__img" src={banner} alt="Bannière de présentation - forêt avec puit de lumière"></img>
        <span className="logo-span"></span>
        <img className="logo" src={logo} alt="logo TheraForma France"></img>
      </div>
      <Aside />
      <Network />

      <section className="lorem-text">
        <h1 className="lorem-text__h1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis odio commodi libero numquam vel natus odit alias? Quod eligendi, dolores ab optio iusto explicabo, blanditiis placeat fuga suscipit aliquam itaque?</h1>
      </section>

      <EventsList />

      <section className="discover">
        <div className="discover__h1">
          <h1>Découvrir TheraForma</h1>
        </div>
        <h2 className="discover__h2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quam pariatur quo, quibusdam quos laudantium dolorum reprehenderit animi quas dignissimos doloremque blanditiis cupiditate harum repellendus similique obcaecati veritatis nisi deleniti!</h2>

        <div className="video-container">
          <VideoDiscover
            videoId="MZP_mPklKn4"
            coverImage={guerisonEmotionnelle}
            altText="Couverture de la vidéo - La nature de l'Homme et son besoin de guérison"
          />
          <p className="video-p">La guérison émotionnelle - Pierre Chaume</p>
        </div>

        <div className="video-container">
          <VideoDiscover
            videoId="iYoEgSd_Ggs"
            coverImage={CléPyschologie}
            altText="Couverture de la vidéo - Le pardon Valérie Chambron"/>
          <p className="video-p">La psychologie en quelques clés - Martine Chaume</p>
        </div>
        <div className="button-formation">
          <NavLink className="button" to="/">Découvrez toutes nos formations</NavLink>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
