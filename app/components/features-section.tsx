
"use client";

import { 
  Crown, 
  Car, 
  Utensils, 
  Waves, 
  Thermometer, 
  ChefHat, 
  Gamepad2, 
  Shield,
  Accessibility,
  BookOpen,
  MapPin
} from "lucide-react";
import { propertyData } from "@/lib/data";

const featureIcons = {
  "6 habitaciones con nombres romanos": Crown,
  "Piscina de 8x4 metros vallada": Waves,
  "Cocina completamente equipada en CASTRUM": Utensils,
  "3 baños completos (LAVATRINA)": Shield,
  "Sistema de climatización aerotermia": Thermometer,
  "Barbacoa y cocina exterior": ChefHat,
  "Ajedrez gigante y mesa de ping pong": Gamepad2,
  "Acceso para movilidad reducida": Accessibility,
  "Biblioteca y juegos de mesa": BookOpen,
  "Parking privado": Car,
  "A 12 minutos de Toledo centro": MapPin
} as const;

export function FeaturesSection() {
  return (
    <section className="py-20 bg-accent/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Características de DUX TOLEDO
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Casa rural de lujo con todas las comodidades en el corazón de las Tres Culturas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {propertyData?.features?.map((feature, index) => {
            const IconComponent = featureIcons[feature as keyof typeof featureIcons] || Shield;
            
            return (
              <div
                key={feature}
                className="bg-card rounded-lg p-6 shadow-elegant hover:shadow-elegant-lg transition-all duration-300 hover:scale-105 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">
                    {feature}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center animate-fade-in">
          <div className="bg-card rounded-lg p-8 shadow-elegant">
            <div className="text-3xl font-bold text-primary mb-2 animate-counter">
              13
            </div>
            <p className="text-muted-foreground">Capacidad máxima</p>
          </div>
          <div className="bg-card rounded-lg p-8 shadow-elegant">
            <div className="text-3xl font-bold text-primary mb-2 animate-counter">
              12 min
            </div>
            <p className="text-muted-foreground">A Toledo centro</p>
          </div>
          <div className="bg-card rounded-lg p-8 shadow-elegant">
            <div className="text-3xl font-bold text-primary mb-2 animate-counter">
              65 m²
            </div>
            <p className="text-muted-foreground">CASTRUM principal</p>
          </div>
          <div className="bg-card rounded-lg p-8 shadow-elegant">
            <div className="text-3xl font-bold text-primary mb-2 animate-counter">
              8x4 m
            </div>
            <p className="text-muted-foreground">Piscina vallada</p>
          </div>
        </div>
      </div>
    </section>
  );
}
