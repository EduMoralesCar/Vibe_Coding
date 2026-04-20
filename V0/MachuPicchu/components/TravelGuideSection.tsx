'use client';

import { Clock, DollarSign, AlertCircle, Heart, Map, Camera } from 'lucide-react';

export default function TravelGuideSection() {
  const travelTips = [
    {
      icon: Clock,
      title: 'Mejor Época para Visitar',
      description: 'Mayo a octubre es la estación seca. Julio-agosto es de máxima concurrencia.',
    },
    {
      icon: Map,
      title: 'Cómo Llegar',
      description:
        'Vuela a Cusco, luego tren a Aguas Calientes. Camina 1.5 horas o toma autobús a la ciudadela.',
    },
    {
      icon: DollarSign,
      title: 'Entrada',
      description: 'Entrada general: 80 soles. Camino Inca completo: 600 soles. Descuentos para estudiantes.',
    },
    {
      icon: AlertCircle,
      title: 'Preparación',
      description:
        'Lleva ropa cómoda, protector solar, agua. Sube lentamente para adaptarte a la altitud.',
    },
    {
      icon: Camera,
      title: 'Fotografía',
      description:
        'Llega temprano para evitar multitudes. Los mejores atardeceres son entre 4-6 PM.',
    },
    {
      icon: Heart,
      title: 'Lo Que No Debes Perder',
      description:
        'Plaza Principal, Templo del Sol, Templo de las Tres Ventanas, Intihuatana, Huayna Picchu.',
    },
  ];

  return (
    <section id="viajero" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-900 text-center mb-16 text-balance">
          Guía para el Viajero
        </h2>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {travelTips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <div key={index} className="bg-stone-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Icon className="w-12 h-12 text-amber-700 mb-4" />
                <h3 className="text-xl font-bold text-amber-900 mb-3">{tip.title}</h3>
                <p className="text-gray-700 leading-relaxed">{tip.description}</p>
              </div>
            );
          })}
        </div>

        {/* Extended Info */}
        <div className="bg-gradient-to-r from-amber-50 to-stone-100 p-8 md:p-12 rounded-lg">
          <h3 className="text-2xl font-bold text-amber-900 mb-6">Información Importante</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-amber-900 mb-4 text-lg">Qué Incluir en tu Mochila</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Ropa en capas (varía mucho la temperatura)</li>
                <li>✓ Zapatos de senderismo cómodos</li>
                <li>✓ Protector solar SPF 50+</li>
                <li>✓ Botella de agua reutilizable</li>
                <li>✓ Sombrero o gorra</li>
                <li>✓ Cámara fotográfica</li>
                <li>✓ Medicamentos para el soroche (mal de altura)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-amber-900 mb-4 text-lg">Horarios y Duración</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Abierto diariamente de 6:00 AM a 5:30 PM</li>
                <li>✓ Última entrada: 4:00 PM</li>
                <li>✓ Tiempo mínimo recomendado: 3-4 horas</li>
                <li>✓ Visita guiada: 2-3 horas</li>
                <li>✓ Permitido durante la noche con entrada especial</li>
                <li>✓ Acceso a Huayna Picchu: adicional</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg border-l-4 border-amber-700">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-amber-900">Consejo del Experto:</strong> Contrata un guía certificado para
              entender mejor la historia y arquitectura. Sube a Huayna Picchu temprano en la mañana. Si tienes
              problemas de altitud, descansa en Aguas Calientes el día anterior. La ciudadela es un lugar sagrado,
              camina con respeto y cuida el medio ambiente.
            </p>
          </div>
        </div>

        {/* Booking Section */}
        <div className="mt-16 bg-amber-700 text-white p-8 md:p-12 rounded-lg text-center">
          <h3 className="text-3xl font-bold mb-4">Listo para tu Aventura</h3>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Descubre la magia de Machu Picchu y vive una experiencia que cambiarás tu perspectiva del mundo.
          </p>
          <button className="bg-white text-amber-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-stone-100 transition-colors">
            Planificar mi Viaje
          </button>
        </div>
      </div>
    </section>
  );
}
