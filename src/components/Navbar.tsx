import React from 'react';
import { motion } from 'framer-motion';
import Image from '/ghjkl-removebg-preview copy.png';

export const Navbar = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="container mx-auto px-4">
        <div className="py-4 flex justify-between items-center">

<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  className="flex items-center"
>
  <img 
    src={Image} 
    alt="Pokidoc App" 
    className="h-10 w-auto" // Add these classes
  />
</motion.div>



          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#features" 
              onClick={(e) => scrollToSection(e, 'features')}
              className="hover:text-green-600 transition-colors"
            >
              Features
            </a>
            <a 
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="hover:text-green-600 transition-colors"
            >
              About
            </a>
            <a 
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="hover:text-green-600 transition-colors"
            >
              Contact
            </a>
            <motion.a
              href="#newsletter"
              onClick={(e) => scrollToSection(e, 'newsletter')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold"
            >
              Join Waitlist
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  );
};