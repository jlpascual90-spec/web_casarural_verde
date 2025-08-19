import { Calendar } from "lucide-react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Calendario - DUX TOLEDO",
  description: "Consulta la disponibilidad de DUX TOLEDO, casa rural de lujo en Toledo",
};

export default function App() {
  return (
    <>
      <PageHeader
        title="Calendario y Disponibilidad"
        description="Consulta nuestro calendario y reserva tu estancia"
        backgroundImage="https://cf.bstatic.com/xdata/images/hotel/max1024x768/115379080.jpg?k=bd18ab11f114421b4b5d21949f631e69a505f156f45222a1876b36efae2a40ab&o=&hp=1"
      />

      <section className="container-section">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Consulta en el siguiente calendario la disponibilidad de DUX TOLEDO para planificar tu escapada perfecta.
            </p>
          </div>

          {/* Calendario embed de Google */}
          <div className="rounded-lg overflow-hidden shadow-lg mb-12 bg-white dark:bg-gray-800">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=70206a6afbc1c86dc51e9ceb9ab923c713da59596a852d1243e5bb0029505a85%40group.calendar.google.com&ctz=Europe%2FMadrid"
              style={{ border: 0, width: '100%', height: 600 }}
              frameBorder="0"
              scrolling="no"
              title="Calendario de DUX TOLEDO"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Servicios Incluidos */}
      <section className="container-section bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Servicios Incluidos</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-4">
              Todo lo que necesitas para una estancia perfecta está incluido en tu reserva.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Comodidades Básicas</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Limpieza final incluida</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Ropa de cama y toallas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>WiFi de alta velocidad</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Espacios Exteriores</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Parking privado gratuito</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Acceso completo a jardín y piscina</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Uso de barbacoa y cocina exterior</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-section">
        <div className="max-w-4xl mx-auto">
          <div className="text-center bg-primary/10 dark:bg-primary/5 rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-4">¿Listo para tu Escapada a Toledo?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Una vez que hayas seleccionado tus fechas, contáctanos para finalizar tu reserva. 
              Te responderemos en menos de 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl inline-block"
              >
                Contactar para Reservar
              </Link>
              <a
                href="tel:+34687765315"
                className="bg-transparent border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200 inline-block"
              >
                Llamar 687 765 315
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
