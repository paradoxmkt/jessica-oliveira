import Image from 'next/image';
import { ShieldCheck, ShoppingCart, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const products = [
  { id: 1, type: 'image' as const, title: '3 Fotos + 3 Videos', price: 'R$7,50', src: 'https://i.imgur.com/zHn87Vx.jpeg', hint: 'model photo', link: 'https://www.ggcheckout.com/checkout/v2/tByeigRE7dK6ttSEW6LM' },
  { id: 3, type: 'image' as const, title: '5 Fotos + 5 Videos', price: 'R$10,00', src: 'https://i.imgur.com/U3eKvuj.jpeg', hint: 'beach photo', link: 'https://www.ggcheckout.com/checkout/v2/8NNx6v5OwbrLVqrLqEpP' },
  { id: 5, type: 'image' as const, title: '10 Fotos + 10 Videos', price: 'R$17,90', src: 'https://i.imgur.com/PJZmkmg.jpeg', hint: 'sensual photo', link: 'https://www.ggcheckout.com/checkout/v2/ocOeOQcULNvcz8CvegMd' },
  { id: 4, type: 'image' as const, title: '20 Fotos + 20 Videos', price: 'R$29,90', src: 'https://i.imgur.com/GEAIoSh.jpeg', hint: 'exclusive photo', link: 'https://www.ggcheckout.com/checkout/v2/2FmFMLuoqJctGa6PtOhj' },
];

export default function ExtraSection() {
  const renderCardButton = (product: (typeof products)[0]) => {
    const button = (
      <Button size="sm" className="w-full text-sm h-9 btn-gradient shadow-lg transition-transform hover:scale-105">
        Comprar
      </Button>
    );

    if (product.link) {
      return (
        <a href={product.link} target="_blank" rel="noopener noreferrer" className="w-full">
          {button}
        </a>
      );
    }

    return button;
  };

  return (
    <>
      <section className="container mx-auto px-4 py-8 pt-4 md:pt-8">
        <div className="flex items-center justify-center gap-2 mb-6 text-center">
           <ShoppingCart className="h-10 w-10 text-primary" />
           <h1 className="text-4xl font-bold font-headline">Lojinha</h1>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {products.map(product => (
            <Card key={product.id} className="group relative aspect-[3/4] w-full overflow-hidden shadow-lg border-none">
                <Image 
                    src={product.src} 
                    alt={product.title} 
                    data-ai-hint={product.hint}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                
                {product.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                    <PlayCircle className="h-12 w-12 text-white/80 drop-shadow-lg" strokeWidth={1.5} />
                    </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white flex flex-col justify-end h-full">
                    <div className='mt-auto'>
                        <h3 className="font-bold text-base md:text-lg leading-tight">{product.title}</h3>
                        <p className="text-lg md:text-xl font-semibold text-accent my-1">{product.price}</p>
                        {renderCardButton(product)}
                    </div>
                </div>
            </Card>
          ))}
        </div>
      </section>
      {/* Footer Section */}
      <footer className="py-8 bg-background border-t">
        <div className="container mx-auto px-4 text-center text-foreground/60">
            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="h-6 w-6 text-green-500" />
                    <p className="font-semibold">Site 100% Seguro e Verificado</p>
                </div>
                <p className="text-sm">Nota máxima em segurança e discrição.</p>
                <p className="text-xs mt-4">
                    &copy; 2025 Jéssica Oliveira. Todos os direitos reservados.
                </p>
            </div>
        </div>
      </footer>
    </>
  );
}
