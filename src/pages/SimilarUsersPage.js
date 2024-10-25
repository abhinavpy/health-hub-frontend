// src/pages/SimilarUsersPage.js
import React from 'react';
import './SimilarUsersPage.css';

const SimilarUsersPage = () => {
  // Simulated list of users
  const users = [
    { name: "Alice W.", profilePic: "https://via.placeholder.com/100", product: "Herbal Migraine Relief" },
    { name: "Jessica B.", profilePic: "https://via.placeholder.com/100", product: "Stress Relief Tea" },
    { name: "Maria K.", profilePic: "https://via.placeholder.com/100", product: "Yoga Mat Pro" },
  ];

  return (
    <div className="similar-users-page">
      <h2>Others with Similar Experiences</h2>
      <div className="users-list">
        {users.map((user, index) => (
          <div className="user-card" key={index}>
            <img src={user.profilePic} alt={`${user.name}`} />
            <h3>{user.name}</h3>
            <p>Using: {user.product}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarUsersPage;
