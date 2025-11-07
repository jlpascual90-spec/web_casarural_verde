import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Política de Cookies - DUX TOLEDO",
  description: "Política de cookies de DUX TOLEDO, casa rural en Toledo",
};

export default function PoliticaCookiesPage() {
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
          <h1 className="text-3xl font-bold text-center mb-8">Política de Cookies</h1>
          
          <div className="bg-card rounded-lg p-8 shadow-sm space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              <strong>María Elena Felpeto Santero</strong> informa acerca del uso de las cookies en su página web:{" "}
              <a href="https://duxtoledo.com/" className="text-primary hover:underline">
                https://duxtoledo.com/
              </a>
            </p>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">¿Qué son las cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Las cookies son archivos que se pueden descargar en su equipo a través de las páginas web. 
                Son herramientas que tienen un papel esencial para la prestación de numerosos servicios de 
                la sociedad de la información. Entre otros, permiten a una página web almacenar y recuperar 
                información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de 
                la información obtenida, se pueden utilizar para reconocer al usuario y mejorar el servicio 
                ofrecido.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">Tipos de cookies</h2>
              
              <h3 className="text-lg font-semibold mb-3 text-card-foreground">Según quien sea la entidad que gestione el dominio:</h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-accent/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-card-foreground mb-2">Cookies propias:</h4>
                  <p className="text-sm text-muted-foreground">
                    Aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio gestionado 
                    por el propio editor y desde el que se presta el servicio solicitado por el usuario.
                  </p>
                </div>

                <div className="bg-accent/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-card-foreground mb-2">Cookies de terceros:</h4>
                  <p className="text-sm text-muted-foreground">
                    Aquéllas que se envían al equipo terminal del usuario desde un equipo o dominio que no es 
                    gestionado por el editor, sino por otra entidad que trata los datos obtenidos través de las cookies.
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                En el caso de que las cookies sean instaladas desde un equipo o dominio gestionado por el propio 
                editor pero la información que se recoja mediante éstas sea gestionada por un tercero, no pueden 
                ser consideradas como cookies propias.
              </p>

              <h3 className="text-lg font-semibold mb-3 text-card-foreground">Según el plazo de tiempo que permanecen almacenadas:</h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-accent/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-card-foreground mb-2">Cookies de sesión:</h4>
                  <p className="text-sm text-muted-foreground">
                    Diseñadas para recabar y almacenar datos mientras el usuario accede a una página web. Se suelen 
                    emplear para almacenar información que solo interesa conservar para la prestación del servicio 
                    solicitado por el usuario en una sola ocasión (p.e. una lista de productos adquiridos).
                  </p>
                </div>

                <div className="bg-accent/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-card-foreground mb-2">Cookies persistentes:</h4>
                  <p className="text-sm text-muted-foreground">
                    Los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un periodo 
                    definido por el responsable de la cookie, y que puede ir de unos minutos a varios años.
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-3 text-card-foreground">Según la finalidad para la que se traten los datos:</h3>
              
              <div className="space-y-4">
                <div className="bg-accent/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-card-foreground mb-2">Cookies técnicas:</h4>
                  <p className="text-sm text-muted-foreground">
                    Aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación 
                    y la utilización de las diferentes opciones o servicios que en ella existan como, por ejemplo, 
                    controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso 
                    restringido, recordar los elementos que integran un pedido, realizar el proceso de compra de un 
                    pedido, realizar la solicitud de inscripción o participación en un evento, utilizar elementos de 
                    seguridad durante la navegación, almacenar contenidos para la difusión de vídeos o sonido o 
                    compartir contenidos a través de redes sociales.
                  </p>
                </div>

                <div className="bg-accent/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-card-foreground mb-2">Cookies de personalización:</h4>
                  <p className="text-sm text-muted-foreground">
                    Permiten al usuario acceder al servicio con algunas características de carácter general predefinidas 
                    en función de una serie de criterios en el terminal del usuario como por ejemplo serian el idioma, 
                    el tipo de navegador a través del cual accede al servicio, la configuración regional desde donde 
                    accede al servicio, etc.
                  </p>
                </div>

                <div className="bg-accent/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-card-foreground mb-2">Cookies de análisis:</h4>
                  <p className="text-sm text-muted-foreground">
                    Permiten al responsable de las mismas, el seguimiento y análisis del comportamiento de los usuarios 
                    de los sitios web a los que están vinculadas. La información recogida mediante este tipo de cookies 
                    se utiliza en la medición de la actividad de los sitios web, aplicación o plataforma y para la 
                    elaboración de perfiles de navegación de los usuarios de dichos sitios, aplicaciones y plataformas, 
                    con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los usuarios 
                    del servicio.
                  </p>
                </div>

                <div className="bg-accent/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-card-foreground mb-2">Cookies publicitarias:</h4>
                  <p className="text-sm text-muted-foreground">
                    Permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios.
                  </p>
                </div>

                <div className="bg-accent/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-card-foreground mb-2">Cookies de publicidad comportamental:</h4>
                  <p className="text-sm text-muted-foreground">
                    Almacenan información del comportamiento de los usuarios obtenida a través de la observación 
                    continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para 
                    mostrar publicidad en función del mismo.
                  </p>
                </div>

                <div className="bg-accent/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-card-foreground mb-2">Cookies de redes sociales externas:</h4>
                  <p className="text-sm text-muted-foreground">
                    Se utilizan para que los visitantes puedan interactuar con el contenido de diferentes plataformas 
                    sociales (facebook, youtube, twitter, linkedin, etc.) y que se generen únicamente para los usuarios 
                    de dichas redes sociales. Las condiciones de utilización de estas cookies y la información recopilada 
                    se regula por la política de privacidad de la plataforma social correspondiente.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">Desactivación y eliminación de cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tienes la opción de permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la 
                configuración de las opciones del navegador instalado en su equipo. Al desactivar cookies, algunos de 
                los servicios disponibles podrían dejar de estar operativos. La forma de deshabilitar las cookies es 
                diferente para cada navegador, pero normalmente puede hacerse desde el menú Herramientas u Opciones. 
                También puede consultarse el menú de Ayuda del navegador dónde puedes encontrar instrucciones. El 
                usuario podrá en cualquier momento elegir qué cookies quiere que funcionen en este sitio web.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración 
                de las opciones del navegador instalado en su ordenador:
              </p>
              
              <div className="bg-accent/10 p-4 rounded-lg mb-4">
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>
                    • <strong>Microsoft Internet Explorer o Microsoft Edge:</strong>{" "}
                    <a 
                      href="http://windows.microsoft.com/es-es/windows-vista/Block-or-allow-cookies" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      http://windows.microsoft.com/es-es/windows-vista/Block-or-allow-cookies
                    </a>
                  </li>
                  <li>
                    • <strong>Mozilla Firefox:</strong>{" "}
                    <a 
                      href="http://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-sus-preferencia" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      http://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-sus-preferencia
                    </a>
                  </li>
                  <li>
                    • <strong>Chrome:</strong>{" "}
                    <a 
                      href="https://support.google.com/accounts/answer/61416?hl=es" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      https://support.google.com/accounts/answer/61416?hl=es
                    </a>
                  </li>
                  <li>
                    • <strong>Safari:</strong>{" "}
                    <a 
                      href="http://safari.helpmax.net/es/privacidad-y-seguridad/como-gestionar-las-cookies/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      http://safari.helpmax.net/es/privacidad-y-seguridad/como-gestionar-las-cookies/
                    </a>
                  </li>
                  <li>
                    • <strong>Opera:</strong>{" "}
                    <a 
                      href="http://help.opera.com/Linux/10.60/es-ES/cookies.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      http://help.opera.com/Linux/10.60/es-ES/cookies.html
                    </a>
                  </li>
                </ul>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Además, también puede gestionar el almacén de cookies en su navegador a través de herramientas como 
                las siguientes:
              </p>
              
              <div className="bg-accent/10 p-4 rounded-lg">
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>
                    • <strong>Ghostery:</strong>{" "}
                    <a 
                      href="https://www.ghostery.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      www.ghostery.com/
                    </a>
                  </li>
                  <li>
                    • <strong>Your Online Choices:</strong>{" "}
                    <a 
                      href="https://www.youronlinechoices.com/es/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      www.youronlinechoices.com/es/
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">Cookies utilizadas en https://duxtoledo.com/</h2>
              <p className="text-muted-foreground leading-relaxed">
                A continuación se identifican las cookies que están siendo utilizadas en este portal así como su 
                tipología y función:
              </p>
              <div className="bg-accent/20 p-4 rounded-lg mt-4">
                <p className="text-sm text-muted-foreground italic">
                  [Aquí se incluirá una tabla detallada con las cookies específicas utilizadas en el sitio web, 
                  incluyendo nombre, tipo, finalidad y duración de cada cookie]
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">Aceptación de la Política de cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                https://duxtoledo.com/, asume que usted acepta el uso de cookies. No obstante, muestra información 
                sobre su Política de cookies en la parte inferior o superior de cualquier página del portal con cada 
                inicio de sesión con el objeto de que usted sea consciente.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ante esta información es posible llevar a cabo las siguientes acciones:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <strong>Aceptar cookies:</strong> No se volverá a visualizar este aviso al acceder a cualquier 
                  página del portal durante la presente sesión.
                </li>
                <li>
                  <strong>Cerrar:</strong> Se oculta el aviso en la presente página.
                </li>
                <li>
                  <strong>Modificar su configuración:</strong> Podrá obtener más información sobre qué son las cookies, 
                  conocer la Política de cookies de: https://duxtoledo.com/ y modificar la configuración de su navegador.
                </li>
              </ul>
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
