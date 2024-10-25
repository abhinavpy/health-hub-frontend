// src/components/HowItWorks.js
import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <h3>1. Log Your Symptoms</h3>
          <p>Easily track health symptoms, patterns, and trends over time.</p>
        </div>
        <div className="step">
          <h3>2. Get Personalized Insights</h3>
          <p>Receive data-driven recommendations tailored to your needs.</p>
        </div>
        <div className="step">
          <h3>3. Discover the Marketplace</h3>
          <p>Explore curated wellness products and resources just for you.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
