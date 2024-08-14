import React from 'react';
import {motion} from 'framer-motion';

interface ClientCardProps {
  rating: number;
  text: string;
  author: string;
  role: string;
  avatar: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ rating, text, author, role, avatar }) => {
  return (
    <motion.div 
      className="bg-white lg:max-w-80 p-6 rounded-lg shadow-md flex flex-col items-center cursor-pointer"
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }, (_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.371 1.24.588 1.81l-3.976 2.891a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.891a1 1 0 00-1.176 0l-3.976 2.891c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.095 10.1c-.783-.57-.381-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z" />
          </svg>
        ))}
      </div>
      <p className="text-[#252b4d] text-center mb-4">{text}</p>
      <div className="flex items-center">
        <img src={avatar} alt={author} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <p className="text-sm font-semibold">{author}</p>
          <p className="text-sm text-[#252b4d]">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ClientCard;
