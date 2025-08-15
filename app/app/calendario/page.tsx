

import { Calendar } from "lucide-react";
import { CalendarComponent } from "@/components/calendar-component";
import { WatermarkLogo } from "@/components/WatermarkLogo";

export default function CalendarioPage() {
  return (
    <div className="min-h-screen bg-background py-20 relative">
      <WatermarkLogo />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Calendar className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Calendario de Reservas
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Consulta la disponibilidad y precios de DUX TOLEDO. 
            Selecciona tus fechas para ver el coste total de tu estancia.
          </p>
        </div>

        {/* Calendar Component */}
        <CalendarComponent />

        {/* Additional Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg shadow-elegant p-6">
            <h3 className="text-xl font-semibold text-card-foreground mb-4">
              Política de Reservas
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Reserva mínima de 2 noches</li>
              <li>• Check-in: 16:00 - 20:00</li>
              <li>• Check-out: 08:00 - 12:00</li>
              <li>• Cancelación gratuita hasta 48h antes</li>
              <li>• Seña del 30% para confirmar reserva</li>
              <li>• Mascotas bienvenidas (consultar condiciones)</li>
            </ul>
          </div>

          <div className="bg-card rounded-lg shadow-elegant p-6">
            <h3 className="text-xl font-semibold text-card-foreground mb-4">
              Servicios Incluidos
            </h3>
            <ul className="space-y-2 text-muted-foreground">
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
              Llamar Ahora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
