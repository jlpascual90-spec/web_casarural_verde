"use client";

import { useState } from "react";
import { Mail, Phone, MessageSquare, Send, Check, AlertCircle } from "lucide-react";
import { propertyData } from "@/lib/data";
import Link from "next/link";

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fechaEntrada: '',
    fechaSalida: '',
    huespedes: '',
    mensaje: ''
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 🔴 AQUÍ ES DONDE HEMOS CAMBIADO LA LÓGICA
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!privacyAccepted) {
      alert('Debes aceptar la Política de Privacidad para enviar el formulario.');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      console.log('📨 Enviando formulario de contacto...', formData);
      
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Error al enviar el formulario');
      }

      console.log('✅ Formulario enviado correctamente');

      setSubmitStatus('success');
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        fechaEntrada: '',
        fechaSalida: '',
        huespedes: '',
        mensaje: ''
      });
      setPrivacyAccepted(false);
    } catch (error) {
      console.error('❌ Error al enviar el formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateWhatsAppUrl = () => {
    return "https://wa.me/34687765315?text=Hola,%20quiero%20información%20sobre%20DUX%20TOLEDO";
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <div className="space-y-8 animate-slide-in-left">
        <div className="bg-card rounded-3xl p-8 shadow-soft border border-border">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary mb-6">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
            Contacto
          </div>

          <h2 className="text-3xl font-bold text-card-foreground mb-4">
            ¿Listo para tu estancia en DUX Toledo?
          </h2>
          
          <p className="text-muted-foreground mb-6">
            Rellena el formulario y nos pondremos en contacto contigo lo antes posible para confirmar disponibilidad,
            resolver tus dudas y ayudarte a planificar una experiencia inolvidable en nuestra casa rural.
          </p>

          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-1">Email</h3>
                <a 
                  href={`mailto:${propertyData?.contact?.email}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {propertyData?.contact?.email}
                </a>
                <p className="text-xs text-muted-foreground mt-1">
                  Respuesta normalmente en menos de 24 horas
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-1">Teléfono</h3>
                <a 
                  href={`tel:${propertyData?.contact?.phone}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {propertyData?.contact?.phone}
                </a>
                <p className="text-xs text-muted-foreground mt-1">
                  También disponible por WhatsApp
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-1">WhatsApp</h3>
                <a 
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Enviar mensaje directo</span>
                </a>
                <p className="text-xs text-muted-foreground mt-1">
                  Respuesta más rápida para consultas urgentes
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-card-foreground">
                  Reserva directa sin comisiones
                </p>
                <p className="text-xs text-muted-foreground">
                  Mejor precio garantizado reservando con nosotros.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-muted/60 rounded-3xl p-6 border border-border">
          <h3 className="text-lg font-semibold text-card-foreground mb-2">
            Información importante
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
  <li>
    ✓ Estancia mínima de {(propertyData as any)?.minStay} noches.
  </li>
  <li>
    ✓ Capacidad máxima de {(propertyData as any)?.maxGuests} personas.
  </li>
  <li>
    ✓ Check-in de {(propertyData as any)?.checkIn} y check-out hasta {(propertyData as any)?.checkOut}.
  </li>
  <li>
    ✓ Política de cancelación flexible (consúltanos para más detalles).
  </li>
</ul>

        </div>
      </div>

      {/* Formulario */}
      <div className="animate-slide-in-right">
        <div className="bg-card rounded-3xl p-8 shadow-soft border border-border">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-card-foreground">
                Enviar una consulta
              </h2>
              <p className="text-muted-foreground mt-1 text-sm">
                Cuéntanos las fechas y el número de personas, y te responderemos con la mejor opción disponible.
              </p>
            </div>
            <div className="hidden md:flex h-12 w-12 rounded-2xl bg-primary/10 items-center justify-center">
              <Send className="h-6 w-6 text-primary" />
            </div>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-6 rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3 flex items-start space-x-3">
              <div className="mt-0.5">
                <Check className="h-5 w-5 text-emerald-500" />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-emerald-800">Mensaje enviado correctamente</p>
                <p className="text-emerald-700">
                  Gracias por contactarnos. Te responderemos lo antes posible a través del email facilitado.
                </p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 rounded-xl bg-red-50 border border-red-200 px-4 py-3 flex items-start space-x-3">
              <div className="mt-0.5">
                <AlertCircle className="h-5 w-5 text-red-500" />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-red-800">Ha ocurrido un error</p>
                <p className="text-red-700">
                  No hemos podido enviar tu mensaje. Por favor, inténtalo de nuevo o contacta directamente por email o teléfono.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-card-foreground mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  placeholder="tucorreo@ejemplo.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-card-foreground mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                placeholder="+34 XXX XXX XXX"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fechaEntrada" className="block text-sm font-medium text-card-foreground mb-2">
                  Fecha de entrada
                </label>
                <input
                  type="date"
                  id="fechaEntrada"
                  name="fechaEntrada"
                  value={formData.fechaEntrada}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                />
              </div>

              <div>
                <label htmlFor="fechaSalida" className="block text-sm font-medium text-card-foreground mb-2">
                  Fecha de salida
                </label>
                <input
                  type="date"
                  id="fechaSalida"
                  name="fechaSalida"
                  value={formData.fechaSalida}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                />
              </div>
            </div>

            <div>
              <label htmlFor="huespedes" className="block text-sm font-medium text-card-foreground mb-2">
                Número de huéspedes
              </label>
              <select
                id="huespedes"
                name="huespedes"
                value={formData.huespedes}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
              >
                <option value="">Selecciona una opción</option>
                <option value="1">1 persona</option>
                <option value="2">2 personas</option>
                <option value="3">3 personas</option>
                <option value="4">4 personas</option>
                <option value="5">5 personas</option>
                <option value="6">6 personas</option>
                <option value="7">7 personas</option>
                <option value="8">8 personas</option>
                <option value="9">9 personas</option>
                <option value="10">10 personas</option>
                <option value="11">11 personas</option>
                <option value="12">12 personas</option>
              </select>
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-card-foreground mb-2">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground resize-none"
                placeholder="Cuéntanos un poco más sobre tu viaje, horario de llegada aproximado, etc."
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <input
                  id="privacy"
                  type="checkbox"
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-input text-primary focus:ring-primary"
                />
                <label htmlFor="privacy" className="text-sm text-muted-foreground">
                  He leído y acepto la{" "}
                  <Link href="/legal/privacidad" className="text-primary hover:underline">
                    Política de Privacidad
                  </Link>
                  .
                </label>
              </div>

              <div className="flex flex-col md:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting || !privacyAccepted}
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin h-5 w-5 border-2 border-current border-t-transparent rounded-full" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Enviar Mensaje</span>
                    </>
                  )}
                </button>

                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Enviar por WhatsApp</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
