import React from 'react';
import { Sparkles, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HowItWorksProps {
  onStartBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartBooking }) => {
  const { language, t } = useLanguage();

  const steps = [
    {
      number: '1',
      title: language === 'ar' ? 'اختر الخدمة ونوع المكان' : 'Select Service & Space',
      desc: language === 'ar'
        ? 'حدد الخدمة المطلوبة من بين خدماتنا الـ 11 المتخصصة واختر طبيعة موقعك (منزل، شقة، فيلا، مكتب).'
        : 'Choose from our 11 dedicated services and select whether it is an apartment, villa, or office.',
      icon: Sparkles,
    },
    {
      number: '2',
      title: language === 'ar' ? 'أدخل حيّك وموعدك المناسب' : 'Pick District & Schedule',
      desc: language === 'ar'
        ? 'حدد حيك في مدينة جدة واختر التاريخ والوقت المفضل لك لجدولة زيارة فريق العمل بكل مرونة.'
        : 'Select your district in Jeddah and choose a convenient appointment date and time.',
      icon: MapPin,
    },
    {
      number: '3',
      title: language === 'ar' ? 'راجع التفاصيل وأرسلها عبر واتساب' : 'Review & Confirm on WhatsApp',
      desc: language === 'ar'
        ? 'تأكد من بياناتك وأرسل طلبك بنقرة واحدة عبر واتساب ليقوم ممثل خدمة العملاء بتنسيق الموعد فوراً.'
        : 'Review your details and submit directly to our dispatch team for instant confirmation.',
      icon: Send,
    },
  ];

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden bg-slate-50 dark:bg-[#021429]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-bold mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{t('howItWorks.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-3">
            {t('howItWorks.title')}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-cyan-200/80">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#061d38] border border-slate-200 dark:border-cyan-900/40 shadow-sm flex flex-col text-start items-start group hover:border-cyan-500/40 transition-all"
              >
                {/* Step indicator */}
                <div className="flex items-center justify-between w-full mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center font-black text-lg shadow-md shadow-cyan-500/20">
                    {step.number}
                  </div>
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="text-center mt-10">
          <button
            onClick={onStartBooking}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>{t('howItWorks.cta')}</span>
            <span className={`text-lg ${language === 'en' ? 'rotate-180' : ''}`}>←</span>
          </button>
        </div>
      </div>
    </section>
  );
};
