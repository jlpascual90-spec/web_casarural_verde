"use client";

import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import Link from "next/link";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("dux-toledo-cookie-consent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAllCookies = () => {
    localStorage.setItem("dux-toledo-cookie-consent", "accepted");
    localStorage.setItem("dux-toledo-analytics-cookies", "accepted");
    localStorage.setItem("dux-toledo-marketing-cookies", "accepted");
    setShowBanner(false);
    setShowCustomize(false);
  };

  const rejectAllCookies = () => {
    localStorage.setItem("dux-toledo-cookie-consent", "rejected");
    localStorage.setItem("dux-toledo-analytics-cookies", "rejected");
    localStorage.setItem("dux-toledo-marketing-cookies", "rejected");
    setShowBanner(false);
    setShowCustomize(false);
  };

  const saveCustomPreferences = () => {
    const analyticsCheckbox = document.getElementById("analytics-cookies") as HTMLInputElement;
    const marketingCheckbox = document.getElementById("marketing-cookies") as HTMLInputElement;
    
    localStorage.setItem("dux-toledo-cookie-consent", "customized");
    localStorage.setItem("dux-toledo-analytics-cookies", analyticsCheckbox?.checked ? "accepted" : "rejected");
    localStorage.setItem("dux-toledo-marketing-cookies", marketingCheckbox?.checked ? "accepted" : "rejected");
    
    setShowBanner(false);
    setShowCustomize(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg animate-slide-up">
      <div className="max-w-6xl mx-auto px-4 py-4">
        {!showCustomize ? (
          // Banner principal
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-semibold text-card-foreground mb-1">
                  Uso de Cookies
                </h4>
                <p className="text-sm text-muted-foreground">
                  Utilizamos cookies propias y de terceros para mejorar su experiencia de navegación. 
                  Al continuar navegando, entendemos que acepta nuestro uso de cookies según nuestra{" "}
                  <Link 
                    href="/legal/politica-de-cookies" 
                    className="text-primary hover:underline"
                  >
                    Política de Cookies
                  </Link>.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 flex-shrink-0 flex-wrap">
              <button
                onClick={acceptAllCookies}
                className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-accent transition-colors"
              >
                Aceptar
              </button>
              <button
                onClick={() => setShowCustomize(true)}
                className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-accent transition-colors"
              >
                Personalizar
              </button>
              <button
                onClick={rejectAllCookies}
                className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-accent transition-colors"
              >
                Rechazar
              </button>
              <button
                onClick={rejectAllCookies}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
                aria-label="Cerrar"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        ) : (
          // Panel de personalización
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-semibold text-card-foreground mb-3">
                  Personalizar Cookies
                </h4>
                
                <div className="space-y-3 mb-4">
                  {/* Cookies técnicas (siempre activas) */}
                  <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <input
                      type="checkbox"
                      id="technical-cookies"
                      checked
                      disabled
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <label htmlFor="technical-cookies" className="font-medium text-sm block mb-1">
                        Cookies Técnicas (Necesarias)
                      </label>
                      <p className="text-xs text-muted-foreground">
                        Estas cookies son esenciales para el funcionamiento del sitio web y no pueden ser desactivadas.
                      </p>
                    </div>
                  </div>

                  {/* Cookies analíticas */}
                  <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <input
                      type="checkbox"
                      id="analytics-cookies"
                      defaultChecked
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <label htmlFor="analytics-cookies" className="font-medium text-sm block mb-1">
                        Cookies Analíticas
                      </label>
                      <p className="text-xs text-muted-foreground">
                        Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.
                      </p>
                    </div>
                  </div>

                  {/* Cookies de marketing */}
                  <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <input
                      type="checkbox"
                      id="marketing-cookies"
                      defaultChecked
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <label htmlFor="marketing-cookies" className="font-medium text-sm block mb-1">
                        Cookies de Marketing
                      </label>
                      <p className="text-xs text-muted-foreground">
                        Se utilizan para mostrar anuncios relevantes y medir la efectividad de nuestras campañas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={saveCustomPreferences}
                    className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-accent transition-colors"
                  >
                    Guardar Preferencias
                  </button>
                  <button
                    onClick={acceptAllCookies}
                    className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-accent transition-colors"
                  >
                    Aceptar Todas
                  </button>
                  <button
                    onClick={rejectAllCookies}
                    className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-accent transition-colors"
                  >
                    Rechazar Todas
                  </button>
                  <button
                    onClick={() => setShowCustomize(false)}
                    className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Volver
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
