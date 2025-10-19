// app/condiciones/page.tsx
import Link from "next/link";

export default function CondicionesPage() {
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
            Condiciones de alquiler / Normas
          </h1>
        </div>

        {/* Contenido literal */}
        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <h2>RESERVA</h2>
          <p>
            La reserva se realizará a través de la página web o llamando al teléfono 687765315. Para hacerla efectiva,
            una vez confirmada la disponibilidad deberá realizar un ingreso de un 200 € en concepto de fianza en la cuenta
            que se le facilitará. La formalización de la reserva implica la aceptación por ambas partes de este contrato
            y de todas las condiciones en él reflejadas. En caso de no hacerse efectivo el importe en un plazo de tres días
            desde el momento de la llamada la reserva quedará cancelada. Se entenderá que la cantidad entregada en concepto
            de anticipo o señal, constituye el importe del depósito en garantía, en caso de producirse algún desperfecto en la casa.
          </p>
          <p>
            Podrán cancelar su reserva sin coste alguno si lo hace con más de quince días de antelación a la fecha de entrada.
            Si cancela su reserva entre los días 14 y 8 a la fecha de entrada, se le retendrá el 50% de la fianza depositada.
            Si la cancelación es en el 7° día o menos de la fecha de entrada, se retendrá la totalidad de la fianza.
          </p>

          <h2>CONDICIONES DE ALQUILER</h2>
          <p>
            DUX TOLEDO es un alojamiento de alquiler íntegro para un máximo de 13 huéspedes.
          </p>
          <p>
            No se permite la entrada en la casa a nadie que no se haya registrado como huésped.
          </p>
          <p>
            No se alquila para despedidas de solteros, cumpleaños, fiestas estudiantiles o similares.
          </p>
          <p>
            Se espera de los señores clientes un buen cuidado de las instalaciones así como el cumplimiento de las elementales normas
            de convivencia con los vecinos del entorno. Se podrá dar por terminada la estancia en la casa cuando se incumplan normas
            elementales de urbanidad, higiene o convivencia y se prohíbe expresamente exceder el número de plazas especificadas en la descripción
            y autorización de la casa. Los señores clientes encuentran la casa en perfectas condiciones de uso, todas las dependencias limpias y
            todos los elementos funcionando correctamente.
          </p>
          <p>
            En el momento de la llegada se les entregarán las llaves, se les muestran todas las dependencias y se entregará y firmará este contrato
            dando así conformidad al mismo. En él deberán inscribirse todas las personas que se alojen, estos datos serán remitidos al Ministerio del
            Interior dando cumplimiento al Real Decreto 933/2021 de 26 de octubre , por lo que será obligatoria la presentación de DNI o pasaporte.
          </p>
          <p>
            Los propietarios se reservan el derecho de revisar, antes de la salida de los señores clientes del alojamiento, si se encuentran todas las
            cosas en su lugar correcto o si se ha producido algún desperfecto.
          </p>
          <p>
            Una vez finalizada la estancia y comprobado el buen estado de todas las dependencias, menaje e instalaciones, se devolverá la fianza en un
            plazo máximo de cuarenta y ocho horas desde la salida. El reintegro se realizará mediante transferencia bancaria al número de cuenta desde el
            que se originó el pago.
          </p>
          <p>
            Si los Sres. Clientes tuviesen que abandonar la casa ante cualquier circunstancia, antes de la fecha previamente contra­tada, no tendrán derecho
            a la devolución del importe de la diferencia entre la estancia contratada y la disfrutada.
          </p>
          <p>
            Los señores clientes tendrán a su disposición Hojas de Reclamaciones para poder dejar constancia de sus quejas si hubiera lugar a ello.
          </p>
          <p>
            Los señores clientes tendrán en todo momento a su disposición a los titulares del establecimiento para cualquier tipo de consulta o requerimiento
            en los números de teléfono que se les facilitarán. 
          </p>

          <h2>FORMA DE PAGO</h2>
          <p>
            Los Señores clientes deberán abonar el total de la estancia en el momento de la entrega de llaves y a la firma de este contrato, mediante efectivo,
            transferencia o tarjeta. 
          </p>

          <h2>NORMAS DE COMPORTAMIENTO Y EQUIPACIÓN</h2>
          <ul>
            <li>No se podrán realizar en la casa actividades molestas, nocivas, peligrosas o ilícitas.</li>
            <li>No se permiten mascotas.</li>
            <li>Se prohíbe fumar en el interior de la casa.</li>
            <li>
              Si se realizan actividades en el exterior de la casa, patio, piscina o terraza se tendrá especial cuidado de no molestar con las mismas a los vecinos
              del entorno con los criterios de buena vecindad que hubieran utilizado en su propia casa.
            </li>
            <li>
              La utilización de radios, equipos de sonido, reproductores, etc se hará con el volumen adecuado que no produzca molestias y a horas que no perturben
              el descanso de los vecinos, al mediodía y en horario nocturno.
            </li>
            <li>
              Las instalaciones, cocina, electrodomésticos, baños, calefacción, piscina etc. se utilizarán correctamente y en el caso de producirse algún desperfecto de manera
              involuntaria ESTE SE COMUNICARA A LOS PROPIETARIOS DE LA CASA.
            </li>
            <li>
              Los señores clientes se responsabilizan de la custodia de llaves y del cierre de puertas y ventanas en los momentos en que abandonen la misma.
            </li>
            <li>Los utensilios del patio no se utilizarán en el interior de la casa ni viceversa.</li>
            <li>
              En caso de producir rotura o deterioro tanto en el continente como en el contenido de la casa, se descontará el valor del daño de la fianza previamente
              depositada, y si el deterioro fuese de mayor valor, los huéspedes se comprometen a abonar la diferencia del valor de dicho deterioro.
            </li>
            <li>
              El sistema de calefacción y agua caliente consiste en aerotermia que mantendrá caliente y fresca la casa según la temporada, su funcionamiento es automático
              todas las estancias disponen de termostato que ajusta la temperatura.
            </li>
            <li>
              La casa dispone de barbacoa, tendrán a su disposición para su uso, un saco de carbón, el resto será por cuenta del cliente.
            </li>
          </ul>

          <h2>NORMAS DE LIMPIEZA</h2>
          <p>La casa es de alquiler completo, se entregará completamente limpia y no se efectuará ninguna limpieza mientras dura la estancia.</p>
          <p>La limpieza y el orden de la casa corresponderá a los Sres. Clientes.</p>
          <p>Si lo desean, se les facilitará un servicio de limpieza abonando 15 € por hora de trabajo.</p>
          <p>Al marcharse los Sres. Clientes deben dejar la casa limpia y ordenada.</p>
          <p>La vajilla y enseres de cocina deberán quedar limpios y colocados en el lugar correspondiente tal y como se lo encon­traron.</p>
          <p>En estancias superiores a siete noches se entregarán dos juegos de sábanas y toallas.</p>
          <p>
            Los Sres. Clientes encuentran todos los electrodomésticos en perfecto estado de funcionamiento, debiendo dejarlos así a la salida. Si se produjese una avería
            en cualquiera de ellos deberá comunicarlo a los titulares de la casa.
          </p>
          <p>
            La basura debe de ser depositada en los contenedores situados en la zona. Se les mostrará a su llegada la ubicación de los mismos. 
          </p>
          <p>En caso de no cumplimento de las normas de limpieza y mantenimiento podrán ser retenidos la cantidad de 50 € del importe de la fianza.</p>

          <h2>NORMAS DE USO DE LA PISCINA</h2>
          <ul>
            <li>La piscina es de temporada, permanecerá abierta y podrá disfrutarse desde el 1 de junio al 30 de septiembre.</li>
            <li>Ducharse antes de usar la piscina.</li>
            <li>Mantener el área de la piscina limpia.</li>
            <li>Se trata de una piscina de vivienda unifamiliar. No tiene la profundidad suficiente para tirarse de cabeza.</li>
            <li>No harán uso de la piscina los menores sin la presencia o vigilancia de sus padres o acompañantes en el aloja­miento.</li>
            <li>No se pueden utilizar envases o vasos de vidrio en el área de la piscina.</li>
            <li>No se pueden consumir alimentos y bebidas dentro de la piscina.</li>
            <li>
              Cualquier otra actividad que pueda ir en contra del cuidado y mantenimiento de las instalaciones de la piscina o que entrañe peligro para los usuarios.
            </li>
            <li>Los propietarios de DUX TOLEDO declinan toda responsabilidad en el mal uso de la piscina.</li>
          </ul>

          <h2>HORARIOS</h2>
          <p>
            Los señores clientes se atendrán a los horarios establecidos que figuran, consultando en todo caso a los propieta­rios de DUX TOLEDO en lo referente a la
            flexibilidad de los límites horarios.
          </p>
          <p>La entrada y entrega de llaves de lunes a sábado se producirá a partir de las 15:00 horas y la salida antes de las 11:00 a.m.</p>
          <p>La entrada y entrega de llaves los domingos se producirá a partir de las 19:30 horas y la salida antes de las 16:00 horas.</p>
        </article>
      </div>
    </main>
  );
}
