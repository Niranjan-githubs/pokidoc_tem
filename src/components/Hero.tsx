import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Eye } from 'lucide-react';
import telehealthImage from '/Future-of-Telehealth.png';


export const Hero = () => {
  const scrollToNewsletter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const newsletterSection = document.getElementById('newsletter');
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToBlog = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    window.location.href = '/blog.html';
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-500 to-emerald-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/vecteezy_frontline-heroes-illustration-of-doctors-and-nurses_6428407.jpg')] bg-cover bg-center opacity-10" />
      
      <div className="container mx-auto px-4 py-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6 bg-green-500/20 backdrop-blur-sm rounded-full px-6 py-2"
          >
            🚀 Launching Soon – Be the First to Know!🙌
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Trusted Doctors. Instant Care.
            <span className="block text-emerald-300">Right in Your Pocket.</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-emerald-100">
            Your personal healthcare assistant – anytime, anywhere.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#newsletter"
              onClick={scrollToNewsletter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
            >
              <Rocket className="w-5 h-5" />
              Notify Me When We Launch
            </motion.a>
            
            <motion.a
              href="src/components/blog.html"
              onClick={navigateToBlog}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 border-2 border-white/20 hover:bg-green-600/30 transition-all"
            >
              <Eye className="w-5 h-5" />
              Learn More
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20"
        >
          <div className="relative max-w-md mx-auto">
          <img src={telehealthImage} alt="Pokidoc App Interface" />
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.02, 0.98, 1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute -top-6 -right-6 bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-2xl shadow-lg"
            >
              <span className="text-lg font-bold">Coming Soon! 🎉</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;