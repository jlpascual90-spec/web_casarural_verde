"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Camera, Filter } from "lucide-react";
import { galleryImages } from "@/lib/data";
import { WatermarkLogo } from "@/components/WatermarkLogo";

const categories = [
  { id: 'all', label: 'Todas las fotos', count: galleryImages?.length || 0 },
  { id: 'exterior', label: 'Exteriores', count: galleryImages?.filter(img => img?.category === 'exterior')?.length || 0 },
  { id: 'interior', label: 'Interiores', count: galleryImages?.filter(img => img?.category === 'interior')?.length || 0 },
  { id: 'location', label: 'Toledo y alrededores', count: galleryImages?.filter(img => img?.category === 'location')?.length || 0 }
];

export default function GaleriaPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages?.filter(img => img?.category === selectedCategory) || [];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const newIndex = direction === 'prev' 
      ? (selectedImage - 1 + filteredImages.length) % filteredImages.length
      : (selectedImage + 1) % filteredImages.length;
    
    setSelectedImage(newIndex);
  };

  return (
    <div className="min-h-screen bg-background relative">
      <WatermarkLogo />
      {/* Imagen de portada */}
      <div className="w-full flex justify-center">
        <Image
          src="/images/piscina/69 DUX EXTERIORES.jpg"
          alt="Piscina DUX Toledo"
          width={1200}
          height={800}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          priority={true}
          className="rounded-lg object-cover max-h-[400px] w-full"
          style={{ objectPosition: "center" }}
        />

      </div>
      {/* Header */}
      <section className="bg-accent/30 dark:bg-accent/10 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Camera className="h-8 w-8 text-primary dark:text-primary-foreground" />
              <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-primary-foreground">
                Galería de Fotos
              </h1>
            </div>
            <p className="text-lg text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto">
              Explora cada rincón de DUX TOLEDO y descubre los magníficos paisajes de Toledo
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-background dark:bg-background sticky top-16 z-40 border-b border-border/20 dark:border-border/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center animate-slide-in-left">
            <div className="flex items-center space-x-2 bg-card dark:bg-card rounded-lg p-2 shadow-elegant border border-border/20 dark:border-border/40">
              <Filter className="h-4 w-4 text-muted-foreground dark:text-muted-foreground ml-2" />
              <div className="flex flex-wrap gap-1">
                {categories?.map((category) => (
                  <button
                    key={category?.id}
                    onClick={() => setSelectedCategory(category?.id || 'all')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category?.id
                        ? 'bg-primary text-primary-foreground shadow-md scale-105 font-semibold'
                        : 'text-muted-foreground dark:text-muted-foreground hover:text-primary dark:hover:text-primary-foreground hover:bg-accent dark:hover:bg-accent/20 hover:scale-102'
                    }`}
                  >
                    {category?.label} ({category?.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            key={selectedCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in"
          >
            {filteredImages?.map((image, index) => (
              <div
                key={image?.id}
                className="group relative aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-elegant hover:shadow-elegant-lg transition-all duration-300 cursor-pointer animate-slide-in-left"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => openLightbox(index)}
              >
                  <Image
                    src={image?.url || ""}
                    alt={image?.alt || "Imagen de la galería"}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium line-clamp-2">{image?.alt}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Camera className="h-4 w-4 text-white" />
                  </div>
                </div>
              ))}
            </div>

          {filteredImages?.length === 0 && (
            <div className="text-center py-20">
              <Camera className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
              <p className="text-muted-foreground">No hay imágenes en esta categoría.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center animate-fade-in"
          onClick={closeLightbox}
        >
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                aria-label="Cerrar galería"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image */}
              <div
                className="relative max-w-5xl max-h-full animate-fade-in"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                  <Image
                    src={filteredImages[selectedImage]?.url || ""}
                    alt={filteredImages[selectedImage]?.alt || "Imagen ampliada"}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="mt-4 text-center text-white">
                  <p className="text-lg font-medium mb-2">
                    {filteredImages[selectedImage]?.alt}
                  </p>
                  <p className="text-sm text-gray-300">
                    {selectedImage + 1} de {filteredImages?.length}
                  </p>
                </div>
              </div>
            </div>
        </div>
      )}
    </div>
  );
}
