import React from 'react';
import './styles/global.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import SocialLocation from './components/SocialLocation';
import Journey from './components/Journey';
import Pitch from './components/Pitch';
import Stories from './components/Stories';
import FeministHomework from './components/FeministHomework';
import Places from './components/Places';
import About from './components/About';
import Contribute from './components/Contribute';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <SocialLocation />
        <Journey />
        <Pitch />
        <Stories />
        <FeministHomework />
        <Places />
        <About />
        <Contribute />
      </main>
      <Footer />
    </>
  );
}
