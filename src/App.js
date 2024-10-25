// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CoreFeatures from './components/CoreFeatures';
import HowItWorks from './components/HowItWorks';
import UserTestimonials from './components/UserTestimonials';
import FAQs from './components/FAQs';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import ChatInterface from './pages/ChatInterface'; // Import ChatInterface component
import DiagnosisPage from './pages/DiagnosisPage'; // Import the new component
import SimilarUsersPage from './pages/SimilarUsersPage'; // Import the new component

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <AboutSection />
              <CoreFeatures />
              <HowItWorks />
              <UserTestimonials />
              <FAQs />
              <CTABanner />
              <Footer />
            </>
          } />
          <Route path="/chat" element={<ChatInterface />} />
          <Route path="/chat" element={<ChatInterface />} />
          <Route path="/diagnosis" element={<DiagnosisPage />} />
          <Route path="/similar-users" element={<SimilarUsersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
