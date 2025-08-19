
// Datos de DUX TOLEDO - Casa Rural de Lujo
export const propertyData = {
  name: "DUX TOLEDO",
  tagline: "Casa Rural de Lujo en el Corazón de las Tres Culturas",
  description: "Casa rural de lujo ubicada en Olías del Rey, a solo 12 minutos del centro histórico de Toledo. Con piscina privada vallada, 6 habitaciones con nombres de emperadores romanos y todas las comodidades para una estancia inolvidable.",
  features: [
    "6 habitaciones con nombres romanos",
    "Piscina de 8x4 metros vallada",
    "Cocina completamente equipada en CASTRUM",
    "3 baños completos (LAVATRINA)",
    "Sistema de climatización aerotermia",
    "Barbacoa y cocina exterior",
    "Ajedrez gigante y mesa de ping pong",
    "Acceso para movilidad reducida",
    "Biblioteca y juegos de mesa",
    "Parking privado",
    "A 12 minutos de Toledo centro"
  ],
  contact: {
    email: "casarural@duxtoledo.com",
    phone: "+34 687 765 315",
    whatsapp: "+34 687 765 315"
  },
  location: {
    address: "Olías del Rey, Toledo, España",
    coordinates: { lat: 39.94856341279014, lng: -3.9940571054101515 }
  },
  rooms: [
    {
      name: "AGRIPPA",
      type: "Habitación Doble",
      description: "Habitación doble equipada con dos camas individuales, dos mesillas, armario con espejo, escritorio, dos sillas y ventilador de techo.",
      capacity: 2
    },
    {
      name: "SCIPIO AFRICANUS", 
      type: "Habitación Doble",
      description: "Habitación doble equipada con dos camas individuales, dos mesillas, armario con espejo, escritorio, dos sillas y ventilador de techo.",
      capacity: 2
    },
    {
      name: "GERMANICUS",
      type: "Habitación Doble", 
      description: "Habitación doble equipada con dos camas individuales, dos mesillas, armario con espejo, escritorio, dos sillas y ventilador de techo.",
      capacity: 2
    },
    {
      name: "POMPEIUS MAGNUS",
      type: "Habitación Doble",
      description: "Habitación doble equipada con dos camas individuales, dos mesillas, armario con espejo, escritorio, dos sillas y ventilador de techo.",
      capacity: 2
    },
    {
      name: "SULLA",
      type: "Habitación Triple",
      description: "Habitación triple equipada con tres camas individuales, tres mesillas, armario con espejo, escritorio, tres sillas y ventilador de techo.",
      capacity: 3
    },
    {
      name: "JULIUS CAESAR",
      type: "Habitación Doble - Accesible",
      description: "Habitación doble equipada con dos camas individuales, dos mesillas, armario, espejo, escritorio, dos sillas y ventilador de techo. Puerta de acceso con ancho especial de 80 cm y radio de giro de 1,5 m en el interior para permitir el acceso a personas con movilidad reducida.",
      capacity: 2
    }
  ],
  spaces: {
    castrum: {
      name: "CASTRUM",
      description: "Espacio abierto, compuesto de salón-cocina, zona de TV y mesa de juegos, de 65 m2. La cocina está totalmente equipada con horno, microondas, frigorífico, cocina de inducción, lavadora, secadora, plancha y pequeños electrodomésticos. La cocina cuenta también con todo el menaje necesario para abastecer las necesidades de los inquilinos. La gran mesa de comedor con capacidad para todos los comensales les permitirá una larga sobremesa. Dispone también de una biblioteca con todo tipo de libros de lectura, historia, novela y turismo y diferentes juegos de mesa y cartas para todas las edades. Se trata de una estancia apropiada para disfrutar de la convivencia en unos días de descanso."
    },
    lavatrina: {
      name: "LAVATRINA",
      description: "La vivienda dispone de tres baños completos equipados con lavabo, inodoro y plato de ducha de suelo continuo y mampara. LAVATRINA II tiene una puerta de acceso con ancho especial de 80 cm y está equipada con lavabo, inodoro, grifería, espejo para personas con movilidad reducida, también disponemos de barra de seguridad para inodoro plegable con asas antideslizantes y de banco de ducha asiento extraíble y respaldo reversible para facilitar su uso."
    },
    piscina: {
      name: "PISCINA",
      description: "Piscina de 8 x 4 metros. La piscina está vallada en todo su perímetro para tranquilidad de los adultos que viajen con niños."
    },
    exterior: {
      name: "EXTERIOR",
      description: "También en el exterior junto a la piscina, la vivienda dispone de una zona acondicionada para tomar el sol, relajarse y donde poder comer o cenar en verano al aire libre en un ambiente confortable. Dispone de barbacoa y una amplia zona de cocina con todo lo necesario para preparar arroces o guisos. Para el entretenimiento también tenemos un ajedrez gigante de exterior y una mesa de ping pong."
    }
  }
};

