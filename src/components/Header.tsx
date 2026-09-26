import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.whyUs'), href: '#why-us' },
    { label: t('nav.testimonials'), href: '#testimonials' },
    { label: t('nav.faq'), href: '#faq' },
    { label: t('nav.blog'), href: '#blog' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header
      id="site-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#010e1f]/95 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-cyan-500/20'
          : 'bg-white dark:bg-[#010e1f] border-b border-slate-200/80 dark:border-cyan-900/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout (hidden on mobile) */}
        <div className="hidden lg:flex items-center justify-between h-20">
          {/* Logo on Right (in RTL) */}
          <a
            href="#home"
            id="brand-logo-link"
            className="flex items-center group focus:outline-none py-1"
            aria-label="مسك كلين - الصفحة الرئيسية"
          >
            <img
              src={COMPANY_INFO.logo.transparent}
              alt={language === 'ar' ? 'شعار شركة مسك كلين لخدمات التنظيف بجدة، مكة، ورابغ' : 'Mesk Clean logo - Cleaning services in Jeddah, Makkah & Rabigh'}
              className="h-14 sm:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(6,182,212,0.25)]"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="flex items-center gap-6 xl:gap-8" aria-label="القائمة الرئيسية">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm xl:text-base font-semibold text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-cyan-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Controls: Language Toggle + Day/Night Theme Toggle + Book CTA */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <button
              id="language-toggle-desktop"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#082244] border border-slate-200 dark:border-cyan-900/50 transition-colors cursor-pointer"
              title={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
              aria-label="تبديل اللغة"
            >
              <Globe className="w-4 h-4 text-cyan-500" />
              <span>{language === 'ar' ? 'English' : 'العربية'}</span>
            </button>

            {/* Day / Night Theme Toggle */}
            <button
              id="theme-toggle-desktop"
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#082244] border border-slate-200 dark:border-cyan-900/50 transition-colors cursor-pointer"
              aria-label={theme === 'dark' ? 'تبديل إلى الوضع الفاتح' : 'تبديل إلى الوضع الداكن'}
              title={theme === 'dark' ? 'الوضع الفاتح (نهاري)' : 'الوضع الداكن (ليلي)'}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            {/* Book Now primary CTA */}
            <button
              id="header-book-cta-desktop"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/25 hover:shadow-lg hover:shadow-cyan-500/35 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t('nav.bookNow')}</span>
            </button>
          </div>
        </div>

        {/* Mobile Header: Logo on the RIGHT, Toggles (Language & Day/Night) + Hamburger on the LEFT */}
        <div className="flex lg:hidden items-center justify-between h-20">
          {/* Logo on the Right (in RTL) */}
          <a
            href="#home"
            id="brand-logo-link-mobile"
            className="flex items-center py-1"
            aria-label="مسك كلين - الصفحة الرئيسية"
          >
            <img
              src={COMPANY_INFO.logo.transparent}
              alt="MeskClean"
              className="h-12 sm:h-14 w-auto object-contain drop-shadow-[0_2px_8px_rgba(6,182,212,0.25)]"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Controls on the Left: Language Switch + Day/Night Theme Switch + Hamburger Menu */}
          <div className="flex items-center gap-2">
            {/* Language Switch Button (عربي / English) */}
            <button
              id="header-language-toggle-mobile"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1 px-2.5 py-2 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-[#082244] border border-slate-200 dark:border-cyan-900/40 hover:bg-slate-200 dark:hover:bg-[#0c2e5c] active:scale-95 transition-all cursor-pointer"
              title={language === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
              aria-label="تبديل اللغة"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-500" />
              <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

            {/* Day / Night Theme Toggle Button (الوضع النهاري والليلي) */}
            <button
              id="header-theme-toggle-mobile"
              onClick={toggleTheme}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-[#082244] hover:bg-slate-200 dark:hover:bg-[#0c2e5c] border border-slate-200 dark:border-cyan-900/40 active:scale-95 transition-all cursor-pointer"
              aria-label={theme === 'dark' ? 'تبديل إلى الوضع النهاري' : 'تبديل إلى الوضع الليلي'}
              title={theme === 'dark' ? 'الوضع النهاري' : 'الوضع الليلي'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Hamburger Menu Toggle Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-[#082244] text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-cyan-900/50 hover:bg-slate-200 dark:hover:bg-[#0c2e5c] active:scale-95 transition-all cursor-pointer"
              aria-label="فتح القائمة"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="lg:hidden bg-white/98 dark:bg-[#010e1f]/98 backdrop-blur-xl border-b border-cyan-500/20 px-5 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200 shadow-2xl"
        >
          {/* Navigation Links inside Drawer */}
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-base font-bold text-slate-800 dark:text-slate-100 hover:bg-cyan-50 dark:hover:bg-cyan-950/50 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-cyan-500 text-xs">{language === 'ar' ? '←' : '→'}</span>
              </a>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-cyan-900/40 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 px-4 rounded-xl text-center font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow-md shadow-cyan-500/25 active:scale-98 cursor-pointer"
            >
              {t('nav.bookNow')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
