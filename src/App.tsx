import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Problem } from './components/Problem';
import { Trust } from './components/Trust';
import { Regional } from './components/Regional';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Problem />
      <Trust />
      <Regional />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default App;