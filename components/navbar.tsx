"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Menu, X, Sparkles, Star, Award, Gift } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/#servicios" },
    { name: "Galería", href: "/galeria" },
    { name: "Profesionales", href: "/profesionales" },
    { name: "Membresías", href: "/membresias" },
    { name: "Contacto", href: "/#contacto" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-lg shadow-lg py-2" : "bg-white/90 backdrop-blur-md shadow-md py-3"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Sparkles className="w-7 h-7 text-[#D7C2A8] transition-transform group-hover:rotate-12" />
                <Star className="w-3 h-3 text-[#F7DDEB] absolute -top-1 -right-1 fill-current animate-pulse" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-gray-900 block leading-none">Nails & Spa</span>
                <span className="text-xs text-[#D7C2A8] font-medium">Premium Beauty Studio</span>
              </div>
            </Link>

            {/* Desktop Navigation - ALWAYS VISIBLE */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 font-medium px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#F7DDEB]/50 hover:text-gray-900"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="border-[#D7C2A8] text-[#D7C2A8] hover:bg-[#D7C2A8] hover:text-white rounded-full transition-all duration-300 bg-transparent"
                onClick={() => (window.location.href = "/membresias")}
              >
                <Gift className="w-4 h-4 mr-2" />
                Membresías
              </Button>
              <Button
                size="sm"
                className="bg-[#D7C2A8] hover:bg-[#c5b097] text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={() =>
                  window.open("https://wa.me/1234567890?text=Hola! Me gustaría agendar una cita", "_blank")
                }
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Agendar Cita
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-900 hover:bg-[#F7DDEB]/50 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl shadow-2xl border-t border-gray-200 animate-fade-in">
              <div className="container mx-auto px-4 py-6 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 font-medium py-3 px-4 hover:bg-[#F7DDEB]/50 rounded-xl transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 mt-2">
                  <Button
                    variant="outline"
                    className="border-[#D7C2A8] text-[#D7C2A8] hover:bg-[#D7C2A8] hover:text-white w-full py-6 rounded-xl bg-transparent"
                    onClick={() => {
                      window.location.href = "/membresias"
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    <Gift className="w-4 h-4 mr-2" />
                    Ver Membresías
                  </Button>
                  <Button
                    className="bg-[#D7C2A8] hover:bg-[#c5b097] text-white w-full py-6 rounded-xl shadow-lg"
                    onClick={() => {
                      window.open("https://wa.me/1234567890?text=Hola! Me gustaría agendar una cita", "_blank")
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Agendar Cita
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
