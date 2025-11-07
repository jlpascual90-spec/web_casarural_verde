"use client";

import Image from "next/image";
import { Wifi, Car, Utensils, Wind, Droplets, Tv } from "lucide-react";

export function ServicesSection() {
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
        <div className="mb-16 bg-card rounded-lg shadow-lg p-8 border-2 border-primary/20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Imagen del distintivo */}
            <div className="flex-shrink-0">
              <Image
                src="/distintivo_4estrellas.png"
                alt="Distintivo 4 Estrellas - Casas Rurales Castilla-La Mancha"
                width={200}
                height={150}
                className="object-contain"
                priority
              />
            </div>
            
            {/* Texto explicativo */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Categoría Alta
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                DUX by TOLEDO está inscrita en el Registro de Empresas y Establecimientos Turísticos de Castilla-La Mancha con número de registro <strong>45012120399</strong> y categoría de <strong className="text-amber-700 dark:text-amber-500">4 Estrellas Verdes</strong>, que certifica la excelencia de nuestras instalaciones y servicios como casa rural.
              </p>
            </div>
          </div>
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
