import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HipHop from "./pages/HipHop";
import Contemporary from "./pages/Contemporary";
import Bollywood from "./pages/Bollywood";
import Freestyle from "./pages/Freestyle";
import Classical from "./pages/Classical";
import WorkshopCard from "./pages/WorkshopCard";
import Workshops from "./pages/WorkshopCard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/classes/hiphop" element={<HipHop />} />
        <Route path="/classes/contemporary" element={<Contemporary />} />
        <Route path="/classes/bollywood" element={<Bollywood />} />
        <Route path="/classes/freestyle" element={<Freestyle />} />
        <Route path="/classes/classical" element={<Classical />} />
        <Route path="/Workshops" element={<Workshops />} />

      </Routes>
    </Router>
  );
}

export default App;
