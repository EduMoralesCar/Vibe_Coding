'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapSection() {
  // Coordenadas de Machu Picchu: -13.1631° S, -72.5450° O
  const machuPichuCoords: [number, number] = [-13.1631, -72.545];

  return (
    <section id="ubicacion" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-900 text-center mb-4 text-balance">
          Ubicación Geográfica
        </h2>
        <p className="text-center text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
          Machu Picchu se encuentra en la región de Cusco, Perú, a 2,430 metros sobre el nivel del mar.
          Zoom en el mapa para explorar la ubicación desde la vista satelital.
        </p>

        {/* Map Container */}
        <div className="rounded-lg overflow-hidden shadow-xl h-96 md:h-[500px]">
          <MapContainer
            center={machuPichuCoords}
            zoom={15}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={machuPichuCoords}>
              <Popup>
                <div className="text-center">
                  <p className="font-bold text-lg">Machu Picchu</p>
                  <p className="text-sm text-gray-600">-13.1631° S, -72.545° O</p>
                  <p className="text-sm text-gray-600">Cusco, Perú</p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-amber-900 mb-3">Región</h3>
            <p className="text-gray-700">
              Ubicado en la región de Cusco, en la cordillera de los Andes Centrales del sur de Perú.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-amber-900 mb-3">Acceso</h3>
            <p className="text-gray-700">
              Se accede principalmente desde el pueblo de Aguas Calientes, ya sea a pie por el Camino Inca
              o en tren desde Cusco.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-amber-900 mb-3">Clima</h3>
            <p className="text-gray-700">
              Clima templado con estación seca de mayo a octubre. Mejor visitarla en mayo, junio, julio,
              agosto y septiembre.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
