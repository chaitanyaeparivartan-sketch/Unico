import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MetricsSection from "@/components/MetricsSection";
import StorySection from "@/components/StorySection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedDevelopments from "@/components/FeaturedDevelopments";
import DrawingToDoneSection from "@/components/DrawingToDoneSection";
import ProcessSection from "@/components/ProcessSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import IsoSection from "@/components/IsoSection";
import QualitySection from "@/components/QualitySection";
import CtaSection from "@/components/CtaSection";
import ContactModal from "@/components/ContactModal";
import Footer from "@/components/Footer";

export const metadata = {
  title: "UNICO | Builders & Developers - Built for the Life Inside",
  description:
    "We design and build enduring spaces where everyday moments thrive. From solid foundations to intentional layouts, every detail is engineered to support the way you truly live.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0c10] text-white">
      {/* Top Header Landmark */}
      <Header />

      {/* Main Content Landmark */}
      <main id="main-content">
        {/* Main Hero Section */}
        <Hero />

        {/* Construction Metrics & Video Section */}
        <MetricsSection />

        {/* 1. Client Logos & Institutional Partners Section: 'ESTEEMED CLIENTELE' */}
        <ClientLogosSection />

        {/* 2. ISO Certifications Section: 'ISO CERTIFIED EXCELLENCE' */}
        <IsoSection />

        {/* Our Story: 'THE UNICO JOURNEY' (1985 to Today) */}
        <StorySection />

        {/* Services Section with Vertical Scroll Cards: 'WHAT WE DO' */}
        <ServicesSection />

        {/* Featured Developments: 'LANDMARK DEVELOPMENTS' with Expanding Cards */}
        <FeaturedDevelopments />

        {/* Interactive Blueprint to Reality Comparison Slider: 'FROM DRAWING TO DONE' */}
        <DrawingToDoneSection />

        {/* Engineering Standards: 'HOW WE BUILD' */}
        <ProcessSection />

        {/* The Process Section: 'HOW WE WORK' */}
        <HowWeWorkSection />

        {/* Testimonials Section: 'CLIENT VOICES' */}
        <TestimonialsSection />

        {/* Quality Promise & Standards Section: 'QUALITY STANDARDS' */}
        <QualitySection />

        {/* CTA Section: 'YOUR NEXT ADDRESS STARTS HERE' */}
        <CtaSection />
      </main>

      {/* Luxury Atelier Footer Landmark */}
      <Footer />

      {/* Interactive Contact Modal (Supports both props & URL hash / custom events) */}
      <ContactModal />
    </div>
  );
}
