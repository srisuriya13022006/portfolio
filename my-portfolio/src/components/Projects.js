import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';

const CardContainer = styled(animated.div)`
  width: 300px;
  height: 400px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  perspective: 1000px;
`;

const CardFront = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
`;

const CardBack = styled(animated.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #333;
  color: white;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectCard = ({ title, description }) => {
  const [flipped, setFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <CardContainer onClick={() => setFlipped((state) => !state)}>
      <CardFront style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}>
        <h2>{title}</h2>
      </CardFront>
      <CardBack style={{ opacity, transform: transform.interpolate((t) => `${t} rotateY(180deg)`) }}>
        <p>{description}</p>
      </CardBack>
    </CardContainer>
  );
};

const Projects = () => {
  return (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <ProjectCard title="Project 1" description="This is a brief description of Project 1." />
      <ProjectCard title="Project 2" description="This is a brief description of Project 2." />
      <ProjectCard title="Project 3" description="This is a brief description of Project 3." />
    </div>
  );
};

export default Projects;
