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
              <h2 className="text-xl font-semibold mb-4 text-primary">Datos Identificativos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, 
                de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), 
                el propietario de la web https://duxtoledo.com, le informa de lo siguiente:
              </p>
              <div className="mt-4 bg-accent/20 p-4 rounded-lg">
                <ul className="space-y-2 text-card-foreground">
                  <li><strong>Denominación social:</strong> María Elena Felpeto Santero</li>
                  <li><strong>NIF:</strong> 03875034V</li>
                  <li><strong>Domicilio:</strong> C/ San Cipriano, 1 Bajo E, 45593 - Bargas (Toledo)</li>
                  <li><strong>Email:</strong> casarural@duxtoledo.com</li>
                  <li><strong>Teléfono:</strong> +34 687 765 315</li>
                  <li><strong>Autorización administrativa:</strong> Número de inscripción: 45012120175</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">Responsabilidad sobre los Contenidos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Con los límites establecidos en la ley, https://duxtoledo.com no asume ninguna responsabilidad 
                derivada de la falta de veracidad, integridad, actualización y precisión de los datos o 
                informaciones que se contienen en sus páginas de Internet.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Los contenidos e información no vinculan a https://duxtoledo.com ni constituyen opiniones, 
                consejos o asesoramiento legal de ningún tipo pues se trata meramente de un servicio ofrecido 
                con carácter informativo y divulgativo.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">Enlaces a Terceros</h2>
              <p className="text-muted-foreground leading-relaxed">
                Las páginas de Internet de https://duxtoledo.com pueden contener enlaces (links) a otras 
                páginas de terceras partes que https://duxtoledo.com no puede controlar. Por lo tanto, 
                https://duxtoledo.com no puede asumir responsabilidades por el contenido que pueda aparecer 
                en páginas de terceros.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">Propiedad Intelectual e Industrial</h2>
              <p className="text-muted-foreground leading-relaxed">
                Los textos, imágenes, sonidos, animaciones, software y el resto de contenidos incluidos en 
                este website son propiedad exclusiva de https://duxtoledo.com o sus licenciantes. Cualquier 
                acto de transmisión, distribución, cesión, reproducción, almacenamiento o comunicación pública 
                total o parcial, debe contar con el consentimiento expreso de https://duxtoledo.com.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">Protección de Datos Personales</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Asimismo, para acceder a algunos de los servicios que https://duxtoledo.com ofrece a través 
                del website deberá proporcionar algunos datos de carácter personal. En cumplimiento de lo 
                establecido en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de 
                abril de 2016, relativo a la protección de las personas físicas en lo que respecta al 
                tratamiento de datos personales y a la libre circulación de estos datos le informamos que, 
                mediante la cumplimentación de los presentes formularios, sus datos personales quedarán 
                incorporados y serán tratados en los ficheros de María Elena Felpeto Santero con el fin de 
                poderle prestar y ofrecer nuestros servicios así como para informarle de las mejoras del sitio Web.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Asimismo, le informamos de la posibilidad de que ejerza los derechos de acceso, rectificación, 
                cancelación y oposición de sus datos de carácter personal, de manera gratuita mediante email a{" "}
                <a href="mailto:casarural@duxtoledo.com" className="text-primary hover:underline">
                  casarural@duxtoledo.com
                </a>{" "}
                o en la dirección C/ San Cipriano, 1 Bajo E, 45593 - Bargas (Toledo).
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
