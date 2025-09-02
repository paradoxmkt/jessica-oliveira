import { PartyPopper, ShieldCheck } from 'lucide-react';

export default function ExtraSection() {
  return (
    <>
    <section className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <div className="flex justify-center mb-4">
            <PartyPopper className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-2 font-headline">Em Breve</h1>
        <p className="text-lg text-foreground/80">Novidades e conteúdos exclusivos estão a caminho!</p>
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
                    &copy; {new Date().getFullYear()} Jéssica Oliveira. Todos os direitos reservados.
                </p>
            </div>
        </div>
      </footer>
    </>
  );
}
