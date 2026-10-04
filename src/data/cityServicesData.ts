import { CityId } from '../context/CityRouteContext';
import { CityServicePageData } from './cityServicesContent';
import { CLEANING_SERVICES_MAP } from './cityContent/cleaningServices';
import { VILLAS_SERVICES_MAP } from './cityContent/villasContent';
import { BIRD_NETTING_SERVICES_MAP } from './cityContent/birdNettingContent';
import { OFFICES_SERVICES_MAP } from './cityContent/officesContent';
import { FABRIC_SERVICES_MAP } from './cityContent/fabricContent';
import { RODENTS_SERVICES_MAP } from './cityContent/rodentsContent';
import { KITCHENS_SERVICES_MAP } from './cityContent/kitchensContent';
import { AC_SERVICES_MAP } from './cityContent/acContent';
import { TANKS_SERVICES_MAP } from './cityContent/tanksContent';
import { PEST_CONTROL_SERVICES_MAP } from './cityContent/pestControlContent';

// Helper to provide detailed content for each service and city
export const getCityServiceData = (serviceId: string, cityId: CityId): CityServicePageData => {
  // Check dedicated city content maps first for 100% unique city-specific 800+ word content
  if (serviceId === 'homes' && CLEANING_SERVICES_MAP.homes?.[cityId]) {
    return CLEANING_SERVICES_MAP.homes[cityId];
  }
  if (serviceId === 'villas' && VILLAS_SERVICES_MAP[cityId]) {
    return VILLAS_SERVICES_MAP[cityId];
  }
  if (serviceId === 'bird-netting' && BIRD_NETTING_SERVICES_MAP[cityId]) {
    return BIRD_NETTING_SERVICES_MAP[cityId];
  }
  if (serviceId === 'offices' && OFFICES_SERVICES_MAP[cityId]) {
    return OFFICES_SERVICES_MAP[cityId];
  }
  if (serviceId === 'sofas' && FABRIC_SERVICES_MAP.sofas?.[cityId]) {
    return FABRIC_SERVICES_MAP.sofas[cityId];
  }
  if (serviceId === 'carpets' && FABRIC_SERVICES_MAP.carpets?.[cityId]) {
    return FABRIC_SERVICES_MAP.carpets[cityId];
  }
  if ((serviceId === 'rodents' || serviceId === 'rodents-reptiles') && RODENTS_SERVICES_MAP[cityId]) {
    return RODENTS_SERVICES_MAP[cityId];
  }
  if (serviceId === 'kitchens' && KITCHENS_SERVICES_MAP[cityId]) {
    return KITCHENS_SERVICES_MAP[cityId];
  }
  if (serviceId === 'ac' && AC_SERVICES_MAP[cityId]) {
    return AC_SERVICES_MAP[cityId];
  }
  if (serviceId === 'tanks' && TANKS_SERVICES_MAP[cityId]) {
    return TANKS_SERVICES_MAP[cityId];
  }
  if ((serviceId === 'pest' || serviceId === 'pest-control') && PEST_CONTROL_SERVICES_MAP[cityId]) {
    return PEST_CONTROL_SERVICES_MAP[cityId];
  }

  // City-specific context dictionaries for fallback dynamic generation
  const cityDataConfig = {
    jeddah: {
      nameAr: 'جدة',
      nameEn: 'Jeddah',
      titleSuffixAr: 'بجدة',
      titleSuffixEn: 'in Jeddah',
      climateContextAr: 'المناخ الساحلي الرطب، ورذاذ الملح البحري المتطاير، والرياح المحملة بالغبار والأتربة',
      climateContextEn: 'the humid coastal Red Sea environment, airborne marine salts, and fine dust breezes',
      districts: [
        'أحياء شمال جدة: الروضة، الشاطئ، المرجان، البساتين، المحمدية، أبحر الشمالية، أبحر الجنوبية، النعيم، النهضة، البغدادية.',
        'أحياء وسط جدة: الحمراء، الزهراء، السلامة، الأندلس، مشرفة، العزيزية، الرحاب، الرويس، الفيصلية.',
        'أحياء شرق وجنوب جدة: الصفا، المروة، السامر، الحمدانية، الفلاح، المنار، السليمانية، النسيم، الروابي.'
      ],
      districtsEn: [
        'North Jeddah: Al-Rawdah, Al-Shati, Al-Murjan, Al-Basateen, Al-Mohammediyah, North & South Obhur, Al-Naeem, Al-Nahda.',
        'Central Jeddah: Al-Hamra, Al-Zahra, Al-Salamah, Al-Andalus, Mushrefah, Al-Aziziyah, Al-Rehab, Al-Ruwais, Al-Faisaliyah.',
        'East & South Jeddah: Al-Safa, Al-Marwah, Al-Samer, Al-Hamdaniyah, Al-Falah, Al-Manar, Al-Sulaimaniyah, Al-Naseem.'
      ],
      localChallengesAr: 'ارتفاع الرطوبة البحرية التي تتفاعل مع الأتربة لتشكل طبقات لزجة على الأسطح والجدران، بالإضافة إلى المياه الجوفية وتأثير الملوحة على النوافذ والخزانات ومجاري التكييف',
      localChallengesEn: 'elevated maritime humidity interacting with dust particulates to form sticky layers on architectural glass, and coastal saline corrosion impacting ACs and water systems'
    },
    makkah: {
      nameAr: 'مكة المكرمة',
      nameEn: 'Makkah',
      titleSuffixAr: 'بمكة المكرمة',
      titleSuffixEn: 'in Holy Makkah',
      climateContextAr: 'الطبيعة الجبلية الصخرية، ودرجات الحرارة المرتفعة، وكثافة الإقبال والضيافة في مواسم الحج والعمرة والزيارات',
      climateContextEn: 'rugged mountainous rock topography, high summer temperatures, and peak seasonal pilgrim hospitality demands',
      districts: [
        'أحياء جنوب وشرق مكة: العوالي، بطحاء قريش، الشوقية، الكعكية، النسيم، العزيزية، الهجرة، وادي جليل.',
        'أحياء وسط وغرب مكة: الرصيفة، الزاهر، الخالدية، النزهة، الزايدي (الحمراء)، الإسكان، التيسير، الهنداوية.',
        'أحياء شمال مكة: التنعيم، العمرة، جبل النور، الشرائع، مخططات ولي العهد، الفيحاء، البحيرات.'
      ],
      districtsEn: [
        'South & East Makkah: Al-Awali, Batha Quraish, Al-Shawqiyyah, Al-Kakiyyah, Al-Naseem, Al-Aziziyah, Al-Hijrah.',
        'Central & West Makkah: Al-Rusaifah, Al-Zahir, Al-Khalidiyah, Al-Nuzha, Al-Zaydi, Al-Iskan, Al-Tayseer, Al-Hindawiyah.',
        'North Makkah: Al-Tan’eem, Al-Umrah, Jabal Al-Nour, Al-Sharaye, Wali Al-Ahad schemes, Al-Fayhaa, Al-Buhairat.'
      ],
      localChallengesAr: 'تطاير الأتربة الجبلية الجافة الدقيقة الصاعدة من السفوح الصخرية، مع الحاجة الدائمة لتعقيم المساكن والمجالس قبل وبعد استقبال ضيوف الرحمن وأفراد العائلة',
      localChallengesEn: 'fine abrasive rock dust blowing from rocky ridges, and rigorous sanitization requirements for family residences and guest accommodations during pilgrimage seasons'
    },
    rabigh: {
      nameAr: 'رابغ',
      nameEn: 'Rabigh',
      titleSuffixAr: 'برابغ',
      titleSuffixEn: 'in Rabigh',
      climateContextAr: 'الرياح الساحلية المفتوحة، وتطاير الرمال الناعمة، وقرب المناطق السكنية من المنشآت الصناعية والموانئ ومحطات الطاقة',
      climateContextEn: 'open coastal wind corridors, fine coastal sand drift, and residential proximity to industrial complexes and King Abdullah Port',
      districts: [
        'أحياء وسط رابغ: المرجانية، النزيلة، الصفا، النعيم، الصمد، الفريسنية، السوق القديم.',
        'المخططات السكنية الحديثة: حي النخيل، حي المرجان، حي الفيحاء، حي الورود، مخطط النزهة.',
        'المناطق السكنية والصناعية المجاورة: مجمعات سكن موظفي بترورابغ، ومحيط مدينة الملك عبدالله الاقتصادية (KAEC) وميناء الملك عبدالله.'
      ],
      districtsEn: [
        'Central Rabigh: Al-Merghaniya, Al-Nazilah, Al-Safa, Al-Naeem, Al-Samad, Al-Furaissaniyah, Old Souk.',
        'Modern Neighborhoods: Al-Nakheel, Al-Murjan, Al-Fayhaa, Al-Wurood, Al-Nuzha residential schemes.',
        'Adjacent Industrial & Residential Zones: Petro Rabigh residential quarters, King Abdullah Economic City (KAEC) vicinity, and King Abdullah Port staff housing.'
      ],
      localChallengesAr: 'تسلل ذرات الرمال الناعمة إلى مجاري النوافذ والتكييف بفعل التيارات الهوائية البحرية، والحاجة إلى معدات شفط توربينية قادرة على إخلاء الرواسب الرملية',
      localChallengesEn: 'persistent windblown sand penetrating window slides and air conditioners, requiring specialized turbine extraction to protect mechanical and interior fittings'
    },
    khulais: {
      nameAr: 'خليص',
      nameEn: 'Khulais',
      titleSuffixAr: 'بخليص',
      titleSuffixEn: 'in Khulais',
      climateContextAr: 'المناخ الصحراوي والزراعي الدافئ، وجفاف وادي خليص، وتطاير الأتربة والرمال الناعمة في مواسم الرياح، وانتشار المزارع والاستراحات',
      climateContextEn: 'the warm valley climate, inland dust breezes, agricultural surroundings of Wadi Khulais, and sprawling family estates',
      districts: [
        'الأحياء المركزية والسكنية: حي الدف، حي المغاربة، حي الصاعدية، حي الطلعة، حي العزيزية، حي النزهة، خليص القديمة (البلاد).',
        'المراكز والقرى التابعة: مركز غران، وادي خليص، مركز البرزة، أم الجرم، ستارة، الخوار، الظبية والجمعة.',
        'مزارع واستراحات خليص: المزارع المحيطة بالسد، الاستراحات العائلية على طريق الهجرة، ومخططات الفلل السكنية الحديثة.'
      ],
      districtsEn: [
        'Central & Residential Districts: Al-Duff, Al-Magharibah, Al-Saadiyah, Al-Talaah, Al-Aziziyah, Al-Nuzha, Old Khulais.',
        'Surrounding Towns & Centers: Ghran, Wadi Khulais, Al-Barzah, Umm Al-Jurm, Sittarah, Al-Khuwar, Al-Dhabiyah & Al-Jumaah.',
        'Estates & Farms: Agricultural estates near Khulais Dam, private family rest houses along Hijrah Road, and modern villa communities.'
      ],
      localChallengesAr: 'تراكم الغبار الصحراوي والزراعي الناعم على الأسطح وداخل مجاري التكييف، وارتفاع درجات الحرارة الجافة صيفاً، وحاجة الخزانات الأرضية والعلوية لعزل مائي وحراري دوري لحمايتها من تسربات المياه وحرارة الشمس، وجذب المزارع المحيطة للحشرات والزواحف',
      localChallengesEn: 'fine inland dust penetrating AC coils and window tracks, intense summer heat requiring water tank thermal insulation, and agricultural surroundings attracting seasonal pests'
    }
  };

  const city = cityDataConfig[cityId];

  // Specific service configurations
  const serviceConfigs: Record<string, {
    nameAr: string;
    nameEn: string;
    coreKeywordAr: string;
    coreKeywordEn: string;
    actionVerbAr: string;
    actionVerbEn: string;
    introOverviewAr: string;
    introOverviewEn: string;
    whyImportantAr: string;
    whyImportantEn: string;
    methodPointsAr: string[];
    methodPointsEn: string[];
    featuresAr: string[];
    featuresEn: string[];
    tipsAr: { title: string; desc: string }[];
    tipsEn: { title: string; desc: string }[];
    faqsAr: { q: string; a: string }[];
    faqsEn: { q: string; a: string }[];
  }> = {
    'homes': {
      nameAr: 'تنظيف المنازل',
      nameEn: 'Home Cleaning',
      coreKeywordAr: `شركة تنظيف منازل ${city.titleSuffixAr}`,
      coreKeywordEn: `Home Cleaning Company ${city.titleSuffixEn}`,
      actionVerbAr: 'تنظيف وتعقيم وتلميع الشقق والمنازل السكنية',
      actionVerbEn: 'Deep cleaning, sanitization, and floor restoration for homes and apartments',
      introOverviewAr: `تعتبر نظافة المنازل والشقق في ${city.nameAr} ركيزة أساسية لصحة وسكينة الأسرة. تتأثر المباني السكنية بشكل يومي بـ${city.climateContextAr}، مما يؤدي إلى تراكم الأتربة الناعمة في مجاري النوافذ، وظهور البقع على الأرضيات والأسطح، وتكون بيئات خصبة لمسببات الحساسية. تقدم مسك كلين في ${city.nameAr} حلول تنظيف منازل شاملة بأحدث المكانس التوربينية وماكينات جلي وتلميع الرخام والسيراميك ومطهرات معتمدة تضمن بيئة صحية فاخرة.`,
      introOverviewEn: `Maintaining an immaculate, sanitized home in ${city.nameEn} is essential for family wellness. Daily exposure to ${city.climateContextEn} leads to settled dust particulates in window channels, dulled tile surfaces, and indoor allergens. Mesk Clean delivers hospital-standard residential cleaning across ${city.nameEn} using high-filtration vacuum extractors and SASO-compliant eco-detergents.`,
      whyImportantAr: `يساهم التنظيف العميق لمنازل ${city.nameAr} في القضاء على 99.9% من الجراثيم وعث الغبار، وحماية الأرضيات الرخامية والبورسلين من الخدوش والبهتان، وتوفير وقت وجهد أصحاب المنزل في بيئة سكنية منعشة ومريحة.`,
      whyImportantEn: `Deep cleaning for residences in ${city.nameEn} eliminates 99.9% of indoor allergens, restores original tile and marble gloss, and grants homeowners effortless peace of mind in a pristine sanctuary.`,
      methodPointsAr: [
        'معاينة الشقة أو المنزل وتحديد الأولويات ونوعيات الأرضيات والمفروشات.',
        'شفط صناعي عميق للأتربة والرمال من النوافذ والأسقف والأركان وفلاتر الهواء.',
        'جلي وتلميع السيراميك والبورسلين والرخام بماكينات الفرك الدوارة وتفتيح الترويبة.',
        'تنظيف وتعقيم شامل للمطابخ ودورات المياه وإزالة التكلسات والشحوم بمطهرات طبية.',
        'تلميع الأبواب والنوافذ والواجهات الزجاجية بمواد طاردة للغبار تمنع التصاقه.',
        'التعطير الفندقي الفاخر بمستخلصات المسك الطبيعي والفحص الختامي مع العميل.'
      ],
      methodPointsEn: [
        'Initial residence walkthrough assessing priorities, delicate surfaces, and floor types.',
        'Deep industrial vacuum extraction removing fine dust from high ceilings, tracks, and filters.',
        'Mechanical single-disc scrubbing and polishing restoring tile luster and bright grout lines.',
        'Clinical sanitization of bathrooms and kitchens, removing limescale and grease with medical biocides.',
        'Streak-free anti-static glass and woodwork polishing that deters airborne dust re-adhesion.',
        'Signature musk deodorization and final walkthrough ensuring total customer satisfaction.'
      ],
      featuresAr: [
        'عمالة نظامية متمرسة ومدربة على بروتوكولات الأمانة وحرمة المنازل.',
        'ماكينات ومعدات حديثة تضمن إنجاز العمل دون إحداث فوضى أو إزعاج.',
        'منظفات ومطهرات صديقة للبيئة معتمدة من SASO وآمنة تماماً للأطفال.',
        'ضمان الرضا الكامل 100% وإمكانية مراجعة أي ملاحظة فوراً.',
        'تغطية ميدانية سريعة على مدار 24/7 في كافة أحياء ومخططات المدينة.'
      ],
      featuresEn: [
        'Vetted, background-checked crew trained in household privacy and luxury care standards.',
        'Low-noise European equipment delivering rapid results without disrupting household tranquility.',
        'Eco-certified, hypoallergenic detergents meeting Saudi SASO standards, safe for kids and pets.',
        '100% Satisfaction guarantee with immediate rectification of any customer requests.',
        '24/7 rapid response van dispatch covering all residential neighborhoods without delay.'
      ],
      tipsAr: [
        { title: 'إحكام عزل إطارات النوافذ', desc: 'صيانة الأشرطة المطاطية حول شبابيك الألومنيوم يمنع تسرب ذرات الغبار والرمال مع الرياح.' },
        { title: 'غسيل فلاتر المكيفات شهرياً', desc: 'تنظيف شبك التكييف بانتظام يمنع إعادة تدوير الأتربة والروائح الكتمة داخل غرف المعيشة.' },
        { title: 'معالجة انسكابات السوائل فوراً', desc: 'مسح القهوة والسوائل فور سقوطها بقطعة قطنية جافة يمنع امتصاص فواصل البلاط للبقع.' },
        { title: 'استخدام مساحات المايكروفايبر', desc: 'المسح بالمايكروفايبر يلتقط شحنات الغبار بدلاً من نثره في الهواء كالمكانس العادية.' }
      ],
      tipsEn: [
        { title: 'Seal Aluminum Window Frames', desc: 'Maintaining rubber weather-stripping prevents fine windblown dust and sand from penetrating inside.' },
        { title: 'Rinse AC Filters Monthly', desc: 'Routine cleaning of split AC mesh prevents dust re-circulation and stale indoor air odors.' },
        { title: 'Blot Liquid Spills Instantly', desc: 'Absorb spilled coffee or oil promptly with dry microfiber to stop porous grout staining.' },
        { title: 'Clean with Microfiber Tools', desc: 'Electrostatic microfiber cloths capture dust particles effectively rather than spreading them.' }
      ],
      faqsAr: [
        { q: `كم يستغرق تنظيف الشقة أو المنزل بالكامل ${city.titleSuffixAr}؟`, a: `تستغرق الشقة المتوسطة من 3 إلى 5 ساعات بفريق فني متكامل يضم 3 إلى 5 عمال مجهزين بكامل الماكينات.` },
        { q: `هل توفرون أدوات ومواد التنظيف أم يحتاج العميل لتأمينها؟`, a: `نوفر كافة المعدات والماكينات الصناعية والمكانس والمنظفات والمعقمات المعتمدة دون أي تكلفة إضافية.` },
        { q: `هل يمكن حجز موعد لنفس اليوم أو في الفترة المسائية؟`, a: `نعم، نوفر مواعيد فورية في نفس اليوم وفترات عمل مسائية لتناسب أوقات راحتكم وجداولكم.` },
        { q: `هل تقدمون عروضاً دورية للتنظيف الشهري أو الأسبوعي؟`, a: `نعم، نقدم باقات اشتراك دورية مخفضة وعقود زيارات منتظمة تضمن بقاء منزلك نقياً طوال العام.` }
      ],
      faqsEn: [
        { q: `How long does full home cleaning take ${city.titleSuffixEn}?`, a: `A standard apartment takes 3 to 5 hours with a dedicated crew of 3 to 5 technicians fully equipped with machinery.` },
        { q: `Do you provide all cleaning supplies and equipment?`, a: `Yes, we arrive with all industrial machinery, vacuum extractors, microfiber systems, and SASO-approved detergents.` },
        { q: `Can I schedule a same-day or evening appointment?`, a: `Yes, same-day and evening service slots are available to match your family convenience.` },
        { q: `Do you offer recurring weekly or monthly cleaning plans?`, a: `Yes, we provide cost-effective recurring maintenance contracts keeping your residence clean year-round.` }
      ]
    },
    'villas': {
      nameAr: 'تنظيف الفلل',
      nameEn: 'Villa Cleaning',
      coreKeywordAr: `شركة تنظيف فلل ${city.titleSuffixAr}`,
      coreKeywordEn: `Villa Cleaning Company ${city.titleSuffixEn}`,
      actionVerbAr: 'تنظيف وجلي وتعقيم الفلل والقصور والمساحات المفتوحة',
      actionVerbEn: 'Deep cleaning, floor scrubbing, and sanitizing luxury villas and multi-level estates',
      introOverviewAr: `تتطلب الفلل والمجمعات السكنية الراقية في ${city.nameAr} عناية تنظيف خاصة نظراً لتعدد طوابقها ومساحاتها المفتوحة وارتفاع أسقفها، وتنوع خامات الأرضيات بين الرخام الإسباني والبورسلين الفاخر والواجهات الزجاجية الضخمة. تؤثر طبيعة ${city.climateContextAr} بشكل مباشر على الواجهات والمسابح والأفنية الخارجية، مما يجعل الاستعانة بفريق مسك كلين المتخصص ضرورة للحفاظ على رونق الفيلا وهيبتها المعمارية.`,
      introOverviewEn: `Luxury villas and residential estates in ${city.nameEn} require specialized multi-story care due to high ceilings, expansive open salons, imported marble floors, and large glass curtain walls. Influenced by ${city.climateContextEn}, exterior courtyards and terraces quickly accumulate stubborn residue, demanding Mesk Clean's industrial-grade deep restoration solutions.`,
      whyImportantAr: `تساعد خدمة تنظيف الفلل في ${city.nameAr} على حماية الأسطح الرخامية من الخدوش، وتنظيف الواجهات الحجرية والزجاجية من آثار الغبار، والعناية بالدرج والدرابزين ومداخل الاستقبال بما يمنح الفيلا بيئة نقية وصحية تليق بأصحابها واستقبال ضيوفهم.`,
      whyImportantEn: `Professional villa cleaning in ${city.nameEn} safeguards delicate natural stone, restores clarity to multi-story glass facades, and deep-cleans grand staircases, delivering an immaculate, hotel-standard living space.`,
      methodPointsAr: [
        'معاينة مساحات الفيلا والملحقات الخارجية والمسابح وتحديد جدول العمل.',
        'شفط الأتربة العميقة من الأسقف العالية والجدران ووحدات الإنارة والنجف الفاخر.',
        'جلي وتلميع أرضيات الرخام والجرانيت بماكينات دوارة ومواد كريستالية معتمدة.',
        'تنظيف شامل للمطابخ الرئيسية والتحضيرية ودورات المياه المتعددة مع التطهير الطبي.',
        'غسيل الأحواش والأسوار ومداخل السيارات وتلميع الواجهات الزجاجية الخارجية.'
      ],
      methodPointsEn: [
        'Thorough estate walk-through inspecting multi-level layouts, terraces, and pool areas.',
        'Industrial high-reach vacuuming of double-height ceilings, cornices, and luxury chandeliers.',
        'Mechanical rotary buffing and crystallization of imported marble and granite flooring.',
        'Sanitization of main and show kitchens, laundry rooms, and guest powder rooms.',
        'Pressure-washing of private courtyards, perimeter walls, garages, and exterior glass.'
      ],
      featuresAr: [
        'فريق عمل متكامل مدرب على التعامل مع التحف والأسطح الحساسة.',
        'ماكينات جلي رخام إيطالية حديثة تعيد اللمعان الفندقي دون خدوش.',
        'مواد تنظيف وتطهير معتمدة خالية من الأحماض الكاوية لحماية الرخام.',
        'سرعة إنجاز استثنائية دون تعطيل راحة وخصوصية العائلة داخل الفيلا.'
      ],
      featuresEn: [
        'Experienced multi-technician teams trained in handling delicate luxury finishes.',
        'Modern Italian rotary floor polishers delivering a mirror-like shine safely.',
        'SASO-compliant acid-free stone cleaners preserving natural marble veins.',
        'Swift multi-room execution strictly respecting family privacy and schedule.'
      ],
      tipsAr: [
        { title: 'العناية المستمرة بفواصل الرخام', desc: 'تجنب غسيل الرخام بالمواد الحمضية كالخل أو الفلاش، واعتمد المنظفات المعتدلة للحفاظ على لمعان الترويبة.' },
        { title: 'تنظيف مجاري تصريف الفناء الخارجي', desc: 'تأكد من تنظيف مصارف الأمطار في الأحواش قبل مواسم الرياح لتفادي انسدادها بالأتربة وأوراق الأشجار.' },
        { title: 'حماية الدرابزين الزجاجي من التكلس', desc: 'مسح الزجاج الخارجي بقطعة مايكروفايبر أسبوعياً يمنع تراكم البقع الجيرية الناتجة عن رطوبة الجو.' }
      ],
      tipsEn: [
        { title: 'Protect Marble Grouting', desc: 'Never use harsh acidic agents on natural marble; only pH-neutral detergents preserve the sealant.' },
        { title: 'Clear Courtyard Drain Scuppers', desc: 'Keep perimeter courtyard drainage gratings free of windblown leaves and sand to prevent overflow.' },
        { title: 'Wipe Exterior Glass Railings', desc: 'Regular microfiber maintenance prevents atmospheric humidity and mineral rain from etching glass.' }
      ],
      faqsAr: [
        { q: `كم تستغرق عملية تنظيف الفيلا بالكامل ${city.titleSuffixAr}؟`, a: `تستغرق الفيلا المتوسطة من 6 إلى 8 ساعات بفريق فني متكامل يضم 5 إلى 8 عمال مجهزين بكافة المعدات.` },
        { q: `هل يشمل التنظيف غسيل الأسوار والأحواش الخارجية للفيلا؟`, a: `نعم، يشمل تنظيف المداخل، الأحواش، مواقف السيارات، والأسوار بماكينات الغسيل بالضغط العالي.` },
        { q: `هل تستخدمون مواد خاصة لتلميع أرضيات الرخام؟`, a: `نستخدم أقراص الألماس ومواد التلميع الإيطالية الصديقة للبيئة والمعتمدة التي تعيد بريق الرخام الطبيعي.` }
      ],
      faqsEn: [
        { q: `How long does a full villa cleaning take ${city.titleSuffixEn}?`, a: `An average villa takes 6 to 8 hours with a specialized team of 5 to 8 technicians and dual machinery.` },
        { q: `Does the service include exterior courtyards and perimeter walls?`, a: `Yes, we pressure-wash outdoor patios, walkways, garages, and perimeter boundary walls.` },
        { q: `Do you apply specialized polishing for natural marble?`, a: `We use ecological diamond pads and fine Italian crystal polishes that restore high-gloss luster safely.` }
      ]
    },
    'bird-netting': {
      nameAr: 'تركيب شبك حمام أو طارد حمام',
      nameEn: 'Bird Netting & Anti-Pigeon Spikes',
      coreKeywordAr: `تركيب شبك حمام وطارد حمام ${city.titleSuffixAr}`,
      coreKeywordEn: `Bird Netting and Spikes Installation ${city.titleSuffixEn}`,
      actionVerbAr: 'تركيب أشواك وشبك مانع للحمام والطيور على النوافذ والأسطح والمكيفات',
      actionVerbEn: 'Installing stainless steel bird spikes and heavy-duty bird netting on windows and rooftops',
      introOverviewAr: `يعد الحمام والطيور الجبلية والساحلية من أبرز مسببات تشويه الواجهات المعمارية وتلف وحدات التكييف في ${city.nameAr}. تتجمع أسراب الطيور فوق حواف النوافذ ومظلات التكييف والأسطح، مخلفة وراءها الفضلات الحمضية التي تتلف الدهانات وتسبب الروائح الكريهة وجلب حشرات الفراش والعتة. توفر مسك كلين في ${city.nameAr} حلولاً إنسانية معتمدة ومطابقة للمواصفات السعودية لتركيب طوارد الحمام وشبك الحماية عالي المتانة.`,
      introOverviewEn: `Pigeons and wild birds pose chronic hygiene and property deterioration issues in ${city.nameEn}. Roosting on window ledges, parapets, and exterior AC condenser brackets, their acidic droppings corrode building finishes, foul fresh air intakes, and attract bird mites. Mesk Clean installs certified humane stainless steel deterrent spikes and UV-resistant polymer netting.`,
      whyImportantAr: `حماية المباني في ${city.nameAr} من طيور الحمام تمنع انتشار الميكروبات وحشرات الفاش، وتطيل العمر الافتراضي لوحدات التكييف الخارجية، وتحافظ على نظافة الواجهات والزجاج لسنوات طويلة دون إيذاء الطيور.`,
      whyImportantEn: `Installing bird barriers in ${city.nameEn} prevents corrosive facade degradation, eliminates bird mites and foul smells, and safeguards expensive air conditioner coils without causing harm to wildlife.`,
      methodPointsAr: [
        'معاينة الواجهات والشبابيك ومناور المبنى لتحديد مسارات تواجد وأعشاش الحمام.',
        'تنظيف وتطهير حواف النوافذ ومظلات المكيفات وإزالة الفضلات المتراكمة بمطهرات طبية.',
        'تثبيت أشواك طارد الحمام المصنوعة من الستانلس ستيل 304 المقاوم للصدأ بسيليكون ومسامير ألمانية.',
        'شد وتركيب شبك الحمام الشفاف عالي الكثافة على المناور والمساحات المفتوحة لمنع الدخول نهائياً.',
        'فحص متانة التثبيت ومقاومة الرياح والحرارة لضمان بقائه فعالاً لسنوات طويلة.'
      ],
      methodPointsEn: [
        'Detailed facade and lightwell assessment identifying nesting sites and ledge flight paths.',
        'Deep sanitization and biocidal scraping of accumulated droppings from ledges and AC boxes.',
        'Fastening marine-grade 304 stainless steel spikes with weatherproof silicone and stainless anchors.',
        'Tensioning UV-stabilized high-density polymer netting across open atriums and balconies.',
        'Wind-load stress inspection ensuring long-lasting deterrence against strong local gusts.'
      ],
      featuresAr: [
        'أشواك ستانلس ستيل غير قابلة للصدأ ذات قواعد بولي كربونايت شفافة غير مرئية.',
        'شبك بولي إيثيلين مقوى مقاوم للحرارة والرطوبة الشديدة وأشعة الشمس الفوق بنفسجية.',
        'طريقة آمنة وإنسانية تطرد الطيور وتمنع هبوطها دون أن تؤذيها إطلاقاً.',
        'ضمان معتمد على متانة التثبيت وعدم سقوط الطارد أو انفصاله لسنوات.'
      ],
      featuresEn: [
        'Marine-grade 304 stainless steel needles on transparent UV-stable polycarbonate bases.',
        'Heavy-duty knotted polyethylene netting engineered for high UV resistance and wind permeability.',
        '100% humane and safe physical deterrence complying with animal welfare guidelines.',
        'Multi-year written installation warranty against detachment or rust.'
      ],
      tipsAr: [
        { title: 'التدخل السريع عند ملاحظة بناء الأعشاش', desc: 'إزالة قش الأعشاش فوراً تمنع الطيور من التعود على المكان وجلب المزيد من أفراد السرب.' },
        { title: 'تغطية المكيفات بأشواك مانعة', desc: 'حماية صندوق المكيف الخارجي تمنع تلف زعانف التبريد وتسرب الروائح الكريهة إلى داخل الغرفة.' },
        { title: 'عدم إلقاء بقايا الطعام قرب النوافذ', desc: 'إبعاد بقايا الخبز والحبوب عن النوافذ والشرفات يقلل من جاذبية الموقع للطيور.' }
      ],
      tipsEn: [
        { title: 'Act on Early Nesting Signs', desc: 'Dismantling nesting twigs promptly discourages pigeons from imprinting on your window ledges.' },
        { title: 'Shield AC Compressor Enclosures', desc: 'Installing bird spikes over split AC hoods stops droppings from corroding aluminum cooling fins.' },
        { title: 'Eliminate Food Attractants', desc: 'Avoid tossing breadcrumbs or food scraps near balconies, which attract persistent bird flocks.' }
      ],
      faqsAr: [
        { q: `هل تؤذي أشواك طارد الحمام الطيور؟`, a: `كلا، الأشواك مصممة برؤوس غير حادة تشكل مانعاً ميكانيكياً يمنع الطائر من الوقوف دون أن تجرحه أو تؤذيه.` },
        { q: `هل يتأثر الشبك أو الأشواك بالحرارة والرطوبة ${city.titleSuffixAr}؟`, a: `جميع موادنا مصنوعة من الستانلس ستيل المقاوم للصدأ 304 والبولي كربونات المعالج ضد الأشعة فوق البنفسجية ليدوم سنوات في أجواء ${city.nameAr}.` },
        { q: `هل يمكن تركيب الشبك على مناور المبنى بالكامل؟`, a: `نعم، نقوم بإغلاق المناور والفتحات المفتوحة بشباك شفافة متينة تسمح بمرور الضوء والهواء وتمنع الطيور تماماً.` }
      ],
      faqsEn: [
        { q: `Do the anti-pigeon spikes harm or impale birds?`, a: `No, the blunt-tipped stainless spikes create an uncomfortable physical barrier preventing landing without injury.` },
        { q: `Will the spikes or netting degrade under ${city.nameEn} heat and humidity?`, a: `All components use 304 marine-grade steel and UV-stabilized polymers built specifically for harsh local climates.` },
        { q: `Can you enclose entire building lightwells and courtyards?`, a: `Yes, we install structural cable-tensioned netting over large open lightwells allowing airflow while sealing out birds.` }
      ]
    },
    'offices': {
      nameAr: 'تنظيف المكاتب',
      nameEn: 'Office Cleaning',
      coreKeywordAr: `شركة تنظيف مكاتب ${city.titleSuffixAr}`,
      coreKeywordEn: `Office Cleaning Company ${city.titleSuffixEn}`,
      actionVerbAr: 'تنظيف وتعقيم المكاتب والشركات والمباني الإدارية والمعارض',
      actionVerbEn: 'Commercial cleaning and sanitization for corporate offices, headquarters, and showrooms',
      introOverviewAr: `تعكس نظافة المكاتب والشركات في ${city.nameAr} الهوية المهنية للمنشأة وتؤثر مباشرة على إنتاجية وصحة الموظفين وانطباع العملاء والشركاء. نوفر في مسك كلين باقات تنظيف مكاتب احترافية تشمل العناية بالأرضيات والموكيت، وتلميع القواطع الزجاجية، وتنظيف قاعات الاجتماعات والمكاتب الفردية، مع توفير عقود مرنة وفواتير ضريبية نظامية معتمدة من هيئة الزكاة والضريبة والجمارك.`,
      introOverviewEn: `The cleanliness of commercial offices in ${city.nameEn} reflects corporate prestige and directly influences employee wellness, focus, and visitor trust. Mesk Clean delivers contract and one-time commercial cleaning covering workstation sanitization, glass partition polishing, carpet shampooing, and boardroom maintenance with compliant ZATCA tax invoicing.`,
      whyImportantAr: `توفير بيئة عمل صحية في ${city.nameAr} يقلل من انتشار العدوى ومسببات الحساسية بين الموظفين، ويحافظ على الأثاث المكتبي والأجهزة الحساسة من تراكم الأتربة، مما يرفع من كفاءة العمل وسمعة المنشأة.`,
      whyImportantEn: `Maintaining a pristine workspace in ${city.nameEn} minimizes absenteeism, protects sensitive electronics from dust buildup, and projects institutional excellence to corporate clients and investors.`,
      methodPointsAr: [
        'تنظيم جدول تنظيف مرن خارج أوقات العمل الرسمية أو في الفترات المسائية لتفادي تعطيل سير العمل.',
        'شفط الأتربة من الأرضيات والموكيت بمكنسات صامتة مخصصة لبيئات العمل الاحترافية.',
        'تلميع القواطع الزجاجية والأبواب والمكاتب بمواد مضادة للغبار والبصمات.',
        'تعقيم دورات المياه ومناطق الاستراحة والبوفيه بمطهرات طبية معتمدة على مدار الساعة.',
        'تفريغ سلات المهملات وتغيير الأكياس وتعطير القاعات برائحة فندقية منعشة.'
      ],
      methodPointsEn: [
        'Coordinating flexible after-hours or weekend shifts to avoid operational business disruptions.',
        'High-filtration whisper-quiet vacuuming of carpeted tiles and executive flooring.',
        'Smudge-free streakless polishing of glass architectural partitions and boardroom tables.',
        'Clinical sanitization of restrooms, pantry kitchens, and high-touch door handles.',
        'Waste bin clearing, fresh liner replacement, and premium corporate ambient deodorization.'
      ],
      featuresAr: [
        'كوادر عمل مدربة بزي موحد مع الالتزام التام بسرية الوثائق والمقتنيات المكتبية.',
        'فواتير ضريبية إلكترونية معتمدة مناسبة للشركات والجهات الحكومية والخاصة.',
        'عقود دورية مرنة (يومية - أسبوعية - شهرية - سنوية) بأسعار تفضيلية.',
        'استخدام مواد تنظيف صديقة للبيئة خالية من الروائح المزعجة للموظفين.'
      ],
      featuresEn: [
        'Uniformed, background-checked staff bound by strict corporate confidentiality protocols.',
        'Official ZATCA-compliant electronic VAT invoices suitable for corporate accounting.',
        'Flexible service intervals (daily, weekly, bi-weekly, monthly) with preferred corporate rates.',
        'Eco-certified, low-VOC detergents that leave zero irritating chemical odors.'
      ],
      tipsAr: [
        { title: 'تنظيف لوحات المفاتيح والشاشات دورياً', desc: 'مسح الإلكترونيات بمناديل مخصصة يمنع تراكم الميكروبات الناتجة عن اللمس المتكرر.' },
        { title: 'تهوية قاعات الاجتماعات المغلقة', desc: 'الحرص على تجديد الهواء في القاعات بعد الاجتماعات المطولة يمنع الركود ونقل العدوى.' },
        { title: 'التخلص اليومي من بقايا الأطعمة بالبوفيه', desc: 'تفريغ نفايات الطعام يومياً يمنع ظهور الحشرات أو الروائح المزعجة في بيئة العمل.' }
      ],
      tipsEn: [
        { title: 'Sanitize Keyboards & Desks', desc: 'Wiping electronic touchpoints regularly eliminates bacteria transferred through constant daily handling.' },
        { title: 'Ventilate Enclosed Boardrooms', desc: 'Cycling fresh air through meeting rooms after long sessions prevents stale indoor air and fatigue.' },
        { title: 'Clear Pantry Waste Daily', desc: 'Emptying coffee and food waste daily keeps commercial offices free from pests and unpleasant odors.' }
      ],
      faqsAr: [
        { q: `هل تقدمون خدمة تنظيف المكاتب في الفترة المسائية ${city.titleSuffixAr}؟`, a: `نعم، نوفر فترات عمل مسائية وليلية وخلال عطلة نهاية الأسبوع لضمان عدم التأثير على ساعات العمل والاجتماعات.` },
        { q: `هل توفرون فواتير ضريبية رسمية للمؤسسات والشركات؟`, a: `نعم، جميع فواتيرنا نظامية ومعتمدة وضريبية متوافقة مع هيئة الزكاة والضريبة والجمارك (فاتورة).` },
        { q: `هل تشمل الخدمة غسيل موكيت المكاتب بالبخار؟`, a: `نعم، نوفر غسيل موكيت المكاتب بالبخار السريع مع التجفيف الفوري ليكون جاهزاً للعمل في اليوم التالي.` }
      ],
      faqsEn: [
        { q: `Do you offer evening or weekend cleaning ${city.titleSuffixEn}?`, a: `Yes, our commercial crews operate during night shifts and weekends so your workflow is never interrupted.` },
        { q: `Do you provide official tax invoices for corporations?`, a: `Yes, we issue official electronic VAT invoices compliant with ZATCA standards.` },
        { q: `Can you steam-wash commercial office carpets?`, a: `Yes, we use low-moisture rapid-dry carpet extraction leaving fibers clean, dry, and ready for work the next morning.` }
      ]
    },
    'sofas': {
      nameAr: 'تنظيف الكنب بالبخار',
      nameEn: 'Steam Sofa Cleaning',
      coreKeywordAr: `شركة تنظيف كنب بالبخار ${city.titleSuffixAr}`,
      coreKeywordEn: `Steam Sofa Cleaning Company ${city.titleSuffixEn}`,
      actionVerbAr: 'غسيل وتنظيف الكنب والمجالس والمفروشات بالبخار والتعقيم',
      actionVerbEn: 'Steam extraction, fabric deep-cleaning, and sanitization for sofas and traditional majlis',
      introOverviewAr: `يعد الكنب والمجالس من أكثر قطع الأثاث استخداماً في منازل ${city.nameAr}، حيث تمثل مركز اللقاء العائلي واستقبال الضيوف. ومع طبيعة ${city.climateContextAr}، تتغلغل الأتربة الدقيقة وبقع العرق والقهوة والمشروبات في عمق ألياف الأقمشة، مسببة روائح غير مستحبة وبهتاناً في الألوان. توفر مسك كلين تقنية الغسيل بالحقن والشفط بالبخار الحار الذي يفتت أصعب البقع ويعقم الأنسجة ويقضي على عث الغبار دون الإضرار بنعومة وجودة القماش.`,
      introOverviewEn: `Sofas and living room majlis seating are the heart of hospitality in ${city.nameEn}. Given ${city.climateContextEn}, dust particulates, body sweat, and beverage spills penetrate deeply into upholstery batting, breeding mites and dulling fabric hues. Mesk Clean employs deep-steam extraction technology that dissolves stubborn organic stains, sanitizes interior foam, and revives fabric vibrancy.`,
      whyImportantAr: `تنظيف الكنب بالبخار في ${city.nameAr} يضمن إزالة البقع المستعصية والروائح الكريهة من الأعماق، ويحمي أقمشة المخمل والكتان والجلد الطبيعي من التلف، موفراً مجلساً أنيقاً ومعقماً يبعث على الراحة والاعتزاز.`,
      whyImportantEn: `Deep steam sofa cleaning in ${city.nameEn} lifts stubborn coffee and oil stains, neutralizes trapped humidity odors, and protects delicate velvet, linen, and leather fabrics from premature wear.`,
      methodPointsAr: [
        'فحص نوع قماش الكنب واختبار درجة ثبات الألوان واختيار المنظف الملائم.',
        'شفط الأتربة العميقة وبقايا الطعام من الشقوق والزوايا بمكنسة سحب هوائي دقيقة.',
        'رش محلول إذابة الدهون العضوي المعتمد على البقع الصعبة وفركها بفرشاة ناعمة متخصصة.',
        'حقن البخار الساخن وسحب الأوساخ والماء المتسخ فوراً بماكينات الشفط التوربيني القوية.',
        'تجفيف سريع وتعطير بمستخلصات طبيعية تمنح الكنب انتعاشاً يدوم لأسابيع.'
      ],
      methodPointsEn: [
        'Fabric fiber inspection and dye-stability testing to choose the optimal safe shampoo formulation.',
        'High-velocity vacuum extraction dislodging crumbs and sand from deep tufting and crevices.',
        'Pre-treatment of oily food and beverage stains using targeted enzyme-based spotting agents.',
        'High-temperature steam injection combined with simultaneous powerful moisture extraction.',
        'Air-assisted fast drying and long-lasting aromatherapeutic fabric misting.'
      ],
      featuresAr: [
        'ماكينات بخار إيطالية حديثة تعتمد على ضغط البخار العالي لقتل 99.9% من الجراثيم.',
        'مواد تنظيف ألمانية خالية من المبيضات الكيميائية آمنة على الألوان والأنسجة الحساسة.',
        'تجفيف سريع يتيح استخدام الكنب في غضون ساعتين إلى ثلاث ساعات فقط.',
        'معالجة متخصصة للكنب الفاخر والمخمل والشمواه والجلد والحرير.'
      ],
      featuresEn: [
        'State-of-the-art Italian steam equipment killing 99.9% of bacteria, allergens, and dust mites.',
        'Bleach-free European fabric shampoos that preserve delicate fabric dyes and fiber softness.',
        'Accelerated drying process allowing sofa use within just 2 to 3 hours.',
        'Expert handling for luxury velvets, textured chenille, nubuck, and genuine leather.'
      ],
      tipsAr: [
        { title: 'تجفيف بقع السوائل فور سقوطها بالضغط', desc: 'اضغط على البقعة بقطعة قماش قطنية جافة دون فركها لتجنب توسيع نطاق البقعة في الأنسجة.' },
        { title: 'شفط الكنب أسبوعياً بالمكنسة المنزلية', desc: 'إزالة الغبار السطحي أسبوعياً تمنع احتكاك ذرات الرمل بالأقمشة وتآكلها مع الجلوس.' },
        { title: 'إبعاد الكنب عن أشعة الشمس المباشرة', desc: 'تعريض الكنب للشمس القوية عبر النوافذ يسبب جفاف النسيج وبهتان الألوان مع الوقت.' }
      ],
      tipsEn: [
        { title: 'Blot Spills Immediately Without Rubbing', desc: 'Press dry cotton towels directly over fresh liquid spills to absorb moisture without spreading the stain.' },
        { title: 'Vacuum Upholstery Seams Weekly', desc: 'Regular crevice vacuuming stops abrasive dust particles from wearing down fabric stitching.' },
        { title: 'Shield Fabric from Direct Sunlight', desc: 'Position sofas away from intense window sunlight to prevent fabric fading and leather drying.' }
      ],
      faqsAr: [
        { q: `كم من الوقت يحتاج الكنب ليجف بعد التنظيف بالبخار؟`, a: `بفضل ماكينات الشفط القوية التي نستخدمها، يجف الكنب بنسبة 90% أثناء التنظيف ويكون جاهزاً للاستخدام خلال ساعتين إلى ثلاث ساعات.` },
        { q: `هل تضمنون إزالة بقع القهوة والشوكولاتة القديمة؟`, a: `نزيل غالبية البقع المستعصية بمذيبات إنزيمية متخصصة مع الحفاظ التام على أمان القماش ولونه الأصلي.` },
        { q: `هل يتم التنظيف في المنزل أم يلزم نقل الكنب؟`, a: `يتم التنظيف بالكامل في موقعك داخل المنزل دون الحاجة لنقل أي قطعة من الأثاث.` }
      ],
      faqsEn: [
        { q: `How long does the sofa take to dry after steam cleaning?`, a: `Thanks to our high-torque extraction pumps, 90% of moisture is retrieved on-site; the sofa dries completely within 2 to 3 hours.` },
        { q: `Can you remove old set-in coffee or chocolate stains?`, a: `We apply specialized enzymatic stain breakers that dissolve most stubborn spots while safeguarding fabric dyes.` },
        { q: `Is the sofa cleaned on-site at home or transported?`, a: `All cleaning is performed inside your living room with no furniture hauling required.` }
      ]
    },
    'carpets': {
      nameAr: 'تنظيف السجاد والموكيت',
      nameEn: 'Carpet & Rug Cleaning',
      coreKeywordAr: `شركة تنظيف سجاد وموكيت ${city.titleSuffixAr}`,
      coreKeywordEn: `Carpet Cleaning Company ${city.titleSuffixEn}`,
      actionVerbAr: 'غسيل وتنظيف السجاد والموكيت بالبخار وإزالة البقع والروائح',
      actionVerbEn: 'Steam washing, deep carpet cleaning, and stain removal for rugs and fitted carpets',
      introOverviewAr: `يجمع السجاد والموكيت في منازل ومساجد وشركات ${city.nameAr} ذرات الغبار وحبيبات الرمل المتطايرة بفعل ${city.climateContextAr}. وبمرور الوقت، تختبئ الأتربة في أعماق الألياف وتسبب تآكل خيوط السجاد وظهور روائح الركود ومسببات الحساسية الصدرية. توفر مسك كلين في ${city.nameAr} خدمات غسيل السجاد والموكيت في موقعه باستخدام أحدث ماكينات الفرك الدوارة وحقن البخار الحراري، لإعادة النعومة واللمعان لألياف السجاد وتطهيره بالكامل.`,
      introOverviewEn: `Carpets, oriental rugs, and fitted wall-to-wall موكيت in ${city.nameEn} naturally trap airborne particulates and fine sand driven by ${city.climateContextEn}. Trapped grit grinds against fibers, causing matting, fiber breakdown, and persistent indoor allergens. Mesk Clean delivers on-site commercial carpet washing utilizing rotary scrubber brushes, hot water extraction, and anti-static conditioners.`,
      whyImportantAr: `غسيل السجاد الاحترافي في ${city.nameAr} يستخرج الرواسب العميقة التي تعجز عنها المكانس العادية، ويقضي على البكتيريا وحشرات السجاد الدقيقة، ويحافظ على ألوان الزخارف ونعومة الصوف والحرير لسنوات طويلة.`,
      whyImportantEn: `Professional carpet cleaning in ${city.nameEn} pulls compacted sand and grime from fiber roots, eradicates dust mites, and restores the plush texture and bright hues of fine rugs.`,
      methodPointsAr: [
        'معاينة السجاد وتحديد نوعية الخيوط (صوف - حرير - بوليستر) ومدى مقاومتها للبخار.',
        'شفط صناعي عميق للأتربة والرمال العالقة في قاع الوبرة بمكانس ذات نبض اهتزازي.',
        'معالجة مسبقة للبقع الدهنية وبقع المشروبات بمحاليل رغوية آمنة على الصبغات.',
        'غسيل بفرشاة دوارة ناعمة مع حقن البخار لسحب الأوساخ المعقدة وتطهير النسيج.',
        'سحب الرطوبة الزائدة بماكينات الشفط العالي وتعطير السجاد برائحة نقية تدوم.'
      ],
      methodPointsEn: [
        'Fiber appraisal identifying weave construction (wool, silk, synthetic) and dye fastness.',
        'Vibratory industrial vacuuming extracting compacted sand from the backing mesh.',
        'Pre-treating traffic lanes, pet spots, and beverage spills with fiber-safe bio-shampoos.',
        'Rotary agitation and heated steam injection breaking down encapsulated dirt.',
        'High-power moisture recovery and fresh aromatherapeutic deodorization.'
      ],
      featuresAr: [
        'غسيل فوري في الموقع دون الحاجة لفك الموكيت أو نقل السجاد خارج المنزل.',
        'ماكينات تجفيف سريعة تمكنك من المشي على السجاد بعد ساعات قليلة من انتهاء العمل.',
        'مواد تعقيم تقتل البكتيريا ومسببات الحساسية المتراكمة في قعر الألياف.',
        'حماية ألوان السجاد اليدوي والتركي والإيراني من التلاشي أو التداخل.'
      ],
      featuresEn: [
        'Convenient on-site cleaning with zero need to pull up fitted carpets or transport heavy rugs.',
        'Rapid moisture extraction allowing foot traffic within just a few hours.',
        'Sanitizing thermal rinses eradicating deep-seated pathogens and odor-causing bacteria.',
        'Gentle dye-safe care for delicate Persian, Turkish, and hand-tufted wool rugs.'
      ],
      tipsAr: [
        { title: 'كنس السجاد في اتجاه الوبرة', desc: 'الكنس باتجاه خيوط السجاد يحمي أطراف الخيوط من التكسر والتطاير مع مرور الوقت.' },
        { title: 'تدوير السجاد كل 6 أشهر', desc: 'تغيير اتجاه السجاد يوزع ضغط الأقدام بالتساوي ويمنع بهتان مناطق محددة دون غيرها.' },
        { title: 'وضع لبادات تحت أرجل الأثاث الثقيل', desc: 'استخدام القطع الواقية يمنع تشوه وبرة السجاد وهبوطها تحت وطأة الطاولات والكنب الثقيل.' }
      ],
      tipsEn: [
        { title: 'Vacuum in the Direction of the Pile', desc: 'Always push vacuum cleaners following the natural lay of the carpet pile to avoid fiber stress.' },
        { title: 'Rotate Rugs Every 6 Months', desc: 'Rotating rugs 180 degrees balances foot traffic and prevents uneven wear patterns in entryways.' },
        { title: 'Use Furniture Coasters Under Heavy Legs', desc: 'Protective felt or plastic furniture cups prevent heavy sofas from permanently crushing carpet fibers.' }
      ],
      faqsAr: [
        { q: `هل يتطلب غسيل السجاد نقله إلى مغاسل خارجية؟`, a: `نوفر خدمة التنظيف في موقعك بالمنزل أو الشركة بأحدث الأجهزة المتنقلة، مما يوفر وقتك ويحافظ على أثاثك.` },
        { q: `هل المنظفات المستخدمة آمنة على الأطفال وحساسية الصدر؟`, a: `نستخدم منظفات ومعقمات معتمدة طبياً خالية من المواد الكيميائية الضارة ومناسبة تماماً لغرف الأطفال.` },
        { q: `كم يستغرق غسيل موكيت الغرفة الواحدة؟`, a: `يستغرق تنظيف موكيت الغرفة المتوسطة قرابة 30 إلى 45 دقيقة مع الشفط والتعقيم الشامل.` }
      ],
      faqsEn: [
        { q: `Do rugs need to be sent away to an external laundry?`, a: `No, our commercial mobile extraction equipment thoroughly washes and dries rugs right inside your home.` },
        { q: `Are the carpet detergents safe for children and allergy sufferers?`, a: `We exclusively utilize non-toxic, hypoallergenic, and odorless cleaning agents safe for kids and pets.` },
        { q: `How long does cleaning a standard carpeted bedroom take?`, a: `A standard room takes approximately 30 to 45 minutes from pre-vacuuming through deep steam extraction.` }
      ]
    },
    'rodents-reptiles': {
      nameAr: 'مكافحة القوارض والزواحف',
      nameEn: 'Rodents & Reptiles Control',
      coreKeywordAr: `شركة مكافحة قوارض وزواحف ${city.titleSuffixAr}`,
      coreKeywordEn: `Rodents and Reptiles Control Company ${city.titleSuffixEn}`,
      actionVerbAr: 'إبادة ومكافحة الفئران والجرذان والزواحف وتأمين المداخل مع الضمان',
      actionVerbEn: 'Exterminating mice, rats, and reptiles, sealing entry points with certified warranty',
      introOverviewAr: `تشكل القوارض (الفئران والجرذان) والزواحف تهديداً صحياً وبيئياً كبيراً على المنازل والمنشآت في ${city.nameAr}. تتسلل هذه الآفات عبر قنوات الصرف والفتحات الجدارية والمناطق المفتوحة، ناقلة أخطر الأمراض البكتيرية ومتسببة في قرض الأسلاك الكهربائية وخراطيم المياه وأثاث المنزل. تقدم مسك كلين في ${city.nameAr} خطة متكاملة لمكافحة القوارض والزواحف تعتمد على طعوم جاذبة آمنة ومصائد متطورة، مع سد محكم للمنافذ وتقديم ضمان معتمد يضمن عدم عودتها.`,
      introOverviewEn: `Rodents (rats, mice) and crawl reptiles present severe health hazards and property destruction in ${city.nameEn}. Infiltrating through sewer lines, perimeter crevices, and open desert or rocky borders, they chew electrical wiring, contaminate food stores, and transmit pathogens. Mesk Clean deploys certified integrated pest management (IPM) utilizing tamper-proof bait stations, mechanical barriers, and certified warranties.`,
      whyImportantAr: `حماية منزلك في ${city.nameAr} من القوارض والزواحف تمنع حوادث التماس الكهربائي، وتوفر حماية تامة لصحة أطفالك من التلوث الغذائي والأمراض، مع راحة بال دائمة بفضل الضمان والمتابعة الدورية.`,
      whyImportantEn: `Professional rodent and reptile exclusion in ${city.nameEn} averts electrical fire hazards from gnawed cables, prevents food contamination, and restores total household peace of mind.`,
      methodPointsAr: [
        'معاينة دقيقة للمبنى لتحديد نقاط الدخول وآثار القوارض ومسارات حركتها وجحورها.',
        'توزيع محطات طعوم آمنة ومحكمة الإغلاق في أماكن مدروسة بعيداً عن متناول الأطفال والحيوانات.',
        'استخدام طعوم إيطالية وأمريكية معتمدة تسبب جفاف القوارض دون انبعاث روائح كريهة في المكان.',
        'سد وإغلاق جميع الثغرات والفتحات وأنابيب الصرف بمواد صلبة مقاومة للقرض.',
        'متابعة دورية وفحص مصائد المراقبة لضمان القضاء التام على المستعمرة ومنح الضمان.'
      ],
      methodPointsEn: [
        'Rigorous property inspection mapping burrows, droppings, gnaw marks, and sewer entry tracks.',
        'Strategic placement of tamper-resistant child- and pet-safe bait stations around perimeters.',
        'Deployment of anticoagulant rodenticides designed to dehydrate rodents without foul interior odors.',
        'Physical exclusion sealing structural weep holes, pipe penetrations, and door gaps with stainless steel mesh.',
        'Scheduled warranty follow-up visits monitoring active bait takes and certifying complete eradication.'
      ],
      featuresAr: [
        'طعوم آمنة ومصرحة من وزارة البيئة والمياه والزراعة وهيئة الغذاء والدواء.',
        'تقنيات تجفيف تمنع تعفن القوارض وخروج الروائح الكريهة داخل الجدران.',
        'حلول سد وعزل ميكانيكية متقدمة تمنع دخول القوارض من مصارف الصرف والفتحات.',
        'شهادة ضمان معتمدة ومتابعات مجانية في حال ظهور أي نشاط خلال فترة الضمان.'
      ],
      featuresEn: [
        'Ministry of Environment and SFDA certified rodenticides meeting strict health standards.',
        'Dehydrating formulations preventing foul decomposition odors inside wall cavities.',
        'Heavy-duty physical exclusion sealing entry routes against re-infestation.',
        'Official written warranty certificate with free call-back inspections.'
      ],
      tipsAr: [
        { title: 'تركيب ردادات مانعة على مصارف الصرف', desc: 'تمنع ردادات الصرف غير القابلة للرجوع خروج الجرذان من غرف التفتيش إلى دورات المياه.' },
        { title: 'إغلاق الفتحات حول تمديدات المكيفات', desc: 'استخدام الفوم العازل وشبك الستانلس ستيل حول أنابيب التكييف يمنع تسلل الفئران للجدران.' },
        { title: 'حفظ الحبوب والمواد الغذائية في علب محكمة', desc: 'حرمان القوارض من مصادر الغذاء يمنع استقرارها وبناء أعشاشها داخل المطابخ والمخازن.' }
      ],
      tipsEn: [
        { title: 'Install Non-Return Sewer Check Valves', desc: 'Drain flapper valves prevent sewer rats from swimming up through bathroom drain traps.' },
        { title: 'Seal Conduit Penetrations with Steel Mesh', desc: 'Filling AC pipe gaps with stainless mesh and expanding foam blocks exterior rodent access.' },
        { title: 'Store Food in Airtight Containers', desc: 'Denying rodents open access to pet food, grains, and dry staples eliminates their primary food source.' }
      ],
      faqsAr: [
        { q: `هل تسبب طعوم القوارض روائح كريهة في حال موتها؟`, a: `نستخدم طعوم حديثة متخصصة تجعل القارض يبحث عن الماء في الخارج ويجف تدريجياً دون ترك أي روائح كريهة داخل المبنى.` },
        { q: `هل المبيدات والطعوم آمنة للأطفال والحيوانات الأليفة؟`, a: `نضع جميع الطعوم داخل محطات وصناديق بلاستيكية سميكة مقفلة بمفاتيح خاصة لا يمكن للأطفال أو الحيوانات فتحها.` },
        { q: `ما هي مدة الضمان المقدم لمكافحة القوارض ${city.titleSuffixAr}؟`, a: `نقدم ضماناً رسمياً يمتد من 3 إلى 6 أشهر يشمل زيارات المتابعة المجانية لمعاينة المصائد والتأكد من انتهاء المشكلة.` }
      ],
      faqsEn: [
        { q: `Do the rodent baits produce bad decomposition odors?`, a: `We use modern dehydrating baits that cause rodents to seek outdoor water, desiccating them without foul odors indoors.` },
        { q: `Are the bait stations safe for small children and house pets?`, a: `All baits are secured inside heavy-gauge tamper-proof key-locked stations accessible only to target pests.` },
        { q: `What is the warranty period for rodent control ${city.titleSuffixEn}?`, a: `We provide a 3- to 6-month written warranty covering free inspections and re-baiting if activity is detected.` }
      ]
    },
    'kitchens': {
      nameAr: 'تنظيف المطابخ',
      nameEn: 'Kitchen Cleaning',
      coreKeywordAr: `شركة تنظيف مطابخ ${city.titleSuffixAr}`,
      coreKeywordEn: `Kitchen Cleaning Company ${city.titleSuffixEn}`,
      actionVerbAr: 'إزالة الدهون المستعصية وتنظيف وتطهير المطابخ والشفاطات والخزائن',
      actionVerbEn: 'Heavy degreasing, sanitization, and deep cleaning for kitchens, range hoods, and cabinetry',
      introOverviewAr: `يعد المطبخ قلب البيت ومصدر الغذاء للأسرة، إلا أنه يتعرض لتراكمات يومية من بخار الزيوت والشحوم على الجدران والدواليب وشفاطات الهواء. في ${city.nameAr}، تزيد عوامل ${city.climateContextAr} من تماسك طبقات الدهون وتحولها إلى طبقة لزجة يصعب تنظيفها بالوسائل المنزلية العادية، مما يجلب الحشرات ويسبب الروائح غير المحببة. تقدم مسك كلين في ${city.nameAr} خدمة التنظيف العميق وإذابة الشحوم بأقوى المذيبات الغذائية الآمنة وأجهزة البخار الحرارية.`,
      introOverviewEn: `The kitchen is the culinary center of the home, but continuous cooking produces aerosolized grease and oil films that coat range hoods, tile walls, and cabinetry. In ${city.nameEn}, ${city.climateContextEn} cures grease into a stubborn, sticky film that attracts pests and harbors bacteria. Mesk Clean delivers industrial food-safe degreasing and high-temperature steam decontamination.`,
      whyImportantAr: `التنظيف الاحترافي للمطابخ في ${city.nameAr} يقضي على بيئات تكاثر بكتيريا السالمونيلا والصراصير، ويعيد اللمعان لأسطح الرخام والستانلس ستيل، ويحمي الشفاطات من خطر الاشتعال نتيجة تراكم الزيوت المحترقة.`,
      whyImportantEn: `Professional kitchen degreasing in ${city.nameEn} eliminates breeding zones for foodborne pathogens, restores stainless steel and granite luster, and mitigates grease-fire hazards inside range hoods.`,
      methodPointsAr: [
        'فك فلاتر الشفاط ومراوح التهوية ونقعها في أحواض مذيبة للدهون والزيوت المتصلبة.',
        'تنظيف خزائن المطبخ من الداخل والخارج وإزالة البقع الدهنية ومسح الأرفف بمطهر غذائي.',
        'إذابة الدهون المستعصية على جدران السيراميك والفرن والبوتاجاز بالبخار المركز.',
        'جلي وتلميع أحواض الجرانيت والستانلس ستيل وإزالة التكلسات من الخلاطات.',
        'غسيل الأرضيات بماكينة الفرك وتطهير المصارف وتعطير المطبخ برائحة منعشة.'
      ],
      methodPointsEn: [
        'Dismantling range hood filters and fan blades, submerging them in thermal degreasing baths.',
        'Wiping and sanitizing all kitchen cabinetry inside and out with food-contact safe solutions.',
        'High-pressure steam dissolution of baked-on grease across backsplashes, ovens, and cooktops.',
        'Descaling and high-gloss polishing of stainless steel sinks, faucets, and composite countertops.',
        'Mechanical floor scrubbing, grease trap decontamination, and fresh citrus deodorization.'
      ],
      featuresAr: [
        'مذيبات دهون عضوية معتمدة لا تترك أي أثر كيميائي على مناطق إعداد الطعام.',
        'أجهزة بخار ذات حرارة فائقة تفتت الشحوم المتكلسة في الزوايا الصعبة دون خدش الأسطح.',
        'عناية دقيقة بأسطح الرخام الطبيعي وخشب الدواليب دون التسبب في تقشر الدهان.',
        'إبادة فورية وتعقيم شامل لأوكار الصراصير الدقيقة التي تتغذى على بقايا الزيوت.'
      ],
      featuresEn: [
        'Certified food-safe organic degreasers leaving zero toxic residue on prep counters.',
        'High-temperature thermal steam blasting away polymerized grease without scratching surfaces.',
        'Gentle, non-corrosive formulas engineered specifically for solid wood and natural marble.',
        'Targeted sanitization eliminating German cockroach harborage zones behind appliances.'
      ],
      tipsAr: [
        { title: 'تنظيف فلاتر الشفاط بالماء الساخن شهرياً', desc: 'نقع الفلاتر بالماء الساخن وصابون الأطباق يمنع انسداد مجرى الهواء وضعف سحب الشفاط.' },
        { title: 'مسح محيط البوتاجاز يومياً بعد الطهي', desc: 'تنظيف رذاذ الزيت فوراً يمنع تيبسه وتحوله إلى طبقة عنيدة تتطلب كشطاً مجهداً.' },
        { title: 'تجفيف حوض الغسيل والرخام المحيط به', desc: 'إبقاء منطقة الحوض جافة يمنع تكلس الأملاح وتكون العفن الأسود على السيليكون.' }
      ],
      tipsEn: [
        { title: 'Soak Range Hood Filters Monthly', desc: 'Soaking metal mesh filters in hot soapy water dissolves oil before it restricts exhaust airflow.' },
        { title: 'Wipe Cooktops Promptly After Frying', desc: 'A quick daily wipe prevents hot cooking oil from polymerizing into difficult yellow grease.' },
        { title: 'Keep Sink Edges Dry', desc: 'Drying water splashes around sinks stops hard water limescale rings and black mold along silicone seals.' }
      ],
      faqsAr: [
        { q: `هل المنظفات المستخدمة في المطبخ آمنة على الأطعمة؟`, a: `نستخدم منظفات مخصصة للمطابخ ومصرحة غذائياً من هيئة الغذاء والدواء خالية تماماً من السموم والروائح الكيميائية الضارة.` },
        { q: `هل يشمل التنظيف الأجهزة الكهربائية مثل الفرن والمايكروويف والثلاجة؟`, a: `نعم، نقوم بتنظيف الفرن من الداخل وإزالة الدهون المحترقة، وتنظيف المايكروويف والثلاجة خارجياً وداخلياً حسب رغبتكم.` },
        { q: `هل تزيلون طبقات الدهون الصفراء القديمة على الجدران؟`, a: `نمتلك ماكينات بخار حار ومذيبات قوية تزيل أصعب الدهون المتراكمة منذ سنوات وتعيد للسيراميك لمعانه الأصلي.` }
      ],
      faqsEn: [
        { q: `Are the cleaning products safe for food contact surfaces?`, a: `We exclusively utilize SFDA-approved, food-safe biodegradable formulas leaving zero harmful chemical residue.` },
        { q: `Does the service include cleaning the oven and microwave?`, a: `Yes, we perform deep internal and external degreasing of ovens, stove burners, and microwave interiors.` },
        { q: `Can you remove old yellow grease caked onto wall tiles?`, a: `Our high-pressure steam and professional emulsifiers melt away years of heavy grease, restoring glossy tile finishes.` }
      ]
    },
    'ac': {
      nameAr: 'غسيل المكيفات',
      nameEn: 'Air Conditioner Cleaning',
      coreKeywordAr: `شركة غسيل مكيفات ${city.titleSuffixAr}`,
      coreKeywordEn: `Air Conditioner Cleaning Company ${city.titleSuffixEn}`,
      actionVerbAr: 'غسيل وتنظيف وصيانة المكيفات السبليت والشباك وضبط الفريون',
      actionVerbEn: 'Deep pressure washing, coil sanitization, and maintenance for split and window ACs',
      introOverviewAr: `تعتبر أجهزة التكييف شريان الحياة في منازل ومباني ${city.nameAr} على مدار العام، حيث تعمل تحت وطأة درجات حرارة مرتفعة وظروف مناخية صعبة تجمع بين ${city.climateContextAr}. يتسبب تراكم الأتربة والغبار ورذاذ الرطوبة على زعانف المبخر ومروحة البلاور في خنق تدفق الهواء، وانبعاث روائح العفن، وزيادة استهلاك الكهرباء بنسبة تصل إلى 25%، فضلاً عن ضعف التبريد. توفر مسك كلين في ${city.nameAr} غسيلاً احترافياً للمكيفات بمضخات الضغط العالي مع جراب عزل مائي محكم يحمي الجدران والأثاث بنسبة 100%.`,
      introOverviewEn: `Air conditioning is an indispensable necessity in ${city.nameEn}, operating continuously through scorching summer heat influenced by ${city.climateContextEn}. Dust accumulation and coastal moisture coat cooling coils and blower wheels, choking airflow, generating musty mold smells, and inflating electricity bills by up to 25%. Mesk Clean delivers deep pressure coil washing with specialized waterproof catchment shields.`,
      whyImportantAr: `غسيل المكيفات بانتظام في ${city.nameAr} يعيد كفاءة التبريد الثلجي للمكيف، ويخفض فاتورة الكهرباء بشكل ملموس، وينقي الهواء الداخلي من الفطريات والبكتيريا، ويطيل عمر الكمبروسر الافتراضي لسنوات.`,
      whyImportantEn: `Routine AC cleaning in ${city.nameEn} restores peak cooling velocity, slashes electrical consumption, eliminates airborne bacterial spores, and extends compressor longevity.`,
      methodPointsAr: [
        'فحص أولي لكفاءة التبريد وضغط الفريون والتأكد من سلامة التوصيلات الكهربائية.',
        'تركيب جراب العزل المائي الشامل حول الوحدة الداخلية لحماية الدهانات والأثاث والأرضيات.',
        'فك الفلاتر والغطاء الخارجي وغسيلها بمطهرات تزيل الأتربة المتراكمة والجراثيم.',
        'ضخ الماء الممزوج بمنظف الزعانف الخاص بضغط عالي لغسيل رديتر المبخر ومروحة البلاور وحوض التصريف.',
        'غسيل الوحدة الخارجية بالضغط لإزالة الرمال المتكلسة، وتسليك مجرى الصرف وتجفيف المكيف وتشغيله بكفاءة.'
      ],
      methodPointsEn: [
        'Diagnostic pre-test measuring cooling output, fan speed, and refrigerant charge.',
        'Fitting a heavy-duty waterproof wash bag fully shielding walls, wallpaper, and furnishings.',
        'Removing and pressure-rinsing filters and front faceplates with antibacterial wash.',
        'High-pressure chemical coil flushing penetrating evaporator fins, blower wheels, and drain pans.',
        'Pressure-washing outdoor condenser coils, clearing drain lines, and final performance testing.'
      ],
      featuresAr: [
        'أكياس وجراب حماية مخصص يضمن عدم تسرب نقطة ماء واحدة على الجدار أو الأثاث.',
        'مضخات غسيل مخصصة للمكيفات بضغط مضبوط لا يثني زعانف الألومنيوم الحساسة.',
        'منظفات متخصصة لإذابة العفن الأسود والأملاح المتكلسة دون الإضرار بالمواسير.',
        'فحص مجاني لمستوى غاز الفريون وكفاءة الكمبروسر وتقديم تقرير نصحي للعميل.'
      ],
      featuresEn: [
        'Specially engineered waterproof capture bags guaranteeing zero water splash on interior walls.',
        'Calibrated pressure pumps designed to blast away grime without bending delicate aluminum fins.',
        'Anti-microbial coil foam dissolving sludge and organic odors safely without corroding copper.',
        'Complimentary refrigerant level and compressor efficiency check on every service.'
      ],
      tipsAr: [
        { title: 'تنظيف الفلاتر المنزلية كل أسبوعين', desc: 'غسيل الفلاتر البلاستيكية تحت الصنبور بانتظام يضمن استمرار تدفق الهواء البارد بكفاءة.' },
        { title: 'ضبط منظم الحرارة على 24 درجة مئوية', desc: 'تعد درجة 24 مئوية الخيار الأمثل لتحقيق التبريد المريح وتخفيف الجهد على الكمبروسر وتوفير الطاقة.' },
        { title: 'التأكد من عدم انسداد خرطوم تصريف المياه', desc: 'فحص مخرج الماء الخارجي يمنع ارتداد المياه وتسريبها من داخل المكيف على الجدران.' }
      ],
      tipsEn: [
        { title: 'Rinse Mesh Filters Bi-Weekly', desc: 'Rinsing washable plastic mesh under running water ensures continuous unobstructed airflow.' },
        { title: 'Maintain Thermostats at 24°C', desc: 'Setting ACs at 24°C provides ideal comfort while significantly lowering compressor wear and power bills.' },
        { title: 'Inspect Condensate Drain Tubes', desc: 'Ensure outdoor drain pipes discharge freely to prevent water backups and interior wall dripping.' }
      ],
      faqsAr: [
        { q: `هل يحدث أي اتساخ للجدران أو الفرش أثناء غسيل المكيف؟`, a: `مستحيل تماماً، نستخدم جراب عازل يحيط بالمكيف بالكامل متصل بخرطوم تصريف ينقل المياه المتسخة مباشرة إلى الحاوية.` },
        { q: `كم يستغرق غسيل المكيف الواحد؟`, a: `يستغرق غسيل المكيف الداخلي والخارجي مع الفحص الشامل قرابة 25 إلى 35 دقيقة للوحدة.` },
        { q: `هل تقومون بتعبئة الفريون إذا كان ناقصاً؟`, a: `نعم، نوفر غاز الفريون الأمريكي الأصلي من نوع R410A أو R22 ونقوم بضبط الضغط بالمعايير الدقيقة عند الحاجة.` }
      ],
      faqsEn: [
        { q: `Will water splash onto my wallpaper or furniture during washing?`, a: `Never. Our waterproof wash bags encase the entire split unit with drainage funneled directly into catch buckets.` },
        { q: `How long does cleaning one split AC unit take?`, a: `A complete indoor and outdoor deep wash and inspection takes approximately 25 to 35 minutes per unit.` },
        { q: `Do you provide Freon gas top-ups if refrigerant is low?`, a: `Yes, we carry genuine American R410A and R22 refrigerants, topping up systems to factory specifications.` }
      ]
    },
    'tanks': {
      nameAr: 'تنظيف وعزل الخزانات',
      nameEn: 'Water Tank Cleaning & Insulation',
      coreKeywordAr: `شركة تنظيف وعزل خزانات ${city.titleSuffixAr}`,
      coreKeywordEn: `Water Tank Cleaning and Insulation Company ${city.titleSuffixEn}`,
      actionVerbAr: 'غسيل وتعقيم وعزل الخزانات الأرضية والعلوية مع الضمان',
      actionVerbEn: 'Sanitizing, deep scrubbing, and certified epoxy waterproofing for water tanks',
      introOverviewAr: `تمثل خزانات المياه الأرضية والعلوية شريان الصحة والسلامة اليومية لكافة أفراد الأسرة في ${city.nameAr}. وبفعل عوامل ${city.climateContextAr}، تتعرض الخزانات لتراكم الأطيان والرواسب الكلسية في القاع، ونمو الطحالب الخضراء، وتكون التشققات الخرسانية التي قد تسمح بتسرب المياه أو دخول المياه الجوفية الملوثة. توفر مسك كلين في ${city.nameAr} خدمات تنظيف وتعقيم وتطبيق العزل الإيبوكسي والأسمنتي المعتمد لمياه الشرب وفق أعلى معايير الصحة والسلامة السعودية.`,
      introOverviewEn: `Underground and rooftop water tanks provide the daily lifeblood for residences across ${city.nameEn}. Driven by ${city.climateContextEn}, storage tanks suffer from silt sedimentation, green algae blooms, and hairline structural fissures that cause water leaks or groundwater infiltration. Mesk Clean delivers certified tank draining, mechanical wall scrubbing, and food-grade epoxy waterproofing.`,
      whyImportantAr: `تنظيف وعزل الخزانات في ${city.nameAr} يضمن وصول مياه شرب نقية وخالية من الجراثيم بنسبة 100%، ويحمي أساسات المبنى من التصدع نتيجة تسربات المياه، ويقلل من فواتير المياه المرتفعة الناجمة عن الهدر الخفي.`,
      whyImportantEn: `Periodic water tank cleaning and insulation in ${city.nameEn} ensures 100% bacterially pure domestic water, preserves concrete structural foundations against water seepage, and eliminates high municipal water bills caused by hidden leaks.`,
      methodPointsAr: [
        'تفريغ مياه الخزان وسحب الأطيان والرواسب المتراكمة بالقاع بمضخات سحب قوية (غطاس).',
        'فرك الجدران والأرضيات بفرش خشنة ومواد تطهير تزيل الطحالب والشوائب العالقة.',
        'معاينة التشققات ونقاط التسرب في الخزان الأرضي ومعالجتها بمعجون عازل سريع الجفاف.',
        'تطبيق طبقات العزل الإيبوكسي أو الأسمنتي الأزرق المعتمد الصالح لمياه الشرب عند الحاجة.',
        'شطف الخزان بالكامل وتعقيمه بمركبات الكلور بالنسب المحددة من وزارة الصحة وملئه بمياه عذبة نقية.'
      ],
      methodPointsEn: [
        'Pumping out residual water and bottom silt utilizing submersible industrial evacuation pumps.',
        'Mechanical scouring of interior concrete walls and floor slabs removing algae and mineral scale.',
        'Detailed fissure inspection detecting waterproofing fractures and sealing them with hydraulic cement.',
        'Applying certified food-grade blue epoxy or polymer-modified elastomeric waterproof coating.',
        'Multiple clean-water flushes and precision chlorination sanitization conforming to Ministry of Health guidelines.'
      ],
      featuresAr: [
        'مواد تعقيم ومطهرات مطابقة للمواصفات القياسية السعودية (SASO) مخصصة لمياه الشرب.',
        'عوازل إيبوكسية ألمانية صلبة تمنع التسرب وتحمي الخرسانة من الرطوبة والأملاح.',
        'طواقم فنية متخصصة ومدربة على العمل بأمان داخل الأماكن المغلقة ومزودة بأجهزة الأكسجين.',
        'شهادة ضمان معتمدة على أعمال العزل تمتد لعدة سنوات مع فحص دوري مجاني.'
      ],
      featuresEn: [
        'Sterilizers fully compliant with Saudi SASO specifications designed specifically for potable drinking water.',
        'High-durability German epoxy and polymer sealants that resist high hydrostatic pressure and salts.',
        'Certified confined-space technicians equipped with safety harnesses and fresh air ventilation.',
        'Official written multi-year waterproofing warranty certificate with periodic inspection.'
      ],
      tipsAr: [
        { title: 'إحكام غلق فتحة الخزان العلوية والأرضية', desc: 'التأكد من سلامة غطاء الخزان وجلده العازل يمنع سقوط الأتربة والحشرات إلى داخل المياه.' },
        { title: 'فحص فواتير المياه الدورية لملاحظة التسرب', desc: 'الارتفاع المفاجئ في فاتورة المياه غالباً ما يكون دليلاً على وجود تسريب خفي في الخزان الأرضي.' },
        { title: 'تنظيف الخزان مرة كل 6 أشهر على الأقل', desc: 'الالتزام بالغسيل الدوري يمنع استقرار الرواسب الطينية وتكاثر البكتيريا على جدران الخزان.' }
      ],
      tipsEn: [
        { title: 'Ensure Airtight Tank Manhole Covers', desc: 'Check that access hatch gaskets fit tightly to prevent windblown dust, sand, and insects from entering.' },
        { title: 'Monitor Utility Water Bills for Spikes', desc: 'An unexplained surge in your municipal water bill frequently indicates an underground tank leak.' },
        { title: 'Clean Water Tanks Every 6 Months', desc: 'Biannual professional cleanouts stop sediment accumulation before organic bacteria can colonize.' }
      ],
      faqsAr: [
        { q: `كم من الوقت يستغرقه غسيل وتعقيم الخزان؟`, a: `يستغرق غسيل الخزان الأرضي أو العلوي المتوسط من ساعتين إلى ثلاث ساعات شاملة التفريغ والفرك والتعقيم.` },
        { q: `هل المواد المستخدمة في العزل آمنة على مياه الشرب؟`, a: `نعم تماماً، نستخدم فقط عوازل إيبوكسية خالية من المذيبات الضارة (Solvent-Free) وحاصلة على اعتمادات مياه الشرب الدولية والمحلية.` },
        { q: `ما هي مدة الضمان على عزل الخزانات ${city.titleSuffixAr}؟`, a: `نقدم ضماناً رسمياً يمتد من 5 إلى 10 سنوات على أعمال عزل الخزانات الأرضية ضد أي تسربات.` }
      ],
      faqsEn: [
        { q: `How long does cleaning and sterilizing a water tank take?`, a: `A standard underground or rooftop tank takes approximately 2 to 3 hours including drainage, scrubbing, and sanitizing.` },
        { q: `Are your tank waterproofing materials safe for drinking water?`, a: `Yes, we exclusively apply 100% solvent-free certified potable-water epoxy compounds tested for non-toxicity.` },
        { q: `What is the warranty period for water tank insulation ${city.titleSuffixEn}?`, a: `We provide an official 5- to 10-year warranty certificate covering our structural epoxy tank insulation.` }
      ]
    },
    'pest': {
      nameAr: 'مكافحة الحشرات',
      nameEn: 'Pest Control',
      coreKeywordAr: `شركة مكافحة حشرات ${city.titleSuffixAr}`,
      coreKeywordEn: `Pest Control Company ${city.titleSuffixEn}`,
      actionVerbAr: 'رش مبيدات ومكافحة الصراصير وبق الفراش والنمل الأبيض والآفات',
      actionVerbEn: 'Pest extermination, odorless residual spraying, and termite eradication with warranty',
      introOverviewAr: `تعتبر مشكلات الحشرات المنزلية من أكثر التحديات إزعاجاً لراحة وصحة الأسر في ${city.nameAr}. توفر عوامل ${city.climateContextAr} بيئة تكاثر مثالية للصراصير الألمانية والأمريكية، وبق الفراش العنيد، والنمل الأبيض (الدفان) الذي ينخر في الأخشاب وأساسات الأبواب. تعتمد مسك كلين في ${city.nameAr} استراتيجية المكافحة المتكاملة للآفات (IPM) باستخدام مبيدات ألمانية وأمريكية عديمة الرائحة وآمنة كلياً، تضمن القضاء التام على الحشرات من جذورها دون مغادرة المنزل.`,
      introOverviewEn: `Household insect infestations cause major hygiene distress and sleep disruption for families in ${city.nameEn}. Driven by ${city.climateContextEn}, warm indoor spaces foster rapid reproduction of German cockroaches, bedbugs, termites (الدفان), and crawling pests. Mesk Clean deploys integrated pest management (IPM) utilizing odorless, health-certified German and American insecticides with multi-month warranties.`,
      whyImportantAr: `مكافحة الحشرات الاحترافية في ${city.nameAr} تقضي على بؤر نقل الأمراض المعوية كالسالمونيلا والديدان الطفيلية، وتمنع تلف الأثاث الخشبي والأبواب بسبب النمل الأبيض، وتوفر لك ولأولادك نوماً هادئاً وبيئة معقمة.`,
      whyImportantEn: `Targeted pest control in ${city.nameEn} protects your family from disease vectors, stops destructive termite colonies from hollowing wooden doors, and guarantees a pest-free, hygienic sanctuary.`,
      methodPointsAr: [
        'معاينة دقيقة وشاملة لتحديد أنواع الحشرات المتواجدة وتتبع بؤر التعشيش والتكاثر.',
        'حقن الجل الألماني في مفاصل المطابخ وخلف الأجهزة لاصطياد وإبادة الصراصير الألمانية.',
        'رش المبيدات السائلة الميكروية عديمة الرائحة في الزوايا والمجاري والمصارف لقطع مسارات الحشرات.',
        'معالجة حرارية ورش تخصصي لمكافحة بق الفراش وبيضه في ثنايا المراتب والأسرة.',
        'إغلاق الفجوات وتقديم تقرير وقائي مع منح شهادة الضمان المعتمدة ومتابعات دورية.'
      ],
      methodPointsEn: [
        'Microscopic inspection tracing insect harborages, moisture leaks, and egg casings.',
        'Precision application of German cockroach bait gel into cabinet hinges and appliance recesses.',
        'Odorless micro-encapsulated barrier spraying along floor perimeters, baseboards, and drains.',
        'Thermal steam treatment and targeted residual spraying for bedbug nymphs and deep egg clusters.',
        'Sealing vulnerable crevices and issuing an official warranty with scheduled follow-up inspections.'
      ],
      featuresAr: [
        'مبيدات معتمدة من وزارة الصحة وهيئة الغذاء والدواء خالية تماماً من الروائح السامة.',
        'إمكانية الرش والمكافحة التامة دون الحاجة لمغادرة المنزل أو تفريغ أواني المطبخ.',
        'جل ألماني فائق الفعالية ينقل العدوى إلى كامل المستعمرة ويقضي على اليرقات والبيوض.',
        'ضمان حقيقي يصل إلى 6 أشهر يشمل إعادة الرش مجاناً في حال ظهور أي حشرة.'
      ],
      featuresEn: [
        'SFDA and Ministry of Health approved odorless formulations safe around children and seniors.',
        'Treatment performed seamlessly without requiring family evacuation or kitchen dish emptying.',
        'Cascade-effect German bait gels eradicating entire cockroach colonies through horizontal transfer.',
        'Comprehensive warranty up to 6 months with free return visits if pests reappear.'
      ],
      tipsAr: [
        { title: 'إغلاق بالوعات ومصارف الحمامات والمطابخ ليلاً', desc: 'تعتبر المصارف المفتوحة المدخل الرئيسي لصراصير المجاري الأمريكية الكبيرة.' },
        { title: 'عدم ترك الأطباق غير المغسولة في الحوض طوال الليل', desc: 'بقايا الأطعمة الرطبة تجذب الصراصير والنمل للتكاثر السريع داخل المطابخ.' },
        { title: 'فحص الحقائب والأمتعة بعد السفر', desc: 'غسيل الملابس بالماء الحار بعد العودة من السفر يمنع نقل بق الفراش من الفنادق إلى البيت.' }
      ],
      tipsEn: [
        { title: 'Cap Floor Drains at Night', desc: 'Ensure all bathroom and kitchen floor drain strainers are tightly capped to block sewer cockroaches.' },
        { title: 'Never Leave Dirty Dishes in Sinks Overnight', desc: 'Food grease and standing water provide ideal overnight sustenance for German cockroaches.' },
        { title: 'Inspect Luggage After Travel', desc: 'Washing travel garments in hot water prevents accidental bedbug hitchhiking from hotel rooms.' }
      ],
      faqsAr: [
        { q: `هل يلزم مغادرة المنزل أثناء رش المبيدات الحشرية؟`, a: `لا داعي للخروج إطلاقاً، نستخدم مبيدات عديمة الرائحة مصرحة صحياً وآمنة تماماً للأطفال والنساء الحوامل وكبار السن.` },
        { q: `هل يشترط إفراغ أواني وأدوات المطبخ قبل الرش؟`, a: `في معظم الحالات نستخدم الجل الموضعي المتقدم الذي لا يتطلب تفريغ الدواليب أو إخراج الأواني، مما يوفر راحتكم.` },
        { q: `ماذا لو ظهرت الحشرات مجدداً خلال فترة الضمان؟`, a: `يشمل الضمان زيارة مجانية فورية وإعادة رش المكان دون أي رسوم إضافية حتى القضاء التام على الحشرات.` }
      ],
      faqsEn: [
        { q: `Do we need to vacate our home during pest spraying?`, a: `No evacuation needed. Our low-toxicity odorless formulations are 100% safe for children and pregnant women.` },
        { q: `Must we empty all kitchen cabinets and cooking pots?`, a: `Not with our targeted gel treatments. We apply micro-dots behind hinges without disturbing your kitchenware.` },
        { q: `What happens if pests reappear during the warranty period?`, a: `Our warranty includes prompt, free booster re-sprays until the infestation is completely eliminated.` }
      ]
    }
  };

  const sCfg = serviceConfigs[serviceId] || serviceConfigs['homes'];

  return {
    serviceId,
    cityId,
    slug: serviceId,
    canonicalPath: `/${cityId}/services/${serviceId}`,
    metaTitle: `${sCfg.nameAr} ${city.titleSuffixAr} | مسك كلين - أفضل ${sCfg.coreKeywordAr}`,
    metaTitleEn: `${sCfg.nameEn} ${city.titleSuffixEn} | Mesk Clean Professional Services`,
    metaDescription: `أفضل ${sCfg.coreKeywordAr} معتمدة تقدم ${sCfg.actionVerbAr} في كافة أحياء ${city.nameAr} بأحدث المعدات وضمان رسمي على الجودة.`,
    metaDescriptionEn: `Premier ${sCfg.nameEn} in ${city.nameEn} by Mesk Clean. Expert solutions covering all districts with modern equipment and certified quality guarantees.`,
    keywords: [
      sCfg.coreKeywordAr,
      `${sCfg.nameAr} ${city.titleSuffixAr}`,
      `أفضل ${sCfg.coreKeywordAr}`,
      `أسعار ${sCfg.nameAr} ${city.titleSuffixAr}`,
      `${sCfg.nameAr} أحياء ${city.nameAr}`
    ],
    heroBadge: `خدمة معتمدة بـ${city.nameAr}`,
    heroBadgeEn: `Certified Service in ${city.nameEn}`,
    heroHeading: `${sCfg.nameAr} ${city.titleSuffixAr} - احترافية وضمان معتمد`,
    heroHeadingEn: `${sCfg.nameEn} ${city.titleSuffixEn} - Certified Excellence`,
    heroSubtitle: sCfg.introOverviewAr,
    heroSubtitleEn: sCfg.introOverviewEn,
    introParagraphs: [
      `تعد خدمة ${sCfg.nameAr} ${city.titleSuffixAr} من الخدمات الأساسية التي تضمن الحفاظ على سلامة ونظافة العقارات السكنية والتجارية. تتميز مدينة ${city.nameAr} ببيئة جغرافية ومناخية تتطلب دراية عميقة، حيث يؤثر ${city.climateContextAr} على سلامة المنشآت ومستوى نقاء الهواء الداخلي. ولهذا السبب، حرصت شركة مسك كلين على توفير حلول تنظيف وصيانة متكاملة تم تطويرها خصيصاً لتناسب خصوصية وأحياء ${city.nameAr}.`,
      `إذا كنت تبحث عن أفضل ${sCfg.coreKeywordAr}، فإننا نضمن لك نتائج تفوق التوقعات بفضل خبرتنا الطويلة في الميدان. نعتمد في مسك كلين على أحدث الأجهزة والمعدات الألمانية والإيطالية المتطورة، وفريق عمل نظامي مدرب على أعلى درجات الدقة والأمانة واحترام خصوصية العائلة والمبنى. نحرص دائماً على تطبيق ${sCfg.actionVerbAr} بأعلى معايير الجودة والسلامة الصحية المعتمدة، مع تقديم ضمان رسمي يضمن رضاكم التام.`,
      `يغطي فريقنا الميداني كافة أحياء ومخططات ${city.nameAr} بسيارات مجهزة بكامل التقنيات لضمان الاستجابة السريعة، سواء كان طلبكم لخدمة عاجلة في نفس اليوم أو وفق جدول دوري منتظم يلائم راحتكم وأوقات عملكم.`
    ],
    introParagraphsEn: [
      `Professional ${sCfg.nameEn} ${city.titleSuffixEn} is an essential service ensuring the hygiene, beauty, and longevity of residential and commercial properties. ${city.nameEn} features distinctive geographical and meteorological conditions where ${city.climateContextEn} demands specialized engineering and cleaning approaches tailored specifically to local residential neighborhoods.`,
      `If you are searching for the premier ${sCfg.coreKeywordEn}, Mesk Clean provides industry-leading results backed by certified quality guarantees. We deploy state-of-the-art European machinery and background-checked technicians committed to precision, privacy, and thoroughness. We execute ${sCfg.actionVerbEn} in strict compliance with Saudi health and safety regulations.`,
      `Our mobile rapid-response units cover all sectors and modern residential schemes across ${city.nameEn} around the clock, providing punctual same-day appointments or scheduled recurring visits tailored to your family convenience.`
    ],
    neighborhoodsAnalysisTitle: `الخصوصية البيئية وتغطية أحياء ${city.nameAr} لخدمة ${sCfg.nameAr}`,
    neighborhoodsAnalysisTitleEn: `Environmental Context & Neighborhood Coverage for ${sCfg.nameEn} in ${city.nameEn}`,
    neighborhoodsAnalysisParagraphs: [
      `تختلف متطلبات ${sCfg.nameAr} بين مختلف قطاعات ومخططات ${city.nameAr}؛ فالمناطق ذات الكثافة العالية والمحاور الحيوية تتطلب معالجات ميكانيكية دورية لمواجهة ${city.localChallengesAr}. يمتلك خبراؤنا فهماً دقيقاً لطبيعة المواد الإنشائية والأرضيات المستخدمة في كل حي، مما يتيح لنا ضبط ضغط الأجهزة ونوعية المنظفات بدقة متناهية لحماية الأسطح الحساسة وتجنب أي أضرار جانبية.`,
      `نصل عبر أسطول سياراتنا المجهزة إلى جميع المواقع دون استثناء، بما يشمل ${city.districts.slice(0, 2).join(' ')} مع الالتزام التام بالمواعيد والسرعة القياسية في تقديم أعلى مستويات الخدمة المعتمدة.`
    ],
    neighborhoodsAnalysisParagraphsEn: [
      `Service requirements for ${sCfg.nameEn} differ across distinct sectors and architectural developments in ${city.nameEn}. Heavy-traffic zones and coastal or mountain corridors require specialized protocols to counter ${city.localChallengesEn}. Our certified technicians analyze building substrates, stone types, and finishes before beginning work, adjusting machinery pressures and chemical formulations to preserve structural beauty.`,
      `Our mobile service vans operate seamlessly across all districts, including ${city.districtsEn.slice(0, 2).join(' ')} ensuring punctual arrival and superior execution on every single visit.`
    ],
    importanceTitle: `أهمية ${sCfg.nameAr} في ${city.nameAr}`,
    importanceTitleEn: `Why ${sCfg.nameEn} is Vital in ${city.nameEn}`,
    importanceContent: [
      `مراعاة التحديات البيئية المحلية: يساهم التنظيف المتخصص في معالجة ${city.localChallengesAr}.`,
      `الحفاظ على قيمة الممتلكات: يمنع التنظيف الدوري تلف الأثاث والأرضيات والأسطح، مما يوفر تكاليف الإصلاح والاستبدال الباهظة.`,
      `توفير بيئة صحية آمنة: القضاء على مسببات الحساسية والجراثيم والروائح لضمان صحة وراحة جميع أفراد الأسرة أو العاملين.`,
      `الامتثال للمواصفات القياسية: تطبيق معايير النظافة والتعقيم المعتمدة من الجهات الصحية والبيئية في المملكة العربية السعودية.`
    ],
    importanceContentEn: [
      `Addressing Regional Environmental Challenges: Targeted cleaning combats ${city.localChallengesEn}.`,
      `Preserving Asset & Property Value: Periodic maintenance prevents costly premature degradation of interior finishes and installations.`,
      `Promoting a Healthy Sanctuary: Eliminating allergens, dust mites, and bacteria to foster healthy, restful living environments.`,
      `SASO Compliance & Safety: Adhering strictly to Saudi standards for sanitation, chemical safety, and potable water integrity.`
    ],
    equipmentTitle: `المعدات والتقنيات والمواصفات القياسية المعتمدة ${city.titleSuffixAr}`,
    equipmentTitleEn: `Approved Industrial Equipment & SASO Standards ${city.titleSuffixEn}`,
    equipmentParagraphs: [
      `تعتمد مسك كلين في تقديم خدمة ${sCfg.nameAr} ${city.titleSuffixAr} على ترسانة من أحدث الماكينات الألمانية والإيطالية المصممة للخدمة الشاقة. تشمل معداتنا ماكينات الغسيل بالضغط العالي بضغط مدروس، ومكانس الشفط التوربيني المزودة بفلاتر HEPA لاحتجاز 99.97% من الجسيمات المجهرية ومسببات الحساسية، وأجهزة البخار الحراري التي تصل حرارتها إلى 140 درجة مئوية لضمان التعقيم التام دون الحاجة للكيماويات الضارة.`,
      `كافة المحاليل والمنظفات ومواد التطهير المستخدمة مصرحة من هيئة الغذاء والدواء ومطابقة للمواصفات القياسية السعودية (SASO). نلتزم بمواد تنظيف صديقة للبيئة، قابلة للتحلل الحيوي، عديمة الرائحة، وغير سامة، مما يضمن أماناً مطلقاً للأطفال وكبار السن وأصحاب الحساسية الصدرية والحيوانات الأليفة فور اكتمال الخدمة.`
    ],
    equipmentParagraphsEn: [
      `For ${sCfg.nameEn} ${city.titleSuffixEn}, Mesk Clean deploys advanced heavy-duty European machinery. Our inventory features calibrated pressure injectors, multi-stage turbine vacuum extractors equipped with HEPA filters capturing 99.97% of airborne micro-particulates, and industrial dry steam boilers operating at 140°C for deep microbial thermal destruction without surface saturation.`,
      `All detergents, degreasers, and disinfectant compounds utilized are certified by the Saudi Food & Drug Authority (SFDA) and conform to SASO quality benchmarks. We exclusively deploy biodegradable, non-corrosive, and low-VOC formulas that ensure 100% safety for infants, seniors, allergy sufferers, and indoor air quality immediately upon completion.`
    ],
    workflowTitle: `طريقة وخطوات عمل ${sCfg.nameAr} ${city.titleSuffixAr}`,
    workflowTitleEn: `Our Step-by-Step ${sCfg.nameEn} Workflow ${city.titleSuffixEn}`,
    workflowSteps: sCfg.methodPointsAr.map((desc, idx) => ({
      number: idx + 1,
      title: `المرحلة ${idx + 1}`,
      titleEn: `Phase ${idx + 1}`,
      description: desc,
      descriptionEn: sCfg.methodPointsEn[idx] || desc
    })),
    featuresTitle: `مميزات مسك كلين في ${sCfg.nameAr} ${city.titleSuffixAr}`,
    featuresTitleEn: `Why Mesk Clean Stands Out for ${sCfg.nameEn} ${city.titleSuffixEn}`,
    features: sCfg.featuresAr.map((desc, idx) => ({
      title: `ميزة احترافية ${idx + 1}`,
      titleEn: `Advantage ${idx + 1}`,
      description: desc,
      descriptionEn: sCfg.featuresEn[idx] || desc
    })),
    districtsTitle: `أحياء ومناطق تغطية الخدمة في ${city.nameAr}`,
    districtsTitleEn: `${city.nameEn} Districts Covered by Our Mobile Teams`,
    districtsIntro: `تصل فرق مسك كلين المتنقلة والمجهزة بأحدث الآلات إلى كافة أحياء ومخططات ${city.nameAr} على مدار الساعة:`,
    districtsIntroEn: `Our fully equipped rapid response mobile vans cover every district and suburb across ${city.nameEn}:`,
    districtsList: city.districts,
    districtsListEn: city.districtsEn,
    tipsTitle: `نصائح وإرشادات هامة للحفاظ على النتائج ${city.titleSuffixAr}`,
    tipsTitleEn: `Proactive Care Tips from Our Experts ${city.titleSuffixEn}`,
    tipsIntro: `يقدم لكم خبراء مسك كلين أهم الإرشادات التي تضمن بقاء منشأتكم في أبهى صورة:`,
    tipsIntroEn: `Practical recommendations from Mesk Clean hygiene specialists:`,
    tipsList: sCfg.tipsAr.map((item, idx) => ({
      title: item.title,
      titleEn: sCfg.tipsEn[idx]?.title || item.title,
      text: item.desc,
      textEn: sCfg.tipsEn[idx]?.desc || item.desc
    })),
    faqsTitle: `الأسئلة الشائعة حول ${sCfg.nameAr} ${city.titleSuffixAr}`,
    faqsTitleEn: `Frequently Asked Questions - ${sCfg.nameEn} ${city.titleSuffixEn}`,
    faqs: sCfg.faqsAr.map((item, idx) => ({
      question: item.q,
      questionEn: sCfg.faqsEn[idx]?.q || item.q,
      answer: item.a,
      answerEn: sCfg.faqsEn[idx]?.a || item.a
    }))
  };
};
