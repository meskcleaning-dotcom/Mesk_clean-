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
  Eye,
  Bird
} from 'lucide-react';
import { getStoredServices } from '../data/store';
import { ServiceItem } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';
import { useLanguage } from '../context/LanguageContext';

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
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

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

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            {t('services.title')}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-cyan-200/80 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;
            const name = language === 'ar' ? service.name : (service.nameEn || service.name);
            const description = language === 'ar' ? service.description : (service.descriptionEn || service.description);
            const details = language === 'ar' ? service.details : (service.detailsEn || service.details);

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative rounded-2xl overflow-hidden bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 shadow-md hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between"
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

                    {/* City Tag */}
                    <span className="absolute bottom-3 start-3 px-2.5 py-1 rounded-md bg-cyan-500 text-slate-950 font-black text-xs">
                      {language === 'ar' ? 'جدة' : 'Jeddah'}
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

                    {/* Feature micro-bullets */}
                    <ul className="space-y-1.5 mb-2">
                      {details.slice(0, 2).map((detail, idx) => (
                        <li
                          key={idx}
                          className="text-xs font-semibold text-slate-500 dark:text-cyan-200/70 flex items-center gap-1.5 justify-start"
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
                    onClick={() => setActiveModalService(service)}
                    className="py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold text-slate-700 dark:text-cyan-200 bg-slate-100 hover:bg-slate-200 dark:bg-[#072448] dark:hover:bg-[#092d59] border border-slate-200 dark:border-cyan-800/40 transition-colors flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <Eye className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{t('services.viewDetails')}</span>
                  </button>

                  <button
                    onClick={() => onBookService(service.id)}
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
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onBook={(id) => {
          setActiveModalService(null);
          onBookService(id);
        }}
      />
    </section>
  );
};
