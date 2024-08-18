import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';
import { Typewriter } from 'react-simple-typewriter';
import profilePhoto from '../assets/hi.jpg'; // Adjust the path based on your file location
import typingSound from '../assets/mixkit-keyboard-typing-1386.wav'; // Adjust the path based on your file location


const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #e0bbf3;
  text-align: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const WelcomeText = styled(animated.h1)`
  font-size: 3rem;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubText = styled(animated.p)`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const TypingText = styled.div`
  font-size: 1.5rem;
  color: #666;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Photo = styled(animated.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
`;

function Hero() {
  const [typingStarted, setTypingStarted] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const welcomeSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200,
  });

  const subTextSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 400,
  });

  const photoSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 800, // Delay to sync with text
  });

  const audioRef = useRef(null);
  const [audioStarted, setAudioStarted] = useState(false);

  const handleButtonClick = () => {
    setTypingStarted(true);
  };

  useEffect(() => {
    if (audioStarted && typingStarted && !typingComplete) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [audioStarted, typingStarted, typingComplete]);

  return (
    <HeroSection>
      <audio ref={audioRef} src={typingSound} preload="auto" />
      <Photo src={profilePhoto} alt="Profile" style={photoSpring} />
      <WelcomeText style={welcomeSpring}>
        Welcome to My Portfolio
      </WelcomeText>
      <SubText style={subTextSpring}>
        I am Sri Suriya S, Freelancing AI Developer
      </SubText>
      <Button onClick={handleButtonClick}>Know About Me</Button>
      {typingStarted && (
        <TypingText>
          <Typewriter
            words={[
              'I am Sri Suriya S, a passionate AI developer and freelancer with experience in front-end development, AI chatbot creation, and mobile app development. I transform ideas into digital solutions with creativity and technical expertise.'
            ]}
            loop={1}
            cursor
            cursorStyle='_'
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1000}
            onType={() => {
              setAudioStarted(true);
            }}
            onEnd={() => {
              setTypingComplete(true);
            }}
          />
        </TypingText>
      )}
    </HeroSection>
  );
}

export default Hero;
