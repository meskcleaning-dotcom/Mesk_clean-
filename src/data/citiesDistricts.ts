export interface CityData {
  id: 'jeddah' | 'makkah' | 'rabigh' | 'khulais';
  slug: string;
  nameAr: string;
  nameEn: string;
  metaTitleAr: string;
  metaTitleEn: string;
  metaDescAr: string;
  metaDescEn: string;
  heroHeadlineAr: string;
  heroHeadlineEn: string;
  heroSubheadlineAr: string;
  heroSubheadlineEn: string;
  heroDescAr: string;
  heroDescEn: string;
  taglineAr: string;
  taglineEn: string;
  districtsAr: string[];
  districtsEn: string[];
  mapEmbedUrl: string;
  directMapsUrl: string;
  geo: {
    latitude: number;
    longitude: number;
  };
  addressLocalityAr: string;
  addressLocalityEn: string;
}

export const CITIES_DATA: Record<string, CityData> = {
  jeddah: {
    id: 'jeddah',
    slug: 'jeddah',
    nameAr: 'جدة',
    nameEn: 'Jeddah',
    metaTitleAr: 'شركة تنظيف بجدة | 0547161147 | مسك كلين',
    metaTitleEn: 'Cleaning Services in Jeddah | +966547161147 | Mesk Clean',
    metaDescAr: 'مسك كلين: أفضل شركة تنظيف بجدة لخدمات تنظيف المنازل والفلل والمكاتب، عزل الخزانات، غسيل المكيفات، مكافحة القوارض وتركيب شبك وطارد الحمام بكافة أحياء جدة على مدار 24/7. اتصل الآن: 0547161147',
    metaDescEn: 'Mesk Clean: Premier cleaning company in Jeddah for homes, villas, offices, water tank insulation, AC wash, rodent control, and bird spikes installation 24/7.',
    heroHeadlineAr: 'شركة تنظيف بجدة',
    heroHeadlineEn: 'Cleaning Company in Jeddah',
    heroSubheadlineAr: 'خدمة احترافية... لبيئة أنظف في كافة أحياء عروس البحر الأحمر',
    heroSubheadlineEn: 'Professional Service... For a Cleaner Environment in Jeddah',
    heroDescAr: 'نقدم أفضل خدمات التنظيف المنزلي، تنظيف الخزانات، عزل الخزانات، غسيل المكيفات، غسيل الكنب ومكافحة القوارض في كافة أحياء شمال ووسط وجنوب جدة بأحدث المعدات وأفضل المواد.',
    heroDescEn: 'We provide premier home cleaning, water tank cleaning & insulation, AC wash, steam sofa cleaning, and rodent control across all Jeddah districts with top equipment.',
    taglineAr: 'تغطية فورية وسريعة لجميع أحياء شمال ووسط وجنوب جدة.',
    taglineEn: 'Immediate and swift service across North, Central, and South Jeddah.',
    addressLocalityAr: 'جدة',
    addressLocalityEn: 'Jeddah',
    geo: {
      latitude: 21.543333,
      longitude: 39.172778
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118804.81986427383!2d39.10286829726563!3d21.543333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1716000000000!5m2!1sen!2ssa',
    directMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mesk+Clean+Jeddah+Saudi+Arabia',
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
    districtsEn: [
      'Al Rawdah',
      'Al Zahra',
      'Al Shati',
      'Al Naeem',
      'Al Nahdah',
      'Al Mohammediah',
      'North Obhur',
      'South Obhur',
      'Al Murjan',
      'Al Basateen',
      'Al Salamah',
      'Al Safa',
      'Al Marwah',
      'Al Faisaliyah',
      'Al Hamra',
      'Al Andalus',
      'Mushrefah',
      'Al Aziziyah',
      'Al Rehab',
      'Al Naseem',
      'Al Sulaimaniyah',
      'Al Faiha',
      'Al Rawabi',
      'Al Samer',
      'Al Ajaweed',
      'Al Sanabel',
      'Al Worood',
      'Al Khozama',
      'Al Baghdadiyah',
      'Al Hamdaniyah',
      'Taiba',
      'Al Salhiyah',
      'Al Rayyan',
      'Al Manar',
      'Bereiman',
      'Al Fadeelah',
      'Other Jeddah District'
    ]
  },
  makkah: {
    id: 'makkah',
    slug: 'makkah',
    nameAr: 'مكة المكرمة',
    nameEn: 'Makkah',
    metaTitleAr: 'شركة تنظيف بمكة المكرمة | 0547161147 | مسك كلين',
    metaTitleEn: 'Cleaning Services in Makkah | +966547161147 | Mesk Clean',
    metaDescAr: 'مسك كلين: أفضل شركة تنظيف بمكة المكرمة لخدمات تنظيف المنازل والفلل، عزل وتعقيم الخزانات، مكافحة القوارض والزواحف، وتركيب شبك وطارد الحمام بكافة أحياء مكة 24/7. اتصل الآن: 0547161147',
    metaDescEn: 'Mesk Clean: Premier cleaning company in Makkah for homes, villas, water tank insulation & cleaning, AC wash, pest control, and bird spikes installation 24/7.',
    heroHeadlineAr: 'شركة تنظيف بمكة المكرمة',
    heroHeadlineEn: 'Cleaning Company in Makkah',
    heroSubheadlineAr: 'خدمة احترافية... لبيئة أنظف في العاصمة المقدسة وضواحيها',
    heroSubheadlineEn: 'Professional Service... For a Cleaner Environment in Holy Makkah',
    heroDescAr: 'نقدم خدمات متكاملة لتنظيف الفلل، الشقق، العمائر، تنظيف وعزل الخزانات، غسيل المكيفات، مكافحة القوارض وتركيب طارد الحمام في كافة أحياء مكة المكرمة على مدار 24 ساعة.',
    heroDescEn: 'Complete cleaning solutions for villas, apartments, residential buildings, water tank cleaning & insulation, AC wash, and rodent control in all Makkah districts 24/7.',
    taglineAr: 'خدمات تنظيف الفلل والشقق والخزانات ومكافحة القوارض بكافة أحياء مكة المكرمة.',
    taglineEn: 'Comprehensive villa, apartment, tank cleaning & pest control across Makkah.',
    addressLocalityAr: 'مكة المكرمة',
    addressLocalityEn: 'Makkah',
    geo: {
      latitude: 21.4225105,
      longitude: 39.7562111
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118878.07722650742!2d39.7562111!3d21.4225105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21b4ced818775%3A0x98ab2469cf70c9ce!2sMakkah%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1716000000001!5m2!1sen!2ssa',
    directMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mesk+Clean+Makkah+Saudi+Arabia',
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
    districtsEn: [
      'Al Aziziyah',
      'Al Shawqiyyah',
      'Al Awali',
      'Batha Quraish',
      'Al Nawwariyyah',
      'Al Sharaea',
      'Al Khalidiyyah',
      'Al Taneem',
      'Al Kakiyyah',
      'Al Zaydi (Al Hamra)',
      'Al Rusaifah',
      'Al Utaybiyyah',
      'Kuday',
      'Jarwal',
      'Al Hijrah',
      'Al Iskan',
      'Al Umrah',
      'Al Buhayrat',
      'Other Makkah District'
    ]
  },
  rabigh: {
    id: 'rabigh',
    slug: 'rabigh',
    nameAr: 'رابغ',
    nameEn: 'Rabigh',
    metaTitleAr: 'شركة تنظيف برابغ | 0547161147 | مسك كلين',
    metaTitleEn: 'Cleaning Services in Rabigh | +966547161147 | Mesk Clean',
    metaDescAr: 'مسك كلين: أفضل شركة تنظيف برابغ لخدمات تنظيف وتعقيم الفلل والمنشآت والمكاتب، عزل الخزانات، مكافحة الآفات والقوارض، وتركيب شبك وطارد الحمام برابغ والمراكز المجاورة 24/7. اتصل الآن: 0547161147',
    metaDescEn: 'Mesk Clean: Premier cleaning company in Rabigh for residential & commercial facilities, water tank insulation, AC wash, rodent control, and bird spikes installation 24/7.',
    heroHeadlineAr: 'شركة تنظيف برابغ',
    heroHeadlineEn: 'Cleaning Company in Rabigh',
    heroSubheadlineAr: 'خدمة احترافية... لبيئة أنظف في محافظة رابغ والمراكز المجاورة',
    heroSubheadlineEn: 'Professional Service... For a Cleaner Environment in Rabigh',
    heroDescAr: 'فرق ميدانية متخصصة لتنظيف المنشآت والفلل وعزل الخزانات الأرضية والعلوية وغسيل المكيفات ومكافحة الحشرات والقوارض في رابغ ومستورة وبترورابغ بأعلى معايير الجودة.',
    heroDescEn: 'Mobile specialist crews for facility and villa cleaning, tank insulation, AC wash, and pest/rodent control in Rabigh, Masturah, and Petro Rabigh area.',
    taglineAr: 'فرق ميدانية متخصصة لتنظيف المنشآت والفلل وعزل الخزانات ومكافحة الآفات برابغ والمراكز المجاورة.',
    taglineEn: 'Specialized mobile crews for villa cleaning, tank insulation, and pest control in Rabigh.',
    addressLocalityAr: 'رابغ',
    addressLocalityEn: 'Rabigh',
    geo: {
      latitude: 22.7986,
      longitude: 39.0145
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118182.26123456789!2d39.0145!3d22.7986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c0e18146fb7a7b%3A0x6fb87e226c6d07d6!2sRabigh%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1716000000002!5m2!1sen!2ssa',
    directMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mesk+Clean+Rabigh+Saudi+Arabia',
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
    districtsEn: [
      'Al Murjan',
      'Al Safa',
      'Al Samad',
      'Al Nuzha',
      'Al Qariqrah',
      'Al Maythab',
      'Al Jood',
      'Al Naeem',
      'Al Furaidiyah',
      'Industrial Area (Petro Rabigh)',
      'Saabar',
      'Masturah',
      'Kulayyah',
      'Other Rabigh District'
    ]
  },
  khulais: {
    id: 'khulais',
    slug: 'khulais',
    nameAr: 'خليص',
    nameEn: 'Khulais',
    metaTitleAr: 'شركة تنظيف بخليص | 0547161147 | مسك كلين',
    metaTitleEn: 'Cleaning Services in Khulais | +966547161147 | Mesk Clean',
    metaDescAr: 'مسك كلين: أفضل شركة تنظيف بخليص لخدمات تنظيف وتعقيم المنازل والفلل والاستراحات، عزل وتنظيف الخزانات، غسيل المكيفات، مكافحة الحشرات والقوارض، وتركيب شبك وطارد الحمام بخليص والمراكز المجاورة 24/7. اتصل الآن: 0547161147',
    metaDescEn: 'Mesk Clean: Premier cleaning company in Khulais for homes, villas, farmsteads, water tank cleaning & insulation, AC wash, pest & rodent control, and bird netting 24/7.',
    heroHeadlineAr: 'شركة تنظيف بخليص',
    heroHeadlineEn: 'Cleaning Company in Khulais',
    heroSubheadlineAr: 'خدمة احترافية متميزة... لبيئة نقية في محافظة خليص والمراكز المجاورة',
    heroSubheadlineEn: 'Professional Service... For a Cleaner Environment in Khulais',
    heroDescAr: 'نقدم أرقى خدمات تنظيف المنازل والفلل والاستراحات، غسيل وتعقيم الخزانات، عزل الخزانات، غسيل المكيفات، تنظيف الكنب والسجاد بالبخار، ومكافحة الحشرات والقوارض في كافة أحياء خليص ومراكزها بأحدث المعدات.',
    heroDescEn: 'Premier home, villa, and rest-house cleaning, water tank sanitization & insulation, AC deep cleaning, steam upholstery cleaning, and pest control across Khulais.',
    taglineAr: 'تغطية سريعة وشاملة لكافة أحياء ومخططات خليص وغران والبرزة والمراكز التابعة.',
    taglineEn: 'Comprehensive coverage across Khulais neighborhoods, Ghran, Al-Barzah, and surrounding areas.',
    addressLocalityAr: 'خليص',
    addressLocalityEn: 'Khulais',
    geo: {
      latitude: 22.0006,
      longitude: 39.3197
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118400.00000000000!2d39.3197!3d22.0006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c10502758169ff%3A0xb35a77f95026df16!2sKhulais%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1716000000003!5m2!1sen!2ssa',
    directMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mesk+Clean+Khulais+Saudi+Arabia',
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
    districtsEn: [
      'Al Duff',
      'Al Magharibah',
      'Al Saadiyah',
      'Al Talaah',
      'Al Aziziyah',
      'Al Nuzha',
      'Old Khulais',
      'Ghran',
      'Wadi Khulais',
      'Al Barzah',
      'Umm Al Jurm',
      'Sittarah',
      'Al Khuwar',
      'Al Dhabiyah & Al Jumaah',
      'Other Khulais District'
    ]
  }
};

export const VALID_CITY_IDS: ('jeddah' | 'makkah' | 'rabigh' | 'khulais')[] = ['jeddah', 'makkah', 'rabigh', 'khulais'];

export const getCityById = (cityId?: string | null): CityData => {
  if (!cityId) return CITIES_DATA.jeddah;
  const normalized = cityId.toLowerCase().replace(/^\/+|\/+$/g, '');
  if (normalized === 'makkah' || normalized === 'mecca') return CITIES_DATA.makkah;
  if (normalized === 'rabigh') return CITIES_DATA.rabigh;
  if (normalized === 'khulais' || normalized === 'khalis' || normalized === 'خليص') return CITIES_DATA.khulais;
  return CITIES_DATA.jeddah;
};
