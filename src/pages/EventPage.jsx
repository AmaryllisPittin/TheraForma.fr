import React from 'react';
import CalendarComponent from '../components/CalendarComponent';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EventPage = () => {
  return (
    <div className="EventPage">
      <Navbar />
      <CalendarComponent />
      <Footer />
    </div>
  );
};

export default EventPage;