import { Calendar, Star } from "lucide-react";
import Link from "next/link";
import { WatermarkLogo } from "@/components/WatermarkLogo";

export const metadata = {
  title: "Calendario - DUX TOLEDO",
  description: "Consulta la disponibilidad de DUX TOLEDO, casa rural de lujo en Toledo",
};

export default function CalendarioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 relative">
      <WatermarkLogo />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <Calendar className="h-4 w-4" />
          Volver al inicio
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Calendario y Disponibilidad</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Consulta en el siguiente calendario la disponibilidad de DUX TOLEDO.
            </p>
          </div>

          {/* Calendario embed (puedes sustituir este iframe por tu propio calendario o integración) */}
          <div className="rounded-lg overflow-hidden shadow-md mb-12">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=casaejemplo%40gmail.com&ctz=Europe%2FMadrid"
              style={{ border: 0, width: '100%', height: 600 }}
              frameBorder="0"
              scrolling="no"
              title="Calendario de DUX TOLEDO"
            ></iframe>
          </div>

          {/* Si tienes otra tarjeta de información adicional, colócala aquí */}
        </div>
      </div>
    </div>
  );
}
