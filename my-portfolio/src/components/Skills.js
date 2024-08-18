  // src/components/Skills.js
  import React from 'react';
  import styled from 'styled-components';
  import { motion } from 'framer-motion';

  const SkillsContainer = styled.section`
    padding: 60px 20px;
    background-color: #e8f4f8;
    text-align: center;
  `;

  const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    max-width: 1000px;
    margin: 0 auto;
  `;

  const SkillItem = styled(motion.div)`
    background-color: #fff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    
    &:hover {
      transform: translateY(-15px) scale(1.05);
      box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
    }
  `;

  const SkillTitle = styled.h3`
    margin-bottom: 15px;
    font-size: 20px;
    color: #333;
    letter-spacing: 1.2px;
  `;

  const SkillDescription = styled.p`
    font-size: 16px;
    color: #555;
    line-height: 1.6;
  `;

  const Skills = () => {
    return (
      <SkillsContainer>
        <h2>My Skills</h2>
        <SkillsGrid>
          <SkillItem
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          >
            <SkillTitle>Front-End Web Development</SkillTitle>
            <SkillDescription>
              Expertise in HTML, CSS, JavaScript, React, and responsive web design.
            </SkillDescription>
          </SkillItem>
          <SkillItem
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
          >
            <SkillTitle>AI Chatbot Development</SkillTitle>
            <SkillDescription>
              Building conversational interfaces using NLP, Python, and AI frameworks.
            </SkillDescription>
          </SkillItem>
          <SkillItem
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
          >
            <SkillTitle>Figma to Flutter Conversion</SkillTitle>
            <SkillDescription>
              Translating Figma designs into functional Flutter mobile apps.
            </SkillDescription>
          </SkillItem>
        </SkillsGrid>
      </SkillsContainer>
    );
  };

  export default Skills;
