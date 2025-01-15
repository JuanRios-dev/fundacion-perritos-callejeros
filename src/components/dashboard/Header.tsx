import { useState, useEffect, useRef } from 'react'
import { Bell, User, Menu } from 'lucide-react'

type HeaderProps = {
  onMenuToggle: () => void
}

export function Header({ onMenuToggle }: HeaderProps) {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const notificationsRef = useRef<HTMLDivElement>(null)
  const userMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (isNotificationsOpen && notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false)
      }
      if (isUserMenuOpen && userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isNotificationsOpen, isUserMenuOpen])

  return (
    <header className="flex h-16 items-center justify-between bg-white px-4 shadow-sm border-b border-blue-100">
      <div className="flex items-center">
        <button 
          onClick={onMenuToggle}
          className="p-2 rounded-md text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative" ref={notificationsRef}>
          <button
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className="p-2 rounded-md text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Bell className="h-5 w-5" />
          </button>
          {isNotificationsOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-blue-100">
              <a href="#" className="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-50">Nuevo mensaje</a>
              <a href="#" className="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-50">Actualización del sistema</a>
            </div>
          )}
        </div>
        <div className="relative" ref={userMenuRef}>
          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="p-2 rounded-md text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <User className="h-5 w-5" />
          </button>
          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-blue-100">
              <a href="#" className="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-50">Perfil</a>
              <a href="#" className="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-50">Configuración</a>
              <a href="#" className="block px-4 py-2 text-sm text-blue-700 hover:bg-blue-50">Cerrar sesión</a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}