'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.setIcon(DefaultIcon);

export default function Map() {
  const machu_picchu_coords: [number, number] = [-13.1631, -72.545];

  return (
    <div className="w-full h-96 md:h-[600px] rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={machu_picchu_coords}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url="https://{s}.satellite.openstreetmap.org/tiles/planet/{z}/{x}/{y}.jpg"
          attribution='&copy; OpenStreetMap contributors'
          maxZoom={19}
        />
        <Marker position={machu_picchu_coords} icon={DefaultIcon}>
          <Popup>
            <div className="text-center">
              <h3 className="font-bold text-amber-900">Machu Picchu</h3>
              <p className="text-sm text-gray-600">2,430 m de altitud</p>
              <p className="text-xs text-gray-500">Cusco, Perú</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
