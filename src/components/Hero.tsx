import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onOpenBooking: (serviceId?: string, district?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <section
      id="home"
      className={`relative overflow-hidden min-h-[90vh] sm:min-h-[85vh] flex items-center justify-center text-center transition-colors duration-300 ${
        isDark ? 'bg-slate-950' : 'bg-slate-50'
      }`}
    >
      {/* Background Image - Exact same worker image centered for both Light & Dark modes */}
      <img
        src="/assets/mesk-hero-light.jpg"
        alt={language === 'ar' ? 'شركة تنظيف بجدة - مسك كلين' : 'Mesk Clean - Cleaning Company in Jeddah'}
        className={`absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-all duration-500 ${
          isDark ? 'brightness-[0.45] contrast-[1.1] saturate-[0.85]' : 'brightness-100'
        }`}
        referrerPolicy="no-referrer"
        fetchPriority="high"
      />

      {/* Balanced Overlays for optimal contrast and readability */}
      {isDark ? (
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/35 to-slate-950/80 pointer-events-none transition-all duration-500"></div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/20 to-white/50 pointer-events-none transition-all duration-500"></div>
      )}

      {/* Hero Content matching exact typography and structure from the user's reference images */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col items-center text-center">
        {/* Main Headline (Line 1 & Line 2) */}
        <h1
          className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-2 sm:mb-3 transition-colors duration-300 ${
            isDark
              ? 'text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]'
              : 'text-slate-950 drop-shadow-[0_2px_8px_rgba(255,255,255,0.95)]'
          }`}
        >
          {language === 'ar' ? 'شركة تنظيف بجدة' : 'Cleaning Company in Jeddah'}
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

        {/* Highlighted Cyan Headline (Line 3) */}
        <div
          className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 sm:mb-8 transition-colors duration-300 ${
            isDark
              ? 'text-[#00e5ff] drop-shadow-[0_2px_16px_rgba(0,229,255,0.5)]'
              : 'text-[#009bb8] drop-shadow-[0_2px_10px_rgba(255,255,255,0.95)]'
          }`}
        >
          {language === 'ar' ? 'لبيئة أنظف' : 'For a Cleaner Environment'}
        </div>

        {/* Clean Description Text */}
        <p
          className={`text-sm sm:text-base lg:text-lg font-bold leading-relaxed max-w-lg mx-auto mb-8 sm:mb-10 text-center transition-colors duration-300 ${
            isDark
              ? 'text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]'
              : 'text-slate-900 drop-shadow-[0_1px_4px_rgba(255,255,255,0.9)]'
          }`}
        >
          {language === 'ar'
            ? 'نقدم أفضل خدمات التنظيف المنزلي، تنظيف الخزانات، عزل الخزانات، غسيل المكيفات وغسيل الكنب بأحدث المعدات وأفضل المواد.'
            : 'We provide premier home cleaning services: water tank cleaning, tank insulation, AC wash, and sofa steam cleaning with the latest equipment and finest materials.'}
        </p>

        {/* Action Buttons Stack matching screenshot */}
        <div className="w-full max-w-md mx-auto space-y-3.5 sm:space-y-4">
          {/* Button 1: Solid Cyan Button with WhatsApp icon & subtle pulse effect */}
          <a
            id="hero-order-whatsapp"
            href={COMPANY_INFO.phone1.waUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3.5 sm:py-4 px-6 rounded-2xl font-bold text-base sm:text-lg text-white bg-[#00a8cc] hover:bg-[#0095b6] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 cursor-pointer animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite] hover:animate-none hover:scale-[1.02]"
          >
            <span>{language === 'ar' ? 'اطلب خدمة الآن' : 'Order Service Now'}</span>
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          {/* Button 2: Contact Button (Dark card with cyan border in night mode, White with cyan border & dark text in day mode) */}
          <a
            id="hero-contact-phone"
            href={COMPANY_INFO.phone1.tel}
            className={`w-full py-3.5 sm:py-4 px-6 rounded-2xl font-bold text-base sm:text-lg active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer ${
              isDark
                ? 'text-white bg-[#021326]/80 hover:bg-[#041d3a] border border-[#00bcd4] shadow-md'
                : 'text-slate-900 bg-white hover:bg-slate-50 border-2 border-[#00a8cc] shadow-sm'
            }`}
          >
            <span>{language === 'ar' ? 'تواصل معنا' : 'Contact Us'}</span>
            <Phone className={`w-5 h-5 sm:w-6 sm:h-6 ${isDark ? 'text-white' : 'text-slate-900'}`} />
          </a>
        </div>
      </div>
    </section>
  );
};
