"use client"

import { Sparkles, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-[#D7C2A8]" />
              <span className="font-serif text-2xl font-bold">Nails & Spa</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Salón premium especializado en el cuidado y embellecimiento de tus manos con los más altos estándares de
              calidad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#D7C2A8] transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="text-gray-400 hover:text-[#D7C2A8] transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-gray-400 hover:text-[#D7C2A8] transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="/profesionales" className="text-gray-400 hover:text-[#D7C2A8] transition-colors">
                  Profesionales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#D7C2A8] flex-shrink-0 mt-1" />
                <span className="text-gray-400">Av. Principal 123, Colonia Centro, Ciudad</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#D7C2A8]" />
                <span className="text-gray-400">+52 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#D7C2A8]" />
                <span className="text-gray-400">contacto@nailsspa.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4">Horarios</h3>
            <ul className="space-y-2">
              <li className="flex justify-between text-gray-400">
                <span>Lunes - Viernes</span>
                <span>9:00 - 20:00</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Sábado</span>
                <span>10:00 - 18:00</span>
              </li>
              <li className="flex justify-between text-gray-400">
                <span>Domingo</span>
                <span>Cerrado</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-[#D7C2A8] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D7C2A8] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Nails & Spa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
