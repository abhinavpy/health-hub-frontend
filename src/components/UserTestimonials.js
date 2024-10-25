// src/components/UserTestimonials.js
import React from 'react';
import './UserTestimonials.css';

const UserTestimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonial-cards">
        <div className="testimonial">
          <p>“This app has transformed the way I manage my health.”</p>
          <h4>- Sarah L.</h4>
        </div>
        <div className="testimonial">
          <p>“The insights and recommendations are incredibly accurate and helpful.”</p>
          <h4>- Emily R.</h4>
        </div>
        <div className="testimonial">
          <p>“I love having everything in one place. Highly recommend it!”</p>
          <h4>- Megan T.</h4>
        </div>
      </div>
    </section>
  );
};

export default UserTestimonials;
