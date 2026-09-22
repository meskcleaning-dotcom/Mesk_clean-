import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Instagram, Facebook, Share2 } from 'lucide-react';
import { getStoredCompanySettings } from '../data/store';
import { CompanySettings } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [company, setCompany] = useState<CompanySettings>(getStoredCompanySettings());

  useEffect(() => {
    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.type === 'companySettings') {
        setCompany(getStoredCompanySettings());
      }
    };
    window.addEventListener('mesk_store_updated', handleUpdate);
    return () => window.removeEventListener('mesk_store_updated', handleUpdate);
  }, []);

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-bold mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>{t('contact.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
            {t('contact.title')}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-cyan-200/80 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Primary Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1: Phone 1 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 shadow-sm text-start flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-slate-500 dark:text-cyan-300/70">
                {language === 'ar' ? 'رقم الاتصال الرئيسي' : 'Primary Phone'}
              </span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white my-1" dir="ltr">
                {company.phone1}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {language === 'ar' ? 'متاح للاتصال والاستفسار المباشر' : 'Available for direct calls & quotes'}
              </p>
            </div>

            <div className="mt-6 flex gap-2">
              <a
                href={`tel:+966${company.phone1.replace(/^0+/, '')}`}
                className="flex-1 py-2 px-3 rounded-xl text-xs font-bold text-center text-white bg-cyan-600 hover:bg-cyan-500 transition-colors"
              >
                {t('contact.callNow')}
              </a>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 px-3 rounded-xl text-xs font-bold text-center text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors"
              >
                {t('contact.whatsappDirect')}
              </a>
            </div>
          </div>

          {/* Card 2: Phone 2 */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 shadow-sm text-start flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-slate-500 dark:text-cyan-300/70">
                {language === 'ar' ? 'رقم الاتصال الإضافي' : 'Secondary Phone'}
              </span>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white my-1" dir="ltr">
                {company.phone2}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {language === 'ar' ? 'متاح للمكالمات وتنسيق المواعيد' : 'Available for booking coordination'}
              </p>
            </div>

            <div className="mt-6 flex gap-2">
              <a
                href={`tel:+966${company.phone2.replace(/^0+/, '')}`}
                className="flex-1 py-2 px-3 rounded-xl text-xs font-bold text-center text-white bg-cyan-600 hover:bg-cyan-500 transition-colors"
              >
                {t('contact.callNow')}
              </a>
              <a
                href={`https://wa.me/${company.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 px-3 rounded-xl text-xs font-bold text-center text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors"
              >
                {t('contact.whatsappDirect')}
              </a>
            </div>
          </div>

          {/* Card 3: Location */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 shadow-sm text-start flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-slate-500 dark:text-cyan-300/70">
                {language === 'ar' ? 'نطاق الخدمة والتغطية' : 'Service Coverage'}
              </span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white my-1">
                {language === 'ar' ? company.city : company.cityEn}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {language === 'ar' ? 'نصلك في شمال ووسط وجنوب وشرق جدة' : 'Covering North, Central, South & East Jeddah'}
              </p>
            </div>

            <div className="mt-6">
              <span className="inline-block w-full py-2 px-3 rounded-xl text-xs font-bold text-center text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border border-cyan-500/30">
                {language === 'ar' ? 'تغطية شاملة لجميع الأحياء' : 'Complete Coverage Across Jeddah'}
              </span>
            </div>
          </div>

          {/* Card 4: Working hours */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 shadow-sm text-start flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-slate-500 dark:text-cyan-300/70">
                {language === 'ar' ? 'أوقات العمل واستقبال الطلبات' : 'Working Hours'}
              </span>
              <h3 className="text-xl font-black text-slate-900 dark:text-white my-1">
                {language === 'ar' ? 'على مدار الساعة (24/7)' : '24/7 Round the Clock'}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {language === 'ar' ? company.workingHours : company.workingHoursEn}
              </p>
            </div>

            <div className="mt-6">
              <span className="inline-block w-full py-2 px-3 rounded-xl text-xs font-bold text-center text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
                {language === 'ar' ? 'الرد الفوري عبر واتساب' : 'Instant Reply on WhatsApp'}
              </span>
            </div>
          </div>
        </div>

        {/* Social Media Links Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#041933] border border-slate-200 dark:border-cyan-900/40 text-center">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            {language === 'ar' ? 'تابع حساباتنا الرسمية على منصات التواصل' : 'Follow Our Official Social Media Channels'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-cyan-200/70 mb-6">
            {language === 'ar' ? 'شاهد أعمالنا وتجاربنا اليومية في تنظيف المنازل والفلل بجدة' : 'See our daily residential & commercial cleaning results in Jeddah'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Instagram */}
            <a
              href={company.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-pink-500/50 hover:text-pink-500 transition-colors text-xs font-bold"
            >
              <Instagram className="w-4 h-4 text-pink-500" />
              <span>Instagram</span>
            </a>

            {/* Facebook */}
            <a
              href={company.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:text-blue-500 transition-colors text-xs font-bold"
            >
              <Facebook className="w-4 h-4 text-blue-500" />
              <span>Facebook</span>
            </a>

            {/* TikTok */}
            <a
              href={company.tiktok}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:text-cyan-500 transition-colors text-xs font-bold"
            >
              <Share2 className="w-4 h-4 text-cyan-400" />
              <span>TikTok</span>
            </a>

            {/* Pinterest */}
            <a
              href={company.pinterest}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-red-500/50 hover:text-red-500 transition-colors text-xs font-bold"
            >
              <span className="font-serif font-black text-red-500 text-sm">P</span>
              <span>Pinterest</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
