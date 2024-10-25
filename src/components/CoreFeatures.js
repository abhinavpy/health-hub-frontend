// src/components/CoreFeatures.js
import React from 'react';
import './CoreFeatures.css';

const CoreFeatures = () => {
  return (
    <section className="features">
      <h2 className="secondary-color">Core Features</h2>
      <div className="features-grid">
        <div className="feature">
          <h3 className="primary-color">Symptom Tracker</h3>
          <p>Log symptoms, view patterns, and get insights.</p>
        </div>
        <div className="feature">
          <h3 className="primary-color">Resource Recommender</h3>
          <p>Personalized recommendations for your health needs.</p>
        </div>
        <div className="feature">
          <h3 className="primary-color">Health Marketplace</h3>
          <p>Find curated products to support your wellness journey.</p>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
