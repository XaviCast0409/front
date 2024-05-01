import React from 'react';
import { FiGrid } from 'react-icons/fi';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/5 px-4 mb-4">
      <div className="bg-white p-6 rounded-lg shadow-tremor-card hover:shadow-tremor-dropdown transition duration-300 ease-in-out">
        <div className="flex items-center mb-4">
          <span className="text-tremor-metric mr-2">
            <FiGrid />
          </span>
          <h3 className="text-tremor-title">{title}</h3>
        </div>
        <p className="text-tremor-default">{description}</p>
      </div>
    </div>
  );
};

export default Card;
