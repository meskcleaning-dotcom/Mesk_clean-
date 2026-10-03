import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'homes',
    name: 'تنظيف المنازل',
    nameEn: 'Home Cleaning',
    description: 'عناية متكاملة بمساحات المنزل وتفاصيله بأحدث المعدات ومواد التنظيف الآمنة.',
    descriptionEn: 'Comprehensive cleaning for all home areas with modern equipment and safe eco-friendly supplies.',
    details: [
      'تنظيف شامل للغرف والممرات والمساحات المشتركة',
      'عناية دقيقة بالأرضيات والأسطح والأبواب والشبابيك',
      'إزالة الغبار والأتربة العالقة باحترافية عالية',
      'تنظيم العمل وفق أولويات واحتياجات منزلك'
    ],
    detailsEn: [
      'Full cleaning for bedrooms, living halls, and corridors',
      'Detailed care for floors, surfaces, doors, and windows',
      'Professional dust and allergen removal with HEPA filtration',
      'Customized scheduling to fit your home routine and priorities'
    ],
    image: '/assets/srv-homes.webp',
    imagePosition: 'center',
    iconName: 'Home',
    active: true
  },
  {
    id: 'villas',
    name: 'تنظيف الفلل',
    nameEn: 'Villa Cleaning',
    description: 'خدمة منظمة تناسب مساحات الفلل الكبيرة والقصور في أحياء جدة ومكة ورابغ.',
    descriptionEn: 'Organized deep cleaning tailored for expansive villas and luxury residences across Jeddah, Makkah, and Rabigh.',
    details: [
      'خطة عمل متكاملة تناسب المساحات المفتوحة والارتفاعات',
      'عناية بالمداخل، الصالونات، الغرف المتعددة، والدرج',
      'معدات احترافية متطورة للتعامل مع مختلف أنواع الأرضيات',
      'فريق عمل متكامل ينجز المهام بأعلى دقة وسرعة'
    ],
    detailsEn: [
      'Structured operational plan for expansive layouts and high ceilings',
      'Care for grand entrances, reception salons, stairs, and master suites',
      'Heavy-duty floor scrubbing and surface polishing technology',
      'Dedicated multi-member crew delivering meticulous and swift results'
    ],
    image: '/assets/srv-villas.webp',
    imagePosition: 'center',
    iconName: 'Building2',
    active: true
  },
  {
    id: 'bird-netting',
    name: 'تركيب شبك حمام أو طارد حمام',
    nameEn: 'Bird Netting & Anti-Pigeon Spikes',
    description: 'تركيب احترافي لشبك وطوارد الحمام والطيور على النوافذ والمكيفات والأسطح بجدة لحماية منزلك من الأوساخ والروائح.',
    descriptionEn: 'Professional installation of stainless steel bird spikes and heavy-duty netting on windows, ACs, and rooftops to prevent bird fouling.',
    details: [
      'تركيب شبك مانع للحمام والطيور فائق المتانة ومقاوم للرطوبة وأشعة الشمس',
      'تثبيت أشواك طارد الحمام من الستانلس ستيل المقاوم للصدأ على النوافذ والمكيفات',
      'حماية واجهات المباني والمكيفات والمناور من فضلات وأعشاش الطيور',
      'تنفيذ دقيق وآمن يحافظ على مظهر الواجهة ويدوم لسنوات طويلة'
    ],
    detailsEn: [
      'Heavy-duty UV-stabilized polymer netting resistant to high heat and humidity',
      'Rust-proof 304 stainless steel spikes secured on window sills and air conditioners',
      'Full protection for facades, light shafts, and balconies from droppings and nesting',
      'Humane, aesthetic, and permanent bird deterrence with multi-year warranty'
    ],
    image: '/assets/srv-bird-netting.webp',
    imagePosition: 'center',
    iconName: 'Bird',
    active: true
  },
  {
    id: 'offices',
    name: 'تنظيف المكاتب',
    nameEn: 'Office & Commercial Cleaning',
    description: 'بيئة عمل نظيفة ومرتبة تعكس الاحترافية وتزيد من إنتاجية الموظفين.',
    descriptionEn: 'Pristine, hygienic work environments that inspire productivity and reflect corporate excellence.',
    details: [
      'تنظيف مكاتب العمل، قاعات الاجتماعات، والاستقبال',
      'عناية بالأرضيات، الواجهات الزجاجية، والأثاث المكتبي',
      'تنفيذ منظم ودقيق يقلل أي تعطيل لسير العمل',
      'خدمة مرنة للمكاتب والشركات في مدينة جدة'
    ],
    detailsEn: [
      'Sanitizing individual workstations, conference boardrooms, and reception lobbies',
      'Specialized care for tiled/carpeted floors, glass partitions, and office furniture',
      'Discreet and efficient scheduling minimizing any disruption to business hours',
      'Flexible recurring corporate contracts with official VAT tax invoicing'
    ],
    image: '/assets/srv-offices.webp',
    imagePosition: 'center',
    iconName: 'Briefcase',
    active: true
  },
  {
    id: 'sofas',
    name: 'تنظيف الكنب بالبخار',
    nameEn: 'Steam Sofa & Majlis Cleaning',
    description: 'تنظيف عميق للكنب بأحدث أجهزة البخار مع الحفاظ التام على جودة ولون الأقمشة.',
    descriptionEn: 'Deep sanitizing and steam extraction for luxury sofas, upholstery, and majlis while preserving delicate fabric texture and color.',
    details: [
      'معالجة متخصصة تناسب نوع القماش والملمس الحساس',
      'استخراج الأوساخ والبقع المستعصية من أعماق الأنسجة',
      'عناية فائقة بالتفاصيل، الحواف، والوسائد',
      'استعادة رونق وجمال الكنب ونظافته'
    ],
    detailsEn: [
      'Customized organic detergent solutions suited for sensitive and luxury fabrics',
      'High-pressure steam injection and extraction lifting deep-seated coffee and oil stains',
      'Detailed sanitization of cushions, seams, decorative folds, and borders',
      'Restores authentic vibrant color, fabric softness, and a fresh lasting fragrance'
    ],
    image: '/assets/srv-sofas.webp',
    imagePosition: 'center',
    iconName: 'Armchair',
    active: true
  },
  {
    id: 'carpets',
    name: 'تنظيف السجاد والموكيت',
    nameEn: 'Steam Carpet & Rug Cleaning',
    description: 'عناية احترافية بألياف السجاد والموكيت تحافظ على نعومتها وألوانها الزاهية.',
    descriptionEn: 'Professional steam washing lifting embedded grit and allergens while reviving carpet pile softness and vibrancy.',
    details: [
      'تنظيف عميق يزيل الأتربة المتغلغلة بين الألياف',
      'معدات مخصصة لاستخلاص الرواسب دون الإضرار بالنسيج',
      'مواد تنظيف معتمدة وآمنة تحافظ على جودة السجاد',
      'مناسب للسجاد اليدوي والموكيت والممرات'
    ],
    detailsEn: [
      'Deep thermal steam washing penetrating deep into heavy carpet fibers',
      'Targeted pre-treatment for heavy traffic zones, beverage spills, and pet odors',
      'Certified non-toxic eco-detergents safeguarding carpet softness and dyes',
      'Safe for handmade Persian rugs, commercial wall-to-wall carpets, and hallway runners'
    ],
    image: '/assets/srv-carpets.webp',
    imagePosition: 'center',
    iconName: 'Layers',
    active: true
  },
  {
    id: 'rodents-reptiles',
    name: 'مكافحة الزواحف والقوارض',
    nameEn: 'Rodents & Reptiles Control',
    description: 'إبادة ومكافحة شاملة للفئران والجرذان والزواحف بأحدث الطعوم والمصائد مع الضمان بجدة.',
    descriptionEn: 'Comprehensive extermination for mice, rats, and reptiles using modern safety bait stations and certified guarantees.',
    details: [
      'فحص ومعاينة دقيقة لمداخل ومخابئ القوارض والزواحف',
      'استخدام طعوم ومصائد آمنة وفعالة مصرحة بيئياً وصحياً',
      'إغلاق وسد الثغرات والفتحات لمنع دخول القوارض نهائياً',
      'متابعة دورية وضمان معتمد لحماية منزلك وممتلكاتك'
    ],
    detailsEn: [
      'Rigorous property inspection mapping burrows, gnaw marks, and entry pathways',
      'Deployment of child and pet-safe tamper-resistant bait stations and traps',
      'Physical exclusion sealing structural gaps, weep holes, and conduit penetrations',
      'Scheduled follow-up inspections with an official warranty certificate'
    ],
    image: '/assets/srv-pest.webp',
    imagePosition: 'center',
    iconName: 'ShieldAlert',
    active: true
  },
  {
    id: 'kitchens',
    name: 'تنظيف المطابخ',
    nameEn: 'Kitchen & Bathroom Deep Cleaning',
    description: 'عناية دقيقة بأسطح وخزائن ومساحات المطبخ لإزالة الدهون وتجديد اللمعان.',
    descriptionEn: 'Intensive degreasing, surface descaling, and clinical disinfection for food preparation zones and kitchen cabinetry.',
    details: [
      'تنظيف الأسطح، مناطق التحضير، والرخام بعناية',
      'إزالة الدهون والزيوت المتراكمة من الشفاط والجدران',
      'تنظيف الخزائن من الخارج وتنظيم محيط المطبخ',
      'مواد آمنة ومعتمدة مناسبة لمناطق إعداد الطعام'
    ],
    detailsEn: [
      'Heavy-duty food-safe degreasing for range hoods, stovetops, and tile backsplashes',
      'Deep descaling and polishing for stainless steel sinks, faucets, and granite counters',
      'Thorough exterior sanitization of kitchen cabinets, shelves, and appliance faces',
      'Hospital-grade antibacterial sanitization ensuring 100% hygienic food preparation'
    ],
    image: '/assets/srv-kitchens.webp',
    imagePosition: 'center',
    iconName: 'UtensilsCrossed',
    active: true
  },
  {
    id: 'ac',
    name: 'غسيل وتنظيف المكيفات',
    nameEn: 'Air Conditioner Cleaning & Washing',
    description: 'غسيل وتنظيف المكيفات للوحدة الداخلية والخارجية وإزالة الأتربة والأوساخ المتراكمة وتنظيف الفلاتر والملفات لتحسين تدفق الهواء والمساعدة في تحسين كفاءة التبريد للمنازل والمكاتب.',
    descriptionEn: 'Professional air conditioner cleaning and washing for indoor and outdoor units, removing dust, washing filters and coils, improving airflow and cooling efficiency for homes and offices.',
    details: [
      'تنظيف شامل للوحدة الداخلية والخارجية وإزالة الأتربة والأوساخ المتراكمة',
      'غسيل الفلاتر والملفات وحوض ومجرى التصريف بأحدث مضخات التنظيف المخصصة',
      'تحسين تدفق الهواء والمساعدة في تحسين كفاءة التبريد ونقاء الأجواء',
      'خدمة متخصصة تلبي احتياجات المنازل والفلل والشقق والمكاتب'
    ],
    detailsEn: [
      'Comprehensive cleaning of indoor and outdoor units, removing accumulated dirt and dust',
      'Washing filters, coils, and condensate drain lines with specialized cleaning equipment',
      'Enhancing airflow and assisting in improving cooling efficiency and indoor air freshness',
      'Dedicated service tailored for homes, apartments, villas, and commercial offices'
    ],
    image: '/assets/srv-ac.webp',
    imagePosition: 'center',
    iconName: 'Wind',
    active: true
  },
  {
    id: 'tanks',
    name: 'تنظيف وعزل الخزانات',
    nameEn: 'Water Tank Cleaning & Insulation',
    description: 'تنظيف الخزانات الأرضية والعلوية والعناية بعزلها لضمان مياه نقية وصحية.',
    descriptionEn: 'Deep mechanical scrubbing, sterilization, and waterproof insulation for underground and elevated water storage tanks.',
    details: [
      'تفريغ الخزان وإزالة الرواسب والطين المتراكم بالقاع',
      'تنظيف وغسيل الجدران الداخلية بمواد آمنة مخصصة لمياه الشرب',
      'فحص ومعاينة التشققات ونقاط التسرب وتطبيق العزل المعتمد',
      'شطف وتعقيم نهائي لتوفير مياه عذبة ونظيفة'
    ],
    detailsEn: [
      'Pumping out stagnant water and vacuum extraction of settled silt and bottom mud',
      'Rotary brush scrubbing of interior walls using food-grade drinking-water approved sanitizers',
      'Detection and repair of hairline fissures using municipality-certified waterproof epoxy insulation',
      'Final chlorine/ozone shock disinfection delivering crystalline, 100% pure drinking water'
    ],
    image: '/assets/srv-tanks.webp',
    imagePosition: 'center',
    iconName: 'Droplets',
    active: true
  },
  {
    id: 'pest',
    name: 'مكافحة الحشرات',
    nameEn: 'Pest Control & Extermination',
    description: 'معالجة مدروسة وفعالة لمشكلات الحشرات والقوارض في المنازل والمباني بجدة.',
    descriptionEn: 'Targeted eradication of crawling and flying pests using odorless, ministry-approved insecticides with guaranteed results.',
    details: [
      'معاينة دقيقة لتحديد بؤر ومسارات نشاط الحشرات',
      'استخدام مبيدات آمنة ومعتمدة تضمن القضاء التام',
      'تغطية الفتحات والمصارف المؤدية لدخول الآفات',
      'إرشادات وقائية مدروسة تساعد على منع عودتها مجدداً'
    ],
    detailsEn: [
      'In-depth entomological assessment identifying nesting harborages and entry paths',
      'Application of odorless, child-safe, and pet-friendly Ministry of Health certified formulas',
      'Targeted gel baiting for German cockroaches and perimeter micro-barrier spraying',
      'Certified long-term prevention guarantee with free booster visits if pests reappear'
    ],
    image: '/assets/srv-pest.webp',
    imagePosition: 'center',
    iconName: 'ShieldAlert',
    active: true
  }
];
