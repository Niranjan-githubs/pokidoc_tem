import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const templateParams = {
        to_email: 'pokidoc.aid@gmail.com',
        from_email: email,
        message: `New user waiting for the product launch 🫣
        kudos 🎉🎉 poki poki 
        !\nUser Email: ${email}`,
      };

      await emailjs.send(
        'service_pokidoc',  // Replace with your EmailJS service ID
        'template_g83yldf', // Replace with your EmailJS template ID
        templateParams,
        '2XQ5YlUFDmKr8ZVKu'   // Replace with your EmailJS public key
      );
      
      setStatus('Message sent successfully! Thank you for signing up.');
      setEmail('');
      
      setTimeout(() => {
        setStatus('');
      }, 5000);
    } catch (error) {
      setStatus('Something went wrong. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <section 
      id="newsletter" 
      className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              We're Almost Here!
            </h2>
            <p className="text-xl mb-8">
              Join thousands who are ready to experience instant, affordable, and trustworthy healthcare.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email to get notified 🚀"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-300"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-green-50 transition-colors"
              >
                <Send className="w-5 h-5" />
                Notify Me
              </motion.button>
            </form>
            {status && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-white font-medium"
              >
                {status}
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};