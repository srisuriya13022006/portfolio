// App.js (Main Application Component)

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Contact from './components/contact';
import GlobalStyle from './components/GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
     
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
