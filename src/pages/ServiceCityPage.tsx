import React, { useEffect, useState } from 'react';
import { 
  Home, 
  Building2, 
  Building, 
  Briefcase, 
  Armchair, 
  Layers, 
  Sparkles, 
  UtensilsCrossed, 
  Wind, 
  Droplets, 
  ShieldAlert, 
  ArrowLeft, 
  CheckCircle, 
  CheckCircle2, 
  ShieldCheck, 
  MessageCircle, 
  Phone, 
  Clock, 
  MapPin, 
  ChevronRight, 
  Bird,
  HelpCircle,
  Lightbulb,
  Award
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCityRoute, CityId } from '../context/CityRouteContext';
import { getCityServiceData } from '../data/cityServicesData';
import { getStoredServices } from '../data/store';
import { COMPANY_INFO } from '../data/companyInfo';
import { BookingForm } from '../components/BookingForm';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { MobileBottomNav } from '../components/MobileBottomNav';
import { LegalModal, LegalDocType } from '../components/LegalModal';
import { PEST_CITIES_CONTENT } from '../data/pestControlCitiesContent';
import { TANKS_CITIES_CONTENT } from '../data/tanksCleaningCitiesContent';
import { HOME_CLEANING_CITIES_CONTENT } from '../data/homeCleaningCitiesContent';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Home,
  Building2,
  Building,
  Briefcase,
  Armchair,
  Layers,
  Sparkles,
  UtensilsCrossed,
  Wind,
  Droplets,
  ShieldAlert,
  Bird,
};

interface ServiceCityPageProps {
  serviceId: string;
  onOpenBooking?: (serviceId?: string, district?: string) => void;
}

