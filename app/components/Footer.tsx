"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { propertyData } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent/20 border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de Contacto */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/dux-toledo-logo.png"
                alt="DUX TOLEDO"
                className="h-8 w-12 object-contain"
              />
              <Image
                src="/distintivo_4estrellas.png"
                alt="Casa Rural 4 Estrellas - Castilla-La Mancha"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <h3 className="text-lg font-semibold">DUX TOLEDO</h3>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{propertyData.location.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{propertyData.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{propertyData.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/bienvenida" className="hover:text-primary transition-colors">
                  Bienvenida
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="hover:text-primary transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="/calendario" className="hover:text-primary transition-colors">
                  Calendario
                </Link>
              </li>
              <li>
                <Link href="/tarifas" className="hover:text-primary transition-colors">
                  Tarifas
                </Link>
              </li>
              <li>
                <Link href="/condiciones" className="hover:text-primary transition-colors">
                  Condiciones
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Información Legal */}
          <div>
            <h4 className="font-semibold mb-4">Información Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/legal/aviso-legal" className="hover:text-primary transition-colors">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link href="/legal/privacidad" className="hover:text-primary transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/legal/politica-de-cookies" className="hover:text-primary transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
            <div className="mt-4 text-xs text-muted-foreground">
              <p>Nº Registro: 45012120399</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} DUX TOLEDO. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
