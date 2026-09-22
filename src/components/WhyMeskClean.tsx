import React from 'react';
import { Users, Wrench, ShieldCheck, Clock, ThumbsUp, Award, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhyMeskClean: React.FC = () => {
  const { language, t } = useLanguage();

  const whyReasons = [
    {
      title: language === 'ar' ? 'فريق عمل مدرب ومحترف' : 'Trained & Professional Crew',
      desc: language === 'ar' 
        ? 'طاقم عمل يتمتع بالخبرة العالية والتدريب المستمر على أحدث تقنيات وأساليب التنظيف الدقيق للأثاث والمباني.'
        : 'Highly skilled staff continually trained in deep cleaning and delicate furniture care.',
      icon: Users,
    },
    {
      title: language === 'ar' ? 'معدات حديثة ومتطورة' : 'Advanced Equipment',
      desc: language === 'ar'
        ? 'نستخدم أجهزة بخار متقدمة، مكائن جلي وتنظيف عميق، ومضخات ضغط متخصصة تضمن أفضل نتائج النظافة.'
        : 'High-grade steam cleaners, floor scrubbing machines, and pressure washers.',
      icon: Wrench,
    },
    {
      title: language === 'ar' ? 'مواد تنظيف آمنة ومعتمدة' : 'Safe & Certified Chemicals',
      desc: language === 'ar'
        ? 'نعتمد منظفات ومطهرات صديقة للبيئة وصحية لجميع أفراد الأسرة، خالية من الروائح المزعجة ومصرح بها.'
        : 'Eco-friendly and family-safe disinfectants approved for residential hygiene.',
      icon: ShieldCheck,
    },
    {
      title: language === 'ar' ? 'الالتزام بالمواعيد' : 'Punctual & Reliable',
      desc: language === 'ar'
        ? 'نقدر وقت عملائنا الثمين ونحرص على التواجد في الموعد المحدد بدقة وسرعة في إنجاز المهام المطلوبة.'
        : 'We respect your schedule with accurate arrival times and swift execution.',
      icon: Clock,
    },
    {
      title: language === 'ar' ? 'ضمان رضا العميل' : '100% Satisfaction Guarantee',
      desc: language === 'ar'
        ? 'معاييرنا تضع رضاك التام في المقام الأول؛ نراجع كل تفصيلة حتى نضمن حصولك على النتيجة المرجوة تماماً.'
        : 'Customer delight is our core standard; we inspect every detail before handoff.',
      icon: ThumbsUp,
    },
    {
      title: language === 'ar' ? 'جودة عالية' : 'Premium Quality',
      desc: language === 'ar'
        ? 'دقة فائقة في كل ركن ومساحة، بدءاً من المعاينة الأولية وحتى التسليم النهائي بمواصفات تليق ببيتك.'
        : 'Impeccable thoroughness across every corner for an elevated living environment.',
      icon: Award,
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('whyUs.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            {t('whyUs.title')}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-cyan-200/80 max-w-2xl mx-auto leading-relaxed">
            {t('whyUs.subtitle')}
          </p>
        </div>

        {/* 6 Approved Reasons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyReasons.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col text-start group"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
