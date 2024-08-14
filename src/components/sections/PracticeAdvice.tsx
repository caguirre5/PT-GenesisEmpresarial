import React from 'react';
import AdviceCard from '../AdviceCard';
import { faBalanceScale, faGavel, faFileAlt } from '@fortawesome/free-solid-svg-icons';
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

const PracticeAdvice: React.FC = () => {
  const advices = [
    {
      title: 'Frauds or Mislead',
      icon: faBalanceScale,
      description: [
        'The best products start with Figma',
        'Design with real data',
        'Lightning fast prototyping',
        'Fastest way to organize',
        'Work at the speed of thought.',
      ],
    },
    {
      title: 'Bailes & Warrants',
      icon: faGavel,
      description: [
        'The best products start with Figma',
        'Design with real data',
        'Lightning fast prototyping',
        'Fastest way to organize',
        'Work at the speed of thought.',
      ],
    },
    {
      title: 'Federal Drug Crimes',
      icon: faFileAlt,
      description: [
        'The best products start with Figma',
        'Design with real data',
        'Lightning fast prototyping',
        'Fastest way to organize',
        'Work at the speed of thought.',
      ],
    },
  ];

  return (
    <section className="py-12 px-6 bg-[#FFFFFF]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-[#252b42]">Practice Advice</h2>
        <p className="text-[#252b42] mb-8">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
        <div className="flex justify-center flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
          {advices.map((advice, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInUpVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <AdviceCard
                title={advice.title}
                icon={advice.icon}
                description={advice.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAdvice;
