// app/app/api/reservas/route.ts
import { NextResponse } from "next/server";
import { redis, Reserva } from "@/lib/redis";

export const dynamic = "force-dynamic";

const KEY = "reservas";

async function getReservasArray(): Promise<Reserva[]> {
  const raw = await redis.get(KEY as any);

  if (!raw) return [];

  // Caso 1: ya es un array (lo que se guardó antes sin JSON.stringify)
  if (Array.isArray(raw)) {
    return raw as Reserva[];
  }

  // Caso 2: es un objeto suelto (una sola reserva antigua)
  if (typeof raw === "object") {
    const maybe = raw as any;
    // Si tiene startDate y endDate, lo tratamos como una sola reserva
    if (maybe.startDate && maybe.endDate) {
      return [maybe as Reserva];
    }
    // Si viene envuelto tipo { reservas: [...] }
    if (Array.isArray(maybe.reservas)) {
      return maybe.reservas as Reserva[];
    }
    return [];
  }

  // Caso 3: es un string JSON (lo nuevo con JSON.stringify)
  if (typeof raw === "string") {
    try {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed as Reserva[];
      return [];
    } catch (e) {
      console.error("Error parseando reservas desde Redis:", e, "raw=", raw);
      return [];
    }
  }

  // Cualquier otra cosa rara → lo ignoramos
  return [];
}

// GET → lista todas las reservas
export async function GET() {
  const reservas = await getReservasArray();
  return NextResponse.json(reservas);
}

// POST → crea una nueva reserva
export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Reserva;

    if (!body.startDate || !body.endDate) {
      return NextResponse.json(
        { ok: false, error: "startDate y endDate son obligatorios" },
        { status: 400 }
      );
    }

    const reservas = await getReservasArray();
    reservas.push({
      startDate: body.startDate,
      endDate: body.endDate,
      note: body.note ?? "",
    });

    await redis.set(KEY, JSON.stringify(reservas));
    console.log("Reserva creada:", body);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error en POST /api/reservas", error);
    return NextResponse.json(
      { ok: false, error: "Error guardando reserva" },
      { status: 500 }
    );
  }
}

// PUT → edita una reserva por índice
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const index = body.index as number;

    if (index === undefined || index === null) {
      return NextResponse.json(
        { ok: false, error: "Falta index" },
        { status: 400 }
      );
    }

    if (!body.startDate || !body.endDate) {
      return NextResponse.json(
        { ok: false, error: "startDate y endDate son obligatorios" },
        { status: 400 }
      );
    }

    const reservas = await getReservasArray();

    if (index < 0 || index >= reservas.length) {
      return NextResponse.json(
        { ok: false, error: "Índice fuera de rango" },
        { status: 400 }
      );
    }

    reservas[index] = {
      startDate: body.startDate,
      endDate: body.endDate,
      note: body.note ?? "",
    };

    await redis.set(KEY, JSON.stringify(reservas));
    console.log("Reserva actualizada índice", index, reservas[index]);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error en PUT /api/reservas", error);
    return NextResponse.json(
      { ok: false, error: "Error actualizando reserva" },
      { status: 500 }
    );
  }
}

// DELETE → borra una reserva por índice
export async function DELETE(req: Request) {
  try {
    const body = await req.json();
    const index = body.index as number;

    if (index === undefined || index === null) {
      return NextResponse.json(
        { ok: false, error: "Falta index" },
        { status: 400 }
      );
    }

    const reservas = await getReservasArray();

    if (index < 0 || index >= reservas.length) {
      return NextResponse.json(
        { ok: false, error: "Índice fuera de rango" },
        { status: 400 }
      );
    }

    const deleted = reservas.splice(index, 1);
    await redis.set(KEY, JSON.stringify(reservas));
    console.log("Reserva borrada índice", index, deleted[0]);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error en DELETE /api/reservas", error);
    return NextResponse.json(
      { ok: false, error: "Error borrando reserva" },
      { status: 500 }
    );
  }
}
