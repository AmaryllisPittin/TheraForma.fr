import React from 'react';
import eventsData from '../JSON/evenements.json';
import EventCard from '../components/EventCard';

const EventsList = () => {
  return (
    <div className="events-list">
      <div className='events-list__h1-container'>
        <h1 className='events-list-h1'>Nos actualités</h1>
      </div>
      {eventsData.length > 0 ? (
        eventsData.map(event => <EventCard key={event.id} event={event} />)
      ) : (
        <p>Aucun événement à afficher pour le moment.</p>
      )}
    </div>
  );
};

export default EventsList;