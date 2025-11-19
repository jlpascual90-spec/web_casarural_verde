import Link from "next/link";
import { AvailabilityCalendar } from "@/components/availability-calendar";

export const metadata = {
  title: "Calendario y Disponibilidad - DUX Toledo",
  description:
    "Consulta la disponibilidad de DUX Toledo: días libres (verde) y ocupados (rojo).",
};

export default function CalendarioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10 relative">

      <div className="container mx-auto px-4 py-12 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          ← Volver al inicio
        </Link>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Calendario y Disponibilidad
            </h1>
            <p className="text-lg text-muted-foreground">
              Consulta en el calendario los días en los que{" "}
              <strong>DUX TOLEDO</strong> está{" "}
              <span className="text-emerald-600 font-semibold">disponible</span>{" "}
              o <span className="text-red-600 font-semibold">ocupado</span>.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-emerald-500" />
              <span>Día disponible</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-red-500" />
              <span>Día ocupado</span>
            </div>
          </div>

          <AvailabilityCalendar />

          <p className="mt-4 text-center text-sm text-muted-foreground">
            Para confirmar una reserva escríbenos a{" "}
            <a
              href="mailto:casarural@duxtoledo.com"
              className="text-primary hover:underline"
            >
              casarural@duxtoledo.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
