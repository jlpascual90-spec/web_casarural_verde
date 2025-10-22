
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Users, Bed, Car } from "lucide-react";
import { propertyData, galleryImages } from "@/lib/data";

const heroImages = galleryImages?.filter(img => img?.category === "piscina" || img?.category === "exterior")?.slice(0, 4) || [];

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 parallax">
        {heroImages?.map((image, index) => (
          <div
            key={image?.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full h-full bg-gray-200">
              <Image
                src={image?.url || ""}
                alt={image?.alt || "Casa rural"}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-white animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {propertyData?.name}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {propertyData?.tagline}
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto opacity-90">
            {propertyData?.description}
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-slide-in-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Users className="h-8 w-8 mx-auto mb-2" />
              <p className="font-semibold">Hasta 13 personas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Bed className="h-8 w-8 mx-auto mb-2" />
              <p className="font-semibold">6 Habitaciones</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Car className="h-8 w-8 mx-auto mb-2" />
              <p className="font-semibold">Piscina 8x4m</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <MapPin className="h-8 w-8 mx-auto mb-2" />
              <p className="font-semibold">12 min Toledo</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-right">
            <a
              href="/calendario"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Ver Disponibilidad
            </a>
            <a
              href="/contacto"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-200"
            >
              Contactar Ahora
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white animate-fade-in">
        <div className="animate-bounce">
          <div className="w-1 h-16 bg-white/50 rounded-full mx-auto mb-2" />
          <p className="text-sm">Desliza para explorar</p>
        </div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages?.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentImage ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Ver imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
