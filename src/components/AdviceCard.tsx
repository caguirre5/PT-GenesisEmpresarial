import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface AdviceCardProps {
  title: string;
  icon: IconDefinition;
  description: string[];
}

const AdviceCard: React.FC<AdviceCardProps> = ({ title, icon, description }) => {
  return (
    <div className="bg-white lg:max-w-80rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="bg-[#f6e4d7] p-6 flex items-center">
        <div className="bg-white p-3 rounded-full">
          <FontAwesomeIcon icon={icon} size="2x" className="text-[#f6e4d7]" />
        </div>
        <h3 className="text-lg font-semibold ml-4 text-[#252B42]">{title}</h3>
      </div>
      <div className="p-6 flex-grow border-t text-start border-gray-200">
        <ul className="text-[#252b42] mb-4">
          {description.map((item, index) => (
            <li key={index} className="mb-2">- {item}</li>
          ))}
        </ul>
        <a href="#" className="text-[#D0A144] pl-2 hover:underline">Learn More</a>
      </div>
    </div>
  );
};

export default AdviceCard;
