import { Calendar } from "lucide-react";
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

          {/* Calendario embed de Google */}
          <div className="rounded-lg overflow-hidden shadow-md mb-12">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=70206a6afbc1c86dc51e9ceb9ab923c713da59596a852d1243e5bb0029505a85%40group.calendar.google.com&ctz=Europe%2FMadrid"
              style={{ border: 0, width: '100%', height: 600 }}
              frameBorder="0"
              scrolling="no"
              title="Calendario de DUX TOLEDO"
            ></iframe>
          </div>

          {/* Servicios Incluidos - centrado */}
          <div className="flex justify-center mt-16">
            <div className="bg-card rounded-lg shadow-elegant p-6 w-full max-w-lg text-center">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                Servicios Incluidos
              </h3>
              <ul className="space-y-2 text-muted-foreground text-left inline-block text-base">
                <li>• Limpieza final incluida</li>
                <li>• Ropa de cama y toallas</li>
                <li>• WiFi de alta velocidad</li>
                <li>• Parking privado gratuito</li>
                <li>• Acceso completo a jardín y piscina</li>
                <li>• Uso de barbacoa y cocina exterior</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-accent/30 rounded-lg p-12">
            <h3 className="text-2xl font-bold text-primary mb-4">
              ¿Listo para tu Escapada a Toledo?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Una vez que hayas seleccionado tus fechas, contáctanos para finalizar tu reserva. 
              Te responderemos en menos de 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Contactar para Reservar
              </a>
              <a
                href="tel:+34 687 765 315"
                className="bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                Llamar 687 765 315
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
