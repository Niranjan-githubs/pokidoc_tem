import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from '/ghjkl-removebg-preview copy.png';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after clicking
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
              className="h-10 w-auto"
            />
          </motion.div>

          {/* Desktop Menu */}
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="py-4 flex flex-col gap-4 bg-white">
                <a 
                  href="#features" 
                  onClick={(e) => scrollToSection(e, 'features')}
                  className="px-4 py-2 hover:bg-gray-100 hover:text-green-600 transition-colors"
                >
                  Features
                </a>
                <a 
                  href="#about"
                  onClick={(e) => scrollToSection(e, 'about')}
                  className="px-4 py-2 hover:bg-gray-100 hover:text-green-600 transition-colors"
                >
                  About
                </a>
                <a 
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="px-4 py-2 hover:bg-gray-100 hover:text-green-600 transition-colors"
                >
                  Contact
                </a>
                <motion.a
                  href="#newsletter"
                  onClick={(e) => scrollToSection(e, 'newsletter')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mx-4 bg-green-600 text-white px-6 py-2 rounded-full font-semibold text-center"
                >
                  Join Waitlist
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};