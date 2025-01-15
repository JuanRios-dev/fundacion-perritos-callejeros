import React from 'react';
import { Heart, PawPrint, History } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo */}
      <img
        src="https://www.rcnradio.com/_next/image?url=https%3A%2F%2Ffiles.rcnradio.com%2Fpublic%2Fstyles%2F16_9%2Fpublic%2F2024-12%2Fwhatsapp_image_2024-12-22_at_100355_pm.jpeg%3FVersionId%3D2XGeQc9XNSj9G6Gvs7S_DDtRijVRE.RJ%26h%3Dbb4c7730%26itok%3DXDMT3Vhg&w=3840&q=75"
        alt="Perro y gato rescatados felices en un entorno natural"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Overlay para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      
      {/* Contenido del hero */}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Juntos, podemos cambiar vidas
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-8">
          ¡Ayuda a rescatar a los perritos y gatitos callejeros!
        </p>
        
        {/* Botones */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full flex items-center transition duration-300">
            <Heart className="mr-2" size={24} />
            Adopta un Amigo
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full flex items-center transition duration-300">
            <PawPrint className="mr-2" size={24} />
            Haz una Donación
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full flex items-center transition duration-300">
            <History className="mr-2" size={24} />
            Conoce nuestra Historia
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
