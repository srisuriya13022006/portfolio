import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated } from '@react-spring/web';

// Keyframes for typing and blinking effects
const typing = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blink = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: white; }
`;

// Styled component for the typing effect
const TypingText = styled(animated.div)`
  font-family: 'Courier New', Courier, monospace;
  color: white;
  overflow: hidden;
  border-right: 0.15em solid white;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: ${typing} 5s steps(30, end) infinite, ${blink} 0.75s step-end infinite;
`;

// Styled component for the bounce button
const BounceButton = styled(animated.button)`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #f39c12;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #e67e22;
  }
`;

// Styled component for the contact container
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  background-color: #1f1f1f;
  color: white;
`;

// Styled component for the form
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin-top: 20px;
`;

// Styled component for input fields
const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 2px solid #444;
  background-color: #333;
  color: white;
  font-size: 16px;
  
  &:focus {
    border-color: #f39c12;
    outline: none;
  }
`;

// Styled component for text area
const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 2px solid #444;
  background-color: #333;
  color: white;
  font-size: 16px;
  
  &:focus {
    border-color: #f39c12;
    outline: none;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Spring animation for the button
  const bounce = useSpring({
    from: { transform: 'scale(1)' },
    to: { transform: 'scale(1.1)' },
    reset: true,
    reverse: true,
    config: { tension: 200, friction: 5 },
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission here, such as sending data to an API
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <ContactContainer id="contact">
      {/* Typing effect text */}
      <TypingText>I am an AI developer and freelancer.</TypingText>
      {/* Contact form */}
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        />
        {!submitted ? (
          <BounceButton style={bounce} type="submit">
            Send Message
          </BounceButton>
        ) : (
          <p style={{ color: '#f39c12', marginTop: '20px' }}>Thank you for your message!</p>
        )}
      </Form>
    </ContactContainer>
  );
};

export default Contact;
