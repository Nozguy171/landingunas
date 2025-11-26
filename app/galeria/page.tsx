"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { X, MessageCircle, Sparkles, Filter, Eye } from "lucide-react"

export default function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const categories = ["Todos", "Nail Art", "Minimalista", "Acrílicas", "Gelish", "Premium"]

  const galleryItems = [
    {
      id: 1,
      image: "/minimalist-pink-nude-nail-design-elegant.jpg",
      title: "Nude Minimalista",
      category: "Minimalista",
      description: "Diseño elegante en tonos nude con detalles dorados sutiles",
      artist: "Sofia Martínez",
      views: 1234,
      price: "$450",
    },
    {
      id: 2,
      image: "/french-manicure-modern-elegant-white.jpg",
      title: "Francés Moderno",
      category: "Minimalista",
      description: "Manicure francesa con twist contemporáneo",
      artist: "Camila Torres",
      views: 989,
      price: "$400",
    },
    {
      id: 3,
      image: "/pastel-nail-art-flowers-delicate.jpg",
      title: "Flores Pastel",
      category: "Nail Art",
      description: "Arte floral delicado en tonos pastel",
      artist: "Sofia Martínez",
      views: 1512,
      price: "$650",
    },
    {
      id: 4,
      image: "/nude-nails-gold-accents-luxury.jpg",
      title: "Nude Luxury",
      category: "Premium",
      description: "Elegancia máxima con detalles en oro",
      artist: "Isabella Romero",
      views: 1267,
      price: "$550",
    },
    {
      id: 5,
      image: "/pink-chrome-nails-elegant-minimalist.jpg",
      title: "Chrome Rosa",
      category: "Premium",
      description: "Efecto cromado en rosa elegante",
      artist: "Isabella Romero",
      views: 1498,
      price: "$700",
    },
    {
      id: 6,
      image: "/white-nails-pearls-luxury-design.jpg",
      title: "Perlas Luxury",
      category: "Premium",
      description: "Diseño exclusivo con perlas y detalles 3D",
      artist: "Sofia Martínez",
      views: 1841,
      price: "$800",
    },
    {
      id: 7,
      image: "/elegant-pastel-pink-gelish-manicure-hands.jpg",
      title: "Rosa Gelish",
      category: "Gelish",
      description: "Gelish en rosa pastel elegante",
      artist: "Valentina Cruz",
      views: 856,
      price: "$350",
    },
    {
      id: 8,
      image: "/luxury-acrylic-nails-elegant-pink-design.jpg",
      title: "Acrílicas Rosa",
      category: "Acrílicas",
      description: "Acrílicas estructurales en diseño rosa",
      artist: "Isabella Romero",
      views: 1123,
      price: "$550",
    },
  ]

  const expandedGallery = [
    ...galleryItems,
    {
      id: 9,
      image: "/luxury-stiletto-nails-with-crystals.jpg",
      title: "Stiletto Crystals",
      category: "Nail Art",
      description: "Uñas stiletto con aplicaciones de cristales Swarovski",
      artist: "Sofia Martínez",
      views: 2102,
      price: "$900",
    },
    {
      id: 10,
      image: "/marble-effect-nails-white-gold.jpg",
      title: "Mármol Dorado",
      category: "Premium",
      description: "Efecto mármol con detalles en oro 24k",
      artist: "Isabella Romero",
      views: 1878,
      price: "$750",
    },
    {
      id: 11,
      image: "/ombre-pink-nails-glitter.jpg",
      title: "Ombré Rosa",
      category: "Nail Art",
      description: "Degradado rosa con glitter sutil",
      artist: "Valentina Cruz",
      views: 1289,
      price: "$500",
    },
    {
      id: 12,
      image: "/nude-coffin-nails-elegant.jpg",
      title: "Coffin Nude",
      category: "Acrílicas",
      description: "Forma coffin en nude perfecto",
      artist: "Isabella Romero",
      views: 1001,
      price: "$500",
    },
  ]

  const filteredGallery =
    selectedCategory === "Todos"
      ? expandedGallery
      : expandedGallery.filter((item) => item.category === selectedCategory)

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
              <Sparkles className="w-4 h-4 mr-2" />
              Galería de Diseños Premium
            </Badge>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-balance">
              Inspiración & Creatividad
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Explora nuestros diseños exclusivos y encuentra tu próximo look perfecto
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-lg bg-white/95">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Filter className="w-5 h-5 text-gray-600" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#D7C2A8] hover:bg-[#c5b097] text-white"
                    : "border-gray-300 hover:border-[#D7C2A8] hover:text-[#D7C2A8]"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-[#F6EFEA]/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {filteredGallery.map((item, index) => (
              <Card
                key={item.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedImage(item.id)}
              >
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-serif text-2xl font-bold">Ver Detalle</span>
                    </div>

                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-2">
                      <Eye className="w-4 h-4 text-gray-700" />
                      <span className="text-sm font-medium text-gray-900">{item.views}</span>
                    </div>

                    {/* Category Badge */}
                    <Badge className="absolute top-4 left-4 bg-[#D7C2A8] text-white border-0">{item.category}</Badge>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-[#D7C2A8]">{item.price}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Por {item.artist}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <X className="w-6 h-6 text-gray-900" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative aspect-square lg:aspect-auto bg-gradient-to-br from-[#F7DDEB] to-[#EBE6FA]">
                <img
                  src={expandedGallery.find((item) => item.id === selectedImage)?.image || "/placeholder.svg"}
                  alt={expandedGallery.find((item) => item.id === selectedImage)?.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info Side */}
              <div className="p-8 lg:p-12 flex flex-col">
                <Badge className="self-start mb-4 bg-[#D7C2A8] text-white border-0">
                  {expandedGallery.find((item) => item.id === selectedImage)?.category}
                </Badge>

                <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
                  {expandedGallery.find((item) => item.id === selectedImage)?.title}
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {expandedGallery.find((item) => item.id === selectedImage)?.description}
                </p>

                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700 font-medium">
                      {expandedGallery.find((item) => item.id === selectedImage)?.views} vistas
                    </span>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-sm text-gray-500 mb-2">Artista</p>
                  <p className="font-semibold text-gray-900 text-lg">
                    {expandedGallery.find((item) => item.id === selectedImage)?.artist}
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-sm text-gray-500 mb-2">Precio</p>
                  <p className="font-serif text-4xl font-bold text-[#D7C2A8]">
                    {expandedGallery.find((item) => item.id === selectedImage)?.price}
                  </p>
                </div>

                <div className="mt-auto">
                  <Button
                    className="w-full bg-[#D7C2A8] hover:bg-[#c5b097] text-white py-6 rounded-full transition-all duration-300 hover:scale-105"
                    onClick={() => {
                      const item = expandedGallery.find((i) => i.id === selectedImage)
                      window.open(
                        `https://wa.me/1234567890?text=${encodeURIComponent(`Hola! Me gustaría agendar una cita para el diseño "${item?.title}" con ${item?.artist}`)}`,
                        "_blank",
                      )
                    }}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Agendar Este Diseño
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-[#F7DDEB] to-[#EBE6FA]">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-6">¿Te Inspiraste?</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-10">
            Agenda tu cita ahora y convierte tu diseño favorito en realidad
          </p>
          <Button
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-8 text-lg rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            onClick={() => window.open("https://wa.me/1234567890", "_blank")}
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Agendar Mi Diseño
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