export const ServiceCityPage: React.FC<ServiceCityPageProps> = ({ serviceId }) => {
  const { language, t } = useLanguage();
  const { currentCityId, currentCity, navigateToCity, navigateToService } = useCityRoute();
  const [legalModalType, setLegalModalType] = useState<LegalDocType>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const isPestControl = serviceId === 'pest' || serviceId === 'pest-control';
  const pestData = isPestControl ? PEST_CITIES_CONTENT[currentCityId] : null;

  const isTanks = serviceId === 'tanks' || serviceId === 'tank-cleaning' || serviceId === 'tank-insulation';
  const tankData = isTanks ? TANKS_CITIES_CONTENT[currentCityId] : null;

  const isHomeCleaning = serviceId === 'homes' || serviceId === 'home-cleaning';
  const homeData = isHomeCleaning ? HOME_CLEANING_CITIES_CONTENT[currentCityId] : null;

  const data = getCityServiceData(serviceId, currentCityId);
  const allServices = getStoredServices();
  const baseService = allServices.find((s) => s.id === serviceId);

  const IconComponent = baseService ? iconMap[baseService.iconName] || Sparkles : Sparkles;

  // Sync Document Title, Meta, and JSON-LD Structured Data
  useEffect(() => {
    const pageTitle = (language === 'ar' && pestData)
      ? pestData.metaTitle
      : (language === 'ar' && tankData)
      ? tankData.metaTitle
      : (language === 'ar' && homeData)
      ? homeData.metaTitle
      : (language === 'ar' ? data.metaTitle : data.metaTitleEn);

    const pageDesc = (language === 'ar' && pestData)
      ? pestData.metaDescription
      : (language === 'ar' && tankData)
      ? tankData.metaDescription
      : (language === 'ar' && homeData)
      ? homeData.metaDescription
      : (language === 'ar' ? data.metaDescription : data.metaDescriptionEn);

    document.title = pageTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', pageDesc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const fullCanonical = `https://www.meskclean.com/${currentCityId}/services/${serviceId}`;
    canonical.setAttribute('href', fullCanonical);

    // OpenGraph & Twitter Social Metadata
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('property', 'og:title', pageTitle);
    setMeta('property', 'og:description', pageDesc);
    setMeta('property', 'og:url', fullCanonical);
    setMeta('property', 'og:image', 'https://www.meskclean.com/assets/mesk-hero.jpg');
    setMeta('property', 'og:locale', language === 'ar' ? 'ar_SA' : 'en_US');
    setMeta('name', 'twitter:title', pageTitle);
    setMeta('name', 'twitter:description', pageDesc);
    setMeta('name', 'twitter:image', 'https://www.meskclean.com/assets/mesk-hero.jpg');

    // Schema.org Structured Data
    const serviceName = (language === 'ar' && pestData)
      ? pestData.h1Title
      : (language === 'ar' && tankData)
      ? tankData.h1Title
      : (language === 'ar' && homeData)
      ? homeData.h1Title
      : (language === 'ar' ? (baseService?.name || data.heroHeading) : (baseService?.nameEn || data.heroHeadingEn));
    const cityName = language === 'ar' ? currentCity.nameAr : currentCity.nameEn;

    const faqEntities = (language === 'ar' && pestData)
      ? pestData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a
          }
        }))
      : (language === 'ar' && tankData)
      ? tankData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a
          }
        }))
      : (language === 'ar' && homeData)
      ? homeData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a
          }
        }))
      : data.faqs.map((faq) => ({
          '@type': 'Question',
          name: language === 'ar' ? faq.question : faq.questionEn,
          acceptedAnswer: {
            '@type': 'Answer',
            text: language === 'ar' ? faq.answer : faq.answerEn
          }
        }));

    const schemaData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': `${fullCanonical}#service`,
          name: serviceName,
          description: pageDesc,
          provider: {
            '@type': 'LocalBusiness',
            name: language === 'ar' ? 'شركة مسك كلين' : 'Mesk Clean',
            telephone: COMPANY_INFO.phone1.display,
            url: 'https://www.meskclean.com',
            priceRange: '$$',
            areaServed: {
              '@type': 'City',
              name: cityName
            }
          },
          areaServed: {
            '@type': 'City',
            name: cityName
          }
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: language === 'ar' ? 'الرئيسية' : 'Home',
              item: 'https://www.meskclean.com/'
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: cityName,
              item: `https://www.meskclean.com/${currentCityId}`
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: serviceName,
              item: fullCanonical
            }
          ]
        },
        {
          '@type': 'FAQPage',
          mainEntity: faqEntities
        }
      ]
    };

    let schemaScript = document.getElementById('service-schema-jsonld') as HTMLScriptElement;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'service-schema-jsonld';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.text = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById('service-schema-jsonld');
      if (el) el.remove();
    };
  }, [data, language, currentCityId, serviceId, baseService, currentCity, pestData]);

  const scrollToBooking = () => {
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const serviceName = (language === 'ar' && pestData)
    ? pestData.h1Title
    : (language === 'ar' ? (baseService?.name || data.heroHeading) : (baseService?.nameEn || data.heroHeadingEn));

  const cityName = language === 'ar' ? currentCity.nameAr : currentCity.nameEn;

  const whatsappMessage = encodeURIComponent(
    language === 'ar'
      ? `السلام عليكم ورحمة الله، أود الاستفسار وحجز خدمة (${serviceName}) في ${currentCity.nameAr} من شركة مسك كلين.`
      : `Hello Mesk Clean team, I would like to inquire about and book (${serviceName}) in ${currentCity.nameEn}.`
  );

  const otherCities: { id: CityId; nameAr: string; nameEn: string }[] = (
    [
      { id: 'jeddah' as CityId, nameAr: 'جدة', nameEn: 'Jeddah' },
      { id: 'makkah' as CityId, nameAr: 'مكة المكرمة', nameEn: 'Makkah' },
      { id: 'rabigh' as CityId, nameAr: 'رابغ', nameEn: 'Rabigh' },
    ]
  ).filter((c) => c.id !== currentCityId);

  const otherServices = allServices.filter((s) => s.id !== serviceId).slice(0, 6);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#010e1f] text-slate-900 dark:text-slate-100 transition-colors duration-300 flex flex-col font-tajawal">
      {/* Top Header */}
      <Header onOpenBooking={() => scrollToBooking()} />

      <main className="flex-1">
        {/* Breadcrumb Navigation Bar */}
        <nav aria-label="Breadcrumb" className="bg-slate-100 dark:bg-[#04162c] border-b border-slate-200 dark:border-cyan-900/40 py-3.5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center flex-wrap gap-2 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
            <button
              onClick={() => navigateToCity(currentCityId)}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'الرئيسية' : 'Home'}</span>
            </button>

            <span className="text-slate-400">/</span>

            <button
              onClick={() => navigateToCity(currentCityId)}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            >
              <span>{cityName}</span>
            </button>

            <span className="text-slate-400">/</span>

            <span className="text-cyan-600 dark:text-cyan-400 font-bold truncate max-w-[200px] sm:max-w-none">
              {serviceName}
            </span>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 sm:py-20 bg-gradient-to-b from-slate-100 via-white to-slate-50 dark:from-[#021327] dark:via-[#010e1f] dark:to-[#010e1f]">
          <div className="absolute top-0 end-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Heading & CTAs (7 Cols) */}
              <div className="lg:col-span-7 space-y-6 text-start">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-bold">
                  <IconComponent className="w-4 h-4 text-cyan-500" />
                  <span>
                    {language === 'ar' && pestData
                      ? `خدمة معتمدة لمكافحة الآفات بـ${cityName}`
                      : language === 'ar' && tankData
                      ? `خدمة متخصصة لتنظيف وعزل الخزانات بـ${cityName}`
                      : language === 'ar' && homeData
                      ? `خدمة احترافية لتنظيف المنازل بـ${cityName}`
                      : (language === 'ar' ? data.heroBadge : data.heroBadgeEn)}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  {language === 'ar' && pestData
                    ? pestData.h1Title
                    : language === 'ar' && tankData
                    ? tankData.h1Title
                    : language === 'ar' && homeData
                    ? homeData.h1Title
                    : (language === 'ar' ? data.heroHeading : data.heroHeadingEn)}
                </h1>

                <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                  {language === 'ar' && pestData
                    ? pestData.introParagraph
                    : language === 'ar' && tankData
                    ? tankData.introParagraph
                    : language === 'ar' && homeData
                    ? homeData.introParagraph
                    : (language === 'ar' ? data.heroSubtitle : data.heroSubtitleEn)}
                </p>

                {/* Key Guarantees Pills */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#072448] border border-slate-200 dark:border-cyan-800/40 text-xs font-bold text-slate-700 dark:text-cyan-200 shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-cyan-500" />
                    <span>
                      {language === 'ar' && tankData
                        ? 'ضمان 10 سنوات على أعمال العزل'
                        : language === 'ar' && homeData
                        ? 'عناية شاملة بالمنازل والشقق'
                        : (language === 'ar' ? 'ضمان معتمد 6 شهور' : 'Certified Warranty')}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#072448] border border-slate-200 dark:border-cyan-800/40 text-xs font-bold text-slate-700 dark:text-cyan-200 shadow-sm">
                    <Clock className="w-4 h-4 text-cyan-500" />
                    <span>{language === 'ar' ? 'متاحون 24/7 طوال الأسبوع' : 'Available 24/7 All Week'}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#072448] border border-slate-200 dark:border-cyan-800/40 text-xs font-bold text-slate-700 dark:text-cyan-200 shadow-sm">
                    <Award className="w-4 h-4 text-cyan-500" />
                    <span>
                      {language === 'ar' && tankData
                        ? 'مواد عزل معتمدة لمياه الشرب'
                        : language === 'ar' && homeData
                        ? 'منظفات آمنة وصديقة للأسرة'
                        : (language === 'ar' ? 'مبيدات آمنة ومصرحة من الغذاء والدواء' : 'Certified Safe Formulas')}
                    </span>
                  </span>
                </div>

                {/* CTAs */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    onClick={scrollToBooking}
                    className="py-3.5 px-7 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all text-center cursor-pointer active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>{language === 'ar' ? 'احجز الخدمة الآن' : 'Book Service Now'}</span>
                    <ArrowLeft className={`w-4 h-4 ${language === 'en' ? 'rotate-180' : ''}`} />
                  </button>

                  <a
                    href={`https://wa.me/966547161147?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all active:scale-95 cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>{language === 'ar' ? 'تواصل عبر واتساب' : 'WhatsApp Inquiry'}</span>
                  </a>

                  <a
                    href={COMPANY_INFO.phone1.tel}
                    className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-slate-700 dark:text-slate-200 bg-white hover:bg-slate-100 dark:bg-[#061e38] dark:hover:bg-[#092d59] border border-slate-200 dark:border-cyan-800/40 transition-colors shadow-sm"
                  >
                    <Phone className="w-4 h-4 text-cyan-500" />
                    <span>{COMPANY_INFO.phone1.display}</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Featured Image with Badge (5 Cols) */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200 dark:border-cyan-800/60 bg-slate-900 group">
                  <img
                    src={baseService?.image || '/assets/mesk-hero.webp'}
                    alt={serviceName}
                    style={{ objectPosition: baseService?.imagePosition || 'center' }}
                    className="w-full h-72 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                  <div className="absolute bottom-5 start-5 end-5 text-start">
                    <span className="inline-block px-3 py-1 rounded-lg bg-cyan-500 text-slate-950 text-xs font-black mb-2 shadow-md">
                      {cityName} • {language === 'ar' && tankData ? 'ضمان 10 سنوات على أعمال العزل' : (language === 'ar' && pestData ? 'خدمة متميزة بضمان 6 شهور' : (language === 'ar' && homeData ? 'عناية متكاملة بالمنازل والشقق' : (language === 'ar' ? 'خدمة متميزة ومعتمدة' : 'Top Tier Service')))}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white drop-shadow-md">
                      {serviceName}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Content for Pest Control in 3 Cities */}
        {language === 'ar' && pestData ? (
          <>
            {/* 3. H2: خدمات مكافحة الحشرات في المدينة + 8 فقرات H3 */}
            <section className="py-14 sm:py-20 bg-white dark:bg-[#03152a] border-y border-slate-200 dark:border-cyan-900/40">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-10">
                <div className="text-center max-w-2xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold mb-3">
                    <ShieldAlert className="w-3.5 h-3.5 text-cyan-500" />
                    <span>إبادة شاملة ومتخصصة</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
                    {pestData.servicesHeading}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pestData.services.map((srv, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-slate-50 dark:bg-[#061e38] border border-slate-200 dark:border-cyan-900/40 shadow-sm space-y-3 transition-all hover:border-cyan-500/50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 font-black">
                          {idx + 1}
                        </div>
                        <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                          {srv.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                        {srv.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. H2: طريقة عملنا في مكافحة الحشرات */}
            <section className="py-14 sm:py-20 bg-slate-50 dark:bg-[#010e1f]">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-6">
                <div className="text-center max-w-2xl mx-auto mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold mb-3">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>خطوات العمل الميداني</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
                    {pestData.methodHeading}
                  </h2>
                </div>

                <div className="p-8 rounded-3xl bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 shadow-sm flex flex-col md:flex-row items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/20">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div className="space-y-3 flex-1 text-start">
                    <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                      {pestData.methodParagraph}
                    </p>
                    <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                      <span className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20">معاينة فنية شاملة</span>
                      <span className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20">مبيدات ألمانية بدون رائحة</span>
                      <span className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20">حقن ورش موضعي بدون مغادرة</span>
                      <span className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20">كرت ضمان معتمد 6 شهور</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. H2: نخدم أحياء المدينة */}
            <section className="py-14 sm:py-20 bg-white dark:bg-[#03152a] border-y border-slate-200 dark:border-cyan-900/40">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>التغطية الميدانية الشاملة</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3">
                    {pestData.districtsHeading}
                  </h2>
                  <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    {pestData.districtsParagraph}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-500 dark:text-cyan-300 uppercase tracking-wider mb-3">
                    أبرز الأحياء والمناطق المخدومة في {cityName}:
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {pestData.districtsList.map((dist, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-[#072448] border border-slate-200 dark:border-cyan-900/40 text-sm font-semibold text-slate-800 dark:text-slate-100 shadow-sm"
                      >
                        <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                        <span>حي {dist}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 6. H2: لماذا تختار مسك كلين */}
            <section className="py-14 sm:py-20 bg-slate-50 dark:bg-[#010e1f]">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-10">
                <div className="text-center max-w-2xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold mb-3">
                    <Award className="w-3.5 h-3.5" />
                    <span>المعايير الاحترافية</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
                    {pestData.whyHeading}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pestData.whyPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 shadow-sm space-y-2.5 transition-all hover:border-cyan-500/50"
                    >
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-black">
                        <CheckCircle className="w-5 h-5 text-cyan-500" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {point.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                        {point.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 7. H2: أسئلة شائعة */}
            <section className="py-14 sm:py-20 bg-white dark:bg-[#03152a] border-y border-slate-200 dark:border-cyan-900/40">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-8">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold mb-3">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>إجابات وافية وموثوقة</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                    {pestData.faqHeading}
                  </h2>
                </div>

                <div className="space-y-4">
                  {pestData.faqs.map((faq, idx) => {
                    const isOpen = activeFaq === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl bg-slate-50 dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 overflow-hidden shadow-sm transition-all"
                      >
                        <button
                          onClick={() => setActiveFaq(isOpen ? null : idx)}
                          className="w-full p-5 text-start font-bold text-base sm:text-lg text-slate-900 dark:text-white flex items-center justify-between gap-4 cursor-pointer"
                        >
                          <span>{faq.q}</span>
                          <span className="text-cyan-500 text-xl font-bold shrink-0">{isOpen ? '−' : '+'}</span>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 pt-0 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-cyan-950/60 pt-3">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        ) : language === 'ar' && tankData ? (
          <>
            {/* 1. H2: خدمات تنظيف وعزل الخزانات في المدينة + 8 فقرات H3 */}
            <section className="py-14 sm:py-20 bg-white dark:bg-[#03152a] border-y border-slate-200 dark:border-cyan-900/40">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-10">
                <div className="text-center max-w-2xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold mb-3">
                    <Droplets className="w-3.5 h-3.5 text-cyan-500" />
                    <span>نظافة وعزل معتمد</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
                    {tankData.servicesHeading}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tankData.services.map((srv, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-slate-50 dark:bg-[#061e38] border border-slate-200 dark:border-cyan-900/40 shadow-sm space-y-3 transition-all hover:border-cyan-500/50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 font-black">
                          {idx + 1}
                        </div>
                        <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                          {srv.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                        {srv.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 2. Dedicated Insulation Warranty Clarification Banner */}
            <section className="py-10 bg-slate-100 dark:bg-[#021022]">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="p-8 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-slate-900/50 border-2 border-cyan-500/40 shadow-xl flex flex-col md:flex-row items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500 text-slate-950 flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/30 font-black">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div className="space-y-2 flex-1 text-start">
                    <h3 className="text-xl font-black text-cyan-400 dark:text-cyan-300">
                      {tankData.warrantyNoticeHeading}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                      {tankData.warrantyNoticeDesc}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. H2: طريقة عملنا في تنظيف وعزل الخزانات */}
            <section className="py-14 sm:py-20 bg-white dark:bg-[#03152a] border-y border-slate-200 dark:border-cyan-900/40">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-8">
                <div className="text-center max-w-2xl mx-auto mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold mb-3">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>مراحل العمل الميداني</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
                    {tankData.methodHeading}
                  </h2>
                </div>

                <div className="p-8 rounded-3xl bg-slate-50 dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 shadow-sm space-y-6">
                  <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    {tankData.methodParagraph}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                    {tankData.methodSteps.map((st, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-white dark:bg-[#072448] border border-slate-200 dark:border-cyan-800/40 shadow-sm space-y-2"
                      >
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-black text-sm">
                          {st.step}
                        </div>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white">
                          {st.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {st.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 4. H2: نخدم أحياء المدينة */}
            <section className="py-14 sm:py-20 bg-slate-50 dark:bg-[#010e1f]">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>تغطية الأحياء والمخططات</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3">
                    {tankData.districtsHeading}
                  </h2>
                  <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    {tankData.districtsParagraph}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-500 dark:text-cyan-300 uppercase tracking-wider mb-3">
                    أبرز الأحياء والمناطق المخدومة في {cityName}:
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {tankData.districtsList.map((dist, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-[#072448] border border-slate-200 dark:border-cyan-900/40 text-sm font-semibold text-slate-800 dark:text-slate-100 shadow-sm"
                      >
                        <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                        <span>{dist}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 5. H2: لماذا تختار مسك كلين */}
            <section className="py-14 sm:py-20 bg-white dark:bg-[#03152a] border-y border-slate-200 dark:border-cyan-900/40">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-10">
                <div className="text-center max-w-2xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold mb-3">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>معايير الثقة والجودة</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                    {tankData.whyHeading}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tankData.whyPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-slate-50 dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 shadow-sm space-y-2.5 transition-all hover:border-cyan-500/50"
                    >
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-black">
                        <CheckCircle className="w-5 h-5 text-cyan-500" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {point.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                        {point.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 6. H2: أسئلة شائعة */}
            <section className="py-14 sm:py-20 bg-slate-50 dark:bg-[#010e1f]">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-8">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold mb-3">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>إجابات وافية وموثوقة</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                    {tankData.faqHeading}
                  </h2>
                </div>

                <div className="space-y-4">
                  {tankData.faqs.map((faq, idx) => {
                    const isOpen = activeFaq === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 overflow-hidden shadow-sm transition-all"
                      >
                        <button
                          onClick={() => setActiveFaq(isOpen ? null : idx)}
                          className="w-full p-5 text-start font-bold text-base sm:text-lg text-slate-900 dark:text-white flex items-center justify-between gap-4 cursor-pointer"
                        >
                          <span>{faq.q}</span>
                          <span className="text-cyan-500 text-xl font-bold shrink-0">{isOpen ? '−' : '+'}</span>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 pt-0 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-cyan-950/60 pt-3">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        ) : language === 'ar' && homeData ? (
          <>
            {/* 1. H2: خدمات تنظيف المنازل في المدينة + 7 فقرات H3 */}
            <section className="py-14 sm:py-20 bg-white dark:bg-[#03152a] border-y border-slate-200 dark:border-cyan-900/40">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-10">
                <div className="text-center max-w-2xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                    <span>عناية منزلية متكاملة</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
                    {homeData.servicesHeading}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {homeData.services.map((srv, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-slate-50 dark:bg-[#061e38] border border-slate-200 dark:border-cyan-900/40 shadow-sm space-y-3 transition-all hover:border-cyan-500/50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 font-black">
                          {idx + 1}
                        </div>
                        <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                          {srv.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                        {srv.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 2. H2: طريقة عملنا في تنظيف المنازل */}
            <section className="py-14 sm:py-20 bg-slate-50 dark:bg-[#010e1f]">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-8">
                <div className="text-center max-w-2xl mx-auto mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold mb-3">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>مراحل العمل الميداني</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
                    {homeData.methodHeading}
                  </h2>
                </div>

                <div className="p-8 rounded-3xl bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 shadow-sm space-y-6">
                  <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    {homeData.methodParagraph}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                    {homeData.methodSteps.map((st, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-slate-50 dark:bg-[#072448] border border-slate-200 dark:border-cyan-800/40 shadow-sm space-y-2"
                      >
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-black text-sm">
                          {st.step}
                        </div>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white">
                          {st.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {st.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 3. H2: نخدم أحياء المدينة */}
            <section className="py-14 sm:py-20 bg-white dark:bg-[#03152a] border-y border-slate-200 dark:border-cyan-900/40">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>تغطية الأحياء والمخططات السكنية</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3">
                    {homeData.districtsHeading}
                  </h2>
                  <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    {homeData.districtsParagraph}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-500 dark:text-cyan-300 uppercase tracking-wider mb-3">
                    أبرز الأحياء والمناطق المخدومة في {cityName}:
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {homeData.districtsList.map((dist, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-[#072448] border border-slate-200 dark:border-cyan-900/40 text-sm font-semibold text-slate-800 dark:text-slate-100 shadow-sm"
                      >
                        <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                        <span>حي {dist}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 4. H2: لماذا تختار مسك كلين */}
            <section className="py-14 sm:py-20 bg-slate-50 dark:bg-[#010e1f]">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-10">
                <div className="text-center max-w-2xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold mb-3">
                    <Award className="w-3.5 h-3.5" />
                    <span>معايير الثقة والجودة</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                    {homeData.whyHeading}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {homeData.whyPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 shadow-sm space-y-2.5 transition-all hover:border-cyan-500/50"
                    >
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-black">
                        <CheckCircle className="w-5 h-5 text-cyan-500" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {point.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                        {point.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 5. H2: أسئلة شائعة */}
            <section className="py-14 sm:py-20 bg-white dark:bg-[#03152a] border-y border-slate-200 dark:border-cyan-900/40">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-8">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold mb-3">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>إجابات وافية وموثوقة</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                    {homeData.faqHeading}
                  </h2>
                </div>

                <div className="space-y-4">
                  {homeData.faqs.map((faq, idx) => {
                    const isOpen = activeFaq === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl bg-slate-50 dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 overflow-hidden shadow-sm transition-all"
                      >
                        <button
                          onClick={() => setActiveFaq(isOpen ? null : idx)}
                          className="w-full p-5 text-start font-bold text-base sm:text-lg text-slate-900 dark:text-white flex items-center justify-between gap-4 cursor-pointer"
                        >
                          <span>{faq.q}</span>
                          <span className="text-cyan-500 text-xl font-bold shrink-0">{isOpen ? '−' : '+'}</span>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 pt-0 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-cyan-950/60 pt-3">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            {/* Standard Section 1: In-depth Overview & Local Environment */}
            <section className="py-14 sm:py-20 bg-white dark:bg-[#03152a] border-y border-slate-200 dark:border-cyan-900/40">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{language === 'ar' ? 'نظرة شاملة وتحديات البيئة المحلية' : 'In-Depth Overview & Climate Context'}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                    {language === 'ar' 
                      ? `أبعاد وأهمية ${serviceName} في ${cityName}` 
                      : `Scope and Significance of ${serviceName} in ${cityName}`}
                  </h2>
                </div>

                <div className="space-y-5 text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                  {(language === 'ar' ? data.introParagraphs : data.introParagraphsEn).map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Importance Key Highlights */}
                <div className="pt-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-cyan-500" />
                    <span>{language === 'ar' ? data.importanceTitle : data.importanceTitleEn}</span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {(language === 'ar' ? data.importanceContent : data.importanceContentEn).map((point, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-slate-50 dark:bg-[#072448] border border-slate-200 dark:border-cyan-900/40 shadow-sm space-y-2"
                      >
                        <div className="w-7 h-7 rounded-lg bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-black text-sm">
                          {idx + 1}
                        </div>
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Standard Section 1.5: Local Neighborhood Analysis */}
            {data.neighborhoodsAnalysisParagraphs && data.neighborhoodsAnalysisParagraphs.length > 0 && (
              <section className="py-14 sm:py-20 bg-slate-100/70 dark:bg-[#021124] border-b border-slate-200 dark:border-cyan-900/40">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold mb-3">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{language === 'ar' ? 'التحليل الميداني للأحياء' : 'Local Neighborhood Analysis'}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                      {language === 'ar' ? data.neighborhoodsAnalysisTitle : data.neighborhoodsAnalysisTitleEn}
                    </h2>
                  </div>
                  <div className="space-y-4 text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    {(language === 'ar' ? data.neighborhoodsAnalysisParagraphs : data.neighborhoodsAnalysisParagraphsEn)?.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Standard Section 2: Systematic Workflow Steps */}
            <section className="py-14 sm:py-20 bg-slate-50 dark:bg-[#010e1f]">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-10">
                <div className="text-center max-w-2xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold mb-3">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{language === 'ar' ? 'منهجية العمل' : 'Our Systematic Workflow'}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
                    {language === 'ar' ? data.workflowTitle : data.workflowTitleEn}
                  </h2>
                </div>

                <div className="space-y-4">
                  {data.workflowSteps.map((step) => (
                    <div
                      key={step.number}
                      className="p-6 rounded-2xl bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-5 transition-all hover:border-cyan-500/50"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-black text-lg flex items-center justify-center shrink-0 shadow-md">
                        {step.number}
                      </div>
                      <div className="space-y-1 flex-1">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                          {language === 'ar' ? step.title : step.titleEn}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                          {language === 'ar' ? step.description : step.descriptionEn}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Standard Section 3: Features & Advantages */}
            <section className="py-14 sm:py-20 bg-white dark:bg-[#03152a] border-y border-slate-200 dark:border-cyan-900/40">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-10">
                <div className="text-center max-w-2xl mx-auto">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold mb-3">
                    <Award className="w-3.5 h-3.5" />
                    <span>{language === 'ar' ? 'الجودة والضمان' : 'Quality & Guarantees'}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white">
                    {language === 'ar' ? data.featuresTitle : data.featuresTitleEn}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-slate-50 dark:bg-[#061e38] border border-slate-200 dark:border-cyan-900/40 shadow-sm flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div className="space-y-1.5">
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">
                          {language === 'ar' ? feat.title : feat.titleEn}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                          {language === 'ar' ? feat.description : feat.descriptionEn}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Standard Section 3.5: Industrial Equipment & SASO Standards */}
            {data.equipmentParagraphs && data.equipmentParagraphs.length > 0 && (
              <section className="py-14 sm:py-20 bg-slate-100/70 dark:bg-[#021124] border-b border-slate-200 dark:border-cyan-900/40">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold mb-3">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-500" />
                      <span>{language === 'ar' ? 'التقنيات والمواصفات القياسية' : 'Industrial Equipment & SASO Standards'}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                      {language === 'ar' ? data.equipmentTitle : data.equipmentTitleEn}
                    </h2>
                  </div>
                  <div className="space-y-4 text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                    {(language === 'ar' ? data.equipmentParagraphs : data.equipmentParagraphsEn)?.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Standard Section 4: Districts Coverage in this City */}
            <section className="py-14 sm:py-20 bg-slate-50 dark:bg-[#010e1f]">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{language === 'ar' ? 'التغطية الميدانية' : 'Field Coverage'}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                    {language === 'ar' ? data.districtsTitle : data.districtsTitleEn}
                  </h2>
                  <p className="text-base text-slate-600 dark:text-slate-300 mt-2 font-medium">
                    {language === 'ar' ? data.districtsIntro : data.districtsIntroEn}
                  </p>
                </div>

                <div className="space-y-3">
                  {(language === 'ar' ? data.districtsList : data.districtsListEn).map((dist, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 text-sm font-semibold text-slate-800 dark:text-slate-200 flex items-start gap-3 shadow-sm"
                    >
                      <MapPin className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{dist}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Standard Section 5: Expert Proactive Tips */}
            <section className="py-14 sm:py-20 bg-white dark:bg-[#03152a] border-y border-slate-200 dark:border-cyan-900/40">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold mb-3">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                    <span>{language === 'ar' ? 'نصائح وإرشادات وقائية' : 'Expert Preventative Advice'}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                    {language === 'ar' ? data.tipsTitle : data.tipsTitleEn}
                  </h2>
                  <p className="text-base text-slate-600 dark:text-slate-300 mt-2 font-medium">
                    {language === 'ar' ? data.tipsIntro : data.tipsIntroEn}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {data.tipsList.map((tip, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-slate-50 dark:bg-[#072448] border border-slate-200 dark:border-cyan-900/40 space-y-2 shadow-sm"
                    >
                      <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                        <Lightbulb className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {language === 'ar' ? tip.title : tip.titleEn}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                        {language === 'ar' ? (tip.text || tip.description) : (tip.textEn || tip.descriptionEn)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Standard Section 6: FAQs for this Service & City */}
            <section className="py-14 sm:py-20 bg-slate-50 dark:bg-[#010e1f]">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-8">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold mb-3">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>{language === 'ar' ? 'إجابات واضحة' : 'Common Questions'}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                    {language === 'ar' ? data.faqsTitle : data.faqsTitleEn}
                  </h2>
                </div>

                <div className="space-y-4">
                  {data.faqs.map((faq, idx) => {
                    const isOpen = activeFaq === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 overflow-hidden shadow-sm transition-all"
                      >
                        <button
                          onClick={() => setActiveFaq(isOpen ? null : idx)}
                          className="w-full p-5 text-start font-bold text-base sm:text-lg text-slate-900 dark:text-white flex items-center justify-between gap-4 cursor-pointer"
                        >
                          <span>{language === 'ar' ? faq.question : faq.questionEn}</span>
                          <span className="text-cyan-500 text-xl font-bold shrink-0">{isOpen ? '−' : '+'}</span>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 pt-0 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-cyan-950/60 pt-3">
                            {language === 'ar' ? faq.answer : faq.answerEn}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        )}
        {/* Section 7: Embedded Booking Form on the Page */}
        <section id="booking" className="py-14 sm:py-20 bg-white dark:bg-[#03152a] border-t border-slate-200 dark:border-cyan-900/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold mb-3">
                <Clock className="w-3.5 h-3.5" />
                <span>{language === 'ar' ? 'حجز فوري ومباشر' : 'Direct Booking'}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                {language === 'ar' ? `احجز خدمة ${serviceName} في ${cityName}` : `Book ${serviceName} in ${cityName}`}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 font-medium">
                {language === 'ar' 
                  ? 'املأ النموذج وسيتواصل معك مشرف الخدمة خلال دقائق لتأكيد الموعد والتفاصيل.' 
                  : 'Complete the form and our supervisor will contact you within minutes to confirm details.'}
              </p>
            </div>

            <BookingForm initialServiceId={serviceId} initialDistrict={currentCity.districtsAr[0]} />
          </div>
        </section>

        {/* Section 8: Cross-Links (Same Service in other cities + other services in this city) */}
        <section id="services" className="py-14 sm:py-20 bg-slate-100 dark:bg-[#010e1f] border-t border-slate-200 dark:border-cyan-900/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-start space-y-12">
            
            {/* Same service in other cities */}
            <div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-500" />
                <span>
                  {language === 'ar' 
                    ? `خدمة ${serviceName} في مدن أخرى:` 
                    : `${serviceName} in Other Cities:`}
                </span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherCities.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => navigateToService(c.id, serviceId)}
                    className="p-5 rounded-2xl bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 hover:border-cyan-500 shadow-sm flex items-center justify-between group transition-all cursor-pointer text-start"
                  >
                    <div>
                      <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 block mb-1">
                        {language === 'ar' ? c.nameAr : c.nameEn}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {language === 'ar' ? `${serviceName} بـ${c.nameAr}` : `${serviceName} in ${c.nameEn}`}
                      </h4>
                    </div>
                    <ArrowLeft className={`w-4 h-4 text-slate-400 group-hover:text-cyan-500 transition-transform ${language === 'en' ? 'rotate-180' : ''}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Other services in this city */}
            <div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-500" />
                <span>
                  {language === 'ar' 
                    ? `خدمات أخرى متوفرة في ${cityName}:` 
                    : `Other Services Available in ${cityName}:`}
                </span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {otherServices.map((srv) => {
                  const sName = language === 'ar' ? srv.name : (srv.nameEn || srv.name);
                  const SrvIcon = iconMap[srv.iconName] || Sparkles;
                  return (
                    <button
                      key={srv.id}
                      onClick={() => navigateToService(currentCityId, srv.id)}
                      className="p-4 rounded-xl bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 hover:border-cyan-500 shadow-sm flex items-center gap-3.5 group transition-all cursor-pointer text-start"
                    >
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
                        <SrvIcon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 truncate">
                        <span className="text-xs text-slate-500 dark:text-cyan-200/70 block">
                          {cityName}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors truncate">
                          {sName}
                        </h4>
                      </div>
                      <ArrowLeft className={`w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-500 transition-transform ${language === 'en' ? 'rotate-180' : ''}`} />
                    </button>
                  );
                })}
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer
        onSelectService={(sId) => navigateToService(currentCityId, sId)}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav onOpenBooking={() => scrollToBooking()} />

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* Legal Modal */}
      <LegalModal type={legalModalType} onClose={() => setLegalModalType(null)} />
    </div>
  );
};
