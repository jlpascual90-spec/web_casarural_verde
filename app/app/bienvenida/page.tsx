// app/bienvenida/page.tsx
import Link from "next/link";

export default function BienvenidaPage() {
  return (
    <main className="min-h-screen bg-background py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            ← Volver al inicio
          </Link>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-primary">
            Bienvenida
          </h1>
        </div>

        {/* Contenido */}
        <article className="prose prose-neutral dark:prose-invert max-w-none prose-lg">
          <p className="text-lg leading-relaxed">
            ¡Aproximaos, aproximaos a la ventana de DUX TOLEDO…! ¡Con los ojos cerrados, sí… si no os incomoda! ¡Ahora, abridlos…, por favor! Imaginad que contempláis lo mismo que San Isidoro de Sevilla llegando para el concilio; puede que prefiráis componer la mirada de Alfonso VI al inicio del asedio para reconquistarla o la de María Pacheco con las lágrimas de la derrota de los comuneros; quizás, si amáis la poesía, soñéis con ser Garcilaso que describe la magia del Tajo; si sois ingeniero, Juanelo Turriano que lo domina… Incluso podríais mirar a través de los ojos de Einstein y también escribir en vuestro diario: "Toledo es como un cuento de hadas".
          </p>
          <p className="text-lg leading-relaxed mt-6">
            Permítannos, desde la hospitalidad de nuestra casa, ayudarles a disfrutar de esta maravillosa ciudad.
          </p>
          <p className="text-right text-muted-foreground italic mt-8">
            Fco. Javier Rabalo Casillas.
          </p>
        </article>
      </div>
    </main>
  );
}