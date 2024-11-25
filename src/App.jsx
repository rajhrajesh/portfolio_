import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLink from './components/SocialLink';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="">
      <NavBar />
      <div className="">
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </div>
      <SocialLink />
    </div>
  );
};

export default App;
