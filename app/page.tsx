"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, MessageCircle, Heart, Clock, MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import InfinitePromotionsCarousel from "@/components/InfinitePromotionsCarousel"
import InfiniteDesignsCarousel from "@/components/InfiniteDesignsCarousel"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const heroImages = [
    {
      url: "/luxury-nail-salon-spa-aesthetic-pink-interior.jpg",
      title: "Salón de Lujo",
    },
    {
      url: "/elegant-pastel-pink-gelish-manicure-hands.jpg",
      title: "Elegancia en Cada Detalle",
    },
    {
      url: "/luxury-acrylic-nails-elegant-pink-design.jpg",
      title: "Diseños Premium Personalizados",
    },
    {
      url: "/luxury-hand-spa-treatment-relaxing.jpg",
      title: "Experiencia Spa de Lujo",
    },
    {
      url: "/minimalist-pink-nude-nail-design-elegant.jpg",
      title: "Perfección Minimalista",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  const services = [
    {
      title: "Uñas Gelish",
      price: "Desde $350",
      image: "/elegant-pastel-pink-gelish-manicure-hands.jpg",
      description: "Acabado perfecto y duradero",
    },
    {
      title: "Acrílicas Premium",
      price: "Desde $500",
      image: "/luxury-acrylic-nails-elegant-pink-design.jpg",
      description: "Diseños personalizados y únicos",
    },
    {
      title: "Spa de Manos",
      price: "Desde $250",
      image: "/luxury-hand-spa-treatment-relaxing.jpg",
      description: "Hidratación profunda y relajación",
    },
    {
      title: "Lash Lift",
      price: "Desde $400",
      image: "/lash-lift-beautiful-eyes-professional.jpg",
      description: "Pestañas naturalmente elevadas",
    },
    {
      title: "Faciales Premium",
      price: "Desde $600",
      image: "/luxury-facial-treatment-spa-aesthetic.jpg",
      description: "Tratamientos personalizados",
    },
    {
      title: "Depilación",
      price: "Desde $150",
      image: "/professional-waxing-beauty-salon.jpg",
      description: "Técnicas suaves y profesionales",
    },
  ]

  const packages = [
    {
      name: "Paquete Rosa Premium",
      services: ["Gelish + Diseño", "Spa de Manos", "Hidratación"],
      price: "$550",
      discount: "15% OFF",
      color: "bg-[#F7DDEB]",
    },
    {
      name: "Glow Up",
      services: ["Manicure Premium", "Facial Express", "Lash Lift"],
      price: "$1,200",
      discount: "20% OFF",
      color: "bg-[#EBE6FA]",
    },
    {
      name: "Spa Complete",
      services: ["Spa de Manos", "Gelish Premium", "Masaje Relajante"],
      price: "$750",
      discount: "10% OFF",
      color: "bg-[#F6EFEA]",
    },
  ]

  const gallery = [
    "/minimalist-pink-nude-nail-design-elegant.jpg",
    "/french-manicure-modern-elegant-white.jpg",
    "/pastel-nail-art-flowers-delicate.jpg",
    "/nude-nails-gold-accents-luxury.jpg",
    "/pink-chrome-nails-elegant-minimalist.jpg",
    "/white-nails-pearls-luxury-design.jpg",
  ]

  const testimonials = [
    {
      name: "María González",
      review: "El mejor salón de uñas que he visitado. Atención impecable y diseños hermosos.",
      rating: 5,
    },
    {
      name: "Ana Rodríguez",
      review: "Me encanta venir aquí. Siempre salgo feliz con mis uñas perfectas.",
      rating: 5,
    },
    {
      name: "Laura Martínez",
      review: "Profesionalismo al 100%. El ambiente es súper relajante y acogedor.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with Auto Carousel */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image.url})` }} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
          </div>
        ))}

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <Badge className="mb-8 bg-white/90 backdrop-blur text-gray-900 border-0 px-6 py-3 text-base animate-fade-in-up">
            <Sparkles className="w-5 h-5 mr-2" />
            Salón Premium de Uñas y Spa
          </Badge>
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in-up [animation-delay:200ms] text-balance">
            {heroImages[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:400ms] text-pretty">
            Descubre la excelencia en cuidado de uñas con nuestros diseños exclusivos y tratamientos de lujo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:600ms]">
            <Button
              size="lg"
              className="bg-[#F7DDEB] hover:bg-[#F7DDEB]/90 text-gray-900 font-semibold px-8 py-6 text-lg border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/reservar">Agendar Cita</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur hover:bg-white/20 text-white border-2 border-white/50 font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="/galeria">
                Ver Galería
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 px-4 bg-white scroll-mt-20">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Tratamientos de belleza premium diseñados para realzar tu belleza natural
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-[#F6EFEA]/30 backdrop-blur"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#D7C2A8]">{service.price}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-900 hover:bg-[#F7DDEB] transition-colors"
                      onClick={() => window.open("https://wa.me/1234567890", "_blank")}
                    >
                      Reservar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-[#F6EFEA]/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-4">Paquetes Premium</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Combina tus servicios favoritos y obtén descuentos especiales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`${pkg.color} border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden relative group`}
              >
                <Badge className="absolute top-4 right-4 bg-[#D7C2A8] text-white border-0 px-4 py-1 text-sm">
                  {pkg.discount}
                </Badge>
                <CardContent className="p-8">
                  <Heart className="w-12 h-12 text-gray-900 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif text-3xl font-bold text-gray-900 mb-6">{pkg.name}</h3>
                  <ul className="space-y-3 mb-8">
                    {pkg.services.map((service, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <Sparkles className="w-4 h-4 mr-2 text-[#D7C2A8]" />
                        {service}
                      </li>
                    ))}
                  </ul>
                  <div className="text-4xl font-bold text-gray-900 mb-6">{pkg.price}</div>
                  <Button
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white py-6 rounded-full transition-all duration-300 hover:scale-110"
                    onClick={() => window.open("https://wa.me/1234567890", "_blank")}
                  >
                    Reservar Ahora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24 px-4 bg-white scroll-mt-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-4">Galería de Diseños</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Inspiración y creatividad en cada diseño personalizado
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group cursor-pointer"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Diseño ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F7DDEB]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-serif text-xl font-bold">Ver Diseño</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-4">Transformaciones Reales</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Resultados que hablan por sí solos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                before: "/nail-before-treatment-damaged.jpg",
                after: "/nail-after-treatment-beautiful.jpg",
                title: "Reconstrucción Premium",
              },
              {
                before: "/hands-before-spa-treatment.jpg",
                after: "/hands-after-spa-glowing.jpg",
                title: "Spa Completo de Manos",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="grid grid-cols-2">
                    <div className="relative aspect-square">
                      <img src={item.before || "/placeholder.svg"} alt="Antes" className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 bg-gray-900/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Antes
                      </div>
                    </div>
                    <div className="relative aspect-square">
                      <img
                        src={item.after || "/placeholder.svg"}
                        alt="Después"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-[#D7C2A8] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Después
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-[#F6EFEA]/30">
                    <h3 className="font-serif text-2xl font-bold text-gray-900 text-center">{item.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Continuous Carousel Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#F7DDEB] to-[#EBE6FA] overflow-hidden">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-2">Nuestros Mejores Diseños</h2>
        </div>
        <InfiniteDesignsCarousel designs={gallery} />
      </section>

      {/* Promotions Section - Enhanced Carousel */}
      <section className="py-24 px-4 bg-white overflow-hidden">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-[#F7DDEB] text-gray-900 border-0 px-6 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Ofertas Especiales
            </Badge>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-4">Promociones Premium</h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
              Aprovecha nuestras ofertas exclusivas por tiempo limitado
            </p>
          </div>

          <InfinitePromotionsCarousel />
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/luxury-nail-salon-interior-elegant-modern-pink.jpg"
                alt="Nuestro Estudio"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-6">Sobre Nuestro Estudio</h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Somos un salón especializado en el cuidado y embellecimiento de tus manos con los más altos estándares
                de calidad e higiene.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Nuestro equipo de profesionales certificadas cuenta con años de experiencia y se mantiene actualizado en
                las últimas tendencias y técnicas.
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Utilizamos productos premium de las mejores marcas y mantenemos protocolos de esterilización estrictos
                para garantizar tu seguridad y bienestar.
              </p>
              <Button
                size="lg"
                className="bg-[#D7C2A8] hover:bg-[#c5b097] text-white px-8 py-6 rounded-full transition-all duration-300 hover:scale-105"
                onClick={() => window.open("https://wa.me/1234567890", "_blank")}
              >
                Conoce Más
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section id="contacto" className="py-24 px-4 bg-gradient-to-b from-white to-[#F6EFEA]/30 scroll-mt-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-4">Visítanos</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Estamos ubicados en el corazón de la ciudad
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info & Hours */}
            <div className="space-y-8">
              <Card className="bg-white border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="font-serif text-3xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-[#D7C2A8] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Dirección</p>
                        <p className="text-gray-600">
                          Av. Principal 123, Colonia Centro
                          <br />
                          Ciudad, Estado, CP 12345
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-[#D7C2A8] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Teléfono</p>
                        <p className="text-gray-600">+52 123 456 7890</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-[#D7C2A8] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">Email</p>
                        <p className="text-gray-600">contacto@nailsspa.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#F7DDEB] to-[#EBE6FA] border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-8 h-8 text-gray-900" />
                    <h3 className="font-serif text-3xl font-bold text-gray-900">Horarios</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-900/10">
                      <span className="font-semibold text-gray-900">Lunes - Viernes</span>
                      <span className="text-gray-700 font-medium">9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-900/10">
                      <span className="font-semibold text-gray-900">Sábado</span>
                      <span className="text-gray-700 font-medium">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-semibold text-gray-900">Domingo</span>
                      <span className="text-gray-700 font-medium">Cerrado</span>
                    </div>
                  </div>
                  <Button
                    className="w-full mt-6 bg-gray-900 hover:bg-gray-800 text-white py-6 rounded-full transition-all duration-300 hover:scale-110"
                    onClick={() => window.open("https://wa.me/1234567890", "_blank")}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Agendar por WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5676749957634!2d-99.16602492508419!3d19.432607981885923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92f0b2e0d8d%3A0x6f1bfbf4efd2e8b8!2sAngel%20de%20la%20Independencia!5e0!3m2!1sen!2smx!4v1703264810000!5m2!1sen!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[50%] brightness-95"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-float"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  )
}
