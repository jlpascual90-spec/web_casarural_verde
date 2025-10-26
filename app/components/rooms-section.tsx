"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Users, Bed, Wind, Crown } from "lucide-react";
import { propertyData, galleryImages } from "@/lib/data";

export function RoomsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            DORMITORIOS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seis habitaciones inspiradas en los grandes generales romanos, equipadas con todas las comodidades modernas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertyData?.rooms?.map((room, index) => (
            <RoomCard key={room?.name} room={room} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-card rounded-xl p-8 shadow-elegant border border-border/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Capacidad Total
            </h3>
            <p className="text-4xl font-bold text-primary mb-2">13 personas</p>
            <p className="text-muted-foreground">
              Todas las habitaciones cuentan con armario, escritorio, sillas y ventilador de techo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente individual de tarjeta con carrusel
function RoomCard({ room, index }: { room: any; index: number }) {
  const [currentImage, setCurrentImage] = useState(0);

  // Filtrar imágenes de esta habitación específica
  const roomImages = galleryImages.filter(
    (img) => img.category === room.name
  );

  // Rotación automática de imágenes cada 3 segundos
  useEffect(() => {
    if (roomImages.length > 1) {
      const timer = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % roomImages.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [roomImages.length]);

  return (
    <div
      className="group animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="bg-card rounded-xl overflow-hidden shadow-elegant hover:shadow-elegant-lg transition-all duration-300 border border-border/20">
        {/* Carrusel de imágenes */}
        <div className="relative aspect-video bg-muted">
          {roomImages.length > 0 ? (
            <>
              {roomImages.map((image, imgIndex) => (
                <div
                  key={image.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    imgIndex === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}

              {/* Indicadores de imagen */}
              {roomImages.length > 1 && (
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                  {roomImages.map((_, imgIndex) => (
                    <button
                      key={imgIndex}
                      onClick={() => setCurrentImage(imgIndex)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        imgIndex === currentImage
                          ? "bg-white w-6"
                          : "bg-white/50 w-1.5"
                      }`}
                      aria-label={`Ver imagen ${imgIndex + 1} de ${room.name}`}
                    />
                  ))}
                </div>
              )}

              {/* Overlay con nombre de la habitación */}
              <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm px-3 py-1 rounded-lg">
                <h3 className="text-sm font-bold text-primary-foreground">
                  {room.name}
                </h3>
              </div>
            </>
          ) : (
            // Fallback si no hay imágenes
            <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
              <div className="text-center">
                <Crown className="h-12 w-12 mx-auto mb-3 text-primary" />
                <h3 className="text-lg font-bold text-primary">{room.name}</h3>
              </div>
            </div>
          )}
        </div>

        {/* Contenido de la tarjeta */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-foreground">{room.name}</h3>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Users className="h-4 w-4" />
              <span className="text-sm">{room.capacity} personas</span>
            </div>
          </div>

          <p className="text-sm font-medium text-primary mb-3">{room.type}</p>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {room.description}
          </p>

          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Bed className="h-3 w-3" />
              <span>Camas individuales</span>
            </div>
            <div className="flex items-center space-x-1">
              <Wind className="h-3 w-3" />
              <span>Ventilador</span>
            </div>
          </div>

          {room.name === "JULIUS CAESAR" && (
            <div className="mt-3 p-2 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-xs text-green-700 dark:text-green-300 font-medium">
                ♿ Acceso para movilidad reducida
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
