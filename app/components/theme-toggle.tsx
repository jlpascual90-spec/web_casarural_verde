
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-lg bg-accent animate-pulse" />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="h-9 w-9 rounded-lg bg-accent hover:bg-accent/80 flex items-center justify-center transition-colors"
      aria-label="Cambiar tema"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-accent-foreground" />
      ) : (
        <Moon className="h-4 w-4 text-accent-foreground" />
      )}
    </button>
  );
}
