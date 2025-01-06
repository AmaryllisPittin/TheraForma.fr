import React from 'react';
import Navbar from "../components/Navbar";
import Aside from "../components/Aside";
import Footer from "../components/Footer";
import Network from '../components/Network';
import CardsContainer from '../components/FranceCenterList';
import franceData from '../JSON/francePlaces.json';
import internationalData from '../JSON/internationalPlaces.json';
import FranceCenterList from '../components/FranceCenterList';

const MeetUs = () => {
  return (
    <div>
      <Navbar />
      <Aside />
      <Network />
      <section className='theraforma-france-places'>
        <div className='theraforma-france-places__h1'>
          <h1>Les centres en France</h1>
        </div>
        <div className='theraforma-france-places-container'>
          <FranceCenterList data={franceData} />
        </div>
        <div className='theraforma-no-france-container'>
          <div className='theraforma-no-france-places__h1'>
            <h1>Les centres hors France (francophone)</h1>
          </div>
          <FranceCenterList data={internationalData} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MeetUs;