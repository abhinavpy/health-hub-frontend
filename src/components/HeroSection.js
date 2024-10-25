// src/components/HeroSection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero background-pink-purple">
      <div className="hero-content text-center">
        <h1 className="primary-color">Empower Your Health Journey</h1>
        <p>Your comprehensive platform for tracking, learning, and wellness.</p>
        <div className="hero-buttons">
          <button className="primary-btn" onClick={() => navigate('/chat')}>
            Track Your Health
          </button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
