"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, User, Phone, Mail, MessageCircle, CheckCircle, Sparkles } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  })

  const services = [
    "Uñas Gelish",
    "Acrílicas Premium",
    "Spa de Manos",
    "Lash Lift",
    "Faciales Premium",
    "Depilación",
    "Paquete Rosa Premium",
    "Paquete Glow Up",
    "Paquete Spa Complete",
  ]

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hola! Me gustaría agendar una cita:
    
Nombre: ${formData.name}
Teléfono: ${formData.phone}
Email: ${formData.email}
Servicio: ${formData.service}
Fecha: ${formData.date}
Hora: ${formData.time}
Notas: ${formData.notes || "Ninguna"}`

    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F7DDEB] via-[#F6EFEA] to-[#EBE6FA] pt-32 pb-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 bg-[#D7C2A8] rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-60 h-60 bg-[#EBE6FA] rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Calendar className="w-5 h-5 text-[#D7C2A8]" />
            <span className="text-sm font-medium text-gray-700">Agenda tu Cita</span>
          </div>

          <h1 className="font-serif text-6xl md:text-7xl font-bold text-gray-900 mb-6 text-balance">
            Reserva tu Experiencia Premium
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto text-balance leading-relaxed">
            Completa el formulario y te contactaremos por WhatsApp para confirmar tu cita
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-[#F6EFEA]/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-12">
                <Sparkles className="w-16 h-16 mx-auto mb-4 text-[#D7C2A8]" />
                <h2 className="font-serif text-4xl font-bold text-gray-900 mb-3">Información de Reserva</h2>
                <p className="text-gray-600 leading-relaxed">Llena tus datos y nos pondremos en contacto contigo</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-900 font-semibold flex items-center gap-2">
                      <User className="w-4 h-4 text-[#D7C2A8]" />
                      Nombre Completo
                    </Label>
                    <Input
                      id="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-2 border-gray-200 focus:border-[#D7C2A8] rounded-xl py-6"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-900 font-semibold flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#D7C2A8]" />
                      Teléfono
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+52 123 456 7890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="border-2 border-gray-200 focus:border-[#D7C2A8] rounded-xl py-6"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-900 font-semibold flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#D7C2A8]" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-2 border-gray-200 focus:border-[#D7C2A8] rounded-xl py-6"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-gray-900 font-semibold flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#D7C2A8]" />
                    Servicio Deseado
                  </Label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                    className="w-full border-2 border-gray-200 focus:border-[#D7C2A8] rounded-xl py-3 px-4 bg-white text-gray-900"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-gray-900 font-semibold flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#D7C2A8]" />
                      Fecha Preferida
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      required
                      className="border-2 border-gray-200 focus:border-[#D7C2A8] rounded-xl py-6"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-gray-900 font-semibold flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#D7C2A8]" />
                      Hora Preferida
                    </Label>
                    <select
                      id="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      required
                      className="w-full border-2 border-gray-200 focus:border-[#D7C2A8] rounded-xl py-3 px-4 bg-white text-gray-900"
                    >
                      <option value="">Selecciona una hora</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-gray-900 font-semibold">
                    Notas Adicionales (Opcional)
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="¿Tienes alguna preferencia o requerimiento especial?"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="border-2 border-gray-200 focus:border-[#D7C2A8] rounded-xl min-h-32"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#D7C2A8] hover:bg-[#c5b097] text-white py-7 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Enviar Reserva por WhatsApp
                </Button>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mt-4">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Te contactaremos en minutos para confirmar tu cita</span>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Clock,
                title: "Respuesta Rápida",
                desc: "Te contactamos en menos de 15 minutos",
              },
              {
                icon: Calendar,
                title: "Flexible",
                desc: "Ajustamos horarios según tu disponibilidad",
              },
              {
                icon: Sparkles,
                title: "Sin Compromisos",
                desc: "Puedes cancelar o reagendar fácilmente",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-[#F7DDEB]/30 to-[#EBE6FA]/30"
              >
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 mx-auto mb-3 text-[#D7C2A8]" />
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
