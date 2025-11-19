"use client";

import { useEffect, useState } from "react";

type Reserva = {
  startDate: string; // YYYY-MM-DD
  endDate: string;   // YYYY-MM-DD
  note?: string;
};

type DayStatus = "free" | "occupied";

const monthNames = [
  "Enero","Febrero","Marzo","Abril","Mayo","Junio",
  "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre",
];

const weekDays = ["L", "M", "X", "J", "V", "S", "D"];

function getDaysInMonth(year: number, month: number) {
  const date = new Date(year, month, 1);
  const days: Date[] = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

function isDateInRange(date: Date, reserva: Reserva) {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const start = new Date(reserva.startDate + "T00:00:00");
  const end = new Date(reserva.endDate + "T23:59:59");
  return d >= start && d <= end;
}

export function AvailabilityCalendar() {
  const now = new Date();
  const [currentYear, setCurrentYear] = useState(now.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(now.getMonth());
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/reservas", { cache: "no-store" });
        const data = await res.json();
        setReservas(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error cargando reservas", error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = new Date(currentYear, currentMonth, 1).getDay(); // 0=Domingo
  const offset = (firstDay + 6) % 7; // empezamos en lunes

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  const getDayStatus = (date: Date): DayStatus => {
    const occupied = reservas.some((r) => isDateInRange(date, r));
    return occupied ? "occupied" : "free";
  };

  return (
    <div className="border rounded-2xl bg-background/80 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={handlePrevMonth}
          className="px-2 py-1 text-sm border rounded"
        >
          ←
        </button>
        <div className="font-semibold">
          {monthNames[currentMonth]} {currentYear}
        </div>
        <button
          type="button"
          onClick={handleNextMonth}
          className="px-2 py-1 text-sm border rounded"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 text-xs text-center mb-2">
        {weekDays.map((d) => (
          <div key={d} className="font-semibold text-muted-foreground">
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-sm">
        {Array.from({ length: offset }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {daysInMonth.map((date) => {
          const status = getDayStatus(date);
          const isToday =
            date.toDateString() === new Date().toDateString();

          return (
            <div
              key={date.toISOString()}
              className={[
                "aspect-square flex items-center justify-center rounded-md border text-xs",
                status === "occupied"
                  ? "bg-red-500/80 text-white border-red-600"
                  : "bg-emerald-500/10 text-emerald-800 border-emerald-300",
                isToday ? "ring-2 ring-primary" : "",
              ].join(" ")}
            >
              {date.getDate()}
            </div>
          );
        })}
      </div>

      {loading && (
        <p className="mt-3 text-xs text-muted-foreground text-center">
          Cargando reservas…
        </p>
      )}

      <div className="mt-3 flex justify-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded bg-emerald-500/40 border border-emerald-400" />
          Libre
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded bg-red-500/80 border border-red-600" />
          Ocupado
        </div>
      </div>
    </div>
  );
}
