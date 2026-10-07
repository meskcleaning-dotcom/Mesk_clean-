import { CityId } from '../context/CityRouteContext';

export interface WorkflowStep {
  number: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
}

export interface ServiceFeatureItem {
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
}

export interface ServiceTipItem {
  title: string;
  titleEn: string;
  text?: string;
  textEn?: string;
  description?: string;
  descriptionEn?: string;
}

export interface ServiceFAQItem {
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
}

export interface CityServicePageData {
  serviceId: string;
  cityId: CityId;
  slug: string;
  canonicalPath: string;
  metaTitle: string;
  metaTitleEn: string;
  metaDescription: string;
  metaDescriptionEn: string;
  keywords: string[];
  heroBadge: string;
  heroBadgeEn: string;
  heroHeading: string;
  heroHeadingEn: string;
  heroSubtitle: string;
  heroSubtitleEn: string;
  introParagraphs: string[];
  introParagraphsEn: string[];
  neighborhoodsAnalysisTitle?: string;
  neighborhoodsAnalysisTitleEn?: string;
  neighborhoodsAnalysisParagraphs?: string[];
  neighborhoodsAnalysisParagraphsEn?: string[];
  importanceTitle: string;
  importanceTitleEn: string;
  importanceContent: string[];
  importanceContentEn: string[];
  equipmentTitle?: string;
  equipmentTitleEn?: string;
  equipmentParagraphs?: string[];
  equipmentParagraphsEn?: string[];
  workflowTitle: string;
  workflowTitleEn: string;
  workflowSteps: WorkflowStep[];
  featuresTitle: string;
  featuresTitleEn: string;
  features: ServiceFeatureItem[];
  districtsTitle: string;
  districtsTitleEn: string;
  districtsIntro: string;
  districtsIntroEn: string;
  districtsList: string[];
  districtsListEn: string[];
  tipsTitle: string;
  tipsTitleEn: string;
  tipsIntro: string;
  tipsIntroEn: string;
  tipsList: ServiceTipItem[];
  faqsTitle: string;
  faqsTitleEn: string;
  faqs: ServiceFAQItem[];
}

