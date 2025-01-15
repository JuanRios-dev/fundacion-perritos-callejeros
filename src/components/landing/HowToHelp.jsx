import React from 'react';
import { DollarSign, Utensils, Pill, Users, PawPrint } from 'lucide-react';

const HowToHelp = () => {
  return (
    <section className="py-16 bg-blue-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Cómo Puedes Ayudar</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <HelpCard
            icon={<DollarSign className="w-12 h-12 text-green-500" />}
            title="Donaciones en Efectivo"
            description="Tu aporte económico nos ayuda a cubrir gastos médicos, alimentos y más."
            example="Con $20.000, ayudas a vacunar a un cachorro."
          />
          <HelpCard
            icon={<Utensils className="w-12 h-12 text-orange-500" />}
            title="Donaciones de Alimentos"
            description="Alimento seco o húmedo para perros y gatos de todas las edades."
            example="Una bolsa de 3kg alimenta a un perro durante una semana."
          />
          <HelpCard
            icon={<Pill className="w-12 h-12 text-red-500" />}
            title="Donaciones de Medicinas"
            description="Medicamentos, vitaminas y suplementos para mantener sanos a nuestros animales."
            example="Un frasco de desparasitante protege a 5 gatitos."
          />
          <HelpCard
            icon={<Users className="w-12 h-12 text-purple-500" />}
            title="Ser Voluntario"
            description="Tu tiempo y cariño son invaluables. Ayuda en el cuidado diario, eventos o campañas."
            example="4 horas a la semana pueden hacer una gran diferencia."
          />
          <HelpCard
            icon={<PawPrint className="w-12 h-12 text-blue-500" />}
            title="Apadrinamiento"
            description="Apadrina a un animal y cubre sus necesidades básicas mensualmente."
            example="$50.000 al mes cubren la alimentación y cuidados básicos de un perro."
          />
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-semibold mb-4">¿Otras formas de ayudar?</h3>
            <p className="text-gray-600 mb-4">
              ¡Contáctanos! Siempre hay maneras creativas de contribuir.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const HelpCard = ({ icon, title, description, example }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="bg-yellow-100 p-3 rounded-lg mt-auto">
        <p className="text-sm font-medium text-yellow-800">
          Ejemplo: {example}
        </p>
      </div>
    </div>
  );
};

export default HowToHelp;

