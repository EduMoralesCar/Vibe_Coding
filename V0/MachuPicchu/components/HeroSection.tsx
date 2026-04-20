'use client';

import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative w-full h-screen pt-16 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/macchu-picchu-hero.jpg"
          alt="Machu Picchu"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          Machu Picchu
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl text-balance">
          Una de las Siete Maravillas del Mundo Moderno
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl opacity-90">
          La ciudadela inca más emblemática de Perú, envuelta en misterio y belleza natural
        </p>

        <button
          onClick={() => {
            document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
        >
          <span>Descubre su Historia</span>
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
}
