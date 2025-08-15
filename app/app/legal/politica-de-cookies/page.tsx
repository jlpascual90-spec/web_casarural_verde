
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
            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">1. ¿Qué son las Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Las cookies son pequeños archivos de texto que se descargan en su dispositivo cuando 
                visita un sitio web. Las cookies permiten que un sitio web reconozca el dispositivo 
                del usuario y almacene algunas informaciones sobre las preferencias del usuario o 
                acciones pasadas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">2. ¿Qué Cookies Utilizamos?</h2>
              
              <div className="space-y-4">
                <div className="bg-accent/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-card-foreground mb-2">Cookies Técnicas (Necesarias)</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>dux-toledo-cookie-consent:</strong> Almacena su preferencia sobre el uso de cookies</li>
                    <li>• <strong>theme-preference:</strong> Guarda su preferencia de tema (claro/oscuro)</li>
                  </ul>
                </div>

                <div className="bg-accent/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-card-foreground mb-2">Cookies de Funcionalidad</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Estas cookies permiten que el sitio web recuerde las opciones que ha elegido.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>language-preference:</strong> Idioma seleccionado por el usuario</li>
                    <li>• <strong>session-data:</strong> Información temporal de la sesión</li>
                  </ul>
                </div>

                <div className="bg-accent/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-card-foreground mb-2">Cookies de Análisis (Opcionales)</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Estas cookies nos ayudan a entender cómo interactúa con nuestro sitio web.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>Google Analytics:</strong> Estadísticas de uso del sitio web</li>
                    <li>• <strong>Page views:</strong> Páginas más visitadas</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">3. Finalidad de las Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizamos cookies para los siguientes fines:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Permitir el funcionamiento básico del sitio web</li>
                <li>Recordar sus preferencias y configuración</li>
                <li>Mejorar la experiencia del usuario</li>
                <li>Analizar el tráfico y uso del sitio web</li>
                <li>Personalizar contenido y funcionalidades</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">4. Consentimiento</h2>
              <p className="text-muted-foreground leading-relaxed">
                Al utilizar nuestro sitio web, usted acepta el uso de cookies de acuerdo con esta 
                Política de Cookies. Puede gestionar sus preferencias de cookies utilizando el banner 
                de cookies que aparece en su primera visita o configurando su navegador web.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">5. Cómo Gestionar las Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Puede controlar y/o eliminar las cookies como desee. Para obtener más información, 
                consulte aboutcookies.org. Puede eliminar todas las cookies que ya están en su 
                ordenador y puede configurar la mayoría de navegadores para evitar que se instalen.
              </p>
              
              <div className="bg-accent/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Configuración por navegador:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                  <li>• <strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
                  <li>• <strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
                  <li>• <strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">6. Cookies de Terceros</h2>
              <p className="text-muted-foreground leading-relaxed">
                Algunos de nuestros socios comerciales pueden utilizar cookies en nuestro sitio. 
                No tenemos acceso ni control sobre estas cookies. Esta Política de Cookies cubre 
                únicamente las cookies utilizadas por DUX TOLEDO.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">7. Actualizaciones</h2>
              <p className="text-muted-foreground leading-relaxed">
                Esta Política de Cookies puede actualizarse periódicamente. Le recomendamos revisar 
                esta página regularmente para mantenerse informado sobre nuestro uso de cookies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4 text-primary">8. Contacto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Si tiene alguna pregunta sobre nuestra Política de Cookies, puede contactarnos en:
              </p>
              <div className="mt-4 bg-accent/20 p-4 rounded-lg">
                <ul className="space-y-2 text-card-foreground">
                  <li><strong>Email:</strong> casarural@duxtoledo.com</li>
                  <li><strong>Teléfono:</strong> +34 687 765 315</li>
                </ul>
              </div>
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
