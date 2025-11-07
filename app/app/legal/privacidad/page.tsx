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
              <h2 className="text-xl font-semibold mb-4 text-primary">Responsable del Tratamiento</h2>
              <div className="bg-accent/20 p-4 rounded-lg">
                <ul className="space-y-2 text-card-foreground">
                  <li><strong>Responsable:</strong> María Elena Felpeto Santero</li>
                  <li><strong>NIF:</strong> 03875034V</li>
                  <li><strong>Domicilio:</strong> Calle Matemáticas, 1 - Olías Del Rey - 45280 (Toledo)</li>
                  <li><strong>Email:</strong> casarural@duxtoledo.com</li>
                  <li><strong>Teléfono:</strong> +34 687 765 315</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">Finalidad y Legitimación</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Los datos personales que se recaban serán tratados con la finalidad de gestionar las 
                reservas, la facturación, la atención a los clientes y el cumplimiento de las obligaciones 
                legales derivadas de la relación contractual.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La base jurídica que legitima este tratamiento es:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <strong>La ejecución de un contrato</strong> (art. 6.1.b RGPD), en relación con la reserva 
                  y prestación de servicios de alojamiento.
                </li>
                <li>
                  <strong>El cumplimiento de obligaciones legales</strong> (art. 6.1.c RGPD), especialmente 
                  las relacionadas con normativa fiscal, contable y de registro de viajeros (Real Decreto 
                  933/2021, de 26 de octubre).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">Destinatarios</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Los datos podrán ser comunicados a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <strong>Fuerzas y Cuerpos de Seguridad del Estado</strong>, en cumplimiento del RD 933/2021, 
                  mediante los sistemas habilitados por el Ministerio del Interior.
                </li>
                <li>
                  <strong>La Administración Tributaria y otras autoridades competentes</strong>, cuando sea 
                  legalmente exigible.
                </li>
                <li>
                  <strong>Entidades bancarias</strong>, para la gestión de cobros y pagos.
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                No se prevén cesiones de datos a terceros distintos de los mencionados, ni se realizan 
                transferencias internacionales de datos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">Plazos de Conservación</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Los datos personales se conservarán durante:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Mientras dure la relación contractual y sea necesario para la prestación del servicio.
                </li>
                <li>
                  Posteriormente, se conservarán durante los plazos exigidos por la normativa fiscal y 
                  contable (generalmente 5 a 6 años desde la finalización de la relación).
                </li>
                <li>
                  3 años desde el registro de entrada de los viajeros, conforme al art. 7.2 del RD 933/2021.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">Derechos de las Personas Interesadas</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Podrá ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación del 
                tratamiento y portabilidad de sus datos, enviando una solicitud por escrito a la dirección 
                postal o electrónica indicada del responsable.
              </p>
              <div className="bg-accent/20 p-4 rounded-lg">
                <p className="text-card-foreground">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:casarural@duxtoledo.com" className="text-primary hover:underline">
                    casarural@duxtoledo.com
                  </a>
                </p>
                <p className="text-card-foreground mt-2">
                  <strong>Dirección postal:</strong> Calle Matemáticas, 1 - Olías Del Rey - 45280 (Toledo)
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Asimismo, tiene derecho a presentar una reclamación ante la{" "}
                <a 
                  href="https://www.aepd.es" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Agencia Española de Protección de Datos
                </a>{" "}
                (www.aepd.es) si considera que el tratamiento de sus datos no se ajusta a la normativa vigente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">Transferencias Internacionales</h2>
              <p className="text-muted-foreground leading-relaxed">
                No se realizan transferencias internacionales de datos fuera del Espacio Económico Europeo.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">Medidas de Seguridad</h2>
              <p className="text-muted-foreground leading-relaxed">
                Hemos adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad 
                de sus datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, 
                de acuerdo con lo establecido en el Reglamento General de Protección de Datos (RGPD) y la 
                normativa española aplicable.
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
