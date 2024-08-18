import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';

const HeaderContainer = styled(animated.header)`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #333;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem; /* Added more gap between the links */
  margin-right: 3rem; /* Moved more towards left */

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #333;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem; /* Increased font size */
  position: relative;
  padding-bottom: 0.3rem;
  
  &:hover {
    color: #f39c12;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #f39c12;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  &:hover {
    transform: translateY(-2px);
    transition: transform 0.2s ease-in-out;
  }
`;

const BurgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    color: white;
  }
`;

const Header = () => {
  const slideIn = useSpring({
    from: { transform: 'translateY(-100%)' },
    to: { transform: 'translateY(0%)' },
  });

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <HeaderContainer style={slideIn}>
      <h1 style={{ marginLeft: '2rem' }}>My Portfolio</h1>
      <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </BurgerMenu>
      <Nav isOpen={isOpen}>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
