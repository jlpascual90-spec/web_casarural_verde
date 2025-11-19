
import React from "react";

export function CalendarComponent() {
  return React.createElement(
    'div',
    { className: 'max-w-4xl mx-auto p-8' },
    React.createElement(
      'h2',
      { className: 'text-2xl font-bold mb-4' },
      'Calendario de Disponibilidad'
    ),
    React.createElement(
      'p',
      { className: 'text-muted-foreground' },
      'Próximamente: calendario interactivo para reservas'
    )
  );
}
