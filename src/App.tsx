import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyMeskClean } from './components/WhyMeskClean';
import { HowItWorks } from './components/HowItWorks';
import { BookingForm } from './components/BookingForm';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { GoogleMapsSection } from './components/GoogleMapsSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AdminDashboard } from './components/AdminDashboard';
import { LegalModal, LegalDocType } from './components/LegalModal';

function MainWebsite() {
  const { language } = useLanguage();
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('homes');
  const [selectedDistrictForBooking, setSelectedDistrictForBooking] = useState<string>('حي الروضة');
  const [showAdmin, setShowAdmin] = useState<boolean>(false);
  const [legalModalType, setLegalModalType] = useState<LegalDocType>(null);

  // Check URL hash for direct admin navigation e.g. #admin
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#admin') {
        setShowAdmin(true);
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleOpenBooking = (serviceId?: string, district?: string) => {
    if (serviceId) setSelectedServiceForBooking(serviceId);
    if (district) setSelectedDistrictForBooking(district);
    
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (showAdmin) {
    return (
      <AdminDashboard
        onBackToSite={() => {
          setShowAdmin(false);
          if (window.location.hash === '#admin') {
            window.location.hash = '';
          }
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#010e1f] text-slate-900 dark:text-slate-100 transition-colors duration-300 flex flex-col font-tajawal">
      {/* Dynamic SEO Meta and Schema.org JSON-LD */}
      <SEOHead />

      {/* Navigation Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Services Section (11 Approved Services Only) */}
        <ServicesSection onBookService={(serviceId) => handleOpenBooking(serviceId)} />

        {/* Why Mesk Clean Section (6 Approved Reasons) */}
        <WhyMeskClean />

        {/* How It Works (3 Steps) */}
        <HowItWorks onStartBooking={() => handleOpenBooking()} />

        {/* Booking Form with Security & Spam Protection */}
        <BookingForm
          initialServiceId={selectedServiceForBooking}
          initialDistrict={selectedDistrictForBooking}
        />

        {/* Customer Reviews & Testimonials */}
        <TestimonialsSection />

        {/* Frequently Asked Questions (FAQ) with Schema */}
        <FAQSection />

        {/* Google Maps and Service Coverage Area */}
        <GoogleMapsSection />

        {/* Blog / Cleaning Guide Section */}
        <BlogSection onBookService={() => handleOpenBooking()} />

        {/* Contact & Social Section */}
        <ContactSection />
      </main>

      {/* Footer with quick links and Admin portal link */}
      <Footer
        onSelectService={(serviceId) => handleOpenBooking(serviceId)}
        onOpenAdmin={() => setShowAdmin(true)}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Native Mobile Bottom Navigation */}
      <MobileBottomNav onOpenBooking={() => handleOpenBooking()} />

      {/* Floating 24/7 WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Legal Modal (Privacy Policy & Terms) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainWebsite />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
