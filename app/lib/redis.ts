// app/lib/redis.ts
import { Redis } from "@upstash/redis";

if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
  throw new Error(
    "Faltan KV_REST_API_URL o KV_REST_API_TOKEN en las variables de entorno"
  );
}

export const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

export type Reserva = {
  startDate: string; // YYYY-MM-DD
  endDate: string;   // YYYY-MM-DD
  note?: string;
};
