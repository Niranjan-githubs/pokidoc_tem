import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Video, TestTube, Truck, FileText } from 'lucide-react';

const features = [
  {
    icon: Video,
    title: 'Instant Video Consultations',
    description: 'Connect with nerby  verified doctors instantly through high-quality video calls'
  },
  {
    icon: TestTube,
    title: 'Home Lab Tests',
    description: 'Book tests and get samples collected from your doorstep'
  },
  {
    icon: Truck,
    title: 'Medicine Delivery',
    description: 'Get medicines delivered to your home with real-time tracking'
  },
  {
    icon: FileText,
    title: 'Digital Health Records',
    description: 'Access your medical history and prescriptions anytime, anywhere'
  }
];

const FeatureCard = ({ icon: Icon, title, description, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all"
    >
      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export const Features = () => {
  return (
    <section 
      id="features" 
      className="py-20 bg-gray-50 scroll-mt-20"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Healthcare Shouldn't Be a Hassle
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            We're making it simple with instant access to quality healthcare services
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};