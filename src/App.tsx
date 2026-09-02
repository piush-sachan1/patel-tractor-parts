import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FeaturedProducts } from './components/FeaturedProducts';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { QuickInquiry } from './components/QuickInquiry';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-orange-500 selection:text-white">
      {/* Sticky Industrial Header / Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Us Section */}
        <AboutSection />

        {/* 3. Our Featured Products (Explore Our Inventory) */}
        <FeaturedProducts />

        {/* 4. Our Specialties (Agricultural & Commercial Fleets) */}
        <SpecialtiesSection />

        {/* 5. Why Choose Us (4-Column Grid) */}
        <WhyChooseUsSection />

        {/* 6. Instant WhatsApp Parts Inquiry Tool */}
        <QuickInquiry />

        {/* 7. Contact Us Section (Inquiry Form with Prompt Response) */}
        <ContactSection />
      </main>

      {/* 8. Industrial Footer */}
      <Footer />

      {/* Floating Action Trigger */}
      <FloatingActions />
    </div>
  );
}
