"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageSquare, Instagram, Gem, Camera, Heart, Lock, Sparkles, ShieldCheck } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import React from 'react';
import Autoplay from "embla-carousel-autoplay"
import type { Section } from '@/app/page';


const EighteenPlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M14.5 14.5a2.5 2.5 0 0 0-5 0V12a2.5 2.5 0 0 0 5 0V9.5a2.5 2.5 0 0 0-5 0" />
        <path d="M7 12h2" />
        <path d="M15 12h2" />
    </svg>
);


const socialLinks = [
  { id: 'packs', icon: EighteenPlusIcon, label: 'Packs', type: 'nav' as const, section: 'extra' as Section },
  { id: 'whatsapp', icon: MessageSquare, label: 'WhatsApp', type: 'link' as const, href: '#' },
  { id: 'instagram', icon: Instagram, label: 'Instagram', type: 'link' as const, href: '#' },
];

const testimonials = [
  { name: 'Alex T.', avatar: '/avatars/01.png', comment: 'O melhor conteúdo que já vi! Vale cada centavo.' },
  { name: 'Julia M.', avatar: '/avatars/02.png', comment: 'Qualidade incrível e sempre com novidades. Recomendo!' },
  { name: 'Carlos S.', avatar: '/avatars/03.png', comment: 'Transformou minha percepção sobre conteúdo exclusivo.' },
  { name: 'Ana B.', avatar: '/avatars/04.png', comment: 'Simplesmente fantástica. Assinatura renovada com certeza.' },
];

const benefits = [
    { icon: Camera, text: 'Acesso total a fotos e vídeos picantes — nada de conteúdo reciclado de rede social. Aqui é 100% inédito.'},
    { icon: Heart, text: 'Conteúdo íntimo e atualizado toda semana — sempre tem novidade pra você não enjoar.'},
    { icon: Lock, text: 'Grupo fechado no Telegram — mais proximidade e interação direta comigo.'},
    { icon: Sparkles, text: 'Experiência única — só quem entra sabe como é viciante.'}
];

const faqItems = [
    {
        question: "O que eu encontro no grupo VIP?",
        answer: "Conteúdo exclusivo: fotos e vídeos que não aparecem em nenhuma outra rede social. Só no VIP você tem acesso total, sem censura."
    },
    {
        question: "Tem fotos e vídeos íntimos mesmo?",
        answer: "Sim 😈. Aqui você vê minhas fotos peladas, vídeos transando e momentos que não mostro em nenhum outro lugar."
    },
    {
        question: "O acesso é imediato?",
        answer: "Sim! Após o pagamento, você recebe automaticamente o link de acesso no seu e-mail. É rápido, simples e discreto."
    },
    {
        question: "Com que frequência tem novidades?",
        answer: "Atualizações semanais com fotos e vídeos inéditos pra você nunca enjoar."
    },
    {
        question: "Posso cancelar quando quiser?",
        answer: "Sim, a assinatura é totalmente flexível. Você tem liberdade total pra entrar e sair quando quiser."
    }
]

interface HomeSectionProps {
  onNavigate?: (section: Section) => void;
}

