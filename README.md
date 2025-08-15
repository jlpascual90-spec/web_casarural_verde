
# 🏡 DUX TOLEDO - Casa Rural de Lujo

Una elegante página web para la casa rural de lujo DUX TOLEDO, ubicada en Toledo, España. Diseñada para mostrar las características únicas de la propiedad y facilitar las reservas.

## ✨ Características

- **🎨 Diseño Moderno**: Interfaz elegante con modo claro/oscuro
- **📱 Responsive**: Optimizado para todos los dispositivos
- **🖼️ Galería de Fotos**: Presentación visual atractiva de la propiedad
- **📅 Calendario de Disponibilidad**: Sistema de reservas integrado
- **💰 Tarifas Transparentes**: Precios claros y detallados
- **📍 Ubicación**: Información detallada sobre la localización
- **⚖️ Páginas Legales**: Aviso legal, política de privacidad y cookies
- **🌐 SEO Optimizado**: Configurado para motores de búsqueda

## 🏠 Sobre DUX TOLEDO

DUX TOLEDO es una casa rural de lujo que ofrece:

- **2 Dormitorios** con camas king-size y baño en suite
- **Salón Principal** con chimenea y zona de entretenimiento
- **Cocina Gourmet** totalmente equipada
- **Piscina Privada** y área de relajación
- **Jardín** con espacios para BBQ
- **Ubicación Privilegiada** cerca del centro histórico de Toledo

## 🚀 Tecnologías Utilizadas

- **Framework**: Next.js 14
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Iconos**: Lucide React
- **Fuentes**: Google Fonts (Cinzel)
- **Tema**: next-themes para modo claro/oscuro

## 📦 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- Yarn (recomendado) o npm

### Instalación
```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]
cd casa_rural_toledo

# Navegar a la carpeta de la aplicación
cd app

# Instalar dependencias
yarn install

# Ejecutar en modo desarrollo
yarn dev
```

La aplicación estará disponible en `http://localhost:3000`

### Scripts Disponibles
```bash
yarn dev      # Modo desarrollo
yarn build    # Construir para producción
yarn start    # Ejecutar versión de producción
yarn lint     # Verificar código con ESLint
```

## 🌐 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio de GitHub con Vercel
2. Vercel detectará automáticamente que es un proyecto Next.js
3. Configurar las variables de entorno necesarias
4. ¡Desplegar!

### Variables de Entorno
Crea un archivo `.env.local` basado en `.env.example`:

```env
# Añade aquí las variables de entorno necesarias
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
```

## 📁 Estructura del Proyecto

```
app/
├── app/                    # App Router de Next.js
│   ├── (pages)/           # Páginas principales
│   ├── globals.css        # Estilos globales
│   └── layout.tsx         # Layout principal
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes de UI (shadcn/ui)
│   ├── Footer.tsx        # Footer del sitio
│   ├── Navigation.tsx    # Navegación principal
│   └── ...               # Otros componentes
├── lib/                  # Utilidades y configuración
├── public/              # Archivos estáticos
└── data/               # Datos de la aplicación
```

## 📱 Características Principales

### 🎨 Tema y Diseño
- Colores principales: Verde (#54705e) y variaciones
- Tipografía: Cinzel para elegancia
- Modo claro/oscuro automático
- Animaciones sutiles con Framer Motion

### 📋 Páginas Incluidas
- **Inicio**: Presentación principal con hero section
- **Habitaciones**: Detalles de los dormitorios
- **Espacios**: Áreas comunes y amenidades
- **Servicios**: Servicios adicionales disponibles
- **Tarifas**: Precios transparentes
- **Contacto**: Formulario de contacto y información
- **Páginas Legales**: Cumplimiento legal completo

### 🛡️ Cumplimiento Legal
- Aviso Legal completo
- Política de Privacidad según RGPD
- Política de Cookies
- Banner de consentimiento de cookies

## 🤝 Contacto

- **Email**: casarural@duxtoledo.com
- **Teléfono**: 687 765 315
- **Dirección**: Toledo, España

## 📄 Licencia

Este proyecto es privado y pertenece a DUX TOLEDO. Todos los derechos reservados.

---

**Desarrollado con ❤️ para DUX TOLEDO**
