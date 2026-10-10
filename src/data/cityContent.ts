import { BlogPost, FAQItem } from '../types';

export interface CityContentData {
  nameAr: string;
  nameEn: string;
  inCityAr: string;
  inCityEn: string;
  districtsAr: string[];
  blogPosts: BlogPost[];
  faqs: FAQItem[];
}

export const CITY_CONTENT: Record<'jeddah' | 'rabigh' | 'makkah' | 'khulais', CityContentData> = {
  // ==========================================
  // جدة (Jeddah) - المحتوى الأصلي لجدة كما هو
  // ==========================================
  jeddah: {
    nameAr: 'جدة',
    nameEn: 'Jeddah',
    inCityAr: 'بجدة',
    inCityEn: 'in Jeddah',
    districtsAr: [
      'حي الروضة',
      'حي الزهراء',
      'حي الشاطئ',
      'حي النعيم',
      'حي النهضة',
      'حي المحمدية',
      'حي أبحر الشمالية',
      'حي أبحر الجنوبية',
      'حي المرجان',
      'حي البساتين',
      'حي السلامة',
      'حي الصفا',
      'حي المروة',
      'حي الفيصلية',
      'حي الحمراء',
      'حي الأندلس',
      'حي مشرفة',
      'حي العزيزية',
      'حي الرحاب',
      'حي النسيم',
      'حي السليمانية',
      'حي الفيحاء',
      'حي الروابي',
      'حي السامر',
      'حي الأجاويد',
      'حي السنابل',
      'حي الورود',
      'حي الخزامى',
      'حي البغدادية',
      'حي الحمدانية',
      'حي طيبة',
      'حي الصالحية',
      'حي الريان',
      'حي المنار',
      'حي بريمان',
      'حي الفضيلة',
      'حي أخرى في جدة'
    ],
    blogPosts: [
      {
        slug: 'air-conditioner-cleaning',
        title: 'أهمية تنظيف المكيفات في جدة',
        titleEn: 'Importance of Regular AC Cleaning in Jeddah',
        excerpt: 'كيف يساعد الغسيل الدوري للمكيف على تحسين تدفق الهواء والعناية بجودة الجو وترشيد الكهرباء؟',
        excerptEn: 'How regular AC maintenance enhances airflow, indoor air quality, and lowers power consumption in Jeddah climate.',
        intro: 'في أجواء جدة الحارة والرطبة، تعمل أجهزة التكييف لساعات طويلة وتتراكم الأتربة والغبار على الفلاتر والأجزاء الداخلية. لذلك يعد الغسيل المنتظم خطوة جوهرية للحفاظ على كفاءة التبريد ونقاء الهواء داخل مسكنك.',
        introEn: 'In Jeddah’s hot and humid coastal environment, air conditioners run continuously. Dust and mold gather on coils and drainage pans. Regular professional wash keeps cooling efficient and air refreshing.',
        image: '/assets/mesk-blog.webp',
        imagePosition: '0% 0%',
        date: '15 مايو 2024',
        dateEn: 'May 15, 2024',
        readTime: '3 دقائق قراءة',
        readTimeEn: '3 min read',
        sections: [
          {
            title: 'متى يحتاج المكيف إلى الغسيل العميق؟',
            titleEn: 'When Does Your AC Need Deep Sanitization?',
            body: 'ضعف تدفق الهواء، ظهور روائح رطوبة أو غبار غير معتادة، أو تراكم الغبار الظاهر على فتحات المكيف هي مؤشرات تستدعي التدخل الفوري. في مدينة جدة، يُنصح بإجراء غسيل دوري كل 3 إلى 6 أشهر بحسب قرب المنزل من البحر ومواقع البناء والأنشطة.',
            bodyEn: 'Weakened airflow, musty odors, or visible dust along the air vents signal the immediate need for service. In Jeddah, regular cleaning every 3 to 6 months is strongly advised.'
          },
          {
            title: 'خطوات التنظيف الآمن والمنظم',
            titleEn: 'Safe & Structured Cleaning Methodology',
            body: 'يبدأ الفني بفصل التيار الكهربائي وتثبيت أكياس الحماية لعزل الجدران والأرضيات، ثم يُفك الفلتر ويتم غسيل المبخر الداخلي ومجرى تصريف المياه بمضخات ضغط متخصصة تزيل التكلسات دون الإضرار بالملفات الكهربائية.',
            bodyEn: 'The technician safely disconnects the power supply and mounts specialized splash-protection jackets before washing internal cooling coils and water trays with controlled pressure pumps.'
          },
          {
            title: 'فوائد الغسيل المنتظم',
            titleEn: 'Key Advantages of Routine Washing',
            body: 'يؤدي تنظيف المكيف إلى خفض استهلاك الطاقة الكهربائية بنسبة تصل إلى 20%، ويمنع تكاثر الفطريات والبكتيريا المسببة للحساسية، كما يطيل من العمر الافتراضي للجهاز ويمنع تسرب المياه داخل الغرف.',
            bodyEn: 'Routine cleaning cuts power consumption by up to 20%, eliminates airborne allergens and fungi, extends the compressor lifespan, and prevents indoor drainage overflow.'
          }
        ]
      },
      {
        slug: 'sofa-cleaning-methods',
        title: 'نصائح لتنظيف الكنب في المنزل بالبخار',
        titleEn: 'Expert Steam Cleaning Tips for Sofas & Upholstery',
        excerpt: 'خطوات عملية للعناية بالكنب والمجالس واختيار الطريقة المناسبة لكل نوع من الأقمشة الحساسة.',
        excerptEn: 'Practical guidance for preserving sofas and majlis while choosing suitable methods for sensitive luxury fabrics.',
        intro: 'يتعرض الكنب والمجالس للاستخدام اليومي المستمر، ما يجعل الغبار والبقع تتراكم تدريجياً في أعماق الأنسجة. وتبدأ النتيجة المثالية بالتعرف على نوع النسيج واختيار أسلوب التنظيف المناسب.',
        introEn: 'Continuous daily use leads to embedded soil, drink spills, and dust deep in fabric fibers. Optimal cleaning begins with proper fabric identification and calibrated steam temperature.',
        image: '/assets/mesk-blog.webp',
        imagePosition: '50% 0%',
        date: '15 مايو 2024',
        dateEn: 'May 15, 2024',
        readTime: '4 دقائق قراءة',
        readTimeEn: '4 min read',
        sections: [
          {
            title: 'البدء بالتنظيف الجاف وإزالة الغبار',
            titleEn: 'Dry Vacuuming Before Wet Cleaning',
            body: 'قبل إدخال أي رطوبة، يُفضل استخدام مكنسة كهربائية بفرشاة ناعمة لإزالة الغبار الدقيق بين الشقوق والوسائد. هذه الخطوة تمنع تحول الغبار إلى طين عند استخدام البخار.',
            bodyEn: 'Prior to moisture application, thorough high-filtration vacuuming removes loose surface particulates, preventing mud formation during steam extraction.'
          },
          {
            title: 'دور أجهزة البخار المتطورة',
            titleEn: 'The Power of Thermal Steam Extraction',
            body: 'يعمل البخار الساخن المضغوط على تفكيك جزيئات الدهون وبقع المشروبات والزيوت المتراكمة، كما يقضي على عث الغبار والروائح الكريهة دون الحاجة إلى غمر النسيج بكميات ماء كبيرة، مما يضمن سرعة الجفاف.',
            bodyEn: 'Pressurized hot steam breaks down oils, sanitizes dust mites, neutralizes organic odors, and achieves rapid drying without waterlogging delicate foam cushions.'
          },
          {
            title: 'التعامل الفوري مع البقع الطارئة',
            titleEn: 'Immediate Care for Accidental Spills',
            body: 'في حال انسكاب القهوة أو العصير، احرص على استخدام قطعة قماش قطنية نظيفة للضغط والامتصاص فوراً بدون فرك دائري لتفادي توسيع رقعة البقعة أو إتلاف خيوط القماش.',
            bodyEn: 'When tea or coffee spills occur, blot immediately using a clean microfiber cloth without abrasive circular rubbing to protect fine textile threads.'
          }
        ]
      },
      {
        slug: 'water-tank-cleaning',
        title: 'أهمية تنظيف الخزانات بانتظام',
        titleEn: 'Why Regular Water Tank Sanitization Matters',
        excerpt: 'دليل شامل لفهم دور التنظيف والفحص الدوري لخزانات المياه الأرضية والعلوية للمحافظة على صحة الأسرة.',
        excerptEn: 'Comprehensive insights into safeguarding family health through periodic washing and waterproofing inspection.',
        intro: 'قد تتجمع الرواسب والأتربة الدقيقة داخل خزان المياه بمرور الوقت، لذا يساعد الفحص والتنظيف الدوري على إبقاء المياه نقية وصالحة للاستخدام اليومي، واكتشاف أي شروخ أو تسريبات في العزل مبكراً.',
        introEn: 'Sediment and dust naturally settle at the bottom of overhead and underground water reservoirs. Periodic sanitization keeps domestic water sparkling clean and uncovers structural issues early.',
        image: '/assets/mesk-blog.webp',
        imagePosition: '100% 0%',
        date: '10 مايو 2024',
        dateEn: 'May 10, 2024',
        readTime: '4 دقائق قراءة',
        readTimeEn: '4 min read',
        sections: [
          {
            title: 'مخاطر إهمال تنظيف الخزان',
            titleEn: 'Risks of Neglecting Water Tanks',
            body: 'تراكم الرواسب يسبب تغير طعم ورائحة المياه، ويوفر بيئة لنمو الطحالب والبكتيريا. كما أن تسرب المياه من الخزانات الأرضية غير المعزولة قد يؤثر على أساسات المبنى وسلامته الإنشائية.',
            bodyEn: 'Sediment buildup compromises water clarity, encourages microbial growth, and unsealed underground reservoirs may cause subsurface leaks that endanger foundation stability.'
          },
          {
            title: 'مراحل التنظيف المتبعة',
            titleEn: 'Standard Disinfection Protocols',
            body: 'يتم سحب المياه القديمة وإخراج الطمي المترسب، ثم النزول لفرك الجدران والأرضيات بمحاليل تنظيف خاصة معتمدة من الهيئات الصحية، يتبعها شطف متكرر بمياه نقية وضخ محاليل التعقيم الآمنة.',
            bodyEn: 'Technicians evacuate stagnant water, pump out bottom sediment, mechanically scrub interior walls with health-approved solutions, and apply calibrated safe chlorine sanitizers.'
          },
          {
            title: 'فحص جودة العزل المائي',
            titleEn: 'Waterproofing Inspection & Seal Checks',
            body: 'بعد الانتهاء من غسيل الخزان، يقوم الفريق المتخصص بفحص السطح الداخلي للتأكد من عدم وجود تشققات تحتاج إلى عزل إيبوكسي أو عزل أسمنتي معتمد لمقاومة تسربات المياه الجوفية.',
            bodyEn: 'Following thorough washing, the team inspects the concrete interior to verify the integrity of approved epoxy or cementitious waterproofing barriers.'
          }
        ]
      },
      {
        slug: 'home-cleaning-tips',
        title: 'نصائح للحفاظ على نظافة المنزل في جدة',
        titleEn: 'Daily Tips for a Fresh, Dust-Free Home in Jeddah',
        excerpt: 'جدول روتيني بسيط يساعد على إبقاء المنزل مرتباً ومريحاً بين زيارات التنظيف الشامل.',
        excerptEn: 'A streamlined routine to maintain immaculate comfort between scheduled professional deep cleaning sessions.',
        intro: 'الحفاظ على منزل مرتب لا يتطلب ساعات طويلة من التعب اليومي؛ إن تقسيم المهام إلى خطوات قصيرة ومنتظمة يمنع تراكم الأعباء ويجعل البيت واحة نظافة دائمة.',
        introEn: 'Maintaining a clean house in coastal Jeddah does not require endless daily toil. Breaking tasks into brief, consistent micro-habits prevents dirt accumulation and fosters serenity.',
        image: '/assets/mesk-blog.webp',
        imagePosition: '15% 100%',
        date: '05 مايو 2024',
        dateEn: 'May 5, 2024',
        readTime: '3 دقائق قراءة',
        readTimeEn: '3 min read',
        sections: [
          {
            title: 'روتين الصباح والمساء السريع',
            titleEn: 'Quick Morning & Evening Checkpoints',
            body: 'تخصيص 15 دقيقة صباحاً لترتيب الأسرة ومسح طاولات المطبخ، و15 دقيقة مساءً لإعادة الأغراض إلى أماكنها والتخلص من سلة المهملات، يحدث فارقاً ملموساً في مظهر البيت.',
            bodyEn: 'Dedicating 15 minutes each morning to beds and kitchen counters, alongside a 15-minute evening declutter, sustains an orderly and welcoming sanctuary.'
          },
          {
            title: 'مواجهة الغبار والرطوبة في جدة',
            titleEn: 'Managing Coastal Dust & Humidity',
            body: 'إغلاق النوافذ خلال فترات العواصف الرملية أو الرطوبة المرتفعة، واستخدام مساحات مايكروفايبر جافة لالتقاط ذرات الغبار دون بعثرتها في الهواء يضمن أسطحاً لامعة وخالية من البقع.',
            bodyEn: 'Keeping windows closed during windy sand drifts and utilizing dry electrostatic microfiber cloths locks in dust particles without scattering them.'
          },
          {
            title: 'الاستعانة بفرق التنظيف المتخصصة',
            titleEn: 'Partnering with Mesk Clean Specialists',
            body: 'التنظيف الدوري الأسبوعي أو الشهري بواسطة شركة تنظيف متخصصة كمسك كلين يغنيك عن عناء تنظيف المساحات المرتفعة والأجهزة العميقة والمطابخ والكنب بمعدات ومواد احترافية.',
            bodyEn: 'Scheduled deep cleanings with Mesk Clean relieve homeowners from challenging high-altitude dusting, heavy grease removal, and intensive floor treatment.'
          }
        ]
      },
      {
        slug: 'carpet-cleaning-methods',
        title: 'أفضل طرق تنظيف السجاد والموكيت',
        titleEn: 'Proven Techniques for Carpet & Rug Care',
        excerpt: 'كيفية التعامل مع الغبار العالق والبقع والعناية بأنسجة السجاد الفاخر بدون بهتان الألوان.',
        excerptEn: 'Preserving delicate carpet pile and color brilliance while eradicating embedded grit and stubborn spots.',
        intro: 'تختلف طريقة تنظيف السجاد والموكيت بحسب نوع الألياف الطبيعية أو الصناعية وثبات الألوان. ينبغي معرفة نوع الخامة واختيار الطريقة الأنسب لتجنب تلف النسيج.',
        introEn: 'Carpet care varies depending on whether fibers are natural wool, silk, or modern synthetic blends. Knowing the textile safeguards color fastness and structural integrity.',
        image: '/assets/mesk-blog.webp',
        imagePosition: '100% 100%',
        date: '28 أبريل 2024',
        dateEn: 'Apr 28, 2024',
        readTime: '4 دقائق قراءة',
        readTimeEn: '4 min read',
        sections: [
          {
            title: 'العناية بالمكنسة الكهربائية بطريقة متقاطعة',
            titleEn: 'Cross-Directional Vacuuming',
            body: 'تمرير المكنسة في اتجاهات متعامدة يرفع الألياف ويساعد على التخلص من الأتربة العميقة المترسبة في أسفل السجادة، خاصة في ممرات الحركة الكثيفة.',
            bodyEn: 'Vacuuming across perpendicular angles lifts carpet pile and extracts heavy ground grit settled at the backing, especially in high-traffic hallways.'
          },
          {
            title: 'التعامل مع البقع الصعبة فور حدوثها',
            titleEn: 'Instant Spot Treatment Precautions',
            body: 'استخدم محلولاً خفيفاً مخصصاً للسجاد وجربه أولاً على طرف غير ظاهر. تجنب استخدام الكلور أو المبيضات التي تؤدي إلى تآكل الأنسجة وتغير لون الصبغة.',
            bodyEn: 'Always test specialized pH-neutral solutions on an inconspicuous corner first. Never employ harsh chlorine or bleaches that disfigure carpet pigments.'
          },
          {
            title: 'التنظيف العميق واستخلاص الأوساخ',
            titleEn: 'Deep Injection-Extraction Wash',
            body: 'السجاد الموكيت يحتاج بين الحين والآخر إلى غسيل متطور بتقنية الحقن والاستخلاص لشفط الرواسب المعقدة وتطهير الألياف، وهو ما تقدمه مسك كلين بأعلى معايير الدقة.',
            bodyEn: 'Commercial and residential carpeting benefits immensely from deep injection-extraction steam washing performed by Mesk Clean crews.'
          }
        ]
      }
    ],
    faqs: [
      {
        id: 'faq-jeddah-1',
        question: 'ما هي الأحياء والمناطق التي تغطيها شركة مسك كلين في جدة؟',
        questionEn: 'Which areas and districts does Mesk Clean cover in Jeddah?',
        answer: 'نغطي جميع أحياء مدينة جدة بلا استثناء، بما في ذلك أحياء شمال جدة (الروضة، الزهراء، الشاطئ، النعيم، النهضة، المحمدية، أبحر الشمالية والجنوبية، المرجان، البساتين)، ووسط جدة (السلامة، الصفا، المروة، الحمراء، الأندلس)، وجنوب وشرق جدة (الرحاب، النسيم، السليمانية، السامر، الحمدانية). نصلكم أينما كنتم بسيارات مجهزة بالكامل.',
        answerEn: 'We cover all districts across Jeddah without exception, including North Jeddah (Al Rawdah, Al Zahra, Al Shati, Obhur, Al Mohammediyah), Central Jeddah (Al Salamah, Al Safa, Al Hamra), and South/East Jeddah (Al Samer, Al Hamdaniyah) with fully equipped mobile teams.',
        category: 'التغطية والوصول'
      },
      {
        id: 'faq-jeddah-2',
        question: 'كيف يتم تركيب شبك وطارد الحمام، وهل يضر بالطيور أو بشكل المبنى؟',
        questionEn: 'How are bird netting and spikes installed, and do they harm birds or facade aesthetics?',
        answer: 'نستخدم أشواك ستانلس ستيل غير قابلة للصدأ مع قواعد بوليمرية شفافة وشبكات قوية مقاومة لأشعة الشمس والحرارة. النظام يعمل كمانع ميكانيكي آمن يمنع هبوط الحمام وبناء الأعشاش دون إيذائها إطلاقاً، وتثبيتها احترافي يحافظ على جمال وأناقة واجهة المبنى.',
        answerEn: 'We install rust-proof stainless steel spikes with transparent polycarbonate bases and UV-treated heavy-duty netting. The system provides a safe physical barrier preventing birds from landing or nesting without harming them.',
        category: 'شبك وطارد الحمام'
      },
      {
        id: 'faq-jeddah-3',
        question: 'هل توفرون خدمة تنظيف الكنب والسجاد بالبخار ومكافحة القوارض والزواحف بجدة؟',
        questionEn: 'Do you provide on-site steam cleaning and rodent control in Jeddah?',
        answer: 'نعم، نوفر غسيل الكنب والسجاد بالبخار بأحدث ماكينات الحقن والشفط، كما نقدم خدمات مكافحة متخصصة للقوارض والزواحف والحشرات باستخدام طعوم ومبيدات آمنة ومعتمدة.',
        answerEn: 'Yes! We provide on-site steam cleaning for sofas and carpets with rapid extraction, as well as specialized extermination for rodents, reptiles, and pests.',
        category: 'الخدمات العامة'
      },
      {
        id: 'faq-jeddah-4',
        question: 'ما هي المواد المستخدمة في غسيل وتعقيم خزانات المياه بجدة؟',
        questionEn: 'What materials are used for water tank cleaning and sterilization in Jeddah?',
        answer: 'نعتمد فقط مواد تعقيم ومطهرات معتمدة ومطابقة للمواصفات القياسية السعودية (SASO) والصحية. يتم سحب الرواسب، فرك الجدران والأرضيات، والتعقيم بالكلور بالنسب الآمنة لضمان مياه نقية وصالحة للشرب.',
        answerEn: 'We exclusively utilize SASO and health-authority approved sanitizers. Tanks undergo full sediment pumping, mechanical scrubbing, and precision disinfection.',
        category: 'الخزانات والمياه'
      },
      {
        id: 'faq-jeddah-5',
        question: 'هل تقدمون خدماتكم للشركات والمؤسسات والجهات التجارية بجدة؟',
        questionEn: 'Do you provide services for commercial companies, offices, and institutions in Jeddah?',
        answer: 'نعم، نقدم عقود تنظيف دورية وخدمات تنظيف فورية للشركات، المكاتب، المعارض، الفنادق، والمؤسسات بجدة، مع توفير فواتير ضريبية نظامية معتمدة من هيئة الزكاة والضريبة والجمارك.',
        answerEn: 'Yes, we provide routine and one-time cleaning contracts for corporations, commercial offices, showrooms, and hotels in Jeddah, complete with official VAT invoices.',
        category: 'الشركات والجهات'
      },
      {
        id: 'faq-jeddah-6',
        question: 'كيف يمكنني حجز موعد وما هي طرق الدفع المتاحة؟',
        questionEn: 'How can I book an appointment and what are the payment methods?',
        answer: 'يمكنك الحجز بسهولة عبر نموذج الحجز في الموقع، أو الاتصال المباشر، أو التواصل عبر واتساب. نوفر الدفع عند إتمام الخدمة نقداً أو عبر التحويل البنكي أو بطاقات مدى وفيزا.',
        answerEn: 'You can book easily via our website booking form, phone call, or WhatsApp. We accept cash on delivery, bank transfer, and Mada / credit cards upon your full satisfaction.',
        category: 'الحجز والدفع'
      }
    ]
  },

  // ==========================================
  // مكة المكرمة (Makkah)
  // ==========================================
  makkah: {
    nameAr: 'مكة المكرمة',
    nameEn: 'Makkah',
    inCityAr: 'بمكة المكرمة',
    inCityEn: 'in Makkah',
    districtsAr: [
      'حي العزيزية',
      'حي الشوقية',
      'حي العوالي',
      'حي بطحاء قريش',
      'حي النوارية',
      'حي الشرائع',
      'حي الخالدية',
      'حي التنعيم',
      'حي الكعكية',
      'حي الزايدي (الحمراء)',
      'حي الرصيفة',
      'حي العتيبية',
      'حي كدي',
      'حي جرول',
      'حي الهجرة',
      'حي الإسكان',
      'حي العمرة',
      'حي البحيرات',
      'حي أخرى في مكة'
    ],
    blogPosts: [
      {
        slug: 'makkah-villa-and-building-cleaning',
        title: 'دليل تنظيف الفلل والعمائر السكنية بمكة المكرمة',
        titleEn: 'Comprehensive Guide to Villa & Building Cleaning in Makkah',
        excerpt: 'كيف تتعامل مع الأتربة الناعمة وطبيعة تضاريس مكة المكرمة في تنظيف الواجهات والأحواش والمجالس؟',
        excerptEn: 'How to tackle fine dust and terrain challenges when cleaning building facades, courtyards, and majlis in Makkah.',
        intro: 'تتميز مكة المكرمة بمناخ جاف وحار وتضاريس جبلية تحيط بالمباني، ما يجعل الغبار الحجري والرمال الناعمة تستقر سريعاً على واجهات العمائر ونوافذ الفلل وأفنيتها الخارجية. يتطلب هذا الوضع أسلوب تنظيف متدرج يعتني بالأرضيات والمداخل والمجالس دون هدر للمياه.',
        introEn: 'Holy Makkah features a dry, sunny mountain climate where fine mineral dust settles on villa exteriors and building staircases. Structured multi-stage deep cleaning keeps large residential properties pristine.',
        image: '/assets/mesk-blog.webp',
        imagePosition: '0% 0%',
        date: '20 مايو 2024',
        dateEn: 'May 20, 2024',
        readTime: '4 دقائق قراءة',
        readTimeEn: '4 min read',
        sections: [
          {
            title: 'تنظيف الواجهات والأحواش من الغبار الجبلي',
            titleEn: 'Courtyard & Facade Dust Removal in Mountain Surroundings',
            body: 'تراكم الأتربة على درابزين السلالم وأرضيات الأحواش يحتاج إلى إزالة جافة أولاً بمكانس متخصصة قبل الغسيل بالماء المضغوط، لتجنب تحول الغبار الدقيق إلى طبقة طينية على البلاط والرخام.',
            bodyEn: 'Heavy dust settling on outdoor tiles and exterior railings requires dry suction prior to controlled water pressure cleaning to prevent mud formation on stone surfaces.'
          },
          {
            title: 'العناية بمجالس الضيافة وصالات الاستقبال',
            titleEn: 'Reception Majlis & Upholstery Care',
            body: 'تشهد بيوت ومنازل مكة توافد الضيوف على مدار العام، مما يجعل المجالس والكنب عرضة للبقع المتكررة. يساعد استخدام أجهزة البخار الحار على تعقيم ألياف الأقمشة وإعادة رونق الألوان بسرعة جفاف مناسبة.',
            bodyEn: 'Welcoming guests year-round in Makkah majlis requires periodic steam sanitization of luxury sofa fabrics, neutralizing spots and restoring vibrant textures quickly.'
          },
          {
            title: 'حماية النوافذ من أسراب الحمام',
            titleEn: 'Deterring Pigeons Around Residential Facades',
            body: 'انتشار الحمام حول واجهات العمائر السكنية بمكة يستدعي حماية حواف الشبابيك والمكيفات بتركيب طوارد استانلس متينة لمنع تراكم الفضلات والروائح المزعجة حول غرف النوم والصالات.',
            bodyEn: 'Dense bird populations around residential buildings call for durable stainless steel spikes and window netting to preserve air quality and facade hygiene.'
          }
        ]
      },
      {
        slug: 'makkah-water-tank-insulation-hygiene',
        title: 'أهمية غسيل وعزل خزانات المياه في مكة المكرمة',
        titleEn: 'Water Tank Sanitization & Epoxy Insulation in Makkah',
        excerpt: 'لماذا يحتاج خزان المياه في مكة إلى فحص دوري وعزل معتمد ضد درجات الحرارة المرتفعة؟',
        excerptEn: 'Why Makkah residential water tanks require routine cleaning and approved epoxy sealing against peak summer heat.',
        intro: 'نظراً للاستهلاك المرتفع للمياه ودرجات الحرارة العالية خلال أشهر الصيف في مكة المكرمة، تصبح خزانات المياه الأرضية والعلوية نقطة حيوية تتطلب رقابة دورية للتأكد من خلوها من الرواسب الطميية والطحالب وسلامة جدرانها من التشققات.',
        introEn: 'High domestic water demand and scorching summer temperatures in Makkah make water tanks a critical focus area. Regular sediment extraction ensures safe household water.',
        image: '/assets/mesk-blog.webp',
        imagePosition: '100% 0%',
        date: '18 مايو 2024',
        dateEn: 'May 18, 2024',
        readTime: '3 دقائق قراءة',
        readTimeEn: '3 min read',
        sections: [
          {
            title: 'تأثير درجات الحرارة على مياه الخزان العلوي',
            titleEn: 'Heat Impact on Overhead Reservoirs',
            body: 'يؤدي التعرض المباشر لأشعة الشمس الحارقة إلى سخونة المياه داخل الخزانات العلوية، ما قد يساعد على تكاثر الطحالب المجهرية إذا لم يكن الخزان معزولاً ومغلقاً بإحكام تام بأغطية محكمة.',
            bodyEn: 'Intense direct sunlight can warm overhead tanks and foster microscopic algae growth if tanks lack certified insulation jackets and airtight inspection covers.'
          },
          {
            title: 'خطوات تنظيف الخزان الأرضي بمكة',
            titleEn: 'Underground Tank Cleaning Workflow in Makkah',
            body: 'يقوم الفريق بسحب المياه الراكدة وضخ الرواسب المتجمعة في القاع، يليه تنظيف الجدران بمواد تعقيم مصرحة ومطابقة للمواصفات الصحية، وشطف الخزان جيداً قبل إعادة ملئه بالمياه العذبة.',
            bodyEn: 'Technicians evacuate residual water, pump bottom silt, scrub concrete walls with approved sanitizers, and perform double rinses before refilling with fresh municipal water.'
          },
          {
            title: 'الكشف عن التشققات والعزل المائي',
            titleEn: 'Checking for Hairline Fractures & Insulation',
            body: 'فحص فواصل الخرسانة والتأكد من عدم وجود تسربات يحمي أساسات المنزل، وتطبيق مادة عازلة مخصصة لمياه الشرب يمنع تسرب المياه إلى الخارج أو اختلاطها بأي مياه غير نقية.',
            bodyEn: 'Inspecting concrete joints guards foundation stability, while food-grade interior waterproofing barriers prevent leakage and protect drinking water quality.'
          }
        ]
      },
      {
        slug: 'makkah-ac-efficiency-summer',
        title: 'كيف تحافظ على كفاءة تكييف منزلك في حرارة مكة؟',
        titleEn: 'Maintaining High AC Cooling Efficiency in Makkah Summers',
        excerpt: 'إرشادات عملية لتنظيف مكيفات السبليت والشباك وتفادي انسداد مجاري التصريف في العاصمة المقدسة.',
        excerptEn: 'Practical guidance for washing split ACs and preventing drainage line clogs under high summer loads in Makkah.',
        intro: 'تعمل المكيفات في مكة المكرمة بصفة متواصلة لمواجهة الارتفاع الملحوظ في درجات الحرارة. هذا الحمل المستمر مع وجود ذرات الغبار المتطاير يؤدي إلى تراكم الأوساخ على زعانف المبخر وسد مجاري تصريف المياه، مما يقلل من برودة الهواء ويزيد من استهلاك الطاقة.',
        introEn: 'Air conditioners in Makkah operate continuously under intense heat. Fine dust layers settle onto evaporator coils, restricting airflow and placing heavy strain on compressors.',
        image: '/assets/mesk-blog.webp',
        imagePosition: '50% 0%',
        date: '12 مايو 2024',
        dateEn: 'May 12, 2024',
        readTime: '3 دقائق قراءة',
        readTimeEn: '3 min read',
        sections: [
          {
            title: 'تنظيف الفلاتر المنزلية بشكل دوري',
            titleEn: 'Routine Filter Washing at Home',
            body: 'غسيل الفلاتر البلاستيكية بالماء الفاتر وتجفيفها كل أسبوعين في أوقات الذروة يمنع تراكم الغبار السطحي ويساعد مروحة المكيف على دفع الهواء النقي دون مقاومة.',
            bodyEn: 'Washing air filters every two weeks during peak cooling season prevents initial dust buildup and allows internal blowers to circulate fresh air freely.'
          },
          {
            title: 'الغسيل العميق للوحدة الداخلية بمضخة الضغط',
            titleEn: 'Internal Unit Deep Wash with Pressure Pumps',
            body: 'يحتاج المكيف إلى تنظيف عميق بواسطة فنيين يركبون مظلة واقية لحماية الجدران، ويقومون بغسيل زعانف الألمنيوم وحوض الصرف بمضخات ماء مخصصة تزيل الرواسب العميقة.',
            bodyEn: 'Deep cleaning involves wall-protective catch bags, specialized chemical coil washes, and flushing drainage troughs to eliminate stubborn blockages.'
          }
        ]
      }
    ],
    faqs: [
      {
        id: 'faq-makkah-1',
        question: 'ما هي الأحياء والمناطق التي تغطيها شركة مسك كلين في مكة المكرمة؟',
        questionEn: 'Which areas and districts does Mesk Clean cover in Makkah?',
        answer: 'نغطي كافة أحياء العاصمة المقدسة مكة المكرمة، بما في ذلك: حي العزيزية، حي الشوقية، حي العوالي، حي بطحاء قريش، حي النوارية، حي الشرائع، حي الخالدية، حي التنعيم، حي الكعكية، حي الزايدي (الحمراء)، حي الرصيفة، حي العتيبية، حي كدي، حي جرول، حي الهجرة، حي الإسكان، حي العمرة، وحي البحيرات، بالإضافة إلى المخططات السكنية المجاورة.',
        answerEn: 'We cover all districts across Holy Makkah, including: Al Aziziyah, Al Shawqiyyah, Al Awali, Batha Quraish, Al Nawwariyyah, Al Sharaea, Al Khalidiyyah, Al Taneem, Al Kakiyyah, Al Zaydi, Al Rusaifah, Al Utaybiyyah, Kuday, Jarwal, Al Hijrah, Al Iskan, Al Umrah, and Al Buhayrat.',
        category: 'التغطية والوصول'
      },
      {
        id: 'faq-makkah-2',
        question: 'كيف تتعاملون مع مشكلة أسراب الحمام في مباني وعمائر مكة المكرمة؟',
        questionEn: 'How do you handle pigeon deterrence on Makkah building facades?',
        answer: 'نوفر حلولاً ميكانيكية متينة تشمل تركيب أشواك ستانلس ستيل غير قابلة للصدأ على حواف النوافذ وأسطح المكيفات، إلى جانب تركيب شبك حماية شفاف ومقاوم للحرارة فوق المناور والأسطح لمنع الحمام من التعشيش دون إيذائه.',
        answerEn: 'We install heavy-duty stainless steel bird spikes on window ledges and outdoor AC units, alongside transparent UV-resistant netting across courtyards to deter nesting without harming birds.',
        category: 'شبك وطارد الحمام'
      },
      {
        id: 'faq-makkah-3',
        question: 'هل توفرون تنظيف وغسيل خزانات المياه وعزلها بمكة المكرمة؟',
        questionEn: 'Do you provide water tank cleaning and insulation in Makkah?',
        answer: 'نعم، نوفر غسيل وتعقيم الخزانات الأرضية والعلوية بمواد مصرحة صحياً لإزالة الرواسب والطحالب، مع فحص التشققات وتطبيق مواد عزل مائي معتمدة لحماية المياه وأساسات المبنى.',
        answerEn: 'Yes! We provide thorough washing, sediment pumping, and approved sanitization for underground and elevated water tanks in Makkah, along with certified waterproofing checks.',
        category: 'الخزانات والمياه'
      },
      {
        id: 'faq-makkah-4',
        question: 'هل يشمل عملكم تنظيف الفلل والعمائر بعد التشطيب والدهان بمكة؟',
        questionEn: 'Do you provide post-construction and post-renovation cleaning in Makkah?',
        answer: 'نعم، نمتلك فرقاً مجهزة بمعدات جلي السيراميك والرخام، إزالة بقايا البوية والترويبة، وتنظيف النوافذ والأبواب والمطابخ لتسليم العقار جاهزاً تماماً للسكن.',
        answerEn: 'Yes, our crews are equipped with heavy floor scrubbers to remove plaster and paint residues, polish tiles, and sanitize kitchens and bathrooms for immediate move-in readiness.',
        category: 'الخدمات العامة'
      },
      {
        id: 'faq-makkah-5',
        question: 'هل تقدمون خدمات التنظيف بالبخار للمجالس والكنب في منازل مكة؟',
        questionEn: 'Do you offer on-site steam cleaning for majlis sofas and carpets in Makkah?',
        answer: 'نعم، نصل إلى موقعك بماكينات البخار الحار والحقن والشفط لغسيل أطقم الكنب والمجالس والمفروشات والسجاد في مكانها مع إزالة البقع والروائح وضمان جفاف سريع.',
        answerEn: 'Yes, we arrive on-site with high-temperature steam extraction equipment to deep-clean sofas, Arabic majlis seating, and carpets, removing stubborn stains with fast drying times.',
        category: 'تنظيف المفروشات'
      },
      {
        id: 'faq-makkah-6',
        question: 'كيف يمكن حجز موعد في مكة المكرمة وما هي طرق الدفع؟',
        questionEn: 'How can I book a service in Makkah and what payment methods are available?',
        answer: 'يمكنك الحجز بسهولة عبر نموذج الحجز بالموقع أو الاتصال المباشر أو المحادثة عبر واتساب. والدفع يتم بعد إتمام العمل ورضاك التام نقداً أو عبر التحويل البنكي أو بطاقات مدى.',
        answerEn: 'You can book easily via our online booking form, direct call, or WhatsApp. Payment is processed upon satisfactory completion via cash, bank transfer, or Mada debit card.',
        category: 'الحجز والدفع'
      }
    ]
  },

  // ==========================================
  // رابغ (Rabigh)
  // ==========================================
  rabigh: {
    nameAr: 'رابغ',
    nameEn: 'Rabigh',
    inCityAr: 'برابغ',
    inCityEn: 'in Rabigh',
    districtsAr: [
      'حي المرجان',
      'حي الصفا',
      'حي الصمد',
      'حي النزهة',
      'حي القريقرة',
      'حي الميثب',
      'حي الجود',
      'حي النعيم',
      'حي الفريدعية',
      'المنطقة الصناعية (بترورابغ)',
      'صعبر',
      'مستورة',
      'كلية',
      'حي أخرى في رابغ'
    ],
    blogPosts: [
      {
        slug: 'rabigh-coastal-cleaning-ac-care',
        title: 'التعامل مع الرطوبة الساحلية وأثرها على مباني رابغ',
        titleEn: 'Managing Coastal Humidity & Salt Air on Buildings in Rabigh',
        excerpt: 'كيف تحمي منزلك وأجهزة التكييف والواجهات من الرطوبة والأملاح المحمولة برياح البحر في رابغ؟',
        excerptEn: 'Protecting residential villas, AC outdoor units, and glass facades from coastal salt air and humidity in Rabigh.',
        intro: 'تطل محافظة رابغ على ساحل البحر الأحمر، ما يجعلها عرضة لمستويات رطوبة مرتفعة ورياح محملة بذرات الأملاح الدقيقة. هذه الظروف تؤثر تدريجياً على واجهات المنازل وتؤدي إلى تراكم طبقات ملحية على زعانف المكيفات الخارجية وإطارات النوافذ، مما يستدعي عناية تنظيف وقائية منتظمة.',
        introEn: 'Situated along the Red Sea coast, Rabigh experiences high ambient humidity and marine salt breeze. Regular maintenance safeguards building facades and external AC coils against corrosion.',
        image: '/assets/mesk-blog.webp',
        imagePosition: '50% 0%',
        date: '22 مايو 2024',
        dateEn: 'May 22, 2024',
        readTime: '3 دقائق قراءة',
        readTimeEn: '3 min read',
        sections: [
          {
            title: 'حماية وحدات التكييف من ترسبات الأملاح',
            titleEn: 'Shielding AC Condensers from Marine Salt Layers',
            body: 'غسيل الوحدات الخارجية للمكيفات بالماء العذب بضغط معتدل يزيل طبقة الملح العالقة على أنابيب النحاس وزعانف الألمنيوم، ويمنع تآكلها ويحافظ على سرعة تبريد الهواء داخل الغرف.',
            bodyEn: 'Washing exterior condenser coils with fresh pressurized water strips corrosive salt residues, preserving heat exchange efficiency and preventing metal fatigue.'
          },
          {
            title: 'تنظيف الزجاج والألمنيوم من التغبيش الملحي',
            titleEn: 'Eliminating Salt Film from Glass & Aluminum Windows',
            body: 'تراكم رذاذ البحر على الواجهات الزجاجية يجعل الرؤية ضبابية، واستخدام محاليل تنظيف متوازنة مع مساحات مطاطية مخصصة يعيد للزجاج شفافيته ولمعانه ويحمي إطارات الألمنيوم.',
            bodyEn: 'Marine mist leaves a hazy mineral layer on window panes. Professional squeegeeing with pH-balanced detergents restores glass clarity and protects window tracks.'
          }
        ]
      },
      {
        slug: 'rabigh-pest-and-rodent-prevention',
        title: 'طرق الوقاية من القوارض والآفات في المنشآت والمنازل برابغ',
        titleEn: 'Preventative Rodent & Pest Control for Homes and Facilities in Rabigh',
        excerpt: 'إرشادات عملية لتأمين المستودعات والفلل والمجمعات السكنية في رابغ من الفئران والحشرات الزاحفة.',
        excerptEn: 'Practical guidance to safeguard villas, storehouses, and residential camps in Rabigh against rodents and crawling pests.',
        intro: 'نظراً للتوسع العمراني ووجود مجمعات سكنية ومناطق صناعية ومفتوحة في رابغ ومحيطها (مثل صعبر ومستورة وبترورابغ)، تصبح الإجراءات الوقائية ضد القوارض والآفات ضرورة للحفاظ على سلامة المخازن والمساكن وصحة القاطنين.',
        introEn: 'With residential quarters and open industrial sectors in Rabigh, proactive rodent deterrence and crawl-space pest management protect living spaces and commercial storage.',
        image: '/assets/mesk-blog.webp',
        imagePosition: '0% 0%',
        date: '19 مايو 2024',
        dateEn: 'May 19, 2024',
        readTime: '4 دقائق قراءة',
        readTimeEn: '4 min read',
        sections: [
          {
            title: 'سد الفتحات وتأمين المداخل',
            titleEn: 'Sealing Gaps and Foundation Entry Points',
            body: 'تفتيش محيط المبنى وإغلاق الفراغات حول تمديدات الأنابيب وأسفل الأبواب الخارجية بسدادات معدنية يمنع دخول القوارض والزواحف إلى داخل الغرف والمستودعات.',
            bodyEn: 'Inspecting perimeter perimeters and blocking cable passages with metal mesh prevents rodent intrusion into residential rooms and facility storerooms.'
          },
          {
            title: 'المكافحة الآمنة بالطعوم المعتمدة',
            titleEn: 'Targeted Control with Certified Baits',
            body: 'توزيع محطات طعوم آمنة ومغلقة في الزوايا الخارجية يحد من تكاثر القوارض دون تعريض الأطفال أو الحيوانات الأليفة لأي خطر، مع متابعة دورية لضمان خلو الموقع تماماً.',
            bodyEn: 'Deploying tamper-resistant bait stations in outdoor perimeter corners controls rodent populations safely without hazard to children or pets.'
          }
        ]
      },
      {
        slug: 'rabigh-water-tank-sanitization',
        title: 'العناية بنظافة خزانات المياه في محافظة رابغ',
        titleEn: 'Ensuring Clean Domestic Water Tanks in Rabigh',
        excerpt: 'كيف تضمن نقاء مياه الشرب والاستخدام المنزلي في الخزانات الأرضية والعلوية برابغ؟',
        excerptEn: 'Ensuring sparkling clean drinking and domestic water in underground and roof tanks across Rabigh neighborhoods.',
        intro: 'تعتمد منازل وفلل ومنشآت رابغ على تخزين المياه في خزانات أرضية وعلوية. يحتاج الخزان إلى تنظيف دوري لإزالة الترسبات الرملية التي قد تنتقل مع شبكة التغذية وضمان بقاء المياه نقية وصحية للاستخدام اليومي.',
        introEn: 'Homes and company accommodations in Rabigh rely heavily on water storage tanks. Regular sanitization purges bottom sediments and keeps everyday water crystal clear.',
        image: '/assets/mesk-blog.webp',
        imagePosition: '100% 0%',
        date: '14 مايو 2024',
        dateEn: 'May 14, 2024',
        readTime: '3 دقائق قراءة',
        readTimeEn: '3 min read',
        sections: [
          {
            title: 'تنظيف الرواسب والشوائب في قاع الخزان',
            titleEn: 'Extracting Bottom Sediments and Sand',
            body: 'تفريغ المياه القديمة وسحب الطين والرواسب الرملية بفرك الجدران بفرش مخصصة ومواد تعقيم صحية يمنع تغير لون أو رائحة المياه داخل المنزل.',
            bodyEn: 'Draining old water, vacuuming accumulated fine sand, and scrubbing concrete walls with certified sanitizers preserves water freshness.'
          },
          {
            title: 'التأكد من إحكام إغلاق الخزان',
            titleEn: 'Securing Tank Lids Against Coastal Winds',
            body: 'التأكد من سلامة الغطاء العلوي ووجود حواف مانعة لدخول الأتربة والحشرات المنقولة برياح البحر يضمن بقاء المياه نقية بين فترات التنظيف.',
            bodyEn: 'Ensuring rubber gaskets and tight covers on inspection hatches blocks wind-borne dust and pests from contaminating domestic water.'
          }
        ]
      }
    ],
    faqs: [
      {
        id: 'faq-rabigh-1',
        question: 'ما هي الأحياء والمناطق التي تغطيها شركة مسك كلين في رابغ؟',
        questionEn: 'Which areas and districts does Mesk Clean cover in Rabigh?',
        answer: 'نغطي جميع أحياء ومراكز محافظة رابغ، بما في ذلك: حي المرجان، حي الصفا، حي الصمد، حي النزهة، حي القريقرة، حي الميثب، حي الجود، حي النعيم، حي الفريدعية، المنطقة الصناعية (بترورابغ)، بالإضافة إلى مراكز صعبر، مستورة، وكلية.',
        answerEn: 'We cover all districts and sectors across Rabigh, including: Al Murjan, Al Safa, Al Samad, Al Nuzha, Al Qariqrah, Al Maythab, Al Jood, Al Naeem, Al Furaidiyah, the Industrial Area (Petro Rabigh), Saabar, Masturah, and Kulayyah.',
        category: 'التغطية والوصول'
      },
      {
        id: 'faq-rabigh-2',
        question: 'هل تقدمون خدمات التنظيف لمجمعات الشركات وسكن الموظفين برابغ؟',
        questionEn: 'Do you offer cleaning services for company camps and employee housing in Rabigh?',
        answer: 'نعم، نوفر خدمات تنظيف دورية وعقوداً مخصصة للمكاتب الإدارية، غرف سكن الموظفين، والمستودعات في رابغ وبترورابغ، مع توفير فواتير رسمية معتمدة.',
        answerEn: 'Yes, we provide flexible periodic cleaning contracts and one-time deep cleaning for corporate offices, workforce accommodations, and storage facilities in Rabigh with official invoices.',
        category: 'الشركات والجهات'
      },
      {
        id: 'faq-rabigh-3',
        question: 'كيف تتم حماية وحدات التكييف من الأملاح والرطوبة برابغ؟',
        questionEn: 'How do you clean and protect air conditioner units in coastal Rabigh?',
        answer: 'يقوم فريقنا بغسيل الزعانف الداخلية والخارجية بمضخات ماء مخصصة لإزالة الأملاح والغبار المتراكم، واستخدام أكياس عزل لحماية الجدران والأثاث أثناء عملية الغسيل.',
        answerEn: 'Our technicians wash internal coils and external condensers using pressure washers and splash jackets, removing stubborn salt encrustation to boost cooling power.',
        category: 'المكيفات'
      },
      {
        id: 'faq-rabigh-4',
        question: 'هل تتوفر لديكم خدمات مكافحة القوارض والآفات في رابغ ومستورة؟',
        questionEn: 'Do you provide pest and rodent control in Rabigh and Masturah?',
        answer: 'نعم، نقدم حلول مكافحة متقدمة للقوارض، الصراصير، والنمل الأبيض باستخدام طعوم ومبيدات آمنة ومرخصة، مع فحص فتحات الدخول وتأمين الموقع بالكامل.',
        answerEn: 'Yes, we deliver targeted rodent and crawling pest extermination for residences, warehouses, and compounds in Rabigh and Masturah using certified safe materials.',
        category: 'مكافحة الآفات'
      },
      {
        id: 'faq-rabigh-5',
        question: 'هل تقومون بتركيب طارد الحمام وشبك الحماية على نوافذ رابغ؟',
        questionEn: 'Do you install bird netting and anti-pigeon spikes in Rabigh?',
        answer: 'نعم، نقوم بتركيب طوارد ستانلس ستيل وشبكات مقاومة لأشعة الشمس والحرارة على أسطح ونوافذ ومكيفات المباني لمنع هبوط الحمام وتراكم فضلاته.',
        answerEn: 'Yes, we install stainless steel spikes and UV-resistant polymer netting on building ledges, AC units, and roofs to keep facades clean from birds.',
        category: 'شبك وطارد الحمام'
      },
      {
        id: 'faq-rabigh-6',
        question: 'كيف يمكن حجز موعد لخدمات النظافة برابغ؟',
        questionEn: 'How can I book cleaning services in Rabigh?',
        answer: 'يمكنك طلب الخدمة مباشرة عبر نموذج الحجز بالموقع، أو الاتصال برقمنا المباشر، أو مراسلتنا عبر واتساب لتحديد الموعد الأنسب لك ووصول الفريق المجهز.',
        answerEn: 'You can book easily through our website booking form, direct phone call, or WhatsApp message to set a convenient time for our mobile crew.',
        category: 'الحجز والدفع'
      }
    ]
  },

  // ==========================================
  // خليص (Khulais)
  // ==========================================
  khulais: {
    nameAr: 'خليص',
    nameEn: 'Khulais',
    inCityAr: 'بخليص',
    inCityEn: 'in Khulais',
    districtsAr: [
      'حي الدف',
      'حي المغاربة',
      'حي الصاعدية',
      'حي الطلعة',
      'حي العزيزية',
      'حي النزهة',
      'خليص القديمة',
      'غران',
      'وادي خليص',
      'البرزة',
      'أم الجرم',
      'ستارة',
      'الخوار',
      'الظبية والجمعة',
      'أحياء ومزارع أخرى بخليص'
    ],
    blogPosts: [
      {
        slug: 'khulais-villa-and-resthouse-cleaning',
        title: 'دليل تنظيف الفلل والاستراحات في محافظة خليص',
        titleEn: 'Deep Cleaning Guide for Villas & Resthouses in Khulais',
        excerpt: 'كيفية العناية بالمجالس الخارجية، الأحواش الكبيرة، وجلسات الحدائق في أجواء خليص الهادئة.',
        excerptEn: 'Preserving outdoor majlis seating, spacious yards, and garden sitting areas across Khulais neighborhoods.',
        intro: 'تشتهر محافظة خليص ومراكزها (مثل غران والبرزة وأم الجرم) بالاستراحات العائلية الواسعة والفلل المحاطة بالأشجار والمزارع. هذه المساحات الرحبة تتطلب خطة تنظيف دورية تعتني بالمجالس الأرضية وغسيل الأحواش وإزالة الأتربة التي تحملها الرياح من المناطق المفتوحة.',
        introEn: 'Khulais and surrounding valleys (such as Ghran and Al-Barzah) are renowned for spacious resthouses and private villas. Maintaining these properties calls for systematic courtyard washing and majlis upholstery care.',
        image: '/assets/mesk-blog.webp',
        imagePosition: '15% 100%',
        date: '21 مايو 2024',
        dateEn: 'May 21, 2024',
        readTime: '4 دقائق قراءة',
        readTimeEn: '4 min read',
        sections: [
          {
            title: 'تجهيز المجالس وصالات الضيافة بالبخار',
            titleEn: 'Thermal Steam Sanitization for Majlis Seating',
            body: 'استخدام أجهزة البخار الحار للمجالس الأرضية والكنب يزيل بقع القهوة والشاي ويعقم الأنسجة ويقضي على الروائح العالقة، مما يجعل المكان جاهزاً لاستقبال الضيوف والعائلات في عطلات الأسبوع.',
            bodyEn: 'Using high-temperature steam extraction on Arabic majlis cushions removes beverage spots, sanitizes fabrics, and keeps seating fresh for weekend family gatherings.'
          },
          {
            title: 'جلي وغسيل الأحواش والممرات الخارجية',
            titleEn: 'Courtyard Washing & Patio Tile Scrubbing',
            body: 'تراكم الغبار على أرضيات الأحواش يحتاج إلى كنس أولي يليه غسيل بمكائن ضغط الماء لتنظيف فواصل البلاط ومسارات الجلسات الخارجية دون هدر للمياه.',
            bodyEn: 'Sweeping dust before applying pressure washing revives patio tile grout and garden walkways without water wastage.'
          }
        ]
      },
      {
        slug: 'khulais-tank-cleaning-and-water-safety',
        title: 'أهمية تنظيف وتعقيم الخزانات الأرضية في خليص',
        titleEn: 'Underground Water Tank Care & Sanitization in Khulais',
        excerpt: 'خطوات الحفاظ على سلامة ونقاء المياه المخزنة في فلل واستراحات خليص وغران.',
        excerptEn: 'Essential steps to maintain drinking and domestic water purity in Khulais and Ghran residential reservoirs.',
        intro: 'تعتمد الكثير من العقارات والاستراحات في خليص على خزانات أرضية ذات سعة كبيرة لتخزين المياه. مع مرور الوقت، قد تترسب جزيئات التربة والأتربة الدقيقة في قاع الخزان، مما يفرض ضرورة الفحص الدوري وغسيل الخزان وتعقيمه بانتظام.',
        introEn: 'Large underground concrete water tanks in Khulais store substantial reserves. Routine sediment pumping prevents natural soil particulates from degrading water freshness.',
        image: '/assets/mesk-blog.webp',
        imagePosition: '100% 0%',
        date: '17 مايو 2024',
        dateEn: 'May 17, 2024',
        readTime: '3 دقائق قراءة',
        readTimeEn: '3 min read',
        sections: [
          {
            title: 'مراحل الغسيل والتعقيم المعتمدة',
            titleEn: 'Certified Washing & Disinfection Protocol',
            body: 'يبدأ العمل بسحب المياه المتبقية وشفط الطمي من القاع، ثم فرك الجدران والأرضيات بمحاليل صحية مخصصة، وإجراء شطف متكرر وتعقيم بنسب آمنة تضمن مياهاً نقية وصالحة للاستخدام.',
            bodyEn: 'Technicians pump out stagnant water, scrape bottom silt, scrub walls with food-grade cleaning solutions, and disinfect with safe calibrated ratios.'
          },
          {
            title: 'حماية فتحات الخزان ومقاومة التسريب',
            titleEn: 'Sealing Lids & Checking Waterproof Barriers',
            body: 'إحكام أغطية الخزانات الأرضية وتفقد سلامة العزل المائي يمنع دخول ذرات الغبار أو مياه الأمطار السطحية، ويحافظ على سلامة البنية الإنشائية للمبنى.',
            bodyEn: 'Ensuring airtight inspection covers blocks dust and surface runoffs, while verifying internal waterproofing safeguards concrete foundation integrity.'
          }
        ]
      },
      {
        slug: 'khulais-termite-and-pest-prevention',
        title: 'الوقاية من النمل الأبيض والآفات في البيئة الزراعية بخليص',
        titleEn: 'Termite & Crawling Pest Prevention in Khulais Surroundings',
        excerpt: 'كيف تحمي الأبواب الخشبية والمباني والاستراحات من حشرة الأرضة والحشرات الموسمية بخليص؟',
        excerptEn: 'Protecting wooden doors, villas, and rural structures from subterranean termites and seasonal pests in Khulais.',
        intro: 'تتميز خليص بتربتها ومزارعها المحيطة، وتنشط في مثل هذه البيئات حشرات مثل النمل الأبيض (الأرضة) التي قد تستهدف الأخشاب والأساسات إن لم تتوفر حماية وقائية ملائمة. يساعد الرش المتخصص على حماية الممتلكات وتأمين راحة السكان.',
        introEn: 'Agricultural soil environments around Khulais can see subterranean termite activity targeting untreated timber. Targeted preventive treatment shields homes and resthouses.',
        image: '/assets/mesk-blog.webp',
        imagePosition: '0% 0%',
        date: '11 مايو 2024',
        dateEn: 'May 11, 2024',
        readTime: '3 دقائق قراءة',
        readTimeEn: '3 min read',
        sections: [
          {
            title: 'الكشف المبكر عن علامات الأرضة',
            titleEn: 'Early Detection of Subterranean Termites',
            body: 'ظهور أنابيب طينية دقيقة على الجدران أو تآكل أطراف حلوق الأبواب الخشبية يستدعي المعالجة الفورية بالحقن المتخصص قبل انتشار الحشرة في باقي أرجاء المنزل.',
            bodyEn: 'Mud tubes along baseboards or hollowed wooden frames indicate active termites that require specialized soil injection before spreading.'
          },
          {
            title: 'المكافحة الوقائية الآمنة',
            titleEn: 'Safe Perimeter Barrier Application',
            body: 'استخدام مبيدات معتمدة من هيئة الغذاء والدواء ذات أثر ممتد وبدون روائح مزعجة يؤمن حزاماً واقياً حول المبنى والاستراحة مع الحفاظ على سلامة الأسرة والحيوانات الأليفة.',
            bodyEn: 'Applying odorless, health-certified long-residual treatments creates a protective barrier around the property boundary, keeping living spaces pest-free.'
          }
        ]
      }
    ],
    faqs: [
      {
        id: 'faq-khulais-1',
        question: 'ما هي الأحياء والمراكز التي تغطيها شركة مسك كلين في محافظة خليص؟',
        questionEn: 'Which areas and centers does Mesk Clean cover in Khulais?',
        answer: 'نغطي كافة أحياء ومخططات محافظة خليص والمراكز التابعة لها، بما في ذلك: حي الدف، حي المغاربة، حي الصاعدية، حي الطلعة، حي العزيزية، حي النزهة، خليص القديمة، وادي خليص، بالإضافة إلى مراكز غران، البرزة، أم الجرم، ستارة، الخوار، والظبية والجمعة.',
        answerEn: 'We cover all neighborhoods and centers across Khulais Governorate, including: Al Duff, Al Magharibah, Al Saadiyah, Al Talaah, Al Aziziyah, Al Nuzha, Old Khulais, Wadi Khulais, Ghran, Al Barzah, Umm Al Jurm, Sittarah, Al Khuwar, and Al Dhabiyah.',
        category: 'التغطية والوصول'
      },
      {
        id: 'faq-khulais-2',
        question: 'هل تقدمون خدمات تنظيف الاستراحات والشاليهات والمزارع بخليص؟',
        questionEn: 'Do you offer cleaning services for resthouses, chalets, and farmsteads in Khulais?',
        answer: 'نعم، لدينا فرق متخصصة لتجهيز الاستراحات والفلل تشمل جلي وغسيل الأحواش، تنظيف المجالس والكنب بالبخار، وتعقيم المطابخ ودورات المياه قبل المناسبات العائلية وعطلات الأسبوع.',
        answerEn: 'Yes, we have mobile units equipped for resthouses and chalets, providing courtyard washing, steam majlis cleaning, and kitchen/bathroom sanitization for weekend readiness.',
        category: 'الخدمات العامة'
      },
      {
        id: 'faq-khulais-3',
        question: 'هل توفرون غسيل وتعقيم الخزانات الأرضية الكبيرة في خليص وغران؟',
        questionEn: 'Do you provide water tank cleaning and sanitization in Khulais and Ghran?',
        answer: 'نعم، نوفر غسيل وتعقيم الخزانات الأرضية والعلوية بمضخات سحب الرواسب ومحاليل تعقيم مصرحة صحياً، مع فحص التشققات لضمان نقاء المياه وصحتها.',
        answerEn: 'Yes, we provide comprehensive cleaning and sanitization for underground and roof reservoirs using sludge pumps and health-approved sterilizers.',
        category: 'الخزانات والمياه'
      },
      {
        id: 'faq-khulais-4',
        question: 'كيف تكافحون النمل الأبيض (الأرضة) والآفات في منازل ومزارع خليص؟',
        questionEn: 'How do you treat subterranean termites and pests in Khulais properties?',
        answer: 'نستخدم محاليل حقن ورش مخصصة ومعتمدة من الهيئات الصحية لمكافحة الأرضة والنمل الأبيض قبل وبعد البناء، مع توفير طعوم آمنة للزواحف والقوارض.',
        answerEn: 'We deploy certified soil-barrier and injection treatments against termites, along with safe rodent deterrence stations.',
        category: 'مكافحة الآفات'
      },
      {
        id: 'faq-khulais-5',
        question: 'هل تقومون بتركيب طارد الحمام وشبك النوافذ في خليص؟',
        questionEn: 'Do you install bird netting and pigeon spikes in Khulais?',
        answer: 'نعم، نوفر تركيب أشواك ستانلس ستيل وشبكات حماية على النوافذ والأسطح والمظلات لمنع تجمعات الحمام والطيور وتفادي فضلاتها وأعشاشها.',
        answerEn: 'Yes, we install durable stainless steel spikes and bird netting on ledges, windows, and patio canopies to prevent pigeon roosting.',
        category: 'شبك وطارد الحمام'
      },
      {
        id: 'faq-khulais-6',
        question: 'كيف يمكن حجز موعد لخدمات النظافة بمحافظة خليص؟',
        questionEn: 'How can I schedule cleaning services in Khulais?',
        answer: 'يمكنك الحجز بسهولة عبر نموذج الحجز في الموقع، أو الاتصال المباشر على الهاتف، أو مراسلتنا على واتساب لتحديد الوقت المناسب ووصول الفريق المجهز لموقعك.',
        answerEn: 'You can book easily via our online form, direct phone call, or WhatsApp message to arrange a suitable time for our crew.',
        category: 'الحجز والدفع'
      }
    ]
  }
};
