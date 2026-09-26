export interface CityServiceBlock {
  id: string;
  h2TitleAr: string;
  h2TitleEn: string;
  paragraphAr: string;
  paragraphEn: string;
  bulletPointsAr: string[];
  bulletPointsEn: string[];
  targetKeywords: string[];
  iconName: string;
  serviceIdRef: string;
}

export interface CityFaqItem {
  questionAr: string;
  questionEn: string;
  answerAr: string;
  answerEn: string;
}

export interface CityPriceItem {
  serviceAr: string;
  serviceEn: string;
  priceNoteAr: string;
  priceNoteEn: string;
  featuresAr: string[];
  featuresEn: string[];
}

export interface CitySeoProfile {
  id: 'jeddah' | 'rabigh' | 'makkah';
  nameAr: string;
  nameEn: string;
  cityShortAr: string;
  cityShortEn: string;
  titleTagAr: string;
  titleTagEn: string;
  metaDescAr: string;
  metaDescEn: string;
  h1Ar: string;
  h1En: string;
  introBadgeAr: string;
  introBadgeEn: string;
  introLeadAr: string;
  introLeadEn: string;
  keywords: string[];
  serviceBlocks: CityServiceBlock[];
  faqs: CityFaqItem[];
  pricingTable: CityPriceItem[];
  districtsAr: string[];
  districtsEn: string[];
  geo: {
    lat: number;
    lng: number;
    regionAr: string;
    regionEn: string;
  };
}

