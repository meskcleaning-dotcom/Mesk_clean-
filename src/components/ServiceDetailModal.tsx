import React from 'react';
import { X, CheckCircle2, MessageCircle, Phone, Sparkles, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';
import { COMPANY_INFO } from '../data/companyInfo';
import { useLanguage } from '../context/LanguageContext';
import { useCityRoute } from '../context/CityRouteContext';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBook: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBook,
}) => {
  const { language, t } = useLanguage();
  const { currentCity } = useCityRoute();

  if (!service) return null;

  const serviceName = language === 'ar' ? service.name : (service.nameEn || service.name);
  
  // Dynamically adapt descriptions that mention Jeddah if looking at Makkah or Rabigh
  const adaptText = (text: string) => {
    if (language !== 'ar') {
      return text.replace(/\bJeddah\b/gi, currentCity.nameEn);
    }
    return text
      .replace(/أحياء جدة/g, `أحياء ${currentCity.nameAr}`)
      .replace(/بجدة/g, `بـ${currentCity.nameAr}`)
      .replace(/في جدة/g, `في ${currentCity.nameAr}`)
      .replace(/مدينة جدة/g, `مدينة ${currentCity.nameAr}`)
      .replace(/أجواء جدة/g, `أجواء ${currentCity.nameAr}`);
  };

  const serviceDesc = adaptText(language === 'ar' ? service.description : (service.descriptionEn || service.description));
  const rawDetails = language === 'ar' ? service.details : (service.detailsEn || service.details);
  const serviceDetails = rawDetails.map(d => adaptText(d));

  const whatsappMessage = encodeURIComponent(
    language === 'ar'
      ? `السلام عليكم ورحمة الله، أود الاستفسار وحجز خدمة (${service.name}) في ${currentCity.nameAr} من شركة مسك كلين.`
      : `Hello Mesk Clean team, I would like to inquire about and book the (${serviceName}) service in ${currentCity.nameEn}.`
  );

  return (
    <div
      id="service-detail-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="service-detail-modal-container"
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#04162c] border border-slate-200 dark:border-cyan-800/60 shadow-2xl text-slate-900 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden rounded-t-2xl bg-slate-900">
          <img
            src={service.image}
            alt={serviceName}
            style={{ objectPosition: service.imagePosition }}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 start-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-white/20 transition-all cursor-pointer"
            aria-label={t('modal.close')}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on image */}
          <div className="absolute bottom-4 start-6 end-6 text-start">
            <span className="inline-block px-3 py-1 rounded-md bg-cyan-500 text-slate-950 text-xs font-black mb-2">
              {language === 'ar' ? `${currentCity.nameAr} • خدمة احترافية` : `${currentCity.nameEn} • Certified Service`}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {serviceName}
            </h3>
          </div>
        </div>

        {/* Content body */}
        <div className="p-6 sm:p-8 space-y-6 text-start">
          <div>
            <h4 className="text-base font-bold text-cyan-600 dark:text-cyan-400 mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>{t('modal.serviceOverview')}</span>
            </h4>
            <p className="text-slate-700 dark:text-slate-200 text-base leading-relaxed">
              {serviceDesc}
            </p>
          </div>

          {/* Details list */}
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-500" />
              <span>{t('modal.serviceIncludes')}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {serviceDetails.map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-[#07203e] border border-slate-200/80 dark:border-cyan-900/40 text-sm font-semibold text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guarantee banner */}
          <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-800 dark:text-cyan-200 text-xs sm:text-sm font-bold flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-cyan-500 shrink-0" />
            <span>
              {language === 'ar'
                ? `ضمان معتمد على جودة الخدمة لجميع عملائنا الكرام في ${currentCity.nameAr}.`
                : `Certified quality guarantee for all our valued customers in ${currentCity.nameEn}.`}
            </span>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onBook(service.id)}
              className="flex-1 py-3.5 px-5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all text-center cursor-pointer active:scale-95"
            >
              {t('modal.bookThisService')}
            </button>

            <a
              href={`https://wa.me/966547161147?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t('modal.quickWhatsApp')}</span>
            </a>

            <a
              href={COMPANY_INFO.phone1.tel}
              className="inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-cyan-500" />
              <span>{COMPANY_INFO.phone1.display}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
