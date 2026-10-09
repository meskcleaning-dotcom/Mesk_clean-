import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Phone, Building2, Search, CheckCircle2, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCityRoute, CityId } from '../context/CityRouteContext';
import { COMPANY_INFO } from '../data/companyInfo';
import { CITIES_DATA } from '../data/citiesDistricts';
import { trackWhatsAppClick } from '../utils/analytics';

export const GoogleMapsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const { currentCityId, navigateToCity } = useCityRoute();
  const [districtQuery, setDistrictQuery] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [showAllDistricts, setShowAllDistricts] = useState(false);

  const activeCity = CITIES_DATA[currentCityId] || CITIES_DATA.jeddah;
  const districts = language === 'ar' ? activeCity.districtsAr : activeCity.districtsEn;

  const handleCitySelect = (cityId: CityId) => {
    setSelectedDistrict(null);
    setDistrictQuery('');
    navigateToCity(cityId, 'location');
  };

  const filteredDistricts = districts.filter(d => 
    d.toLowerCase().includes(districtQuery.trim().toLowerCase())
  );

  const displayedDistricts = showAllDistricts || districtQuery.trim() !== ''
    ? filteredDistricts 
    : filteredDistricts.slice(0, 16);

  const getDistrictWhatsAppUrl = (districtName: string) => {
    const text = encodeURIComponent(
      `السلام عليكم ورحمة الله، أرغب بالاستفسار وحجز خدمة تنظيف في (${districtName}) - ${activeCity.nameAr}. يرجى تأكيد المواعيد والتفاصيل المتاحة.`
    );
    return `https://wa.me/966547161147?text=${text}`;
  };

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
            {language === 'ar' ? `تغطية شاملة في ${activeCity.nameAr} وكافة مناطق الغربية` : `Comprehensive Coverage in ${activeCity.nameEn}`}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-cyan-200/80 mb-6">
            {language === 'ar'
              ? `أسطول سيارات وفنيين مجهزين بأحدث أجهزة التنظيف وعزل الخزانات ومكافحة الآفات نصلكم في ${activeCity.nameAr} أينما كنتم فوراً.`
              : `Dedicated mobile crews and high-grade equipment delivering fast on-site services across ${activeCity.nameEn}.`}
          </p>

          {/* Interactive City Tabs with Direct Route Navigation */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 shadow-sm gap-1.5 flex-wrap justify-center">
            {Object.values(CITIES_DATA).map((city) => {
              const isActive = currentCityId === city.id;
              return (
                <a
                  key={city.id}
                  href={`/${city.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleCitySelect(city.id as CityId);
                  }}
                  className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#082952]'
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  <span>{language === 'ar' ? city.nameAr : city.nameEn}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Map Container and Info Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Card (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40 shadow-sm">
            <div className="space-y-5">
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
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-[#03152a] border border-slate-200 dark:border-cyan-900/30">
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

              {/* District Filter & Interactive Selector */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="text-xs font-bold text-slate-700 dark:text-slate-200">
                    {language === 'ar' ? `الأحياء المشمولة في ${activeCity.nameAr} (${districts.length} حياً ومخططاً):` : `Covered Districts in ${activeCity.nameEn}:`}
                  </h4>
                  {districts.length > 16 && (
                    <button
                      type="button"
                      onClick={() => setShowAllDistricts(!showAllDistricts)}
                      className="text-xs text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-0.5 font-bold cursor-pointer"
                    >
                      <span>{showAllDistricts ? (language === 'ar' ? 'عرض أقل' : 'Show less') : (language === 'ar' ? 'عرض الكل' : 'View all')}</span>
                      {showAllDistricts ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                    </button>
                  )}
                </div>

                {/* District search input */}
                <div className="relative mb-2.5">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute start-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={districtQuery}
                    onChange={(e) => setDistrictQuery(e.target.value)}
                    placeholder={language === 'ar' ? 'ابحث عن حيك (مثال: أبحر، الحمدانية، الصفا)...' : 'Search your district...'}
                    className="w-full text-xs ps-8 pe-3 py-2 rounded-xl bg-slate-50 dark:bg-[#03152a] border border-slate-200 dark:border-cyan-900/40 text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                {/* Selected District Highlight */}
                {selectedDistrict && (
                  <div className="p-3 mb-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/60 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                      <div className="text-xs">
                        <span className="font-bold text-slate-900 dark:text-white">{selectedDistrict}: </span>
                        <span className="text-slate-600 dark:text-cyan-200">
                          {language === 'ar' ? 'جاهزون لخدمتكم مع ضمان معتمد' : 'Ready for service with guarantee'}
                        </span>
                      </div>
                    </div>
                    <a
                      href={getDistrictWhatsAppUrl(selectedDistrict)}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => trackWhatsAppClick('District_Selector', selectedDistrict)}
                      className="px-2.5 py-1 text-xs font-bold rounded-lg bg-emerald-600 text-white hover:bg-emerald-500 flex items-center gap-1 shrink-0"
                    >
                      <MessageCircle className="w-3 h-3" />
                      <span>{language === 'ar' ? 'حجز فوري' : 'Book'}</span>
                    </a>
                  </div>
                )}

                {/* Districts tags */}
                <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
                  {displayedDistricts.map((district, idx) => {
                    const isSelected = selectedDistrict === district;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedDistrict(isSelected ? null : district)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-cyan-600 text-white border border-cyan-500 shadow-sm'
                            : 'bg-slate-100 dark:bg-[#072448] text-slate-700 dark:text-cyan-200 border border-slate-200 dark:border-cyan-800/40 hover:border-cyan-400'
                        }`}
                      >
                        {district}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-5 border-t border-slate-100 dark:border-cyan-900/30 flex flex-col sm:flex-row gap-2.5">
              <a
                href={COMPANY_INFO.phone1.waUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackWhatsAppClick('Location_Section')}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{language === 'ar' ? 'احجز عبر الواتساب' : 'Book via WhatsApp'}</span>
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

        {/* Local SEO Informational Context Block */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#051c36] border border-slate-200 dark:border-cyan-900/40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-start">
            <div>
              <h4 className="text-sm font-black text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                <span>{language === 'ar' ? `سرعة الوصول في أحياء ${activeCity.nameAr}` : `Fast Arrival in ${activeCity.nameEn}`}</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? `تتمركز سيارات وفرق مسك كلين في محاور رئيسية بـ${activeCity.nameAr} لضمان سرعة الوصول إلى موقعك خلال وقت قياسي لخدمات تنظيف الفلل والشقق والخزانات والمكيفات.`
                  : `Mobile crews stationed strategically across key districts to ensure rapid dispatch for home cleaning and emergency services.`}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-black text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                <span>{language === 'ar' ? 'معايير سلامة وجودة عالية' : 'Safety & High Quality Standards'}</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'نحرص على تطبيق أعلى معايير النظافة والتعقيم والسلامة للحفاظ على صحة وراحة جميع أفراد الأسرة في منزلك أو منشأتك.'
                  : 'We maintain strict cleanliness, disinfection, and safety protocols for the well-being of your family and premises.'}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-black text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                <span>{language === 'ar' ? 'معاينة دقيقة والتزام بالموعد' : 'Accurate Inspection & Timely Service'}</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'معاينة واضحة وتحديد دقيق لاحتياجات المكان قبل البدء بالعمل للشقق والفلل والعمائر والشركات في جدة ومكة ورابغ وخليص.'
                  : 'Clear inspection and precise assessment tailored to apartments, villas, and commercial facilities across all service zones.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
