"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Heart, Clock, Star, Users } from "lucide-react"

const promotions = [
  {
    icon: Sparkles,
    title: "10% OFF Primera Cita",
    description: "Descubre la calidad premium con un descuento especial en tu primera visita",
    badge: "Válido todo el mes",
    gradient: "from-[#F7DDEB] to-[#EBE6FA]",
  },
  {
    icon: Heart,
    title: "Gelish + Spa de Manos",
    description: "Combo perfecto: Gelish elegante más tratamiento spa completo",
    price: "$550",
    oldPrice: "$600",
    gradient: "from-[#EBE6FA] to-[#F6EFEA]",
  },
  {
    icon: Clock,
    title: "Manicure Express",
    description: "Para las ocupadas: manicure profesional en 30 minutos",
    price: "$300",
    badge: "De lunes a viernes",
    gradient: "from-[#F6EFEA] to-[#F7DDEB]",
  },
  {
    icon: Star,
    title: "Diseño Premium Gratis",
    description: "En compra de 3 servicios, el cuarto incluye diseño premium sin costo",
    badge: "3x2 en diseños",
    gradient: "from-[#F7DDEB] to-[#F6EFEA]",
  },
  {
    icon: Users,
    title: "Paquete Amigas",
    description: "Ven con tu mejor amiga y ambas reciben 15% de descuento",
    badge: "Reserva para dos",
    gradient: "from-[#EBE6FA] to-[#F7DDEB]",
  },
]

export default function InfinitePromotionsCarousel() {
  const [items, setItems] = useState([...promotions, ...promotions, ...promotions])
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return

    const scrollSpeed = 1.5 // Pixels per frame - increased for faster movement
    let animationFrameId: number

    const scroll = () => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += scrollSpeed

        // When we've scrolled past the first set of promotions, reset and add more
        const scrollWidth = containerRef.current.scrollWidth
        const clientWidth = containerRef.current.clientWidth
        const scrollLeft = containerRef.current.scrollLeft

        // If we've scrolled more than 1/3 of the way, reset position and rotate items
        if (scrollLeft >= scrollWidth / 3) {
          containerRef.current.scrollLeft = 0

          // Rotate items: remove first batch, add new batch at end
          setItems((prev) => {
            const newItems = [...prev.slice(promotions.length), ...promotions]
            return newItems
          })
        }
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isHovered])

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div className="flex gap-6" style={{ width: "max-content" }}>
        {items.map((promo, index) => {
          const Icon = promo.icon
          return (
            <Card
              key={`${promo.title}-${index}`}
              className={`w-96 flex-shrink-0 bg-gradient-to-br ${promo.gradient} border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden`}
            >
              <CardContent className="p-8">
                <div className="bg-white/90 backdrop-blur rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-10 h-10 text-[#D7C2A8]" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-gray-900 mb-3 text-center">{promo.title}</h3>
                <p className="text-gray-700 leading-relaxed text-center mb-6">{promo.description}</p>
                <div className="text-center space-y-2">
                  {promo.price && <div className="text-2xl font-bold text-[#D7C2A8]">{promo.price}</div>}
                  {promo.oldPrice && (
                    <span className="inline-block bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-900 line-through opacity-60">
                      {promo.oldPrice}
                    </span>
                  )}
                  {promo.badge && !promo.oldPrice && (
                    <span className="inline-block bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-900">
                      {promo.badge}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
