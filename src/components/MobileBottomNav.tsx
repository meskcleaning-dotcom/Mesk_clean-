import React from 'react';
import { Home, Sparkles, Calendar, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface MobileBottomNavProps {
  onOpenBooking: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenBooking }) => {
  const { t } = useLanguage();

  return (
    <nav
      id="mobile-bottom-navigation"
      aria-label="Bottom Navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-[#020e1e]/95 backdrop-blur-lg border-t border-slate-200 dark:border-cyan-900/50 px-2 py-2 shadow-2xl"
    >
      <div className="grid grid-cols-4 items-center justify-around text-center">
        {/* Home */}
        <a
          href="#home"
          className="flex flex-col items-center py-1 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 active:scale-95 transition-all"
        >
          <Home className="w-5 h-5" />
          <span className="text-[11px] font-bold mt-1">{t('nav.home')}</span>
        </a>

        {/* Services */}
        <a
          href="#services"
          className="flex flex-col items-center py-1 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 active:scale-95 transition-all"
        >
          <Sparkles className="w-5 h-5" />
          <span className="text-[11px] font-bold mt-1">{t('nav.services')}</span>
        </a>

        {/* Booking */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center py-1 text-cyan-600 dark:text-cyan-400 active:scale-95 transition-all cursor-pointer"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-md shadow-cyan-500/30 -mt-2">
            <Calendar className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-black mt-0.5">{t('nav.bookNow')}</span>
        </button>

        {/* Contact */}
        <a
          href="#contact"
          className="flex flex-col items-center py-1 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 active:scale-95 transition-all"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[11px] font-bold mt-1">{t('nav.contact')}</span>
        </a>
      </div>
    </nav>
  );
};
