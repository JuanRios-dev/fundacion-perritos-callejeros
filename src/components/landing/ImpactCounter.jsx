import React from 'react';
import { PawPrint, Home, Users } from 'lucide-react';

const ImpactCounter = () => {
  return (
    <section className="py-12 bg-blue-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CounterCard
            icon={<PawPrint className="w-10 h-10 text-white bg-blue-800 p-2 rounded-full" />}
            count={457}
            label="Animales Rescatados"
          />
          <CounterCard
            icon={<Home className="w-10 h-10 text-white bg-blue-800 p-2 rounded-full" />}
            count={312}
            label="Animales Adoptados"
          />
          <CounterCard
            icon={<Users className="w-10 h-10 text-white bg-blue-800 p-2 rounded-full" />}
            count={27}
            label="Voluntarios Activos"
          />
        </div>
      </div>
    </section>
  );
};

const CounterCard = ({ icon, count, label }) => {
  return (
    <div className="bg-blue-700 p-4 rounded-lg shadow-md flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
      <div className="mb-3 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-3xl font-bold mb-1">{count}</h3>
      <p className="text-blue-200 text-lg font-bold">{label}</p>
    </div>
  );
};

export default ImpactCounter;
