import { CityId } from '../../context/CityRouteContext';
import { CityServicePageData } from '../cityServicesContent';

export const CLEANING_SERVICES_MAP: Record<string, Partial<Record<CityId, CityServicePageData>>> = {
  // 1. تنظيف المنازل (Home Cleaning)
  'homes': {
    jeddah: {
      serviceId: 'homes',
      cityId: 'jeddah',
      slug: 'homes',
      canonicalPath: '/jeddah/services/homes',
      metaTitle: 'شركة تنظيف منازل بجدة | مسك كلين - نظافة شاملة ومقاومة للرطوبة البحرية',
      metaTitleEn: 'Home Cleaning Company in Jeddah | Mesk Clean - Coastal Humidity Defense',
      metaDescription: 'أفضل شركة تنظيف منازل بجدة متخصصة في تنظيف الشقق والمنازل وإزالة رذاذ الملح والغبار الساحلي بكافة أحياء جدة (الروضة، الشاطئ، أبحر، الصفا) بأحدث المعدات وضمان شامل.',
      metaDescriptionEn: 'Premier residential home cleaning in Jeddah by Mesk Clean. Deep cleaning for apartments and homes addressing Red Sea humidity, salt air, and airborne dust across all Jeddah districts.',
      keywords: ['شركة تنظيف منازل بجدة', 'تنظيف منازل بجدة', 'شركة تنظيف شقق بجدة', 'تنظيف منازل شمال جدة', 'أفضل شركة تنظيف منازل في جدة'],
      heroBadge: 'خدمة معتمدة بمدينة جدة',
      heroBadgeEn: 'Certified Service in Jeddah',
      heroHeading: 'شركة تنظيف منازل بجدة - حماية متكاملة من الرطوبة والملح البحري',
      heroHeadingEn: 'Home Cleaning Services in Jeddah - Specialized Coastal Care',
      heroSubtitle: 'نقدم لسكان جدة خدمات تنظيف منازل احترافية مصممة خصيصاً لمواجهة الرطوبة العالية ورذاذ الملح، مع تعقيم طبي ومعدات شفط توربينية تحافظ على بهاء منزلك.',
      heroSubtitleEn: 'Mesk Clean provides advanced residential cleaning engineered for Jeddah unique maritime climate, neutralizing marine salts and persistent humidity residue.',
      introParagraphs: [
        'تفرض البيئة الساحلية لعروس البحر الأحمر تحديات يومية معقدة على نظافة المنازل والشقق في جدة؛ حيث تتفاعل نسب الرطوبة الجوية المرتفعة مع رذاذ الملح البحري المحمول بالرياح الغربية، مسببة تكوّن طبقة رقيقة لزجة تعتلي زجاج النوافذ، وتترسب داخل مجاري الألمنيوم، وتلتصق بالجدران والأرضيات. هذا التفاعل المناخي لا يقتصر على المظهر السطحي، بل يخلق بيئة تكاثر نشطة للفطريات وعث الغبار داخل أنظمة التكييف وفواصل السيراميك، مما يستدعي تدخلاً احترافياً يتجاوز أساليب المسح المنزلي العادية.',
        'تعد شركة مسك كلين خيارك الأول عند البحث عن أفضل شركة تنظيف منازل بجدة؛ حيث طورنا بروتوكول تنظيف ساحلي يعتمد على ماكينات شفط توربينية مزودة بفلاتر HEPA لاحتجاز الجسيمات الملحية الدقيقة، بالإضافة إلى أجهزة جلي السيراميك والبورسلين الإيطالية التي تذيب الرواسب الكلسية وتستعيد اللمعان الأصلي للأرضيات. يحرص فريقنا النظامي المدرب على استخدام منظفات معتدلة الحموضة حاصلة على اعتماد المواصفات القياسية السعودية (SASO)، لتوفير أعلى معايير السلامة للأطفال وكبار السن.',
        'نغطي كافة أحياء محافظة جدة بفرق ميدانية سريعة الاستجابة، بدءاً من المجمعات السكنية والشقق الفاخرة في أحياء شمال جدة (الشاطئ، الروضة، أبحر الشمالية والجنوبية)، وصولاً إلى الأحياء السكنية الحيوية في وسط وشرق جدة (الصفا، المروة، السلامة، الزهراء، السامر)، لضمان وصول خدماتنا إليكم بدقة متناهية وفي المواعيد المحددة.'
      ],
      introParagraphsEn: [
        'Jeddah distinctive Red Sea coastline creates chronic household cleaning challenges. Elevated relative humidity combines with airborne marine salts carried by western sea breezes, forming a persistent microscopic film that coats window glass, corrodes aluminum tracks, and adheres to interior flooring. This coastal reaction promotes fungal growth and dust mite colonization within split AC ducts and porous grout lines, requiring industrial-grade intervention.',
        'Mesk Clean stands as the premier home cleaning company in Jeddah, deploying an engineered coastal sanitization protocol. We utilize high-filtration HEPA turbine extractors that trap fine saline particulates alongside Italian rotary scrubbers that dissolve mineral deposits and restore tile brilliance. Our vetted, respectful staff works strictly with SASO-compliant pH-neutral detergents safe for infants, seniors, and sensitive fabrics.',
        'Our mobile rapid-response units service all Jeddah sectors, from luxury beachfront apartments in North Jeddah (Al-Shati, Al-Rawdah, Obhur) to bustling residential corridors in Central and East Jeddah (Al-Safa, Al-Marwah, Al-Salamah, Al-Zahra, Al-Samer), guaranteeing punctual, hotel-standard execution.'
      ],
      neighborhoodsAnalysisTitle: 'تحليل الخصوصية الميدانية لأحياء جدة في تنظيف المنازل',
      neighborhoodsAnalysisTitleEn: 'District-Specific Cleaning Analysis Across Jeddah',
      neighborhoodsAnalysisParagraphs: [
        'تختلف أولويات التنظيف في أحياء شمال جدة المطلة على الكورنيش وأبحر عن الأحياء الداخلية؛ ففي أحياء الشاطئ، المرجان، البساتين، وأبحر، نركز على معالجة التكلسات الملحية على الواجهات الزجاجية وشبابيك الألمنيوم، وتعقيم فلاتر الهواء من الرطوبة البحرية. بينما في أحياء وسط وشرق جدة مثل الصفا، المروة، الحمدانية، والفيصلية، ينصب التركيز على سحب الأتربة الناعمة الناتجة عن حركة المرور الكثيفة، وجلي فواصل البلاط (الترويبة) بمكائن دوارة متخصصة.',
        'أياً كان موقع مسكنك بجدة، تصلك سيارات مسك كلين المجهزة بالكامل لتقديم خدمة تنظيف عميق تشمل غرف النوم، الصالات، المطابخ، ودورات المياه، مع الالتزام التام بالسرعة والهدوء وحرمة المنازل.'
      ],
      neighborhoodsAnalysisParagraphsEn: [
        'Cleaning priorities vary significantly across Jeddah geographical zones. In beachfront and northern districts such as Al-Shati, Al-Murjan, Al-Basateen, and Obhur, our crews focus on dissolving saline crusts on glass facades and decontaminating air channels exposed to sea humidity. In dense urban sectors like Al-Safa, Al-Marwah, Al-Hamdaniyah, and Al-Faisaliyah, focus shifts to traffic dust suction and mechanical rotary grout restoration.',
        'Wherever your residence is situated across Jeddah, Mesk Clean mobile vans arrive fully equipped to deliver rigorous deep cleaning for bedrooms, living salons, kitchens, and restrooms with utter respect for household serenity.'
      ],
      importanceTitle: 'أهمية التنظيف المتخصص لمنازل جدة الساحلية',
      importanceTitleEn: 'Why Professional Home Cleaning Matters in Coastal Jeddah',
      importanceContent: [
        'معادلة رذاذ الملح البحري: إزالة الترسبات الملحية التي تؤدي إلى تآكل إطارات النوافذ وإتلاف الدهانات الداخلية.',
        'مكافحة العفن والرطوبة: القضاء على بؤر الفطريات وعث الغبار المتراكمة في الغرف المغلقة وحول وحدات التكييف.',
        'حماية أرضيات الرخام الطبيعي: استخدام محاليل تنظيف معتدلة تمنع بهتان ولمعان الرخام الإسباني والبورسلين.',
        'تحسين نقاء الهواء الداخلي: سحب الأتربة المجهرية المسببة لحساسية الصدر والربو عبر مكانس الترشيح الطبي.'
      ],
      importanceContentEn: [
        'Neutralizing Airborne Marine Salts: Eradicating saline crusts that corrode aluminum framing and etch architectural surfaces.',
        'Combating Moisture & Mildew: Eradicating mold spores and dust mites flourishing in humid interior corners and AC plenums.',
        'Safeguarding Natural Marble: Utilizing pH-balanced chemical formulations that preserve imported stone veins and polished finishes.',
        'Elevating Indoor Air Purity: Extracting microscopic allergen particulates to protect family members from coastal respiratory discomfort.'
      ],
      equipmentTitle: 'المعدات والتقنيات والمواصفات المعتمدة بجدة',
      equipmentTitleEn: 'Certified Equipment & SASO Standards in Jeddah',
      equipmentParagraphs: [
        'نعتمد في مسك كلين بجدة على ماكينات فرك وتلميع إيطالية الصنع ذات سرعات متغيرة تناسب مختلف أسطح السيراميك والرخام، ومضخات شفط سوائل صناعية قادرة على تفريغ الرطوبة من قعر المسامات. كما نستخدم أجهزة البخار المضغوط بدرجة حرارة 140 مئوية لتعقيم المجاري والزوايا الضيقة دون الحاجة لاستخدام المبيضات الكاوية.',
        'جميع مواد التنظيف والتطهير مصرحة رسمياً من هيئة الغذاء والدواء ومطابقة لمواصفات SASO القياسية، خالية من الكلور المركز والأحماض النفاذة، مما يضمن أماناً صحياً تاماً لأفراد العائلة وحماية مستدامة للأثاث.'
      ],
      equipmentParagraphsEn: [
        'At Mesk Clean Jeddah, we deploy variable-speed Italian rotary floor machines paired with high-volume wet vacuum extractors that draw moisture from porous floor substrates. We also utilize 140°C dry thermal steam boilers to sanitize tight recesses and window slides without harsh chemical bleaches.',
        'All detergents and biocides are certified by the Saudi Food & Drug Authority (SFDA) and conform to SASO standards. They are 100% free of concentrated caustic acids, ensuring complete respiratory wellness for children and pets.'
      ],
      workflowTitle: 'مراحل خطة عمل تنظيف المنازل خطوة بخطوة في جدة',
      workflowTitleEn: 'Our Jeddah Home Cleaning Systematic Workflow',
      workflowSteps: [
        {
          number: 1,
          title: 'المعاينة وتحديد الأولويات الساحلية',
          titleEn: 'Coastal Assessment & Priority Mapping',
          description: 'فحص درجات ترسب الملح والأتربة ونوعيات الأرضيات لتجهيز المواد والماكينات الملائمة لمسكنك.',
          descriptionEn: 'Evaluating salt residue levels, stone types, and high-priority zones to select tailored cleaning agents.'
        },
        {
          number: 2,
          title: 'شفط الأتربة والملح بفلاتر HEPA',
          titleEn: 'HEPA Turbine Dust Extraction',
          description: 'سحب شامل للأتربة الناعمة والأملاح من الأسقف ومجاري النوافذ وخلف الأثاث لمنع انتشارها.',
          descriptionEn: 'Deep-vacuuming fine sand and salt crusts from window channels, cornice moldings, and hidden recesses.'
        },
        {
          number: 3,
          title: 'جلي وفرك وتلميع الأرضيات',
          titleEn: 'Mechanical Floor Scrubbing',
          description: 'غسيل السيراميك والبورسلين بماكينات دوارة تذيب الأوساخ المتكلسة وتفتح لون الفواصل الإسمنتية.',
          descriptionEn: 'Rotary disc scrubbing removing bonded grime and restoring brightness to darkened grout lines.'
        },
        {
          number: 4,
          title: 'تلميع النوافذ والواجهات الزجاجية',
          titleEn: 'Anti-Static Glass Detailing',
          description: 'تنظيف مجاري الشبابيك وتلميع الزجاج بمحاليل مضادة للشحنات الكهربائية تطرد الغبار ورذاذ البحر.',
          descriptionEn: 'Flushing aluminum sliding tracks and applying anti-static glass protectants that repel sea moisture.'
        },
        {
          number: 5,
          title: 'التعقيم الشامل للمطابخ والحمامات',
          titleEn: 'Sanitary Decontamination',
          description: 'إزالة التكلسات الجيرية والرواسب الدهنية وتعقيم الأسطح بمطهرات معتمدة تضمن طهارة ونقاء تام.',
          descriptionEn: 'Descaling mineral buildup on sanitary fixtures and degreasing food zones with hospital-grade sanitizers.'
        },
        {
          number: 6,
          title: 'التعطير الفاخر والتسليم النهائي',
          titleEn: 'Musk Atomization & Sign-Off',
          description: 'تعطير أرجاء البيت بزيوت المسك الطبيعي وتفقد كل غرفة مع العميل لضمان الرضا المطلق 100%.',
          descriptionEn: 'Dispersing authentic musk aroma and conducting a thorough room-by-room walkthrough with the homeowner.'
        }
      ],
      featuresTitle: 'مميزات شركة مسك كلين في تنظيف منازل جدة',
      featuresTitleEn: 'Why Mesk Clean Stands Out for Jeddah Home Cleaning',
      features: [
        {
          title: 'عمالة نظامية متمرسة بأعلى درجات الأمانة',
          titleEn: 'Vetted, Background-Checked Staff',
          description: 'طواقم مدربة تخضع لرقابة صارمة تحترم خصوصية منزلك وتلتزم باللباقة وسرعة الإنجاز.',
          descriptionEn: 'Certified, highly trained technicians bound by strict confidentiality and household privacy standards.'
        },
        {
          title: 'محاليل آمنة ومطابقة لمواصفات SASO',
          titleEn: 'SASO-Certified Safe Solutions',
          description: 'منظفات عضوية صديقة للبيئة خالية من الروائح الكيماوية المزعجة وآمنة على مرضى الحساسية.',
          descriptionEn: 'Eco-certified biodegradable detergents leaving zero harmful fumes, completely safe for children.'
        },
        {
          title: 'تغطية سريعة على مدار 24/7 بجدة',
          titleEn: '24/7 Rapid Response Across Jeddah',
          description: 'أسطول سيارات متنقل يتيح حجز مواعيد نفس اليوم والمواعيد المسائية بمرونة تامة.',
          descriptionEn: 'Fully equipped mobile vans positioned strategically across Jeddah for prompt same-day dispatch.'
        },
        {
          title: 'ضمان الجودة والرضا التام 100%',
          titleEn: '100% Quality & Satisfaction Guarantee',
          description: 'لا نغادر موقعك إلا بعد معاينتك الشاملة واعتمادك التام لكافة تفاصيل النظافة واللمعان.',
          descriptionEn: 'We conduct a comprehensive final review with you, resolving any feedback immediately without delay.'
        }
      ],
      districtsTitle: 'أحياء مدينة جدة المغطاة بخدمة تنظيف المنازل',
      districtsTitleEn: 'Jeddah Districts Covered by Our Cleaning Vans',
      districtsIntro: 'تصل فرق مسك كلين المجهزة إلى كافة أحياء ومخططات محافظة جدة دون استثناء:',
      districtsIntroEn: 'Our rapid response fleet covers every neighborhood and suburb across Jeddah:',
      districtsList: [
        'أحياء شمال جدة: الروضة، الشاطئ، المرجان، البساتين، المحمدية، أبحر الشمالية، أبحر الجنوبية، النعيم، النهضة.',
        'أحياء وسط جدة: الحمراء، الزهراء، السلامة، الأندلس، مشرفة، العزيزية، الرحاب، الرويس، الفيصلية.',
        'أحياء شرق وجنوب جدة: الصفا، المروة، السامر، الحمدانية، الفلاح، المنار، السليمانية، النسيم، الروابي.'
      ],
      districtsListEn: [
        'North Jeddah: Al-Rawdah, Al-Shati, Al-Murjan, Al-Basateen, Al-Mohammediyah, North & South Obhur, Al-Naeem, Al-Nahda.',
        'Central Jeddah: Al-Hamra, Al-Zahra, Al-Salamah, Al-Andalus, Mushrefah, Al-Aziziyah, Al-Rehab, Al-Ruwais.',
        'East & South Jeddah: Al-Safa, Al-Marwah, Al-Samer, Al-Hamdaniyah, Al-Falah, Al-Manar, Al-Sulaimaniyah, Al-Naseem.'
      ],
      tipsTitle: 'نصائح خبرائنا للحفاظ على نظافة منزلك في أجواء جدة',
      tipsTitleEn: 'Expert Care Tips for Coastal Homes in Jeddah',
      tipsIntro: 'إرشادات عملية مقدمة من مشرفي مسك كلين للحد من تأثير الرطوبة والغبار بجدة:',
      tipsIntroEn: 'Practical recommendations from Mesk Clean specialists tailored to coastal homes:',
      tipsList: [
        {
          title: 'فحص عوازل النوافذ المطاطية',
          titleEn: 'Check Window Rubber Seals',
          description: 'تأكد من سلامة الأشرطة المطاطية حول إطارات الألومنيوم لمنع تسلل رذاذ الملح والغبار المحمول بالرياح.',
          descriptionEn: 'Inspect weather-stripping along aluminum windows to prevent salt-laden sea drafts from entering.'
        },
        {
          title: 'غسيل فلاتر التكييف كل أسبوعين',
          titleEn: 'Clean AC Filters Bi-Weekly',
          description: 'غسيل شبك المكيفات يمنع تراكم الطين الرطب داخل الرديتر ويحافظ على برودة ونقاء الهواء.',
          descriptionEn: 'Rinsing split AC mesh bi-weekly stops humid dust from forming sludge across evaporator coils.'
        },
        {
          title: 'مسح الأسطح بمناشف المايكروفايبر',
          titleEn: 'Wipe with Microfiber Cloths',
          description: 'استخدام المايكروفايبر الجاف يلتقط الأتربة بشحنته الكهروستاتيكية بدلاً من بعثرتها في الجو.',
          descriptionEn: 'Electrostatic microfiber cloths capture airborne dust particles efficiently without scratching surfaces.'
        },
        {
          title: 'معالجة البقع الرطبة على الفور',
          titleEn: 'Treat Wet Spills Immediately',
          description: 'الرطوبة العالية تجعل البقع تمتص بسرعة داخل الترويبة؛ جفف السوائل فوراً بقطعة قطنية نظيفة.',
          descriptionEn: 'High humidity accelerates stain penetration into porous grout; blot spills immediately with dry cotton.'
        }
      ],
      faqsTitle: 'الأسئلة الشائعة حول تنظيف المنازل بجدة',
      faqsTitleEn: 'Frequently Asked Questions - Home Cleaning in Jeddah',
      faqs: [
        {
          question: 'كم من الوقت يستغرقه تنظيف الشقة المتوسطة في جدة؟',
          questionEn: 'How long does average apartment cleaning take in Jeddah?',
          answer: 'تستغرق الشقة المتوسطة المكونة من 3 إلى 4 غرف ما بين 3 إلى 5 ساعات بفريق عمل يضم 3 إلى 5 فنيين مجهزين بأحدث الماكينات.',
          answerEn: 'A standard 3-4 bedroom apartment takes 3 to 5 hours with a dedicated team of 3 to 5 technicians.'
        },
        {
          question: 'هل تزيلون طبقات الملح والتكلسات المتراكمة على زجاج النوافذ؟',
          questionEn: 'Can you remove stubborn salt scale etched onto window glass?',
          answer: 'نعم، نستخدم ملمعات إيطالية متخصصة تزيل التكلسات الملحية المستعصية الناتجة عن رطوبة البحر وتعيد للزجاج شفافيته التامة.',
          answerEn: 'Yes, we apply specialized Italian descaling compounds that dissolve salt buildup without scratching glass.'
        },
        {
          question: 'هل يمكن حجز موعد لنفس اليوم في أحياء شمال أو شرق جدة؟',
          questionEn: 'Can I book same-day home cleaning across North or East Jeddah?',
          answer: 'نعم، نوفر مواعيد طارئة ونفس اليوم بحسب توفر الفرق الميدانية في منطقتك، مع إمكانية جدولة المواعيد المسبقة بسهولة.',
          answerEn: 'Yes, same-day dispatch is available depending on local routing across North and East Jeddah sectors.'
        },
        {
          question: 'هل المواد المستخدمة آمنة على الرخام الطبيعي؟',
          questionEn: 'Are your cleaning products safe for delicate natural marble?',
          answer: 'نعم تماماً، نستخدم محاليل تنظيف معتدلة الحموضة ومصرحة خالية من الفلاش أو الأحماض الكاوية لحماية بريق الرخام.',
          answerEn: 'Absolutely. We use strictly pH-neutral, acid-free detergents that preserve delicate marble veining and gloss.'
        }
      ]
    },
    makkah: {
      serviceId: 'homes',
      cityId: 'makkah',
      slug: 'homes',
      canonicalPath: '/makkah/services/homes',
      metaTitle: 'شركة تنظيف منازل بمكة المكرمة | مسك كلين - نظافة شاملة وتعقيم لمواسم الضيافة',
      metaTitleEn: 'Home Cleaning Company in Makkah | Mesk Clean - Holy City Deep Sanitization',
      metaDescription: 'شركة تنظيف منازل بمكة المكرمة معتمدة لغسيل وتعقيم الشقق والبيوت في العوالي والشوقية والزايدي والنسيم، متخصصة في إزالة الغبار الجبلي والتعقيم لمواسم العمرة والحج.',
      metaDescriptionEn: 'Premier residential home cleaning services in Makkah by Mesk Clean. Deep cleaning and sanitization for residences across Al-Awali, Al-Shawqiyyah, and all Makkah districts.',
      keywords: ['شركة تنظيف منازل بمكة المكرمة', 'تنظيف منازل بمكة', 'شركة تنظيف شقق بمكة', 'تنظيف منازل العوالي مكة', 'أفضل شركة تنظيف بمكة'],
      heroBadge: 'خدمة معتمدة بمكة المكرمة',
      heroBadgeEn: 'Certified Service in Holy Makkah',
      heroHeading: 'شركة تنظيف منازل بمكة المكرمة - طهارة ونظافة تليق بأطهر البقاع',
      heroHeadingEn: 'Home Cleaning Services in Holy Makkah - Pure Spiritual Cleanliness',
      heroSubtitle: 'نقدم لأهالي مكة المكرمة وضيوفها خدمات تنظيف منازل فائقة الدقة تعالج تراكم الغبار الجبلي الصخري، وتلبي متطلبات الضيافة والاستعداد لمواسم العمرة والحج المباركة.',
      heroSubtitleEn: 'Mesk Clean delivers rigorous home cleaning tailored to Makkah rugged mountain topography, intense summer temperatures, and high-standard pilgrim hospitality.',
      introParagraphs: [
        'تتميز مكة المكرمة بطبيعتها الجغرافية الفريدة المحاطة بالسلاسل الجبلية الصخرية والمنحدرات الجرانيتية؛ الأمر الذي يؤدي إلى تطاير ذرات غبار جبلية جافة وفائقة النعومة تتسلل عبر فتحات التهوية وشقوق الأبواب لتستقر عميقاً داخل أقمشة المفروشات، وعلى حواف الأسقف المرتفعة، وفي قعر فواصل السيراميك. إضافة إلى ذلك، تشهد المنازل في العاصمة المقدسة نشاطاً عائلياً واجتماعياً مكثفاً طوال فصول السنة، لا سيما في مواسم الخير كشهر رمضان المبارك وموسم الحج، حيث يتشرف الأهالي باستقبال ضيوف الرحمن وأفراد العائلة.',
        'تقدم مسك كلين في مكة المكرمة حلولاً متقدمة لتنظيف المنازل والشقق تجمع بين التطهير الميكانيكي العميق والتعقيم الطبي المعتمد؛ فنحن نوفر أجهزة شفط اهتزازية قادرة على تفريغ الغبار الجبلي المحتبس في الجدران والستائر والأسقف العالية، بالتوازي مع ماكينات غسيل وجلي الأرضيات الإيطالية التي تزيل البقع الصعبة وتعيد للبلاط بهاءه. يعمل فريقنا وفق ضوابط صارمة تراعي حرمة البيوت وقدسية المكان، مع التزام كامل بالانضباط والسرعة.',
        'تغطي خدماتنا كافة قطاعات العاصمة المقدسة بمواعيد مرنة تراعي أوقات الصلوات وراحة الأسر؛ فنحن نصل إلى منازلكم في أحياء جنوب وشرق مكة (العوالي، بطحاء قريش، الشوقية، الكعكية، النسيم)، وأحياء وسط وغرب مكة (الرصيفة، الزاهر، الخالدية، النزهة، الزايدي)، وأحياء شمال مكة (التنعيم، العمرة، الشرائع)، لضمان مسكن نظيف وطاهر يشيع السكينة والاطمئنان.'
      ],
      introParagraphsEn: [
        'Holy Makkah unique mountain topography, encircled by rugged granite ridges, exposes residential homes to dry, ultra-fine rock dust that penetrates window weatherstrips and settles into upholstery tufts and high ceiling cornices. Furthermore, residences in the Holy City experience continuous domestic hospitality demands throughout the year, peaking during Ramadan and the annual Hajj pilgrimage when families honorably host pilgrims and extended relatives.',
        'Mesk Clean in Makkah delivers an engineered residential sanitation protocol blending mechanical deep scrubbing with medical-grade disinfection. We deploy vibratory vacuum extractors that dislodge compacted rock dust from high architectural surfaces, complemented by heavy-duty floor polishers that revive ceramic and marble luster. Our staff operates under strict etiquette respecting domestic sanctity and the revered character of the Holy City.',
        'Our mobile teams cover all sectors of Makkah around prayer schedules and family convenience, serving South & East Makkah (Al-Awali, Batha Quraish, Al-Shawqiyyah, Al-Kakiyyah), Central & West Makkah (Al-Rusaifah, Al-Zahir, Al-Khalidiyah, Al-Zaydi), and North Makkah (Al-Tan’eem, Al-Umrah, Al-Sharaye), ensuring an immaculate, spiritually tranquil home.'
      ],
      neighborhoodsAnalysisTitle: 'خصوصية تنظيف المنازل عبر أحياء مكة المكرمة',
      neighborhoodsAnalysisTitleEn: 'District Cleaning Characteristics Across Holy Makkah',
      neighborhoodsAnalysisParagraphs: [
        'تتسم أحياء مكة السكنية بتنوع نمط البناء ومستويات التعرض للأتربة؛ ففي أحياء العوالي والشوقية والزايدي التي تضم فللاً ومنازل عائلية واسعة ذات مجالس ضيافة فسيحة، نركز على جلي صالات الاستقبال الكبيرة وتعقيم دورات المياه المتعددة وتنظيف النجف والأسقف العالية. أما في أحياء العزيزية والنسيم والرصيفة القريبة من مسارات المشاعر والمحاور المركزية، ينصب التركيز على التنظيف الشامل للشقق وتجهيزها قبل وبعد مواسم الحج والعمرة.',
        'تتيح لنا فرقنا المتمركزة في العاصمة المقدسة سرعة الوصول إلى مخططات ولي العهد والشرائع والنزهة بسيارات مجهزة بكافة الماكينات والمطهرات، دون تحميل العميل عناء توفير أي أدوات.'
      ],
      neighborhoodsAnalysisParagraphsEn: [
        'Residential neighborhoods in Makkah showcase distinct architectural formats. In expansive residential districts like Al-Awali, Al-Shawqiyyah, and Al-Zaydi, featuring grand salons and multiple guest suites, our crews focus on deep rotary tile buffing, high chandelier dusting, and multi-bathroom clinical sanitization. In central and pilgrimage corridor districts such as Al-Aziziyah, Al-Naseem, and Al-Rusaifah, emphasis shifts to rapid seasonal turnover and deep allergen removal.',
        'Our strategically stationed mobile vans in Makkah service outlying developments such as Wali Al-Ahad schemes, Al-Sharaye, and Al-Nuzha, carrying complete self-contained industrial equipment.'
      ],
      importanceTitle: 'أهمية التنظيف الدوري لمنازل مكة المكرمة',
      importanceTitleEn: 'Why Regular Home Cleaning is Critical in Makkah',
      importanceContent: [
        'التخلص من الغبار الصخري الحاد: حماية أرضيات البلاط والأسطح الخشبية من الخدوش الناتجة عن احتكاك ذرات الرمل الجبلية.',
        'الاستعداد لمواسم الضيافة والعمرة: تجهيز المنزل لاستقبال ضيوف الرحمن بمستوى نظافة فندقي يبعث على الراحة والاعتزاز.',
        'مقاومة تأثير درجات الحرارة المرتفعة: تنظيف مجاري الهواء والستائر يقلل من احتباس الروائح الكتمة في حر الصيف الشديد.',
        'التعقيم الطبي المتكامل: القضاء على الجراثيم والفيروسات المنقولة في فترات الازدحام الموسمي بمطهرات معتمدة.'
      ],
      importanceContentEn: [
        'Eliminating Abrasive Rock Dust: Preventing floor scratches and furniture abrasion caused by microscopic granite particulates.',
        'Seasonal Readiness for Pilgrims: Preparing residential suites for religious visitors with hotel-standard hygiene and dignity.',
        'Countering Extreme Summer Heat: Deep dusting and air freshening eliminate musty indoor stagnation in 45°C+ weather.',
        'Medical-Grade Disinfection: Eradicating seasonal pathogens and viruses during high-density pilgrimage gatherings.'
      ],
      equipmentTitle: 'التقنيات والمعدات الألمانية المعتمدة بمكة المكرمة',
      equipmentTitleEn: 'Certified German & European Equipment in Makkah',
      equipmentParagraphs: [
        'نستخدم في مسك كلين بمكة مكانس كهربائية صناعية مزودة بخاصية النبض الهوائي التي تفكك ذرات الغبار الملتصقة بالأسقف والنجف ووحدات الإنارة المرتفعة، بجانب ماكينات جلي السيراميك الدوارة المزودة بفرش متدرجة القساوة لتنظيف الترويبة بعمق دون كشط البلاط.',
        'نعتمد حصرياً على معقمات ومطهرات خالية من الروائح النفاذة مصرحة من هيئة الغذاء والدواء السعودية، تمنح المكان طهارة وانتعاشاً فورياً وتسمح للأسرة باستخدام الغرف بعد دقائق معدودة من انتهاء العمل.'
      ],
      equipmentParagraphsEn: [
        'In Makkah, Mesk Clean deploys industrial air-pulsing vacuum extractors that safely dislodge stubborn dust clinging to multi-level chandeliers and high ceilings, along with heavy rotary floor scrubbers using calibrated disc pads that whiten grout without etching tiles.',
        'We exclusively utilize SFDA-approved, low-VOC sanitizers that deliver clinical disinfection without harsh chemical odors, allowing families and guests to occupy cleaned rooms immediately.'
      ],
      workflowTitle: 'خطوات تنظيف المنازل في مكة المكرمة خطوة بخطوة',
      workflowTitleEn: 'Our Systematic Makkah Home Cleaning Execution Plan',
      workflowSteps: [
        {
          number: 1,
          title: 'الوصول الميداني والتقييم التفصيلي',
          titleEn: 'On-Site Arrival & Surface Assessment',
          description: 'معاينة مساحات الشقة أو المنزل وفحص نوعيات البلاط والمجالس لتحديد المنظفات المناسبة.',
          descriptionEn: 'Inspecting residence layout, tile porosity, and high-traffic majlis zones to calibrate equipment.'
        },
        {
          number: 2,
          title: 'إزالة الغبار الجبلي من المرتفعات',
          titleEn: 'High-Reach Mountain Dust Extraction',
          description: 'شفط الأتربة من الجدران والأسقف والستائر ووحدات الإضاءة بمكانس ذات امتدادات تلسكوبية.',
          descriptionEn: 'Vacuuming high walls, cornices, chandeliers, and draperies using extended carbon-fiber wands.'
        },
        {
          number: 3,
          title: 'جلي وفرك وتطهير الأرضيات',
          titleEn: 'Rotary Grout & Floor Scrubbing',
          description: 'غسيل السيراميك والرخام بماكينات الفرك لإزالة البقع واستعادة بياض فواصل البلاط.',
          descriptionEn: 'Mechanical single-disc scrubbing lifting deeply ingrained soil and brightening tile grout lines.'
        },
        {
          number: 4,
          title: 'تنظيف وتعقيم المطابخ ودورات المياه',
          titleEn: 'Kitchen & Sanitary Sterilization',
          description: 'إزالة الدهون المتراكمة والترسبات الكلسية وتطهير المراحيض والأحواض بمطهرات طبية قوية.',
          descriptionEn: 'Eliminating cooking grease and limescale deposits, sterilizing sanitary fixtures with medical biocides.'
        },
        {
          number: 5,
          title: 'تلميع الأبواب والنوافذ والشبابيك',
          titleEn: 'Window Track & Door Polishing',
          description: 'تنظيف مسارات النوافذ من الأتربة وتلميع الزجاج والأبواب الخشبية بمواد مضادة للغبار.',
          descriptionEn: 'Flushing dusty window slides and polishing solid wood doors and glass with anti-static agents.'
        },
        {
          number: 6,
          title: 'التعطير الفاخر برائحة المسك المكي',
          titleEn: 'Makkah Musk Deodorization',
          description: 'تبخير وتعطير المنزل بزيوت المسك الطبيعي وتفقد العمل مع صاحب البيت للتأكد من الرضا التام.',
          descriptionEn: 'Atomizing authentic oriental musk fragrance and walking through every room to ensure 100% satisfaction.'
        }
      ],
      featuresTitle: 'أسباب تفضيل أهالي مكة المكرمة لشركة مسك كلين',
      featuresTitleEn: 'Why Makkah Residents Prefer Mesk Clean',
      features: [
        {
          title: 'طواقم أمينة تحترم قدسية البيوت',
          titleEn: 'Honorable, Trustworthy Workforce',
          description: 'عمالة نظامية تخضع للتحقق الأمني وملتزمة التزاماً كاملاً بآداب التعامل وخصوصية الأسر.',
          descriptionEn: 'Fully background-checked staff adhering strictly to household privacy, safety, and courtesy.'
        },
        {
          title: 'مرونة الجداول حول أوقات الصلوات',
          titleEn: 'Prayer-Harmonized Scheduling',
          description: 'ننسق مواعيد العمل بما يتناسب مع أوقات الصلوات وراحة الأسرة والمواسم المزدحمة.',
          descriptionEn: 'Service shifts scheduled harmoniously around prayer times and seasonal family routines.'
        },
        {
          title: 'ماكينات حديثة لا تحدث إزعاجاً',
          titleEn: 'Low-Noise European Machinery',
          description: 'أجهزة تنظيف متطورة تعمل بهدوء دون إحداث فوضى أو إزعاج للأطفال والجيران.',
          descriptionEn: 'Advanced whisper-quiet equipment delivering rapid, spotless results without neighborhood disturbance.'
        },
        {
          title: 'وضوح تام ومصداقية في خطة العمل',
          titleEn: 'Transparent Plan & Integrity Guarantee',
          description: 'التزام كامل بكافة بنود الاتفاق المسبق وتوفير المعدات ومواد التنظيف دون أي مفاجآت.',
          descriptionEn: 'Full commitment to agreed scope including all industrial tools and detergents with zero surprises.'
        }
      ],
      districtsTitle: 'نطاق تغطيتنا الميدانية في أحياء مكة المكرمة',
      districtsTitleEn: 'Makkah Districts Served by Our Mobile Vans',
      districtsIntro: 'تغطي سياراتنا المجهزة كافة قطاعات ومخططات العاصمة المقدسة على مدار 24 ساعة:',
      districtsIntroEn: 'Our fully equipped rapid response mobile fleet covers every sector of Holy Makkah:',
      districtsList: [
        'أحياء جنوب وشرق مكة: العوالي، بطحاء قريش، الشوقية، الكعكية، النسيم، العزيزية، الهجرة، وادي جليل.',
        'أحياء وسط وغرب مكة: الرصيفة، الزاهر، الخالدية، النزهة، الزايدي (الحمراء)، الإسكان، التيسير، الهنداوية.',
        'أحياء شمال مكة: التنعيم، العمرة، جبل النور، الشرائع، مخططات ولي العهد، الفيحاء، البحيرات.'
      ],
      districtsListEn: [
        'South & East Makkah: Al-Awali, Batha Quraish, Al-Shawqiyyah, Al-Kakiyyah, Al-Naseem, Al-Aziziyah, Al-Hijrah.',
        'Central & West Makkah: Al-Rusaifah, Al-Zahir, Al-Khalidiyah, Al-Nuzha, Al-Zaydi, Al-Iskan, Al-Tayseer.',
        'North Makkah: Al-Tan’eem, Al-Umrah, Jabal Al-Nour, Al-Sharaye, Wali Al-Ahad schemes, Al-Fayhaa.'
      ],
      tipsTitle: 'إرشادات ذهبية لنظافة مستدامة لمنازل مكة المكرمة',
      tipsTitleEn: 'Proactive Maintenance Tips for Makkah Homes',
      tipsIntro: 'نصائح مجربة للحفاظ على بهاء منزلك وسط الطبيعة الجبلية لمكة:',
      tipsIntroEn: 'Proven practical recommendations to protect your Makkah home from rock dust:',
      tipsList: [
        {
          title: 'وضع سجادات التقاط عند المداخل',
          titleEn: 'Place Heavy Entrance Walk-Off Mats',
          description: 'استخدام سجادات ذات ألياف خشنة عند باب الشارع يحجز ما يصل إلى 85% من ذرات الرمل الصخري.',
          descriptionEn: 'Coarse entrance walk-off mats trap 85% of sharp granite sand particles before reaching interior tiles.'
        },
        {
          title: 'التهوية في ساعات الصباح الباكر فقط',
          titleEn: 'Ventilate Early in the Morning',
          description: 'افتح النوافذ فجراً قبل هبوب التيارات الهوائية الجافة واشتداد حرارة النهار المحملة بالغبار.',
          descriptionEn: 'Air out rooms at dawn before daytime thermal winds pick up dry rock dust from mountain slopes.'
        },
        {
          title: 'استخدام الممسحة الرطبة بدلاً من المكنسة',
          titleEn: 'Use Damp Microfiber Mops',
          description: 'المسح الرطب يلتقط الغبار الناعم، بينما تؤدي المكانس الجافة إلى تطايره واستقراره على الأثاث.',
          descriptionEn: 'Damp microfiber mops trap fine rock dust electrostatically, avoiding dust clouds caused by dry brooms.'
        },
        {
          title: 'تغطية مجالس الضيافة عند عدم الاستخدام',
          titleEn: 'Cover Formal Majlis When Not in Use',
          description: 'وضع أغطية قماشية خفيفة على أطقم الكنب في الصالات الكبيرة يحمي الأقمشة الفاخرة بين المواسم.',
          descriptionEn: 'Light breathable cotton covers safeguard luxury velvet sofas between seasonal hospitality gatherings.'
        }
      ],
      faqsTitle: 'أسئلة شائعة حول تنظيف المنازل في مكة المكرمة',
      faqsTitleEn: 'Frequently Asked Questions - Makkah Home Cleaning',
      faqs: [
        {
          question: 'هل يمكنكم تنظيف المنزل أثناء تواجد أفراد الأسرة دون حرج؟',
          questionEn: 'Can cleaning proceed comfortably while family members are home?',
          answer: 'نعم بكل تأكيد، فرقنا تعمل بنظام وتقسيم تدريجي غرفة تلو الأخرى بهدوء واحترام كامل لخصوصية العائلة.',
          answerEn: 'Yes, our crews operate systematically room-by-room with total discretion and respect for family privacy.'
        },
        {
          question: 'هل تقدمون باقات تنظيف مسبقة قبل مواسم رمضان والحج؟',
          questionEn: 'Do you offer special packages prior to Ramadan and Hajj?',
          answer: 'نعم، نوفر باقات موسمية شاملة لتجهيز المنازل واستقبال الضيوف، وباقات تنظيف لاحقة بعد انقضاء المواسم بأعلى معايير الإتقان.',
          answerEn: 'Yes, we provide pre-season preparation packages and post-season deep restoration plans at high standards.'
        },
        {
          question: 'هل يشمل تنظيف المنزل غسيل الأحواش والأسطح الخارجية؟',
          questionEn: 'Does the service include washing exterior courtyards and roof terraces?',
          answer: 'نعم، نوفر غسيل المداخل والأحواش الخارجية بماكينات الضغط العالي لإزالة الأتربة الجبلية المتراكمة.',
          answerEn: 'Yes, we pressure-wash outdoor entrance courtyards, terraces, and car garages to eliminate caked rock dust.'
        },
        {
          question: 'كيف يتم تحديد خطة تنظيف المنازل في مكة؟',
          questionEn: 'How are home cleaning plans tailored in Makkah?',
          answer: 'تعتمد خطة العمل على مساحة المنزل وعدد الغرف ومستوى الأعمال المطلوبة، مع توضيح كافة التفاصيل مسبقاً قبل البدء.',
          answerEn: 'The plan is based on property square footage and room count, with clear confirmed arrangements before work begins.'
        }
      ]
    },
    rabigh: {
      serviceId: 'homes',
      cityId: 'rabigh',
      slug: 'homes',
      canonicalPath: '/rabigh/services/homes',
      metaTitle: 'شركة تنظيف منازل برابغ | مسك كلين - حماية متقدمة من الرمال الساحلية والغبار الصناعي',
      metaTitleEn: 'Home Cleaning Company in Rabigh | Mesk Clean - Coastal Sand & Industrial Care',
      metaDescription: 'أفضل شركة تنظيف منازل برابغ لتنظيف الشقق والمنازل وإزالة الرمال الساحلية في المرجانية والنزيلة والنعيم وسكن بترورابغ ومحيط مدينة الملك عبدالله الاقتصادية (KAEC).',
      metaDescriptionEn: 'Premier residential home cleaning in Rabigh by Mesk Clean. Specialized deep cleaning for apartments and homes in Al-Merghaniya, Al-Nazilah, Petro Rabigh housing, and KAEC vicinity.',
      keywords: ['شركة تنظيف منازل برابغ', 'تنظيف منازل برابغ', 'شركة تنظيف شقق برابغ', 'تنظيف منازل المرجانية رابغ', 'أفضل شركة تنظيف في رابغ'],
      heroBadge: 'خدمة معتمدة بمحافظة رابغ',
      heroBadgeEn: 'Certified Service in Rabigh Province',
      heroHeading: 'شركة تنظيف منازل برابغ - إخلاء الرمال وحماية المساكن الساحلية',
      heroHeadingEn: 'Home Cleaning Services in Rabigh - Advanced Coastal Sand Defense',
      heroSubtitle: 'نوفر لسكان رابغ والعاملين بالمنطقة الصناعية ومدينة الملك عبدالله الاقتصادية خدمات تنظيف منازل متطورة تقضي على تسرب الرمال والغبار الساحلي بكفاءة وسرعة قياسية.',
      heroSubtitleEn: 'Mesk Clean provides high-efficiency residential cleaning engineered for Rabigh open coastal wind corridors, fine sand drift, and industrial housing developments.',
      introParagraphs: [
        'تحظى محافظة رابغ بموقع استراتيجي على الساحل الغربي للمملكة، محتضنة مشاريع صناعية واقتصادية عالمية كمدينة الملك عبدالله الاقتصادية (KAEC) وميناء الملك عبدالله ومجمع بترورابغ. إلا أن الطبيعة الجغرافية المفتوحة للمحافظة، وتداخل الأراضي الرملية مع الرياح البحرية القوية، يفرضان تحديات تنظيف فريدة؛ حيث تعاني المساكن والشقق السكنية في رابغ من تسرب مستمر لحبيبات الرمال الناعمة والغبار المتطاير عبر النوافذ والأبواب، مما يسبب خشونة ملموسة في الأرضيات، وانسداد مسارات انزلاق النوافذ، وتراكم الأتربة داخل مجاري التكييف ومحيط المداخل.',
        'تقدم مسك كلين برابغ منظومة تنظيف سكنية متخصصة ومصممة لمواجهة بيئة الرمال والرياح المفتوحة؛ حيث نستخدم مكانس صناعية ذات قوة سحب توربينية هائلة قادرة على إخلاء ذرات الرمال الدقيقة من أعماق فواصل السيراميك والموكيت ومجاري الألمنيوم قبل مرحلة الغسيل، تفادياً لتشكل طبقات طينية لزجة. كما نعتمد ماكينات فرك وتلميع آلية تعيد للبلاط نعومته الأصلية وتزيل أي ترسبات دهنية أو غبارية ناتجة عن القرب من المنشآت الصناعية.',
        'نخدم كافة أحياء ومخططات رابغ بمرونة عالية تراعي مواعيد وجداول عمل المهندسين والموظفين في الشركات الكبرى؛ فنحن متواجدون في أحياء وسط رابغ (المرجانية، النزيلة، الصفا، النعيم)، والمخططات الحديثة (حي النخيل، حي المرجان، حي الفيحاء)، بالإضافة إلى مجمعات إسكان موظفي بترورابغ ومحيط مدينة الملك عبدالله الاقتصادية، لتوفير بيئة منزلية نقية ومريحة تمنحك الاسترخاء التام بعد ساعات العمل.'
      ],
      introParagraphsEn: [
        'Rabigh strategic location on the western Red Sea coast hosts prominent industrial and economic hubs, including King Abdullah Economic City (KAEC), King Abdullah Port, and Petro Rabigh. However, the province wide-open topography combined with vigorous coastal wind corridors presents unique domestic hygiene difficulties. Residences across Rabigh contend with chronic infiltration of fine coastal sand and airborne dust that bypasses conventional door seals, causing abrasive floor friction, jammed window slides, and dust accumulation in AC ducts.',
        'Mesk Clean in Rabigh deploys an engineered residential cleaning methodology built for sand-prone coastal environments. We utilize heavy-duty turbine extractors that pull granular sand from deep grout lines, carpet backing, and window channels prior to washing, preventing muddy paste formation. We then operate high-torque rotary scrubbers that restore pristine tile smoothness and dissolve atmospheric industrial residues.',
        'We service all Rabigh communities with maximum flexibility planned around corporate shift schedules, covering central neighborhoods (Al-Merghaniya, Al-Nazilah, Al-Safa, Al-Naeem), modern subdivisions (Al-Nakheel, Al-Murjan, Al-Fayhaa), Petro Rabigh residential quarters, and KAEC surroundings, ensuring a spotless, restful home after demanding workdays.'
      ],
      neighborhoodsAnalysisTitle: 'التحليل الميداني لتنظيف المنازل في قطاعات رابغ',
      neighborhoodsAnalysisTitleEn: 'District Cleaning Dynamics Across Rabigh Province',
      neighborhoodsAnalysisParagraphs: [
        'تنقسم احتياجات التنظيف في رابغ بين الأحياء السكنية التقليدية والمخططات الجديدة ومجمعات الشركات؛ ففي أحياء النزيلة والمرجانية والصمد القديمة، نركز على تنظيف المنازل الشعبية والفلل ومكافحة الأتربة المتراكمة في الأحواش ومجاري الصرف. أما في المخططات الحديثة كحي النخيل وحي المرجان، وفي مجمعات إسكان موظفي بترورابغ ومدينة الملك عبدالله الاقتصادية، ينصب التركيز على تنظيف الشقق الحديثة، وتلميع الأرضيات البورسلين، والتعقيم الشامل للمطابخ الأمريكية وأنظمة التكييف السبليت.',
        'تصل سياراتنا المجهزة بكافة المولدات والمعدات المتنقلة إلى كافة أنحاء رابغ، مع توفير مواعيد ميسرة خلال عطلات نهاية الأسبوع لتناسب ظروف الموظفين والعائلات.'
      ],
      neighborhoodsAnalysisParagraphsEn: [
        'Residential cleaning dynamics in Rabigh divide between traditional town neighborhoods, newly developed residential plots, and corporate compounds. In established sectors like Al-Nazilah, Al-Merghaniya, and Al-Samad, our focus centers on courtyard sand clearance, drain sanitization, and full residence scrubbing. In newer developments such as Al-Nakheel, Al-Murjan, Petro Rabigh staff quarters, and KAEC apartments, priorities focus on modern open-plan kitchens, split AC cleaning, and high-gloss porcelain restoration.',
        'Our fully equipped mobile vans arrive punctually across all Rabigh zones, providing convenient weekend booking slots tailored to corporate professionals and families.'
      ],
      importanceTitle: 'أهمية التنظيف الاحترافي لمنازل وشقق رابغ',
      importanceTitleEn: 'The Value of Professional Cleaning in Rabigh',
      importanceContent: [
        'إخلاء الرمال الناعمة المترسبة: حماية أرضيات السيراميك والباركيه من الخدوش الناتجة عن احتكاك ذرات الرمل الساحلي.',
        'معالجة آثار الرياح الصناعية والساحلية: التخلص من الأتربة المركبة التي تتفاعل مع الرطوبة وتشكل رواسب لزجة.',
        'توفير بيئة مريحة للمهندسين والعائلات: مسكن نظيف ومعقم يتيح للموظفين الراحة التامة وتجديد النشاط بعد نوبات العمل.',
        'حماية أجهزة التكييف والشبابيك: تنظيف مجاري النوافذ وفلاتر المكيفات يمنع تلف المحركات وارتفاع فواتير الكهرباء.'
      ],
      importanceContentEn: [
        'Extracting Granular Coastal Sand: Preventing premature surface scratching on ceramic and wood floors caused by sand friction.',
        'Neutralizing Industrial & Maritime Particulates: Eradicating sticky atmospheric dust bound by coastal humidity.',
        'Restful Sanctuaries for Corporate Teams: Providing clean, healthy living quarters for engineers and shift workers.',
        'Protecting Windows & Cooling Efficiency: Clearing sand jams from window mechanisms and split AC filters lowers electricity draw.'
      ],
      equipmentTitle: 'المعدات الصناعية المخصصة لبيئة رابغ الساحلية',
      equipmentTitleEn: 'Industrial Machinery Adapted to Rabigh Sand Dynamics',
      equipmentParagraphs: [
        'نعتمد في رابغ على مكانس صناعية ذات قدرة سحب توربينية مضاعفة مصممة خصيصاً لإخلاء الرمال الثقيلة من الزوايا والمجاري دون أن تتأثر محركاتها، بجانب ماكينات فرك دوارة ذات أقراص ألياف خشنة تنظف البلاط وتزيل الغبار المتصلب.',
        'نستخدم منظفات ومعقمات معتمدة من SASO خالية من المواد الكيميائية الضارة، آمنة ومطهرة لمناطق الطهي وأرضيات غرف الأطفال، مع ضمان القضاء على 99.9% من مسببات الحساسية.'
      ],
      equipmentParagraphsEn: [
        'In Rabigh, Mesk Clean deploys reinforced dual-stage industrial turbine vacuum extractors built specifically to retrieve heavy sand particulates without motor clogging, paired with rotary scrubbers using coarse pads that strip baked-on dust.',
        'We apply SASO-approved, non-toxic sanitizing formulations that thoroughly disinfect food prep surfaces and bedroom floors, eliminating 99.9% of dust-borne allergens safely.'
      ],
      workflowTitle: 'مراحل خطة تنظيف المنازل في رابغ بالتفصيل',
      workflowTitleEn: 'Step-by-Step Rabigh Home Cleaning Workflow',
      workflowSteps: [
        {
          number: 1,
          title: 'الشفط التوربيني للرمال الساحلية',
          titleEn: 'Turbine Sand Extraction',
          description: 'سحب ميكانيكي لكافة الأتربة والرمال من الأرضيات ومجاري النوافذ والأبواب قبل البدء بالغسيل.',
          descriptionEn: 'High-suction turbine extraction pulling sand from window slides, baseboards, and door thresholds.'
        },
        {
          number: 2,
          title: 'جلي وفرك السيراميك والبورسلين',
          titleEn: 'Mechanical Floor Scrubbing',
          description: 'غسيل الأرضيات بماكينات دوارة ومحاليل متخصصة تفتت الأوساخ وتعيد اللمعان للبلاط.',
          descriptionEn: 'Rotary scrubbing machines lifting bound dirt and brightening tile surfaces and grout.'
        },
        {
          number: 3,
          title: 'تنظيف وتعقيم المطابخ ودورات المياه',
          titleEn: 'Kitchen & Bathroom Sanitization',
          description: 'إزالة الزيوت من الشفاطات والجدران وتعقيم الحمامات بمطهرات طبية قوية تزيل التكلسات.',
          descriptionEn: 'Degreasing exhaust hoods and cooktops, with hospital-grade sanitization of sanitary fixtures.'
        },
        {
          number: 4,
          title: 'مسح الأثاث والأسطح بملمعات مضادة للشحنات',
          titleEn: 'Anti-Static Dust Repelling Wipes',
          description: 'تنظيف الأبواب والخزائن والأسطح بمواد تمنع التصاق الرمال والغبار الساحلي المتطاير.',
          descriptionEn: 'Wiping doors, cabinetry, and fixtures with anti-static agents that repel airborne sand re-adhesion.'
        },
        {
          number: 5,
          title: 'تنظيف مجاري النوافذ والشبابيك',
          titleEn: 'Window Slider Deep Flush',
          description: 'إزالة الرواسب الرملية من مسارات الألمنيوم وتلميع الزجاج بمساحات مايكروفايبر مانعة للخطوط.',
          descriptionEn: 'Vacuuming sand buildup from window tracks and streak-free polishing of exterior glass panes.'
        },
        {
          number: 6,
          title: 'التعقيم والتعطير والتسليم المعتمد',
          titleEn: 'Decontamination & Final Sign-Off',
          description: 'تعقيم مقابض الأبواب وتعطير البيت برائحة فندقية منعشة وتسليمه للعميل برضا تام.',
          descriptionEn: 'Disinfecting high-touch handles, diffusing fresh ambient fragrance, and client inspection.'
        }
      ],
      featuresTitle: 'أسباب اختيار سكان رابغ لشركة مسك كلين',
      featuresTitleEn: 'Key Advantages of Mesk Clean in Rabigh',
      features: [
        {
          title: 'تغطية شاملة لكافة أحياء ومجمعات رابغ',
          titleEn: 'Full Coverage Across Rabigh & Compounds',
          description: 'نصل إلى كافة المخططات ومجمعات بترورابغ ومحيط مدينة الملك عبدالله الاقتصادية بسرعة قياسية.',
          descriptionEn: 'Rapid deployment reaching all residential schemes, Petro Rabigh housing, and KAEC vicinity.'
        },
        {
          title: 'معدات متخصصة في سحب الرمال الساحلية',
          titleEn: 'Sand-Adapted Heavy Equipment',
          description: 'ماكينات ومكانس صناعية ذات قدرة سحب توربينية تتفوق على أساليب المكانس العادية.',
          descriptionEn: 'Heavy-gauge vacuum extractors purpose-built to extract granular sand without clogging.'
        },
        {
          title: 'مواعيد مرنة تلائم نوبات العمل بالشركات',
          titleEn: 'Flexible Shift-Worker Scheduling',
          description: 'نوفر فترات عمل مسائية وفي عطلات نهاية الأسبوع لتناسب دوام الموظفين والمهندسين.',
          descriptionEn: 'Evening and weekend booking slots coordinated around corporate and plant shift hours.'
        },
        {
          title: 'ضمان الجودة ومتابعة ما بعد التنفيذ',
          titleEn: 'Quality & Satisfaction Guarantee',
          description: 'التزام تام بكافة بنود العمل دون أي مصاريف إضافية وضمان مراجعة أي ملاحظة فوراً برضا تام.',
          descriptionEn: 'Full commitment to work standards with no extra charges, backed by our 100% satisfaction commitment.'
        }
      ],
      districtsTitle: 'الأحياء والمناطق المغطاة بخدماتنا في محافظة رابغ',
      districtsTitleEn: 'Rabigh Districts & Industrial Zones Covered',
      districtsIntro: 'تصل فرق مسك كلين المجهزة إلى كافة أحياء رابغ والمجمعات السكنية والصناعية:',
      districtsIntroEn: 'Our service vans cover all sectors of Rabigh province and adjacent economic hubs:',
      districtsList: [
        'أحياء وسط رابغ: المرجانية، النزيلة، الصفا، النعيم، الصمد، الفريسنية، السوق القديم.',
        'المخططات السكنية الحديثة: حي النخيل، حي المرجان، حي الفيحاء، حي الورود، مخطط النزهة.',
        'المناطق السكنية والصناعية المجاورة: مجمعات سكن موظفي بترورابغ، ومحيط مدينة الملك عبدالله الاقتصادية (KAEC) وميناء الملك عبدالله.'
      ],
      districtsListEn: [
        'Central Rabigh: Al-Merghaniya, Al-Nazilah, Al-Safa, Al-Naeem, Al-Samad, Al-Furaissaniyah, Old Souk.',
        'Modern Subdivisions: Al-Nakheel, Al-Murjan, Al-Fayhaa, Al-Wurood, Al-Nuzha residential schemes.',
        'Adjacent Industrial & Residential Zones: Petro Rabigh staff housing, King Abdullah Economic City (KAEC) vicinity, and King Abdullah Port quarters.'
      ],
      tipsTitle: 'نصائح خبرائنا للحد من تراكم الرمال في منازل رابغ',
      tipsTitleEn: 'Expert Advice to Counter Sand Drift in Rabigh',
      tipsIntro: 'طرق عملية وفعالة مقدمة من خبراء مسك كلين لحماية بيتك من الرياح الرملية:',
      tipsIntroEn: 'Practical guidance from Mesk Clean specialists to protect coastal residences from blowing sand:',
      tipsList: [
        {
          title: 'تركيب موانع الغبار أسفل الأبواب الخارجية',
          titleEn: 'Install Under-Door Sweep Gaskets',
          description: 'تثبيت مصدات وفرشات مطاطية تحت أبواب المداخل يمنع تسرب حبيبات الرمل مع حركة الرياح الساحلية.',
          descriptionEn: 'Rubber sweep gaskets block fine sand grains from drifting under entrance doors during coastal gusts.'
        },
        {
          title: 'شفط مجاري النوافذ بالمكنسة أسبوعياً',
          titleEn: 'Vacuum Window Sliding Tracks Weekly',
          description: 'إزالة الرمال من مجرى النوافذ يمنع احتكاكها بزجاج الشبابيك وسهولة تلف إطارات الألمنيوم.',
          descriptionEn: 'Regular suctioning of window channels prevents abrasive sand from jamming sliding rollers and scratching glass.'
        },
        {
          title: 'إحكام غلق فتحات المكيفات الجدارية',
          titleEn: 'Seal Around Wall & Window AC Frames',
          description: 'سد الفراغات المحيطة بإطارات المكيفات بمادة السيليكون العازلة يمنع تسلل تيارات الغبار الدقيقة.',
          descriptionEn: 'Applying silicone sealants around AC sleeves stops windborne sand from bypassing interior walls.'
        },
        {
          title: 'غسيل سجادات المداخل بانتظام',
          titleEn: 'Wash Heavy Entrance Mats Regularly',
          description: 'تنظيف سجادات الأبواب أسبوعياً يضمن استمرار قدرتها على حجز الأتربة العالقة بأحذية العمل.',
          descriptionEn: 'Rinsing exterior walk-off mats weekly restores their capacity to trap abrasive soil from footwear.'
        }
      ],
      faqsTitle: 'أسئلة شائعة حول تنظيف المنازل في رابغ',
      faqsTitleEn: 'Frequently Asked Questions - Rabigh Home Cleaning',
      faqs: [
        {
          question: 'هل تقدمون خدمات التنظيف لسكن موظفي الشركات والمهندسين برابغ؟',
          questionEn: 'Do you service corporate housing and engineer quarters in Rabigh?',
          answer: 'نعم، نقدم عقود تنظيف دورية وخدمات عاجلة لسكن الشركات والعائلات في بترورابغ ومدينة الملك عبدالله الاقتصادية وكافة أحياء رابغ.',
          answerEn: 'Yes, we provide routine contracts and one-time deep cleaning for corporate housing in Petro Rabigh, KAEC, and all districts.'
        },
        {
          question: 'كيف تتعاملون مع الرمال الساحلية العالقة في مسارات النوافذ؟',
          questionEn: 'How do you handle coastal sand packed tightly into window slides?',
          answer: 'نستخدم مكانس شفط توربينية دقيقة تسحب الرمال بالكامل دون خدش الألمنيوم، ثم نغسل المسارات بمحاليل خاصة ونزيتها لتسهيل الانزلاق.',
          answerEn: 'We use high-power precision turbine nozzles that extract compacted sand safely before washing and lubricating tracks.'
        },
        {
          question: 'هل تتوفر لديكم مواعيد خلال عطلة نهاية الأسبوع برابغ؟',
          questionEn: 'Are cleaning appointments available during weekends in Rabigh?',
          answer: 'نعم، نعمل طوال أيام الأسبوع بما في ذلك الجمعة والسبت لتلبية مواعيد العائلات والموظفين في أوقات راحتهم.',
          answerEn: 'Yes, we operate 7 days a week, including Fridays and Saturdays, catering to employee days off.'
        },
        {
          question: 'هل المنظفات المستخدمة تزيل الروائح الكتمة الناتجة عن الرطوبة؟',
          questionEn: 'Do your detergents eliminate musty odors caused by humidity?',
          answer: 'نعم، نستخدم معقمات طبية ومطهرات مضادة للبكتيريا تقضي على مسببات الروائح الكتمة وتمنح البيت انتعاشاً يدوم طويلاً.',
          answerEn: 'Yes, our hospital-grade biocides destroy odor-producing bacterial spores, restoring lasting freshness.'
        }
      ]
    }
  }
};
