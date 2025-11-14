import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { WatermarkLogo } from "@/components/WatermarkLogo";

export const metadata = {
  title: "Política de Privacidad - DUX TOLEDO",
  description:
    "Política de privacidad de DUX TOLEDO: información sobre protección de datos personales, finalidades, legitimación, destinatarios y derechos.",
};

export default function PrivacidadPage() {
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

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Política de Privacidad
          </h1>

          <article className="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-24">
            <p>
              <strong>Responsable:</strong> María Elena Felpeto Santero
              <br />
              <strong>Sitio web:</strong>{" "}
              <a href="https://duxtoledo.com" target="_blank" rel="noopener noreferrer">
                https://duxtoledo.com
              </a>
              <br />
              <strong>Email de contacto:</strong>{" "}
              <a href="mailto:casarural@duxtoledo.com">casarural@duxtoledo.com</a>
              <br />
              <strong>Dirección:</strong> Calle Cerro Tarra, 28, C.P. 45593 - Bargas (Toledo)
            </p>

            <h2>Protección de datos de carácter personal según el RGPD</h2>
            <p>
              En aplicación de la normativa vigente en materia de protección de datos de carácter
              personal, se informa de que los datos personales que se recogen a través de los
              formularios del Sitio Web <em>duxtoledo.com</em> se incluyen en ficheros
              automatizados específicos de usuarios de los servicios de María Elena Felpeto Santero.
            </p>
            <p>
              La recogida y tratamiento automatizado de los datos de carácter personal tiene como
              finalidad el mantenimiento de la relación comercial y el desempeño de tareas de
              información, formación, asesoramiento y otras actividades propias de María Elena
              Felpeto Santero. Estos datos únicamente serán cedidos a aquellas entidades que sean
              necesarias con el único objetivo de dar cumplimiento a la finalidad anteriormente
              expuesta.
            </p>
            <p>
              Se adoptan las medidas necesarias para garantizar la seguridad, integridad y
              confidencialidad de los datos conforme al Reglamento (UE) 2016/679 del Parlamento
              Europeo y del Consejo, de 27 de abril de 2016.
            </p>
            <p>
              El usuario podrá en cualquier momento ejercitar los derechos de acceso, oposición,
              rectificación, cancelación, limitación y portabilidad. El ejercicio de estos derechos
              podrá realizarse a través del correo electrónico{" "}
              <a href="mailto:casarural@duxtoledo.com">casarural@duxtoledo.com</a> o en la
              dirección indicada más arriba. El usuario manifiesta que todos los datos facilitados
              son ciertos y correctos, y se compromete a mantenerlos actualizados.
            </p>

            <h2>Finalidad del tratamiento de los datos personales</h2>
            <p>En <strong>duxtoledo.com</strong> trataremos tus datos con las siguientes finalidades:</p>
            <ul>
              <li>Prestar los servicios contratados por el usuario.</li>
              <li>Enviar información promocional vía electrónica.</li>
              <li>Facilitar la información solicitada a través del formulario de contacto.</li>
            </ul>
            <p>
              Puedes oponerte en cualquier momento al envío de comunicaciones comerciales
              remitiendo un correo a <a href="mailto:casarural@duxtoledo.com">casarural@duxtoledo.com</a>.
            </p>

            <h2>Plazo de conservación</h2>
            <p>
              Los datos personales proporcionados se conservarán mientras se mantenga la relación
              comercial o no se solicite su supresión y durante los plazos necesarios para cumplir
              obligaciones legales derivadas de los servicios prestados.
            </p>

            <h2>Legitimación</h2>
            <ul>
              <li>
                La solicitud de información y/o la contratación de los servicios de María Elena
                Felpeto Santero, cuyos términos y condiciones se pondrán a disposición con carácter
                previo a la contratación.
              </li>
              <li>
                El consentimiento libre, específico, informado e inequívoco, manifestado mediante
                una clara acción afirmativa (p. ej., el marcado de casillas habilitadas al efecto).
              </li>
            </ul>
            <p>
              Si no facilitas tus datos o lo haces de forma errónea o incompleta, no podremos
              atender tu solicitud o llevar a cabo la contratación de los servicios.
            </p>

            <h2>Destinatarios</h2>
            <p>
              Los datos no se comunicarán a terceros ajenos a María Elena Felpeto Santero, salvo
              obligación legal o cuando sea necesario para cumplir las finalidades indicadas.
            </p>

            <h2>Datos aportados por usuarios de los servicios</h2>
            <p>
              En los casos en que el usuario incluya ficheros con datos personales en servidores
              de alojamiento compartido, María Elena Felpeto Santero no se hace responsable del
              incumplimiento del RGPD por parte del usuario.
            </p>

            <h2>Derechos de propiedad intelectual del sitio</h2>
            <p>
              María Elena Felpeto Santero es titular de todos los derechos de autor, propiedad
              intelectual e industrial relacionados con los contenidos del sitio web{" "}
              <em>duxtoledo.com</em> y los servicios ofertados, así como de los programas necesarios
              para su implementación y la información relacionada. No se permite la reproducción ni
              uso no estrictamente privado de los contenidos, totales o parciales, sin
              consentimiento previo y por escrito.
            </p>

            <h2>Propiedad intelectual del software</h2>
            <p>
              El usuario debe respetar los programas de terceros puestos a su disposición, aún
              siendo gratuitos y/o de disposición pública. El usuario no adquiere derecho alguno o
              licencia sobre el software necesario para la prestación del servicio ni sobre la
              información técnica de seguimiento, salvo lo imprescindible para el cumplimiento de los
              servicios contratados y únicamente durante su duración.
            </p>
            <p>
              Queda prohibido acceder, modificar o visualizar la configuración, estructura y ficheros
              de los servidores propiedad de María Elena Felpeto Santero sin autorización por escrito.
            </p>

            <h2>Propiedad intelectual de los contenidos alojados</h2>
            <p>Se prohíbe el uso contrario a la legislación de propiedad intelectual, en particular:</p>
            <ul>
              <li>La utilización contraria a las leyes españolas o que infrinja derechos de terceros.</li>
              <li>La publicación o transmisión de contenidos violentos, obscenos, abusivos, ilegales, raciales, xenófobos o difamatorios.</li>
              <li>La difusión de cracks, números de serie u otros contenidos que vulneren derechos de propiedad intelectual.</li>
              <li>
                La recogida y/o utilización de datos personales de otros usuarios sin su
                consentimiento expreso o contraviniendo el Reglamento (UE) 2016/679.
              </li>
              <li>El uso del servidor de correo para envío de correo masivo no deseado.</li>
            </ul>

            <h2>Responsabilidad del usuario</h2>
            <p>
              El usuario es responsable del contenido de su web, la información transmitida y
              almacenada, los enlaces, las reclamaciones de terceros y las acciones legales en
              referencia a propiedad intelectual, derechos de terceros y protección de menores, así
              como del cumplimiento de las normas aplicables al servicio online.
            </p>

            <h2>Protección de la información alojada</h2>
            <p>
              Se realizan copias de seguridad de los contenidos alojados; no obstante, no se
              garantiza la reposición total de datos borrados por los usuarios, salvo cuando la
              pérdida sea debida a causas atribuibles a María Elena Felpeto Santero. La reposición de
              datos borrados por el usuario podrá presupuestarse en función de complejidad y volumen.
            </p>

            <h2>Comunicaciones comerciales</h2>
            <p>
              En aplicación de la LSSI, no se enviarán comunicaciones publicitarias o promocionales
              por correo electrónico u otro medio electrónico equivalente que no hayan sido
              solicitadas o expresamente autorizadas por los destinatarios.
            </p>
            <p>
              En el caso de usuarios con relación contractual previa, se podrán enviar comunicaciones
              comerciales referentes a productos o servicios similares a los inicialmente contratados.
              En todo caso, el usuario podrá solicitar dejar de recibir comunicaciones comerciales a
              través de los canales de Atención al Cliente.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
