'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HistorySection from '@/components/HistorySection';
import EvolutionSection from '@/components/EvolutionSection';
import GallerySection from '@/components/GallerySection';
import dynamic from 'next/dynamic';
import TravelGuideSection from '@/components/TravelGuideSection';

const MapSection = dynamic(() => import('@/components/MapSection'), {
  ssr: false,
});
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Header />
      <HeroSection />
      <HistorySection />
      <EvolutionSection />
      <GallerySection />
      <MapSection />
      <TravelGuideSection />
      <Footer />
    </main>
  );
}
