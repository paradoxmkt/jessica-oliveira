"use client";

import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <header className={cn(
        "relative z-40 flex items-center justify-end p-2 bg-background/80 backdrop-blur-sm h-14"
      )}>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </header>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="py-4 flex flex-col space-y-4">
            <Button
              variant="outline"
              onClick={toggleTheme}
              className="w-full justify-start"
            >
              {theme === 'dark' ? <Sun className="mr-2 h-4 w-4" /> : <Moon className="mr-2 h-4 w-4" />}
              <span>{theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}</span>
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="w-full justify-start"
            >
              <X className="mr-2 h-4 w-4" />
              <span>Fechar</span>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
