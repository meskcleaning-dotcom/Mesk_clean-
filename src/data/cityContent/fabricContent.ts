import { CityId } from '../../context/CityRouteContext';
import { CityServicePageData } from '../cityServicesContent';

export const FABRIC_SERVICES_MAP: Record<'sofas' | 'carpets', Partial<Record<CityId, CityServicePageData>>> = {
  // 5. تنظيف الكنب بالبخار (Steam Sofa Cleaning)
  'sofas': {
    jeddah: {
      serviceId: 'sofas',
      cityId: 'jeddah',
      slug: 'sofas',
      canonicalPath: '/jeddah/services/sofas',
      metaTitle: 'شركة تنظيف كنب بالبخار بجدة | مسك كلين - إزالة بقع الرطوبة والروائح وتجفيف سريع',
      metaTitleEn: 'Steam Sofa Cleaning Company in Jeddah | Mesk Clean - Fast Drying & Stain Removal',
      metaDescription: 'أفضل شركة تنظيف كنب بالبخار بجدة لغسيل المجالس والكنب والأنتريهات بأحدث أجهزة الحقن والشفط الحراري، إزالة بقع القهوة والزيوت وتجفيف خلال ساعتين بأحياء الروضة والشاطئ والصفا.',
      metaDescriptionEn: 'Top steam sofa and majlis cleaning in Jeddah by Mesk Clean. Deep injection-extraction, organic stain removal, and fast 2-hour drying across all Jeddah neighborhoods.',
      keywords: ['شركة تنظيف كنب بالبخار بجدة', 'غسيل كنب بجدة', 'تنظيف مجالس بجدة', 'تنظيف كنب بالبخار شمال جدة', 'أفضل شركة غسيل كنب في جدة'],
      heroBadge: 'خدمة معتمدة للكنب والمجالس بجدة',
      heroBadgeEn: 'Certified Upholstery Care in Jeddah',
      heroHeading: 'شركة تنظيف كنب بالبخار بجدة - استعادة رونق الأقمشة وتجفيف سريع',
      heroHeadingEn: 'Steam Sofa Cleaning Services in Jeddah - Restoring Fabric Elegance',
      heroSubtitle: 'نقدم لسكان جدة تنظيفاً عميقاً للكنب والمجالس بأحدث ماكينات الحقن والشفط الإيطالية، لإزالة بقع القهوة والزيوت المستعصية والروائح الكتمة مع الحفاظ التام على ألوان ونعومة القماش.',
      heroSubtitleEn: 'Mesk Clean provides advanced steam injection-extraction for sofas and majlis in Jeddah, dissolving deep humidity stains, neutralizing trapped odors, and ensuring rapid drying.',
      introParagraphs: [
        'يمثل الكنب والمجالس ركيزة الراحة والضيافة في منازل وشقق مدينة جدة، إلا أن المناخ الساحلي الرطب للبحر الأحمر يفرض ضغوطاً متواصلة على أقمشة الأثاث؛ حيث تتشبع ألياف الكنب وبطانة الإسفنج الداخلية برطوبة الجو المرتفعة، مما يجعلها تلتقط الأتربة المتطايرة وبقع العرق والقهوة والعصائر بسرعة مضاعفة. هذا المزيج من الرطوبة والحرارة يخلق بيئة مثالية لتكاثر عث الغبار الدقيق وظهور روائح الركود غير المستحبة، فضلاً عن بهتان ألوان أقمشة المخمل والكتان والشمواه الحساسة.',
        'تعتبر شركة مسك كلين الخيار الرائد في تنظيف الكنب والمجالس بالبخار بجدة؛ حيث نعتمد على ماكينات الحقن والشفط الحراري المزدوجة التي تضخ بخار الماء الساخن الممزوج بشامبوهات عضوية مخصصة للأقمشة الفاخرة لتفتيت أصعب بقع الدهون والزيوت، ثم تسحب الأوساخ والرطوبة فوراً بقوة شفط توربينية تضمن استعادة 90% من جفاف الكنب في الموقع، ليصبح جاهزاً للاستخدام في غضون ساعتين إلى ثلاث ساعات فقط دون الحاجة لنقله خارج المنزل.',
        'نغطي كافة أحياء محافظة جدة بفرق ميدانية متنقلة، ونصل سريعاً إلى أحياء شمال جدة (الروضة، الشاطئ، أبحر، المرجان، النعيم)، وأحياء وسط وشرق جدة (الصفا، المروة، الحمراء، السلامة، الزهراء، السامر)، لضمان مجلس فخم ومعقم يشرفك أمام ضيوفك ويبعث على الانتعاش والراحة.'
      ],
      introParagraphsEn: [
        'Sofas and living room majlis seating are central to family life and hospitality in Jeddah. However, elevated Red Sea humidity creates persistent challenges for upholstered furniture. High ambient moisture permeates deep upholstery batting and foam padding, accelerating the absorption of airborne dust, perspiration, and food or beverage spills. This combination of heat and humidity fosters dust mite colonization, trapped musty odors, and dullness across delicate velvets, textured chenille, and linen fabrics.',
        'Mesk Clean is recognized as the leading steam upholstery cleaning specialist in Jeddah. We utilize advanced dual injection-extraction machinery that injects thermal steam blended with fiber-safe enzyme shampoos to dissolve polymerized oils and coffee stains, immediately recovering 90% of moisture with high-torque extraction pumps. This accelerated process allows sofa use within just 2 to 3 hours directly inside your living room with no furniture hauling.',
        'Our mobile units service all Jeddah sectors, arriving punctually across North Jeddah (Al-Rawdah, Al-Shati, Obhur, Al-Murjan, Al-Naeem) and Central/East sectors (Al-Safa, Al-Marwah, Al-Hamra, Al-Salamah, Al-Zahra, Al-Samer), delivering hotel-grade freshness and hygiene.'
      ],
      neighborhoodsAnalysisTitle: 'الخصوصية الميدانية لتنظيف الكنب والمفروشات بأحياء جدة',
      neighborhoodsAnalysisTitleEn: 'District Upholstery Care Dynamics Across Jeddah',
      neighborhoodsAnalysisParagraphs: [
        'في أحياء شمال جدة الساحلية كأبحر وحي الشاطئ والروضة، تتسم المنازل والفلل بوجود أطقم كنب كلاسيكية ومودرن من المخمل والجلد والحرير؛ لذا نعتمد محاليل متخصصة خالية من المبيضات تحافظ على ثبات الصبغات وألياف القماش الحساسة. أما في أحياء وسط وشرق جدة كالصفا والمروة والسامر، ينصب التركيز على تنظيف المجالس العائلية الكبيرة، وإزالة بقع أطعمة الأطفال والمشروبات، وتطهير الإسفنج الداخلي من الروائح الكتمة.',
        'تصل فرق مسك كلين بمعداتها المتكاملة إلى منزلك بجدة، لتنظيف أطقم الكنب والمقاعد والوسائد في مكانها بدقة متناهية.'
      ],
      neighborhoodsAnalysisParagraphsEn: [
        'In coastal North Jeddah enclaves like Obhur, Al-Shati, and Al-Rawdah, homes frequently feature designer velvet, genuine leather, and silk blend upholstery. Our technicians conduct dye-fastness testing and apply specialized non-bleaching formulas that preserve delicate fibers. In central and eastern sectors like Al-Safa, Al-Marwah, and Al-Samer, priorities focus on high-traffic family majlis seating, deep food stain lifting, and interior foam deodorization.',
        'Mesk Clean mobile technicians arrive fully equipped at your residence, cleaning sofa sets, armchairs, and decorative pillows on-site with meticulous care.'
      ],
      importanceTitle: 'أهمية تنظيف الكنب بالبخار في بيئة جدة الساحلية',
      importanceTitleEn: 'Why Steam Sofa Cleaning Matters in Coastal Jeddah',
      importanceContent: [
        'القضاء على عث الغبار ومسببات الحساسية: حرارة البخار التي تصل لـ 100 مئوية تقتل 99.9% من حشرات الفراش والجراثيم العالقة.',
        'إزالة بقع القهوة والزيوت المستعصية: مذيبات عضوية تفكك أصعب البقع العميقة دون الإضرار بنعومة القماش أو تغيير لونه.',
        'التخلص النهائي من روائح الرطوبة: سحب السوائل المتخمرة وتعطير الألياف بزيوت عطرية طبيعية يمنح المجالس انتعاشاً يدوم لأسابيع.',
        'حماية الأقمشة الفاخرة من التلف: التنظيف الدوري بالبخار يزيل ذرات الرمل الحادة التي تحتك بالخيوط وتسبب تآكلها مع الجلوس.'
      ],
      importanceContentEn: [
        'Eradicating Dust Mites & Allergens: 100°C thermal steam kills 99.9% of microscopic allergens embedded in deep foam padding.',
        'Lifting Deep Beverage & Oil Stains: Bio-enzymatic agents break down stubborn coffee and grease marks without altering fabric color.',
        'Eliminating Trapped Humidity Odors: High-suction extraction pulls out fermented moisture, atomizing fresh fragrance that lasts for weeks.',
        'Preserving Luxury Fabric Integrity: Regular steam extraction removes abrasive sand grit that causes fiber fraying over time.'
      ],
      equipmentTitle: 'ماكينات الحقن والشفط الإيطالية المعتمدة بجدة',
      equipmentTitleEn: 'Certified Italian Injection-Extraction Machinery in Jeddah',
      equipmentParagraphs: [
        'نعتمد في مسك كلين بجدة على ماكينات تنظيف المفروشات الإيطالية من طراز سانتو إيما وسانتو بلاست، التي تتميز بقدرتها على ضخ رغوة البخار الساخن وسحب المياه المتسخة في نفس اللحظة عبر فوهات شفط شفافة تتيح للعميل رؤية كمية الأوساخ المستخرجة من الكنب.',
        'كافة الشامبوهات ومذيبات البقع المستخدمة مصرحة من هيئة الغذاء والدواء ومطابقة لمعايير SASO، خالية من الصودا الكاوية أو الكلور، وآمنة تماماً على ملامسة بشرة الأطفال.'
      ],
      equipmentParagraphsEn: [
        'At Mesk Clean Jeddah, we operate Santoemma and Santo Plast Italian upholstery extractors that inject pressurized warm bio-shampoo while simultaneously vacuuming dirty liquid through clear recovery heads, allowing clients to see deep grime extraction live.',
        'All fabric shampoos and spotting agents are SFDA-approved and meet SASO quality standards. They are 100% free of caustic soda or chlorine bleaches, ensuring absolute safety for direct skin contact.'
      ],
      workflowTitle: 'خطوات تنظيف الكنب بالبخار في جدة بالتفصيل',
      workflowTitleEn: 'Our Complete Step-by-Step Steam Sofa Cleaning Process in Jeddah',
      workflowSteps: [
        {
          number: 1,
          title: 'فحص نوعية القماش واختبار ثبات الألوان',
          titleEn: 'Fabric Inspection & Color-Fastness Test',
          description: 'معاينة خامة الكنب (مخمل، كتان، شمواه، جلد) واختبار المنظف على جزء غير مرئي للتأكد من أمانه التام.',
          descriptionEn: 'Inspecting weave construction (velvet, linen, nubuck, leather) and testing spotting agents on hidden seams.'
        },
        {
          number: 2,
          title: 'الشفط الجاف العميق للأتربة والفتات',
          titleEn: 'High-Velocity Dry Crevice Vacuuming',
          description: 'سحب الأتربة والرمال وبقايا الأطعمة من الشقوق العميقة وثنايا الوسائد بمكنسة ذات فوهة دقيقة.',
          descriptionEn: 'Extracting settled sand, crumbs, and hair from deep crevices and tufting using targeted crevice attachments.'
        },
        {
          number: 3,
          title: 'المعالجة المسبقة للبقع المستعصية',
          titleEn: 'Targeted Enzymatic Pre-Treatment',
          description: 'رش محاليل إنزيمية مركزة على بقع القهوة والشوكولاتة والعرق وفركها بفرشاة ناعمة مخصصة.',
          descriptionEn: 'Applying concentrated bio-enzymatic agents to coffee, chocolate, and grease stains, agitating gently with soft brushes.'
        },
        {
          number: 4,
          title: 'حقن البخار الساخن والشامبو العضوي',
          titleEn: 'Thermal Steam & Shampoo Injection',
          description: 'ضخ البخار الحراري الممزوج بالشامبو المنظف داخل ألياف القماش لتفتيت الأوساخ العميقة وتعقيم الإسفنج.',
          descriptionEn: 'Pressurizing hot steam and fabric-safe shampoo deep into fibers to break down encapsulated soil and kill bacteria.'
        },
        {
          number: 5,
          title: 'الشفط التوربيني القوي للرطوبة والأوساخ',
          titleEn: 'High-Torque Moisture Extraction',
          description: 'سحب المياه المتسخة والرطوبة بقوة شفط فائقة تترك الكنب شبه جاف بنسبة 90% أثناء العمل.',
          descriptionEn: 'Retrieving 90% of moisture and suspended dirt under high vacuum suction, ensuring accelerated drying.'
        },
        {
          number: 6,
          title: 'التعطير بالأروما والتمشيط النهائي للألياف',
          titleEn: 'Aromatherapy & Fiber Grooming',
          description: 'تمشيط وبرة القماش باتجاه واحد وتعطير المجلس بمستخلصات زهرية فاخرة تدوم طويلاً.',
          descriptionEn: 'Brushing fabric pile in a uniform direction and misting signature long-lasting floral aromatherapy.'
        }
      ],
      featuresTitle: 'مميزات شركة مسك كلين في تنظيف كنب جدة',
      featuresTitleEn: 'Why Choose Mesk Clean for Sofa Cleaning in Jeddah',
      features: [
        {
          title: 'تجفيف سريع يتيح الاستخدام خلال ساعتين',
          titleEn: 'Accelerated 2-Hour Rapid Drying',
          description: 'ماكينات شفط توربينية تسحب الرطوبة من قعر الإسفنج ليكون الكنب جاهزاً للاستخدام بنفس اليوم.',
          descriptionEn: 'Powerful extraction motors pull residual water from deep padding, allowing sofa use within 2 to 3 hours.'
        },
        {
          title: 'إزالة أصعب بقع القهوة والشوكولاتة والزيوت',
          titleEn: 'Stubborn Spot & Stain Breakers',
          description: 'مذيبات إنزيمية مستوردة تقضي على البقع المستعصية القديمة مع الحفاظ التام على ألوان القماش.',
          descriptionEn: 'Imported bio-shampoos dissolve aged coffee, tea, and grease spots without color bleed.'
        },
        {
          title: 'تنظيف منزلي في موقعك دون نقل الأثاث',
          titleEn: '100% On-Site Living Room Service',
          description: 'نحضر كافة الأجهزة والمعدات إلى صالتك وننجز العمل بهدوء ونظافة دون فوضى أو نقل.',
          descriptionEn: 'All cleaning is executed right inside your salon with no awkward furniture moving or hauling.'
        },
        {
          title: 'مواد آمنة ومعتمدة من SASO خالية من الكيماويات',
          titleEn: 'SASO-Certified Non-Toxic Formulations',
          description: 'محاليل تنظيف صديقة للبيئة خالية من المبيضات وآمنة تماماً للأطفال وأصحاب الحساسية الصدرية.',
          descriptionEn: 'Hypoallergenic, non-toxic detergents completely safe for children, pets, and sensitive skin.'
        }
      ],
      districtsTitle: 'أحياء مدينة جدة المغطاة بخدمة تنظيف الكنب',
      districtsTitleEn: 'Jeddah Neighborhoods Covered for Sofa Cleaning',
      districtsIntro: 'تصل فرق مسك كلين المتنقلة إلى كافة أحياء جدة لتقديم خدمة تنظيف الكنب بالبخار:',
      districtsIntroEn: 'Our mobile upholstery vans service all sectors across Jeddah:',
      districtsList: [
        'أحياء شمال جدة: الروضة، الشاطئ، المرجان، البساتين، المحمدية، أبحر الشمالية، أبحر الجنوبية، النعيم، النهضة.',
        'أحياء وسط جدة: الحمراء، الزهراء، السلامة، الأندلس، مشرفة، العزيزية، الرحاب، الرويس، الفيصلية.',
        'أحياء شرق وجنوب جدة: الصفا، المروة، السامر، الحمدانية، الفلاح، المنار، السليمانية، النسيم، الروابي.'
      ],
      districtsListEn: [
        'North Jeddah: Al-Rawdah, Al-Shati, Al-Murjan, Al-Basateen, Al-Mohammediyah, North & South Obhur, Al-Naeem.',
        'Central Jeddah: Al-Hamra, Al-Zahra, Al-Salamah, Al-Andalus, Mushrefah, Al-Aziziyah, Al-Rehab, Al-Ruwais.',
        'East & South Jeddah: Al-Safa, Al-Marwah, Al-Samer, Al-Hamdaniyah, Al-Falah, Al-Manar, Al-Sulaimaniyah, Al-Naseem.'
      ],
      tipsTitle: 'نصائح خبرائنا للحفاظ على نظافة كنبك في أجواء جدة',
      tipsTitleEn: 'Expert Advice for Upholstery Care in Coastal Jeddah',
      tipsIntro: 'إرشادات عملية مقدمة من خبراء مسك كلين لحماية أقمشة الكنب من الرطوبة والبقع:',
      tipsIntroEn: 'Practical guidance from our upholstery specialists tailored to coastal homes:',
      tipsList: [
        {
          title: 'الضغط الجاف على بقع السوائل دون فرك',
          titleEn: 'Blot Spills Immediately Without Rubbing',
          description: 'عند انسكاب القهوة أو الشاي، اضغط بمنشفة قطنية جافة لامتصاص السائل وتجنب فركه لتفادي توسيع البقعة.',
          descriptionEn: 'Press dry white cotton towels firmly over fresh spills to absorb liquid; never rub, which drives stains deeper.'
        },
        {
          title: 'شفط الكنب بالمكنسة المنزلية أسبوعياً',
          titleEn: 'Vacuum Crevices & Cushions Weekly',
          description: 'إزالة الغبار والأتربة أسبوعياً يمنع تفاعلها مع رطوبة الجو وتحولها إلى طبقة داكنة على القماش.',
          descriptionEn: 'Weekly crevice vacuuming stops fine airborne dust from binding with ambient humidity into a dark layer.'
        },
        {
          title: 'إبعاد الكنب عن أشعة الشمس المباشرة',
          titleEn: 'Shield Fabrics from Direct Sunlight',
          description: 'تعريض الكنب للشمس المباشرة عبر النوافذ يسبب جفاف أنسجة الأقمشة والجلد وبهتان الألوان.',
          descriptionEn: 'Position sofas away from intense window sunlight to prevent fabric brittleness and color fading.'
        },
        {
          title: 'تشغيل التكييف لتهوية غرفة المعيشة',
          titleEn: 'Dehumidify Rooms with Air Conditioning',
          description: 'تشغيل المكيف يقلل من رطوبة الهواء داخل الغرفة ويمنع تكاثر الفطريات وعث الغبار في بطانة الكنب.',
          descriptionEn: 'Running air conditioning lowers indoor relative humidity, preventing mold colonization inside foam.'
        }
      ],
      faqsTitle: 'أسئلة شائعة حول تنظيف الكنب بالبخار بجدة',
      faqsTitleEn: 'Frequently Asked Questions - Jeddah Sofa Cleaning',
      faqs: [
        {
          question: 'كم من الوقت يستغرقه الكنب ليجف تماماً بعد التنظيف بالبخار بجدة؟',
          questionEn: 'How long does a sofa take to dry after steam cleaning in Jeddah?',
          answer: 'بفضل قوة ماكينات الشفط الإيطالية التي تسحب 90% من السوائل، يجف الكنب تماماً خلال ساعتين إلى ثلاث ساعات مع تشغيل مكيف الغرفة.',
          answerEn: 'Thanks to our Italian high-vacuum extraction retrieving 90% of moisture, sofas dry completely within 2 to 3 hours with AC on.'
        },
        {
          question: 'هل تضمنون إزالة بقع القهوة والشاي القديمة من الكنب؟',
          questionEn: 'Can you remove old, dried coffee and tea stains?',
          answer: 'نعم، نستخدم مذيبات إنزيمية متخصصة تفتت جزيئات التانين والدهون القديمة وتزيلها بنسبة نجاح تفوق 95% مع الحفاظ على القماش.',
          answerEn: 'Yes, we apply specialized enzymatic tannin and grease spotters, successfully removing over 95% of old stains safely.'
        },
        {
          question: 'هل يتم تنظيف الكنب في البيت أم يلزم نقله إلى مغاسل خارجية؟',
          questionEn: 'Is the sofa cleaned on-site at home or transported away?',
          answer: 'يتم التنظيف بالكامل في موقعك داخل الصالة بأحدث المعدات المتنقلة دون الحاجة لنقل أي قطعة خارج المنزل.',
          answerEn: 'All cleaning is executed on-site inside your living room using mobile equipment, eliminating hauling inconvenience.'
        },
        {
          question: 'هل المواد المستخدمة آمنة على أقمشة المخمل والجلد الطبيعي؟',
          questionEn: 'Are the products safe for delicate velvet and genuine leather?',
          answer: 'نعم، نوفر معالجات خاصة تناسب المخمل والشمواه والجلد الطبيعي بمواد مرطبة وملمعة خالية من الكيماويات الضارة.',
          answerEn: 'Yes, we utilize specialized conditioner-infused formulas specifically suited for luxury velvets, nubuck, and genuine leather.'
        }
      ]
    },
    makkah: {
      serviceId: 'sofas',
      cityId: 'makkah',
      slug: 'sofas',
      canonicalPath: '/makkah/services/sofas',
      metaTitle: 'شركة تنظيف كنب ومجالس بمكة المكرمة | مسك كلين - تنظيف بالبخار للمجالس الفاخرة',
      metaTitleEn: 'Majlis & Sofa Cleaning Company in Makkah | Mesk Clean - Luxury Steam Cleaning',
      metaDescription: 'أفضل شركة تنظيف كنب ومجالس بمكة المكرمة لغسيل أطقم الكنب والمجالس الفسيحة بالبخار والتعقيم، إزالة بقع القهوة والعود وتجهيز المجالس لمواسم الضيافة بالعوالي والشوقية والزايدي.',
      metaDescriptionEn: 'Premier steam sofa and traditional majlis cleaning in Holy Makkah by Mesk Clean. Deep sanitization for grand hospitality seating across Al-Awali, Al-Shawqiyyah, and all districts.',
      keywords: ['شركة تنظيف كنب بمكة المكرمة', 'غسيل كنب بمكة', 'تنظيف مجالس بمكة', 'تنظيف كنب بالبخار العوالي مكة', 'غسيل مجالس الشوقية'],
      heroBadge: 'خدمة معتمدة للكنب والمجالس بمكة المكرمة',
      heroBadgeEn: 'Certified Majlis & Sofa Care in Makkah',
      heroHeading: 'شركة تنظيف كنب ومجالس بمكة المكرمة - هيبة وضيافة تليق بالمجالس المكية',
      heroHeadingEn: 'Sofa & Majlis Cleaning in Holy Makkah - Pristine Hospitality Standards',
      heroSubtitle: 'نقدم لأهالي مكة المكرمة خدمة تنظيف عميق للمجالس الكبيرة وأطقم الكنب بأحدث ماكينات البخار الحراري، لإزالة بقع القهوة العربية والعود، وتطهير الأقمشة لمواسم الخير والزيارات المباركة.',
      heroSubtitleEn: 'Mesk Clean provides deep steam extraction for expansive traditional majlis seating and sofas in Makkah, removing Arabic coffee and oud residues, and delivering seasonal hospitality perfection.',
      introParagraphs: [
        'تحتل المجالس وصالات الاستقبال الفسيحة مكانة خاصة ومقدسة في منازل وفلل مكة المكرمة؛ فهي عنوان الكرم المكي الأصيل ومركز استقبال العائلات والوجهاء وضيوف الرحمن من الحجاج والمعتمرين. وتتميز هذه المجالس بطول أطقمها ومساحاتها الكبيرة، واستخدام الأقمشة الفاخرة كالمخمل والشانيل والحرير المذهب. إلا أن الاستخدام المكثف، وتطاير ذرات الغبار الجبلي الصخري الناعم، وانسكابات القهوة العربية والشاي والتمور وتبخير العود المتكرر، يترك بقعاً صعبة وتراكماً للأتربة في أعماق خيوط الأقمشة وثنايا الأثاث.',
        'تقدم مسك كلين في مكة المكرمة خدمة غسيل كنب ومجالس احترافية في موضعها دون إحداث فوضى؛ حيث نستخدم أجهزة شفط اهتزازية متطورة تسحب الأتربة الجبلية الدقيقة المحتبسة بين حشوات الإسفنج، يعقبها حقن البخار الحراري المركز بدرجة حرارة 100 مئوية مع شامبوهات ألمانية مخصصة لإذابة بقع القهوة والدهون وتعقيم الأقمشة من الجراثيم. تضمن مضخات الشفط التوربينية سحب 90% من السوائل، ليكون المجلس جافاً ومعقماً ومهيأً لاستقبال الضيوف في غضون ساعتين إلى ثلاث ساعات.',
        'نغطي كافة أحياء العاصمة المقدسة مثل حي العوالي، بطحاء قريش، الشوقية، الكعكية، الزايدي (الحمراء)، الرصيفة، النسيم، والشرائع، ونوفر خدمات تجهيز المجالس الكبيرة قبل مواسم رمضان المبارك والحج والأعياد، مع الالتزام التام بالأمانة وسرعة الإنجاز وحرمة البيوت.'
      ],
      introParagraphsEn: [
        'Spacious hospitality majlis salons hold a revered status in Makkah homes and villas, serving as the cultural heart of traditional generosity and gathering points for visiting pilgrims and extended families during Hajj and Ramadan. These expansive halls frequently feature custom 30-to-50-seat upholstery crafted from heavy velvets, damask, and gilded chenille. However, rigorous seasonal entertaining, fine mountain rock dust infiltration, and frequent spills of Arabic gahwa, tea, and concentrated oud oils lead to stubborn stains and deep-seated dust compaction.',
        'Mesk Clean in Holy Makkah provides an engineered on-site majlis restoration program. We utilize industrial vibratory extractors that retrieve abrasive rock dust from deep upholstery padding, followed by 100°C thermal steam injection blended with European bio-shampoos that dissolve coffee and fat residues while sterilizing fabric batting. Our high-velocity moisture recovery leaves majlis seating dry and ready for guests within just 2 to 3 hours.',
        'We service all Makkah residential sectors, including Al-Awali, Batha Quraish, Al-Shawqiyyah, Al-Kakiyyah, Al-Zaydi, Al-Rusaifah, Al-Naseem, and Al-Sharaye, providing respectful, punctual service ahead of major religious seasons.'
      ],
      neighborhoodsAnalysisTitle: 'خصوصية تنظيف المجالس عبر أحياء مكة المكرمة',
      neighborhoodsAnalysisTitleEn: 'District Majlis Architecture & Cleaning in Holy Makkah',
      neighborhoodsAnalysisParagraphs: [
        'في أحياء جنوب وشرق مكة كالعوالي والشوقية وبطحاء قريش، تضم الفلل مجالس ضيافة ضخمة ممتدة على مساحات تزيد عن 80 متراً مربعاً؛ لذا نخصص فرق عمل مدربة على التعامل مع المساحات الشاسعة وتطهير الكنب المتصل والوسائد الإضافية. أما في أحياء وسط مكة كالرصيفة والزايدي والنزهة، ينصب التركيز على تنظيف أطقم الكنب المودرن والكلاسيكية في الشقق السكنية، وإزالة بقع الأطعمة، وتعقيم أقمشة المقاعد بمطهرات طبية معتمدة.',
        'تصل سيارات مسك كلين المجهزة بكافة الماكينات الإيطالية إلى باب منزلك، لتنظيف مجلسك بالكامل وإعادته كما لو كان جديداً في نفس اليوم.'
      ],
      neighborhoodsAnalysisParagraphsEn: [
        'In expansive South and East Makkah villa sectors such as Al-Awali, Al-Shawqiyyah, and Batha Quraish, homes feature grand formal majlis salons spanning 80+ square meters; our crews deploy multi-technician teams to handle large continuous seating suites and loose decorative bolsters. In central districts like Al-Rusaifah, Al-Zaydi, and Al-Nuzha, work emphasizes apartment living room sets, child food spill removal, and hypoallergenic fabric sanitization.',
        'Our mobile units arrive fully self-contained across Makkah, restoring entire hospitality halls to showroom condition within a single working day.'
      ],
      importanceTitle: 'أهمية تنظيف المجالس بالبخار في مكة المكرمة',
      importanceTitleEn: 'Why Steam Majlis Cleaning is Essential in Holy Makkah',
      importanceContent: [
        'إزالة الغبار الجبلي الصخري من أعماق الأنسجة: سحب الأتربة الحادة يمنع تآكل خيوط القماش وبهتان ألوانها الزاهية.',
        'إزالة بقع القهوة العربية والعود والتمور: إذابة البقع الصعبة بمذيبات إنزيمية دون ترك أي هالات أو علامات داكنة.',
        'التعقيم الطبي الشامل لمواسم الضيافة: حرارة البخار تقضي على 99.9% من البكتيريا والجراثيم وتضمن طهارة ونقاء المجلس.',
        'استعادة نفشة وبرة القماش ونعومتها: تنظيف ألياف المخمل والكتان بالبخار يعيد لها حيويتها وملمسها الفاخر.'
      ],
      importanceContentEn: [
        'Extracting Abrasive Rock Dust: Vacuuming deep granite grit prevents microscopic fiber cutting and premature fabric fading.',
        'Dissolving Arabic Coffee & Oud Stains: Bio-enzymatic spotting agents melt away stubborn gahwa rings without water-mark halos.',
        'Hospital-Grade Thermal Sanitization: 100°C steam eradicates 99.9% of bacteria, ensuring pure, dignified hospitality.',
        'Restoring Fabric Loft & Softness: Hot steam treatment revives flattened velvet pile and restores authentic plush texture.'
      ],
      equipmentTitle: 'الماكينات الألمانية والإيطالية المعتمدة للمجالس بمكة',
      equipmentTitleEn: 'European Steam Extraction Equipment for Makkah Majlis',
      equipmentParagraphs: [
        'نستخدم في مسك كلين بمكة أجهزة تنظيف مفروشات إيطالية الصنع مزودة بسخانات بخار فورية ومضخات حقن بضغط 9 بار تضمن تغلغل المنظف إلى عمق الأنسجة وسحب الرواسب بسرعة فائقة دون تبليل مفرط لحشوة الإسفنج.',
        'جميع مواد التنظيف وإزالة البقع مصرحة من هيئة الغذاء والدواء السعودية، خالية من المبيضات الضارة، وآمنة تماماً على أقمشة المخمل والحرير المطرز.'
      ],
      equipmentParagraphsEn: [
        'Mesk Clean in Makkah operates heavy-duty Italian upholstery extraction units featuring instant flash-boilers and 9-bar injection pumps that drive cleaning shampoo deep into heavy batting while instantly extracting moisture, preventing foam saturation.',
        'All spotting agents are certified by the SFDA, 100% bleach-free, and thoroughly safe for gold-threaded damask and delicate velvets.'
      ],
      workflowTitle: 'خطوات تنظيف المجالس والكنب في مكة بالتفصيل',
      workflowTitleEn: 'Our Complete Majlis Cleaning Workflow in Holy Makkah',
      workflowSteps: [
        {
          number: 1,
          title: 'معاينة المجلس واختبار ثبات الألوان',
          titleEn: 'Majlis Fabric Inspection & Color Testing',
          description: 'فحص نوعية أقمشة المجلس واختبار ثبات الصبغة لضمان اختيار المنظف الأنسب والأكثر أماناً.',
          descriptionEn: 'Inspecting upholstery fibers and testing dye stability on concealed sections to ensure absolute safety.'
        },
        {
          number: 2,
          title: 'الشفط الاهتزازي للأتربة الجبلية',
          titleEn: 'Vibratory Rock Dust Extraction',
          description: 'شفط الأتربة والرمال الدقيقة من الشقوق والزوايا وثنايا المقاعد بمكنسة صناعية ذات نبض اهتزازي.',
          descriptionEn: 'Vibratory industrial vacuuming extracting compacted mountain dust from deep seams and backrest crevices.'
        },
        {
          number: 3,
          title: 'معالجة بقع القهوة والتمور والدهون',
          titleEn: 'Arabic Coffee & Date Stain Pre-Treatment',
          description: 'رش مذيبات إنزيمية متخصصة على بقع القهوة العربية والتمور وفركها بفرشاة ناعمة تحافظ على القماش.',
          descriptionEn: 'Treating gahwa, tea, and date stains with concentrated bio-enzymes, gently agitating with fine horsehair brushes.'
        },
        {
          number: 4,
          title: 'الحقن بالبخار الساخن والشامبو المعقم',
          titleEn: 'Thermal Steam Injection & Scrubbing',
          description: 'ضخ البخار الحراري الممزوج بالشامبو الطبي لتفتيت الأوساخ العميقة وتعقيم الإسفنج الداخلي.',
          descriptionEn: 'Injecting high-temperature steam and antibacterial shampoo into upholstery batting to kill germs and dissolve soil.'
        },
        {
          number: 5,
          title: 'الشفط التوربيني القوي للرطوبة والأوساخ',
          titleEn: 'High-Vacuum Moisture Recovery',
          description: 'سحب المياه المتسخة والرطوبة بالكامل بضغط شفط عالي يترك المجلس شبه جاف وجاهزاً للاستخدام سريعاً.',
          descriptionEn: 'Extracting dirty solution under high vacuum power, leaving majlis seating 90% dry and ready for rapid use.'
        },
        {
          number: 6,
          title: 'التعطير الملكي بالعود والمسك المكي',
          titleEn: 'Royal Oud & Makkah Musk Atomization',
          description: 'تمشيط وبرة المخمل وتعطير المجلس بدهن العود والمسك الفاخر والفحص النهائي مع صاحب المنزل.',
          descriptionEn: 'Grooming velvet pile uniformly and misting authentic royal oud and musk fragrance for an exquisite finish.'
        }
      ],
      featuresTitle: 'أسباب اختيار أهالي مكة لشركة مسك كلين لتنظيف المجالس',
      featuresTitleEn: 'Why Makkah Residents Choose Mesk Clean for Majlis Care',
      features: [
        {
          title: 'تجفيف سريع يتيح استخدام المجلس بعد ساعتين',
          titleEn: 'Rapid 2-Hour Quick-Drying Technology',
          description: 'ماكينات شفط قوية تسحب الرطوبة فوراً لتتمكن من استقبال ضيوفك في نفس اليوم دون تأخير.',
          descriptionEn: 'High-torque extraction pulls 90% of moisture on-site, allowing guest hosting within just 2 to 3 hours.'
        },
        {
          title: 'إزالة متخصصة لبقع القهوة العربية والعود القديمة',
          titleEn: 'Specialized Arabic Coffee & Oud Stain Removal',
          description: 'محاليل إنزيمية تقضي على أصعب بقع القهوة والزيوت دون أن تترك أي أثر أو تشوه في لون القماش.',
          descriptionEn: 'Targeted enzyme formulas eradicate set-in gahwa and perfume oils without fiber discoloration.'
        },
        {
          title: 'أمانة تامة واحترام كامل لحرمة البيوت',
          titleEn: 'Vetted, Respectful In-Home Service',
          description: 'عمالة نظامية تخضع للتحقق والتدريب على أعلى معايير اللباقة وحفظ أمانة المقتنيات.',
          descriptionEn: 'Background-checked technicians committed to domestic privacy, courtesy, and immaculate care.'
        },
        {
          title: 'ضمان الجودة والرضا التام 100%',
          titleEn: '100% Quality & Satisfaction Guarantee',
          description: 'معاينة ختامية مع العميل ومراجعة أي ملاحظة فوراً حتى نيل الرضا والاستحسان الكامل.',
          descriptionEn: 'Full client walkthrough ensuring 100% satisfaction before our service team departs.'
        }
      ],
      districtsTitle: 'نطاق تغطيتنا لخدمة تنظيف المجالس والكنب بمكة المكرمة',
      districtsTitleEn: 'Makkah Districts Covered for Majlis Cleaning',
      districtsIntro: 'تصل فرق مسك كلين المتنقلة بكامل المعدات إلى كافة أحياء ومخططات العاصمة المقدسة:',
      districtsIntroEn: 'Our mobile majlis cleaning vans service all sectors across Holy Makkah:',
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
      tipsTitle: 'إرشادات خبرائنا للعناية المستمرة بمجالس مكة المكرمة',
      tipsTitleEn: 'Expert Care Tips for Traditional Majlis in Makkah',
      tipsIntro: 'نصائح وقائية هامة للحفاظ على بهاء مجالس الضيافة وأقمشتها الفاخرة:',
      tipsIntroEn: 'Practical recommendations from Mesk Clean specialists to preserve luxury majlis fabrics:',
      tipsList: [
        {
          title: 'التعامل الفوري مع انسكابات القهوة بالضغط',
          titleEn: 'Blot Gahwa Spills Promptly Without Rubbing',
          description: 'عند انسكاب القهوة، اضغط بقطعة قماش بيضاء جافة لامتصاص السائل وتجنب فركه نهائياً.',
          descriptionEn: 'Press clean dry cotton towels firmly over fresh coffee spills to lift liquid; never rub the fabric.'
        },
        {
          title: 'شفط الغبار الجبلي أسبوعياً بالمكنسة',
          titleEn: 'Vacuum Majlis Upholstery Weekly',
          description: 'الشفط المنتظم يمنع استقرار ذرات الرمل الصخري في ثنايا القماش واحتكاكها بالخيوط.',
          descriptionEn: 'Weekly suctioning removes abrasive rock dust before it cuts into delicate velvet and chenille fibers.'
        },
        {
          title: 'تغطية المجالس الكبيرة بين المواسم',
          titleEn: 'Cover Large Majlis Halls Between Seasons',
          description: 'وضع شراشف قطنية خفيفة على أطقم الكنب في الصالات غير المستخدمة يومياً يحميها من الغبار.',
          descriptionEn: 'Breathable cotton dust covers protect formal seating halls between seasonal family gatherings.'
        },
        {
          title: 'تجنب المنظفات المنزلية الرغوية العشوائية',
          titleEn: 'Avoid Over-the-Counter Foaming Sprays',
          description: 'المنظفات التجارية غير المخصصة تترك بقايا صابونية لزجة تجذب الأتربة وتسبب هالات داكنة.',
          descriptionEn: 'Generic foaming sprays leave sticky chemical residues that attract dust and cause dark discoloration rings.'
        }
      ],
      faqsTitle: 'أسئلة شائعة حول تنظيف المجالس والكنب بمكة المكرمة',
      faqsTitleEn: 'Frequently Asked Questions - Makkah Majlis Cleaning',
      faqs: [
        {
          question: 'كم يستغرق تنظيف مجلس ضيافة كبير بمكة المكرمة؟',
          questionEn: 'How long does cleaning a large formal majlis take in Makkah?',
          answer: 'يستغرق تنظيف المجلس الكبير (مساحة 30 إلى 50 مقعداً) من ساعتين إلى ثلاث ساعات بفريق عمل مدرب يضم 3 إلى 4 فنيين.',
          answerEn: 'A grand majlis seating 30 to 50 guests takes approximately 2 to 3 hours with a dedicated crew of 3 to 4 technicians.'
        },
        {
          question: 'هل يمكن تنظيف المجلس وتجهيزه قبل مناسبة عائلية أو موسم الحج؟',
          questionEn: 'Can majlis cleaning be scheduled before a wedding or Hajj season?',
          answer: 'نعم بالتأكيد؛ نوفر مواعيد حجز مسبقة وفترات عمل مرنة تضمن تسليم المجلس جافاً ومعطراً في الوقت المحدد تماماً.',
          answerEn: 'Yes, we provide advance bookings ensuring your majlis is 100% dry, perfumed, and ready before your event.'
        },
        {
          question: 'هل تزيلون بقع القهوة العربية والتمور القديمة؟',
          questionEn: 'Can you eliminate set-in Arabic coffee and date stains?',
          answer: 'نعم، نستخدم مذيبات إنزيمية متخصصة تفتت صبغات التانين والسكريات القديمة بنسبة نجاح تفوق 95% دون الإضرار بالقماش.',
          answerEn: 'Yes, our enzymatic spotters dissolve stubborn tannins and sugars, achieving over 95% removal without fiber harm.'
        },
        {
          question: 'هل يشمل التنظيف غسيل السجاد والستائر التابعة للمجلس؟',
          questionEn: 'Can majlis carpets and curtains be cleaned in the same visit?',
          answer: 'نعم، نوفر باقات تنظيف شاملة للمجالس تضم غسيل الكنب والسجاد والستائر بالبخار بخصم مميز عند طلب الخدمة المجمعة.',
          answerEn: 'Yes, we offer bundled packages covering sofas, majlis carpets, and draperies with special multi-service discounts.'
        }
      ]
    },
    rabigh: {
      serviceId: 'sofas',
      cityId: 'rabigh',
      slug: 'sofas',
      canonicalPath: '/rabigh/services/sofas',
      metaTitle: 'شركة تنظيف كنب بالبخار برابغ | مسك كلين - إزالة الرمال الساحلية وبقع الأقمشة',
      metaTitleEn: 'Steam Sofa Cleaning Company in Rabigh | Mesk Clean - Coastal Sand & Stain Extraction',
      metaDescription: 'أفضل شركة تنظيف كنب بالبخار برابغ لغسيل أطقم الكنب والمجالس، إزالة الرمال الساحلية، تجفيف سريع لسكن الشركات وبترورابغ ومدينة الملك عبدالله الاقتصادية (KAEC).',
      metaDescriptionEn: 'Premier steam sofa cleaning in Rabigh by Mesk Clean. Heavy sand extraction, stain removal, and rapid drying for residential homes and corporate housing across Rabigh.',
      keywords: ['شركة تنظيف كنب برابغ', 'غسيل كنب برابغ', 'تنظيف مجالس برابغ', 'تنظيف كنب بالبخار رابغ', 'غسيل كنب بترورابغ'],
      heroBadge: 'خدمة معتمدة للكنب والمجالس برابغ',
      heroBadgeEn: 'Certified Upholstery Care in Rabigh',
      heroHeading: 'شركة تنظيف كنب بالبخار برابغ - إخلاء الرمال واستعادة نعومة الأقمشة',
      heroHeadingEn: 'Steam Sofa Cleaning in Rabigh - Heavy Sand Clearance & Fabric Care',
      heroSubtitle: 'نوفر لسكان رابغ وموظفي الشركات تنظيفاً عميقاً للكنب والمجالس بأحدث ماكينات الحقن والشفط التوربيني، لإزالة الرمال الساحلية العالقة والبقع المستعصية مع تجفيف سريع في ساعتين.',
      heroSubtitleEn: 'Mesk Clean provides specialized steam extraction for sofas and majlis in Rabigh, clearing abrasive coastal sand particles, eliminating tough stains, and ensuring fast 2-hour drying.',
      introParagraphs: [
        'تتعرض أطقم الكنب والمجالس في منازل وشقق محافظة رابغ لتحدي بيئي مستمر تفرضه الرياح الساحلية المفتوحة المحملة بحبيبات الرمال الناعمة؛ حيث تتسلل ذرات الرمل الشاطئية الدقيقة عبر النوافذ والأبواب لتستقر عميقاً بين وسائد الكنب وداخل حشوات الإسفنج. عند الجلوس المتكرر، تحتك هذه الحبيبات الرملية الحادة بألياف الأقمشة، مسببة تآكل الخيوط وخشونة الملمس وظهور بقع داكنة باهتة. يضاف إلى ذلك بقع الأطعمة والمشروبات اليومية التي تتفاعل مع رطوبة الساحل لتشكل بقعاً متماسكة يصعب إزالتها بالغسيل المنزلي السطحي.',
        'تقدم مسك كلين برابغ حلاً تقنياً متقدماً لتنظيف الكنب والمجالس يعتمد على خطوتين أساسيتين؛ نبدأ بالشفط الاهتزازي الميكانيكي لسحب كافة حبيبات الرمال الجافة من قعر الأنسجة والوسائد والزوايا قبل استخدام أي سوائل لتفادي تشكل الطين، ثم نتبع ذلك بحقن البخار الحراري الممزوج بشامبوهات إنزيمية لإذابة البقع الدهنية وتعقيم الإسفنج الداخلي من الجراثيم. تضمن ماكينات الشفط التوربينية سحب 90% من الرطوبة، ليكون الكنب جافاً وجاهزاً للاستخدام في غضون ساعتين فقط.',
        'نخدم كافة أحياء ومخططات رابغ السكنية (المرجانية، النزيلة، الصفا، النعيم، حي النخيل، حي المرجان)، ومجمعات إسكان موظفي بترورابغ ومحيط مدينة الملك عبدالله الاقتصادية (KAEC)، مع توفير مواعيد ميسرة في الفترات المسائية وعطلات نهاية الأسبوع لتناسب ظروف وجداول عمل المهندسين والموظفين.'
      ],
      introParagraphsEn: [
        'Sofas and living room seating across Rabigh province face continuous environmental contamination from strong coastal sea breezes driving fine beach sand. Microscopic sand grains penetrate window weatherstrips, settling deeply into upholstery batting, cushion seams, and foam padding. When sat upon, these sharp granular particles grind against textile fibers, accelerating fabric wear, creating coarse surface friction, and dulling colors. Combined with coastal humidity and beverage spills, this creates bonded grime requiring specialized extraction.',
        'Mesk Clean in Rabigh deploys a dual-phase upholstery restoration protocol. We begin with high-velocity vibratory dry suction to extract abrasive sand grains from deep within cushions prior to applying moisture, avoiding muddy paste formation. We then inject hot thermal steam blended with enzymatic shampoos to liquefy organic grease and deep-sanitize interior foam. High-vacuum pumps recover 90% of moisture, leaving seating dry within 2 hours.',
        'We service all Rabigh residential communities (Al-Merghaniya, Al-Nazilah, Al-Safa, Al-Naeem, Al-Nakheel, Al-Murjan), Petro Rabigh corporate housing, and KAEC vicinity, offering flexible evening and weekend bookings tailored to plant engineers and shift workers.'
      ],
      neighborhoodsAnalysisTitle: 'التحليل الميداني لتنظيف الكنب في قطاعات رابغ',
      neighborhoodsAnalysisTitleEn: 'District Upholstery Cleaning Dynamics Across Rabigh',
      neighborhoodsAnalysisParagraphs: [
        'في المخططات الحديثة كحي النخيل والورود والفيحاء ومحيط مدينة الملك عبدالله الاقتصادية، تتميز المساكن بوجود أطقم كنب عصرية ومودرن من أقمشة الكتان والشمواه؛ لذا نركز على سحب الرمال من المسام وتطبيق المنظفات الآمنة التي تحافظ على نعومة الملمس. أما في أحياء وسط رابغ كالمرجانية والنزيلة، ينصب التركيز على تنظيف المجالس العائلية الواسعة، وإزالة بقع الأطعمة والدهون، وتعقيم حشوات الإسفنج بمطهرات معتمدة.',
        'تصل سيارات مسك كلين المجهزة بكافة الماكينات الإيطالية إلى باب منزلك، لتنظيف مجلسك بالكامل وإعادته كما لو كان جديداً في نفس اليوم.'
      ],
      neighborhoodsAnalysisParagraphsEn: [
        'In modern residential sectors like Al-Nakheel, Al-Wurood, and the KAEC vicinity, homes feature contemporary linen, textured chenille, and nubuck sofa sets. Our teams prioritize dry sand suction from fiber pores and applying gentle conditioners that preserve soft hand-feel. In established central sectors like Al-Merghaniya and Al-Nazilah, work emphasizes large family majlis seating, deep food stain removal, and interior foam sanitization.',
        'Our mobile units arrive fully self-contained across Rabigh, restoring living room upholstery to pristine comfort in a single visit.'
      ],
      importanceTitle: 'أهمية تنظيف الكنب بالبخار في بيئة رابغ الساحلية',
      importanceTitleEn: 'Why Steam Sofa Cleaning is Essential in Rabigh',
      importanceContent: [
        'إخلاء الرمال الساحلية ومنع تآكل الأقمشة: سحب حبيبات الرمل بماكينات اهتزازية يحمي خيوط القماش من التمزق والاهتراء السريع.',
        'إذابة البقع الدهنية وبقع المشروبات: محاليل إنزيمية متطورة تفكك البقع العميقة دون ترك أي هالات أو تغير في لون القماش.',
        'التعقيم الحراري والقضاء على عث الغبار: حرارة البخار تقضي على 99.9% من الجراثيم والميكروبات المتراكمة داخل بطانة الإسفنج.',
        'توفير بيئة مريحة للمهندسين والعائلات: أثاث نظيف ومعقم برائحة منعشة يتيح الاسترخاء التام بعد نوبات العمل الطويلة.'
      ],
      importanceContentEn: [
        'Extracting Abrasive Sand to Stop Fiber Wear: Vibratory suction removes sharp sand grains, preventing premature fabric fraying.',
        'Dissolving Food & Beverage Stains: Advanced bio-enzymes break down stubborn grease and drink spills without water-ring halos.',
        'Thermal Sanitization Against Dust Mites: 100°C steam eradicates 99.9% of bacteria and allergens residing in interior padding.',
        'Providing Restful Sanctuaries for Corporate Teams: Clean, refreshed seating offers soothing relaxation after demanding work shifts.'
      ],
      equipmentTitle: 'ماكينات الشفط التوربيني والبخار المعتمدة برابغ',
      equipmentTitleEn: 'Heavy Sand Vacuum & Steam Machinery in Rabigh',
      equipmentParagraphs: [
        'نستخدم في مسك كلين برابغ ماكينات تنظيف مفروشات إيطالية متطورة ذات قدرة سحب توربينية مضاعفة مصممة لسحب الرمال الثقيلة وسوائل التنظيف دفعة واحدة، مع فوهات تنظيف دقيقة للشقوق والزوايا الضيقة.',
        'كافة مواد التنظيف والشامبوهات مطابقة لمواصفات SASO القياسية، خالية من الصودا الكاوية، وآمنة تماماً للأطفال والحيوانات الأليفة.'
      ],
      equipmentParagraphsEn: [
        'In Rabigh, Mesk Clean operates Italian upholstery extractors with reinforced dual-stage vacuum motors engineered to pull dense coastal sand and dirty moisture simultaneously, equipped with precision hand tools.',
        'All detergents comply with SASO quality standards. They are 100% free of caustic soda or harsh chemicals, ensuring total safety for children and pets.'
      ],
      workflowTitle: 'خطوات تنظيف الكنب بالبخار في رابغ بالتفصيل',
      workflowTitleEn: 'Step-by-Step Steam Sofa Cleaning Workflow in Rabigh',
      workflowSteps: [
        {
          number: 1,
          title: 'معاينة القماش وفحص الرمال العالقة',
          titleEn: 'Fabric Inspection & Sand Assessment',
          description: 'فحص نوعية القماش ودرجة تراكم الرمال واختبار ثبات الألوان لضمان المعالجة الآمنة.',
          descriptionEn: 'Assessing fabric weave, sand saturation, and testing dye stability on concealed seams.'
        },
        {
          number: 2,
          title: 'الشفط الجاف التوربيني للرمال الساحلية',
          titleEn: 'Dry Turbine Sand Extraction',
          description: 'سحب ميكانيكي لكافة حبيبات الرمل من قعر الأنسجة والوسائد والزوايا قبل استخدام أي سوائل.',
          descriptionEn: 'High-power dry vacuuming extracting all granular sand from cushions and crevices prior to wet washing.'
        },
        {
          number: 3,
          title: 'المعالجة المسبقة للبقع بمذيبات إنزيمية',
          titleEn: 'Enzymatic Stain Pre-Treatment',
          description: 'رش محاليل متخصصة على بقع الدهون والقهوة والشاي وفركها بفرشاة ناعمة تفتت البقعة.',
          descriptionEn: 'Applying targeted enzyme spotters onto coffee, grease, and tea stains, agitating gently with soft brushes.'
        },
        {
          number: 4,
          title: 'الحقن بالبخار الساخن والشامبو المعقم',
          titleEn: 'Hot Steam & Bio-Shampoo Injection',
          description: 'ضخ البخار الحراري مع الشامبو المنظف داخل ألياف القماش لتفتيت الأوساخ وتعقيم الإسفنج.',
          descriptionEn: 'Pressurizing hot steam and fabric-safe shampoo into upholstery fibers to dissolve bonded dirt and kill germs.'
        },
        {
          number: 5,
          title: 'الشفط التوربيني القوي للرطوبة والأوساخ',
          titleEn: 'High-Torque Moisture Recovery',
          description: 'سحب المياه المتسخة والرطوبة بالكامل بضغط شفط عالي يترك الكنب شبه جاف بنسبة 90%.',
          descriptionEn: 'Extracting dirty solution under high vacuum power, leaving seating 90% dry on-site for rapid use.'
        },
        {
          number: 6,
          title: 'التعطير بالأروما المنعشة والفحص النهائي',
          titleEn: 'Fresh Aromatherapy & Final Inspection',
          description: 'تعطير الكنب بمستخلصات زهرية منعشة وتمشيط الألياف والتسليم برضا العميل التام.',
          descriptionEn: 'Diffusing fresh ambient aromatherapy, grooming fabric pile, and final walkthrough with the client.'
        }
      ],
      featuresTitle: 'أسباب اختيار سكان رابغ لشركة مسك كلين لتنظيف الكنب',
      featuresTitleEn: 'Why Rabigh Residents Choose Mesk Clean for Sofa Care',
      features: [
        {
          title: 'تجفيف سريع يتيح الاستخدام خلال ساعتين فقط',
          titleEn: 'Rapid 2-Hour Quick-Drying Guarantee',
          description: 'ماكينات شفط قوية تسحب 90% من السوائل ليكون الكنب جاهزاً للاستخدام بنفس اليوم.',
          descriptionEn: 'Heavy vacuum pumps retrieve 90% of moisture, allowing comfortable seating within 2 to 3 hours.'
        },
        {
          title: 'معدات متخصصة في سحب الرمال الساحلية',
          titleEn: 'Specialized Sand Extraction Equipment',
          description: 'مكانس توربينية ذات قوة سحب هائلة تفكك الرمال العالقة في أعماق الإسفنج دون الإضرار بالقماش.',
          descriptionEn: 'High-suction turbine extractors dislodging compacted sand from interior padding safely.'
        },
        {
          title: 'مواعيد مرنة تلائم نوبات العمل بالشركات',
          titleEn: 'Flexible Shift-Worker Scheduling',
          description: 'نوفر فترات عمل مسائية وفي عطلات نهاية الأسبوع لتناسب جداول عمل المهندسين والموظفين.',
          descriptionEn: 'Evening and weekend booking slots coordinated around corporate and plant shift hours.'
        },
        {
          title: 'ضمان الرضا الكامل وأسعار منافسة ومعلنة',
          titleEn: '100% Satisfaction & Clear Upfront Pricing',
          description: 'أسعار واضحة دون أي تكاليف إضافية مع ضمان مراجعة أي ملاحظة فوراً برضا تام.',
          descriptionEn: 'Transparent upfront quotes with zero hidden extras, backed by our 100% satisfaction guarantee.'
        }
      ],
      districtsTitle: 'نطاق تغطيتنا لخدمة تنظيف الكنب في محافظة رابغ',
      districtsTitleEn: 'Rabigh Districts Covered for Sofa Cleaning',
      districtsIntro: 'تصل فرق مسك كلين المتنقلة بكامل المعدات إلى كافة أحياء ومجمعات رابغ:',
      districtsIntroEn: 'Our mobile upholstery vans service all sectors across Rabigh province:',
      districtsList: [
        'أحياء وسط رابغ: المرجانية، النزيلة، الصفا، النعيم، الصمد، الفريسنية، السوق القديم.',
        'المخططات السكنية الحديثة: حي النخيل، حي المرجان، حي الفيحاء، حي الورود، مخطط النزهة.',
        'المناطق السكنية والصناعية المجاورة: مجمعات سكن موظفي بترورابغ، ومحيط مدينة الملك عبدالله الاقتصادية (KAEC).'
      ],
      districtsListEn: [
        'Central Rabigh: Al-Merghaniya, Al-Nazilah, Al-Safa, Al-Naeem, Al-Samad, Al-Furaissaniyah, Old Souk.',
        'Modern Subdivisions: Al-Nakheel, Al-Murjan, Al-Fayhaa, Al-Wurood, Al-Nuzha residential schemes.',
        'Adjacent Industrial & Residential Zones: Petro Rabigh staff housing, KAEC vicinity, and King Abdullah Port quarters.'
      ],
      tipsTitle: 'نصائح خبرائنا لحماية كنبك من رمال رابغ الساحلية',
      tipsTitleEn: 'Maintenance Tips for Upholstery in Rabigh Wind Conditions',
      tipsIntro: 'إرشادات عملية للحفاظ على نظافة كنبك ومنع تراكم الرمال داخل الأنسجة:',
      tipsIntroEn: 'Practical guidance from Mesk Clean technicians to prevent sand buildup in sofas:',
      tipsList: [
        {
          title: 'شفط الكنب بالمكنسة أسبوعياً قبل المسح',
          titleEn: 'Vacuum Sand Thoroughly Before Wiping',
          description: 'سحب الرمال الجافة بالمكنسة الكهربائية يمنع احتكاكها بالأقمشة وتآكل الخيوط عند الجلوس.',
          descriptionEn: 'Weekly dry vacuuming removes abrasive sand before it grinds into fabric fibers under body weight.'
        },
        {
          title: 'التعامل السريع مع البقع دون فرك خشن',
          titleEn: 'Blot Spills Gently Without Heavy Scrubbing',
          description: 'عند انسكاب السوائل، اضغط بمنشفة قطنية جافة وتجنب الفرك العنيف لمنع تغلغل البقعة.',
          descriptionEn: 'Blot fresh liquid spills with a dry cotton cloth; avoid harsh scrubbing to prevent fiber damage.'
        },
        {
          title: 'إغلاق النوافذ بإحكام خلال هبوب الرياح الرملية',
          titleEn: 'Keep Windows Tightly Latched During Sand Gusts',
          description: 'التأكد من سلامة عوازل النوافذ يقلل بنسبة 80% من كمية الرمال المتسربة إلى غرف الجلوس.',
          descriptionEn: 'Ensuring window latches and gaskets seal tightly blocks 80% of blowing coastal sand drift.'
        },
        {
          title: 'استخدام أغطية واقية خفيفة قابلة للغسيل',
          titleEn: 'Use Washable Slipcovers for Daily Seating',
          description: 'وضع أغطية قماشية قابلة للغسيل على الكنب اليومي يحمي القماش الأساسي من الرمال والأوساخ.',
          descriptionEn: 'Washable slipcovers on daily-use sofas provide an easily cleanable barrier against sand infiltration.'
        }
      ],
      faqsTitle: 'أسئلة شائعة حول تنظيف الكنب في رابغ',
      faqsTitleEn: 'Frequently Asked Questions - Rabigh Sofa Cleaning',
      faqs: [
        {
          question: 'هل تخدمون مجمعات سكن موظفي بترورابغ ومدينة الملك عبدالله الاقتصادية (KAEC)؟',
          questionEn: 'Do you clean sofas in Petro Rabigh corporate housing and KAEC?',
          answer: 'نعم، نقدم خدمات تنظيف دورية وعاجلة للكنب والمجالس في سكن الموظفين والعائلات برابغ وكافة أحيائها.',
          answerEn: 'Yes, we provide routine and on-demand sofa cleaning for corporate housing in Petro Rabigh, KAEC, and all districts.'
        },
        {
          question: 'كيف تتعاملون مع الرمال الساحلية المتراكمة داخل حشوة الكنب؟',
          questionEn: 'How do you extract coastal sand embedded deep inside sofa cushions?',
          answer: 'نبدأ بشفط الرمال بالكامل عبر مكانس توربينية اهتزازية قبل استخدام البخار لتفادي تشكل الطين، ثم نغسل الأقمشة بالبخار الحراري.',
          answerEn: 'We extract all dry sand with vibratory turbine vacuums prior to steam washing, preventing muddy residue.'
        },
        {
          question: 'هل تتوفر لديكم مواعيد تنظيف كنب في عطلة نهاية الأسبوع برابغ؟',
          questionEn: 'Are sofa cleaning appointments available on weekends in Rabigh?',
          answer: 'نعم، نعمل طوال أيام الأسبوع بما في ذلك الجمعة والسبت لتلبية مواعيد العائلات والمهندسين في أوقات راحتهم.',
          answerEn: 'Yes, our teams operate 7 days a week, including Fridays and Saturdays, catering to employee schedules.'
        },
        {
          question: 'كم يستغرق تنظيف طقم الكنب بالكامل برابغ؟',
          questionEn: 'How long does cleaning a full sofa set take in Rabigh?',
          answer: 'يستغرق تنظيف طقم الكنب المتوسط (من 5 إلى 7 مقاعد) قرابة 60 إلى 90 دقيقة شاملاً إخلاء الرمال والغسيل والتعطير.',
          answerEn: 'A standard 5-to-7-seat sofa set takes approximately 60 to 90 minutes including sand evacuation, washing, and perfuming.'
        }
      ]
    }
  },

  // 6. تنظيف السجاد والموكيت (Steam Carpet & Rug Cleaning)
  'carpets': {
    jeddah: {
      serviceId: 'carpets',
      cityId: 'jeddah',
      slug: 'carpets',
      canonicalPath: '/jeddah/services/carpets',
      metaTitle: 'شركة تنظيف سجاد وموكيت بجدة | مسك كلين - غسيل بالبخار وإزالة البقع وتجفيف سريع',
      metaTitleEn: 'Carpet & Rug Cleaning Company in Jeddah | Mesk Clean - Deep Steam Washing',
      metaDescription: 'أفضل شركة تنظيف سجاد وموكيت بجدة لغسيل السجاد التركي والإيراني والموكيت في موقعه بالبخار، إزالة الروائح الكتمة وبقع القهوة وتجفيف سريع بأحياء الروضة والشاطئ والصفا.',
      metaDescriptionEn: 'Premier carpet and rug cleaning services in Jeddah by Mesk Clean. Deep on-site steam washing, odor elimination, and rapid drying across all Jeddah neighborhoods.',
      keywords: ['شركة تنظيف سجاد بجدة', 'غسيل سجاد بجدة', 'تنظيف موكيت بجدة', 'غسيل سجاد بالبخار شمال جدة', 'أفضل شركة غسيل موكيت في جدة'],
      heroBadge: 'خدمة معتمدة للسجاد والموكيت بجدة',
      heroBadgeEn: 'Certified Carpet Care in Jeddah',
      heroHeading: 'شركة تنظيف سجاد وموكيت بجدة - استعادة حيوية الألياف ونظافة فندقية في موقعك',
      heroHeadingEn: 'Carpet & Rug Cleaning in Jeddah - On-Site Hotel-Standard Washing',
      heroSubtitle: 'نوفر لسكان جدة غسيلاً احترافياً للسجاد والموكيت في مكانه دون الحاجة لنقله، بأحدث ماكينات الفرك الدوارة والبخار الحراري لإزالة أصعب البقع والروائح الكتمة مع تجفيف فائق السرعة.',
      heroSubtitleEn: 'Mesk Clean provides advanced on-site steam carpet cleaning in Jeddah, lifting embedded maritime humidity grime, eliminating stubborn stains, and ensuring fast drying.',
      introParagraphs: [
        'يعد السجاد والموكيت عنصراً جمالياً يضفي الدفء والفخامة على منازل وفنادق ومكاتب مدينة جدة. إلا أن الموقع الساحلي المحاذي للبحر الأحمر، المصحوب بنسب رطوبة مرتفعة، يجعل أنسجة السجاد بمثابة فلاتر طبيعية تحتجز ذرات الغبار الناعمة والرطوبة المحملة بالأملاح البحرية. بمرور الوقت، تتفاعل هذه الرطوبة مع الأتربة لتشكل رواسب داكنة تلتصق بقاع الوبرة وتتسبب في تآكل خيوط الصوف والحرير وظهور روائح العفن الكتمة، مما يؤثر على نقاء الهواء داخل الغرف ويثير نوبات الحساسية والربو.',
        'تقدم مسك كلين بجدة خدمة غسيل سجاد وموكيت احترافية متكاملة في موقعه بالمنزل دون الحاجة لفك الموكيت أو نقل السجاد إلى مغاسل خارجية؛ حيث نستخدم مكانس اهتزازية صناعية تسحب الأتربة والرمال العميقة المتكدسة في قاع الوبرة، يعقبها غسيل بماكينات الفرك الدوارة وحقن البخار الحراري مع شامبوهات إيطالية معتمدة تفتت بقع القهوة والزيوت وتعقم الألياف من البكتيريا وعث الغبار. تسحب ماكينات الشفط التوربينية 90% من المياه المستعملة، ليجف السجاد سريعاً ويكون جاهزاً للاستخدام في ساعات قليلة.',
        'نغطي كافة أحياء ومخططات محافظة جدة، ونصل سريعاً إلى أحياء شمال جدة (الروضة، الشاطئ، أبحر، المرجان، النعيم)، وأحياء وسط وشرق جدة (الصفا، المروة، الحمراء، السلامة، الزهراء، السامر)، لتقديم خدمة موثوقة تعيد لسجادك ألوانه الزاهية وملمسه الوثير مع ضمان رسمي على الجودة.'
      ],
      introParagraphsEn: [
        'Carpets, area rugs, and wall-to-wall موكيت are integral to the luxury and warmth of Jeddah residences, hotels, and executive offices. However, the coastal Red Sea climate, characterized by persistent elevated humidity, causes carpet fibers to act as natural filters trapping airborne dust and saline moisture. Over time, moisture reacts with settled particulates, binding them into compacted soil at the fiber roots that causes pile matting, dulls vibrant dyes, and breeds stale musty odors that irritate respiratory passages.',
        'Mesk Clean in Jeddah provides an engineered on-site carpet restoration service with zero hauling required. We deploy industrial vibratory vacuum extractors that pull heavy sand from backing meshes, followed by rotary brush agitation and thermal steam injection with Italian shampoos that dissolve coffee, oil, and traffic lane marks. Powerful moisture recovery pumps retrieve 90% of solution, allowing foot traffic within just a few hours.',
        'Our mobile units service all Jeddah sectors, arriving punctually across North Jeddah (Al-Rawdah, Al-Shati, Obhur, Al-Murjan, Al-Naeem) and Central/East sectors (Al-Safa, Al-Marwah, Al-Hamra, Al-Salamah, Al-Zahra, Al-Samer), delivering flawless pile revival with certified guarantees.'
      ],
      neighborhoodsAnalysisTitle: 'التحليل الميداني لغسيل السجاد والموكيت بأحياء جدة',
      neighborhoodsAnalysisTitleEn: 'District Carpet Cleaning Dynamics Across Jeddah',
      neighborhoodsAnalysisParagraphs: [
        'في أحياء شمال جدة كالشاطئ والروضة وأبحر، تحتوي الفلل والشقق الفاخرة على قطع سجاد يدوي تركي وإيراني وإبريسم نفيس؛ لذا نعتمد شامبوهات طبيعية معتدلة الحموضة وتقنيات تنظيف لطيفة تحمي الألوان والصبغات النباتية من التداخل أو البهتان. أما في أحياء وسط وشرق جدة كالصفا والمروة والسامر والفيصلية، ينصب التركيز على غسيل موكيت الغرف والممرات الكامل، وإزالة بقع أطعمة الأطفال، وتعقيم الألياف من الروائح الكتمة الناتجة عن رطوبة التكييف.',
        'تصل سيارات مسك كلين المجهزة بماكينات الفرك والشفط إلى موقعك بجدة، لتنظيف كافة أنواع السجاد والموكيت في مكانه بدقة متناهية.'
      ],
      neighborhoodsAnalysisParagraphsEn: [
        'In prestigious North Jeddah residential sectors like Al-Shati, Al-Rawdah, and Obhur, homes showcase delicate handmade Persian, Turkish, and pure silk rugs; our specialists apply pH-balanced biological shampoos that preserve organic dyes and prevent color bleeding. In central and eastern sectors like Al-Safa, Al-Marwah, Al-Samer, and Al-Faisaliyah, focus centers on wall-to-wall fitted carpeting, high-traffic corridors, child food spills, and AC humidity odor eradication.',
        'Mesk Clean mobile teams arrive on-site across Jeddah, providing complete carpet and rug restoration with zero disruption.'
      ],
      importanceTitle: 'أهمية غسيل السجاد بالبخار في بيئة جدة الساحلية',
      importanceTitleEn: 'Why Steam Carpet Cleaning Matters in Coastal Jeddah',
      importanceContent: [
        'استخراج الرواسب الملحية العميقة: التخلص من ذرات الرمل والملح المتكلسة في قاع السجاد والتي تعجز المكانس العادية عن سحبها.',
        'القضاء على العفن وروائح الرطوبة: البخار الحراري يقتل الفطريات والبكتيريا المتكاثرة داخل الألياف بسبب رطوبة الجو المرتفعة.',
        'حماية وبرة السجاد وألوانه الزاهية: استخدام ماكينات الفرك الدوارة يعيد انتصاب الوبرة ويستعيد بريق النقوش والزخارف الأصلية.',
        'توفير بيئة صحية خالية من مسببات الربو: إزالة مسببات الحساسية وعث الغبار يضمن هواءً نقياً وآمناً للأطفال وكبار السن.'
      ],
      importanceContentEn: [
        'Extracting Deep Saline Silt: Pulling out compacted sand and salt particulates from carpet backing that regular vacuums cannot reach.',
        'Eradicating Mildew & Humidity Odors: Thermal steam kills fungal spores and bacteria breeding within humid carpet fibers.',
        'Restoring Pile Loft & Vibrant Dyes: Rotary brush agitation lifts flattened pile and restores original design brilliance.',
        'Promoting Allergy-Safe Indoor Air: Removing microscopic dust mites and pet dander ensures a safe respiratory environment for children.'
      ],
      equipmentTitle: 'ماكينات الفرك الدوار والشفط التوربيني بجدة',
      equipmentTitleEn: 'Rotary Scrubbers & High-Moisture Recovery Equipment in Jeddah',
      equipmentParagraphs: [
        'نستخدم في مسك كلين بجدة ماكينات فرك سجاد دوارة مزودة بفرش شعيرات ناعمة تدور بسرعة معايرة لتفكيك الأوساخ دون شد أو نتف خيوط السجاد، بجانب ماكينات حقن وشفط بخار حراري ذات محركات سحب توربينية ثلاثية تسترجع 90% من مياه الغسيل فوراً.',
        'كافة محاليل التنظيف والشامبوهات مطابقة للمواصفات القياسية السعودية (SASO) ومصرحة من هيئة الغذاء والدواء، خالية من المبيضات الكاوية وتترك السجاد ناعماً ومعقماً برائحة منعشة.'
      ],
      equipmentParagraphsEn: [
        'At Mesk Clean Jeddah, we operate single-disc rotary scrubbers fitted with soft carpet brushes that agitate fibers without pulling yarn loops, paired with triple-stage vacuum extraction units that recover 90% of wash solution immediately.',
        'All cleaning shampoos comply with SASO quality standards and are SFDA-approved. They are 100% bleach-free and leave carpet pile plush, hygienic, and pleasantly deodorized.'
      ],
      workflowTitle: 'خطوات غسيل السجاد والموكيت في جدة بالتفصيل',
      workflowTitleEn: 'Step-by-Step Carpet Cleaning Workflow in Jeddah',
      workflowSteps: [
        {
          number: 1,
          title: 'معاينة نوعية السجاد واختبار الألياف',
          titleEn: 'Carpet Fiber & Dye Assessment',
          description: 'فحص نوعية النسيج (صوف، حرير، بوليستر) واختبار ثبات الألوان لاختيار الشامبو الملائم.',
          descriptionEn: 'Inspecting pile construction (wool, silk, synthetic) and testing dye fastness to choose safe shampoo.'
        },
        {
          number: 2,
          title: 'الشفط الصناعي العميق للأتربة والرمال',
          titleEn: 'Industrial Vibratory Sand Suction',
          description: 'سحب ميكانيكي للأتربة والرمال العالقة في قعر الوبرة بمكنسة صناعية ذات رأس اهتزازي.',
          descriptionEn: 'Heavy-duty vibratory vacuuming dislodging compacted sand and particulate matter from the backing mesh.'
        },
        {
          number: 3,
          title: 'المعالجة المسبقة للبقع وممرات المشي',
          titleEn: 'Traffic Lane & Spot Pre-Treatment',
          description: 'رش محاليل إنزيمية مركزة على بقع القهوة والعصير وممرات الحركة وفركها بفرشاة ناعمة.',
          descriptionEn: 'Pre-treating high-traffic lanes and drink stains with bio-enzymatic spotting agents and gentle agitation.'
        },
        {
          number: 4,
          title: 'الغسيل بالفرشاة الدوارة والبخار الحراري',
          titleEn: 'Rotary Agitation & Thermal Steam Injection',
          description: 'فرك السجاد بالماكينة الدوارة مع حقن البخار والشامبو لتفتيت الأوساخ العميقة وتعقيم النسيج.',
          descriptionEn: 'Mechanical rotary scrubbing combined with hot steam and bio-shampoo injection lifting stubborn soil.'
        },
        {
          number: 5,
          title: 'الشفط التوربيني القوي للرطوبة والأوساخ',
          titleEn: 'High-Velocity Moisture Extraction',
          description: 'سحب مياه الغسيل والرواسب بقوة شفط هائلة تترك السجاد شبه جاف بنسبة 90% في موقعه.',
          descriptionEn: 'Extracting dirty solution under high vacuum suction, leaving carpet pile 90% dry on-site.'
        },
        {
          number: 6,
          title: 'التمشيط الفندقي والتعطير بالمسك',
          titleEn: 'Pile Grooming & Musk Deodorization',
          description: 'تمشيط وبرة السجاد في اتجاه واحد لإعطائه مظهراً فندقياً أنيقاً وتعطيره بزيوت المسك الطبيعي.',
          descriptionEn: 'Grooming carpet pile uniformly for a plush hotel-standard appearance, finished with long-lasting musk misting.'
        }
      ],
      featuresTitle: 'مميزات شركة مسك كلين في غسيل سجاد جدة',
      featuresTitleEn: 'Why Choose Mesk Clean for Carpet Cleaning in Jeddah',
      features: [
        {
          title: 'غسيل فوري في الموقع دون الحاجة لنقل السجاد',
          titleEn: '100% On-Site Living Room Service',
          description: 'نوفر أحدث المعدات المتنقلة وننجز غسيل السجاد والموكيت في صالتك دون نقل أو إحداث فوضى.',
          descriptionEn: 'All washing is executed directly on-site in your living room, avoiding carpet hauling and relocation.'
        },
        {
          title: 'تجفيف سريع يتيح الاستخدام بعد ساعات قليلة',
          titleEn: 'Rapid Moisture Extraction & Fast Drying',
          description: 'ماكينات شفط قوية تسترجع 90% من السوائل ليكون السجاد جاهزاً للمشي عليه خلال ساعات قليلة.',
          descriptionEn: 'Industrial vacuum recovery leaves fibers nearly dry, allowing foot traffic within just a few hours.'
        },
        {
          title: 'مواد آمنة ومعتمدة من SASO تحمي الألوان',
          titleEn: 'SASO-Certified Color-Safe Formulations',
          description: 'شامبوهات تنظيف معتدلة خالية من المبيضات تحافظ على ألوان السجاد اليدوي والتركي والإيراني.',
          descriptionEn: 'Non-toxic, dye-safe European shampoos preserving the vibrant patterns of Persian and Turkish rugs.'
        },
        {
          title: 'ضمان الجودة والرضا التام 100%',
          titleEn: '100% Quality & Satisfaction Guarantee',
          description: 'معاينة ختامية دقيقة مع العميل لضمان الرضا المطلق عن مستوى النظافة والنعومة والتعطير.',
          descriptionEn: 'Detailed final inspection ensuring complete client satisfaction before our team departs.'
        }
      ],
      districtsTitle: 'أحياء مدينة جدة المغطاة بخدمة تنظيف السجاد',
      districtsTitleEn: 'Jeddah Neighborhoods Covered for Carpet Cleaning',
      districtsIntro: 'تصل فرق مسك كلين المتنقلة بكامل المعدات إلى كافة أحياء ومخططات محافظة جدة:',
      districtsIntroEn: 'Our mobile carpet cleaning vans service all sectors across Jeddah:',
      districtsList: [
        'أحياء شمال جدة: الروضة، الشاطئ، المرجان، البساتين، المحمدية، أبحر الشمالية، أبحر الجنوبية، النعيم، النهضة.',
        'أحياء وسط جدة: الحمراء، الزهراء، السلامة، الأندلس، مشرفة، العزيزية، الرحاب، الرويس، الفيصلية.',
        'أحياء شرق وجنوب جدة: الصفا، المروة، السامر، الحمدانية، الفلاح، المنار، السليمانية، النسيم، الروابي.'
      ],
      districtsListEn: [
        'North Jeddah: Al-Rawdah, Al-Shati, Al-Murjan, Al-Basateen, Al-Mohammediyah, North & South Obhur, Al-Naeem.',
        'Central Jeddah: Al-Hamra, Al-Zahra, Al-Salamah, Al-Andalus, Mushrefah, Al-Aziziyah, Al-Rehab, Al-Ruwais.',
        'East & South Jeddah: Al-Safa, Al-Marwah, Al-Samer, Al-Hamdaniyah, Al-Falah, Al-Manar, Al-Sulaimaniyah, Al-Naseem.'
      ],
      tipsTitle: 'نصائح خبرائنا للحفاظ على نظافة السجاد في أجواء جدة',
      tipsTitleEn: 'Expert Advice for Carpet Care in Coastal Jeddah',
      tipsIntro: 'إرشادات عملية مقدمة من خبراء مسك كلين لإطالة عمر السجاد والموكيت بجدة:',
      tipsIntroEn: 'Practical guidance from our carpet specialists tailored to coastal homes:',
      tipsList: [
        {
          title: 'الكنس باتجاه وبرة السجاد دائماً',
          titleEn: 'Always Vacuum in the Direction of Pile',
          description: 'دفع المكنسة الكهربائية في اتجاه خيوط السجاد يحمي أطراف الخيوط من التكسر والتطاير مع الوقت.',
          descriptionEn: 'Pushing vacuum heads following the natural lay of the carpet pile prevents fiber stress and fuzzing.'
        },
        {
          title: 'تدوير السجاد 180 درجة كل 6 أشهر',
          titleEn: 'Rotate Rugs 180° Every 6 Months',
          description: 'تغيير اتجاه السجاد يوزع ضغط الأقدام بالتساوي ويمنع بهتان ممرات محددة دون غيرها.',
          descriptionEn: 'Rotating rugs semi-annually balances foot traffic wear patterns and prevents uneven fading.'
        },
        {
          title: 'معالجة بقع القهوة والسوائل فوراً بالضغط',
          titleEn: 'Blot Liquid Spills Immediately Without Rubbing',
          description: 'اضغط بمنشفة قطنية جافة لامتصاص السائل وتجنب فركه لتفادي انتشار البقعة داخل ألياف الصوف.',
          descriptionEn: 'Press dry cotton towels over spills to absorb moisture without driving pigments into backing fibers.'
        },
        {
          title: 'وضع لبادات واقية تحت أرجل الأثاث الثقيل',
          titleEn: 'Use Protective Coasters Under Heavy Legs',
          description: 'استخدام القطع الواقية يمنع تشوه وبرة السجاد وهبوطها الدائم تحت وطأة الطاولات والكنب الثقيل.',
          descriptionEn: 'Felt or plastic furniture coasters distribute weight, preventing permanent pile crushing under sofas.'
        }
      ],
      faqsTitle: 'أسئلة شائعة حول تنظيف السجاد والموكيت بجدة',
      faqsTitleEn: 'Frequently Asked Questions - Jeddah Carpet Cleaning',
      faqs: [
        {
          question: 'هل يلزم نقل السجاد إلى مغاسل خارجية أم يتم التنظيف في المنزل؟',
          questionEn: 'Do rugs need to be transported to external laundries?',
          answer: 'يتم التنظيف بالكامل في موقعه داخل منزلك بأحدث ماكينات البخار والفرك الإيطالية، دون الحاجة لنقل أي سجادة.',
          answerEn: 'All washing is performed on-site inside your home using specialized mobile equipment, with zero hauling.'
        },
        {
          question: 'كم من الوقت يستغرقه السجاد ليجف بعد الغسيل بالبخار بجدة؟',
          questionEn: 'How long do carpets take to dry after steam cleaning in Jeddah?',
          answer: 'تسترجع ماكيناتنا التوربينية 90% من السوائل أثناء العمل، ويجف السجاد تماماً خلال 3 إلى 5 ساعات مع تشغيل التكييف.',
          answerEn: 'Our extraction units retrieve 90% of moisture; carpets dry completely within 3 to 5 hours with AC on.'
        },
        {
          question: 'هل المنظفات المستخدمة آمنة على السجاد اليدوي والحرير؟',
          questionEn: 'Are the cleaning shampoos safe for handmade Persian and silk rugs?',
          answer: 'نعم، نستخدم شامبوهات إيطالية معتدلة الحموضة ومصرحة خالية من المبيضات تحافظ على ألوان السجاد وأليافه الحساسة.',
          answerEn: 'Yes, we apply pH-neutral, bleach-free European shampoos that safeguard natural dyes and delicate silk fibers.'
        },
        {
          question: 'هل تزيلون بقع الشوكولاتة والزيوت القديمة من الموكيت؟',
          questionEn: 'Can you remove old chocolate and oil stains from carpets?',
          answer: 'نعم، نستخدم مذيبات إنزيمية تفتت الدهون وتفكك البقع العميقة وتزيلها بنسبة نجاح تفوق 95% دون تغيير لون الموكيت.',
          answerEn: 'Yes, our specialized enzymatic spotters dissolve stubborn grease and chocolate stains with over 95% success.'
        }
      ]
    },
    makkah: {
      serviceId: 'carpets',
      cityId: 'makkah',
      slug: 'carpets',
      canonicalPath: '/makkah/services/carpets',
      metaTitle: 'شركة تنظيف سجاد وموكيت بمكة المكرمة | مسك كلين - غسيل سجاد المساجد والمجالس بالبخار',
      metaTitleEn: 'Carpet & Mosque Rug Cleaning in Makkah | Mesk Clean - Holy City Steam Washing',
      metaDescription: 'أفضل شركة تنظيف سجاد وموكيت بمكة المكرمة لغسيل سجاد المجالس الفسيحة وسجاد المساجد بالبخار والتعقيم، إزالة الغبار الجبلي وبقع القهوة في العوالي والشوقية والزايدي.',
      metaDescriptionEn: 'Premier carpet and mosque rug cleaning in Holy Makkah by Mesk Clean. Deep steam washing for grand majlis rugs, mountain dust extraction, and sanitization across Makkah.',
      keywords: ['شركة تنظيف سجاد بمكة المكرمة', 'غسيل سجاد بمكة', 'تنظيف موكيت بمكة', 'غسيل سجاد مساجد مكة', 'غسيل سجاد العوالي'],
      heroBadge: 'خدمة معتمدة للسجاد والموكيت بمكة المكرمة',
      heroBadgeEn: 'Certified Carpet Care in Holy Makkah',
      heroHeading: 'شركة تنظيف سجاد وموكيت بمكة المكرمة - طهارة ونظافة عميقة تليق بأطهر البقاع',
      heroHeadingEn: 'Carpet & Rug Cleaning in Holy Makkah - Pure Spiritual Cleanliness',
      heroSubtitle: 'نقدم لأهالي مكة المكرمة والمساجد خدمة غسيل سجاد وموكيت فائقة الدقة بماكينات البخار والفرك الآلي، لإزالة الأتربة الجبلية المتراكمة، تعقيم الألياف، وتطييبها برائحة المسك المكي.',
      heroSubtitleEn: 'Mesk Clean delivers rigorous on-site steam carpet cleaning for Makkah expansive majlis halls and mosques, removing fine granite rock dust and restoring pure spiritual freshness.',
      introParagraphs: [
        'يحظى السجاد والموكيت بأهمية استثنائية في منازل وفلل ومساجد مكة المكرمة؛ حيث تغطي البسط الفاخرة والسجادات التركية والإيرانية مساحات صالات الاستقبال والمصليات المنزلية لاستقبال المصلين وضيوف الرحمن وأفراد العائلة في مواسم الخير والعمرة والحج. إلا أن الطبيعة الجغرافية الجبلية المحيطة بأحياء مكة، وتطاير ذرات الغبار الصخري الجرانيتي الدقيق مع حركة الرياح الحارة، يؤدي إلى استقرار كميات هائلة من الأتربة في قاع خيوط السجاد، مما يسبب انسداد مسامات النسيج وتصلب الوبرة وظهور روائح الركود عند كتمة الصيف.',
        'تقدم مسك كلين في مكة المكرمة خدمة غسيل سجاد وموكيت متطورة في موضعها دون الحاجة لنقله؛ حيث نستخدم مكانس اهتزازية صناعية ذات نبض هوائي قوي يحرر ذرات الرمل الصخري المتكلسة في أعماق السجاد ويسحبها بالكامل، ثم نتبع ذلك بغسيل آلي بماكينات الفرك الدوارة وضخ البخار الحراري بدرجة 100 مئوية مع معقمات معتمدة تقضي على 99.9% من الجراثيم ومسببات الحساسية. تسحب الماكينات 90% من مياه الغسيل فوراً لضمان سرعة الجفاف وطهارة المكان في وقت قياسي.',
        'نغطي كافة أحياء العاصمة المقدسة مثل حي العوالي، الشوقية، بطحاء قريش، الكعكية، الزايدي (الحمراء)، الرصيفة، النسيم، والشرائع، ونوفر عروضاً خاصة لغسيل سجاد المساجد وقاعات المناسبات الكبيرة، مع التزام تام بالانضباط والسرعة وأعلى معايير الطهارة والتعطير بدهن العود والمسك.'
      ],
      introParagraphsEn: [
        'Carpets and rugs hold profound cultural and religious importance in Makkah homes, villas, and mosques. Expansive Turkish and Persian rugs adorn grand reception majlis halls and private prayer rooms, welcoming worshippers, pilgrim delegations, and family gatherings during Ramadan and Hajj seasons. However, Makkah rugged mountain topography generates fine abrasive granite rock dust that settles into dense carpet pile, compacting at the base of fibers and causing pile stiffness, dullness, and trapped odors.',
        'Mesk Clean in Holy Makkah provides an engineered on-site carpet sanitization program with zero hauling required. We deploy industrial air-pulsing vibratory extractors that liberate deeply compacted rock dust from the backing mesh, followed by single-disc rotary scrubbers and 100°C thermal steam injection with certified sanitizers that eliminate 99.9% of bacteria. High-vacuum extractors recover 90% of moisture immediately, ensuring rapid drying and complete spiritual cleanliness.',
        'We service all sectors across Holy Makkah, including Al-Awali, Al-Shawqiyyah, Batha Quraish, Al-Kakiyyah, Al-Zaydi, Al-Rusaifah, Al-Naseem, and Al-Sharaye, offering specialized packages for residential halls, mosques, and event centers with authentic royal musk and oud deodorization.'
      ],
      neighborhoodsAnalysisTitle: 'خصوصية غسيل السجاد والموكيت عبر أحياء مكة المكرمة',
      neighborhoodsAnalysisTitleEn: 'District Carpet Cleaning Dynamics Across Holy Makkah',
      neighborhoodsAnalysisParagraphs: [
        'في أحياء جنوب وشرق مكة كالعوالي والشوقية وبطحاء قريش، تضم الفلل مجالس ضيافة ومصليات منزلية مفروشة بقطع سجاد كبيرة الحجم تزيد عن 6 أمتار؛ لذا نخصص ماكينات فرك دوارة ذات أقطار عريضة تغطي المساحات الشاسعة بسرعة ودقة مع حماية الألوان الأصلية. أما في أحياء وسط وغرب مكة كالرصيفة والزايدي والنزهة، ينصب التركيز على غسيل موكيت غرف النوم والصالات في الشقق السكنية، وإزالة بقع القهوة والتمور، وتعقيم الألياف من الأتربة الجبلية.',
        'تصل سيارات مسك كلين المجهزة بأحدث الماكينات والمطهرات إلى موقعك بالعاصمة المقدسة، لتنظيف وتطهير سجادك في مكانه وتسليمه بأعلى مستويات النقاء.'
      ],
      neighborhoodsAnalysisParagraphsEn: [
        'In South and East Makkah villa sectors such as Al-Awali, Al-Shawqiyyah, and Batha Quraish, residences feature grand formal majlis halls and private prayer suites fitted with oversized 6-meter+ rugs; our crews operate wide-diameter rotary scrubbers that clean expansive areas efficiently while preserving natural dyes. In central and western sectors like Al-Rusaifah, Al-Zaydi, and Al-Nuzha, priorities focus on apartment wall-to-wall carpeting, coffee and date stain removal, and deep rock dust extraction.',
        'Our mobile units arrive fully self-contained across Makkah, delivering immaculate carpet restoration and rapid drying.'
      ],
      importanceTitle: 'أهمية غسيل السجاد بالبخار في مكة المكرمة',
      importanceTitleEn: 'Why Steam Carpet Cleaning is Critical in Holy Makkah',
      importanceContent: [
        'تحرير ذرات الغبار الجبلي الصخري: سحب الأتربة الحادة بماكينات اهتزازية يمنع تقطيع خيوط الصوف وتآكل السجاد.',
        'طهارة وتعقيم السجاد لأداء الصلاة: البخار الحراري والمطهرات الطبية تقضي على 99.9% من الجراثيم وتضمن نقاءً مطلقاً.',
        'إزالة بقع القهوة العربية والتمور: محاليل إنزيمية متطورة تفكك البقع الصعبة القديمة دون ترك أي أثر أو بهتان.',
        'استعادة نعومة وبرة السجاد ورائحته الزكية: التعطير بدهن العود والمسك الطبيعي يمنح المكان سكينة وانتعاشاً فندقياً راقياً.'
      ],
      importanceContentEn: [
        'Dislodging Abrasive Granite Sand: Vibratory suction removes sharp mountain grit before it cuts through wool fibers.',
        'Spiritual Purity & Sanitization for Prayer: Thermal steam and medical biocides eradicate 99.9% of bacteria for immaculate prayer environments.',
        'Lifting Stubborn Arabic Coffee & Date Spots: Advanced enzyme spotters dissolve heavy tannins and sugars without fabric discoloration.',
        'Restoring Pile Softness & Sacred Scent: Infusing royal musk and oud aroma creates an uplifting, spiritually tranquil atmosphere.'
      ],
      equipmentTitle: 'الماكينات الألمانية والمطهرات المعتمدة بمكة المكرمة',
      equipmentTitleEn: 'Certified German Scrubbers & Sanitizers in Holy Makkah',
      equipmentParagraphs: [
        'نستخدم في مسك كلين بمكة ماكينات فرك سجاد ألمانية دوارة تعمل بأقراص تنظيف متدرجة القساوة لتنظيف أعماق الوبرة بلطف، مدعومة بماكينات حقن وشفط بخار حراري ذات محركات سحب توربينية ثلاثية تسترجع 90% من مياه الغسيل في نفس اللحظة.',
        'جميع مواد التنظيف والشامبوهات مطابقة للمواصفات القياسية السعودية (SASO) ومصرحة من هيئة الغذاء والدواء، خالية من المبيضات الضارة والروائح الكيماوية النفاذة.'
      ],
      equipmentParagraphsEn: [
        'Mesk Clean in Makkah deploys German single-disc rotary carpet machines equipped with calibrated soft-bristle brushes that deep-clean pile roots, backed by triple-motor thermal steam extractors that instantly recover 90% of wash solution.',
        'All cleaning shampoos and sanitizers comply with SASO benchmarks and are SFDA-approved. They are 100% bleach-free and leave carpets hygienic, soft, and naturally perfumed.'
      ],
      workflowTitle: 'خطوات غسيل السجاد والموكيت في مكة بالتفصيل',
      workflowTitleEn: 'Complete Carpet Cleaning Workflow in Holy Makkah',
      workflowSteps: [
        {
          number: 1,
          title: 'معاينة نوعية السجاد واختبار ثبات الألوان',
          titleEn: 'Carpet Inspection & Color Stability Check',
          description: 'فحص نوعية ألياف السجاد واختبار ثبات الصبغة لضمان اختيار المنظف الأنسب والأكثر أماناً.',
          descriptionEn: 'Assessing pile construction and testing dye fastness to choose safe, color-preserving shampoos.'
        },
        {
          number: 2,
          title: 'الشفط الاهتزازي للأتربة الجبلية',
          titleEn: 'Vibratory Mountain Dust Extraction',
          description: 'سحب الأتربة والرمال الصخرية المتكدسة في قعر السجاد بمكنسة صناعية ذات نبض اهتزازي.',
          descriptionEn: 'Industrial vibratory vacuuming dislodging compacted rock dust from deep within the backing mesh.'
        },
        {
          number: 3,
          title: 'معالجة بقع القهوة والتمور بمذيبات إنزيمية',
          titleEn: 'Coffee & Date Stain Pre-Treatment',
          description: 'رش محاليل إنزيمية مركزة على بقع القهوة العربية والتمور وفركها بفرشاة ناعمة تفتت البقعة.',
          descriptionEn: 'Treating gahwa, tea, and date stains with concentrated bio-enzymes, agitating gently with soft brushes.'
        },
        {
          number: 4,
          title: 'الغسيل بالفرشاة الدوارة والبخار الحراري',
          titleEn: 'Rotary Brush Scrubbing & Steam Injection',
          description: 'فرك السجاد بالماكينة الدوارة مع ضخ البخار الحراري والشامبو المعقم لتطهير النسيج بالكامل.',
          descriptionEn: 'Mechanical rotary scrubbing combined with hot steam and antibacterial shampoo to sanitize fibers.'
        },
        {
          number: 5,
          title: 'الشفط التوربيني القوي للرطوبة والأوساخ',
          titleEn: 'High-Vacuum Moisture Recovery',
          description: 'سحب مياه الغسيل والرواسب بقوة شفط هائلة تترك السجاد شبه جاف بنسبة 90% في موقعه.',
          descriptionEn: 'Extracting dirty solution under high vacuum suction, leaving carpet pile 90% dry on-site.'
        },
        {
          number: 6,
          title: 'التمشيط الفندقي والتعطير بالمسك والعود',
          titleEn: 'Pile Grooming & Musk Deodorization',
          description: 'تمشيط وبرة السجاد في اتجاه واحد وتعطيره بزيوت المسك والعود الملكي الفاخر.',
          descriptionEn: 'Grooming carpet pile uniformly for a hotel-standard finish, misting authentic royal musk and oud aroma.'
        }
      ],
      featuresTitle: 'أسباب اختيار أهالي مكة لشركة مسك كلين لغسيل السجاد',
      featuresTitleEn: 'Why Makkah Residents Choose Mesk Clean for Carpet Care',
      features: [
        {
          title: 'غسيل فوري في الموقع دون الحاجة لنقل السجاد',
          titleEn: '100% On-Site Living Room Service',
          description: 'نوفر أحدث المعدات المتنقلة وننجز غسيل السجاد والموكيت في صالتك دون نقل أو إحداث فوضى.',
          descriptionEn: 'All washing is executed directly on-site in your living room, avoiding carpet hauling and relocation.'
        },
        {
          title: 'تجفيف سريع يتيح الاستخدام بعد ساعات قليلة',
          titleEn: 'Rapid Moisture Extraction & Fast Drying',
          description: 'ماكينات شفط قوية تسترجع 90% من السوائل ليكون السجاد جاهزاً للمشي عليه خلال ساعات قليلة.',
          descriptionEn: 'Industrial vacuum recovery leaves fibers nearly dry, allowing foot traffic within just a few hours.'
        },
        {
          title: 'طهارة وتعقيم معتمد لأداء الصلاة',
          titleEn: 'Certified Purity & Prayer Sanitization',
          description: 'شامبوهات ومطهرات طبية تقضي على البكتيريا والجراثيم وتضمن طهارة تامة لفرش المساجد والمصليات.',
          descriptionEn: 'Hospital-grade sanitizers eliminating pathogens, ensuring immaculate purity for prayer halls.'
        },
        {
          title: 'ضمان الجودة والرضا التام 100%',
          titleEn: '100% Quality & Satisfaction Guarantee',
          description: 'معاينة ختامية دقيقة مع العميل لضمان الرضا المطلق عن مستوى النظافة والنعومة والتعطير.',
          descriptionEn: 'Detailed final inspection ensuring complete client satisfaction before our team departs.'
        }
      ],
      districtsTitle: 'أحياء مكة المكرمة المغطاة بخدمة غسيل السجاد والموكيت',
      districtsTitleEn: 'Makkah Districts Covered for Carpet Cleaning',
      districtsIntro: 'تصل فرق مسك كلين المتنقلة بكامل المعدات إلى كافة أحياء ومخططات العاصمة المقدسة:',
      districtsIntroEn: 'Our mobile carpet cleaning vans service all sectors across Holy Makkah:',
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
      tipsTitle: 'إرشادات خبرائنا للعناية المستمرة بسجاد مكة المكرمة',
      tipsTitleEn: 'Expert Advice for Carpet Care in Holy Makkah',
      tipsIntro: 'نصائح وقائية هامة للحفاظ على بهاء السجاد ونعومته وسط الطبيعة الجبلية لمكة:',
      tipsIntroEn: 'Practical guidance from our carpet specialists to maintain rugs in Makkah:',
      tipsList: [
        {
          title: 'الشفط الدوري للأتربة بالمكنسة أسبوعياً',
          titleEn: 'Vacuum Rugs Thoroughly Twice Weekly',
          description: 'الشفط المنتظم يمنع استقرار ذرات الرمل الصخري الحادة في قعر السجاد واحتكاكها بالخيوط.',
          descriptionEn: 'Regular vacuuming removes sharp mountain grit before it cuts into delicate wool and silk pile.'
        },
        {
          title: 'التعامل الفوري مع انسكابات القهوة بالضغط',
          titleEn: 'Blot Coffee Spills Instantly Without Rubbing',
          description: 'عند انسكاب القهوة، اضغط بقطعة قماش بيضاء جافة لامتصاص السائل وتجنب فركه نهائياً.',
          descriptionEn: 'Press clean dry cotton towels firmly over fresh coffee spills to lift liquid; never rub.'
        },
        {
          title: 'تدوير السجاد 180 درجة كل 6 أشهر',
          titleEn: 'Rotate Rugs 180° Every 6 Months',
          description: 'تغيير اتجاه السجاد يوزع ضغط الأقدام بالتساوي ويمنع بهتان ممرات محددة دون غيرها.',
          descriptionEn: 'Rotating rugs semi-annually balances foot traffic wear patterns and prevents uneven fading.'
        },
        {
          title: 'تجنب غسيل السجاد بالماء الغزير المنزلي',
          titleEn: 'Avoid In-Home Flooding with Garden Hoses',
          description: 'الغسيل العشوائي بالماء الغزير دون شفط قوي يسبب تعفن قاع السجاد وانبعاث روائح كتمة.',
          descriptionEn: 'Soaking rugs without high-power extraction traps water in the backing, causing rot and mildew.'
        }
      ],
      faqsTitle: 'أسئلة شائعة حول غسيل السجاد والموكيت بمكة المكرمة',
      faqsTitleEn: 'Frequently Asked Questions - Makkah Carpet Cleaning',
      faqs: [
        {
          question: 'هل تقدمون خدمات غسيل وتعقيم سجاد المساجد والمصليات بمكة؟',
          questionEn: 'Do you clean and sanitize mosque carpets and prayer rooms in Makkah?',
          answer: 'نعم، نوفر باقات متخصصة لغسيل سجاد المساجد وقاعات الصلاة بالبخار والتعقيم مع التعطير الفاخر بأسعار تفضيلية.',
          answerEn: 'Yes, we provide specialized mosque carpet cleaning packages featuring steam sanitization and musk atomization at special rates.'
        },
        {
          question: 'كم يستغرق السجاد ليجف بعد الغسيل بالبخار في مكة المكرمة؟',
          questionEn: 'How long do carpets take to dry after steam cleaning in Makkah?',
          answer: 'تسترجع ماكيناتنا 90% من السوائل أثناء العمل، ويجف السجاد تماماً خلال ساعتين إلى ثلاث ساعات مع تشغيل مكيف الغرفة.',
          answerEn: 'Our extraction units retrieve 90% of moisture; carpets dry completely within 2 to 3 hours with AC running.'
        },
        {
          question: 'هل تزيلون بقع القهوة العربية والتمور القديمة من السجاد؟',
          questionEn: 'Can you remove old Arabic coffee and date stains from rugs?',
          answer: 'نعم، نستخدم مذيبات إنزيمية تفتت الدهون وتفكك صبغات التانين القديمة وتزيلها بنسبة نجاح تفوق 95% دون الإضرار بالنسيج.',
          answerEn: 'Yes, our specialized enzymatic spotters dissolve stubborn tannins and sugars with over 95% success rate.'
        },
        {
          question: 'هل يتم غسيل السجاد داخل المنزل دون الحاجة لنقله؟',
          questionEn: 'Is carpet cleaning performed completely on-site without hauling?',
          answer: 'نعم، يتم التنظيف بالكامل في موقعه داخل منزلك أو مسكنك بأحدث الماكينات المتنقلة دون أي فوضى أو بلل للأرضيات.',
          answerEn: 'Yes, all cleaning is executed on-site inside your living room or hall using self-contained mobile machinery.'
        }
      ]
    },
    rabigh: {
      serviceId: 'carpets',
      cityId: 'rabigh',
      slug: 'carpets',
      canonicalPath: '/rabigh/services/carpets',
      metaTitle: 'شركة تنظيف سجاد وموكيت برابغ | مسك كلين - إخلاء الرمال الساحلية وغسيل بالبخار',
      metaTitleEn: 'Carpet & Rug Cleaning Company in Rabigh | Mesk Clean - Coastal Sand & Steam Washing',
      metaDescription: 'أفضل شركة تنظيف سجاد وموكيت برابغ لغسيل السجاد والموكيت في موقعه بالبخار، إخلاء الرمال الساحلية وتجفيف سريع لسكن الشركات وبترورابغ ومدينة الملك عبدالله الاقتصادية (KAEC).',
      metaDescriptionEn: 'Premier carpet and rug cleaning services in Rabigh by Mesk Clean. Heavy-duty sand extraction, steam washing, and fast drying for homes and corporate housing in Rabigh.',
      keywords: ['شركة تنظيف سجاد برابغ', 'غسيل سجاد برابغ', 'تنظيف موكيت برابغ', 'غسيل موكيت بترورابغ', 'غسيل سجاد كيك'],
      heroBadge: 'خدمة معتمدة للسجاد والموكيت برابغ',
      heroBadgeEn: 'Certified Carpet Care in Rabigh',
      heroHeading: 'شركة تنظيف سجاد وموكيت برابغ - إخلاء الرمال الساحلية ونظافة عميقة في موقعه',
      heroHeadingEn: 'Carpet & Rug Cleaning in Rabigh - Heavy Sand Clearance & Deep Steam Care',
      heroSubtitle: 'نوفر لسكان رابغ وموظفي الشركات خدمة غسيل سجاد وموكيت متطورة في مكانه دون الحاجة لنقله، بأحدث ماكينات سحب الرمال التوربينية والبخار الحراري لإعادة النعومة للألياف وتجفيف فائق السرعة.',
      heroSubtitleEn: 'Mesk Clean delivers specialized on-site steam carpet cleaning in Rabigh, clearing abrasive coastal sand particles from backing fibers, lifting stubborn stains, and ensuring fast drying.',
      introParagraphs: [
        'تتعرض قطع السجاد والموكيت في منازل ومكاتب وسكن الشركات بمحافظة رابغ لتحديات فريدة ناتجة عن حركة الرياح البحرية المحملة بحبيبات الرمال الناعمة؛ حيث تتسرب ذرات الرمل الشاطئية المتطايرة عبر النوافذ والأبواب لتتغلغل عميقاً في قعر وبرة السجاد وتلتصق بنسيج القاعدة الخلفية (الشبكة الإسمنتية للسجاد). ومع المشي اليومي، تحتك هذه الحبيبات الرملية الخشنة بالألياف، مسببة تآكل الخيوط وتطاير الوبرة وفقدان السجاد لمرونته ونعومته الأصلية، إضافة إلى امتصاص السجاد للروائح الكتمة بفعل الرطوبة الساحلية.',
        'تقدم مسك كلين برابغ حلاً هندسياً شاملاً لغسيل السجاد والموكيت في موقعه بالمنزل دون الحاجة لرفعه أو نقله؛ حيث نبدأ بعملية سحب ميكانيكي اهتزازي بالمكنسة الصناعية لإخلاء كافة حبيبات الرمل الجافة المتكدسة في قاع الوبرة قبل تطبيق أي ماء، تفادياً لتشكل طبقة طينية لزجة يصعب إخراجها. يعقب ذلك غسيل آلي بماكينات الفرك الدوارة وضخ البخار الحراري الممزوج بشامبوهات أوروبية تذيب بقع الزيوت والأتربة الساحلية، ثم تسحب ماكينات الشفط التوربينية 90% من السوائل ليجف السجاد سريعاً.',
        'نخدم كافة أحياء ومخططات رابغ السكنية (المرجانية، النزيلة، الصفا، النعيم، حي النخيل، حي المرجان)، ومجمعات إسكان موظفي بترورابغ ومحيط مدينة الملك عبدالله الاقتصادية (KAEC)، مع توفير مواعيد ميسرة في الفترات المسائية وعطلات نهاية الأسبوع لتناسب جداول عمل المهندسين والموظفين.'
      ],
      introParagraphsEn: [
        'Carpets and wall-to-wall fitted carpeting across Rabigh residences, offices, and corporate compounds face constant exposure to fine windblown coastal sand. Microscopic sand grains penetrate window weatherstrips, settling deeply into carpet backing grids and fiber roots. With daily foot traffic, these abrasive granular particles act like sandpaper against textile fibers, causing pile shearing, texture stiffness, and fiber thinning. Combined with coastal humidity, this results in bonded soil layers and persistent musty odors.',
        'Mesk Clean in Rabigh provides an engineered on-site carpet restoration protocol with zero hauling required. We initiate work with dual-action vibratory vacuum suction that extracts dry abrasive sand from the carpet backing before applying any moisture, preventing muddy slurry formation. We then operate rotary scrubbing extractors injecting hot thermal steam and European bio-shampoos that dissolve oily traffic grime, followed by high-vacuum extraction recovering 90% of moisture for rapid drying.',
        'We service all Rabigh residential communities (Al-Merghaniya, Al-Nazilah, Al-Safa, Al-Naeem, Al-Nakheel, Al-Murjan), Petro Rabigh corporate quarters, and KAEC developments, offering flexible evening and weekend bookings tailored to plant engineers and shift workers.'
      ],
      neighborhoodsAnalysisTitle: 'التحليل الميداني لغسيل السجاد والموكيت بقطاعات رابغ',
      neighborhoodsAnalysisTitleEn: 'District Carpet Cleaning Dynamics Across Rabigh',
      neighborhoodsAnalysisParagraphs: [
        'في المخططات الحديثة كحي النخيل والورود والفيحاء ومحيط مدينة الملك عبدالله الاقتصادية، تحتوي المساكن والشقق التنفيذية على موكيت مفروش بالكامل وقطع سجاد مودرن؛ لذا نركز على سحب الرمال من المسام واستخدام أجهزة التجفيف الهوائي السريع. أما في أحياء وسط رابغ كالمرجانية والنزيلة، ينصب التركيز على غسيل سجاد المجالس العائلية الكبيرة، وإزالة البقع الدهنية، وتعقيم الألياف من روائح الرطوبة بمطهرات معتمدة.',
        'تصل سيارات مسك كلين المجهزة بماكينات الفرك والشفط إلى موقعك برابغ، لتنظيف كافة أنواع السجاد والموكيت في مكانه بدقة متناهية.'
      ],
      neighborhoodsAnalysisParagraphsEn: [
        'In modern residential sectors like Al-Nakheel, Al-Wurood, and the KAEC vicinity, executive apartments and villas feature wall-to-wall fitted carpeting and contemporary area rugs. Our teams prioritize dry sand suction from fiber pores and rapid air-blower drying. In established central sectors like Al-Merghaniya and Al-Nazilah, work emphasizes large family majlis rugs, heavy foot-traffic stain removal, and antibacterial fiber sanitization.',
        'Our mobile units arrive fully self-contained across Rabigh, restoring carpets and rugs on-site with zero household disruption.'
      ],
      importanceTitle: 'أهمية غسيل السجاد بالبخار في محافظة رابغ',
      importanceTitleEn: 'Why Steam Carpet Cleaning is Essential in Rabigh',
      importanceContent: [
        'إخلاء الرمال الساحلية وحماية الألياف من التمزق: سحب الرمل بالماكينات الاهتزازية يمنع احتكاك ذرات الرمل وتآكل خيوط السجاد.',
        'التخلص من البقع الدهنية والغبار الصناعي: محاليل إنزيمية متطورة تفتت الرواسب المتماسكة دون الإضرار بنعومة ومرونة السجاد.',
        'التعقيم الحراري والقضاء على البكتيريا: البخار الساخن يقتل 99.9% من الجراثيم ومسببات الحساسية العالقة داخل وبرة السجاد.',
        'توفير بيئة نظيفة ومريحة للعائلات والمهندسين: سجاد نظيف ومعقم برائحة منعشة يتيح الاستمتاع بالمنزل بعد نوبات العمل الطويلة.'
      ],
      importanceContentEn: [
        'Extracting Abrasive Sand to Prevent Fiber Shearing: Vibratory suction removes sharp sand grains, preventing premature carpet thinning.',
        'Dissolving Oily Industrial & Dust Residues: Advanced bio-enzymes break down stubborn atmospheric grime without fiber damage.',
        'Thermal Sanitization Against Dust Mites: 100°C steam eradicates 99.9% of bacteria and allergens residing in carpet pile.',
        'Providing Restful Sanctuaries for Corporate Teams: Clean, refreshed carpeting offers soothing relaxation after demanding work shifts.'
      ],
      equipmentTitle: 'معدات سحب الرمال والفرك الدوار برابغ',
      equipmentTitleEn: 'Heavy Sand Vacuum & Rotary Scrubber Machinery in Rabigh',
      equipmentParagraphs: [
        'نستخدم في مسك كلين برابغ مكانس صناعية ذات قدرة سحب توربينية مضاعفة مصممة لسحب الرمال الثقيلة من عمق نسيج السجاد، بجانب ماكينات فرك دوارة ذات أقراص ألياف معايرة تنظف الوبرة دون نتف الخيوط.',
        'كافة مواد التنظيف والشامبوهات مطابقة لمواصفات SASO القياسية، خالية من الصودا الكاوية، وآمنة تماماً للأطفال والحيوانات الأليفة.'
      ],
      equipmentParagraphsEn: [
        'In Rabigh, Mesk Clean operates single-disc rotary scrubbers equipped with soft-bristle brushes that deep-clean pile roots, backed by triple-motor thermal steam extractors that instantly recover 90% of wash solution.',
        'All cleaning shampoos comply with SASO quality standards. They are 100% bleach-free and leave carpet pile plush, hygienic, and pleasantly deodorized.'
      ],
      workflowTitle: 'خطوات غسيل السجاد والموكيت في رابغ بالتفصيل',
      workflowTitleEn: 'Step-by-Step Carpet Cleaning Workflow in Rabigh',
      workflowSteps: [
        {
          number: 1,
          title: 'معاينة خامة السجاد ودرجة تشبع الرمال',
          titleEn: 'Carpet Inspection & Sand Saturation Check',
          description: 'فحص نوعية النسيج ودرجة تراكم الرمال واختبار ثبات الألوان لضمان المعالجة الآمنة.',
          descriptionEn: 'Assessing pile construction, sand density, and testing dye fastness to choose safe shampoo.'
        },
        {
          number: 2,
          title: 'الشفط الجاف التوربيني للرمال الساحلية',
          titleEn: 'Dry Turbine Sand Extraction',
          description: 'سحب ميكانيكي لكافة حبيبات الرمل من قعر النسيج بمكنسة صناعية اهتزازية قبل استخدام الماء.',
          descriptionEn: 'High-power dry vacuuming extracting all granular sand from backing fibers prior to wet washing.'
        },
        {
          number: 3,
          title: 'المعالجة المسبقة للبقع بمذيبات إنزيمية',
          titleEn: 'Enzymatic Spot Pre-Treatment',
          description: 'رش محاليل متخصصة على بقع الدهون والقهوة والشاي وفركها بفرشاة ناعمة تفتت البقعة.',
          descriptionEn: 'Applying targeted enzyme spotters onto coffee, grease, and tea stains, agitating gently with soft brushes.'
        },
        {
          number: 4,
          title: 'الغسيل بالفرشاة الدوارة والبخار الحراري',
          titleEn: 'Rotary Brush Scrubbing & Steam Injection',
          description: 'فرك السجاد بالماكينة الدوارة مع ضخ البخار الحراري والشامبو المعقم لتطهير النسيج بالكامل.',
          descriptionEn: 'Mechanical rotary scrubbing combined with hot steam and bio-shampoo injection lifting stubborn soil.'
        },
        {
          number: 5,
          title: 'الشفط التوربيني القوي للرطوبة والأوساخ',
          titleEn: 'High-Torque Moisture Recovery',
          description: 'سحب مياه الغسيل والرواسب بقوة شفط هائلة تترك السجاد شبه جاف بنسبة 90% في موقعه.',
          descriptionEn: 'Extracting dirty solution under high vacuum suction, leaving carpet pile 90% dry on-site.'
        },
        {
          number: 6,
          title: 'التمشيط الفندقي والتعطير المنعش',
          titleEn: 'Pile Grooming & Fresh Deodorization',
          description: 'تمشيط وبرة السجاد في اتجاه واحد وتعطيره بمستخلصات زهرية منعشة والتسليم برضا العميل.',
          descriptionEn: 'Grooming carpet pile uniformly for a hotel-standard finish, misting fresh ambient aromatherapy.'
        }
      ],
      featuresTitle: 'أسباب اختيار سكان رابغ لشركة مسك كلين لغسيل السجاد',
      featuresTitleEn: 'Why Rabigh Residents Choose Mesk Clean for Carpet Care',
      features: [
        {
          title: 'غسيل فوري في الموقع دون الحاجة لنقل السجاد',
          titleEn: '100% On-Site Living Room Service',
          description: 'نوفر أحدث المعدات المتنقلة وننجز غسيل السجاد والموكيت في صالتك دون نقل أو إحداث فوضى.',
          descriptionEn: 'All washing is executed directly on-site in your living room, avoiding carpet hauling and relocation.'
        },
        {
          title: 'تجفيف سريع يتيح الاستخدام بعد ساعات قليلة',
          titleEn: 'Rapid Moisture Extraction & Fast Drying',
          description: 'ماكينات شفط قوية تسترجع 90% من السوائل ليكون السجاد جاهزاً للمشي عليه خلال ساعات قليلة.',
          descriptionEn: 'Industrial vacuum recovery leaves fibers nearly dry, allowing foot traffic within just a few hours.'
        },
        {
          title: 'معدات متخصصة في سحب الرمال الساحلية',
          titleEn: 'Sand-Adapted Extraction Equipment',
          description: 'مكانس توربينية ذات قوة سحب هائلة تفكك الرمال العالقة في قاع الوبرة دون الإضرار بالنسيج.',
          descriptionEn: 'High-suction turbine extractors dislodging compacted sand from carpet backing safely.'
        },
        {
          title: 'ضمان الجودة والرضا التام 100%',
          titleEn: '100% Quality & Satisfaction Guarantee',
          description: 'معاينة ختامية دقيقة مع العميل لضمان الرضا المطلق عن مستوى النظافة والنعومة والتعطير.',
          descriptionEn: 'Detailed final inspection ensuring complete client satisfaction before our team departs.'
        }
      ],
      districtsTitle: 'أحياء محافظة رابغ المغطاة بخدمة تنظيف السجاد والموكيت',
      districtsTitleEn: 'Rabigh Districts Covered for Carpet Cleaning',
      districtsIntro: 'تصل فرق مسك كلين المتنقلة بكامل المعدات إلى كافة أحياء ومجمعات رابغ:',
      districtsIntroEn: 'Our mobile carpet cleaning vans service all sectors across Rabigh province:',
      districtsList: [
        'أحياء وسط رابغ: المرجانية، النزيلة، الصفا، النعيم، الصمد، الفريسنية، السوق القديم.',
        'المخططات السكنية الحديثة: حي النخيل، حي المرجان، حي الفيحاء، حي الورود، مخطط النزهة.',
        'المناطق السكنية والصناعية المجاورة: مجمعات سكن موظفي بترورابغ، ومحيط مدينة الملك عبدالله الاقتصادية (KAEC).'
      ],
      districtsListEn: [
        'Central Rabigh: Al-Merghaniya, Al-Nazilah, Al-Safa, Al-Naeem, Al-Samad, Al-Furaissaniyah, Old Souk.',
        'Modern Subdivisions: Al-Nakheel, Al-Murjan, Al-Fayhaa, Al-Wurood, Al-Nuzha residential schemes.',
        'Adjacent Industrial & Residential Zones: Petro Rabigh staff housing, KAEC vicinity, and King Abdullah Port quarters.'
      ],
      tipsTitle: 'نصائح خبرائنا لحماية سجادك من رمال رابغ الساحلية',
      tipsTitleEn: 'Maintenance Tips for Carpets in Rabigh Wind Conditions',
      tipsIntro: 'إرشادات عملية للحفاظ على نظافة سجادك ومنع تراكم الرمال داخل الأنسجة:',
      tipsIntroEn: 'Practical guidance from Mesk Clean technicians to prevent sand buildup in carpets:',
      tipsList: [
        {
          title: 'شفط السجاد بالمكنسة أسبوعياً قبل المسح',
          titleEn: 'Vacuum Sand Thoroughly Before Wiping',
          description: 'سحب الرمال الجافة بالمكنسة الكهربائية يمنع احتكاكها بالأقمشة وتآكل الخيوط عند المشي.',
          descriptionEn: 'Weekly dry vacuuming removes abrasive sand before it grinds into carpet pile under foot pressure.'
        },
        {
          title: 'التعامل السريع مع البقع دون فرك خشن',
          titleEn: 'Blot Spills Gently Without Heavy Scrubbing',
          description: 'عند انسكاب السوائل، اضغط بمنشفة قطنية جافة وتجنب الفرك العنيف لمنع تغلغل البقعة.',
          descriptionEn: 'Blot fresh liquid spills with a dry cotton cloth; avoid harsh scrubbing to prevent fiber damage.'
        },
        {
          title: 'تدوير السجاد 180 درجة كل 6 أشهر',
          titleEn: 'Rotate Rugs 180° Every 6 Months',
          description: 'تغيير اتجاه السجاد يوزع ضغط الأقدام بالتساوي ويمنع بهتان ممرات محددة دون غيرها.',
          descriptionEn: 'Rotating rugs semi-annually balances foot traffic wear patterns and prevents uneven fading.'
        },
        {
          title: 'وضع سجادات حماية عند مداخل البيت',
          titleEn: 'Place Heavy-Duty Walk-Off Mats at Doors',
          description: 'سجادات المداخل تحجز ما يصل إلى 80% من الرمال الساحلية العالقة بالأحذية قبل وصولها للصالات.',
          descriptionEn: 'Entry walk-off mats trap up to 80% of windblown sand from shoes before reaching interior rugs.'
        }
      ],
      faqsTitle: 'أسئلة شائعة حول غسيل السجاد والموكيت في رابغ',
      faqsTitleEn: 'Frequently Asked Questions - Rabigh Carpet Cleaning',
      faqs: [
        {
          question: 'هل تخدمون مجمعات سكن موظفي بترورابغ ومدينة الملك عبدالله الاقتصادية (KAEC)؟',
          questionEn: 'Do you clean carpets in Petro Rabigh corporate housing and KAEC?',
          answer: 'نعم، نقدم خدمات تنظيف دورية وعاجلة للسجاد والموكيت في سكن الموظفين والعائلات برابغ وكافة أحيائها.',
          answerEn: 'Yes, we provide routine and on-demand carpet cleaning for corporate housing in Petro Rabigh, KAEC, and all districts.'
        },
        {
          question: 'كيف تتعاملون مع الرمال الساحلية المتراكمة في قاع الموكيت؟',
          questionEn: 'How do you extract coastal sand embedded deep in carpet backing?',
          answer: 'نبدأ بشفط الرمال بالكامل عبر مكانس توربينية اهتزازية قبل استخدام البخار لتفادي تشكل الطين، ثم نغسل الألياف بالبخار الحراري.',
          answerEn: 'We extract all dry sand with vibratory turbine vacuums prior to steam washing, preventing muddy slurry.'
        },
        {
          question: 'هل تتوفر لديكم مواعيد تنظيف سجاد في عطلة نهاية الأسبوع برابغ؟',
          questionEn: 'Are carpet cleaning appointments available on weekends in Rabigh?',
          answer: 'نعم، نعمل طوال أيام الأسبوع بما في ذلك الجمعة والسبت لتلبية مواعيد العائلات والمهندسين في أوقات راحتهم.',
          answerEn: 'Yes, our teams operate 7 days a week, including Fridays and Saturdays, catering to employee schedules.'
        },
        {
          question: 'كم يستغرق تنظيف موكيت الغرفة الواحدة برابغ؟',
          questionEn: 'How long does cleaning a single carpeted room take in Rabigh?',
          answer: 'يستغرق تنظيف موكيت الغرفة المتوسطة قرابة 30 إلى 45 دقيقة شاملاً إخلاء الرمال والغسيل والتعطير.',
          answerEn: 'A standard carpeted bedroom takes approximately 30 to 45 minutes including sand suction, washing, and perfuming.'
        }
      ]
    }
  }
};
