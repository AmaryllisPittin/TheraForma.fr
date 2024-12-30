import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import eventsYear from "../JSON/eventsYear.json";

const YearProgram = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' });
  };

  return (
    <div>
      <Navbar />
      <div className='theraforma-year'>
        <div className='theraforma-year__h1'>
          <h1>Programme pour l'année 2025</h1>
        </div>
        <p className='theraforma-year__p'>Voici un résumé des événements organisés par TheraForma en 2025.</p>
      </div>
      
      <div className='thera-container'>
      <div className="thera__cards">
        {eventsYear.map((category, catIndex) => (
          <div key={catIndex} className="year-program__category" style={{ marginBottom: '30px' }}>
            <h2 className="year-program__category-title">{category.category || "Nom de la catégorie non spécifié"}</h2>
            
            {category.events.length > 0 ? (
              <ul className="year-program__event-list">
                {category.events.map((event, eventIndex) => (
                  <li key={eventIndex} className="year-program__event-item thera__card" style={{ marginBottom: '10px' }}>
                    <p className="year-program__event-date"><strong>Date :</strong> {formatDate(event.date)}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="year-program__no-events">Aucun événement disponible pour cette catégorie.</p>
            )}
          </div>
        ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default YearProgram;


