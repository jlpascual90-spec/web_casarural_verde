
"use client";

import React from "react";
import { 
  Thermometer, 
  Shield, 
  MapPin, 
  Train, 
  Bus, 
  Phone, 
  Clock, 
  Star,
  Mountain,
  Camera,
  Castle
} from "lucide-react";

export function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            INSTALACIONES Y SERVICIOS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Todo lo que necesitas para una estancia perfecta en DUX TOLEDO
          </p>
        </div>

        {/* INSTALACIONES DE CALIDAD */}
        <div className="mb-16">
          <div className="bg-card rounded-xl p-8 shadow-elegant border border-border/20">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Star className="h-6 w-6 text-primary mr-3" />
              INSTALACIONES DE CALIDAD
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              La casa se ubica en un entorno muy tranquilo, el tipo de construcción como vivienda unifamiliar con materiales de primera calidad, el sistema de climatización es de aerotermia proporcionando una temperatura adecuada tanto en los meses de frío como en los de calor. Los servicios de que dispone tanto en el interior como en el exterior de la vivienda, la cercanía a zonas comerciales y de servicios de salud, así como el que pueda disponer de una cocina equipada como si estuviera en su propia casa, hacen de DUX TOLEDO el lugar ideal para poder disfrutar unos días culturales o de descanso en el entorno de la ciudad de las tres culturas y patrimonio de la humanidad que Vd. estaba deseando conocer.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <Thermometer className="h-10 w-10 mx-auto mb-4 text-primary" />
                <h4 className="font-bold text-lg mb-2">Sistema Aerotermia</h4>
                <p className="text-sm text-muted-foreground">Climatización eficiente todo el año</p>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <Shield className="h-10 w-10 mx-auto mb-4 text-primary" />
                <h4 className="font-bold text-lg mb-2">Materiales Premium</h4>
                <p className="text-sm text-muted-foreground">Construcción de primera calidad</p>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-lg">
                <MapPin className="h-10 w-10 mx-auto mb-4 text-primary" />
                <h4 className="font-bold text-lg mb-2">Entorno Tranquilo</h4>
                <p className="text-sm text-muted-foreground">Vivienda unifamiliar aislada</p>
              </div>
            </div>
          </div>
        </div>

        {/* BIEN UBICADA */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-primary mr-3" />
                BIEN UBICADA
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                La casa está situada en una zona tranquila con acceso directo a la ciudad de Toledo a doce minutos del centro histórico y de cualquiera de los aparcamientos públicos situados en las dos escaleras mecánicas que le permiten acceder cómodamente a la plaza de Zocodover o a San Juan de los Reyes. Con igual o mayor facilidad incluso de acceso que desde cualquier punto de la propia ciudad.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span><strong>12 minutos</strong> al centro histórico de Toledo</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Acceso directo a <strong>Plaza Zocodover</strong></span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Castle className="h-4 w-4 text-primary" />
                  <span>Cerca de <strong>San Juan de los Reyes</strong></span>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h4 className="font-bold text-primary mb-4">Ubicación en Olías del Rey</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  A solo 5 minutos de la A-42 Madrid-Toledo, con fácil acceso tanto a Toledo como a Madrid.
                </p>
                <div className="bg-white dark:bg-card rounded-lg p-4 border">
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="font-semibold">Madrid:</span>
                      <p className="text-muted-foreground">45 min por A-42</p>
                    </div>
                    <div>
                      <span className="font-semibold">Toledo Centro:</span>
                      <p className="text-muted-foreground">12 min en coche</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TRANSPORTE Y COMUNICACIONES */}
        <div className="mb-16">
          <div className="bg-card rounded-xl p-8 shadow-elegant border border-border/20">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <Bus className="h-6 w-6 text-primary mr-3" />
              TRANSPORTE Y COMUNICACIONES
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="h-12 w-12 mx-auto mb-3 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <div className="text-2xl">🚗</div>
                </div>
                <h4 className="font-semibold mb-1">A-42</h4>
                <p className="text-xs text-muted-foreground">2 min a la salida Madrid-Toledo</p>
              </div>
              
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Bus className="h-8 w-8 mx-auto mb-3 text-green-600" />
                <h4 className="font-semibold mb-1">Autobús</h4>
                <p className="text-xs text-muted-foreground">Toledo ↔ Olías del Rey</p>
              </div>
              
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Phone className="h-8 w-8 mx-auto mb-3 text-yellow-600" />
                <h4 className="font-semibold mb-1">Taxi</h4>
                <p className="text-xs text-muted-foreground">925 67 30 67</p>
              </div>
              
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <Train className="h-8 w-8 mx-auto mb-3 text-red-600" />
                <h4 className="font-semibold mb-1">AVE</h4>
                <p className="text-xs text-muted-foreground">Toledo - Madrid</p>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-6">
              <h4 className="font-semibold mb-3">Servicios Cercanos</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Junto al centro comercial Puerta de Toledo, donde puede realizar sus compras en Froiz y divertirse en sus salas de cine o bolera.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">Supermercado Froiz</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">Cines</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs">Bolera</span>
              </div>
            </div>
          </div>
        </div>

        {/* ALREDEDORES */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center flex items-center justify-center">
            <Mountain className="h-6 w-6 text-primary mr-3" />
            ALREDEDORES - LUGARES DE INTERÉS
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Puy du Fou */}
            <div className="bg-card rounded-lg p-6 shadow-elegant border border-border/20 hover:shadow-elegant-lg transition-all duration-300">
              <div className="flex items-center mb-3">
                <div className="h-10 w-10 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mr-3">
                  <div className="text-lg">🎭</div>
                </div>
                <div>
                  <h4 className="font-semibold">Puy du Fou España</h4>
                  <p className="text-xs text-muted-foreground">20 minutos</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Parque temático histórico reconocido mundialmente. Un viaje en el tiempo donde la Historia de España cobra vida.
              </p>
            </div>

            {/* Toledo Centro */}
            <div className="bg-card rounded-lg p-6 shadow-elegant border border-border/20 hover:shadow-elegant-lg transition-all duration-300">
              <div className="flex items-center mb-3">
                <Castle className="h-8 w-8 text-amber-600 mr-3" />
                <div>
                  <h4 className="font-semibold">Toledo Histórico</h4>
                  <p className="text-xs text-muted-foreground">12 minutos</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Ciudad de las Tres Culturas, Patrimonio de la Humanidad. Catedral, Alcázar, Barrio Judío.
              </p>
            </div>

            {/* Otros lugares */}
            <div className="bg-card rounded-lg p-6 shadow-elegant border border-border/20 hover:shadow-elegant-lg transition-all duration-300">
              <div className="flex items-center mb-3">
                <Camera className="h-8 w-8 text-green-600 mr-3" />
                <div>
                  <h4 className="font-semibold">Rutas Turísticas</h4>
                  <p className="text-xs text-muted-foreground">&lt; 1 hora</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Carranque, Los Grecos de Illescas, Castillos de los Montes, Cabañeros, Ruta del Quijote, Aranjuez.
              </p>
            </div>
          </div>

          {/* Lista completa de lugares */}
          <div className="mt-8 bg-muted/30 rounded-lg p-6">
            <h4 className="font-semibold mb-4">Lugares de Interés Cercanos (menos de 1 hora)</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Parque Arqueológico Carranque</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Los Grecos de Illescas</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Castillos Montes de Toledo</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Parque Nacional Cabañeros</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Lagunas de Villafranca</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Ruta del Quijote</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Consuegra - Campo Criptana</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Palacio de Aranjuez</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
