import React, { useState, useEffect } from 'react';
import { Star, Quote, CheckCircle2, Building, User, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getStoredTestimonials } from '../data/store';
import { TestimonialItem } from '../types';

export const TestimonialsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>([]);

  const loadTestimonials = () => {
    setTestimonials(getStoredTestimonials());
  };

  useEffect(() => {
    loadTestimonials();
    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.type === 'testimonials') {
        loadTestimonials();
      }
    };
    window.addEventListener('mesk_store_updated', handleUpdate);
    return () => window.removeEventListener('mesk_store_updated', handleUpdate);
  }, []);

  return (
    <section id="testimonials" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-bold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{t('testimonials.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
            {t('testimonials.title')}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-cyan-200/80">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item) => {
            const name = language === 'ar' ? item.name : item.nameEn;
            const service = language === 'ar' ? item.service : item.serviceEn;
            const comment = language === 'ar' ? item.comment : item.commentEn;
            const isCorporate = item.customerType === 'corporate';

            return (
              <div
                key={item.id}
                className="p-6 rounded-3xl bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 shadow-sm hover:shadow-xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top rating & quote */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-cyan-500/30 rotate-180" />
                  </div>

                  {/* Comment text */}
                  <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed mb-6 italic">
                    "{comment}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-slate-100 dark:border-cyan-900/30 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                        {name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1 mt-0.5 text-xs text-cyan-600 dark:text-cyan-400">
                      <span>{service}</span>
                      {item.district && (
                        <>
                          <span>•</span>
                          <span>{item.district}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Badge */}
                  <span
                    className={`px-2 py-1 rounded-md text-[10px] font-bold flex items-center gap-1 ${
                      isCorporate
                        ? 'bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/20'
                        : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/20'
                    }`}
                  >
                    {isCorporate ? <Building className="w-3 h-3" /> : <CheckCircle2 className="w-3 h-3" />}
                    <span>
                      {isCorporate
                        ? (language === 'ar' ? 'شركة' : 'Business')
                        : (language === 'ar' ? 'موثق' : 'Verified')}
                    </span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
