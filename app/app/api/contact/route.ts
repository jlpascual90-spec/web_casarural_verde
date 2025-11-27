import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      nombre,
      email,
      telefono,
      fechaEntrada,
      fechaSalida,
      huespedes,
      mensaje,
    } = body;

    console.log("📩 NUEVA SOLICITUD CONTACTO:", body);

  const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,  // Microsoft 365 usa STARTTLS → secure:false
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    ciphers: "SSLv3",
  },
});

    console.log("🔌 Probando conexión SMTP con", process.env.SMTP_HOST);

    const texto = `
Nueva solicitud de información desde la web DUX Toledo

Nombre: ${nombre || "-"}
Email: ${email || "-"}
Teléfono: ${telefono || "-"}
Fecha de entrada: ${fechaEntrada || "-"}
Fecha de salida: ${fechaSalida || "-"}
Huéspedes: ${huespedes || "-"}
Mensaje:
${mensaje || "-"}
`.trim();

    const info = await transporter.sendMail({
      from: `"DUX Toledo" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email || undefined,
      subject: `Nueva solicitud de información ${
        nombre ? "de " + nombre : ""
      }`,
      text: texto,
    });

    console.log("✅ CORREO ENVIADO, info:", info);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("❌ ERROR EN SMTP:", error);
    return NextResponse.json(
      { ok: false, error: "Error enviando el correo" },
      { status: 500 }
    );
  }
}