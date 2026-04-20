'use client';

export default function EvolutionSection() {
  const timelineEvents = [
    {
      year: '1450',
      title: 'Construcción de Machu Picchu',
      description:
        'Bajo el reinado de Pachacútec, se construye esta magistral ciudadela inca en los Andes Centrales.',
    },
    {
      year: '1480',
      title: 'Expansión Imperial',
      description:
        'Machu Picchu prospera durante el apogeo del Imperio Inca bajo el reinado de Túpac Yupanqui.',
    },
    {
      year: '1550',
      title: 'Abandono Gradual',
      description:
        'La ciudadela es gradualmente abandonada, posiblemente debido a la conquista española y enfermedades.',
    },
    {
      year: '1800s',
      title: 'Olvido y Recubrimiento',
      description:
        'Machu Picchu permanece oculta bajo la vegetación de la selva durante siglos.',
    },
    {
      year: '1911',
      title: 'Redescubrimiento',
      description:
        'Hiram Bingham, historiador estadounidense, redescubre Machu Picchu para el mundo occidental.',
    },
    {
      year: '2007',
      title: 'Maravilla del Mundo',
      description:
        'Machu Picchu es votada como una de las Siete Maravillas del Mundo Moderno.',
    },
    {
      year: '2024',
      title: 'Patrimonio Vivo',
      description:
        'Hoy es el destino turístico más importante de Perú y Patrimonio de la Humanidad de la UNESCO.',
    },
  ];

  return (
    <section id="evolucion" className="py-20 bg-stone-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-900 text-center mb-16 text-balance">
          Evolución a través de los Años
        </h2>

        {/* Timeline */}
        <div className="space-y-0">
          {timelineEvents.map((event, index) => (
            <div key={index} className="flex gap-6 md:gap-12">
              {/* Timeline Line and Dot */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-amber-700 rounded-full border-4 border-stone-100 z-10 relative"></div>
                {index !== timelineEvents.length - 1 && (
                  <div className="w-1 bg-amber-700 flex-1 min-h-32"></div>
                )}
              </div>

              {/* Content */}
              <div className="pb-8 md:pb-12 flex-1">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <p className="text-amber-700 font-bold text-2xl mb-2">{event.year}</p>
                  <h3 className="text-xl font-bold text-amber-900 mb-3">{event.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