export const galleryImages = [
  // PISCINA - 4 fotos
  {
    id: 1,
    url: "https://cdn.abacus.ai/images/94d54c3c-93a8-4317-83f9-1e087f3315af.png",
    alt: "Piscina de 8x4 metros vallada para seguridad de niños",
    category: "piscina"
  },
  {
    id: 2,
    url: "https://www.turismodecalidad.com/images/w.1280/h.853/c.1/mr.0/d.listing_photos/sd.2023-06/i.2f421feadd6cb5da5b8559cdb4021019.jpg",
    alt: "Zona de piscina con tumbonas y área para tomar el sol",
    category: "piscina"
  },
  {
    id: 3,
    url: "https://media.revistaad.es/photos/62a31b9b6488892d74346915/master/w_2560%2Cc_limit/ITURREGI.jpg",
    alt: "Piscina con vista de casa rural de lujo",
    category: "piscina"
  },
  {
    id: 4,
    url: "https://thumbs.dreamstime.com/b/villa-de-lujo-estilo-espa%C3%B1ol-reflejando-en-piscina-al-atardecer-escena-tranquila-una-lujosa-que-se-refleja-muy-bien-iluminada-con-371100165.jpg",
    alt: "Piscina iluminada al atardecer con ambiente mágico",
    category: "piscina"
  },
  // EXTERIOR - 4 fotos
  {
    id: 5,
    url: "https://www.loscascajales.com/web/wp-content/uploads/2023/06/Terraza-con-mesas.jpg",
    alt: "Zona de barbacoa y cocina exterior completamente equipada",
    category: "exterior"
  },
  {
    id: 6,
    url: "https://cdn.abacus.ai/images/42252440-ff9d-4b9c-8cc7-f1dbee5e737e.png",
    alt: "Ajedrez gigante de exterior y mesa de ping pong en el jardín",
    category: "exterior"
  },
  {
    id: 7,
    url: "https://media.vrbo.com/lodging/35000000/34430000/34420300/34420260/69240486.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    alt: "Fachada de casa rural de lujo moderna DUX TOLEDO",
    category: "exterior"
  },
  {
    id: 8,
    url: "https://hips.hearstapps.com/hmg-prod/images/casa-con-piscina-estudio-terraza-balear-660d3e34a6051.jpg?resize=980:*",
    alt: "Terraza y área de comedor exterior con vistas",
    category: "exterior"
  },
  // CASTRUM - Interior principal - 4 fotos
  {
    id: 9,
    url: "https://media.vrbo.com/lodging/35000000/34030000/34022800/34022739/e2d1e8e8.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
    alt: "CASTRUM - Salón-cocina de 65m2 con mesa de comedor grande",
    category: "castrum"
  },
  {
    id: 10,
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MjQ4MzY5OTc=/original/3682612c-460b-4f6d-ba42-480e3f9a6899.jpeg?im_w=720",
    alt: "Habitación doble con ventilador de techo - estilo emperador romano",
    category: "dormitorios"
  },
  {
    id: 11,
    url: "https://tonobagno.com/wp-content/uploads/2015/05/Bano-moderno-casa-Pals-Samaria-55-Emporda-Girona-Cases-Singulars-Tono-Bagno-Barcelona1.jpg",
    alt: "LAVATRINA - Baño completo moderno con ducha y accesibilidad",
    category: "lavatrina"
  },
  {
    id: 12,
    url: "https://cdn.abacus.ai/images/603df7ef-3f39-4d61-9c96-7887d0548100.png",
    alt: "Biblioteca y zona de juegos con decoración romana",
    category: "castrum"
  },
  // LOCALIZACIÓN - 3 fotos
  {
    id: 13,
    url: "https://images.squarespace-cdn.com/content/v1/5c7976ec11f78465c3ab8a2d/79c67f22-c5bf-4c1e-9c02-944536316f56/Madrid%2C+Spain-0267-April+23%2C+2018+Smart+Photo.jpg",
    alt: "Panorámica de Toledo al atardecer desde DUX TOLEDO",
    category: "location"
  },
  {
    id: 14,
    url: "https://c8.alamy.com/comp/W4FBXX/beautiful-view-of-toledo-city-skyline-with-cathedral-alcazar-and-tagus-river-at-sunset-toledo-castila-la-macha-spain-W4FBXX.jpg",
    alt: "Vista histórica de Toledo - Ciudad de las Tres Culturas",
    category: "location"
  },
  {
    id: 15,
    url: "https://thumbs.dreamstime.com/b/castilian-landscapes-toledo-spain-wheat-field-spring-landscape-castilla-la-mancha-spain-castilian-landscapes-262993113.jpg",
    alt: "Paisaje castellano de Toledo - Entorno de DUX TOLEDO",
    category: "location"
  }
];

// Datos simulados del calendario con disponibilidad y precios
export const generateCalendarData = (year: number, month: number) => {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const today = new Date();
  
  const days = [];
  
  // Días del mes anterior para completar la primera semana
  const prevMonth = month === 0 ? 11 : month - 1;
  const prevYear = month === 0 ? year - 1 : year;
  const daysInPrevMonth = new Date(prevYear, prevMonth + 1, 0).getDate();
  
  for (let i = firstDay - 1; i >= 0; i--) {
    days.push({
      date: daysInPrevMonth - i,
      month: 'prev',
      available: false,
      price: 0
    });
  }
  
  // Días del mes actual
  for (let day = 1; day <= daysInMonth; day++) {
    const currentDate = new Date(year, month, day);
    const isPast = currentDate < today;
    
    // Simulación de disponibilidad y precios
    const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;
    const basePrice = isWeekend ? 120 : 95;
    const isBooked = Math.random() < 0.2; // 20% de probabilidad de estar reservado
    
    days.push({
      date: day,
      month: 'current',
      available: !isPast && !isBooked,
      price: basePrice,
      isBooked: !isPast && isBooked,
      isPast
    });
  }
  
  // Días del mes siguiente para completar la última semana
  const remainingDays = 42 - days.length; // 6 semanas * 7 días
  for (let day = 1; day <= remainingDays; day++) {
    days.push({
      date: day,
      month: 'next',
      available: false,
      price: 0
    });
  }
  
  return days;
};

export const monthNames = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

export const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
