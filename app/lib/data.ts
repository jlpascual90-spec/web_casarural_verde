// Datos de DUX TOLEDO - Casa Rural de Lujo
export const propertyData = {
  name: "DUX TOLEDO",
  tagline: "Casa Rural de Lujo en el Corazón de las Tres Culturas",
  description: "Casa rural de lujo ubicada en Olías del Rey, a solo 12 minutos del centro histórico de Toledo. Con piscina privada vallada, 6 habitaciones con nombres de generales romanos y todas las comodidades para una estancia inolvidable.",
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
      name: "SULLA",
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
      name: "GERMÁNICUS",
      type: "Habitación Triple",
      description: "Habitación doble equipada con dos camas individuales y una cama supletoria, tres mesillas, armario con espejo, escritorio, tres sillas y ventilador de techo.",
      capacity: 2+1
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
      description: "La vivienda dispone de tres baños completos equipados con lavabo, inodoro y plato de ducha de suelo continuo y mampara. LAVATRINA II tiene una puerta de acceso con ancho especial de 80 cm y  está equipada con lavabo, inodoro, grifería y espejo para personas con movilidad reducida, también disponemos de silla para ducha e inodoro para facilitar su uso."
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
  // PISCINA - IDs 1-10
  {
    id: 1,
    url: "/01_exteriores/69.avif",
    alt: "Piscina de 8x4 metros con mosaico azul y agua cristalina, un espacio luminoso y refrescante.",
    category: "piscina"
  },
  {
    id: 2,
    url: "/01_exteriores/71 DUX EXTERIORES.avif",
    alt: "Zona de piscina con tumbonas y área para tomar el sol",
    category: "piscina"
  },
  
  // EXTERIOR - IDs 11-20
  {
    id: 11,
    url: "/01_exteriores/65 DUX EXTERIORES.avif",
    alt: "Amplia terraza con mesa de ping‑pong, larga mesa de comedor al aire libre y fachada de piedra; un espacio soleado ideal para reuniones y ocio.",
    category: "EXTERIOR"
  },
  {
    id: 12,
    url: "/01_exteriores/83 DUX EXTERIORES.avif",
    alt: "Espacio de barbacoa totalmente equipado con fregadero, encimera y armarios, ideal para cocinar al aire libre.",
    category: "EXTERIOR"
  },
  {
    id: 13,
    url: "/01_exteriores/84 DUX EXTERIORES.avif",
    alt: "Zona de barbacoa y cocina exterior",
    category: "EXTERIOR"
  },
  {
    id: 14,
    url: "/01_exteriores/78 DUX EXTERIORES.avif",
    alt: "Ajedrez gigante de exterior y mesa de ping pong en el jardín",
    category: "EXTERIOR"
  },
  {
    id: 15,
    url: "/01_exteriores/66 DUX EXTERIORES.avif",
    alt: "Detalle decorativo con bidón lechero y aceitero antiguos, toque auténtico y rural en los exteriores.",
    category: "EXTERIOR"
  },
  {
    id: 16,
    url: "/01_exteriores/77 DUX EXTERIORES.avif",
    alt: "Patio con un rincón cuidado y tranquilo para disfrutar al aire libre.",
    category: "EXTERIOR"
  },
  {
    id: 17,
    url: "/01_exteriores/75 DUX EXTERIORES.avif",
    alt: "Exterior com amplio patio y piscina",
    category: "EXTERIOR"
  },
  {
    id: 18,
    url: "/01_exteriores/63 DUX EXTERIORES.avif",
    alt: "Fachada edificio con detalles cuidados y camino de acceso",
    category: "EXTERIOR"
  },  
  // CASTRUM - IDs 21-30
  {
    id: 21,
    url: "https://i.imgur.com/4sYZ1vi.jpeg",
    alt: "CASTRUM - Salón-cocina de 65m2 con mesa de comedor grande",
    category: "CASTRUM"
  },
  {
    id: 22,
    url: "https://i.imgur.com/Pl3hHDP.jpeg",
    alt: "CASTRUM - Espacio cálido para descansar y convivir",
    category: "CASTRUM"
  },
  {
    id: 23,
    url: "https://i.imgur.com/npp2JXc.jpeg",
    alt: "Pared de piedra decorada con relieve heráldico del escudo de Toledo, ambiente luminoso y con encanto",
    category: "CASTRUM"
  },
  {
    id: 24,
    url: "https://i.imgur.com/MX09Nu8.jpeg",
    alt: "Ambiente acogedor y de altos detalles para reuniones relajadas",
    category: "CASTRUM"
  },
  {
    id: 25,
    url: "/02_interiores/26 DUX CASTRUM.avif",
    alt: "CASTRUM - Espacio cálido para descansar y convivir",
    category: "CASTRUM"
  },
  {
    id: 26,
    url: "/02_interiores/50 DUX CASTRUM.avif",
    alt: "CASTRUM - Espacio de juegos",
    category: "CASTRUM"
  },
  {
    id: 27,
    url: "/02_interiores/101 DUX CASTRUM.avif",
    alt: "CASTRUM - Detalle máquina recreativa",
    category: "CASTRUM"
  },
  
  // HABITACIONES - IDs 31-69
  // JULIUS CAESAR - IDs 31-35
  {
    id: 31,
    url: "https://i.imgur.com/L9tFcQS.jpeg",
    alt: "JULIUS CAESAR - Habitación luminosa con doble cama individual, espacio tranquilo y práctico para descanso reparador.",
    category: "JULIUS CAESAR"
  },
  
  // POMPEIUS MAGNUS - IDs 36-40
  {
    id: 36,
    url: "https://i.imgur.com/kAs5F4Z.jpeg",
    alt: "POMPEIUS MAGNUS - Detalle cartel entrada a habitación.",
    category: "POMPEIUS MAGNUS"
  },
  {
    id: 37,
    url: "https://i.imgur.com/qYJgxN4.jpeg",
    alt: "POMPEIUS MAGNUS - Habitación doble con pequeño escritorio.",
    category: "POMPEIUS MAGNUS"
  },
  
  // SCIPIO AFRICANUS - IDs 41-45
  {
    id: 41,
    url: "https://i.imgur.com/lHtyrLc.jpeg",
    alt: "SCIPIO AFRICANUS - Habitación doble con baño contiguo.",
    category: "SCIPIO AFRICANUS"
  },
  
  // AGRIPPA - IDs 46-50
  {
    id: 46,
    url: "https://i.imgur.com/zZ9h6s2.jpeg",
    alt: "AGRIPPA - Habitación doble con pared texturizada.",
    category: "AGRIPPA"
  },
  {
    id: 47,
    url: "https://i.imgur.com/uP54GrO.jpeg",
    alt: "AGRIPPA - Detalle escritorio.",
    category: "AGRIPPA"
  },
  
  // SULLA - IDs 51-55
  {
    id: 51,
    url: "/02_interiores/60 DUX SULLA.avif",
    alt: "SULLA - Habitación doble, refugio fresco y acogedor.",
    category: "SULLA"
  },
  {
    id: 52,
    url: "/02_interiores/57 DUX SULLA.avif",
    alt: "SULLA - Escritorio y luz ambiental.",
    category: "SULLA"
  },
  {
    id: 53,
    url: "/02_interiores/59 DUX SULLA.avif",
    alt: "SULLA - Habitación doble, detalles cuidados.",
    category: "SULLA"
  },
  
  // GERMANICUS - IDs 56-60
  {
    id: 56,
    url: "https://i.imgur.com/amrpnk1.jpeg",
    alt: "GERMANICUS - Habitación triple, con cama supletoria, inspirada en la serenidad de los campamentos romanos.",
    category: "GERMANICUS"
  },
  
  // LAVATRINA - IDs 70-80
  {
    id: 70,
    url: "02_interiores/13 DUX LAVATRINA I.avif",
    alt: "LAVATRINA I - El aseo rinde guiño a las termas romanas.",
    category: "LAVATRINA"
  },
  {
    id: 71,
    url: "02_interiores/20 DUX LAVATRINA II.avif",
    alt: "LAVATRINA II - Aseo amplio y adaptado.",
    category: "LAVATRINA"
  },
  {
    id: 72,
    url: "02_interiores/22 DUX LAVATRINA III.avif",
    alt: "LAVATRINA III - Aseo práctico y luminoso que invita a cuidarse tras un día de aventuras.",
    category: "LAVATRINA"
  },
  {
    id: 73,
    url: "02_interiores/14 DUX LAVATRINA I.avif",
    alt: "LAVATRINA I - Termas romanas completamentes equipadas.",
    category: "LAVATRINA"
  },
  {
    id: 74,
    url: "02_interiores/16 DUX LAVATRINA I.avif",
    alt: "LAVATRINA I - Aseo con cuidados detalles",
    category: "LAVATRINA"
  },
  
  // LOCALIZACIÓN - IDs 90-99
  {
    id: 90,
    url: "https://images.squarespace-cdn.com/content/v1/5c7976ec11f78465c3ab8a2d/79c67f22-c5bf-4c1e-9c02-944536316f56/Madrid%2C+Spain-0267-April+23%2C+2018+Smart+Photo.jpg",
    alt: "Panorámica de Toledo - Ciudad de las Tres Culturas",
    category: "location"
  },
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

export const dayNames = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
