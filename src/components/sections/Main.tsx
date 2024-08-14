import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm';
import { motion } from 'framer-motion';

const fadeInUpVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.1,
    },
  },
};

const Main: React.FC = () => {
  const [appointmentBooked, setAppointmentBooked] = useState(false);

  const handleFormSubmit = () => {
    setAppointmentBooked(true);
  };

  return (
    <section className="py-12 flex flex-col lg:flex-row items-center justify-center px-6 lg:px-[10%]">
      <div className="container mx-auto px-4 text-left lg:w-1/2">
        <motion.h2
          className="text-[#252b42] text-4xl font-semibold mb-4"
          variants={fadeInUpVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Help to reclaim your life and freedom
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-8"
          variants={fadeInUpVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          We know how large objects will act, but things on a small scale.
        </motion.p>
        <motion.div
          className="flex space-x-4"
          variants={fadeInUpVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <button className="bg-[#784f33] text-white px-4 py-2 rounded-full">Get Quote Now</button>
          <button className="border border-[#784f33] text-[#784f33] px-4 py-2 rounded-full">Learn More</button>
        </motion.div>
      </div>
      <div className="w-[90%] lg:w-[35%] mt-8 lg:mt-0">
        <AppointmentForm onSubmit={handleFormSubmit} />
      </div>
    </section>
  );
};

export default Main;