export const CITIES_SEO_DATA: Record<string, CitySeoProfile> = {
  jeddah: {
    id: 'jeddah',
    nameAr: 'جدة',
    nameEn: 'Jeddah',
    cityShortAr: 'جدة',
    cityShortEn: 'Jeddah',
    titleTagAr: 'شركة تنظيف منازل بجدة | أفضل وأرخص شركة تنظيف وعزل خزانات ومكافحة حشرات - مسك كلين',
    titleTagEn: 'Home Cleaning & Pest Control in Jeddah | Mesk Clean Services',
    metaDescAr: 'مسك كلين أفضل وأرخص شركة تنظيف منازل بجدة، تنظيف شقق وفلل ومجالس بالبخار، رش مبيدات ومكافحة حشرات، تركيب طارد حمام، غسيل مكيفات سبلت، وعزل وتعقيم خزانات المياه بجدة بأفضل الأسعار.',
    metaDescEn: 'Mesk Clean: Top rated cleaning, tank insulation, AC wash, pest control and bird spikes installation company in Jeddah at competitive prices.',
    h1Ar: 'شركة تنظيف منازل بجدة ومكافحة الحشرات وعزل الخزانات | مسك كلين',
    h1En: 'Home Cleaning, Pest Control & Tank Insulation in Jeddah | Mesk Clean',
    introBadgeAr: 'الفرع الرئيسي • تغطية فورية لكافة أحياء جدة 24/7',
    introBadgeEn: 'Main Branch • 24/7 Immediate Coverage Across All Jeddah Districts',
    introLeadAr: 'إذا كنت تبحث عن رقم شركة تنظيف منازل بجدة معتمدة، فإن مسك كلين هي الخيار الأول والرائد. نجمع بين الخبرة الطويلة وأحدث أجهزة البخار والمضخات ومواد التعقيم الآمنة لنكون دائماً أفضل شركة تنظيف بجدة مع تقديم أرخص شركة تنظيف بجدة وأفضل أسعار شركات التنظيف بجدة مع ضمان الجودة 100%.',
    introLeadEn: 'Looking for a certified home cleaning company in Jeddah? Mesk Clean delivers premium residential & commercial cleaning, pest control, AC wash, and tank insulation across all Jeddah neighborhoods.',
    keywords: [
      'شركة تنظيف منازل بجدة',
      'رقم شركة تنظيف منازل بجدة',
      'أفضل شركة تنظيف بجدة',
      'أسعار شركات التنظيف بجدة',
      'أرخص شركة تنظيف بجدة',
      'شركة تنظيف شقق وفلل بجدة',
      'شركة تنظيف منازل بالبخار بجدة',
      'شركة تنظيف مجالس وكنب بجدة',
      'شركة تنظيف سجاد وموكيت بجدة',
      'شركة تنظيف مطابخ بجدة',
      'شركة مكافحة حشرات بجدة',
      'أرخص شركة مكافحة حشرات بجدة',
      'أفضل شركة مكافحة حشرات بجدة',
      'شركة رش مبيدات بجدة',
      'شركة مكافحة صراصير بجدة',
      'شركة مكافحة بق الفراش بجدة',
      'شركة مكافحة فئران بجدة',
      'شركة طارد حمام بجدة',
      'تركيب طارد حمام بجدة',
      'شركة مكافحة حمام بجدة',
      'شركة غسيل مكيفات بجدة',
      'أرخص شركة غسيل مكيفات بجدة',
      'شركة تنظيف مكيفات سبلت بجدة',
      'شركة تنظيف خزانات بجدة',
      'شركة غسيل خزانات المياه بجدة',
      'تعقيم خزانات مياه بجدة',
      'شركة عزل خزانات بجدة',
      'أسعار عزل خزانات بجدة'
    ],
    serviceBlocks: [
      {
        id: 'cleaning-jeddah',
        h2TitleAr: 'شركة تنظيف شقق وفلل بجدة وتنظيف منازل بالبخار',
        h2TitleEn: 'Apartment & Villa Steam Cleaning in Jeddah',
        paragraphAr: 'تعتبر مسك كلين أفضل شركة تنظيف بجدة متخصصة في خدمات شركة تنظيف منازل بجدة وشركة تنظيف شقق وفلل بجدة. نوفر خدمة شركة تنظيف منازل بالبخار بجدة بأحدث أجهزة الحقن والشفط الحراري التي تضمن التعقيم العميق، بالإضافة إلى تميزنا كأفضل شركة تنظيف مجالس وكنب بجدة، وشركة تنظيف سجاد وموكيت بجدة مع الحفاظ على رونق الأقمشة، إلى جانب خدمات شركة تنظيف مطابخ بجدة لإزالة أصعب الدهون والشحوم.',
        paragraphEn: 'Mesk Clean is the top-rated home, apartment, and villa cleaning company in Jeddah. We utilize advanced steam technology for sanitizing living rooms, sofas, carpets, rugs, and heavy grease kitchen degreasing.',
        bulletPointsAr: [
          'تنظيف عميق وشامل للفلل والقصور والشقق المفروشة والجديدة بعد التشطيب',
          'تنظيف كنب ومجالس بالبخار الحار وإزالة البقع العنيدة والروائح غير المرغوبة',
          'غسيل وتجفيف سريع للسجاد والموكيت في مكانه بأحدث المكانس والمجففات',
          'جلي وتلميع الرخام والسيراميك وإزالة دهون المطابخ وأفران الغاز باحتراف'
        ],
        bulletPointsEn: [
          'Comprehensive deep cleaning for villas, apartments, and post-construction sites',
          'High-temperature steam sofa and majlis extraction removing stubborn stains',
          'Rapid on-site carpet & rug cleaning with fiber-safe antibacterial sanitizers',
          'Kitchen degreasing, backsplash descaling, and floor polishing'
        ],
        targetKeywords: [
          'شركة تنظيف منازل بجدة',
          'أفضل شركة تنظيف بجدة',
          'أرخص شركة تنظيف بجدة',
          'أسعار شركات التنظيف بجدة',
          'شركة تنظيف شقق وفلل بجدة',
          'شركة تنظيف منازل بالبخار بجدة',
          'شركة تنظيف مجالس وكنب بجدة',
          'شركة تنظيف سجاد وموكيت بجدة',
          'شركة تنظيف مطابخ بجدة'
        ],
        iconName: 'Home',
        serviceIdRef: 'homes'
      },
      {
        id: 'pest-jeddah',
        h2TitleAr: 'شركة مكافحة حشرات ورش مبيدات بجدة مع الضمان',
        h2TitleEn: 'Pest Control & Insecticide Spraying in Jeddah',
        paragraphAr: 'إذا كنت تبحث عن أفضل شركة مكافحة حشرات بجدة وأرخص شركة مكافحة حشرات بجدة، فإن مسك كلين هي شركة مكافحة حشرات بجدة معتمدة توفر حلولاً جذرية. نعمل كأفضل شركة رش مبيدات بجدة بمبيدات آمنة ومصرحة، ونوفر خدمات شركة مكافحة صراصير بجدة بالحقن الجل والمبيدات المتطورة، وشركة مكافحة بق الفراش بجدة بالحرارة والمبيدات الخاصة، بالإضافة إلى شركة مكافحة فئران بجدة بمصائد وطعوم إلكترونية وميكانيكية فعالة.',
        paragraphEn: 'Certified pest control in Jeddah specializing in safe, odorless extermination of cockroaches, bedbugs, termites, and rodents with certified warranties.',
        bulletPointsAr: [
          'رش مبيدات عديمة الرائحة وآمنة على الأطفال وكبار السن والحيوانات الأليفة',
          'مكافحة فورية للصراصير الألمانية والأمريكية وتطبيق جل وقائي طويل المفعول',
          'إبادة تامة لبق الفراش مع ضمان مكتوب ومتابعة دورية مجانية',
          'مكافحة واصطياد الفئران والجرذان وسد منافذ الدخول لمنع تكرارها'
        ],
        bulletPointsEn: [
          'Odorless, Ministry-approved insecticides safe for families and pets',
          'Targeted German & American cockroach gel baiting and residual barrier',
          'Bedbug eradication with guaranteed warranty and free follow-up visits',
          'Rodent trapping and entry-point sealing preventing future infestations'
        ],
        targetKeywords: [
          'شركة مكافحة حشرات بجدة',
          'أرخص شركة مكافحة حشرات بجدة',
          'أفضل شركة مكافحة حشرات بجدة',
          'شركة رش مبيدات بجدة',
          'شركة مكافحة صراصير بجدة',
          'شركة مكافحة بق الفراش بجدة',
          'شركة مكافحة فئران بجدة'
        ],
        iconName: 'ShieldAlert',
        serviceIdRef: 'pest'
      },
      {
        id: 'bird-jeddah',
        h2TitleAr: 'تركيب طارد حمام وشركة مكافحة حمام بجدة',
        h2TitleEn: 'Bird Spikes & Pigeon Netting Installation in Jeddah',
        paragraphAr: 'تعد مسك كلين شركة طارد حمام بجدة وشركة مكافحة حمام بجدة متخصصة في تركيب طارد حمام بجدة وتركيب شبك النوافذ والأسطح والمكيفات. نحمي واجهات مبانيكم من أوساخ الطيور والأمراض عبر شبكات قوية وأشواك ستانلس ستيل تدوم لسنوات دون التأثير على المظهر الجمالي للمبنى.',
        paragraphEn: 'Professional bird deterrent and pigeon spikes installation across Jeddah protecting windows, AC units, and rooftops from nests and droppings.',
        bulletPointsAr: [
          'أشواك ستانلس ستيل أصلية مقاومة للصدأ والرطوبة العالية في جدة',
          'شبك بوليمري شفاف وعالي المتانة مقاوم للشمس الحارقة لحماية المناور والأسطح',
          'حماية خارجية متكاملة لوحدات التكييف والشبابيك والمداخل',
          'طريقة إنسانية وآمنة 100% تمنع هبوط الحمام دون إيذائه'
        ],
        bulletPointsEn: [
          'Rust-proof marine grade stainless steel spikes engineered for coastal Jeddah',
          'UV-resistant heavy-duty polymer netting for rooftops and courtyards',
          'Full coverage for window sills, split AC outdoor compressors, and ledges',
          'Humane physical barriers preventing roosting without harming wildlife'
        ],
        targetKeywords: [
          'شركة طارد حمام بجدة',
          'تركيب طارد حمام بجدة',
          'شركة مكافحة حمام بجدة'
        ],
        iconName: 'Bird',
        serviceIdRef: 'bird-netting'
      },
      {
        id: 'ac-jeddah',
        h2TitleAr: 'شركة غسيل مكيفات وتنظيف مكيفات سبلت بجدة',
        h2TitleEn: 'Split AC Wash & Cleaning Services in Jeddah',
        paragraphAr: 'مع ارتفاع درجات الحرارة والرطوبة بجدة، توفر مسك كلين أفضل خدمات شركة غسيل مكيفات بجدة وشركة تنظيف مكيفات سبلت بجدة. نعد أرخص شركة غسيل مكيفات بجدة مع تقديم أعلى مستويات الحرفية باستخدام أغطية حماية الجدران ومضخات غسيل مخصصة تنظف الفلاتر والمبخر وتزيد من قوة التبريد وتوفر فاتورة الكهرباء.',
        paragraphEn: 'Maintain peak cooling and lower electricity bills in Jeddah with our professional split air conditioner deep pressure washing services.',
        bulletPointsAr: [
          'غسيل المكيف في مكانه بدون فك مع تركيب أكياس تصريف لمنع أي تسريب ماء',
          'تنظيف وتعقيم لفائف المبخر وفلاتر الهواء وحوض تصريف المياه',
          'إزالة الروائح الكريهة والعفن والبكتيريا واستعادة نقاء وبرودة الهواء',
          'أسعار خاصة ومخفضة عند طلب غسيل 3 مكيفات فأكثر في جدة'
        ],
        bulletPointsEn: [
          'Mess-free on-site wash using specialized waterproof catch bags',
          'Deep coil, fan wheel, and condensate tray flushing with anti-fungal treatment',
          'Eliminates musty odors, restores high airflow and cuts power consumption',
          'Special package discounts for 3 or more AC units in Jeddah'
        ],
        targetKeywords: [
          'شركة غسيل مكيفات بجدة',
          'أرخص شركة غسيل مكيفات بجدة',
          'شركة تنظيف مكيفات سبلت بجدة'
        ],
        iconName: 'Wind',
        serviceIdRef: 'ac'
      },
      {
        id: 'tanks-jeddah',
        h2TitleAr: 'شركة تنظيف وعزل خزانات وتعقيم خزانات مياه بجدة',
        h2TitleEn: 'Water Tank Cleaning, Sterilization & Insulation in Jeddah',
        paragraphAr: 'الحفاظ على نقاء مياه الشرب يبدأ مع شركة تنظيف خزانات بجدة وشركة غسيل خزانات المياه بجدة. تقدم مسك كلين خدمات تعقيم خزانات مياه بجدة بمواد مرخصة من هيئة الغذاء والدواء، بالإضافة إلى كوننا شركة عزل خزانات بجدة معتمدة لعزل الخزانات الأرضية والعلوية من التسربات المائية مع تقديم أفضل أسعار عزل خزانات بجدة.',
        paragraphEn: 'Ensure 100% pure, healthy water with our licensed tank washing, chlorine sterilization, and epoxy/cementitious tank insulation in Jeddah.',
        bulletPointsAr: [
          'سحب الرواسب والطمي والطحالب المتراكمة في قاع الخزان الأرضي والعلوي',
          'فرك وتعقيم الجدران والأرضيات بمواد مطهرة آمنة ومطابقة للمواصفات السعودية',
          'كشف تشققات الخرسانة وعزل الخزانات بمواد إيبوكسية وعوازل أسمنتية معتمدة',
          'أفضل أسعار عزل خزانات بجدة مع شهادة ضمان معتمدة تصل لسنوات'
        ],
        bulletPointsEn: [
          'Sediment pumping and wall scrubbing removing bio-film and algae',
          'Sanitization with food-grade disinfectants certified for drinking water',
          'Crack detection and certified epoxy/cementitious waterproofing insulation',
          'Most competitive tank insulation pricing in Jeddah with warranty certificate'
        ],
        targetKeywords: [
          'شركة تنظيف خزانات بجدة',
          'شركة غسيل خزانات المياه بجدة',
          'تعقيم خزانات مياه بجدة',
          'شركة عزل خزانات بجدة',
          'أسعار عزل خزانات بجدة'
        ],
        iconName: 'Droplets',
        serviceIdRef: 'tanks'
      }
    ],
    pricingTable: [
      {
        serviceAr: 'تنظيف الشقق والفلل والمنازل',
        serviceEn: 'Apartments & Villas Deep Cleaning',
        priceNoteAr: 'أسعار تبدأ من 250 ريال (خصم 25% للحجز اليوم)',
        priceNoteEn: 'Starting from 250 SAR (25% off today)',
        featuresAr: ['تنظيف شامل بالأجهزة ومواد آمنة', 'فريق مدرب باحترافية', 'ضمان الرضا الكامل قبل المغادرة'],
        featuresEn: ['Full equipment deep wash', 'Trained crew', 'Satisfaction guarantee']
      },
      {
        serviceAr: 'تنظيف المجالس والكنب والسجاد بالبخار',
        serviceEn: 'Steam Sofa, Carpet & Majlis Cleaning',
        priceNoteAr: 'أسعار تنافسية حسب عدد الأطقم والمساحة',
        priceNoteEn: 'Competitive pricing per set/m²',
        featuresAr: ['ماكينات بخار إيطالية حديثة', 'إزالة البقع والروائح والتعقيم', 'تجفيف سريع وفوري'],
        featuresEn: ['Modern steam extraction', 'Stain & odor removal', 'Rapid drying']
      },
      {
        serviceAr: 'مكافحة الحشرات ورش المبيدات',
        serviceEn: 'Pest Control & Spraying',
        priceNoteAr: 'أرخص شركة مكافحة حشرات بجدة مع الضمان المكتوب',
        priceNoteEn: 'Best rates with written warranty',
        featuresAr: ['مبيدات ألمانية مصرحة وصحية', 'ضمان من 3 إلى 6 أشهر', 'زيارات متابعة مجانية'],
        featuresEn: ['Certified German insecticides', '3-6 month warranty', 'Free follow-up']
      },
      {
        serviceAr: 'تركيب طارد وشبك الحمام',
        serviceEn: 'Bird Deterrent Spikes & Netting',
        priceNoteAr: 'سعر خاص بالمتر الطولي مع التثبيت والضمان',
        priceNoteEn: 'Per linear meter with full installation',
        featuresAr: ['أشواك ستانلس ستيل أصلية', 'تثبيت بالسيليكون الألماني والمسامير', 'حماية الواجهات والمكيفات'],
        featuresEn: ['Rust-proof stainless steel', 'Marine grade fixing', 'Complete facade protection']
      },
      {
        serviceAr: 'غسيل مكيفات سبلت',
        serviceEn: 'Split AC Deep Pressure Washing',
        priceNoteAr: 'عروض خاصة للكميات (خصم إضافي عند طلب 3 مكيفات فأكثر)',
        priceNoteEn: 'Volume discounts for 3+ units',
        featuresAr: ['غسيل داخلي وخارجي وفحص الفريون', 'حماية الجدران والأثاث بنسبة 100%', 'تعطير وتطهير الفلاتر'],
        featuresEn: ['Indoor & outdoor coil flush', '100% wall protection', 'Filter deodorization']
      },
      {
        serviceAr: 'تنظيف وعزل خزانات المياه',
        serviceEn: 'Water Tank Cleaning & Insulation',
        priceNoteAr: 'أفضل أسعار عزل خزانات بجدة مع شهادة ضمان معتمدة',
        priceNoteEn: 'Top tank insulation rates with certified warranty',
        featuresAr: ['سحب الرواسب وتعقيم بالكلور المعتمد', 'عوازل مائية وإيبوكسي عالية الكفاءة', 'فحص دوري وتقرير نظافة'],
        featuresEn: ['Sediment drainage & disinfection', 'Epoxy & cementitious sealing', 'Inspection report']
      }
    ],
    faqs: [
      {
        questionAr: 'ما هو رقم شركة تنظيف منازل بجدة للحجز السريع والمباشر؟',
        questionEn: 'What is the phone number for Mesk Clean home cleaning in Jeddah?',
        answerAr: 'يمكنكم التواصل مباشرة مع شركة مسك كلين على الرقم 0547161157 أو الاتصال على الرقم الثاني 0547161147 أو عبر الواتساب على مدار الساعة 24/7 للحصول على حجز فوري ومعاينة مجانية في جميع أحياء جدة.',
        answerEn: 'You can reach Mesk Clean directly at 0547161157 or 0547161147, or via 24/7 WhatsApp for immediate booking and free quotes across all Jeddah districts.'
      },
      {
        questionAr: 'كيف تضمنون تقديم أرخص شركة تنظيف بجدة وأفضل أسعار شركات التنظيف بجدة؟',
        questionEn: 'How do you provide the most competitive cleaning prices in Jeddah?',
        answerAr: 'نحن نقدم تسعيراً عادلاً وشفافاً ومباشراً بدون وسطاء مع باقات وعروض شهرية وتخفيضات تصل إلى 25% على العقود المنزلية والتجارية، لنجمع بين أعلى جودة وأفضل أسعار شركات التنظيف بجدة.',
        answerEn: 'We provide transparent, direct pricing without intermediaries, offering monthly package discounts up to 25% for residential and commercial clients in Jeddah.'
      },
      {
        questionAr: 'هل تقدمون ضماناً مكتوباً على خدمات مكافحة الحشرات وعزل الخزانات بجدة؟',
        questionEn: 'Do you offer written warranties on pest control and tank insulation in Jeddah?',
        answerAr: 'نعم بكل تأكيد، نوفر سند ضمان رسمي معتمد على خدمات رش المبيدات ومكافحة الصراصير وبق الفراش والفئران، بالإضافة إلى ضمان عزل الخزانات من التسربات لمدة تصل لعدة سنوات.',
        answerEn: 'Yes! We issue official written warranties on all pest extermination services and long-term warranties on water tank waterproofing and epoxy insulation.'
      }
    ],
    districtsAr: [
      'حي الروضة', 'حي الشاطئ', 'حي الزهراء', 'حي النعيم', 'حي النهضة',
      'حي المحمدية', 'حي أبحر الشمالية', 'حي أبحر الجنوبية', 'حي المرجان',
      'حي البساتين', 'حي السلامة', 'حي الصفا', 'حي المروة', 'حي الفيصلية',
      'حي الحمراء', 'حي الأندلس', 'حي مشرفة', 'حي العزيزية', 'حي الرحاب',
      'حي النسيم', 'حي السليمانية', 'حي الفيحاء', 'حي الروابي', 'حي السامر',
      'حي الأجاويد', 'حي السنابل', 'حي الحمدانية', 'حي طيبة', 'حي الصالحية'
    ],
    districtsEn: [
      'Al Rawdah', 'Al Shati', 'Al Zahra', 'Al Naeem', 'Al Nahdah',
      'Al Mohammediah', 'North Obhur', 'South Obhur', 'Al Murjan',
      'Al Basateen', 'Al Salamah', 'Al Safa', 'Al Marwah', 'Al Faisaliyah',
      'Al Hamra', 'Al Andalus', 'Mushrefah', 'Al Aziziyah', 'Al Rehab',
      'Al Naseem', 'Al Sulaimaniyah', 'Al Faiha', 'Al Rawabi', 'Al Samer',
      'Al Ajaweed', 'Al Sanabel', 'Al Hamdaniyah', 'Taiba', 'Al Salhiyah'
    ],
    geo: {
      lat: 21.5433,
      lng: 39.1728,
      regionAr: 'منطقة مكة المكرمة - محافظة جدة',
      regionEn: 'Makkah Province - Jeddah'
    }
  },
  rabigh: {
    id: 'rabigh',
    nameAr: 'رابغ',
    nameEn: 'Rabigh',
    cityShortAr: 'رابغ',
    cityShortEn: 'Rabigh',
    titleTagAr: 'شركة تنظيف منازل برابغ | أرخص شركة تنظيف شقق وعزل خزانات ومكافحة حشرات - مسك كلين',
    titleTagEn: 'Home Cleaning, Pest Control & Tank Services in Rabigh | Mesk Clean',
    metaDescAr: 'مسك كلين أفضل وأرخص شركة تنظيف منازل برابغ، تنظيف شقق وفلل، رش مبيدات ومكافحة حشرات وصراصير وبق وفئران، شركة طارد ومكافحة حمام، غسيل مكيفات سبلت، وعزل وتعقيم خزانات المياه برابغ.',
    metaDescEn: 'Mesk Clean provides professional home, villa, apartment cleaning, pest control, AC wash, tank insulation, and bird deterrent in Rabigh at best rates.',
    h1Ar: 'شركة تنظيف منازل برابغ ومكافحة حشرات وعزل خزانات | مسك كلين',
    h1En: 'Home Cleaning, Pest Control & Tank Insulation in Rabigh | Mesk Clean',
    introBadgeAr: 'فرع محافظة رابغ • خدمة سريعة للأحياء والمجمعات والمراكز المجاورة 24/7',
    introBadgeEn: 'Rabigh Governorate Branch • 24/7 Swift Service Across All Districts',
    introLeadAr: 'إذا كنت في محافظة رابغ أو المجمعات السكنية والصناعية المجاورة وتبحث عن أرخص شركة تنظيف برابغ وشركة تنظيف منازل برابغ بمستوى احترافي، فإن مسك كلين توفر لك أسطولاً متنقلاً مجهزاً بالكامل لتقديم أعلى معايير النظافة والتعقيم وعزل الخزانات ومكافحة الآفات بأسرع وقت.',
    introLeadEn: 'Mesk Clean delivers expert residential, commercial, and industrial cleaning, pest control, split AC washing, and water tank insulation across Rabigh and surrounding coastal communities.',
    keywords: [
      'شركة تنظيف منازل برابغ',
      'أرخص شركة تنظيف برابغ',
      'شركة تنظيف شقق وفلل برابغ',
      'شركة مكافحة حشرات برابغ',
      'شركة رش مبيدات برابغ',
      'شركة مكافحة صراصير برابغ',
      'شركة مكافحة بق الفراش برابغ',
      'شركة مكافحة فئران برابغ',
      'شركة طارد حمام برابغ',
      'شركة مكافحة حمام برابغ',
      'شركة غسيل مكيفات برابغ',
      'شركة تنظيف مكيفات سبلت برابغ',
      'شركة تنظيف خزانات برابغ',
      'شركة غسيل خزانات المياه برابغ',
      'تعقيم خزانات مياه برابغ',
      'شركة عزل خزانات برابغ'
    ],
    serviceBlocks: [
      {
        id: 'cleaning-rabigh',
        h2TitleAr: 'شركة تنظيف منازل برابغ وتنظيف شقق وفلل برابغ',
        h2TitleEn: 'Home, Apartment & Villa Cleaning in Rabigh',
        paragraphAr: 'توفر مسك كلين أفضل حلول شركة تنظيف منازل برابغ وشركة تنظيف شقق وفلل برابغ، وتعتبر أرخص شركة تنظيف برابغ مقارنة بجودة المعدات والعمالة المدربة. نخدم الفلل والمنازل والوحدات السكنية في أحياء المرجان والصمد والصفا والنزهة والمجمعات السكنية بأعلى دقة واحترافية.',
        paragraphEn: 'Mesk Clean is the leading residential cleaning service in Rabigh, offering top-notch villa and apartment cleaning with advanced equipment and budget-friendly rates.',
        bulletPointsAr: [
          'تنظيف متكامل للفلل الجديدة والمفروشة والشقق والمكاتب برابغ',
          'جلي وتلميع الأرضيات وإزالة الغبار والرمال الساحلية باحتراف',
          'تنظيف وتعقيم المطابخ والحمامات وإزالة البقع والرواسب',
          'أسعار اقتصادية وعروض دورية تناسب أهالي ومؤسسات رابغ'
        ],
        bulletPointsEn: [
          'Full comprehensive cleaning for new and furnished villas & apartments in Rabigh',
          'Floor scrubbing, polishing, and coastal sand removal',
          'Kitchen & bathroom clinical descaling and disinfection',
          'Budget-friendly packages for residential & commercial clients'
        ],
        targetKeywords: [
          'شركة تنظيف منازل برابغ',
          'أرخص شركة تنظيف برابغ',
          'شركة تنظيف شقق وفلل برابغ'
        ],
        iconName: 'Home',
        serviceIdRef: 'homes'
      },
      {
        id: 'pest-rabigh',
        h2TitleAr: 'شركة مكافحة حشرات ورش مبيدات ومكافحة صراصير وبق وفئران برابغ',
        h2TitleEn: 'Pest Control & Spraying in Rabigh',
        paragraphAr: 'تعد مسك كلين شركة مكافحة حشرات برابغ معتمدة ورائدة كأفضل شركة رش مبيدات برابغ. نوفر حلولاً حاسمة كـ شركة مكافحة صراصير برابغ بالجل الألماني، وشركة مكافحة بق الفراش برابغ بالبخار والمبيدات المركزة، بالإضافة إلى شركة مكافحة فئران برابغ بالمصائد والطعوم الآمنة لمنع دخول القوارض للمنازل والمستودعات.',
        paragraphEn: 'Complete pest eradication and insecticide spraying in Rabigh, eliminating cockroaches, bedbugs, and rodents with certified safe treatments and warranty.',
        bulletPointsAr: [
          'رش مبيدات معتمدة وآمنة لمكافحة الآفات الزاحفة والطائرة',
          'القضاء التام على الصراصير في المطابخ والصرف الصحي وضمان عدم عودتها',
          'معالجة بؤر بق الفراش بالمبيدات المتخصصة مع الضمان المعتمد',
          'مكافحة فئران وقوارض في المنازل والمزارع والمستودعات برابغ'
        ],
        bulletPointsEn: [
          'Safe, certified insecticides targeting all crawling and flying insects',
          'Complete eradication of cockroaches with German residual gel',
          'Specialized bedbug treatment with long-term guaranteed protection',
          'Rodent control for homes, farms, and storage facilities in Rabigh'
        ],
        targetKeywords: [
          'شركة مكافحة حشرات برابغ',
          'شركة رش مبيدات برابغ',
          'شركة مكافحة صراصير برابغ',
          'شركة مكافحة بق الفراش برابغ',
          'شركة مكافحة فئران برابغ'
        ],
        iconName: 'ShieldAlert',
        serviceIdRef: 'pest'
      },
      {
        id: 'bird-rabigh',
        h2TitleAr: 'شركة طارد حمام وشركة مكافحة حمام برابغ',
        h2TitleEn: 'Bird Spikes & Pigeon Control in Rabigh',
        paragraphAr: 'نظراً لطبيعة رابغ الساحلية وكثرة الطيور، تقدم مسك كلين خدمات شركة طارد حمام برابغ وشركة مكافحة حمام برابغ لحماية النوافذ ووحدات التكييف والأسطح والمظلات من أضرار وفضلات الحمام عبر شبك متين وأشواك غير قابلة للصدأ تقاوم الرطوبة الساحلية.',
        paragraphEn: 'Protect your building facade and AC compressors in coastal Rabigh with heavy-duty stainless steel bird spikes and anti-pigeon netting.',
        bulletPointsAr: [
          'تركيب طارد حمام من الستانلس ستيل المقاوم للرطوبة والأملاح برابغ',
          'شبك حماية متين يمنع تعشيش الحمام في المناور والأسطح',
          'حماية وحدات التكييف الخارجية من التلف وتراكم الفضلات',
          'تركيب متقن يدوم طويلاً دون تشويه المظهر المعماري'
        ],
        bulletPointsEn: [
          'Marine-grade rust-proof spikes resistant to Rabigh coastal humidity & salinity',
          'Heavy-duty polymer netting for rooftops, courtyards, and lightwells',
          'Protects external split AC units from bird nesting and damage',
          'Clean, architectural installation lasting for years'
        ],
        targetKeywords: [
          'شركة طارد حمام برابغ',
          'شركة مكافحة حمام برابغ'
        ],
        iconName: 'Bird',
        serviceIdRef: 'bird-netting'
      },
      {
        id: 'ac-rabigh',
        h2TitleAr: 'شركة غسيل مكيفات وشركة تنظيف مكيفات سبلت برابغ',
        h2TitleEn: 'Split AC Wash & Cleaning in Rabigh',
        paragraphAr: 'لتجاوز حرارة ورطوبة الصيف برابغ، توفر مسك كلين خدمات شركة غسيل مكيفات برابغ وشركة تنظيف مكيفات سبلت برابغ. نعتمد على مضخات ضغط مائي دقيقة وأكياس عازلة لتنظيف عميق يزيل الأتربة والرواسب ويرفع كفاءة التبريد بنسبة ملحوظة.',
        paragraphEn: 'Boost cooling power and air purity with our specialized split AC cleaning and pressure wash services across all Rabigh neighborhoods.',
        bulletPointsAr: [
          'غسيل المكيفات السبلت في مكانها دون أي فوضى أو اتساخ للجدران',
          'تنظيف الفلاتر والمروحة الداخلية ومجرى تصريف المياه',
          'تحسين برودة المكيف وخفض استهلاك الطاقة الكهربائية',
          'أسعار خاصة للمنازل والفلل والمجمعات السكنية برابغ'
        ],
        bulletPointsEn: [
          'Mess-free on-site wash using waterproof protective covers',
          'Deep coil, blower wheel, and drain pipe descaling',
          'Restores ice-cold airflow and reduces electricity costs',
          'Special rates for homes, villas, and compound units in Rabigh'
        ],
        targetKeywords: [
          'شركة غسيل مكيفات برابغ',
          'شركة تنظيف مكيفات سبلت برابغ'
        ],
        iconName: 'Wind',
        serviceIdRef: 'ac'
      },
      {
        id: 'tanks-rabigh',
        h2TitleAr: 'شركة تنظيف خزانات وتعقيم وعزل خزانات برابغ',
        h2TitleEn: 'Water Tank Cleaning, Sterilization & Insulation in Rabigh',
        paragraphAr: 'نقدم حلولاً متكاملة تشمل شركة تنظيف خزانات برابغ وشركة غسيل خزانات المياه برابغ مع تعقيم خزانات مياه برابغ بأعلى درجات الأمان الصحي، بالإضافة إلى كوننا شركة عزل خزانات برابغ لحماية الخزانات من التسربات وتأثير المياه المالحة والأملاح.',
        paragraphEn: 'Keep drinking water fresh and safe in Rabigh with our certified tank sediment flushing, chlorine sanitization, and leak-proof waterproofing insulation.',
        bulletPointsAr: [
          'تنظيف وتفريغ الخزان وسحب الأتربة والطحالب من القاع والجدران',
          'تعقيم بمواد معتمدة وصحية تضمن سلامة مياه الشرب والاستخدام المنزلي',
          'عزل مائي وإيبوكسي معتمد يمنع تسرب المياه الأرضية ويحمي المبنى',
          'كشف دوري على الخزانات العلوية والأرضية مع الضمان المعتمد'
        ],
        bulletPointsEn: [
          'Sediment evacuation and mechanical wall scrubbing for underground & elevated tanks',
          'Sanitization with SASO-certified safe disinfectants',
          'Waterproof epoxy and cementitious sealing preventing external water infiltration',
          'Comprehensive inspection and warranty certificate'
        ],
        targetKeywords: [
          'شركة تنظيف خزانات برابغ',
          'شركة غسيل خزانات المياه برابغ',
          'تعقيم خزانات مياه برابغ',
          'شركة عزل خزانات برابغ'
        ],
        iconName: 'Droplets',
        serviceIdRef: 'tanks'
      }
    ],
    pricingTable: [
      {
        serviceAr: 'تنظيف المنازل والفلل والشقق برابغ',
        serviceEn: 'Residential Cleaning in Rabigh',
        priceNoteAr: 'أرخص شركة تنظيف برابغ بأسعار تبدأ من 250 ريال',
        priceNoteEn: 'Starting from 250 SAR with 25% discount',
        featuresAr: ['تنظيف متكامل بالأجهزة الحديثة', 'عمالة مدربة وسريعة الإنجاز', 'تغطية لكافة أحياء رابغ ومستورة وصعبر'],
        featuresEn: ['Modern equipment deep clean', 'Trained crew', 'Full Rabigh & outskirts coverage']
      },
      {
        serviceAr: 'مكافحة الحشرات ورش المبيدات برابغ',
        serviceEn: 'Pest Control in Rabigh',
        priceNoteAr: 'أسعار مناسبة وضمان معتمد على الإبادة',
        priceNoteEn: 'Affordable rates with certified warranty',
        featuresAr: ['مبيدات آمنة مصرحة صحياً', 'مكافحة صراصير وبق وفئران', 'متابعة دورية مجانية'],
        featuresEn: ['Safe certified insecticides', 'Cockroach, bedbug & rodent control', 'Free follow-up']
      },
      {
        serviceAr: 'تركيب طارد الحمام برابغ',
        serviceEn: 'Bird Deterrent Spikes in Rabigh',
        priceNoteAr: 'سعر خاص للمتر الطولي شاملاً التثبيت',
        priceNoteEn: 'Special rate per linear meter',
        featuresAr: ['ستانلس ستيل أصلي ضد الصدأ الساحلي', 'تثبيت متين وآمن', 'حماية واجهات ومكيفات'],
        featuresEn: ['Rust-proof marine grade', 'Secure durable installation', 'Facade & AC protection']
      },
      {
        serviceAr: 'غسيل مكيفات سبلت برابغ',
        serviceEn: 'Split AC Wash in Rabigh',
        priceNoteAr: 'خصم خاص للكميات والمنازل الكاملة',
        priceNoteEn: 'Multi-unit discount package',
        featuresAr: ['غسيل احترافي بمضخات الضغط', 'حماية تامة للأثاث والجدران', 'تنظيف الفلاتر ومجرى التصريف'],
        featuresEn: ['Pressure pump washing', '100% mess-free', 'Filter & drain pipe descaling']
      },
      {
        serviceAr: 'تنظيف وعزل خزانات المياه برابغ',
        serviceEn: 'Tank Cleaning & Insulation in Rabigh',
        priceNoteAr: 'أسعار عزل تنافسية مع شهادة ضمان معتمدة',
        priceNoteEn: 'Competitive insulation rates with warranty',
        featuresAr: ['سحب الرواسب وتعقيم بالكلور المعتمد', 'عوازل مائية وإيبوكسي عالية الكفاءة', 'حماية من المياه الجوفية والأملاح'],
        featuresEn: ['Sediment removal & disinfection', 'Epoxy & waterproof sealing', 'Salinity & soil protection']
      }
    ],
    faqs: [
      {
        questionAr: 'هل تغطي خدمات شركة مسك كلين جميع أحياء ومناطق محافظة رابغ؟',
        questionEn: 'Do you serve all neighborhoods across Rabigh Governorate?',
        answerAr: 'نعم، نغطي جميع أحياء رابغ بلا استثناء مثل حي المرجان، حي الصفا، حي الصمد، حي النزهة، حي القريقرة، حي الميثب، حي الجود، حي الفريدعية، والمنطقة الصناعية (بترورابغ)، بالإضافة إلى المراكز المجاورة مثل مستورة، صعبر، وكلية.',
        answerEn: 'Yes, we cover all of Rabigh including Al Murjan, Al Safa, Al Samad, Al Nuzha, Al Qariqrah, Petro Rabigh industrial zone, as well as Masturah, Saabar, and Kulayyah.'
      },
      {
        questionAr: 'كيف يمكنني حجز موعد تنظيف منازل أو غسيل مكيفات برابغ؟',
        questionEn: 'How can I book residential cleaning or AC wash in Rabigh?',
        answerAr: 'يمكنكم الحجز فوراً عبر الاتصال بالرقم 0547161157 أو إرسال رسالة واتساب، ويصلكم فريقنا في الموعد المحدد مع كافة المعدات ومواد التنظيف اللازمة.',
        answerEn: 'You can book immediately by calling 0547161157 or messaging via WhatsApp, and our equipped crew will arrive at your scheduled time.'
      }
    ],
    districtsAr: [
      'حي المرجان', 'حي الصفا', 'حي الصمد', 'حي النزهة', 'حي القريقرة',
      'حي الميثب', 'حي الجود', 'حي النعيم', 'حي الفريدعية',
      'المنطقة الصناعية (بترورابغ)', 'صعبر', 'مستورة', 'كلية'
    ],
    districtsEn: [
      'Al Murjan', 'Al Safa', 'Al Samad', 'Al Nuzha', 'Al Qariqrah',
      'Al Maythab', 'Al Jood', 'Al Naeem', 'Al Furaidiyah',
      'Industrial Area (Petro Rabigh)', 'Saabar', 'Masturah', 'Kulayyah'
    ],
    geo: {
      lat: 22.7986,
      lng: 39.0145,
      regionAr: 'منطقة مكة المكرمة - محافظة رابغ',
      regionEn: 'Makkah Province - Rabigh'
    }
  },
  makkah: {
    id: 'makkah',
    nameAr: 'مكة المكرمة',
    nameEn: 'Makkah',
    cityShortAr: 'مكة',
    cityShortEn: 'Makkah',
    titleTagAr: 'شركة تنظيف منازل بمكة | أرخص شركة تنظيف شقق وعزل خزانات ومكافحة حشرات - مسك كلين',
    titleTagEn: 'Home Cleaning, Pest Control & Tank Insulation in Makkah | Mesk Clean',
    metaDescAr: 'مسك كلين أفضل وأرخص شركة تنظيف منازل بمكة، تنظيف شقق وفلل، رش مبيدات ومكافحة حشرات وصراصير وبق وفئران، شركة طارد ومكافحة حمام، غسيل مكيفات سبلت، وعزل وتعقيم خزانات المياه بمكة.',
    metaDescEn: 'Mesk Clean provides certified cleaning, villa & apartment maintenance, pest control, split AC wash, tank insulation, and bird spikes across Makkah at best prices.',
    h1Ar: 'شركة تنظيف منازل بمكة ومكافحة حشرات وعزل خزانات | مسك كلين',
    h1En: 'Home Cleaning, Pest Control & Tank Insulation in Makkah | Mesk Clean',
    introBadgeAr: 'فرع العاصمة المقدسة • تغطية شاملة لكافة أحياء مكة المكرمة 24/7',
    introBadgeEn: 'Makkah Holy City Branch • 24/7 Swift Service Across All Districts',
    introLeadAr: 'نقدم لأهلنا وضيوف الرحمن في مكة المكرمة أعلى مستويات النظافة والتعقيم. إذا كنت تبحث عن أرخص شركة تنظيف بمكة وشركة تنظيف منازل بمكة متخصصة في تنظيف الشقق والفلل وعزل الخزانات ومكافحة الحشرات وتركيب طارد الحمام، فإن مسك كلين هي وجهتك الموثوقة بضمان معتمد وأسعار لا تقبل المنافسة.',
    introLeadEn: 'Serving the Holy City of Makkah with premier home cleaning, apartment sanitization, pest extermination, split AC washing, and water tank insulation with certified warranties.',
    keywords: [
      'شركة تنظيف منازل بمكة',
      'أرخص شركة تنظيف بمكة',
      'شركة تنظيف شقق وفلل بمكة',
      'شركة مكافحة حشرات بمكة',
      'شركة رش مبيدات بمكة',
      'شركة مكافحة صراصير بمكة',
      'شركة مكافحة بق الفراش بمكة',
      'شركة مكافحة فئران بمكة',
      'شركة طارد حمام بمكة',
      'شركة مكافحة حمام بمكة',
      'شركة غسيل مكيفات بمكة',
      'شركة تنظيف مكيفات سبلت بمكة',
      'شركة تنظيف خزانات بمكة',
      'شركة غسيل خزانات المياه بمكة',
      'تعقيم خزانات مياه بمكة',
      'شركة عزل خزانات بمكة'
    ],
    serviceBlocks: [
      {
        id: 'cleaning-makkah',
        h2TitleAr: 'شركة تنظيف منازل بمكة وتنظيف شقق وفلل بمكة',
        h2TitleEn: 'Home, Apartment & Villa Cleaning in Makkah',
        paragraphAr: 'تعتبر مسك كلين الخيار الأول كـ شركة تنظيف منازل بمكة وشركة تنظيف شقق وفلل بمكة. نوفر حلولاً مثالية للعمائر السكنية والفنادق والشقق المفروشة في العزيزية، الشوقية، العوالي، والشرائع، ونضمن تقديم أرخص شركة تنظيف بمكة بأعلى جودة واحترافية.',
        paragraphEn: 'Mesk Clean is the leading residential and hospitality cleaning provider in Makkah, offering immaculate cleaning for villas, apartments, and seasonal residences.',
        bulletPointsAr: [
          'تنظيف شامل وعميق للفلل والقصور والشقق والمجالس والفنادق بمكة',
          'جلي وتلميع الأرضيات والرخام والجرانيت وإزالة الأوساخ المستعصية',
          'تنظيف وتعقيم دورات المياه والمطابخ بمطهرات معتمدة طبياً',
          'خدمة مرونة المواعيد لتناسب أوقات الصلاة والمواسم في مكة المكرمة'
        ],
        bulletPointsEn: [
          'Comprehensive deep clean for villas, apartments, majlis salons & hotels in Makkah',
          'Marble and porcelain floor scrubbing, polishing, and restoration',
          'Hospital-grade sanitization for bathrooms and food preparation zones',
          'Flexible scheduling aligned with prayer times and peak seasons in Makkah'
        ],
        targetKeywords: [
          'شركة تنظيف منازل بمكة',
          'أرخص شركة تنظيف بمكة',
          'شركة تنظيف شقق وفلل بمكة'
        ],
        iconName: 'Home',
        serviceIdRef: 'homes'
      },
      {
        id: 'pest-makkah',
        h2TitleAr: 'شركة مكافحة حشرات ورش مبيدات ومكافحة صراصير وبق وفئران بمكة',
        h2TitleEn: 'Pest Control & Spraying in Makkah',
        paragraphAr: 'إذا كنت تعاني من الآفات، فإن مسك كلين هي شركة مكافحة حشرات بمكة وشركة رش مبيدات بمكة معتمدة وفعالة. نوفر خدمات شركة مكافحة صراصير بمكة بأحدث طعوم الجل، وشركة مكافحة بق الفراش بمكة بالبخار والرش المركز لضمان نوم هادئ، بالإضافة إلى شركة مكافحة فئران بمكة بمصائد متطورة لحماية ممتلكاتكم.',
        paragraphEn: 'Certified pest eradication and insecticide spraying in Makkah, targeting cockroaches, bedbugs, and rodents with family-safe treatments and written warranties.',
        bulletPointsAr: [
          'رش مبيدات عديمة الرائحة ومطابقة للاشتراطات الصحية والبيئية بمكة',
          'إبادة فورية للصراصير الألمانية والأمريكية في المطابخ والصرف الصحي',
          'مكافحة متخصصة لبق الفراش مع فحص شامل وضمان مكتوب',
          'مكافحة واصطياد الفئران والجرذان وسد منافذ الدخول لمنع تكرارها'
        ],
        bulletPointsEn: [
          'Odorless, Ministry-approved insecticides safe for residents and pilgrims',
          'Immediate eradication of cockroaches using German baiting systems',
          'Specialized bedbug eradication with long-term guaranteed protection',
          'Rodent trapping and structural gap sealing preventing re-entry'
        ],
        targetKeywords: [
          'شركة مكافحة حشرات بمكة',
          'شركة رش مبيدات بمكة',
          'شركة مكافحة صراصير بمكة',
          'شركة مكافحة بق الفراش بمكة',
          'شركة مكافحة فئران بمكة'
        ],
        iconName: 'ShieldAlert',
        serviceIdRef: 'pest'
      },
      {
        id: 'bird-makkah',
        h2TitleAr: 'شركة طارد حمام وشركة مكافحة حمام بمكة',
        h2TitleEn: 'Bird Spikes & Pigeon Control in Makkah',
        paragraphAr: 'نظراً لكثرة الحمام في مكة المكرمة وحرمة الطيور، تقدم مسك كلين حلولاً إنسانية متوافقة تماماً كـ شركة طارد حمام بمكة وشركة مكافحة حمام بمكة. نقوم بتركيب أشواك ستانلس ستيل وشبكات حماية على النوافذ والمكيفات والأسطح لمنع هبوط الحمام وبناء الأعشاش دون إيذائه.',
        paragraphEn: 'Humane, aesthetic, and effective pigeon deterrent spikes and anti-bird netting installation across Makkah neighborhoods.',
        bulletPointsAr: [
          'أشواك ستانلس ستيل أصلية غير قابلة للصدأ مع قواعد بوليمرية متينة',
          'شبك مانع للحمام على النوافذ والمناور والأسطح يحمي من الأوساخ والروائح',
          'حماية كاملة لوحدات التكييف والمكيفات السبلت من تراكم الفضلات',
          'طريقة إنسانية وآمنة 100% تحافظ على نظافة الواجهات'
        ],
        bulletPointsEn: [
          'Rust-proof stainless steel spikes with UV-treated polycarbonate bases',
          'Anti-pigeon heavy-duty netting for courtyards, windows, and lightwells',
          'Full protection for split AC compressors from nesting and feathers',
          '100% humane physical barrier keeping facades spotless'
        ],
        targetKeywords: [
          'شركة طارد حمام بمكة',
          'شركة مكافحة حمام بمكة'
        ],
        iconName: 'Bird',
        serviceIdRef: 'bird-netting'
      },
      {
        id: 'ac-makkah',
        h2TitleAr: 'شركة غسيل مكيفات وشركة تنظيف مكيفات سبلت بمكة',
        h2TitleEn: 'Split AC Wash & Cleaning in Makkah',
        paragraphAr: 'لضمان برودة ونقاء الهواء في طقس مكة الحار، تقدم مسك كلين خدمات شركة غسيل مكيفات بمكة وشركة تنظيف مكيفات سبلت بمكة. نقوم بغسيل المكيفات بمضخات ضغط مائي عالية وأكياس مانعة للتسرب لحماية الأثاث والجدران ورفع كفاءة التبريد لأقصى درجة.',
        paragraphEn: 'Optimize your cooling efficiency and indoor air quality in Makkah with our mess-free split AC high-pressure wash and sanitization.',
        bulletPointsAr: [
          'غسيل المكيف السبلت في موقعه دون فك مع عزل وحماية الجدران',
          'تنظيف عميق للفلاتر وحوض الصرف والمبخر والمروحة الداخلية',
          'تطهير الفلاتر بمواد معقمة تقضي على البكتيريا والعفن والروائح',
          'عروض سعرية مخفضة للفلل والفنادق والعمائر السكنية بمكة'
        ],
        bulletPointsEn: [
          'On-site split AC pressure wash with complete wall & floor protection',
          'Deep coil, blower fan, and condensate drain tray cleaning',
          'Antibacterial filter sanitization eliminating dust mites and musty odors',
          'Special discounts for residential buildings, villas, and hotels in Makkah'
        ],
        targetKeywords: [
          'شركة غسيل مكيفات بمكة',
          'شركة تنظيف مكيفات سبلت بمكة'
        ],
        iconName: 'Wind',
        serviceIdRef: 'ac'
      },
      {
        id: 'tanks-makkah',
        h2TitleAr: 'شركة تنظيف خزانات وتعقيم وعزل خزانات بمكة',
        h2TitleEn: 'Water Tank Cleaning, Sterilization & Insulation in Makkah',
        paragraphAr: 'تضمن مسك كلين توفير مياه نقية وصالحة للشرب كـ شركة تنظيف خزانات بمكة وشركة غسيل خزانات المياه بمكة مع تعقيم خزانات مياه بمكة بأعلى المعايير الصحية، بالإضافة إلى تميزنا كـ شركة عزل خزانات بمكة لمعالجة التشققات والتسربات بعوازل إيبوكسية معتمدة.',
        paragraphEn: 'Ensure 100% clean and pure water in Makkah with our certified water tank washing, sediment removal, chlorine sanitization, and leak-proof epoxy insulation.',
        bulletPointsAr: [
          'تفريغ الخزان الأرضي والعلوي وسحب الرواسب والطمي وغسيل الجدران',
          'تعقيم الخزان بمواد مصرحة من هيئة الغذاء والدواء السعودية',
          'عزل الخزانات من الداخل بمواد إيبوكسية وعوازل أسمنتية مانعة للتسرب',
          'فحص شامل ومتابعة دورية مع شهادة ضمان معتمدة على أعمال العزل'
        ],
        bulletPointsEn: [
          'Sediment pumping and mechanical brushing for underground & roof tanks',
          'Disinfection with certified food-grade sterilizers for drinking water safety',
          'Leak-proof epoxy and cementitious waterproofing insulation',
          'Comprehensive inspection and official warranty certificate'
        ],
        targetKeywords: [
          'شركة تنظيف خزانات بمكة',
          'شركة غسيل خزانات المياه بمكة',
          'تعقيم خزانات مياه بمكة',
          'شركة عزل خزانات بمكة'
        ],
        iconName: 'Droplets',
        serviceIdRef: 'tanks'
      }
    ],
    pricingTable: [
      {
        serviceAr: 'تنظيف المنازل والفلل والشقق بمكة',
        serviceEn: 'Residential Cleaning in Makkah',
        priceNoteAr: 'أرخص شركة تنظيف بمكة بأسعار تبدأ من 250 ريال',
        priceNoteEn: 'Starting from 250 SAR with special discounts',
        featuresAr: ['تنظيف متكامل بأحدث الأجهزة', 'فريق مدرب وملتزم بالمواعيد', 'تغطية لكافة أحياء العاصمة المقدسة'],
        featuresEn: ['Full modern equipment deep clean', 'Trained punctual crew', 'Full Makkah city coverage']
      },
      {
        serviceAr: 'مكافحة الحشرات ورش المبيدات بمكة',
        serviceEn: 'Pest Control in Makkah',
        priceNoteAr: 'أسعار مناسبة وضمان معتمد على الإبادة',
        priceNoteEn: 'Affordable rates with certified warranty',
        featuresAr: ['مبيدات آمنة مصرحة صحياً', 'مكافحة صراصير وبق وفئران', 'متابعة دورية مجانية'],
        featuresEn: ['Safe certified insecticides', 'Cockroach, bedbug & rodent control', 'Free follow-up']
      },
      {
        serviceAr: 'تركيب طارد الحمام بمكة',
        serviceEn: 'Bird Deterrent Spikes in Makkah',
        priceNoteAr: 'سعر خاص للمتر الطولي شاملاً التثبيت والضمان',
        priceNoteEn: 'Special rate per linear meter',
        featuresAr: ['أشواك ستانلس ستيل مقاومة للحرارة', 'طريقة إنسانية وآمنة للطيور', 'حماية الواجهات والمكيفات والأسطح'],
        featuresEn: ['Heat-resistant stainless steel', '100% humane to birds', 'Full facade & AC protection']
      },
      {
        serviceAr: 'غسيل مكيفات سبلت بمكة',
        serviceEn: 'Split AC Wash in Makkah',
        priceNoteAr: 'عروض خاصة عند طلب غسيل 3 مكيفات فأكثر',
        priceNoteEn: 'Discounts for 3+ units',
        featuresAr: ['غسيل احترافي بمضخات الضغط', 'حماية تامة للأثاث والجدران', 'تنظيف الفلاتر ومجرى التصريف'],
        featuresEn: ['Pressure pump washing', '100% mess-free', 'Filter & drain pipe descaling']
      },
      {
        serviceAr: 'تنظيف وعزل خزانات المياه بمكة',
        serviceEn: 'Tank Cleaning & Insulation in Makkah',
        priceNoteAr: 'أسعار عزل تنافسية مع شهادة ضمان معتمدة',
        priceNoteEn: 'Competitive insulation rates with warranty',
        featuresAr: ['سحب الرواسب وتعقيم بالكلور المعتمد', 'عوازل مائية وإيبوكسي عالية الكفاءة', 'فحص شامل وكشف تسربات الخزانات'],
        featuresEn: ['Sediment removal & disinfection', 'Epoxy & waterproof sealing', 'Leak detection & warranty']
      }
    ],
    faqs: [
      {
        questionAr: 'ما هي الأحياء التي تغطيها شركة مسك كلين في مكة المكرمة؟',
        questionEn: 'Which neighborhoods does Mesk Clean cover in Makkah?',
        answerAr: 'نغطي جميع أحياء مكة المكرمة بلا استثناء، ومنها: حي العزيزية، حي الشوقية، حي العوالي، حي بطحاء قريش، حي النوارية، حي الشرائع، حي الخالدية، حي التنعيم، حي الكعكية، حي الزايدي (الحمراء)، حي الرصيفة، حي العتيبية، حي العمرة، وغيرها.',
        answerEn: 'We serve all Makkah districts without exception, including Al Aziziyah, Al Shawqiyyah, Al Awali, Batha Quraish, Al Nawwariyyah, Al Sharaea, Al Khalidiyyah, Al Taneem, Al Kakiyyah, Al Zaydi, Al Rusaifah, Al Utaybiyyah, and Al Umrah.'
      },
      {
        questionAr: 'كيف تضمنون أفضل خدمة تنظيف شقق وفلل وعزل خزانات بمكة؟',
        questionEn: 'How do you guarantee quality villa cleaning and tank insulation in Makkah?',
        answerAr: 'نعتمد على طاقم عمل فني مدرب وأحدث الماكينات الإيطالية والألمانية ومواد تعقيم مصرحة، مع تقديم شهادة ضمان مكتوبة وإشراف ميداني مباشر حتى نيل رضا العميل التام.',
        answerEn: 'We employ trained technicians, state-of-the-art Italian & German equipment, and certified sanitizers, backed by written warranties and on-site supervisory inspection.'
      }
    ],
    districtsAr: [
      'حي العزيزية', 'حي الشوقية', 'حي العوالي', 'حي بطحاء قريش', 'حي النوارية',
      'حي الشرائع', 'حي الخالدية', 'حي التنعيم', 'حي الكعكية',
      'حي الزايدي (الحمراء)', 'حي الرصيفة', 'حي العتيبية', 'حي كدي',
      'حي جرول', 'حي الهجرة', 'حي الإسكان', 'حي العمرة', 'حي البحيرات'
    ],
    districtsEn: [
      'Al Aziziyah', 'Al Shawqiyyah', 'Al Awali', 'Batha Quraish', 'Al Nawwariyyah',
      'Al Sharaea', 'Al Khalidiyyah', 'Al Taneem', 'Al Kakiyyah',
      'Al Zaydi (Al Hamra)', 'Al Rusaifah', 'Al Utaybiyyah', 'Kuday',
      'Jarwal', 'Al Hijrah', 'Al Iskan', 'Al Umrah', 'Al Buhayrat'
    ],
    geo: {
      lat: 21.4225,
      lng: 39.7562,
      regionAr: 'منطقة مكة المكرمة - العاصمة المقدسة',
      regionEn: 'Makkah Province - Holy City'
    }
  }
};
