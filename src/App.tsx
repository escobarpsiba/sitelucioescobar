import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Quote from './components/Quote';
import AboutAndAreas from './components/AboutAndAreas';
import AcademicBackground from './components/AcademicBackground';
import FeaturedBooks from './components/FeaturedBooks';
import ContactCTA from './components/ContactCTA';
import ContactWhatsApp from './components/ContactWhatsApp';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-dark-bg min-h-screen selection:bg-gold/30 selection:text-gold">
      <Navbar />
      <main>
        <Hero />
        <Quote />
        <AboutAndAreas />
        <AcademicBackground />
        <FeaturedBooks />
        <ContactCTA />
        <ContactWhatsApp />
      </main>
      <Footer />
    </div>
  );
}

