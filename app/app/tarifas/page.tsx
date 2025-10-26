import { ArrowLeft, Clock, Calendar, Euro, Star, FileText } from "lucide-react";
import Link from "next/link";
import { WatermarkLogo } from "@/components/WatermarkLogo";

export const metadata = {
  title: "Tarifas - DUX TOLEDO",
  description: "Tarifas y precios de DUX TOLEDO, casa rural de lujo en Toledo",
};

export default function TarifasPage() {
  const packages = [
    {
      id: "2-dias",
      name: "Escapada de 2 Días",
      duration: "2 días / 1 noche",
      minStay: "Mínimo 2 noches",
      price: "800€",
      features: [
        "Check-in: 15:00 H",
        "Check-out: 16:00 H",
        "Toda la casa para su grupo",
        "Uso exclusivo de la piscina",
        "Parking privado",
        "WiFi gratuito"
      ],
      recommended: false
    },
    {
      id: "semana",
      name: "Estancia Semanal",
      duration: "7 días / 6 noches",
      minStay: "Estancia mínima semanal",
      price: "1.600€",
      features: [
        "Check-in: 15:00 H",
        "Check-out: 16:00 H Domingo",
        "Toda la casa para su grupo",
        "Uso exclusivo de la piscina",
        "Parking privado",
        "WiFi gratuito",
        "Limpieza intermedia incluida",
        "Descuento por estancia larga"
      ],
      recommended: true
    },
    {
      id: "quincena",
      name: "Estancia Quincenal",
      duration: "15 días / 14 noches",
      minStay: "Estancia mínima quincenal",
      price: "3.000€",
      features: [
        "Check-in: 15:00 H",
        "Check-out: 16:00 H Domingo",
        "Toda la casa para su grupo",
        "Uso exclusivo de la piscina",
        "Parking privado",
        "WiFi gratuito",
        "Limpieza semanal incluida",
        "Máximo descuento aplicado",
        "Atención personalizada"
      ],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 relative">
      <WatermarkLogo />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Tarifas y Paquetes</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre nuestros paquetes de alojamiento diseñados para ofrecerte 
              la mejor experiencia en DUX TOLEDO
            </p>
          </div>

          {/* Paquetes de Tarifas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-card rounded-lg p-6 shadow-sm border transition-all duration-200 hover:shadow-md ${
                  pkg.recommended 
                    ? "ring-2 ring-primary scale-105" 
                    : ""
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      Recomendado
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{pkg.duration}</p>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-sm text-muted-foreground">{pkg.minStay}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contacto"
                  className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors font-medium text-center block"
                >
                  Solicitar Información
                </Link>
              </div>
            ))}
          </div>

          {/* Información Adicional */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Horarios</h3>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Check-in:</span>
                  <span className="font-medium"> L a S a partir de las 15:00 H / D a partir de las 19:30 H </span>
                </div>
                <div className="flex justify-between">
                  <span>Check-out:</span>
                  <span className="font-medium"> L a S hasta las 11:00 / D hasta las 16:00 H </span>
                </div>
                <div className="flex justify-between">
                  <span>Estancia mínima:</span>
                  <span className="font-medium">2 noches</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Tarifas Especiales</h3>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong>Festivos y Puentes:</strong> Se aplican tarifas especiales 
                  para días festivos, puentes y fines de semana que incluyan días festivos.
                </p>
              </div>
            </div>
          </div>

          {/* Política de Reservas */}
          <div className="bg-card rounded-lg p-6 shadow-sm mt-8 border-2 border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Condiciones de Reserva</h3>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                Para realizar una reserva, contacte con nosotros a través de nuestra web 
                o llamando al <strong className="text-primary">687 765 315</strong>. 
                Se requiere una fianza de <strong>200€</strong> para confirmar la disponibilidad.
              </p>
              <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                <p className="text-foreground font-medium mb-2">
                  📋 Información importante sobre reservas, cancelaciones y normas de la casa:
                </p>
                <Link
                  href="/condiciones-alquiler-normas"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
                >
                  <FileText className="h-4 w-4" />
                  Ver Condiciones de Alquiler y Normas Completas
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </Link>
              </div>
              <p className="text-xs italic">
                La formalización de la reserva implica la aceptación de todas las condiciones 
                y normas establecidas en el documento de condiciones de alquiler.
              </p>
            </div>
          </div>

          {/* Qué Incluye */}
          <div className="mt-12 bg-accent/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-8">
              Qué Incluye Cada Paquete
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Euro className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Casa Completa</h4>
                <p className="text-sm text-muted-foreground">
                  Uso exclusivo de toda la propiedad para su grupo
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-primary rounded-full opacity-60"></div>
                </div>
                <h4 className="font-semibold mb-2">Piscina Privada</h4>
                <p className="text-sm text-muted-foreground">
                  Piscina vallada de uso exclusivo
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-4 bg-primary rounded opacity-60"></div>
                </div>
                <h4 className="font-semibold mb-2">Parking</h4>
                <p className="text-sm text-muted-foreground">
                  Aparcamiento privado incluido
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 border-2 border-primary rounded opacity-60"></div>
                </div>
                <h4 className="font-semibold mb-2">Servicios</h4>
                <p className="text-sm text-muted-foreground">
                  WiFi, limpieza y todas las comodidades
                </p>
              </div>
            </div>
          </div>

          {/* Contacto para Reservas */}
          <div className="mt-12 text-center">
            <div className="bg-primary/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">¿Listo para Reservar?</h3>
              <p className="text-muted-foreground mb-6">
                Contacta con nosotros para obtener información detallada sobre precios 
                y disponibilidad para tus fechas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Solicitar Información
                </Link>
                <Link
                  href="/calendario"
                  className="border border-border px-6 py-3 rounded-lg hover:bg-accent transition-colors font-medium"
                >
                  Ver Calendario
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
