"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Star, Calendar, Award, Sparkles, MessageCircle, Clock } from "lucide-react"

export default function ProfesionalesPage() {
  const [selectedProfessional, setSelectedProfessional] = useState<number | null>(null)

  const professionals = [
    {
      name: "Sofia Martínez",
      role: "Especialista en Nail Art",
      experience: "8 años de experiencia",
      image: "/professional-woman-nail-artist-luxury-salon.jpg",
      specialties: ["Diseños 3D", "Encapsulado", "Efectos Mármol", "Chrome Nails"],
      schedule: {
        Lunes: "9:00 AM - 5:00 PM",
        Martes: "9:00 AM - 5:00 PM",
        Miércoles: "9:00 AM - 5:00 PM",
        Jueves: "9:00 AM - 5:00 PM",
        Viernes: "9:00 AM - 5:00 PM",
        Sábado: "10:00 AM - 2:00 PM",
      },
      bio: "Especialista certificada en diseños de uñas artísticos con más de 8 años de experiencia. Apasionada por crear diseños únicos y personalizados.",
      certifications: ["OPI Certified", "CND Master", "Nail Art Professional"],
      rating: 5,
      reviews: 127,
      portfolio: [
        "/minimalist-pink-nude-nail-design-elegant.jpg",
        "/french-manicure-modern-elegant-white.jpg",
        "/pastel-nail-art-flowers-delicate.jpg",
      ],
    },
    {
      name: "Isabella Romero",
      role: "Experta en Acrílicas Premium",
      experience: "6 años de experiencia",
      image: "/professional-woman-nail-technician-elegant.jpg",
      specialties: ["Acrílicas Estructurales", "Esculpidas", "Stiletto Nails", "Coffin Nails"],
      schedule: {
        Lunes: "10:00 AM - 6:00 PM",
        Martes: "10:00 AM - 6:00 PM",
        Miércoles: "Día libre",
        Jueves: "10:00 AM - 6:00 PM",
        Viernes: "10:00 AM - 6:00 PM",
        Sábado: "10:00 AM - 4:00 PM",
        Domingo: "10:00 AM - 2:00 PM",
      },
      bio: "Maestra en técnicas de acrílico con enfoque en estructuras resistentes y formas perfectas. Experta en transformaciones completas.",
      certifications: ["Master Acrylic Specialist", "Sculpting Expert", "Young Nails Pro"],
      rating: 5,
      reviews: 98,
      portfolio: [
        "/luxury-acrylic-nails-elegant-pink-design.jpg",
        "/nude-nails-gold-accents-luxury.jpg",
        "/pink-chrome-nails-elegant-minimalist.jpg",
      ],
    },
    {
      name: "Valentina Cruz",
      role: "Especialista en Gelish & Spa",
      experience: "5 años de experiencia",
      image: "/professional-woman-spa-specialist-elegant.jpg",
      specialties: ["Gelish Premium", "Manicure Ruso", "Spa de Manos", "Tratamientos"],
      schedule: {
        Lunes: "9:00 AM - 8:00 PM",
        Martes: "9:00 AM - 8:00 PM",
        Miércoles: "9:00 AM - 8:00 PM",
        Jueves: "Día libre",
        Viernes: "9:00 AM - 8:00 PM",
        Sábado: "10:00 AM - 6:00 PM",
      },
      bio: "Especialista en técnicas de gelish de larga duración y tratamientos spa relajantes. Enfocada en el cuidado integral de las manos.",
      certifications: ["Gelish Master", "Russian Manicure Certified", "Spa Therapist"],
      rating: 5,
      reviews: 142,
      portfolio: [
        "/elegant-pastel-pink-gelish-manicure-hands.jpg",
        "/luxury-hand-spa-treatment-relaxing.jpg",
        "/white-nails-pearls-luxury-design.jpg",
      ],
    },
    {
      name: "Camila Torres",
      role: "Artista de Diseños Minimalistas",
      experience: "4 años de experiencia",
      image: "/professional-woman-beauty-artist-modern.jpg",
      specialties: ["Minimalismo", "Líneas Finas", "Francés Moderno", "Nude Art"],
      schedule: {
        Lunes: "12:00 PM - 8:00 PM",
        Martes: "12:00 PM - 8:00 PM",
        Miércoles: "12:00 PM - 8:00 PM",
        Jueves: "12:00 PM - 8:00 PM",
        Viernes: "12:00 PM - 8:00 PM",
        Sábado: "Día libre",
      },
      bio: "Artista especializada en diseños minimalistas y elegantes. Perfecta para quienes buscan sofisticación y sutileza en sus uñas.",
      certifications: ["Fine Line Artist", "Minimalist Design Pro", "OPI Ambassador"],
      rating: 5,
      reviews: 86,
      portfolio: [
        "/minimalist-pink-nude-nail-design-elegant.jpg",
        "/nude-nails-gold-accents-luxury.jpg",
        "/french-manicure-modern-elegant-white.jpg",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-[#F7DDEB] via-[#F6EFEA] to-[#EBE6FA] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#F7DDEB] rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-40 h-40 bg-[#EBE6FA] rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/80 text-gray-900 border-0 px-6 py-2">
              <Award className="w-4 h-4 mr-2" />
              Equipo Profesional Certificado
            </Badge>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-balance">
              Conoce a Nuestras Profesionales
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Expertas certificadas con años de experiencia, apasionadas por crear diseños únicos y personalizados para
              cada clienta
            </p>
          </div>
        </div>
      </section>

      {/* Professionals Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {professionals.map((professional, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group bg-gradient-to-br from-white to-[#F6EFEA]/20"
              >
                <CardContent className="p-0">
                  {/* Professional Image & Header */}
                  <div className="relative h-80 overflow-hidden bg-gradient-to-br from-[#F7DDEB] to-[#EBE6FA]">
                    <img
                      src={
                        professional.image ||
                        `/placeholder.svg?height=400&width=400&query=${encodeURIComponent(professional.name + " professional nail artist")}`
                      }
                      alt={professional.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="font-serif text-3xl font-bold text-white mb-2">{professional.name}</h3>
                      <p className="text-white/90 text-lg font-medium">{professional.role}</p>
                      <div className="flex items-center gap-2 mt-3">
                        <div className="flex gap-1">
                          {[...Array(professional.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#D7C2A8] text-[#D7C2A8]" />
                          ))}
                        </div>
                        <span className="text-white/90 text-sm">({professional.reviews} reseñas)</span>
                      </div>
                    </div>
                  </div>

                  {/* Professional Info */}
                  <div className="p-8">
                    {/* Bio */}
                    <p className="text-gray-700 leading-relaxed mb-6">{professional.bio}</p>

                    {/* Experience & Certifications */}
                    <div className="flex items-center gap-2 mb-6">
                      <Award className="w-5 h-5 text-[#D7C2A8]" />
                      <span className="text-sm font-semibold text-gray-900">{professional.experience}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {professional.certifications.map((cert, i) => (
                        <Badge key={i} variant="secondary" className="bg-[#F7DDEB] text-gray-900 border-0">
                          {cert}
                        </Badge>
                      ))}
                    </div>

                    {/* Specialties */}
                    <div className="mb-6">
                      <h4 className="font-serif text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-[#D7C2A8]" />
                        Especialidades
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {professional.specialties.map((specialty, i) => (
                          <Badge
                            key={i}
                            className="bg-[#EBE6FA] text-gray-900 border-0 hover:bg-[#D7C2A8] hover:text-white transition-colors"
                          >
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Portfolio Preview */}
                    <div className="mb-6">
                      <h4 className="font-serif text-xl font-bold text-gray-900 mb-3">Portfolio</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {professional.portfolio.map((image, i) => (
                          <div
                            key={i}
                            className="relative aspect-square rounded-xl overflow-hidden shadow-lg group/img cursor-pointer"
                          >
                            <img
                              src={image || "/placeholder.svg"}
                              alt={`Portfolio ${i + 1}`}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                            />
                            <div className="absolute inset-0 bg-[#D7C2A8]/0 group-hover/img:bg-[#D7C2A8]/20 transition-colors duration-300"></div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Schedule Toggle */}
                    <Button
                      variant="outline"
                      className="w-full mb-4 border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all bg-transparent"
                      onClick={() => setSelectedProfessional(selectedProfessional === index ? null : index)}
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      {selectedProfessional === index ? "Ocultar Horario" : "Ver Horario Completo"}
                    </Button>

                    {/* Schedule Details */}
                    {selectedProfessional === index && (
                      <div className="bg-gradient-to-br from-[#F7DDEB]/30 to-[#EBE6FA]/30 rounded-2xl p-6 mb-4 animate-fade-in-up">
                        <h4 className="font-serif text-2xl font-bold text-gray-900 mb-4">Horario Semanal</h4>
                        <div className="space-y-3">
                          {Object.entries(professional.schedule).map(([day, hours]) => (
                            <div
                              key={day}
                              className="flex justify-between items-center py-2 border-b border-gray-900/10 last:border-0"
                            >
                              <span className="font-semibold text-gray-900">{day}</span>
                              <span
                                className={`text-sm font-medium ${hours.includes("libre") || hours.includes("Cerrado") ? "text-gray-500" : "text-gray-700"}`}
                              >
                                {hours}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTA Button */}
                    <Button
                      className="w-full bg-[#D7C2A8] hover:bg-[#c5b097] text-white py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                      onClick={() =>
                        window.open(
                          `https://wa.me/1234567890?text=${encodeURIComponent(`Hola! Me gustaría agendar una cita con ${professional.name}`)}`,
                          "_blank",
                        )
                      }
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Agendar con {professional.name.split(" ")[0]}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Team Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-[#F6EFEA]/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Por Qué Elegir Nuestro Equipo
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Profesionales certificadas comprometidas con tu belleza y bienestar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#F7DDEB] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Certificadas</h3>
                <p className="text-gray-600 leading-relaxed">
                  Todas nuestras profesionales cuentan con certificaciones internacionales y capacitación continua
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#EBE6FA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">Especializadas</h3>
                <p className="text-gray-600 leading-relaxed">
                  Cada profesional tiene su área de expertise para garantizar resultados excepcionales
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#F6EFEA] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">5 Estrellas</h3>
                <p className="text-gray-600 leading-relaxed">
                  Calificaciones perfectas y cientos de reseñas positivas de clientas satisfechas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-[#F7DDEB] to-[#EBE6FA]">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            ¿Lista para tu Transformación?
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-10">
            Agenda tu cita con la profesional perfecta para ti y descubre por qué nuestras clientas siempre regresan
          </p>
          <Button
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-8 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            onClick={() => window.open("https://wa.me/1234567890", "_blank")}
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Agendar por WhatsApp
          </Button>
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
