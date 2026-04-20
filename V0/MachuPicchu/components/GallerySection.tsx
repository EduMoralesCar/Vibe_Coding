'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: '/macchu-picchu-hero.jpg',
      alt: 'Vista general de Machu Picchu',
      title: 'Vista Panorámica',
      description: 'La majestosa ciudadela inca en toda su gloria al amanecer',
    },
    {
      src: '/macchu-picchu-gallery1.jpg',
      alt: 'Machu Picchu desde Huayna Picchu',
      title: 'Desde Huayna Picchu',
      description: 'Vista espectacular desde la montaña sagrada adyacente',
    },
    {
      src: '/macchu-picchu-gallery2.jpg',
      alt: 'Plaza sagrada de Machu Picchu',
      title: 'Plaza Sagrada',
      description: 'Centro ceremonial con arquitectura inca perfectamente preservada',
    },
    {
      src: '/macchu-picchu-gallery3.jpg',
      alt: 'Vista aérea de Machu Picchu',
      title: 'Vista Aérea',
      description: 'Perspectiva de dron mostrando la complejidad del diseño',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-900 text-center mb-16 text-balance">
          Galería de Fotos
        </h2>

        {/* Main Carousel */}
        <div className="relative bg-black rounded-lg overflow-hidden mb-8">
          {/* Main Image */}
          <div className="relative h-96 md:h-[600px] w-full">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-cover"
              quality={95}
              priority
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-3 rounded-full transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-3 rounded-full transition-all z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
            <h3 className="text-3xl font-bold text-white mb-2">{images[currentIndex].title}</h3>
            <p className="text-white/90 text-lg">{images[currentIndex].description}</p>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-8' : 'bg-white/50 w-2'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative h-24 md:h-32 rounded-lg overflow-hidden cursor-pointer transition-all ${
                index === currentIndex ? 'ring-4 ring-amber-700 scale-95' : 'hover:scale-105'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                quality={80}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
