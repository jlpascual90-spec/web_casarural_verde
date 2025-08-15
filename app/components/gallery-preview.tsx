
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";
import { galleryImages } from "@/lib/data";

const previewImages = galleryImages?.slice(0, 6) || [];

export function GalleryPreview() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Descubre Casa Rural El Olivar
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora cada rincón de nuestra casa rural y los paisajes únicos de Toledo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {previewImages?.map((image, index) => (
            <div
              key={image?.id}
              className="group relative aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-elegant hover:shadow-elegant-lg transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Image
                src={image?.url || ""}
                alt={image?.alt || "Imagen de la casa rural"}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
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

        <div className="text-center animate-slide-in-right">
          <Link
            href="/galeria"
            className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl group"
          >
            <span>Ver Galería Completa</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
