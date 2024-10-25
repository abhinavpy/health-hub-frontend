// src/pages/DiagnosisPage.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './DiagnosisPage.css';

const DiagnosisPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { messages } = location.state || { messages: [] };

  // Simulate LLM processing
  const summarizedSymptoms = "You have reported frequent headaches and fatigue.";
  const diagnosis = "Possible diagnosis: Stress-induced migraines.";
  const recommendations = [
    "Maintain a regular sleep schedule.",
    "Engage in stress-reducing activities like yoga or meditation.",
    "Consider consulting a healthcare professional."
  ];

  const handleViewSimilarUsers = () => {
    // Navigate to a page showing similar users (to be implemented)
    navigate('/similar-users');
  };

  return (
    <div className="diagnosis-page">
      <h2>Health Assessment Summary</h2>
      <div className="summary-section">
        <h3>Summarized Symptoms</h3>
        <p>{summarizedSymptoms}</p>
      </div>
      <div className="diagnosis-section">
        <h3>Diagnosis</h3>
        <p>{diagnosis}</p>
      </div>
      <div className="recommendations-section">
        <h3>General Recommendations</h3>
        <ul>
          {recommendations.map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ul>
      </div>
      <button className="view-users-btn" onClick={handleViewSimilarUsers}>
        View Others with Similar Experiences
      </button>
    </div>
  );
};

export default DiagnosisPage;
