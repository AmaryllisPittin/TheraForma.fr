import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className="event-card__content">
        <h3>{event.title}</h3>
        <p>{event.category}</p>
        <p><strong>Date: </strong>{event.date}</p>
      </div>
    </div>
  );
};

export default EventCard;