"use client";

import type { FC } from 'react';
import { useState, useEffect } from 'react';
import BottomNav from '@/components/layout/bottom-nav';
import HomeSection from '@/components/sections/home-section';
import GallerySection from '@/components/sections/gallery-section';
import ExtraSection from '@/components/sections/extra-section';
import Header from '@/components/layout/header';
import PreSell from '@/components/pre-sell';

export type Section = 'home' | 'gallery' | 'extra';

const sections: Record<Section, FC<{ onNavigate?: (section: Section) => void }>> = {
  home: HomeSection,
  gallery: GallerySection,
  extra: ExtraSection,
};

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 segundos de duração

    return () => clearTimeout(timer);
  }, []);


  const ActiveComponent = sections[activeSection];

  if (isLoading) {
    return <PreSell />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-background font-body">
      <Header />
      <main className="flex-1 pb-20">
        <ActiveComponent onNavigate={setActiveSection} />
      </main>
      <BottomNav activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
}
