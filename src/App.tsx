import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { CityPortalsSection } from './components/CityPortalsSection';
import { CityLandingPage } from './components/CityLandingPage';
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

type CityPageType = 'jeddah' | 'rabigh' | 'makkah' | null;

function MainWebsite() {
  const { language } = useLanguage();
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('homes');
  const [selectedDistrictForBooking, setSelectedDistrictForBooking] = useState<string>('حي الروضة');
  const [selectedCityForBooking, setSelectedCityForBooking] = useState<string>('jeddah');
  const [activeCityPage, setActiveCityPage] = useState<CityPageType>(null);
  const [showAdmin, setShowAdmin] = useState<boolean>(false);
  const [legalModalType, setLegalModalType] = useState<LegalDocType>(null);

  // Check URL hash for direct navigation (e.g. #admin, #jeddah, #makkah, #rabigh)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#admin') {
        setShowAdmin(true);
        setActiveCityPage(null);
      } else if (hash === '#jeddah') {
        setActiveCityPage('jeddah');
        setShowAdmin(false);
      } else if (hash === '#makkah') {
        setActiveCityPage('makkah');
        setShowAdmin(false);
      } else if (hash === '#rabigh') {
        setActiveCityPage('rabigh');
        setShowAdmin(false);
      } else {
        setShowAdmin(false);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenBooking = (serviceId?: string, district?: string, cityKey?: string) => {
    if (serviceId) setSelectedServiceForBooking(serviceId);
    if (district) setSelectedDistrictForBooking(district);
    if (cityKey) setSelectedCityForBooking(cityKey);

    // If currently on a city page, close it or scroll to booking
    if (activeCityPage) {
      setActiveCityPage(null);
      window.location.hash = 'booking';
    }

    setTimeout(() => {
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleOpenCityPage = (cityId: 'jeddah' | 'rabigh' | 'makkah') => {
    setActiveCityPage(cityId);
    window.location.hash = cityId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setActiveCityPage(null);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      {/* Header with City Links and Booking CTA */}
      <Header
        onOpenBooking={handleOpenBooking}
        onOpenCityPage={handleOpenCityPage}
      />

      {/* Conditional View: Dedicated City Landing Page OR Full Homepage */}
      {activeCityPage ? (
        <CityLandingPage
          cityId={activeCityPage}
          onSelectCity={handleOpenCityPage}
          onOpenBooking={handleOpenBooking}
          onBackToHome={handleBackToHome}
        />
      ) : (
        <>
          {/* Dynamic Global SEO Meta and Schema.org JSON-LD */}
          <SEOHead />

          {/* Main Homepage Sections */}
          <main className="flex-1">
            {/* Hero Section */}
            <Hero onOpenBooking={handleOpenBooking} />

            {/* Services Section */}
            <ServicesSection onBookService={(serviceId) => handleOpenBooking(serviceId)} />

            {/* Dedicated City Portals / Coverage Landing Links Section (SEO Powerhouse) */}
            <CityPortalsSection
              onOpenCityPage={handleOpenCityPage}
              onOpenBooking={handleOpenBooking}
            />

            {/* Why Mesk Clean Section */}
            <WhyMeskClean />

            {/* How It Works (3 Steps) */}
            <HowItWorks onStartBooking={() => handleOpenBooking()} />

            {/* Booking Form with City & District Selectors & Security Anti-Spam */}
            <BookingForm
              initialServiceId={selectedServiceForBooking}
              initialDistrict={selectedDistrictForBooking}
              initialCityKey={selectedCityForBooking}
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
        </>
      )}

      {/* Footer with quick links, city pages, and Admin portal */}
      <Footer
        onSelectService={(serviceId) => handleOpenBooking(serviceId)}
        onOpenCityPage={handleOpenCityPage}
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
