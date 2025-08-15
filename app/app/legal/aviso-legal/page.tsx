
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Aviso Legal - DUX TOLEDO",
  description: "Aviso legal de DUX TOLEDO, casa rural en Toledo",
};

export default function AvisoLegalPage() {
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
          <h1 className="text-3xl font-bold text-center mb-8">Aviso Legal</h1>
          
          <div className="bg-card rounded-lg p-8 shadow-sm space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">1. Datos Identificativos</h2>
              <p className="text-muted-foreground leading-relaxed">
                En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, 
                de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, 
                a continuación se reflejan los siguientes datos:
              </p>
              <div className="mt-4 bg-accent/20 p-4 rounded-lg">
                <ul className="space-y-2 text-card-foreground">
                  <li><strong>Titular:</strong> María Elena Felpeto Santero</li>
                  <li><strong>NIF:</strong> 03875034V</li>
                  <li><strong>Domicilio:</strong> Bargas, Toledo</li>
                  <li><strong>Email:</strong> casarural@duxtoledo.com</li>
                  <li><strong>Teléfono:</strong> +34 687 765 315</li>
                  <li><strong>Número de Inscripción:</strong> 45012120175 DUX TOLEDO</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">2. Objeto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Este sitio web tiene por objeto facilitar al público el conocimiento de las actividades 
                que esta organización realiza y de los servicios que presta, en particular el servicio 
                de alojamiento de turismo rural.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">3. Condiciones de Uso</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                El acceso y uso de este sitio web se somete a las presentes "Condiciones Generales de Uso". 
                La utilización del sitio web implica la aceptación plena y sin reservas de todas y cada una 
                de las disposiciones incluidas en este Aviso Legal.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>El acceso a este sitio web es responsabilidad exclusiva de los usuarios.</li>
                <li>El simple acceso a este sitio web no supone entablar una relación comercial.</li>
                <li>El usuario se compromete a utilizar el sitio web de conformidad con la ley.</li>
                <li>El usuario se compromete a no utilizar el sitio web para actividades contrarias a la ley, la moral y las buenas costumbres.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">4. Responsabilidad</h2>
              <p className="text-muted-foreground leading-relaxed">
                DUX TOLEDO no se hace responsable de los daños y perjuicios de toda naturaleza que 
                pudieran traer causa de la disponibilidad y continuidad técnica del funcionamiento 
                del sitio web y/o de sus servicios; de la defraudación de la utilidad que los usuarios 
                hubieren podido atribuir al sitio web y/o a sus servicios; de la falibilidad del sitio 
                web y/o sus servicios; en particular, aunque no de modo exclusivo, de los fallos en 
                el acceso a las distintas páginas web o en su funcionamiento.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">5. Propiedad Intelectual</h2>
              <p className="text-muted-foreground leading-relaxed">
                DUX TOLEDO es titular de los derechos de propiedad intelectual e industrial de su página 
                web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, 
                sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, 
                estructura y diseño, selección de materiales usados, programas de ordenador necesarios 
                para su funcionamiento, acceso y uso, etc.), titularidad de DUX TOLEDO o bien de sus licenciantes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">6. Modificación del Presente Aviso Legal</h2>
              <p className="text-muted-foreground leading-relaxed">
                DUX TOLEDO se reserva el derecho de efectuar sin previo aviso las modificaciones que 
                considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos 
                y servicios que se presten a través de la misma como la forma en la que éstos aparezcan 
                presentados o localizados en su portal.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">7. Legislación Aplicable</h2>
              <p className="text-muted-foreground leading-relaxed">
                La relación entre DUX TOLEDO y el Usuario se regirá por la normativa española vigente 
                y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Toledo.
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
