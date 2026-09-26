import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Home,
  ShieldAlert,
  Bird,
  Wind,
  Droplets,
  Building2,
  Star,
  Clock,
  Award,
  Layers
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/companyInfo';
import { CITIES_SEO_DATA, CitySeoProfile } from '../data/citySeoData';
import { SEOHead } from './SEOHead';

interface CityLandingPageProps {
  cityId: 'jeddah' | 'rabigh' | 'makkah';
  onSelectCity: (cityId: 'jeddah' | 'rabigh' | 'makkah') => void;
  onOpenBooking: (serviceId?: string, district?: string, cityKey?: string) => void;
  onBackToHome: () => void;
}

export const CityLandingPage: React.FC<CityLandingPageProps> = ({
  cityId,
  onSelectCity,
  onOpenBooking,
  onBackToHome
}) => {
  const { language } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');

  const city: CitySeoProfile = CITIES_SEO_DATA[cityId] || CITIES_SEO_DATA.jeddah;
  const isAr = language === 'ar';

  const iconMap: Record<string, React.ReactNode> = {
    Home: <Home className="w-6 h-6" />,
    ShieldAlert: <ShieldAlert className="w-6 h-6" />,
    Bird: <Bird className="w-6 h-6" />,
    Wind: <Wind className="w-6 h-6" />,
    Droplets: <Droplets className="w-6 h-6" />,
    Building2: <Building2 className="w-6 h-6" />,
  };

  const getWhatsAppMessage = () => {
    const cityName = isAr ? city.nameAr : city.nameEn;
    const msg = isAr
      ? `السلام عليكم، أود الاستفسار وحجز خدمة تنظيف ومكافحة حشرات في ${cityName}.`
      : `Hello, I would like to inquire and book cleaning services in ${cityName}.`;
    return `https://wa.me/${COMPANY_INFO.phone1.waNumber}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#010e1f] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Dynamic SEO Meta for this specific city */}
      <SEOHead
        customTitle={isAr ? city.titleTagAr : city.titleTagEn}
        customDescription={isAr ? city.metaDescAr : city.metaDescEn}
      />

      {/* Top Breadcrumb & City Switcher Bar */}
      <nav aria-label="مسار التنقل" className="bg-white/80 dark:bg-[#03152a]/80 backdrop-blur-md border-b border-slate-200 dark:border-cyan-900/40 sticky top-0 z-30 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Breadcrumb trail */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
            <button
              onClick={onBackToHome}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 flex items-center gap-1 transition-colors cursor-pointer font-bold"
            >
              {isAr ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
              <span>{isAr ? 'الرئيسية' : 'Home'}</span>
            </button>
            <span className="text-slate-400 dark:text-slate-600">/</span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold">
              {isAr ? `خدمات مسك كلين في ${city.nameAr}` : `Mesk Clean in ${city.nameEn}`}
            </span>
          </div>

          {/* Quick Switch Cities */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-[#051c36] rounded-xl border border-slate-200 dark:border-cyan-900/40">
            <span className="text-xs font-bold text-slate-500 dark:text-cyan-300/80 px-2 hidden sm:inline">
              {isAr ? 'المدينة:' : 'City:'}
            </span>
            {(['jeddah', 'makkah', 'rabigh'] as const).map((cKey) => {
              const cData = CITIES_SEO_DATA[cKey];
              const isActive = cityId === cKey;
              return (
                <button
                  key={cKey}
                  type="button"
                  onClick={() => onSelectCity(cKey)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-sm shadow-cyan-600/30'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#082952]'
                  }`}
                >
                  {isAr ? cData.nameAr : cData.nameEn}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content Article */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
        
        {/* City Hero Header with H1 (Essential for SEO) */}
        <header className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-[#031c3a] to-[#010e1f] text-white p-6 sm:p-10 lg:p-12 border border-cyan-500/30 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl space-y-6">
            {/* City Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs sm:text-sm font-bold backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>{isAr ? city.introBadgeAr : city.introBadgeEn}</span>
            </div>

            {/* Main H1 Title Tag for Search Engines */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-tight leading-tight">
              {isAr ? city.h1Ar : city.h1En}
            </h1>

            {/* City Lead Description weaving in primary search intents */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-3xl">
              {isAr ? city.introLeadAr : city.introLeadEn}
            </p>

            {/* Trust and Key Value Points */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Award className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs font-bold text-slate-200">
                  {isAr ? 'ضمان جودة معتمد' : 'Certified Warranty'}
                </span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Clock className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs font-bold text-slate-200">
                  {isAr ? 'خدمة فورية 24/7' : '24/7 Service'}
                </span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs font-bold text-slate-200">
                  {isAr ? 'مبيدات ومواد آمنة' : 'Safe Materials'}
                </span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <Star className="w-5 h-5 text-amber-400 shrink-0 fill-amber-400" />
                <span className="text-xs font-bold text-slate-200">
                  {isAr ? 'تقييم 4.9 ممتاز' : '4.9 Star Rating'}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => onOpenBooking('homes', undefined, cityId)}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-black bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-5 h-5" />
                <span>{isAr ? `احجز الآن في ${city.nameAr}` : `Book Service in ${city.nameEn}`}</span>
              </button>

              <a
                href={getWhatsAppMessage()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm sm:text-base font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{isAr ? 'واتساب مباشر 24/7' : '24/7 WhatsApp'}</span>
              </a>

              <a
                href={COMPANY_INFO.phone1.tel}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm sm:text-base font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all hover:scale-105 active:scale-95"
              >
                <Phone className="w-5 h-5 text-cyan-400" />
                <span dir="ltr">{COMPANY_INFO.phone1.display}</span>
              </a>
            </div>
          </div>
        </header>

        {/* Detailed Service Sections with H2 for SEO */}
        <section className="space-y-8" aria-label={isAr ? `تفاصيل خدمات مسك كلين في ${city.nameAr}` : `Services in ${city.nameEn}`}>
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {isAr ? `خدماتنا المتخصصة في ${city.nameAr}` : `Our Specialized Services in ${city.nameEn}`}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
              {isAr
                ? 'حلول متكاملة تغطي كافة متطلبات النظافة والتعقيم والعزل ومكافحة الآفات بأحدث التقنيات.'
                : 'Complete solutions for all your cleaning, insulation, and pest control requirements.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {city.serviceBlocks.map((block) => (
              <article
                key={block.id}
                className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Service Card Header with H2 */}
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 shrink-0 border border-cyan-500/20">
                      {iconMap[block.iconName] || <Sparkles className="w-6 h-6" />}
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                        {isAr ? block.h2TitleAr : block.h2TitleEn}
                      </h2>
                      <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 mt-1 inline-block">
                        {isAr ? `تغطية لكافة أحياء ${city.nameAr}` : `Serving all ${city.nameEn} areas`}
                      </span>
                    </div>
                  </div>

                  {/* Body Paragraph with Natural Keywords */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-start">
                    {isAr ? block.paragraphAr : block.paragraphEn}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    {(isAr ? block.bulletPointsAr : block.bulletPointsEn).map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="pt-6 mt-4 border-t border-slate-100 dark:border-cyan-900/30 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenBooking(block.serviceIdRef, undefined, cityId)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors cursor-pointer"
                  >
                    <span>{isAr ? 'طلب هذه الخدمة الآن' : 'Request This Service'}</span>
                    <span>{isAr ? '←' : '→'}</span>
                  </button>

                  <a
                    href={COMPANY_INFO.phone1.tel}
                    className="text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                  >
                    {COMPANY_INFO.phone1.display}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Pricing Guide & Offers Section */}
        <section className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold">
              <Layers className="w-3.5 h-3.5" />
              <span>{isAr ? `دليل الأسعار في ${city.nameAr}` : `Pricing Guide in ${city.nameEn}`}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {isAr ? `أسعار وعروض خدمات التنظيف والعزل في ${city.nameAr}` : `Transparent Pricing & Deals in ${city.nameEn}`}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {isAr
                ? 'نقدم أفضل قيمة مقابل السعر مع خصومات فورية ومعاينة مجانية لجميع أحياء المدينة.'
                : 'Unbeatable value with instant quotes and free on-site inspections.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {city.pricingTable.map((price, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-[#03152a] border border-slate-200 dark:border-cyan-900/30 flex flex-col justify-start"
              >
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                    {isAr ? price.serviceAr : price.serviceEn}
                  </h3>
                  <p className="text-xs font-bold text-cyan-600 dark:text-cyan-400 mb-3">
                    {isAr ? price.priceNoteAr : price.priceNoteEn}
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {(isAr ? price.featuresAr : price.featuresEn).map((f, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Serviced Districts in this City */}
        <section className="p-6 sm:p-8 rounded-3xl bg-slate-100 dark:bg-[#03152a] border border-slate-200 dark:border-cyan-900/40 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-500" />
                <span>{isAr ? `أحياء ومناطق التغطية في ${city.nameAr}` : `Coverage Districts in ${city.nameEn}`}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                {isAr
                  ? 'سياراتنا وفرقنا الميدانية تصل إلى باب منزلك في أي حي خلال دقائق من تأكيد الحجز.'
                  : 'Our mobile crews reach your doorstep in any district swiftly.'}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenBooking('homes', selectedDistrict || undefined, cityId)}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-cyan-600 hover:bg-cyan-500 text-white transition-colors cursor-pointer shrink-0"
            >
              {isAr ? `حجز موعد في حيّك` : `Book in Your District`}
            </button>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 max-h-48 overflow-y-auto pr-1">
            {(isAr ? city.districtsAr : city.districtsEn).map((d, dIdx) => (
              <button
                key={dIdx}
                type="button"
                onClick={() => {
                  setSelectedDistrict(d);
                  onOpenBooking('homes', d, cityId);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                  selectedDistrict === d
                    ? 'bg-cyan-600 text-white border-cyan-600 shadow-sm'
                    : 'bg-white dark:bg-[#072448] text-slate-700 dark:text-cyan-200 border-slate-200 dark:border-cyan-800/40 hover:border-cyan-500'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </section>

        {/* City FAQs Section with Accordion */}
        <section className="space-y-4" aria-label={isAr ? `الأسئلة الشائعة حول خدمات ${city.nameAr}` : `FAQs for ${city.nameEn}`}>
          <div className="text-center max-w-2xl mx-auto space-y-1 mb-6">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {isAr ? `الأسئلة الأكثر شيوعاً في ${city.nameAr}` : `Frequently Asked Questions in ${city.nameEn}`}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {isAr ? 'إجابات وافية على استفسارات عملائنا الكرام' : 'Direct answers to our clients common questions'}
            </p>
          </div>

          <div className="space-y-3 max-w-4xl mx-auto">
            {city.faqs.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;
              return (
                <div
                  key={fIdx}
                  className="rounded-2xl bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 overflow-hidden shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-start font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base">{isAr ? faq.questionAr : faq.questionEn}</span>
                    <ChevronDown className={`w-5 h-5 text-cyan-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-cyan-900/30">
                      {isAr ? faq.answerAr : faq.answerEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom Booking Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 text-white text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black">
              {isAr ? `جاهزون لخدمتك في ${city.nameAr} على مدار الساعة` : `Ready to Serve You in ${city.nameEn} 24/7`}
            </h2>
            <p className="text-sm sm:text-base text-cyan-100">
              {isAr
                ? 'تواصل معنا الآن للحصول على خصم 25% فوري مع سرعة في الوصول وضمان شامل.'
                : 'Contact us now for an immediate 25% discount, rapid response, and full guarantee.'}
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => onOpenBooking('homes', undefined, cityId)}
                className="px-6 py-3.5 rounded-xl text-sm font-black bg-white text-slate-900 hover:bg-slate-100 shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                {isAr ? 'احجز موعدك الآن' : 'Book Your Service Now'}
              </button>
              <a
                href={getWhatsAppMessage()}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-xl text-sm font-bold bg-emerald-500 hover:bg-emerald-400 text-white shadow-md transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{isAr ? 'محادثة واتساب سريعة' : 'Chat on WhatsApp'}</span>
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};
