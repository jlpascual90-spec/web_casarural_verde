
"use client";

import { useState } from "react";
import { Mail, Phone, MessageSquare, Send, Check, AlertCircle } from "lucide-react";
import { propertyData } from "@/lib/data";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulación de envío de formulario
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Aquí iría la lógica real de envío del formulario
      // Por ahora simulamos un éxito
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
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateWhatsAppUrl = () => {
    const message = `¡Hola! Me interesa reservar DUX TOLEDO. 
    
Detalles de mi consulta:
- Nombre: ${formData.nombre || 'No especificado'}
- Email: ${formData.email || 'No especificado'}
- Teléfono: ${formData.telefono || 'No especificado'}
- Fecha entrada: ${formData.fechaEntrada || 'No especificada'}
- Fecha salida: ${formData.fechaSalida || 'No especificada'}
- Número de huéspedes: ${formData.huespedes || 'No especificado'}
- Mensaje: ${formData.mensaje || 'Sin mensaje adicional'}

¡Espero su respuesta!`;
    
    return `https://wa.me/${propertyData?.contact?.whatsapp?.replace('+', '')}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <div className="space-y-8 animate-slide-in-left">
        <div>
          <h2 className="text-3xl font-bold text-card-foreground mb-6">
            ¡Contacta con Nosotros!
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos aquí para ayudarte a planificar tu escapada perfecta a Toledo. 
            Contáctanos para reservas, consultas o información adicional.
          </p>
        </div>

        <div className="space-y-6">
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
            </div>
          </div>

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
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {propertyData?.contact?.whatsapp}
              </a>
            </div>
          </div>
        </div>

        <div className="bg-accent/30 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-card-foreground mb-3">
            Horario de Atención
          </h3>
          <div className="space-y-2 text-muted-foreground">
            <div className="flex justify-between">
              <span>Lunes - Viernes:</span>
              <span>9:00 - 20:00</span>
            </div>
            <div className="flex justify-between">
              <span>Sábados:</span>
              <span>10:00 - 18:00</span>
            </div>
            <div className="flex justify-between">
              <span>Domingos:</span>
              <span>10:00 - 16:00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="animate-slide-in-right">
        <div className="bg-card rounded-lg shadow-elegant p-6">
          <h3 className="text-2xl font-bold text-card-foreground mb-6">
            Solicita Información
          </h3>

          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-2 text-green-800 animate-fade-in">
              <Check className="h-5 w-5" />
              <span>¡Mensaje enviado correctamente! Te contactaremos pronto.</span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2 text-red-800 animate-fade-in">
              <AlertCircle className="h-5 w-5" />
              <span>Error al enviar el mensaje. Por favor, inténtalo de nuevo.</span>
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
                  className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
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
                  className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  placeholder="tu@email.com"
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
                className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                placeholder="+34 XXX XXX XXX"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fechaEntrada" className="block text-sm font-medium text-card-foreground mb-2">
                  Fecha de Entrada
                </label>
                <input
                  type="date"
                  id="fechaEntrada"
                  name="fechaEntrada"
                  value={formData.fechaEntrada}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                />
              </div>
              <div>
                <label htmlFor="fechaSalida" className="block text-sm font-medium text-card-foreground mb-2">
                  Fecha de Salida
                </label>
                <input
                  type="date"
                  id="fechaSalida"
                  name="fechaSalida"
                  value={formData.fechaSalida}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                />
              </div>
            </div>

            <div>
              <label htmlFor="huespedes" className="block text-sm font-medium text-card-foreground mb-2">
                Número de Huéspedes
              </label>
              <select
                id="huespedes"
                name="huespedes"
                value={formData.huespedes}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
              >
                <option value="">Selecciona...</option>
                <option value="1">1 persona</option>
                <option value="2">2 personas</option>
                <option value="3">3 personas</option>
                <option value="4">4 personas</option>
                <option value="5">5 personas</option>
                <option value="6">6 personas</option>
                <option value="7">7 personas</option>
                <option value="8">8 personas</option>
              </select>
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-card-foreground mb-2">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                value={formData.mensaje}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground resize-none"
                placeholder="Cuéntanos sobre tus necesidades, preguntas especiales, o cualquier información adicional..."
              />
            </div>

            <div className="space-y-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
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
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Enviar por WhatsApp</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
