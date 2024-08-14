import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

interface AttorneysCardProps {
  name: string;
  role: string;
  avatar: string;
}

const AttorneysCard: React.FC<AttorneysCardProps> = ({ name, role, avatar }) => {
  return (
    <motion.div
      className="lg:max-w-[350px] bg-white rounded-lg shadow-md flex flex-col items-center cursor-pointer overflow-hidden"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={avatar}
        alt={name}
        className="w-full h-auto object-cover"
      />
      <div className="h-[120px] w-full flex flex-col justify-center items-center">
        <h3 className="text-lg font-semibold text-[#252b4d]">{name}</h3>
        <p className="text-[#252b4d] mb-2">{role}</p>
        <div className="flex space-x-4">
          <a href="#" className="text-blue-600">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="#" className="text-pink-500">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="#" className="text-blue-400">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default AttorneysCard;
