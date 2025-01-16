import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Home, Users, HelpCircle, Flag, CalendarCheck, BookA, Layers, Fingerprint, Facebook, Twitter, Instagram } from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Inicio', href: '/home' },
  {
    icon: Layers,
    label: 'Géstion de Adopciones',
    items: [
      { label: 'Listado de animales', href: '/animals' },
      { label: 'Listado de adoptantes', href: '/adopters' },
    ],
  },
  {
    icon: BookA,
    label: 'Solicitudes de Adopción',
    items: [
      { label: 'Visualizar solicitudes', href: '/adoption/list' },
      { label: 'Actualizar estado', href: '/adoption/state' },
      { label: 'Ver detalles de adopción', href: '/adoption/details' },
    ],
  },
  {
    icon: CalendarCheck,
    label: 'Géstion de Eventos',
    items: [
      { label: 'Listado de eventos', href: '/events/list' },
      { label: 'Crear evento', href: '/events/create' },
      { label: 'Ver estadisticas', href: '/events/statistics' },
    ],
  },
  { icon: Users, label: 'Usuarios', href: '/users' },
  { icon: Flag, label: 'Reportes', href: '/reports' },
  { icon: HelpCircle, label: 'Ayuda', href: '/help' },
];

type MenuItemProps = {
  item: typeof menuItems[0];
  isOpen: boolean;
};

function MenuItem({ item, isOpen }: MenuItemProps) {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  if ('items' in item) {
    return (
      <div>
        <button
          className="w-full flex items-center justify-between px-4 py-2 text-black hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
          onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
        >
          <span className="flex items-center">
            <item.icon className="mr-2 h-4 w-4" />
            {item.label}
          </span>
          <ChevronDown className={`h-4 w-4 transition-transform ${isSubMenuOpen ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence initial={false}>
          {isSubMenuOpen && isOpen && (
            <motion.ul
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: 'auto' },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              {item.items.map((subItem) => (
                <li key={subItem.href}>
                  <NavLink
                    to={subItem.href}
                    className="block py-2 pl-10 text-sm text-black hover:bg-blue-50 hover:text-blue-700"
                  >
                    {subItem.label}
                  </NavLink>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <NavLink
      to={item.href}
      className="flex items-center px-4 py-2 text-black hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors"
    >
      <item.icon className="mr-2 h-4 w-4" />
      {item.label}
    </NavLink>
  );
}

export function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className={`
      h-full overflow-y-auto bg-white transition-all duration-300 ease-in-out flex flex-col
      fixed inset-y-0 left-0 z-50 w-[18rem] md:relative md:z-0 border-r border-blue-300
      ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      ${!isOpen && 'md:w-0'}
    `}
    >
      <div className="flex-grow">
        <div className="flex items-center space-x-2 p-4 border-b border-blue-300">
          <Fingerprint className="h-6 w-6 text-blue-600" />
          <h1 className="text-2xl font-bold text-blue-800">ALERNAL</h1>
        </div>
        <nav className="mt-6">
          {menuItems.map((item, index) => (
            <MenuItem key={index} item={item} isOpen={isOpen} />
          ))}
        </nav>
      </div>
      <footer className="mt-auto p-4 border-t border-blue-100">
        <p className="text-xs text-center text-blue-600 mb-2">2025 &copy; Alernal SAS</p>
        <div className="flex justify-around space-x-4">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </footer>
    </div>
  );
}
