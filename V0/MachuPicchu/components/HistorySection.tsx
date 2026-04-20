'use client';

import Image from 'next/image';

export default function HistorySection() {
  return (
    <section id="historia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full">
            <Image
              src="/macchu-picchu-history.jpg"
              alt="Historia de Machu Picchu"
              fill
              className="object-cover rounded-lg shadow-lg"
              quality={90}
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6 text-balance">
              Historia de Machu Picchu
            </h2>

            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Machu Picchu, cuyo nombre significa "Montaña Vieja" en quechua, es una ciudadela inca ubicada
                en las alturas de los Andes Centrales del Perú. Construida alrededor del año 1450 bajo el
                reinado del Inca Pachacútec, representa el apogeo de la arquitectura y la ingeniería inca.
              </p>

              <p>
                Esta maravilla arqueológica fue construida presumiblemente como una residencia de verano para
                los Incas, aunque su propósito exacto sigue siendo motivo de estudio. La ciudad fue abandonada
                alrededor de 100 años después de su construcción, posiblemente debido a la conquista española.
              </p>

              <p>
                Ubicada a 2,430 metros sobre el nivel del mar, Machu Picchu fue "redescubierta" para el mundo
                occidental en 1911 por el historiador estadounidense Hiram Bingham, aunque la población local
                siempre conocía su existencia. En 2007, fue votada como una de las Siete Maravillas del Mundo
                Moderno.
              </p>

              <p>
                La ciudadela está distribuida en aproximadamente 5 kilómetros cuadrados e incluye templos,
                plazas, residencias y una compleja red de canales de agua. Su arquitectura demuestra el
                conocimiento avanzado de los incas en astronomía, ingeniería y agricultura.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <div className="bg-amber-100 p-6 rounded-lg flex-1">
                <p className="text-amber-900 font-semibold">Fundación</p>
                <p className="text-2xl font-bold text-amber-700">~1450</p>
              </div>
              <div className="bg-amber-100 p-6 rounded-lg flex-1">
                <p className="text-amber-900 font-semibold">Altitud</p>
                <p className="text-2xl font-bold text-amber-700">2,430 m</p>
              </div>
              <div className="bg-amber-100 p-6 rounded-lg flex-1">
                <p className="text-amber-900 font-semibold">Redescubierta</p>
                <p className="text-2xl font-bold text-amber-700">1911</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
