// src/components/FAQs.js
import React from 'react';
import './FAQs.css';

const FAQs = () => {
  return (
    <section className="faqs">
      <h2>Frequently Asked Questions</h2>
      <div className="faq">
        <h4>How do I log my symptoms?</h4>
        <p>Simply navigate to the symptom tracker and add details about your symptoms to track them over time.</p>
      </div>
      <div className="faq">
        <h4>Are the recommendations personalized?</h4>
        <p>Yes, our recommendation engine uses AI to tailor suggestions to your health needs and preferences.</p>
      </div>
      <div className="faq">
        <h4>Is there a cost for using the platform?</h4>
        <p>The basic features are free, with premium options available for additional insights and tools.</p>
      </div>
    </section>
  );
};

export default FAQs;