export const CITY_SERVICES_MAP: Record<string, Partial<Record<CityId, CityServicePageData>>> = {
  // 1. تنظيف المنازل (Home Cleaning)
  'homes': {
    jeddah: {
      serviceId: 'homes',
      cityId: 'jeddah',
      slug: 'homes',
      canonicalPath: '/jeddah/services/homes',
      metaTitle: 'شركة تنظيف منازل بجدة | مسك كلين - نظافة شاملة وتعقيم بأحدث المعدات',
      metaTitleEn: 'Home Cleaning Company in Jeddah | Mesk Clean - Deep Sanitization',
      metaDescription: 'أفضل شركة تنظيف منازل بجدة متخصصة في تنظيف الشقق والمنازل وإزالة الرطوبة والغبار البحري بكافة أحياء جدة (الروضة، الشاطئ، أبحر، الصفا) بأحدث المعدات ومواد آمنة.',
      metaDescriptionEn: 'Top home cleaning services in Jeddah by Mesk Clean. Deep cleaning for apartments and homes tailored to coastal humidity and dust across all Jeddah districts 24/7.',
      keywords: ['شركة تنظيف منازل بجدة', 'تنظيف منازل بجدة', 'شركة تنظيف شقق بجدة', 'تنظيف منازل شمال جدة', 'أفضل شركة تنظيف منازل في جدة'],
      heroBadge: 'خدمة معتمدة بمدينة جدة',
      heroBadgeEn: 'Certified Service in Jeddah',
      heroHeading: 'شركة تنظيف منازل بجدة - عناية شاملة وعميقة تدوم طويلاً',
      heroHeadingEn: 'Home Cleaning Services in Jeddah - Complete Deep Care',
      heroSubtitle: 'نقدم في مسك كلين حلول تنظيف متكاملة لمنازل وشقق جدة تراعي طبيعة المناخ الساحلي، معقمات معتمدة وفريق فني متمرس يضمن لك بيئة صحية راقية.',
      heroSubtitleEn: 'Mesk Clean delivers specialized residential cleaning for Jeddah homes addressing coastal humidity and airborne salts with certified eco-friendly sanitizers.',
      introParagraphs: [
        'تعتبر مدينة جدة عروس البحر الأحمر ذات طابع عمراني وسكني فريد، إلا أن موقعها الساحلي يفرض تحديات بيئية دائمة على نظافة المنازل؛ حيث تتسبب نسب الرطوبة المرتفعة والرياح البحرية المحملة برذاذ الملح والأتربة الدقيقة في سرعة اتساخ النوافذ، وتراكم الغبار على الأثاث، وظهور البقع الدقيقة على الجدران والأرضيات. من هنا تبرز الحاجة إلى شركة تنظيف منازل متخصصة بجدة تدرك تماماً هذه العوامل وتستخدم تقنيات حديثة تتجاوز التنظيف السطحي التقليدي.',
        'في مسك كلين، صممنا برنامج تنظيف المنازل بجدة ليكون حلاً شاملاً لكل ركن في بيتك. نحن لا نكتفي بمسح الغبار، بل نستخدم أجهزة شفط توربينية ذات فلاتر HEPA لاحتجاز الجزيئات المجهرية ومسببات الحساسية، بالإضافة إلى ماكينات فرك وتلميع السيراميك والبورسلين والرخام التي تعيد للأرضيات بريقها الفندقي الأصلي. يعمل فريقنا وفق معايير نظافة دولية تضمن راحة بالك وحماية أفراد أسرتك.'
      ],
      introParagraphsEn: [
        'Jeddah coastal climate brings unique environmental challenges to households. High coastal humidity coupled with salt-laden sea breezes and fine sand deposits leads to persistent window grime, musty indoor odors, and accelerated surface dust accumulation. Routine domestic tidying often fails to address deep-seated marine humidity residue.',
        'Mesk Clean provides professional home cleaning in Jeddah with specialized high-pressure vacuum extraction, hospital-grade eco-disinfectants, and advanced floor restoration equipment designed specifically for Jeddah residential living.'
      ],
      importanceTitle: 'أهمية التنظيف الاحترافي للمنازل في بيئة جدة الساحلية',
      importanceTitleEn: 'Why Professional Home Cleaning Matters in Coastal Jeddah',
      importanceContent: [
        'التخلص من الأملاح البحرية العالقة: يحمل هواء البحر رذاذاً ملحياً يتفاعل مع الرطوبة ويلتصق بالنوافذ الزجاجية والإطارات المعدنية، مما يسبب بهتان الألوان وتآكل الألومنيوم إن لم يُنظف بمواد متخصصة.',
        'الحد من عث الغبار ونمو الفطريات: الرطوبة المرتفعة في منازل جدة، خاصة في الغرف المغلقة وأنظمة التكييف، تشكل بيئة خصبة للبكتيريا والفطريات، مما يتطلب تنظيفاً بالبخار والتعقيم الحراري لحماية صحة الأطفال وأصحاب الحساسية.',
        'المحافظة على قيمة الأثاث والرخام: استخدام المنظفات الكيميائية العشوائية يضر بالرخام الطبيعي والأقمشة؛ لذا نعتمد محاليل معتدلة الحموضة مطابقة للمواصفات القياسية السعودية (SASO).'
      ],
      importanceContentEn: [
        'Neutralizing Airborne Marine Salts: Coastal moisture carries salt ions that dull architectural glass and corrode window tracks if neglected.',
        'Eradicating Dust Mites & Fungal Spores: Consistent indoor humidity promotes mold spores in crevices, requiring specialized thermal steam sanitation.',
        'Preserving Natural Marble and Furnishings: We deploy SASO-approved pH-neutral cleaning agents that protect delicate Saudi marble flooring.'
      ],
      workflowTitle: 'خطة عمل تنظيف المنازل خطوة بخطوة في جدة',
      workflowTitleEn: 'Our Systematic Home Cleaning Workflow in Jeddah',
      workflowSteps: [
        {
          number: 1,
          title: 'المعاينة وتحديد الأولويات',
          titleEn: 'Inspection & Priority Mapping',
          description: 'فحص مساحات المنزل وتحديد نوعيات الأرضيات والأسطح الحساسة لاختيار المنظفات والمعدات الأنسب.',
          descriptionEn: 'Assessing property size, flooring types, and delicate surfaces to tailor our crew and equipment.'
        },
        {
          number: 2,
          title: 'شفط الغبار والأتربة العميقة',
          titleEn: 'Deep HEPA Vacuuming',
          description: 'إزالة الأتربة من الزوايا والمجاري الهوائية وخلف الدواليب والأسرة بمكنسات صناعية فائقة الشفط.',
          descriptionEn: 'Extracting airborne particulates and settled dust from ceiling corners, tracks, and beneath furniture.'
        },
        {
          number: 3,
          title: 'جلي وتلميع الأرضيات',
          titleEn: 'Floor Scrubbing & Polishing',
          description: 'تنظيف السيراميك والبورسلين والرخام بماكينات الفرك الدوارة لإزالة البقع المستعصية وتفتيح الفواصل (الترويبة).',
          descriptionEn: 'Mechanical single-disc scrubbing removing persistent stains and restoring original grout brightness.'
        },
        {
          number: 4,
          title: 'تلميع النوافذ والواجهات الزجاجية',
          titleEn: 'Glass & Window Track Detailing',
          description: 'تنظيف مجاري النوافذ الزجاجية وإزالة الأتربة الملتصقة وتلميع الزجاج بمساحات مايكروفايبر مانعة للخطوط.',
          descriptionEn: 'Flushing window tracks of salty silt and treating window panes with streak-free anti-static agents.'
        },
        {
          number: 5,
          title: 'التعقيم والتعطير الشامل',
          titleEn: 'Final Sterilization & Deodorization',
          description: 'تعقيم مقابض الأبواب والمفاتيح والأسطح الأكثر لمساً بمطهرات آمنة، متبوعة بتعطير بأرقى الزيوت الطبيعية.',
          descriptionEn: 'Sanitizing high-touch door handles and counters, finished with our signature long-lasting fragrance.'
        }
      ],
      featuresTitle: 'مميزات شركة مسك كلين في تنظيف منازل جدة',
      featuresTitleEn: 'Why Choose Mesk Clean for Jeddah Home Cleaning',
      features: [
        {
          title: 'عمالة نظامية ومدربة باحتراف',
          titleEn: 'Vetted & Highly Trained Crew',
          description: 'كوادر نظامية موثوقة تخضع لتدريب مكثف على بروتوكولات الأمانة والسرعة والدقة العالية.',
          descriptionEn: 'Certified, respectful, and background-checked technicians trained in luxury residential standards.'
        },
        {
          title: 'منظفات آمنة ومطابقة لـ SASO',
          titleEn: 'Certified Safe Detergents',
          description: 'نستخدم محاليل تنظيف صديقة للبيئة خالية من الروائح النفاذة، آمنة تماماً على الأطفال والحيوانات الأليفة.',
          descriptionEn: 'Biodegradable, non-toxic detergents completely safe for children, pets, and indoor air.'
        },
        {
          title: 'التزام صارم بالمواعيد على مدار 24/7',
          titleEn: 'Punctual 24/7 Availability',
          description: 'سياراتنا المجهزة تصل إلى باب منزلك في الموعد المحدد بكل دقة دون أي تأخير.',
          descriptionEn: 'Fully equipped mobile units dispatched promptly to your location across all Jeddah neighborhoods.'
        },
        {
          title: 'ضمان الجودة ورضا العميل',
          titleEn: '100% Satisfaction Guarantee',
          description: 'لا نغادر الموقع إلا بعد معاينتك الشاملة لكل غرفة ورضاك التام عن مستوى النظافة واللمعان.',
          descriptionEn: 'We conduct a walk-through inspection with you before completion to ensure flawless results.'
        }
      ],
      districtsTitle: 'أحياء مدينة جدة التي نغطيها بخدمة تنظيف المنازل',
      districtsTitleEn: 'Jeddah Districts Covered by Our Home Cleaning Teams',
      districtsIntro: 'تصل فرق مسك كلين إلى كافة أحياء ومناطق محافظة جدة بسيارات مجهزة بكامل الآلات والمعدات:',
      districtsIntroEn: 'Our rapid response fleet operates across all sectors of Jeddah without exception:',
      districtsList: [
        'أحياء شمال جدة: الروضة، الشاطئ، المرجان، البساتين، المحمدية، أبحر الشمالية، أبحر الجنوبية، النعيم، النهضة.',
        'أحياء وسط جدة: الحمراء، الزهراء، السلامة، الأندلس، مشرفة، العزيزية، الرحاب.',
        'أحياء شرق وجنوب جدة: الصفا، المروة، السامر، الحمدانية، الفلاح، المنار، السليمانية، النسيم.'
      ],
      districtsListEn: [
        'North Jeddah: Al-Rawdah, Al-Shati, Al-Murjan, Al-Basateen, Al-Mohammediyah, North & South Obhur, Al-Naeem.',
        'Central Jeddah: Al-Hamra, Al-Zahra, Al-Salamah, Al-Andalus, Mushrefah, Al-Aziziyah, Al-Rehab.',
        'East & South Jeddah: Al-Safa, Al-Marwah, Al-Samer, Al-Hamdaniyah, Al-Falah, Al-Manar, Al-Sulaimaniyah.'
      ],
      tipsTitle: 'نصائح ذهبية للحفاظ على نظافة منزلك في أجواء جدة',
      tipsTitleEn: 'Expert Advice for Keeping Your Jeddah Home Fresh and Clean',
      tipsIntro: 'يقدم لكم خبراء مسك كلين إرشادات عملية تساهم في بقاء المنزل مرتباً ونقياً لأطول فترة ممكنة:',
      tipsIntroEn: 'Practical guidance from Mesk Clean hygiene experts tailored to coastal homes:',
      tipsList: [
        {
          title: 'إحكام غلق النوافذ خلال أوقات الغبار',
          titleEn: 'Seal Windows During Dust Breezes',
          description: 'تأكد من سلامة الأشرطة المطاطية حول إطارات النوافذ لمنع تسرب الأتربة الدقيقة الناتجة عن حركة الرياح.',
          descriptionEn: 'Inspect rubber weather-strips around aluminum windows to stop fine dust infiltration.'
        },
        {
          title: 'تنظيف فلاتر المكيفات بصورة دورية',
          titleEn: 'Wash AC Filters Monthly',
          description: 'غسيل فلاتر التكييف شهرياً يخفف من إعادة تدوير الغبار والروائح الكتمة داخل غرف المعيشة.',
          descriptionEn: 'Rinsing indoor AC mesh filters monthly reduces airborne allergens and musty coastal odor buildup.'
        },
        {
          title: 'معالجة البقع فور حدوثها',
          titleEn: 'Prompt Spill Spot Treatment',
          description: 'في حال انسكاب القهوة أو السوائل على الأرضيات أو الكنب، امسحها فوراً بقطعة قطنية جافة لتجنب تغلغلها.',
          descriptionEn: 'Blot coffee or liquid spills immediately with clean microfiber to prevent staining porous grout.'
        }
      ],
      faqsTitle: 'الأسئلة الشائعة حول تنظيف المنازل بجدة',
      faqsTitleEn: 'Frequently Asked Questions - Jeddah Home Cleaning',
      faqs: [
        {
          question: 'كم من الوقت يستغرقه تنظيف المنزل في جدة؟',
          questionEn: 'How long does a home cleaning service take in Jeddah?',
          answer: 'يعتمد ذلك على مساحة المنزل وحجم الأعمال المطلوبة؛ تستغرق الشقة المتوسطة عادة من 3 إلى 5 ساعات بفريق مكون من 3 إلى 5 فنيين مجهزين بأحدث الأدوات.',
          answerEn: 'Depending on property size and condition, an average apartment takes 3 to 5 hours with a 3-5 member crew.'
        },
        {
          question: 'هل توفرون مواد وأدوات التنظيف أم يتعين علي توفيرها؟',
          questionEn: 'Do you bring all cleaning tools and supplies?',
          answer: 'فريق مسك كلين يأتي مجهزاً بجميع الماكينات الصناعية، والمكانس، وأدوات التلميع، ومواد التنظيف والتعقيم المعتمدة دون الحاجة لتوفير أي شيء من طرفكم.',
          answerEn: 'Mesk Clean provides all heavy-duty industrial machinery, vacuum extractors, microfiber kits, and approved detergents.'
        },
        {
          question: 'هل تقدمون الخدمة في نفس اليوم في أحياء جدة؟',
          questionEn: 'Can I schedule a same-day cleaning service in Jeddah?',
          answer: 'نعم، نوفر مواعيد طارئة ونفس اليوم بحسب توفر الفرق في منطقتك، مع إمكانية الحجز المسبق لضمان الوقت المناسب لكم.',
          answerEn: 'Yes, same-day appointments are available based on regional crew routing across Jeddah.'
        }
      ]
    },
    makkah: {
      serviceId: 'homes',
      cityId: 'makkah',
      slug: 'homes',
      canonicalPath: '/makkah/services/homes',
      metaTitle: 'شركة تنظيف منازل بمكة المكرمة | مسك كلين - نظافة وتعقيم متكامل',
      metaTitleEn: 'Home Cleaning Company in Makkah | Mesk Clean - Holy City Services',
      metaDescription: 'شركة تنظيف منازل بمكة المكرمة معتمدة لغسيل وتعقيم الشقق والبيوت في العوالي والشوقية والزايدي والنسيم بأحدث ماكينات البخار والتعقيم المعتمد.',
      metaDescriptionEn: 'Professional home cleaning services in Makkah by Mesk Clean. Deep cleaning and sanitization for residences across Al-Awali, Al-Shawqiyyah, and all Makkah districts.',
      keywords: ['شركة تنظيف منازل بمكة', 'تنظيف منازل بمكة المكرمة', 'شركة تنظيف شقق بمكة', 'تنظيف منازل العوالي مكة', 'أفضل شركة تنظيف بمكة'],
      heroBadge: 'خدمة معتمدة بمكة المكرمة',
      heroBadgeEn: 'Certified Service in Holy Makkah',
      heroHeading: 'شركة تنظيف منازل بمكة المكرمة - نظافة نقية تليق بأطهر البقاع',
      heroHeadingEn: 'Home Cleaning Services in Holy Makkah - Pure Cleanliness',
      heroSubtitle: 'نقدم لأهالي العاصمة المقدسة وضيوفها الكرام خدمات تنظيف شقق ومنازل فائقة الجودة تناسب الطبيعة الجبلية ودرجات الحرارة المرتفعة ومواسم الزيارات المباركة.',
      heroSubtitleEn: 'Mesk Clean offers comprehensive residential cleaning tailored to Makkah distinctive mountainous climate, summer heat, and spiritual hospitality standards.',
      introParagraphs: [
        'تتميز مكة المكرمة بطبيعتها الجبلية وتضاريسها المهيبة، مما يجعل منازلها عُرضة لتراكم الأتربة الجافة الدقيقة الصاعدة من المنحدرات الصخرية، فضلاً عن درجات الحرارة المرتفعة خلال فصول السنة الطويلة. كما تشهد المنازل في مكة نشاطاً مكثفاً واستقبالاً متواصلاً للأهل والضيوف والمعتمرين في المواسم الدينية المباركة كرمضان وموسم الحج، مما يولد حاجة ماسة للتنظيف العميق المستمر الذي يحافظ على بهاء المنزل وطهارته.',
        'توفر شركة مسك كلين بمكة المكرمة باقة تنظيف متكاملة تشمل جلي البلاط والرخام، إزالة الأتربة المستعصية من الأسقف والشبابيك، وتعقيم المطابخ ودورات المياه بأقوى المطهرات المصرحة من وزارة الصحة وهيئة الغذاء والدواء. نعتمد فرق عمل سريعة ومنظمة تدرك قدسية المكان وتلتزم بأعلى درجات الانضباط والمهنية.'
      ],
      introParagraphsEn: [
        'Holy Makkah unique mountain topography and high summer temperatures create distinctive domestic cleaning needs. Dry rock dust settles quickly into window tracks and living rooms, while peak religious seasons (Hajj & Umrah) demand continuous hospitality readiness for visiting pilgrims.',
        'Mesk Clean delivers rigorous home cleaning throughout Makkah, deploying heavy-duty floor restoration machinery, dust-filtration vacuum systems, and certified hospital-grade sanitization protocols.'
      ],
      importanceTitle: 'لماذا يحتاج منزلك في مكة المكرمة إلى تنظيف احترافي؟',
      importanceTitleEn: 'Why Makkah Homes Need Specialized Professional Cleaning',
      importanceContent: [
        'مواجهة الغبار الجبلي الناعم: الرياح المحلية في مكة تنقل ذرات رملية دقيقة تتسلل عبر فتحات التهوية وتستقر في زوايا الغرف والأثاث، مما يتطلب سحب غبار عميق.',
        'الاستعداد لمواسم الضيافة والعمرة: تنظيف المنزل وتعقيمه قبل وبعد استقبال الضيوف يضمن بيئة مريحة وصحية تبعث على السكينة والاطمئنان.',
        'حماية أنظمة التكييف والأرضيات: تراكم الغبار الجاف يجهد أجهزة التكييف ويفقد بلاط الأرضيات لمعانه الطبيعي، لذا نستخدم تقنيات التلميع الكريستالي.'
      ],
      importanceContentEn: [
        'Combating Fine Mountain Dust: Ambient winds transport microscopic rock dust that infiltrates ventilation channels and dulls surfaces.',
        'Seasonal Readiness for Pilgrims: Thorough sanitization before and after hosting religious visitors ensures hygienic hospitality.',
        'Protecting Cooling Systems and Tiles: Heavy dust burdens split ACs; mechanical floor buffing restores tile reflection.'
      ],
      workflowTitle: 'مراحل تقديم خدمة تنظيف المنازل في مكة المكرمة',
      workflowTitleEn: 'Our Makkah Home Cleaning Execution Steps',
      workflowSteps: [
        {
          number: 1,
          title: 'الوصول الميداني والتقييم',
          titleEn: 'On-Site Arrival & Inspection',
          description: 'وصول الفريق بسيارات مجهزة إلى منزلك بمكة ومعاينة المساحة وتحديد متطلبات العمل.',
          descriptionEn: 'Punctual arrival of our mobile van at your Makkah residence to inspect surface priorities.'
        },
        {
          number: 2,
          title: 'إزالة الغبار من المرتفعات والجدران',
          titleEn: 'High-Reach Dusting',
          description: 'تنظيف الجدران والأسقف والنجف ووحدات الإنارة بمكانس ذات امتدادات مخصصة للمنازل ذات الأسقف العالية.',
          descriptionEn: 'Eliminating cobwebs and settled dust from chandeliers, cornice moldings, and high walls.'
        },
        {
          number: 3,
          title: 'غسيل وتلميع الأرضيات',
          titleEn: 'Rotary Floor Washing & Grout Revival',
          description: 'جلي السيراميك والرخام والبلاط بماكينات احترافية تنظف الفواصل وتزيل الدهون والشوائب.',
          descriptionEn: 'Deep mechanical buffing of ceramic and marble floors, sanitizing porous grout lines.'
        },
        {
          number: 4,
          title: 'تنظيف عميق للمطابخ ودورات المياه',
          titleEn: 'Sanitary & Kitchen Decontamination',
          description: 'إزالة الترسبات الكلسية والدهون وتعقيم الأسطح بمطهرات معتمدة تضمن أعلى درجات الطهارة والنقاء.',
          descriptionEn: 'Limescale removal, ceramic descaling, and surgical-grade sanitation for sanitary areas.'
        },
        {
          number: 5,
          title: 'المسح النهائي والتعطير بمستخلصات المسك',
          titleEn: 'Musk Fragrance & Inspection',
          description: 'تعطير المنزل بزيوت المسك النقية وتفقد كل ركن مع صاحب المنزل للتأكد من الرضا التام.',
          descriptionEn: 'Signature authentic musk atomization and final quality walkthrough with the client.'
        }
      ],
      featuresTitle: 'أسباب اختيار مسك كلين لتنظيف منزلك في مكة',
      featuresTitleEn: 'Why Mesk Clean is the Preferred Choice in Makkah',
      features: [
        {
          title: 'فريق عمل أمين ومحترف',
          titleEn: 'Trustworthy & Respectful Staff',
          description: 'نلتزم التزاماً مطلقاً بخصوصية المنازل وحرمتها وأخلاقيات التعامل الإسلامي الرفيع.',
          descriptionEn: 'Strict adherence to household privacy, safety, and courteous service etiquette.'
        },
        {
          title: 'مرونة في أوقات العمل والمواسم',
          titleEn: 'Flexible Seasonal Scheduling',
          description: 'نعمل على مدار الساعة بما يتلاءم مع أوقات الصلوات والراحة والمواسم المزدحمة في مكة.',
          descriptionEn: '24/7 operating availability planned harmoniously around prayer times and holy seasons.'
        },
        {
          title: 'أجهزة ألمانية وإيطالية حديثة',
          titleEn: 'State-of-the-Art Equipment',
          description: 'ماكينات بخار وجلي سيراميك متطورة تعطي نتائج فورية مبهرة دون إحداث فوضى في المنزل.',
          descriptionEn: 'Advanced European vacuum extraction and rotary scrubbing tools for pristine results.'
        },
        {
          title: 'وضوح ومصداقية تامة في كافة التفاصيل',
          titleEn: 'Transparent and Honest Service',
          description: 'التزام تام بكافة بنود الاتفاق المسبق وتوفير المنظفات والمعدات المعتمدة دون أي مفاجآت.',
          descriptionEn: 'Full commitment to agreed scope with certified equipment and detergents without any surprises.'
        }
      ],
      districtsTitle: 'نطاق تغطيتنا في أحياء مكة المكرمة',
      districtsTitleEn: 'Makkah Districts Served by Mesk Clean',
      districtsIntro: 'تغطي خدماتنا لتنظيف المنازل كافة أحياء مكة المكرمة والمخططات السكنية الحديثة:',
      districtsIntroEn: 'Our mobile cleaning crews cover all residential sectors of Holy Makkah:',
      districtsList: [
        'أحياء جنوب وشرق مكة: العوالي، بطحاء قريش، الشوقية، الكعكية، النسيم، العزيزية، الهجرة.',
        'أحياء وسط وغرب مكة: الرصيفة، الزاهر، الخالدية، النزهة، الزايدي (الحمراء)، الإسكان.',
        'أحياء شمال مكة: التنعيم، العمرة، جبل النور، الشرائع، مخططات ولي العهد.'
      ],
      districtsListEn: [
        'South & East Makkah: Al-Awali, Batha Quraish, Al-Shawqiyyah, Al-Kakiyyah, Al-Naseem, Al-Aziziyah.',
        'Central & West Makkah: Al-Rusaifah, Al-Zahir, Al-Khalidiyah, Al-Nuzha, Al-Zaydi, Al-Iskan.',
        'North Makkah: Al-Tan’eem, Al-Umrah, Jabal Al-Nour, Al-Sharaye, Wali Al-Ahad schemes.'
      ],
      tipsTitle: 'إرشادات هامة لنظافة مستدامة لمنازل مكة المكرمة',
      tipsTitleEn: 'Maintenance Recommendations for Makkah Homeowners',
      tipsIntro: 'خطوات بسيطة تضمن سلامة أثاثك وأرضياتك في بيئة العاصمة المقدسة:',
      tipsIntroEn: 'Straightforward preventative steps to keep your Makkah home pristine:',
      tipsList: [
        {
          title: 'تنظيف مداخل البيت ووضع سجادات حماية',
          titleEn: 'Place Heavy-Duty Entrance Mats',
          description: 'تساعد سجادات المداخل المزدوجة في حجز 80% من الأتربة الجبلية الخشنة قبل دخولها إلى الصالات.',
          descriptionEn: 'Double entrance walk-off mats trap coarse grit and dust before reaching interior tiles.'
        },
        {
          title: 'التهوية الصباحية الباكرة فقط',
          titleEn: 'Ventilate Early in the Morning',
          description: 'افتح النوافذ للتهوية في ساعات الصباح الباكر وتجنب فتحها وقت اشتداد حرارة الظهيرة والرياح المحملة بالغبار.',
          descriptionEn: 'Air out rooms only during early morning hours before midday heat and wind pick up.'
        },
        {
          title: 'استخدام الممسحة الدوارة المايكروفايبر',
          titleEn: 'Use Damp Microfiber Mops',
          description: 'المسح الرطب بالمايكروفايبر يلتقط الأتربة الجافة بدلاً من تطايرها في الهواء كالمكانس التقليدية.',
          descriptionEn: 'Microfiber trapping mops lift electrostatic dust without dispersing it back into the air.'
        }
      ],
      faqsTitle: 'أسئلة شائعة حول تنظيف المنازل في مكة',
      faqsTitleEn: 'Makkah Home Cleaning FAQs',
      faqs: [
        {
          question: 'هل يمكنكم تنظيف المنزل أثناء تواجد الأسرة؟',
          questionEn: 'Can cleaning be done while family members are at home?',
          answer: 'نعم بالتأكيد، فرقنا مدربة على العمل المنظم بهدوء واحترافية وبشكل تدريجي غرفة تلو الأخرى للحفاظ على خصوصيتكم وراحتكم.',
          answerEn: 'Yes, our technicians work quietly, systematically room-by-room to respect your privacy and comfort.'
        },
        {
          question: 'هل تقدمون خدمات تنظيف خاصة بموسمي رمضان والحج؟',
          questionEn: 'Do you offer special packages during Ramadan and Hajj?',
          answer: 'نعم، نوفر باقات موسمية متميزة تشمل التنظيف العميق قبل رمضان، وتجهيز المنازل لاستقبال المعتمرين والحجاج بأعلى معايير الإتقان.',
          answerEn: 'Yes, we provide specialized seasonal preparation and post-season deep cleaning packages.'
        },
        {
          question: 'هل يشمل تنظيف المنزل غسيل النوافذ الخارجية؟',
          questionEn: 'Does the service include exterior window washing?',
          answer: 'نعم، يشمل تنظيف النوافذ الداخلية ومجاري الألمنيوم، بالإضافة إلى الواجهات الخارجية التي يمكن الوصول إليها بأمان عبر معداتنا.',
          answerEn: 'We clean interior glass, aluminum tracks, and accessible exterior window panes safely.'
        }
      ]
    },
    rabigh: {
      serviceId: 'homes',
      cityId: 'rabigh',
      slug: 'homes',
      canonicalPath: '/rabigh/services/homes',
      metaTitle: 'شركة تنظيف منازل برابغ | مسك كلين - نظافة احترافية للشقق والبيوت',
      metaTitleEn: 'Home Cleaning Company in Rabigh | Mesk Clean - Coastal Industrial Zone',
      metaDescription: 'أفضل شركة تنظيف منازل برابغ لتنظيف الشقق والمنازل وإزالة الغبار والرمال الساحلية في المرجانية والنزيلة والنعيم بحلول متطورة وضمان معتمد.',
      metaDescriptionEn: 'Premier residential home cleaning in Rabigh by Mesk Clean. Deep cleaning for apartments and residences in Al-Merghaniya, Al-Nazilah, and surrounding communities.',
      keywords: ['شركة تنظيف منازل برابغ', 'تنظيف منازل برابغ', 'شركة تنظيف شقق برابغ', 'تنظيف منازل المرجانية رابغ', 'أفضل شركة تنظيف في رابغ'],
      heroBadge: 'خدمة معتمدة بمحافظة رابغ',
      heroBadgeEn: 'Certified Service in Rabigh Province',
      heroHeading: 'شركة تنظيف منازل برابغ - حماية متكاملة من الغبار الساحلي',
      heroHeadingEn: 'Home Cleaning Services in Rabigh - Complete Coastal Defense',
      heroSubtitle: 'نوفر لسكان رابغ والعاملين بالمنطقة الصناعية ومدينة الملك عبدالله الاقتصادية خدمات تنظيف منازل دقيقة تعالج تراكم الرمال والرطوبة باحترافية وسرعة.',
      heroSubtitleEn: 'Mesk Clean provides advanced residential cleaning tailored to Rabigh coastal wind patterns, sand drift, and industrial corridor living.',
      introParagraphs: [
        'تقع محافظة رابغ على الساحل الغربي بين جدة وينبع، وتتميز بنموها الاقتصادي السريع وموقعها القريب من مدينة الملك عبدالله الاقتصادية ومجمع بترورابغ. تفرض الطبيعة الجغرافية لرابغ، التي تجمع بين الرياح الساحلية القوية والأراضي الرملية المفتوحة، تحدياً مستمراً لسكان المنازل والشقق؛ حيث تتسرب حبيبات الرمال الناعمة والغبار الساحلي إلى داخل المنازل بصورة متكررة، ما يسبب خشونة في الأرضيات وانسداد مجاري النوافذ وتراكم الأتربة في أنظمة التكييف.',
        'تقدم مسك كلين برابغ خدمات تنظيف منازل مصممة خصيصاً لمواجهة هذه الظروف المناخية. نوظف معدات شفط صناعية تسحب الرمال العالقة من أعماق الموكيت والأركان، ونستخدم أجهزة فرك آلية للأرضيات تعيد النضارة للسيراميك وتزيل طبقات الغبار المتكلس، لتنعم الأسرة بمسكن نظيف وصحي يبعث على الراحة والهدوء بعد يوم عمل شاق.'
      ],
      introParagraphsEn: [
        'Rabigh strategic coastal location adjacent to King Abdullah Economic City (KAEC) and industrial complexes exposes residential properties to heavy coastal winds and fine sand drift. Sand particles rapidly settle into window tracks and across flooring.',
        'Mesk Clean delivers specialized residential cleaning for Rabigh households, utilizing industrial-grade sand suction equipment and high-torque rotary polishers that eliminate sand deposits.'
      ],
      importanceTitle: 'أهمية التنظيف المتخصص لمنازل وشقق رابغ',
      importanceTitleEn: 'The Value of Specialized Residential Cleaning in Rabigh',
      importanceContent: [
        'إزالة الرمال الناعمة المتطايرة: هبوب الرياح البحرية المحملة بالرمال يسبب خدوشاً في البلاط والأسطح الزجاجية إن لم تُعالج بطرق شفط ومسح احترافية.',
        'التخلص من الرطوبة ومخلفات الهواء الصناعي: تتطلب بيئة رابغ تنظيفاً وقائياً دورياً يمنع تفاعل الرطوبة مع الأتربة لتكوين طبقات لزجة على الأسطح.',
        'توفير بيئة نقية للعائلات والموظفين: يحتاج العاملون في شركات رابغ إلى منازل نظيفة ومريحة خالية من مسببات الحساسية لضمان تجديد نشاطهم وصحتهم.'
      ],
      importanceContentEn: [
        'Removing Abrasive Coastal Sand: Airborne sand scratches glazed ceramic and glass surfaces if wiped improperly without industrial vacuuming.',
        'Countering Humidity & Industrial Dust: Humid air binds with dust particles, requiring chemical-safe degreasing.',
        'Restful Living for Professionals: Providing pristine, hygienic spaces for corporate engineers and families living in Rabigh.'
      ],
      workflowTitle: 'خطوات مسك كلين في تنظيف منازل رابغ',
      workflowTitleEn: 'Our Rabigh Home Cleaning Process',
      workflowSteps: [
        {
          number: 1,
          title: 'الشفط الأولي للرمال والأتربة',
          titleEn: 'Sand Infiltration Extraction',
          description: 'استخدام أجهزة شفط توربينية لإخلاء جميع الأتربة والرمال من الأرضيات والزوايا ومجاري النوافذ.',
          descriptionEn: 'High-suction turbine vacuuming extracting granular sand from baseboards and tracks.'
        },
        {
          number: 2,
          title: 'جلي وفرك السيراميك والبورسلين',
          titleEn: 'Mechanical Floor Scrubbing',
          description: 'غسيل الأرضيات بماكينات دوارة ومحاليل متخصصة تزيل البقع الداكنة وتلمع فواصل البلاط.',
          descriptionEn: 'Rotary scrubbing machines revitalizing dull ceramic tiles and tile grouting.'
        },
        {
          number: 3,
          title: 'تنظيف وتعقيم المطابخ والحمامات',
          titleEn: 'Deep Kitchen & Sanitary Scrub',
          description: 'إزالة الزيوت المتراكمة، وتنظيف الجدران والأحواض، وتعقيم المرحاض بمطهرات طبية قوية.',
          descriptionEn: 'Kitchen degreasing and clinical disinfection of bathrooms removing mineral deposits.'
        },
        {
          number: 4,
          title: 'مسح الأثاث والأسطح والأبواب',
          titleEn: 'Furniture & Surface Detailing',
          description: 'تنظيف الأبواب الخشبية والأسطح الخشبية والزجاجية بملمعات مضادة للشحنات الكهربائية طاردة للغبار.',
          descriptionEn: 'Wiping doors and cabinetry with anti-static agents that deter dust re-settlement.'
        },
        {
          number: 5,
          title: 'التعقيم الشامل والتسليم النهائي',
          titleEn: 'Final Decontamination & Sign-Off',
          description: 'تعقيم مقابض الأبواب والأسطح المفتاحية وتعطير المنزل برائحة زكية وتسليمه للعميل بعد رضاه التام.',
          descriptionEn: 'High-touch disinfection, refreshing atomization, and client inspection.'
        }
      ],
      featuresTitle: 'لماذا يفضل سكان رابغ شركة مسك كلين؟',
      featuresTitleEn: 'Key Advantages of Mesk Clean in Rabigh',
      features: [
        {
          title: 'وصول سريع لكافة مخططات رابغ',
          titleEn: 'Fast Coverage Across Rabigh',
          description: 'فرقنا متواجدة وتصل في أوقات قياسية إلى كافة الأحياء والمجمعات السكنية برابغ.',
          descriptionEn: 'Mobile vans stationed strategically for rapid dispatch across all Rabigh districts.'
        },
        {
          title: 'معدات قادرة على معالجة الرمال الساحلية',
          titleEn: 'Heavy Sand Handling Equipment',
          description: 'مكانس صناعية ذات قدرة عالية وماكينات تلميع مخصصة للأجواء الساحلية المتربة.',
          descriptionEn: 'High-capacity industrial extractors and polishers purpose-built for coastal dust.'
        },
        {
          title: 'حلول مرنة للموظفين والشركات',
          titleEn: 'Flexible Timings for Shift Workers',
          description: 'نراعي جداول عمل موظفي المصانع والشركات بتوفير مواعيد مرنة في نهاية الأسبوع.',
          descriptionEn: 'Flexible weekend and evening appointment slots designed around industrial shifts.'
        },
        {
          title: 'مرونة عالية وعقود صيانة دورية',
          titleEn: 'Flexible Timings & Recurring Plans',
          description: 'نقدم خطط نظافة مرنة تناسب العائلات وسكن الموظفين مع إمكانية الاشتراكات والزيارات الدورية.',
          descriptionEn: 'Flexible structures and periodic maintenance packages for homes and villas.'
        }
      ],
      districtsTitle: 'الأحياء والمناطق المغطاة برابغ',
      districtsTitleEn: 'Areas and Districts Covered in Rabigh',
      districtsIntro: 'نقدم خدمات تنظيف المنازل في عموم محافظة رابغ والمناطق المحيطة بها:',
      districtsIntroEn: 'Our residential cleaning services extend across Rabigh province and industrial hubs:',
      districtsList: [
        'أحياء رابغ الرئيسية: المرجانية، النزيلة، الصفا، النعيم، الصمد، الفريسنية.',
        'مخططات رابغ الحديثة: حي النخيل، حي المرجان، حي الفيحاء، حي الورود.',
        'المناطق السكنية المجاورة: مجمعات سكن موظفي بترورابغ، ومحيط مدينة الملك عبدالله الاقتصادية (KAEC).'
      ],
      districtsListEn: [
        'Central Rabigh: Al-Merghaniya, Al-Nazilah, Al-Safa, Al-Naeem, Al-Samad, Al-Furaissaniyah.',
        'Modern Neighborhoods: Al-Nakheel, Al-Murjan, Al-Fayhaa, Al-Wurood.',
        'Adjacent Residential Zones: Petro Rabigh residential quarters and vicinity of King Abdullah Economic City.'
      ],
      tipsTitle: 'نصائح للحد من دخول الرمال والغبار إلى منازل رابغ',
      tipsTitleEn: 'Helpful Tips to Stop Sand Intrusion in Rabigh',
      tipsIntro: 'طرق مجربة للحفاظ على نظافة البيت وسط الرياح الساحلية برابغ:',
      tipsIntroEn: 'Proven practical steps to minimize sand drift inside coastal residences:',
      tipsList: [
        {
          title: 'تركيب مصدات هوائية أسفل الأبواب الخارجية',
          titleEn: 'Install Under-Door Draft Sweepers',
          description: 'تساعد فرش ومصدات الأبواب السفلية في منع تسرب حبيبات الرمل مع حركة التيارات الهوائية.',
          descriptionEn: 'Rubber under-door sweeps block windblown sand from penetrating through entryway gaps.'
        },
        {
          title: 'تشغيل أجهزة تنقية الهواء المنزلية',
          titleEn: 'Run Indoor Air Purifiers',
          description: 'تساعد أجهزة التنقية المزودة بفلاتر كربونية على امتصاص ذرات الغبار العالقة في غرف النوم.',
          descriptionEn: 'HEPA air purifiers filter out floating microscopic dust, keeping bedrooms fresher.'
        },
        {
          title: 'تنظيف مجاري النوافذ أسبوعياً بالمكنسة',
          titleEn: 'Vacuum Window Channels Weekly',
          description: 'شفط الرمال المتجمعة في مسار الشبابيك بانتظام يمنع احتكاكها بالزجاج ويحافظ على سهولة انزلاقه.',
          descriptionEn: 'Weekly suctioning of window tracks prevents sand buildup from jamming sliding mechanisms.'
        }
      ],
      faqsTitle: 'أسئلة شائعة حول تنظيف المنازل في رابغ',
      faqsTitleEn: 'Rabigh Home Cleaning FAQs',
      faqs: [
        {
          question: 'هل تخدمون مجمعات إسكان الشركات وموظفي بترورابغ؟',
          questionEn: 'Do you clean corporate housing near Petro Rabigh?',
          answer: 'نعم، نقدم خدمات تنظيف دورية وعاجلة لسكن العائلات والمهندسين في مجمعات سكن الموظفين برابغ وكافة أحيائها.',
          answerEn: 'Yes, we provide routine and one-time cleaning for residential quarters and family homes across Rabigh.'
        },
        {
          question: 'هل لديكم عروض لتنظيف المنازل بعد أعمال الصيانة أو الدهان؟',
          questionEn: 'Do you offer post-renovation or post-painting cleaning in Rabigh?',
          answer: 'نعم، نوفر خدمة التنظيف الشامل لإزالة آثار البوية والجبس وتلميع السيراميك بعد أعمال الترميم والبناء.',
          answerEn: 'Yes, we specialize in post-renovation cleaning, scraping paint specks and deeply scrubbing tiles.'
        },
        {
          question: 'كيف يمكنني دفع قيمة الخدمة في رابغ؟',
          questionEn: 'What payment options are available in Rabigh?',
          answer: 'نوفر الدفع عند الانتهاء ورضاك التام نقداً أو عبر شبكة مدى وفيزا أو التحويل البنكي الفوري.',
          answerEn: 'Payment is made upon total satisfaction via cash, Mada card, or electronic bank transfer.'
        }
      ]
    }
  }
};
