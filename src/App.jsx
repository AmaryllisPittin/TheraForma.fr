import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VisionTheraForma from "./pages/VisionTheraForma";
import TheraFormaFrance from "./pages/TheraFormaFrance";
import EventPage from "./pages/EventPage";
import TheraFormaInternational from "./pages/TheraFormaInternational";
import MeetUs from "./pages/MeetUs";
import Thera from "./pages/Thera";
import YearProgram from "./pages/YearProgram";
import Inscription from "./pages/Inscription";
import Library from "./pages/Library";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/vision-theraforma" element={<VisionTheraForma />} />
        <Route path="/theraforma-france" element={<TheraFormaFrance />} />
        <Route path="/theraforma-international" element={<TheraFormaInternational />} />
        <Route path="/evenements" element={<EventPage />} />
        <Route path="/nous-retrouver" element={<MeetUs />} />
        <Route path="/nos-formations-thera" element={<Thera />} />
        <Route path="/programme-2025" element={<YearProgram />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/librairie" element={<Library /> } />
      </Routes>
    </Router>
  );
};

export default App;
