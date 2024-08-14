import React from 'react';
import ClientCard from '../ClientCard';
import { motion } from 'framer-motion';

const fadeInUpVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.1 + index * 0.2,
    },
  }),
};

const ClientsOpinion: React.FC = () => {
  return (
    <section className="py-12 px-6 lg:pt-20 bg-[#FAFAFA]">
      <div className="mx-auto px-4 text-center">
        <h2 className="text-3xl text-[#252b42] font-semibold mb-4">What Clients Say</h2>
        <p className="text-gray-600 mb-8">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
        <div className="flex justify-center items-center flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
          {[...Array(3)].map((_, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInUpVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <ClientCard
                rating={4}
                text="Slate helps you see how many more days you need to work to reach your financial goal."
                author="Regina Miles"
                role="Designer"
                avatar="https://randomuser.me/api/portraits/women/44.jpg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsOpinion;
