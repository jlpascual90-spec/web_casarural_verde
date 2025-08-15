
import { Phone, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { propertyData } from "@/lib/data";
import { WatermarkLogo } from "@/components/WatermarkLogo";

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-background py-20 relative">
      <WatermarkLogo />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Phone className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Contacto
            </h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para hacer realidad tu escapada perfecta a Toledo. 
            Contáctanos para reservas, consultas o cualquier información que necesites.
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm />

        {/* Map Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Nuestra Ubicación
          </h2>
          <div className="bg-card rounded-lg shadow-elegant overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Map Placeholder */}
              <div className="bg-accent/20 p-8 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    DUX TOLEDO
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {propertyData?.location?.address}
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${propertyData?.location?.coordinates?.lat},${propertyData?.location?.coordinates?.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <MapPin className="h-5 w-5" />
                    <span>Ver en Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Location Details */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-6">
                  Cómo Llegar
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">En Coche</h4>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Desde Madrid: A-42 dirección Toledo (1 hora)</li>
                      <li>• Desde Sevilla: A-4 hasta Toledo (3.5 horas)</li>
                      <li>• Desde Valencia: A-3 hasta Madrid, luego A-42 (3 horas)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Transporte Público</h4>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• AVE Madrid-Toledo: 33 minutos</li>
                      <li>• Autobús desde Madrid: 1.5 horas</li>
                      <li>• Taxi desde estación: 15 minutos</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-card-foreground mb-2">Aeropuertos Cercanos</h4>
                    <ul className="text-muted-foreground space-y-1 text-sm">
                      <li>• Madrid-Barajas: 1.5 horas en coche</li>
                      <li>• Madrid-Cuatro Vientos: 1 hora en coche</li>
                    </ul>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
