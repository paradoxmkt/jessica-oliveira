"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Camera, ShieldCheck } from 'lucide-react';

const galleryImages = [
  { id: 1, src: 'https://i.imgur.com/vEWPaTG.png', alt: 'Gallery image 1' },
  { id: 2, src: 'https://i.imgur.com/zHn87Vx.jpeg', alt: 'Gallery image 2' },
  { id: 3, src: 'https://i.imgur.com/PJZmkmg.jpeg', alt: 'Gallery image 3' },
  { id: 4, src: 'https://i.imgur.com/GEAIoSh.jpeg', alt: 'Gallery image 4' },
  { id: 5, src: 'https://i.imgur.com/U3eKvuj.jpeg', alt: 'Gallery image 5' },
  { id: 6, src: 'https://i.imgur.com/tJt8wav.jpeg', alt: 'Gallery image 6' },
  { id: 7, src: 'https://i.imgur.com/zQ4Gd4D.jpeg', alt: 'Gallery image 7' },
  { id: 8, src: 'https://i.imgur.com/Vj8DrOh.jpeg', alt: 'Gallery image 8' },
  { id: 9, src: 'https://i.imgur.com/Wq3EGm1.jpeg', alt: 'Gallery image 9' },
  { id: 10, src: 'https://i.imgur.com/1DIoKRd.jpeg', alt: 'Gallery image 10' },
  { id: 11, src: 'https://i.imgur.com/VyoJqfO.jpeg', alt: 'Gallery image 11' },
  { id: 12, src: 'https://i.imgur.com/xL7rD4w.jpeg', alt: 'Gallery image 12' },
];


export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="container mx-auto px-2 pt-8 text-center">
        <div className="flex justify-center mb-4">
          <Camera className="h-16 w-16 text-primary" />
        </div>
        <p className="text-sm text-foreground/80 leading-relaxed font-medium mb-8">
          <strong>Atenção:</strong> o que você vê aqui é só a superfície. 😉
        </p>
        <div className="grid grid-cols-3 gap-1 md:grid-cols-4 md:gap-2 lg:grid-cols-5">
          {galleryImages.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image.src)}
              className="relative aspect-[3/4] overflow-hidden rounded-md group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              <Image
                src={image.src}
                alt={image.alt}
                data-ai-hint="model photo"
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            </button>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button
            size="lg"
            className="bg-gradient-to-r from-accent to-primary text-primary-foreground font-bold text-base shadow-lg transition-transform hover:scale-105"
          >
            Quero Ver Tudo!
          </Button>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
        <DialogContent className="p-0 border-0 max-w-4xl bg-transparent shadow-none">
          {selectedImage && (
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={selectedImage}
                data-ai-hint="model photo"
                alt="Selected gallery image"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer Section */}
      <footer className="py-8 bg-background border-t mt-8">
        <div className="container mx-auto px-4 text-center text-foreground/60">
            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="h-6 w-6 text-green-500" />
                    <p className="font-semibold">Site 100% Seguro e Verificado</p>
                </div>
                <p className="text-sm">Nota máxima em segurança e discrição.</p>
                <p className="text-xs mt-4">
                    &copy; {new Date().getFullYear()} Jéssica Oliveira. Todos os direitos reservados.
                </p>
            </div>
        </div>
      </footer>
    </>
  );
}
