"use client";

import Image from "next/image";
import { Wifi, Car, Utensils, Wind, Droplets, Tv } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Wifi,
      title: "WiFi Gratis",
      description: "Conexión de alta velocidad en todas las áreas"
    },
    {
      icon: Car,
      title: "Parking Privado",
      description: "Aparcamiento gratuito para nuestros huéspedes"
    },
    {
      icon: Utensils,
      title: "Cocina Equipada",
      description: "Cocina completa con todos los utensilios"
    },
    {
      icon: Wind,
      title: "Aire Acondicionado",
      description: "Climatización en todas las habitaciones"
    },
    {
      icon: Droplets,
      title: "Calefacción",
      description: "Sistema de calefacción central"
    },
    {
      icon: Tv,
      title: "TV y Entretenimiento",
      description: "Smart TV con canales internacionales"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* DISTINTIVO 4 ESTRELLAS */}
        <div className="flex justify-center mb-12">
          <Image
            src="/distintivo_4estrellas.png"
            alt="Distintivo 4 Estrellas - Casas Rurales Castilla-La Mancha"
            width={300}
            height={200}
            className="object-contain"
            priority
          />
        </div>

        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Servicios y Comodidades
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para una estancia perfecta en el corazón de Toledo
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-card hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
