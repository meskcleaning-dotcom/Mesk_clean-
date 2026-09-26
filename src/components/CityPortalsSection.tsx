import React from 'react';
import { MapPin, Building2, ArrowLeft, ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CITIES_SEO_DATA } from '../data/citySeoData';

interface CityPortalsSectionProps {
  onOpenCityPage: (cityId: 'jeddah' | 'rabigh' | 'makkah') => void;
  onOpenBooking: (serviceId?: string, district?: string, cityKey?: string) => void;
}

export const CityPortalsSection: React.FC<CityPortalsSectionProps> = ({
  onOpenCityPage,
  onOpenBooking,
}) => {
  const { language } = useLanguage();
  const isAr = language === 'ar';

  const citiesList = [
    {
      id: 'jeddah' as const,
      data: CITIES_SEO_DATA.jeddah,
      badgeAr: 'الفرع الرئيسي • تغطية شاملة',
      badgeEn: 'Main Branch • All Districts',
      servicesListAr: [
        'تنظيف منازل وشقق وفلل بالبخار',
        'مكافحة حشرات ورش مبيدات معتمدة',
        'تركيب طارد حمام وشبك للنوافذ والمكيفات',
        'غسيل وصيانة مكيفات سبلت',
        'تنظيف وعزل خزانات المياه وتعقيمها'
      ],
      servicesListEn: [
        'Residential, apartment & villa steam cleaning',
        'Certified pest control & spraying',
        'Stainless bird spikes & pigeon netting',
        'Split AC deep pressure washing',
        'Water tank cleaning & insulation'
      ],
      gradient: 'from-cyan-500/10 via-blue-500/5 to-transparent'
    },
    {
      id: 'makkah' as const,
      data: CITIES_SEO_DATA.makkah,
      badgeAr: 'العاصمة المقدسة • خدمة 24/7',
      badgeEn: 'Holy City • 24/7 Service',
      servicesListAr: [
        'تنظيف منازل وفنادق وشقق مفروشة',
        'مكافحة حشرات ورش مبيدات بدون رائحة',
        'تركيب شبك وطارد حمام للمباني والمكيفات',
        'غسيل مكيفات سبلت بأحدث المضخات',
        'غسيل وتعقيم وعزل خزانات مياه الشرب'
      ],
      servicesListEn: [
        'Residential & hospitality deep cleaning',
        'Odorless certified pest extermination',
        'Bird deterrent spikes & window netting',
        'Split air conditioner pressure wash',
        'Drinking water tank sanitation & sealing'
      ],
      gradient: 'from-amber-500/10 via-orange-500/5 to-transparent'
    },
    {
      id: 'rabigh' as const,
      data: CITIES_SEO_DATA.rabigh,
      badgeAr: 'محافظة رابغ والمراكز المجاورة',
      badgeEn: 'Rabigh & Coastal Outskirts',
      servicesListAr: [
        'تنظيف فلل وشقق ومجمعات سكنية',
        'مكافحة صراصير وبق وفئران مع الضمان',
        'طارد حمام ستانلس ستيل مقاوم للرطوبة',
        'تنظيف مكيفات سبلت وتحسين التبريد',
        'عزل خزانات مائي وإيبوكسي معتمد'
      ],
      servicesListEn: [
        'Villas, apartments & compound cleaning',
        'Cockroach, bedbug & rodent control',
        'Marine-grade rust-proof bird deterrent',
        'Split AC cleaning & airflow boost',
        'Waterproofing & epoxy tank insulation'
      ],
      gradient: 'from-blue-500/10 via-indigo-500/5 to-transparent'
    }
  ];

  return (
    <section id="cities" className="py-16 sm:py-24 bg-slate-100/70 dark:bg-[#020e1e] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-bold mb-3">
            <Building2 className="w-4 h-4" />
            <span>{isAr ? 'فروعنا وتغطيتنا الجغرافية' : 'Our Branches & Coverage'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            {isAr ? 'خدمات مسك كلين في مدن المنطقة الغربية' : 'Mesk Clean Services by City'}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {isAr
              ? 'اختر مدينتك للاطلاع على كافة الخدمات المتوفرة، العروض الحصرية، ودليل الأسعار مع تغطية فورية لجميع الأحياء.'
              : 'Select your city to explore tailored cleaning, pest control, and tank insulation services with instant on-site response.'}
          </p>
        </div>

        {/* 3 City Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {citiesList.map(({ id, data, badgeAr, badgeEn, servicesListAr, servicesListEn, gradient }) => (
            <div
              key={id}
              className={`rounded-3xl bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden group bg-gradient-to-b ${gradient}`}
            >
              <div className="space-y-4">
                {/* City badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 border border-cyan-500/20">
                    {isAr ? badgeAr : badgeEn}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>4.9</span>
                  </div>
                </div>

                {/* City Name Header */}
                <div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-cyan-500" />
                    <span>{isAr ? `خدماتنا في ${data.nameAr}` : `Our Services in ${data.nameEn}`}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {isAr ? data.introLeadAr : data.introLeadEn}
                  </p>
                </div>

                {/* Natural clean services list */}
                <div className="pt-3 border-t border-slate-100 dark:border-cyan-900/30">
                  <h4 className="text-xs font-bold text-slate-700 dark:text-cyan-300 mb-2">
                    {isAr ? `أبرز خدماتنا المتاحة في ${data.nameAr}:` : `Available Services in ${data.nameEn}:`}
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {(isAr ? servicesListAr : servicesListEn).map((srv, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                        <span>{srv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-cyan-900/30 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => onOpenCityPage(id)}
                  className="w-full py-3 px-4 rounded-xl text-sm font-bold bg-cyan-600 hover:bg-cyan-500 text-white shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{isAr ? `تصفح صفحة ${data.nameAr} بالكامل` : `View Full ${data.nameEn} Page`}</span>
                  {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>

                <button
                  type="button"
                  onClick={() => onOpenBooking('homes', undefined, id)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#082952] transition-colors cursor-pointer"
                >
                  {isAr ? `طلب حجز مباشر في ${data.nameAr}` : `Instant Booking in ${data.nameEn}`}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
