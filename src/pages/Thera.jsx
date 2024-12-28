import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ExploreModal from '../components/ExploreModal';
import eventData from '../JSON/formations.json';

const Thera = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleCardClick = (event) => {
    setSelectedEvent(event);
    setModalOpen(true); 
  };

  const closeModal = () => {
    setModalOpen(false); 
    setSelectedEvent(null);
  };

  return (
    <div>
      <Navbar />
      <section className='theraforma-thera'>
        <div className='theraforma-thera__h1'>
          <h1>Nos formations Thera</h1>
        </div>
        <div className='thera-container'>
          <h2>Les formations disponibles en ligne</h2>
          <div className="thera__cards">
            {eventData.map((event, index) => (
              <div 
                key={index} 
                className="thera__card" 
                onClick={() => handleCardClick(event)} 
              >
                <h3>{event.title}</h3>
                <h4>{event.title2}</h4>
                <p className="view-details">Voir le détail</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <ExploreModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        event={selectedEvent} 
      /> 
    </div>
  );
};

export default Thera;
