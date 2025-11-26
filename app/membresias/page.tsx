"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown, Star, Gift, Check, MessageCircle, Calendar, Heart, TrendingUp, Award } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function MembershipsPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const memberships = [
    {
      name: "Silver",
      icon: Star,
      price: "$799",
      period: "/mes",
      color: "from-gray-400 to-gray-600",
      bgColor: "bg-gray-50",
      benefits: [
        "15% descuento en todos los servicios",
        "1 Gelish gratis al mes",
        "Prioridad en reservas",
        "Cumpleaños especial: servicio gratis",
        "Acceso a promociones exclusivas",
      ],
      popular: false,
    },
    {
      name: "Gold",
      icon: Award,
      price: "$1,299",
      period: "/mes",
      color: "from-[#D7C2A8] to-[#b8a589]",
      bgColor: "bg-[#F6EFEA]",
      benefits: [
        "25% descuento en todos los servicios",
        "2 servicios premium gratis al mes",
        "Prioridad máxima en reservas",
        "Cumpleaños VIP: paquete completo gratis",
        "Spa de manos gratis mensual",
        "Invitaciones a eventos exclusivos",
        "Producto de regalo mensual",
      ],
      popular: true,
    },
    {
      name: "Platinum",
      icon: Crown,
      price: "$1,899",
      period: "/mes",
      color: "from-purple-400 to-purple-700",
      bgColor: "bg-[#EBE6FA]",
      benefits: [
        "35% descuento en todos los servicios",
        "3 servicios premium gratis al mes",
        "Reserva sin límites + prioridad absoluta",
        "Mes de cumpleaños: servicios ilimitados",
        "Tratamiento facial mensual incluido",
        "Acceso VIP a nuevos diseños",
        "Kit de productos premium mensual",
        "Sesión de fotos profesional trimestral",
        "Invitada especial + 1 amiga gratis/mes",
      ],
      popular: false,
    },
  ]

  const features = [
    {
      icon: TrendingUp,
      title: "Ahorra hasta 35%",
      description: "Descuentos progresivos en todos nuestros servicios",
    },
    {
      icon: Gift,
      title: "Servicios Gratis",
      description: "Servicios premium incluidos cada mes",
    },
    {
      icon: Calendar,
      title: "Prioridad Total",
      description: "Reserva tus citas con antelación y prioridad",
    },
    {
      icon: Heart,
      title: "Beneficios Exclusivos",
      description: "Acceso a eventos, productos y diseños VIP",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F7DDEB] via-[#F6EFEA] to-[#EBE6FA] pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 bg-[#D7C2A8] rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-60 h-60 bg-[#EBE6FA] rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Crown className="w-5 h-5 text-[#D7C2A8]" />
            <span className="text-sm font-medium text-gray-700">Membresías Exclusivas</span>
          </div>

          <h1 className="font-serif text-6xl md:text-7xl font-bold text-gray-900 mb-6 text-balance">
            Únete al Club Premium
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto text-balance leading-relaxed">
            Accede a beneficios exclusivos, descuentos especiales y servicios VIP diseñados para ti
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-[#F6EFEA]/20"
              >
                <CardContent className="p-6 text-center">
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-[#D7C2A8]" />
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-[#F6EFEA]/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-4">Elige Tu Membresía</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Planes diseñados para diferentes necesidades y estilos de vida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {memberships.map((plan, index) => {
              const Icon = plan.icon
              return (
                <Card
                  key={index}
                  className={`${plan.bgColor} border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden relative group ${
                    plan.popular ? "ring-4 ring-[#D7C2A8] scale-105" : ""
                  }`}
                >
                  {plan.popular && (
                    <Badge className="absolute top-6 right-6 bg-[#D7C2A8] text-white border-0 px-4 py-2 text-sm shadow-lg z-10">
                      Más Popular
                    </Badge>
                  )}

                  <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>

                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="font-serif text-4xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-8">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 text-lg">{plan.period}</span>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-[#D7C2A8] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full py-6 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg ${
                        plan.popular
                          ? "bg-[#D7C2A8] hover:bg-[#c5b097] text-white"
                          : "bg-gray-900 hover:bg-gray-800 text-white"
                      }`}
                      onClick={() => {
                        setSelectedPlan(plan.name)
                        window.open(
                          `https://wa.me/1234567890?text=Hola! Estoy interesada en la membresía ${plan.name}`,
                          "_blank",
                        )
                      }}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Contratar {plan.name}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg">
              ¿Tienes dudas?{" "}
              <button
                className="text-[#D7C2A8] font-semibold hover:underline"
                onClick={() => window.open("https://wa.me/1234567890?text=Tengo dudas sobre las membresías", "_blank")}
              >
                Contáctanos por WhatsApp
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "¿Puedo cancelar mi membresía en cualquier momento?",
                a: "Sí, puedes cancelar tu membresía con 30 días de anticipación sin penalización.",
              },
              {
                q: "¿Los descuentos aplican en promociones?",
                a: "Los descuentos de membresía no son acumulables con otras promociones, pero siempre aplicamos el mejor beneficio para ti.",
              },
              {
                q: "¿Puedo compartir mi membresía?",
                a: "Las membresías son personales e intransferibles, excepto en el plan Platinum que incluye invitados.",
              },
              {
                q: "¿Cómo funcionan los servicios gratis mensuales?",
                a: "Cada mes se acreditan automáticamente tus servicios gratis que puedes usar cuando desees dentro del mes.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
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
