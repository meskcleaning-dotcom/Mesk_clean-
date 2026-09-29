import React, { useState, useEffect } from 'react';
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
  Eye,
  MessageCircle,
  Bird
} from 'lucide-react';
import { getStoredServices } from '../data/store';
import { ServiceItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useCityRoute } from '../context/CityRouteContext';

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

interface ServicesSectionProps {
  onBookService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookService }) => {
  const { language, t } = useLanguage();
  const { currentCity } = useCityRoute();
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const loadServices = () => {
    setServices(getStoredServices().filter(s => s.active !== false));
  };

  useEffect(() => {
    loadServices();
    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.type === 'services') {
        loadServices();
      }
    };
    window.addEventListener('mesk_store_updated', handleUpdate);
    return () => window.removeEventListener('mesk_store_updated', handleUpdate);
  }, []);

  const adaptText = (text?: string) => {
    if (!text) return '';
    if (language !== 'ar') {
      return text
        .replace(/\bJeddah\b/gi, currentCity.nameEn)
        .replace(/\bMakkah\b/gi, currentCity.nameEn)
        .replace(/\bRabigh\b/gi, currentCity.nameEn);
    }
    return text
      .replace(/أحياء جدة/g, `أحياء ${currentCity.nameAr}`)
      .replace(/بجدة/g, `بـ${currentCity.nameAr}`)
      .replace(/في جدة/g, `في ${currentCity.nameAr}`)
      .replace(/مدينة جدة/g, `مدينة ${currentCity.nameAr}`)
      .replace(/أجواء جدة/g, `أجواء ${currentCity.nameAr}`);
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId((prev) => (prev === serviceId ? null : serviceId));
    setTimeout(() => {
      const el = document.getElementById('inline-service-details');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 60);
  };

  const selectedService = services.find((s) => s.id === selectedServiceId);
  const selectedName = selectedService 
    ? (language === 'ar' ? selectedService.name : (selectedService.nameEn || selectedService.name))
    : '';
  const selectedRawDesc = selectedService
    ? (language === 'ar' ? selectedService.description : (selectedService.descriptionEn || selectedService.description))
    : '';
  const selectedDesc = adaptText(selectedRawDesc);
  const selectedRawDetails = selectedService
    ? (language === 'ar'
        ? selectedService.details
        : ((selectedService.detailsEn && selectedService.detailsEn.length > 0)
            ? selectedService.detailsEn
            : selectedService.details))
    : [];
  const selectedDetails = selectedRawDetails.map((d) => adaptText(d));

  return (
    <section id="services" className="py-16 sm:py-24 relative overflow-hidden bg-slate-50/50 dark:bg-[#011427]/60">
      {/* Background accents */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('services.badge')}</span>
          </div>

          {/* Dynamic Title Tailored to Current City */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            {language === 'ar' ? `خدماتنا في ${currentCity.nameAr}` : `Our Services in ${currentCity.nameEn}`}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-cyan-200/80 max-w-2xl mx-auto">
            {language === 'ar'
              ? `اختر الخدمة المناسبة لمنزلك أو منشأتك في ${currentCity.nameAr}، واطلع على التفاصيل واحجز موعدك بسهولة.`
              : `Choose the ideal cleaning service for your property in ${currentCity.nameEn}, view details, and book easily.`}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;
            const name = language === 'ar' ? service.name : (service.nameEn || service.name);
            const rawDescription = language === 'ar' ? service.description : (service.descriptionEn || service.description);
            const rawDetails = language === 'ar' 
              ? service.details 
              : ((service.detailsEn && service.detailsEn.length > 0) ? service.detailsEn : service.details);
            
            const description = adaptText(rawDescription);
            const details = rawDetails.map(d => adaptText(d));

            const isSelected = selectedServiceId === service.id;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                onClick={() => handleSelectService(service.id)}
                className={`group relative rounded-2xl overflow-hidden bg-white dark:bg-[#051c36] border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'border-cyan-500 dark:border-cyan-400 ring-2 ring-cyan-500/40 shadow-xl shadow-cyan-500/10'
                    : 'border-slate-200 dark:border-cyan-900/40 shadow-md hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:border-cyan-500/50'
                }`}
              >
                <div>
                  {/* Service Thumbnail from official assets */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                    <img
                      src={service.image}
                      alt={name}
                      style={{ objectPosition: service.imagePosition }}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

                    {/* Icon Badge */}
                    <div className="absolute top-3 right-3 p-2.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 text-cyan-400 shadow-md">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Dynamic City Tag */}
                    <span className="absolute bottom-3 start-3 px-2.5 py-1 rounded-md bg-cyan-500 text-slate-950 font-black text-xs shadow-sm">
                      {language === 'ar' ? currentCity.nameAr : currentCity.nameEn}
                    </span>
                  </div>

                  {/* Body Info */}
                  <div className="p-5 sm:p-6 text-start">
                    <h3 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-2">
                      {name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2 mb-4">
                      {description}
                    </p>

                    {/* Feature micro-bullets showing key inclusions */}
                    <ul className="space-y-1.5 mb-2">
                      {details.slice(0, 3).map((detail, idx) => (
                        <li
                          key={idx}
                          className="text-xs font-semibold text-slate-600 dark:text-cyan-200/80 flex items-center gap-1.5 justify-start"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                          <span className="truncate">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-5 sm:p-6 pt-0 mt-auto grid grid-cols-2 gap-2 border-t border-slate-100 dark:border-cyan-950/60 pt-4">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectService(service.id);
                    }}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 ${
                      isSelected
                        ? 'bg-cyan-600 text-white shadow-sm shadow-cyan-600/30'
                        : 'text-slate-700 dark:text-cyan-200 bg-slate-100 hover:bg-slate-200 dark:bg-[#072448] dark:hover:bg-[#092d59] border border-slate-200 dark:border-cyan-800/40'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{isSelected ? (language === 'ar' ? 'التفاصيل بالأسفل' : 'Details Below') : t('services.viewDetails')}</span>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onBookService(service.id);
                    }}
                    className="py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-sm shadow-cyan-500/20 transition-all flex items-center justify-center gap-1 cursor-pointer active:scale-95"
                  >
                    <span>{t('services.bookService')}</span>
                    <ArrowLeft className={`w-3.5 h-3.5 ${language === 'en' ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Inline Service Details Panel (No Modal, No Overlay, No X button) */}
        {selectedService && (
          <div
            id="inline-service-details"
            className="mt-12 sm:mt-16 scroll-mt-24 rounded-3xl bg-white dark:bg-[#041a33] border-2 border-cyan-500/40 shadow-xl p-6 sm:p-8 lg:p-10 transition-all text-start"
          >
            {/* Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-cyan-900/40">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-md">
                  {React.createElement(iconMap[selectedService.iconName] || Sparkles, { className: 'w-6 h-6' })}
                </div>
                <div>
                  <span className="text-xs font-black text-cyan-600 dark:text-cyan-400 uppercase tracking-wider block">
                    {language === 'ar' ? `${currentCity.nameAr} • تفاصيل الخدمة الكاملة` : `${currentCity.nameEn} • Full Service Details`}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-0.5">
                    {selectedName}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedServiceId(null)}
                  className="text-xs font-bold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  {language === 'ar' ? 'طي التفاصيل' : 'Collapse Details'}
                </button>
              </div>
            </div>

            {/* Grid Layout: Image + Description & Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 items-start">
              {/* Service Image */}
              <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-cyan-900/50 bg-slate-900 relative">
                <img
                  src={selectedService.image}
                  alt={selectedName}
                  style={{ objectPosition: selectedService.imagePosition }}
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 start-4">
                  <span className="inline-block px-3 py-1 rounded-lg bg-cyan-500 text-slate-950 text-xs font-black shadow-sm">
                    {language === 'ar' ? `خدمة معتمدة بـ${currentCity.nameAr}` : `Certified in ${currentCity.nameEn}`}
                  </span>
                </div>
              </div>

              {/* Description & List of Features */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-cyan-600 dark:text-cyan-400 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>{language === 'ar' ? 'نبذة تفصيلية عن الخدمة' : 'Service Overview'}</span>
                  </h4>
                  <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                    {selectedDesc}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-500" />
                    <span>{language === 'ar' ? 'ما تشمله الخدمة ومميزاتها:' : 'What This Service Includes:'}</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedDetails.map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-[#07203e] border border-slate-200/80 dark:border-cyan-900/40 text-sm font-semibold text-slate-800 dark:text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quality Guarantee Banner */}
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-900 dark:text-cyan-200 text-xs sm:text-sm font-bold flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-cyan-500 shrink-0" />
                  <span>
                    {language === 'ar'
                      ? `ضمان معتمد على جودة التنفيذ لجميع عملائنا الكرام في ${currentCity.nameAr}.`
                      : `Certified quality guarantee for all our clients in ${currentCity.nameEn}.`}
                  </span>
                </div>
              </div>
            </div>

            {/* Actions at the end of details - WhatsApp Button prominently at the end as requested */}
            <div className="pt-6 border-t border-slate-200 dark:border-cyan-900/40 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={`https://wa.me/966547161147?text=${encodeURIComponent(
                  language === 'ar'
                    ? `السلام عليكم ورحمة الله، أود الاستفسار وحجز خدمة (${selectedName}) في ${currentCity.nameAr} من شركة مسك كلين.`
                    : `Hello Mesk Clean team, I would like to inquire about and book (${selectedName}) in ${currentCity.nameEn}.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{language === 'ar' ? 'تواصل عبر واتساب لهذه الخدمة' : 'WhatsApp Inquiry for This Service'}</span>
              </a>

              <button
                type="button"
                onClick={() => onBookService(selectedService.id)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all active:scale-95 cursor-pointer"
              >
                <span>{t('services.bookService')}</span>
                <ArrowLeft className={`w-4 h-4 ${language === 'en' ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
