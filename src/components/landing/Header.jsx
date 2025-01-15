import React, { useState } from 'react';
import { PawPrint, Menu, X, Facebook, Instagram, Twitter } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo y nombre de la fundación */}
          <div className="flex items-center">
            <PawPrint className="h-8 w-8 text-blue-500 mr-2" />
            <span className="text-xl font-bold text-gray-800">Fundación Perritos</span>
          </div>

          {/* Navegación para pantallas medianas y grandes */}
          <nav className="hidden lg:flex space-x-4">
            <NavLink href="#">Inicio</NavLink>
            <NavLink href="#">Sobre Nosotros</NavLink>
            <NavLink href="#">Adopciones</NavLink>
            <NavLink href="#">Cómo Ayudar</NavLink>
            <NavLink href="#">Eventos</NavLink>
            <NavLink href="#">Contacto</NavLink>
          </nav>

          {/* Botón de menú para pantallas pequeñas */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Menú lateral para pantallas pequeñas */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={closeMenu}>
          <div
            className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <span className="text-xl font-bold text-gray-800">Menú</span>
              <button
                className="focus:outline-none"
                onClick={closeMenu}
                aria-label="Cerrar menú"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>
            <nav className="flex flex-col p-4">
              <NavLink href="#" onClick={closeMenu}>Inicio</NavLink>
              <NavLink href="#" onClick={closeMenu}>Sobre Nosotros</NavLink>
              <NavLink href="#" onClick={closeMenu}>Adopciones</NavLink>
              <NavLink href="#" onClick={closeMenu}>Cómo Ayudar</NavLink>
              <NavLink href="#" onClick={closeMenu}>Eventos</NavLink>
              <NavLink href="#" onClick={closeMenu}>Contacto</NavLink>
            </nav>
            {/* Footer del menú lateral */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors duration-300">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors duration-300">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, children, onClick }) => {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Header;

