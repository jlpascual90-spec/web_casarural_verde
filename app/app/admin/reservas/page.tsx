import { Calendar as CalendarIcon, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { WatermarkLogo } from "@/components/WatermarkLogo";

export const metadata = {
  title: "Panel de Reservas - DUX TOLEDO",
  description:
    "Panel interno para gestionar la disponibilidad y reservas de DUX TOLEDO.",
};

export default function PanelReservasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 relative">
      <WatermarkLogo />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <CalendarIcon className="h-4 w-4" />
            Volver a la web
          </Link>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {/* Cabecera panel */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
                <ShieldCheck className="h-7 w-7 text-primary" />
                Panel de Reservas
              </h1>
              <p className="text-sm text-muted-foreground max-w-xl">
                Este panel está pensado para gestionar de forma sencilla las
                reservas de <strong>DUX TOLEDO</strong>. Solo tienes que usar el
                calendario de abajo para marcar los días ocupados.
              </p>
            </div>

            <div className="rounded-lg border bg-background px-4 py-3 text-xs md:text-sm text-muted-foreground max-w-sm">
              <p className="font-semibold mb-1">Cómo usar este panel</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Haz clic en un día libre para crear una nueva reserva.</li>
                <li>Introduce el nombre del cliente y las fechas.</li>
                <li>
                  Marca el evento con color <span className="text-red-500 font-semibold">rojo</span>{" "}
                  para indicar que esos días están ocupados.
                </li>
                <li>
                  Para cancelar una reserva, edita o borra el evento del día
                  correspondiente.
                </li>
              </ol>
            </div>
          </div>

          {/* Leyenda rápida */}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-red-500" />
              <span>Día reservado (ocupado)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-emerald-500" />
              <span>Día disponible (sin evento)</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Recuerda: los cambios que hagas aquí se verán también en la página
              pública de calendario.
            </p>
          </div>

          {/* Calendario incrustado para gestión interna */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-background">
            <iframe
              // Mismo calendario, pero puedes cambiar parámetros como &mode=WEEK para vista semanal
              src="https://calendar.google.com/calendar/embed?src=70206a6afbc1c86dc51e9ceb9ab923c713da59596a852d1243e5bb0029505a85%40group.calendar.google.com&ctz=Europe%2FMadrid&mode=MONTH"
              style={{ border: 0 }}
              width="100%"
              height="650"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            <strong>Consejo:</strong> abre este panel en tu móvil y añade un acceso
            directo a la pantalla de inicio para entrar rápidamente cuando tengas
            que gestionar reservas.
          </p>
        </div>
      </div>
    </div>
  );
}
