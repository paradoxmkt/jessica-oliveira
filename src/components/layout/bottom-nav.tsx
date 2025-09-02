"use client";

import { Home, Image as ImageIcon, ShoppingBag, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Section } from '@/app/page';

interface BottomNavProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'gallery', icon: ImageIcon, label: 'Galeria' },
  { id: 'extra', icon: ShoppingBag, label: 'Packs' },
] as const;

export default function BottomNav({ activeSection, setActiveSection }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-sm border-t border-border z-50">
      <div className="flex justify-around items-center h-full max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className="relative flex flex-col items-center justify-center w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full group"
              aria-label={item.label}
            >
              <item.icon
                className={cn(
                  "h-7 w-7 text-foreground/70 group-hover:text-foreground transition-colors",
                   isActive && "active-gradient-text"
                )}
                strokeWidth={isActive ? 2.5 : 2}
              />
               {isActive && (
                <div className="absolute bottom-1 h-1 w-8 bg-primary rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
