import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Phone, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/companyInfo';
import { CITIES_DATA } from '../data/citiesDistricts';

export const GoogleMapsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeCityId, setActiveCityId] = useState<string>('jeddah');

  const activeCity = CITIES_DATA[activeCityId] || CITIES_DATA.jeddah;
  const districts = language === 'ar' ? activeCity.districtsAr : activeCity.districtsEn;

  return (
    <section id="location" className="py-16 sm:py-24 relative overflow-hidden bg-slate-50 dark:bg-[#021124]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-bold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t('maps.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
            {language === 'ar' ? 'تغطية شاملة لمدن: جدة، مكة المكرمة، ورابغ' : 'Full Coverage: Jeddah, Makkah & Rabigh'}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-cyan-200/80 mb-6">
            {language === 'ar'
              ? 'أسطول سيارات وفنيين مجهزين بأحدث أجهزة التنظيف وعزل الخزانات ومكافحة الآفات نصلكم أينما كنتم.'
              : 'Dedicated mobile crews and high-grade equipment delivering fast on-site services across the Western Region.'}
          </p>

          {/* Interactive City Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 shadow-sm gap-1.5">
            {Object.values(CITIES_DATA).map((city) => {
              const isActive = activeCityId === city.id;
              return (
                <button
                  key={city.id}
                  type="button"
                  onClick={() => setActiveCityId(city.id)}
                  className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#082952]'
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  <span>{language === 'ar' ? city.nameAr : city.nameEn}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Map Container and Info Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Card (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 shadow-sm">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                  {language === 'ar' ? `نطاق الخدمة في ${activeCity.nameAr}` : `Service Zone: ${activeCity.nameEn}`}
                </span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                  {language === 'ar' ? `${activeCity.nameAr}، المملكة العربية السعودية` : `${activeCity.nameEn}, Saudi Arabia`}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {language === 'ar' ? activeCity.taglineAr : activeCity.taglineEn}
                </p>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-[#03152a] border border-slate-200 dark:border-cyan-900/30">
                <Clock className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-500 dark:text-cyan-300/70">
                    {language === 'ar' ? 'ساعات العمل واستقبال الحجوزات' : 'Working Hours'}
                  </h4>
                  <p className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                    {language === 'ar' ? 'على مدار الساعة: 24/7 طوال أيام الأسبوع' : '24/7 Round the Clock - All Days'}
                  </p>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>{language === 'ar' ? 'متاحون لخدمتكم 24/7 بدون توقف' : 'Available 24/7 without interruption'}</span>
                  </p>
                </div>
              </div>

              {/* Districts coverage tags */}
              <div>
                <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">
                  {language === 'ar' ? `أبرز الأحياء المشمولة في ${activeCity.nameAr}:` : `Key Serviced Districts in ${activeCity.nameEn}:`}
                </h4>
                <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto pr-1">
                  {districts.slice(0, 12).map((district, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-[#072448] text-slate-700 dark:text-cyan-200 border border-slate-200 dark:border-cyan-800/40"
                    >
                      {district}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 border-t border-slate-100 dark:border-cyan-900/30 flex flex-col sm:flex-row gap-3">
              <a
                href={activeCity.directMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-cyan-600 hover:bg-cyan-500 transition-colors shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>{language === 'ar' ? `موقعنا في ${activeCity.nameAr}` : `Directions in ${activeCity.nameEn}`}</span>
              </a>

              <a
                href={COMPANY_INFO.phone1.tel}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-800 dark:text-white bg-slate-100 dark:bg-[#082952] hover:bg-slate-200 dark:hover:bg-[#0c366a] transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-500" />
                <span>{COMPANY_INFO.phone1.display}</span>
              </a>
            </div>
          </div>

          {/* Interactive Embed Map (7 cols on lg) */}
          <div className="lg:col-span-7 h-96 lg:h-auto min-h-[380px] rounded-3xl overflow-hidden border border-slate-200 dark:border-cyan-900/40 shadow-lg relative bg-slate-200 dark:bg-[#041933]">
            <iframe
              key={activeCity.id}
              title={`Mesk Clean Google Maps Location - ${activeCity.nameEn}`}
              src={activeCity.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[15%] contrast-[105%]"
            ></iframe>

            {/* Floating marker overlay label */}
            <div className="absolute top-4 start-4 bg-white/95 dark:bg-[#051c36]/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-md border border-slate-200 dark:border-cyan-800/40 flex items-center gap-2 pointer-events-none">
              <div className="w-3 h-3 rounded-full bg-cyan-500 animate-ping"></div>
              <span className="text-xs font-black text-slate-900 dark:text-white">
                {language === 'ar' ? `خدمات مسك كلين في ${activeCity.nameAr}` : `Mesk Clean ${activeCity.nameEn} Zone`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

