import React from 'react';
import { Heart, Calendar, PawPrint } from 'lucide-react';

const animals = [
  {
    id: 1,
    name: 'Luna',
    image: 'https://placedog.net/300/300?random=1',
    age: '2 años',
    breed: 'Labrador',
    description: 'Luna es juguetona y le encanta nadar.',
  },
  {
    id: 2,
    name: 'Max',
    image: 'https://placedog.net/300/300?random=2',
    age: '3 años',
    breed: 'Golden Retriever',
    description: 'Max es cariñoso y excelente con los niños.',
  },
  {
    id: 3,
    name: 'Bella',
    image: 'https://placedog.net/300/300?random=3',
    age: '1 año',
    breed: 'Beagle',
    description: 'Bella es energética y adora jugar a buscar.',
  },
  {
    id: 4,
    name: 'Rocky',
    image: 'https://placedog.net/300/300?random=4',
    age: '4 años',
    breed: 'Pastor Alemán',
    description: 'Rocky es leal y muy inteligente.',
  },
  {
    id: 5,
    name: 'Mia',
    image: 'https://placedog.net/300/300?random=5',
    age: '2 años',
    breed: 'Siamés',
    description: 'Mia es tranquila y le gusta acurrucarse.',
  },
  {
    id: 6,
    name: 'Oliver',
    image: 'https://placedog.net/300/300?random=6',
    age: '1 año',
    breed: 'Gato Atigrado',
    description: 'Oliver es juguetón y muy curioso.',
  },
];

const Gallery = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Animales en Adopción</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-5 rounded-full transition duration-300 flex items-center justify-center mx-auto">
            <PawPrint className="w-5 h-5 mr-2" />
            Ver más animales
          </button>
        </div>
      </div>
    </section>
  );
};

const AnimalCard = ({ animal }) => {
  return (
    <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md transition-transform duration-300 md:hover:scale-105 flex flex-col h-full">
      <div className="relative aspect-w-1 aspect-h-1 h-64">
        <img
          src={animal.image}
          alt={`Imagen de ${animal.name}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-1">{animal.name}</h3>
        <div className="flex items-center mb-1">
          <Calendar className="w-4 h-4 mr-2 text-gray-500" />
          <span className="text-gray-600 text-sm">{animal.age}</span>
        </div>
        <div className="flex items-center mb-1">
          <PawPrint className="w-4 h-4 mr-2 text-gray-500" />
          <span className="text-gray-600 text-sm">{animal.breed}</span>
        </div>
        <p className="text-gray-700 text-sm mb-3 flex-grow">{animal.description}</p>
        <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 rounded-full transition duration-300 flex items-center justify-center mt-auto">
          <Heart className="w-4 h-4 mr-2" />
          Adoptar a {animal.name}
        </button>
      </div>
    </div>
  );
};

export default Gallery;
