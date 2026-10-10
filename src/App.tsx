import React, { useState, useEffect, Suspense, lazy } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { CityRouteProvider, useCityRoute } from './context/CityRouteContext';
import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LegalDocType } from './components/LegalModal';
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const FAQSection = lazy(() => import('./components/FAQSection').then(m => ({ default: m.FAQSection })));
const GoogleMapsSection = lazy(() => import('./components/GoogleMapsSection').then(m => ({ default: m.GoogleMapsSection })));
const BlogSection = lazy(() => import('./components/BlogSection').then(m => ({ default: m.BlogSection })));
const CityGuideSection = lazy(() => import('./components/CityGuideSection').then(m => ({ default: m.CityGuideSection })));
const WhyMeskClean = lazy(() => import('./components/WhyMeskClean').then(m => ({ default: m.WhyMeskClean })));
const HowItWorks = lazy(() => import('./components/HowItWorks').then(m => ({ default: m.HowItWorks })));

const AdminDashboard = lazy(() =>
  import('./components/AdminDashboard').then(m => ({ default: m.AdminDashboard }))
);
const LegalModal = lazy(() =>
  import('./components/LegalModal').then(m => ({ default: m.LegalModal }))
);
const ServiceCityPage = lazy(() =>
  import('./pages/ServiceCityPage').then(m => ({ default: m.ServiceCityPage }))
);

function MainWebsite() {
  const { language } = useLanguage();
  const { currentCity, currentCityId, currentServiceId, isCityRoute, navigateToService } = useCityRoute();
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('homes');
  const [selectedDistrictForBooking, setSelectedDistrictForBooking] = useState<string>(() => currentCity.districtsAr[0] || 'حي الروضة');
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

  // Lazy initialize App Check / reCAPTCHA on first user interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      import('./lib/firebase').then(({ ensureAppCheck }) => {
        ensureAppCheck();
      });
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
    window.addEventListener('pointerdown', handleFirstInteraction, { passive: true });
    window.addEventListener('keydown', handleFirstInteraction, { passive: true });
    window.addEventListener('touchstart', handleFirstInteraction, { passive: true });
    return () => {
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
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
      <Suspense fallback={<div className="min-h-screen bg-slate-900 flex items-center justify-center text-cyan-400">Loading...</div>}>
        <AdminDashboard
          onBackToSite={() => {
            setShowAdmin(false);
            if (window.location.hash === '#admin') {
              window.location.hash = '';
            }
          }}
        />
      </Suspense>
    );
  }

  // Render Dedicated Service City Page if on a service route
  if (currentServiceId) {
    return (
      <Suspense fallback={<div className="min-h-screen bg-slate-900 flex items-center justify-center text-cyan-400">Loading...</div>}>
        <ServiceCityPage
          serviceId={currentServiceId}
          onOpenBooking={handleOpenBooking}
        />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#010e1f] text-slate-900 dark:text-slate-100 transition-colors duration-300 flex flex-col font-tajawal">
      {/* Dynamic SEO Meta and Schema.org JSON-LD tailored per City Route */}
      <SEOHead />

      {/* Navigation Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Dynamic City Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Services Section (Dynamic Title per City) */}
        <ServicesSection onBookService={(serviceId) => handleOpenBooking(serviceId)} />

        <Suspense fallback={<div className="py-20 min-h-[300px]" />}>
          <WhyMeskClean />
        </Suspense>

        <Suspense fallback={<div className="py-20 min-h-[350px]" />}>
          <HowItWorks onStartBooking={() => handleOpenBooking()} />
        </Suspense>

        {/* Booking Form with City Pre-selection & Security & Spam Protection */}
        <BookingForm
          initialServiceId={selectedServiceForBooking}
          initialDistrict={selectedDistrictForBooking}
        />

        <Suspense fallback={<div className="py-20 min-h-[300px]" />}>
          <TestimonialsSection />
        </Suspense>

        <Suspense fallback={<div className="py-20 min-h-[400px]" />}>
          <FAQSection />
        </Suspense>

        <Suspense fallback={<div className="py-20 min-h-[450px]" />}>
          <GoogleMapsSection />
        </Suspense>

        <Suspense fallback={<div className="py-20 min-h-[400px]" />}>
          <BlogSection onBookService={() => handleOpenBooking()} />
        </Suspense>

        <Suspense fallback={<div className="py-20 min-h-[500px]" />}>
          <CityGuideSection />
        </Suspense>
      </main>

      {/* Footer with quick links and Admin portal link */}
      <Footer
        onSelectService={(serviceId: string) => navigateToService(currentCityId, serviceId)}
        onOpenAdmin={() => setShowAdmin(true)}
        onOpenLegal={(type: LegalDocType) => setLegalModalType(type)}
      />

      {/* Native Mobile Bottom Navigation */}
      <MobileBottomNav onOpenBooking={() => handleOpenBooking()} />

      {/* Floating 24/7 WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Legal Modal (Privacy Policy & Terms) */}
      <Suspense fallback={null}>
        <LegalModal
          type={legalModalType}
          onClose={() => setLegalModalType(null)}
        />
      </Suspense>
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CityRouteProvider>
          <MainWebsite />
        </CityRouteProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
