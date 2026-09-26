import React from 'react';
import { Phone, MessageCircle, MapPin, Instagram, Facebook, Share2, Lock } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';
import { SERVICES_DATA } from '../data/servicesData';
import { useLanguage } from '../context/LanguageContext';
import { getStoredCompanySettings } from '../data/store';

interface FooterProps {
  onSelectService: (serviceId: string) => void;
  onOpenAdmin?: () => void;
  onOpenLegal?: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService, onOpenAdmin, onOpenLegal }) => {
  const { language, t } = useLanguage();
  const company = getStoredCompanySettings();

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-cyan-900/40 relative overflow-hidden pt-16 pb-24 lg:pb-16 transition-colors">
      {/* Background glow */}
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-200 dark:border-slate-800 text-start">
          
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={COMPANY_INFO.logo.transparent}
                alt={COMPANY_INFO.arabicName}
                className="h-16 w-auto object-contain drop-shadow-[0_2px_10px_rgba(6,182,212,0.3)]"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white">
                  {language === 'ar' ? company.arabicName : company.englishName}
                </h3>
                <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400">
                  {language === 'ar' ? company.subtitle : company.subtitleEn}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              {language === 'ar' ? company.description : company.descriptionEn}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={company.instagram || COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 flex items-center justify-center transition-all shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={company.facebook || COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 flex items-center justify-center transition-all shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={company.tiktok || COMPANY_INFO.social.tiktok}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 flex items-center justify-center transition-all shadow-sm"
                aria-label="TikTok"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href={company.pinterest || COMPANY_INFO.social.pinterest}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 flex items-center justify-center transition-all shadow-sm font-serif font-bold text-sm"
                aria-label="Pinterest"
              >
                P
              </a>
            </div>
          </div>

          {/* Quick Links (Cols 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-base font-bold text-slate-900 dark:text-white border-b border-cyan-500/30 pb-2">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 font-medium">
              <li>
                <a href="#home" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  {t('nav.whyUs')}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  {t('nav.testimonials')}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  {t('nav.faq')}
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  {t('nav.bookNow')}
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  {t('nav.blog')}
                </a>
              </li>
            </ul>
          </div>

          {/* Services List (Cols 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-slate-900 dark:text-white border-b border-cyan-500/30 pb-2">
              {t('footer.servicesTitle')}
            </h4>
            <div className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
              {SERVICES_DATA.map((srv) => {
                const srvTitle = language === 'ar' ? srv.name : (srv.nameEn || srv.name);
                return (
                  <button
                    key={srv.id}
                    onClick={() => onSelectService(srv.id)}
                    className="text-start hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors truncate cursor-pointer"
                  >
                    • {srvTitle}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Contact and Headquarters (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-slate-900 dark:text-white border-b border-cyan-500/30 pb-2">
              {t('footer.contactTitle')}
            </h4>
            <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <a
                href={`tel:+966${company.phone1.replace(/^0+/, '')}`}
                className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span dir="ltr">{company.phone1}</span>
              </a>

              <a
                href={`tel:+966${company.phone2.replace(/^0+/, '')}`}
                className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span dir="ltr">{company.phone2}</span>
              </a>

              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>{language === 'ar' ? 'واتساب مباشر على مدار الساعة' : '24/7 Direct WhatsApp'}</span>
              </a>

              <div className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-xs leading-relaxed pt-1">
                <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-500 shrink-0 mt-0.5" />
                <span>{language === 'ar' ? company.address : company.addressEn}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright, Legal & Admin links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 text-center sm:text-start">
          <div>
            {t('footer.rights')}
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4">
            {onOpenLegal && (
              <>
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {t('footer.privacy')}
                </button>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <button
                  type="button"
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {t('footer.terms')}
                </button>
                <span className="text-slate-300 dark:text-slate-700">•</span>
              </>
            )}

            {onOpenAdmin && (
              <>
                <button
                  type="button"
                  onClick={onOpenAdmin}
                  className="inline-flex items-center gap-1.5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>{t('footer.adminLink')}</span>
                </button>
                <span className="text-slate-300 dark:text-slate-700">•</span>
              </>
            )}

            <span className="text-slate-500 dark:text-slate-400">
              {language === 'ar' ? 'جدة، المملكة العربية السعودية' : 'Jeddah, Saudi Arabia'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
