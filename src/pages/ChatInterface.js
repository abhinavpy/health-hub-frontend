// src/pages/ChatInterface.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChatInterface.css';

const ChatInterface = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! Tell me about your health concerns." },
  ]);
  const [input, setInput] = useState("");
  
  // Suggestion questions
  const [suggestions, setSuggestions] = useState([
    "What are common symptoms of hormonal imbalance?",
    "How can I improve my nutrition for better health?",
    "What could be causing frequent headaches?",
    "Are there ways to manage mood swings naturally?",
  ]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");

      // Simulate bot response and update suggestions
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "Thank you for sharing. Please continue or submit when you're ready." },
        ]);

        setSuggestions([
          "Could it be a vitamin deficiency?",
          "What are natural remedies for stress relief?",
          "How often should I exercise for better health?",
        ]);

      }, 1000);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
  };

  // New function to handle submission
  const handleSubmitConversation = () => {
    // Navigate to the diagnosis page and pass the conversation data
    navigate('/diagnosis', { state: { messages } });
  };

  return (
    <div className="chat-interface">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      {/* Suggestions */}
      <div className="faq-horizontal">
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      </div>

      {/* Chat input and submit button */}
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your symptoms here..."
        />
        <button onClick={handleSend}>Send</button>
        <button className="submit-btn" onClick={handleSubmitConversation}>Submit</button>
      </div>
    </div>
  );
};

export default ChatInterface;