export default function HomeSection({ onNavigate }: HomeSectionProps) {
    const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        <Image
          src="https://i.imgur.com/Gp8rLDL.jpeg"
          alt="Model photo"
          data-ai-hint="model photo"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 flex flex-col items-center p-4">
          <Avatar className="w-28 h-28 mb-4 border-4 border-white/80 shadow-lg">
            <AvatarImage src="https://i.imgur.com/NDhMWnI.jpeg" data-ai-hint="woman face" alt="Jéssica Oliveira" />
            <AvatarFallback>JO</AvatarFallback>
          </Avatar>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-headline" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            Jéssica Oliveira
          </h1>
          <p className="mt-2 max-w-md text-lg font-light">
            Modelo digital e criadora de conteúdos exclusivos.
          </p>
          <Button
            size="lg"
            className="mt-6 bg-gradient-to-r from-accent to-primary text-primary-foreground font-bold text-base shadow-lg transition-transform hover:scale-105"
          >
            Acessar Conteúdo VIP
          </Button>
           <p className="mt-4 max-w-lg text-sm font-light text-white/90" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}>
            Descubra um pouco mais de mim e do que só mostro para quem sabe apreciar de verdade...
          </p>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {socialLinks.map((link) => {
              if (link.type === 'nav') {
                return (
                  <Button
                    key={link.id}
                    onClick={() => onNavigate?.(link.section)}
                    className="w-full md:w-auto text-lg font-semibold py-8 px-10 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-2xl bg-gradient-to-r from-primary/80 to-accent/80 text-primary-foreground hover:from-primary/70 hover:to-accent/70 flex flex-col items-center justify-center gap-2"
                  >
                    <link.icon className="h-8 w-8" />
                    <span>{link.label}</span>
                  </Button>
                )
              }
              return (
              <Button
                key={link.id}
                asChild
                className="w-full md:w-auto text-lg font-semibold py-8 px-10 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-2xl bg-gradient-to-r from-primary/80 to-accent/80 text-primary-foreground hover:from-primary/70 hover:to-accent/70"
              >
                <a href={link.href} className="flex flex-col items-center justify-center gap-2">
                  <link.icon className="h-8 w-8" />
                  <span>{link.label}</span>
                </a>
              </Button>
            )})}
          </div>
        </div>
      </section>

      {/* Blurred Image Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-center text-lg font-semibold mb-4">O que vai encontrar no grupo VIP</h2>
          <div className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg max-w-xs mx-auto">
             <Image
                src="https://i.imgur.com/NIL2RbP.png"
                alt="Teaser image"
                fill
                className="object-cover filter blur-sm"
                data-ai-hint="sensual photo"
              />
          </div>
           <Button
            size="lg"
            className="mt-8 bg-gradient-to-r from-accent to-primary text-primary-foreground font-bold text-base shadow-lg transition-transform hover:scale-105"
          >
            Quero entrar agora no VIP🔥
          </Button>
        </div>
      </section>
      
       {/* Benefits Section */}
      <section className="py-12 bg-gradient-to-b from-card to-[#121212]">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-10 font-headline active-gradient-text">
                💎 Benefícios Exclusivos do VIP
            </h2>
            <div className="max-w-2xl mx-auto space-y-6">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start text-left gap-4 p-4 rounded-lg bg-white/5 border border-white/10 shadow-lg">
                       <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-full">
                         <benefit.icon className="h-6 w-6 text-primary-foreground" />
                       </div>
                       <p className="text-foreground/80 text-base">{benefit.text}</p>
                    </div>
                ))}
            </div>

            <p className="mt-12 text-lg text-foreground/90 max-w-xl mx-auto italic">
             ✨ Quer me ver de verdade, sem censura? Quer me ver peladinha, como eu realmente sou? Só os membros VIP têm esse privilégio. 😈
            </p>

            <Button
                size="lg"
                className="mt-8 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-base md:text-lg shadow-lg transition-transform hover:scale-105 px-6"
            >
                Quero ser VIP😈
            </Button>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-10 font-headline">
            ❓ Perguntas Frequentes (FAQ)
          </h2>
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto text-left">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`} className="border-b-white/10">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline text-foreground/90">
                    {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/70 pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 font-headline">O que os fãs dizem</h2>
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full shadow-lg hover:shadow-xl transition-shadow border">
                      <CardContent className="flex h-full flex-col items-center justify-center text-center p-4">
                        <Avatar className="w-16 h-16 mb-4 border-2 border-primary/50">
                           <AvatarImage src={`https://picsum.photos/seed/${testimonial.name}/64/64`} data-ai-hint="person face" alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <p className="text-sm text-foreground/80 italic mb-auto">"{testimonial.comment}"</p>
                        <p className="font-bold mt-4 text-primary">{testimonial.name}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
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
    </div>
  );
}
