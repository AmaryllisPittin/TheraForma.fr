import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/fr';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import eventsData from '../JSON/calendar.json'; 

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const formattedEvents = eventsData.map(event => ({
      title: event.event,
      start: new Date(event.date),
      end: new Date(event.date), 
      allDay: true,
      center: event.centre || 'Non spécifié'
    }));

    setEvents(formattedEvents);
  }, []);

  return (
    <div className="calendar-container">
      <div className='calendar-container__h2'>
        <h2>Calendrier des Événements</h2>
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: '50px' }}
        views={['month', 'week', 'day']}
        popup
        formats={{
          dateFormat: 'D',
          dayFormat: (date, culture, localizer) =>
            localizer.format(date, 'dddd DD/MM', culture), 
          timeGutterFormat: 'HH:mm',
        }}
        messages={{
          next: "Suivant",
          previous: "Précédent",
          today: "Aujourd'hui",
          month: 'Mois',
          week: 'Semaine',
          day: 'Jour',
          agenda: 'Agenda',
          date: 'Date',
          time: 'Heure',
          event: 'Événement',
        }}
      />
    </div>
  );
};

export default CalendarComponent;
