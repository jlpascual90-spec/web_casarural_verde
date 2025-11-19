"use client";

import { useEffect, useState } from "react";

type Reserva = {
  startDate: string;
  endDate: string;
  note?: string;
};

const ADMIN_PIN = "0027";

export default function AdminPage() {
  const [pin, setPin] = useState("");
  const [authed, setAuthed] = useState(false);
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [form, setForm] = useState<Reserva>({
    startDate: "",
    endDate: "",
    note: "",
  });
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    try {
      const res = await fetch("/api/reservas", { cache: "no-store" });
      const data = await res.json();
      setReservas(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error cargando reservas", error);
      alert("Error cargando reservas (mira la consola del navegador).");
    }
  };

  useEffect(() => {
    if (authed) {
      load();
    }
  }, [authed]);

  const handleLogin = () => {
    if (pin === ADMIN_PIN) {
      setAuthed(true);
    } else {
      alert("PIN incorrecto");
    }
  };

  const handleSave = async () => {
    if (!form.startDate || !form.endDate) {
      alert("Debes indicar fecha de entrada y salida");
      return;
    }

    if (form.endDate < form.startDate) {
      alert("La fecha de salida no puede ser anterior a la de entrada");
      return;
    }

    setLoading(true);

    try {
      const method = editIndex === null ? "POST" : "PUT";

      const res = await fetch("/api/reservas", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          startDate: form.startDate,
          endDate: form.endDate,
          note: form.note ?? "",
          index: editIndex,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || data.ok === false) {
        console.error("Error respuesta /api/reservas", res.status, data);
        alert(
          "Error guardando reserva: " +
            (data?.error || res.statusText || "Error desconocido")
        );
        return;
      }

      // Reset formulario y recargar
      setForm({ startDate: "", endDate: "", note: "" });
      setEditIndex(null);
      await load();
    } catch (error) {
      console.error("Error guardando reserva", error);
      alert("Error guardando reserva (mira la consola del navegador).");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (idx: number) => {
    setEditIndex(idx);
    setForm(reservas[idx]);
  };

  const handleDelete = async (idx: number) => {
    if (!confirm("¿Seguro que quieres borrar esta reserva?")) return;
    setLoading(true);

    try {
      const res = await fetch("/api/reservas", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ index: idx }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || data.ok === false) {
        console.error("Error respuesta DELETE /api/reservas", res.status, data);
        alert(
          "Error borrando reserva: " +
            (data?.error || res.statusText || "Error desconocido")
        );
        return;
      }

      await load();
    } catch (error) {
      console.error("Error borrando reserva", error);
      alert("Error borrando reserva (mira la consola del navegador).");
    } finally {
      setLoading(false);
    }
  };

  if (!authed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Acceso administrador</h1>
        <input
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          placeholder="Introduce el PIN"
          className="border rounded px-3 py-2"
        />
        <button
          onClick={handleLogin}
          className="bg-primary text-primary-foreground px-4 py-2 rounded"
        >
          Entrar
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10">
      <div className="container mx-auto px-4 py-8 space-y-6">
        <h1 className="text-3xl font-bold">Panel de reservas</h1>
        <p className="text-sm text-muted-foreground">
          Aquí puedes añadir, editar o borrar reservas. Lo que pongas aquí se
          refleja en el calendario público.
        </p>

        {/* Formulario */}
        <div className="border rounded-xl p-4 bg-background/70 space-y-3 max-w-xl">
          <h2 className="font-semibold">
            {editIndex === null ? "Nueva reserva" : "Editar reserva"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Fecha entrada</label>
              <input
                type="date"
                value={form.startDate}
                onChange={(e) =>
                  setForm((f) => ({ ...f, startDate: e.target.value }))
                }
                className="border rounded px-3 py-2"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Fecha salida</label>
              <input
                type="date"
                value={form.endDate}
                onChange={(e) =>
                  setForm((f) => ({ ...f, endDate: e.target.value }))
                }
                className="border rounded px-3 py-2"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">
              Nota (nombre cliente, nº personas, etc.)
            </label>
            <textarea
              value={form.note ?? ""}
              onChange={(e) =>
                setForm((f) => ({ ...f, note: e.target.value }))
              }
              className="border rounded px-3 py-2 min-h-[80px]"
            />
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleSave}
              disabled={loading}
              className="bg-primary text-primary-foreground px-4 py-2 rounded disabled:opacity-60"
            >
              {editIndex === null ? "Guardar reserva" : "Guardar cambios"}
            </button>
            {editIndex !== null && (
              <button
                type="button"
                onClick={() => {
                  setEditIndex(null);
                  setForm({ startDate: "", endDate: "", note: "" });
                }}
                className="border px-4 py-2 rounded"
              >
                Cancelar edición
              </button>
            )}
          </div>
        </div>

        {/* Tabla de reservas */}
        <div className="border rounded-xl p-4 bg-background/70">
          <h2 className="font-semibold mb-3">Reservas existentes</h2>

          {reservas.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              De momento no hay reservas guardadas.
            </p>
          ) : (
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Entrada</th>
                  <th className="text-left py-2">Salida</th>
                  <th className="text-left py-2">Nota</th>
                  <th className="text-left py-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {reservas.map((r, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="py-2">{r.startDate}</td>
                    <td className="py-2">{r.endDate}</td>
                    <td className="py-2 whitespace-pre-wrap">
                      {r.note || "-"}
                    </td>
                    <td className="py-2 flex gap-2">
                      <button
                        onClick={() => handleEdit(idx)}
                        className="bg-blue-600 text-white px-2 py-1 rounded"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDelete(idx)}
                        className="bg-red-600 text-white px-2 py-1 rounded"
                      >
                        Borrar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
