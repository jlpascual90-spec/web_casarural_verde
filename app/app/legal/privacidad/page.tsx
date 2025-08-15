
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Política de Privacidad - DUX TOLEDO",
  description: "Política de privacidad de DUX TOLEDO, casa rural en Toledo",
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10">
      <div className="container mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Política de Privacidad</h1>
          
          <div className="bg-card rounded-lg p-8 shadow-sm space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">1. Responsable del Tratamiento</h2>
              <div className="bg-accent/20 p-4 rounded-lg">
                <ul className="space-y-2 text-card-foreground">
                  <li><strong>Responsable:</strong> María Elena Felpeto Santero</li>
                  <li><strong>NIF:</strong> 03875034V</li>
                  <li><strong>Domicilio:</strong> Bargas, Toledo</li>
                  <li><strong>Email:</strong> casarural@duxtoledo.com</li>
                  <li><strong>Teléfono:</strong> +34 687 765 315</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">2. Finalidad del Tratamiento</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Los datos personales que nos proporcione serán tratados para las siguientes finalidades:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Gestión de reservas y prestación de servicios de alojamiento</li>
                <li>Comunicación con los clientes y respuesta a sus consultas</li>
                <li>Cumplimiento de obligaciones legales y fiscales</li>
                <li>Envío de información comercial (previa autorización)</li>
                <li>Mejora de nuestros servicios</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">3. Legitimación</h2>
              <p className="text-muted-foreground leading-relaxed">
                El tratamiento de sus datos personales se basa en las siguientes bases jurídicas:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                <li><strong>Ejecución contractual:</strong> Para la gestión de reservas y prestación del servicio</li>
                <li><strong>Obligación legal:</strong> Para el cumplimiento de obligaciones fiscales y de registro de huéspedes</li>
                <li><strong>Consentimiento:</strong> Para el envío de comunicaciones comerciales</li>
                <li><strong>Interés legítimo:</strong> Para la mejora de nuestros servicios</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">4. Conservación de los Datos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Los datos personales se conservarán durante los siguientes plazos:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-4">
                <li>Datos de reserva: Durante la prestación del servicio y posteriormente durante 6 años para el cumplimiento de obligaciones fiscales</li>
                <li>Datos de registro de huéspedes: 3 años según la normativa de seguridad ciudadana</li>
                <li>Consentimientos para comunicaciones comerciales: Hasta que revoque su consentimiento</li>
                <li>Datos de contacto: Mientras mantenga relación comercial con nosotros</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">5. Destinatarios de los Datos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sus datos personales podrán ser comunicados a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Organismos públicos cuando exista una obligación legal</li>
                <li>Entidades financieras para la gestión de pagos</li>
                <li>Proveedores de servicios tecnológicos (hosting, mantenimiento web)</li>
                <li>Asesores fiscales y contables</li>
                <li>Fuerzas y Cuerpos de Seguridad del Estado cuando sea legalmente requerido</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">6. Derechos del Interesado</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Usted tiene derecho a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Acceso:</strong> Conocer qué datos tenemos sobre usted</li>
                <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
                <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos</li>
                <li><strong>Limitación:</strong> Restringir el tratamiento de sus datos</li>
                <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
                <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos</li>
                <li><strong>Revocación del consentimiento:</strong> Retirar su consentimiento en cualquier momento</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Para ejercer estos derechos, puede contactarnos en: <strong>casarural@duxtoledo.com</strong>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">7. Medidas de Seguridad</h2>
              <p className="text-muted-foreground leading-relaxed">
                Hemos adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad 
                de sus datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">8. Modificaciones</h2>
              <p className="text-muted-foreground leading-relaxed">
                Esta Política de Privacidad puede ser modificada. Le recomendamos revisar periódicamente 
                esta página para estar informado de los cambios.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">9. Autoridad de Control</h2>
              <p className="text-muted-foreground leading-relaxed">
                Si considera que el tratamiento de sus datos no se ajusta a la normativa, puede dirigir 
                una reclamación a la Agencia Española de Protección de Datos (www.aepd.es).
              </p>
            </section>

            <div className="mt-8 p-4 bg-accent/10 rounded-lg text-center">
              <p className="text-sm text-muted-foreground">
                Última actualización: {new Date().toLocaleDateString('es-ES', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
