"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Clock, Car, Castle } from "lucide-react";
import { galleryImages } from "@/lib/data";

export function LocationSection() {
  const locationImages =
    galleryImages?.filter((img) => img?.category === "location") || [];

  return (
    <section className="py-20 bg-accent/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            UBICACIÓN PRIVILEGIADA
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            DUX TOLEDO en Olías del Rey - Tu puerta de entrada a la Ciudad de
            las Tres Culturas
          </p>
        </div>

        {/* Ubicación principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <MapPin className="h-6 w-6 text-primary mr-3" />
              BIEN UBICADA
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              La casa está situada en una zona tranquila con acceso directo a la
              ciudad de Toledo a doce minutos del centro histórico y de
              cualquiera de los aparcamientos públicos situados en las dos
              escaleras mecánicas que le permiten acceder cómodamente a la
              plaza de Zocodover o a San Juan de los Reyes.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">12 minutos al centro histórico</p>
                  <p className="text-sm text-muted-foreground">
                    Acceso directo sin complicaciones
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg">
                <Castle className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">
                    Plaza Zocodover y San Juan de los Reyes
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Escaleras mecánicas públicas
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-primary/5 rounded-lg">
                <Car className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-semibold">
                    Mejor acceso que desde la propia Toledo
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Parking garantizado en la casa
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="grid grid-cols-1 gap-4">
              {locationImages?.slice(0, 2)?.map((image) => (
                <div
                  key={image?.id}
                  className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden"
                >
                  <Image
                    src={image?.url || ""}
                    alt={image?.alt || "Toledo"}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mapa o imagen final */}
        {locationImages?.length > 2 && (
          <div className="text-center">
            <div className="relative aspect-video max-w-4xl mx-auto bg-gray-200 rounded-xl overflow-hidden">
              <Image
                src={locationImages[2]?.url || ""}
                alt={locationImages[2]?.alt || "Entorno de DUX TOLEDO"}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="h-12 w-12 mx-auto mb-4" />
                  <p className="text-2xl font-bold">DUX TOLEDO</p>
                  <p className="text-lg">Olías del Rey, Toledo</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
