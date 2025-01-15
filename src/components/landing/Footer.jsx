import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Columna 1: Logo y descripción */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Patitas Felices</h3>
            <p className="mb-4">Rescatando, cuidando y encontrando hogares para animales necesitados desde 2010.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors duration-300">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Columna 2: Contacto */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:info@fundacionperritos.org" className="hover:underline">
                  info@fundacionperritos.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                <a href="https://wa.me/573001234567" className="hover:underline">
                  +57 300 123 4567
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                <span>Calle 123 #45-67, Bogotá, Colombia</span>
              </li>
            </ul>
          </div>

          {/* Columna 3: Enlaces rápidos */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Inicio</a></li>
              <li><a href="#" className="hover:underline">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:underline">Adopciones</a></li>
              <li><a href="#" className="hover:underline">Cómo Ayudar</a></li>
              <li><a href="#" className="hover:underline">Eventos</a></li>
            </ul>
          </div>

          {/* Columna 4: Boletín */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Suscríbete a Nuestro Boletín</h4>
            <p className="mb-4">Recibe noticias y actualizaciones sobre nuestros peludos amigos.</p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="bg-gray-700 text-white px-4 py-2 rounded-l-md mb-2 sm:mb-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-md transition-colors duration-300"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="my-8 border-gray-600" />

        {/* Derechos de autor */}
        <div className="text-center">
          <p>&copy; 2023 Fundación Perritos Callejeros. Todos los derechos reservados.</p>
          <p className="mt-2 flex items-center justify-center">
            Hecho con <Heart size={16} className="mx-1 text-red-500" /> por amantes de los animales
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

