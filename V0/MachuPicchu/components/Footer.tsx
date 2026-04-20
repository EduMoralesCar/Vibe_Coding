'use client';

import { MapPin, Phone, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Grid de contenido */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">Machu Picchu</h3>
            <p className="text-amber-100 leading-relaxed text-sm">
              Una de las Siete Maravillas del Mundo Moderno. Descubre la magia de la arquitectura inca en los
              corazones de los Andes.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="text-amber-100 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#historia" className="text-amber-100 hover:text-white transition-colors">
                  Historia
                </a>
              </li>
              <li>
                <a href="#evolucion" className="text-amber-100 hover:text-white transition-colors">
                  Evolución
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-amber-100 hover:text-white transition-colors">
                  Galería
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="text-amber-100 hover:text-white transition-colors">
                  Ubicación
                </a>
              </li>
              <li>
                <a href="#viajero" className="text-amber-100 hover:text-white transition-colors">
                  Guía
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-amber-100">Cusco, Perú</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-amber-100">+51 (0) 84 58 00 00</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-amber-100">info@machupicchu.gob.pe</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span className="text-amber-100">www.machupicchu.gob.pe</span>
              </div>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h3 className="text-xl font-bold mb-4">Horarios</h3>
            <ul className="space-y-2 text-sm text-amber-100">
              <li>
                <strong>Lunes - Domingo:</strong>
              </li>
              <li>6:00 AM - 5:30 PM</li>
              <li className="mt-3">
                <strong>Estación Seca:</strong>
              </li>
              <li>Mayo - Octubre</li>
              <li className="mt-3">
                <strong>Entrada:</strong>
              </li>
              <li>80 soles (general)</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-amber-800 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-100 text-sm text-center md:text-left mb-4 md:mb-0">
              © 2024 Machu Picchu - Patrimonio de la Humanidad UNESCO. Todos los derechos reservados.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="text-amber-100 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#"
                className="text-amber-100 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                className="text-amber-100 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                𝕏
              </a>
              <a
                href="#"
                className="text-amber-100 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                ▶️
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
