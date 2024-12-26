import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VisionEllelMinistries from "./pages/VisionEllelMinistries";
import EllelFrance from "./pages/EllelFrance";
import EventPage from "./pages/EventPage";
import EllelInternational from "./pages/EllelInternational";
import MeetUs from "./pages/MeetUs";
import Explore from "./pages/Explore";
import YearProgram from "./pages/YearProgram";
import Inscription from "./pages/Inscription";
import Library from "./pages/Library";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/vision-ellel-ministries" element={<VisionEllelMinistries />} />
        <Route path="/ellel-france" element={<EllelFrance />} />
        <Route path="/ellel-international" element={<EllelInternational />} />
        <Route path="/evenements" element={<EventPage />} />
        <Route path="/nous-retrouver" element={<MeetUs />} />
        <Route path="/nos-formations-explore" element={<Explore />} />
        <Route path="/programme-2025" element={<YearProgram />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/librairie" element={<Library /> } />
      </Routes>
    </Router>
  );
};

export default App;
