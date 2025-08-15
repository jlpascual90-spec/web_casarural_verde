
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Images, Calendar, Phone, Menu, X, Euro } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/galeria", label: "Galería", icon: Images },
  { href: "/calendario", label: "Calendario", icon: Calendar },
  { href: "/tarifas", label: "Tarifas", icon: Euro },
  { href: "/contacto", label: "Contacto", icon: Phone },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative h-10 w-16">
              <img
                src="/dux-toledo-logo.png"
                alt="DUX TOLEDO Logo - Casa Rural"
                className="h-full w-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems?.map((item) => {
              const Icon = item?.icon;
              const isActive = pathname === item?.href;
              
              return (
                <Link
                  key={item?.href}
                  href={item?.href || "/"}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md scale-105 font-semibold"
                      : "text-muted-foreground hover:text-primary hover:bg-accent/50 hover:scale-102"
                  }`}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  <span className="font-medium">{item?.label}</span>
                </Link>
              );
            })}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-effect border-t border-border/20 animate-fade-in">
            <div className="px-4 py-2 space-y-1">
              {navItems?.map((item) => {
                const Icon = item?.icon;
                const isActive = pathname === item?.href;
                
                return (
                  <Link
                    key={item?.href}
                    href={item?.href || "/"}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md scale-105 font-semibold"
                        : "text-muted-foreground hover:text-primary hover:bg-accent/50"
                    }`}
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                    <span className="font-medium">{item?.label}</span>
                  </Link>
                );
              })}
            </div>
        </div>
      )}
    </nav>
  );
}
