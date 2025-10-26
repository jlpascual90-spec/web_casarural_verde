"use client";

import React from "react";
import Image from "next/image";
import { 
  ChefHat, 
  Tv, 
  Gamepad2, 
  BookOpen, 
  Waves, 
  Sun, 
  Car,
  Bath,
  Accessibility
} from "lucide-react";
import { propertyData, galleryImages } from "@/lib/data";

// Carrusel simple reutilizable
function ImageCarousel({
  images,
  altFallback,
  heightClass = "aspect-video",
  autoMs = 3000,
}: {
  images: { id: number; url: string; alt?: string }[];
  altFallback: string;
  heightClass?: string;
  autoMs?: number;
}) {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!images?.length) return;
    const t = setInterval(() => {
      setCurrent((p) => (p + 1) % images.length);
    }, autoMs);
    return () => clearInterval(t);
  }, [images?.length, autoMs]);

  if (!images?.length) {
    return (
      <div className={`relative ${heightClass} bg-gray-200 rounded-lg overflow-hidden`} />
    );
  }

  return (
    <div className={`relative ${heightClass} bg-gray-200 rounded-lg overflow-hidden`}>
      {images.map((img, i) => (
        <div
          key={img.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img.url}
            alt={img.alt || altFallback}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={i === 0}
          />
        </div>
      ))}
      {/* Indicadores */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`Ver imagen ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === current ? "bg-white w-6" : "bg-white/60 w-1.5"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function SpacesSection() {
  const poolImages =
    galleryImages?.filter((img) => img?.category === "piscina")?.slice(0, 2) ||
    [];
  const exteriorImages =
    galleryImages?.filter((img) => img?.category === "exterior")?.slice(0, 2) ||
    [];

  // Importante: categorías en mayúsculas tal como están en data.ts
  const castrumImages =
    galleryImages?.filter((img) => img?.category === "CASTRUM") || [];
  const lavatrinaImages =
    galleryImages?.filter((img) => img?.category === "LAVATRINA") || [];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            ESPACIOS DE DUX TOLEDO
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubre todos los rincones de nuestra casa rural de lujo
          </p>
        </div>

        {/* PISCINA */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <Waves className="h-6 w-6 text-primary mr-3" />
                PISCINA
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {propertyData?.spaces?.piscina?.description}
              </p>
              <div className="mt-6 flex items-center space-x-4 text-sm text-primary">
                <span className="bg-primary/10 px-3 py-1 rounded-full">8 x 4 metros</span>
                <span className="bg-primary/10 px-3 py-1 rounded-full">Vallado completo</span>
                <span className="bg-primary/10 px-3 py-1 rounded-full">Seguridad niños</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
              {poolImages?.map((image) => (
                <div
                  key={image?.id}
                  className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden"
                >
                  <Image
                    src={image?.url || ""}
                    alt={image?.alt || "Piscina"}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* EXTERIOR */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 animate-slide-in-right">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <Sun className="h-6 w-6 text-primary mr-3" />
                EXTERIOR
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {propertyData?.spaces?.exterior?.description}
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <ChefHat className="h-4 w-4 text-primary" />
                  <span>Barbacoa y cocina exterior equipada</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Gamepad2 className="h-4 w-4 text-primary" />
                  <span>Ajedrez gigante de exterior</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Car className="h-4 w-4 text-primary" />
                  <span>Mesa de ping pong</span>
                </div>
              </div>
            </div>
            <div className="lg:order-1 grid grid-cols-2 gap-4 animate-slide-in-left">
              {exteriorImages?.map((image) => (
                <div
                  key={image?.id}
                  className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden"
                >
                  <Image
                    src={image?.url || ""}
                    alt={image?.alt || "Exterior"}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CASTRUM */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <ChefHat className="h-6 w-6 text-primary mr-3" />
                CASTRUM
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {propertyData?.spaces?.castrum?.description}
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>65 m² de espacio</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Cocina equipada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Mesa gran comedor</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Zona de TV</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span>Biblioteca completa</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Gamepad2 className="h-4 w-4 text-primary" />
                  <span>Juegos de mesa</span>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <ImageCarousel
                images={castrumImages}
                altFallback="CASTRUM"
                heightClass="aspect-video"
                autoMs={3500}
              />
            </div>
          </div>
        </div>

        {/* LAVATRINA */}
        <div className="mb-12">
          <div className="bg-card rounded-xl p-8 shadow-elegant border border-border/20">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
              <Bath className="h-6 w-6 text-primary mr-3" />
              LAVATRINA
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {propertyData?.spaces?.lavatrina?.description}
            </p>

            {/* Carrusel LAVATRINA */}
            <div className="mb-8">
              <ImageCarousel
                images={lavatrinaImages}
                altFallback="LAVATRINA"
                heightClass="aspect-video"
                autoMs={3000}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Bath className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h4 className="font-semibold mb-1">3 Baños Completos</h4>
                <p className="text-sm text-muted-foreground">Lavabo, inodoro y ducha</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="h-8 w-8 mx-auto mb-2 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                </div>
                <h4 className="font-semibold mb-1">Suelo Continuo</h4>
                <p className="text-sm text-muted-foreground">Platos de ducha modernos</p>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <Accessibility className="h-8 w-8 mx-auto mb-2 text-green-600 dark:text-green-400" />
                <h4 className="font-semibold mb-1 text-green-700 dark:text-green-300">LAVATRINA II</h4>
                <p className="text-sm text-green-600 dark:text-green-400">Acceso movilidad reducida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
