import React from 'react';
import { Heart, Shield, Eye, Info } from 'lucide-react';

const About = () => {
  return (
    <section className="py-12 sm:py-16 bg-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
          ¿Quiénes somos?
        </h2>
        
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12">
          <p className="text-sm sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
            Somos una fundación comprometida con transformar la vida de animales callejeros, 
            rescatándolos del abandono, proporcionándoles cuidado y amor, y encontrándoles un hogar definitivo. 
            Creemos que cada vida importa y trabajamos incansablemente para darles una segunda oportunidad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ValueCard 
            icon={<Heart className="w-10 sm:w-12 h-10 sm:h-12 text-red-500" />}
            title="Compasión"
            description="Actuamos con amor, empatía y dedicación hacia todos los animales necesitados. Cada rescate es una oportunidad para salvar una vida."
          />
          <ValueCard 
            icon={<Shield className="w-10 sm:w-12 h-10 sm:h-12 text-blue-500" />}
            title="Responsabilidad"
            description="Estamos comprometidos con el bienestar y la protección de cada animal rescatado, asegurándonos de brindarles atención de calidad y un hogar seguro."
          />
          <ValueCard 
            icon={<Eye className="w-10 sm:w-12 h-10 sm:h-12 text-green-500" />}
            title="Transparencia"
            description="Operamos con claridad y honestidad en todas nuestras actividades, reportando cómo utilizamos las donaciones para generar un impacto positivo."
          />
        </div>

        {/* Botón para conocer más */}
        <div className="text-center mt-10 sm:mt-12">
          <a 
            href="/about" 
            className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 sm:py-3 px-5 sm:px-6 rounded-full text-sm sm:text-base lg:text-lg shadow-md transition duration-300">
            <Info className="mr-2 w-5 sm:w-6 h-5 sm:h-6" />
            Conócenos más
          </a>
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-4 sm:p-6 bg-white rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
      <div className="mb-3 sm:mb-4">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 text-center">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default About;
