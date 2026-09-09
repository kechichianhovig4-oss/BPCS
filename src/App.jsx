import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import HomePage from './components/HomePage';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import ResidentialCleaning from './components/services/ResidentialCleaning';
import CommercialCleaning from './components/services/CommercialCleaning';
import ConstructionCleaning from './components/services/ConstructionCleaning';
import MoveInOutCleaning from './components/services/MoveIn&OutCleaning';
import Privacy from './components/privacy and refund/Privacy';
import RefundPolicy from './components/privacy and refund/RefundPolicy';



function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Gallery" element={<Gallery/>} />
         <Route path="/Services/Residential" element={<ResidentialCleaning/>} />
         <Route path="/Services/Commercial" element={<CommercialCleaning/>} />
          <Route path="/Services/move-in-out" element={<MoveInOutCleaning/>} />
          <Route path="/Services/Construction" element={<ConstructionCleaning/>} />
          <Route path="/PrivacyStatement" element={<Privacy/>} />
           <Route path="/RefundPolicy" element={<RefundPolicy/>} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;