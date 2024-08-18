// About.js (Section describing yourself)

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.section`
  padding: 60px 20px;
  background-color: #f0f4f8;
  text-align: center;
`;

const AboutContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1000px;
`;

const AboutText = styled(motion.div)`
  flex: 1;
  margin: 20px;
  color: #333;
  font-size: 18px;
`;

const AboutImage = styled.img`
  flex: 1;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <AboutText initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          I am Sri Suriya S, a passionate AI developer and freelancer with experience in front-end development, AI chatbot creation, and mobile app development. I transform ideas into digital solutions with creativity and technical expertise.
        </AboutText>
        <AboutImage src="your-image.jpg" alt="Sri Suriya" />
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
