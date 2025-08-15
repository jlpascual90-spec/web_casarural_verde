
"use client";

import React from "react";
import Image from "next/image";
import { Users, Bed, Wind, Crown } from "lucide-react";
import { propertyData } from "@/lib/data";

export function RoomsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            DORMITORIOS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seis habitaciones inspiradas en los grandes emperadores romanos, equipadas con todas las comodidades modernas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertyData?.rooms?.map((room, index) => (
            <div key={room?.name} className="group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="bg-card rounded-xl overflow-hidden shadow-elegant hover:shadow-elegant-lg transition-all duration-300 border border-border/20">
                <div className="relative aspect-video bg-muted">
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <div className="text-center">
                      <Crown className="h-12 w-12 mx-auto mb-3 text-primary" />
                      <h3 className="text-lg font-bold text-primary">{room?.name}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground">{room?.name}</h3>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{room?.capacity} personas</span>
                    </div>
                  </div>
                  
                  <p className="text-sm font-medium text-primary mb-3">{room?.type}</p>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {room?.description}
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

                  {room?.name === "JULIUS CAESAR" && (
                    <div className="mt-3 p-2 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <p className="text-xs text-green-700 dark:text-green-300 font-medium">
                        ♿ Acceso para movilidad reducida
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
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
