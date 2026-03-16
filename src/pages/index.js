import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Risks from '../components/Risks';
import FeaturesModule from '../components/FeaturesModule';
import Benefits from '../components/Benefits';
import Collaborations from '../components/Collaborations';
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';

const index = () => {
  return (
    <div className="font-['Poppins']">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="features">
        <Features />
      </div>
      <Risks />
      <FeaturesModule />
      <div id="benefits">
        <Benefits />
      </div>
      <div id="collaborations">
        <Collaborations />
      </div>
      <div id="blogs">
        <Blogs />
      </div>
      <Footer />

    </div>
  )
}

export default index;
