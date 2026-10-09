import React from 'react';
import { Phone, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useCityRoute, CityId } from '../context/CityRouteContext';
import { CITIES_DATA } from '../data/citiesDistricts';

interface HeroProps {
  onOpenBooking: (serviceId?: string, district?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const { currentCity, currentCityId, navigateToCity, isCityRoute } = useCityRoute();

  const isDark = theme === 'dark';

  const cities: { id: CityId; path: string; nameAr: string; nameEn: string }[] = [
    { id: 'jeddah', path: '/jeddah', nameAr: 'جدة', nameEn: 'Jeddah' },
    { id: 'makkah', path: '/makkah', nameAr: 'مكة المكرمة', nameEn: 'Makkah' },
    { id: 'rabigh', path: '/rabigh', nameAr: 'رابغ', nameEn: 'Rabigh' },
    { id: 'khulais', path: '/khulais', nameAr: 'خليص', nameEn: 'Khulais' },
  ];

  const mainHeadline = !isCityRoute
    ? (language === 'ar' ? 'شركة مسك كلين لخدمات التنظيف الشاملة' : 'Mesk Clean Professional Cleaning Services')
    : (language === 'ar' ? currentCity.heroHeadlineAr : currentCity.heroHeadlineEn);

  const mainDesc = !isCityRoute
    ? (language === 'ar'
        ? 'خدمات تنظيف احترافية متكاملة للمنازل والفلل والمكاتب، عزل الخزانات، مكافحة الحشرات، غسيل المكيفات وتركيب شبك وطارد الحمام في جدة، مكة المكرمة، رابغ، وخليص.'
        : 'Comprehensive professional cleaning, tank insulation, pest control, AC washing, and bird netting services across Jeddah, Makkah, Rabigh, and Khulais.')
    : (language === 'ar' ? currentCity.heroDescAr : currentCity.heroDescEn);

  const buttonOrderText = !isCityRoute
    ? (language === 'ar' ? 'اطلب الخدمة الآن عبر الواتساب' : 'Order Service Now via WhatsApp')
    : (language === 'ar' ? `اطلب خدمة في ${currentCity.nameAr} الآن` : `Order Service in ${currentCity.nameEn}`);

  return (
    <section
      id="home"
      className={`relative overflow-hidden min-h-[92vh] sm:min-h-[88vh] flex items-center justify-center text-center transition-colors duration-300 ${
        isDark ? 'bg-slate-950' : 'bg-slate-50'
      }`}
    >
      {/* Background Image */}
      <img
        src="/assets/mesk-hero-light.webp"
        alt={language === 'ar' ? (!isCityRoute ? 'شركة مسك كلين لخدمات التنظيف بجدة ومكة ورابغ وخليص' : `شركة تنظيف في ${currentCity.nameAr} - مسك كلين`) : `Mesk Clean - Cleaning Company in ${currentCity.nameEn}`}
        className={`absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-all duration-500 ${
          isDark ? 'brightness-[0.45] contrast-[1.1] saturate-[0.85]' : 'brightness-100'
        }`}
        referrerPolicy="no-referrer"
        fetchPriority="high"
        decoding="async"
      />

      {/* Balanced Overlays */}
      {isDark ? (
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/65 via-slate-950/40 to-slate-950/85 pointer-events-none transition-all duration-500"></div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/25 to-white/55 pointer-events-none transition-all duration-500"></div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20 flex flex-col items-center text-center">
        
        {/* City Route Selection Pills in Hero */}
        <div className="inline-flex items-center p-1.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 shadow-lg mb-6 gap-1 sm:gap-2">
          {cities.map((city) => {
            const isActive = isCityRoute && currentCityId === city.id;
            return (
              <a
                key={city.id}
                href={city.path}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToCity(city.id);
                }}
                className={`px-3 sm:px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30 scale-105'
                    : 'text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 hover:bg-slate-100/80 dark:hover:bg-[#072448]'
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-cyan-500'}`} />
                <span>{language === 'ar' ? city.nameAr : city.nameEn}</span>
              </a>
            );
          })}
        </div>

        {/* Dynamic Main Headline */}
        <h1
          className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-2 sm:mb-3 transition-colors duration-300 ${
            isDark
              ? 'text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]'
              : 'text-slate-950 drop-shadow-[0_2px_8px_rgba(255,255,255,0.95)]'
          }`}
        >
          {mainHeadline}
        </h1>

        <div
          className={`text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-2 sm:mb-3 transition-colors duration-300 ${
            isDark
              ? 'text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]'
              : 'text-slate-950 drop-shadow-[0_2px_8px_rgba(255,255,255,0.95)]'
          }`}
        >
          {language === 'ar' ? 'خدمة احترافية...' : 'Professional Service...'}
        </div>

        {/* Highlighted Cyan Headline */}
        <div
          className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-5 sm:mb-6 transition-colors duration-300 ${
            isDark
              ? 'text-[#00e5ff] drop-shadow-[0_2px_16px_rgba(0,229,255,0.5)]'
              : 'text-[#009bb8] drop-shadow-[0_2px_10px_rgba(255,255,255,0.95)]'
          }`}
        >
          {language === 'ar' ? 'لبيئة أنظف' : 'For a Cleaner Environment'}
        </div>

        {/* Description Text */}
        <p
          className={`text-sm sm:text-base lg:text-lg font-bold leading-relaxed max-w-xl mx-auto mb-5 sm:mb-6 text-center transition-colors duration-300 ${
            isDark
              ? 'text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]'
              : 'text-slate-900 drop-shadow-[0_1px_4px_rgba(255,255,255,0.9)]'
          }`}
        >
          {mainDesc}
        </p>

        {/* District Coverage Micro-Bar for Local SEO & Trust */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 text-xs font-semibold text-slate-800 dark:text-cyan-200 mb-6 sm:mb-8 shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
          <span>
            {language === 'ar'
              ? (isCityRoute 
                  ? `تغطية فورية لكافة أحياء ${currentCity.nameAr}: ${currentCity.districtsAr.slice(0, 4).join('، ')} وكافة الأحياء`
                  : 'تغطية فورية: أبحر، الحمدانية، الصفا، الروضة، العوالي، رابغ، خليص وكافة الأحياء')
              : (isCityRoute
                  ? `Fast coverage across all ${currentCity.nameEn} districts`
                  : 'Fast coverage across Jeddah, Makkah, Rabigh & Khulais')}
          </span>
        </div>

        {/* Action Buttons Stack */}
        <div className="w-full max-w-md mx-auto space-y-3.5 sm:space-y-4">
          <a
            id="hero-order-whatsapp"
            href={COMPANY_INFO.phone1.waUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3.5 sm:py-4 px-6 rounded-2xl font-bold text-base sm:text-lg text-white bg-[#00a8cc] hover:bg-[#0095b6] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 cursor-pointer animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite] hover:animate-none hover:scale-[1.02]"
          >
            <span>{buttonOrderText}</span>
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          <a
            id="hero-contact-phone"
            href={COMPANY_INFO.phone1.tel}
            className={`w-full py-3.5 sm:py-4 px-6 rounded-2xl font-bold text-base sm:text-lg active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer ${
              isDark
                ? 'text-white bg-[#021326]/80 hover:bg-[#041d3a] border border-[#00bcd4] shadow-md'
                : 'text-slate-900 bg-white hover:bg-slate-50 border-2 border-[#00a8cc] shadow-sm'
            }`}
          >
            <span>{language === 'ar' ? 'اتصل بنا مباشرة 24/7' : 'Call Us Directly 24/7'}</span>
            <Phone className={`w-5 h-5 sm:w-6 sm:h-6 ${isDark ? 'text-white' : 'text-slate-900'}`} />
          </a>
        </div>
      </div>
    </section>
  );
};
