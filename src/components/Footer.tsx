import React from 'react';
import { Phone, MessageCircle, MapPin, Instagram, Facebook, Share2, Lock } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';
import { SERVICES_DATA } from '../data/servicesData';
import { useLanguage } from '../context/LanguageContext';
import { useCityRoute, CityId } from '../context/CityRouteContext';
import { getStoredCompanySettings } from '../data/store';
import { CITIES_DATA } from '../data/citiesDistricts';

interface FooterProps {
  onSelectService: (serviceId: string) => void;
  onOpenAdmin?: () => void;
  onOpenLegal?: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService, onOpenAdmin, onOpenLegal }) => {
  const { language, t } = useLanguage();
  const { currentCity, currentCityId, navigateToCity } = useCityRoute();
  const company = getStoredCompanySettings();

  const handleCityClick = (e: React.MouseEvent, cityId: CityId) => {
    e.preventDefault();
    navigateToCity(cityId);
  };

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
                loading="lazy"
                decoding="async"
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

          {/* Quick Links & City Routes (Cols 5-6) */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white border-b border-cyan-500/30 pb-2">
                {language === 'ar' ? 'صفحات المدن' : 'City Routes'}
              </h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 font-medium mt-2">
                {Object.values(CITIES_DATA).map((city) => (
                  <li key={city.id}>
                    <a
                      href={`/${city.id}`}
                      onClick={(e) => handleCityClick(e, city.id as CityId)}
                      className={`hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5 ${
                        currentCityId === city.id ? 'text-cyan-600 dark:text-cyan-400 font-bold' : ''
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                      <span>{language === 'ar' ? `شركة تنظيف ب${city.nameAr}` : `Cleaning in ${city.nameEn}`}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white border-b border-slate-300 dark:border-slate-800 pb-1.5">
                {t('footer.quickLinks')}
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium mt-2">
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
              </ul>
            </div>
          </div>

          {/* Services List (Cols 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-slate-900 dark:text-white border-b border-cyan-500/30 pb-2">
              {language === 'ar' ? `خدماتنا في ${currentCity.nameAr}` : `Our Services in ${currentCity.nameEn}`}
            </h4>
            <div className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
              {SERVICES_DATA.map((srv) => {
                const srvTitle = language === 'ar' ? srv.name : (srv.nameEn || srv.name);
                return (
                  <a
                    key={srv.id}
                    href={`/${currentCityId}/services/${srv.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectService(srv.id);
                    }}
                    className="text-start hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors truncate cursor-pointer block"
                  >
                    • {srvTitle}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact and Headquarters (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-slate-900 dark:text-white border-b border-cyan-500/30 pb-2">
              {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
            </h4>
            <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <a
                href={`tel:+966${company.phone1.replace(/^0+/, '')}`}
                className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span dir="ltr">{company.phone1}</span>
              </a>

              {company.phone2 && (
                <a
                  href={`tel:+966${company.phone2.replace(/^0+/, '')}`}
                  className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span dir="ltr">{company.phone2}</span>
                </a>
              )}

              <a
                href={COMPANY_INFO.phone1.waUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-emerald-500 transition-colors text-emerald-600 dark:text-emerald-400 font-semibold"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>{language === 'ar' ? 'محادثة فورية واتساب 24/7' : 'WhatsApp Chat 24/7'}</span>
              </a>

              <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                <span>{language === 'ar' ? company.city : company.cityEn}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Admin/Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>
            © {new Date().getFullYear()} {language === 'ar' ? company.arabicName : company.englishName}. {t('footer.allRightsReserved')}
          </p>

          <div className="flex items-center gap-4">
            {onOpenLegal && (
              <>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {t('footer.privacyPolicy')}
                </button>
                <span>•</span>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {t('footer.termsOfService')}
                </button>
                <span>•</span>
              </>
            )}

            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                title="لوحة تحكم المشرف"
              >
                <Lock className="w-3 h-3 text-slate-400" />
                <span>{language === 'ar' ? 'إدارة الطلبات' : 'Admin'}</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
