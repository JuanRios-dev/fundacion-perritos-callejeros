import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const events = [
  {
    id: 1,
    title: "Jornada de Esterilización Gratuita",
    date: "15 de Agosto, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "Centro Comunitario Los Alamos",
    description: "Esterilización gratuita para perros y gatos. Cupos limitados, inscripción previa requerida."
  },
  {
    id: 2,
    title: "Feria de Adopción",
    date: "3 de Septiembre, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "Parque Central",
    description: "Conoce a nuestros adorables perros y gatos en busca de un hogar amoroso."
  },
  {
    id: 3,
    title: "Taller de Cuidado de Mascotas",
    date: "20 de Septiembre, 2023",
    time: "3:00 PM - 5:00 PM",
    location: "Biblioteca Municipal",
    description: "Aprende sobre cuidados básicos, nutrición y primeros auxilios para mascotas."
  }
];

const Events = () => {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Próximos Eventos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EventCard = ({ event }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full transition-transform duration-300 hover:scale-105">
      <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
      <div className="flex items-center mb-2">
        <Calendar className="w-5 h-5 mr-2 text-blue-500" />
        <span>{event.date}</span>
      </div>
      <div className="flex items-center mb-2">
        <Clock className="w-5 h-5 mr-2 text-blue-500" />
        <span>{event.time}</span>
      </div>
      <div className="flex items-center mb-4">
        <MapPin className="w-5 h-5 mr-2 text-blue-500" />
        <span>{event.location}</span>
      </div>
      <p className="text-gray-600 mb-4 flex-grow">{event.description}</p>
      <button className="mt-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
        Inscríbete
      </button>
    </div>
  );
};

export default Events;

