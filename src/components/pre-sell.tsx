"use client";

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Loader2 } from 'lucide-react';

export default function PreSell() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background animate-in fade-in-50">
      <div className="flex flex-col items-center gap-6">
        <Avatar className="w-32 h-32 border-4 border-primary/50 shadow-lg animate-pulse">
          <AvatarImage src="https://i.imgur.com/3i1QmiJ.jpeg" data-ai-hint="woman face" alt="Jéssica Oliveira" />
          <AvatarFallback>JO</AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-3 text-lg font-medium text-foreground/80">
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
          <span>Carregando conteúdo...</span>
        </div>
        <p className="text-sm text-foreground/60 max-w-xs text-center">
          Você está prestes a entrar em um universo de conteúdo exclusivo.
        </p>
      </div>
    </div>
  );
}
