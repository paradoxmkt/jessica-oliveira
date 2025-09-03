"use client";

import type { FC } from 'react';
import { useState } from 'react';
import BottomNav from '@/components/layout/bottom-nav';
import HomeSection from '@/components/sections/home-section';
import GallerySection from '@/components/sections/gallery-section';
import ExtraSection from '@/components/sections/extra-section';
import Header from '@/components/layout/header';

export type Section = 'home' | 'gallery' | 'extra';

const sections: Record<Section, FC<{ onNavigate?: (section: Section) => void }>> = {
  home: HomeSection,
  gallery: GallerySection,
  extra: ExtraSection,
};

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const ActiveComponent = sections[activeSection];

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
