import { ServiceItem, BlogPost, BookingRequestRecord, FAQItem, TestimonialItem, CompanySettings } from '../types';
import { SERVICES_DATA } from './servicesData';
import { BLOG_DATA } from './blogData';
import { COMPANY_INFO } from './companyInfo';

// Storage keys
const STORAGE_KEYS = {
  SERVICES: 'mesk_services_v3',
  BLOG: 'mesk_blog_v3',
  ORDERS: 'mesk_orders_v2',
  FAQS: 'mesk_faqs_v2',
  TESTIMONIALS: 'mesk_testimonials_v2',
  COMPANY: 'mesk_company_v3',
  ADMIN_SESSION: 'mesk_admin_auth_v2',
};

// Initial English titles for services
const SERVICES_EN_MAP: Record<string, { nameEn: string; descEn: string; detailsEn: string[] }> = {
  'homes': {
    nameEn: 'Home Cleaning',
    descEn: 'Comprehensive cleaning for all home areas with modern equipment and safe eco-friendly supplies.',
    detailsEn: [
      'Full cleaning for bedrooms, living halls and corridors',
      'Detailed care for floors, surfaces, doors and windows',
      'Professional dust and allergen removal',
      'Customized scheduling to fit your home routine'
    ]
  },
  'villas': {
    nameEn: 'Villa Cleaning',
    descEn: 'Organized deep cleaning tailored for expansive villas and palaces across Jeddah neighborhoods.',
    detailsEn: [
      'Structured plan for high ceilings and open spaces',
      'Care for grand entrances, reception salons, stairs and suites',
      'Heavy-duty floor scrubbing and surface polishing',
      'Dedicated crew delivering prompt and meticulous results'
    ]
  },
  'bird-netting': {
    nameEn: 'Bird Netting & Anti-Pigeon Spikes',
    descEn: 'Professional installation of stainless steel bird spikes and durable netting on windows, ACs and rooftops in Jeddah.',
    detailsEn: [
      'UV-resistant heavy-duty polymer netting against pigeons and birds',
      'Rust-proof stainless steel spikes on window sills and air conditioners',
      'Full protection for building facades from bird droppings and nesting',
      'Aesthetic, humane and permanent deterrence lasting for years'
    ]
  },
  'offices': {
    nameEn: 'Office Cleaning',
    descEn: 'Pristine, hygienic work environments that inspire productivity and reflect professional excellence.',
    detailsEn: [
      'Cleaning workstations, conference halls and reception lobbies',
      'Care for carpeted/tiled floors, glass partitions and desks',
      'Flexible scheduling to avoid disruption to daily operations',
      'Corporate contracts available for businesses in Jeddah'
    ]
  },
  'sofas': {
    nameEn: 'Steam Sofa Cleaning',
    descEn: 'Deep sanitizing and steam extraction for sofas and upholstery while preserving fabric texture and color.',
    detailsEn: [
      'Tailored treatment for sensitive and luxury fabrics',
      'Deep vacuum extraction for stubborn dirt and drink stains',
      'Detailed sanitization of cushions, crevices and seams',
      'Restores the fresh scent, beauty and cleanliness of your furniture'
    ]
  },
  'carpets': {
    nameEn: 'Steam Carpet & Rug Cleaning',
    descEn: 'Powerful steam washing that lifts trapped dust and revives carpet fibers and vibrancy.',
    detailsEn: [
      'Advanced spot treatment for grease and beverage spills',
      'High-temperature steam kills bacteria and dust mites',
      'Rapid drying technology ready for use in minimal time',
      'Gentle care for handmade and delicate oriental rugs'
    ]
  },
  'rodents-reptiles': {
    nameEn: 'Rodents & Reptiles Control',
    descEn: 'Specialized and safe extermination for mice, rats, and reptiles with advanced baiting and certified warranty.',
    detailsEn: [
      'Comprehensive inspection for rodent burrows and entry points',
      'Child and pet-safe baits and modern mechanical traps',
      'Sealing fissures and entry crevices to prevent re-infestation',
      'Routine follow-up visits and certified warranty for complete safety'
    ]
  },
  'kitchens': {
    nameEn: 'Kitchen & Bathroom Cleaning',
    descEn: 'Heavy grease removal, ceramic descaling and clinical disinfection for culinary and sanitary zones.',
    detailsEn: [
      'Degreasing stovetops, exhaust hoods, cabinets and backsplashes',
      'Anti-limescale descaling for bathroom tiles, tubs and glass screens',
      'Hospital-grade sterilization for hygiene-critical zones',
      'Polishing chrome fixtures and granite countertops'
    ]
  },
  'ac': {
    nameEn: 'Air Conditioner Cleaning',
    descEn: 'Split and window AC washing with specialized water catch bags and high-pressure pumps.',
    detailsEn: [
      'Full waterproof isolation to safeguard walls and furnishings',
      'Chemical-safe coil descaling, blower fan and tray flushing',
      'Improves cooling power and cuts electric consumption by up to 20%',
      'Eliminates mold spores, musty odors and airborne dust'
    ]
  },
  'tanks': {
    nameEn: 'Water Tank Cleaning & Sanitization',
    descEn: 'Scrubbing and sterilizing underground and elevated water tanks to ensure 100% pure water.',
    detailsEn: [
      'Drainage of residual sludge and sediment extraction',
      'High-pressure brushing of walls and floor surfaces',
      'Municipality-approved chlorine/ozone sterilization',
      'Inspection for hairline fissures or waterproofing leaks'
    ]
  },
  'pest': {
    nameEn: 'Pest Control & Extermination',
    descEn: 'Safe, certified pest control targeting cockroaches, bedbugs, termites and rodents with warranty.',
    detailsEn: [
      'Odorless, pet-safe and child-safe Ministry-approved insecticides',
      'Targeted gels and crack treatments for long-lasting prevention',
      'Comprehensive termite, bedbug and rodent extermination',
      'Guaranteed follow-up visits for total peace of mind'
    ]
  }
};

// Initial FAQs
export const INITIAL_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'ما هي الأحياء والمناطق التي تغطيها شركة مسك كلين في جدة؟',
    questionEn: 'Which areas and districts does Mesk Clean cover in Jeddah?',
    answer: 'نغطي جميع أحياء مدينة جدة بلا استثناء، بما في ذلك أحياء شمال جدة (الروضة، الشاطئ، المرجان، أبحر الشمالية والجنوبية، المحمدية، البساتين)، ووسط جدة (الحمراء، الزهراء، السلامة)، وجنوب وشرق جدة (الصفا، السامر، الحمدانية). نصلكم أينما كنتم بسيارات مجهزة بالكامل.',
    answerEn: 'We cover all districts across Jeddah without exception, including North Jeddah (Al Rawdah, Al Shati, Al Murjan, Obhur, Al Mohammediyah), Central Jeddah (Al Hamra, Al Zahra, Al Salamah), and South/East Jeddah (Al Safa, Al Samer, Al Hamdaniyah) with fully equipped mobile teams.',
    category: 'التغطية والوصول'
  },
  {
    id: 'faq-2',
    question: 'كيف يتم تركيب شبك وطارد الحمام، وهل يضر بالطيور أو بشكل المبنى؟',
    questionEn: 'How are bird netting and spikes installed, and do they harm birds or facade aesthetics?',
    answer: 'نستخدم أشواك ستانلس ستيل غير قابلة للصدأ مع قواعد بوليمرية شفافة وشبكات قوية مقاومة لأشعة الشمس والحرارة. النظام يعمل كمانع ميكانيكي آمن يمنع هبوط الحمام وبناء الأعشاش دون إيذائها إطلاقاً، وتثبيتها احترافي يحافظ على جمال وأناقة واجهة المبنى.',
    answerEn: 'We install rust-proof stainless steel spikes with transparent polycarbonate bases and UV-treated heavy-duty netting. The system provides a safe physical barrier preventing birds from landing or nesting without harming them, while keeping your building facade clean and neat.',
    category: 'شبك وطارد الحمام'
  },
  {
    id: 'faq-3',
    question: 'هل توفرون خدمة تنظيف الكنب والسجاد بالبخار ومكافحة القوارض والزواحف؟',
    questionEn: 'Do you provide on-site steam cleaning and rodent & pest control?',
    answer: 'نعم، نوفر غسيل الكنب والسجاد بالبخار بأحدث ماكينات الحقن والشفط، كما نقدم خدمات مكافحة متخصصة للقوارض والزواحف والحشرات باستخدام طعوم ومبيدات آمنة ومعتمدة مع الضمان.',
    answerEn: 'Yes! We provide on-site steam cleaning for sofas and carpets with rapid extraction, as well as specialized extermination for rodents, reptiles, and pests using certified safe methods.',
    category: 'الخدمات والضمان'
  },
  {
    id: 'faq-4',
    question: 'ما هي المواد المستخدمة في غسيل وتعقيم خزانات المياه؟',
    questionEn: 'What materials are used for water tank cleaning and sterilization?',
    answer: 'نعتمد فقط مواد تعقيم ومطهرات معتمدة ومطابقة للمواصفات القياسية السعودية (SASO) والصحية. يتم سحب الرواسب، فرك الجدران والأرضيات، والتعقيم بالكلور المركز بالنسب الآمنة لضمان مياه نقية وصالحة للشرب بنسبة 100%.',
    answerEn: 'We exclusively utilize SASO and health-authority approved sanitizers. Tanks undergo full sediment pumping, mechanical scrubbing, and precision disinfection ensuring water is 100% pure and safe for household use.',
    category: 'الخزانات والمياه'
  },
  {
    id: 'faq-5',
    question: 'هل تقدمون خدماتكم للشركات والمؤسسات والجهات الحكومية؟',
    questionEn: 'Do you provide services for commercial companies, offices, and institutions?',
    answer: 'نعم، نقدم عقود تنظيف دورية وخدمات تنظيف فورية للشركات، المكاتب، المعارض، الفنادق، والمؤسسات بجدة، مع توفير فواتير ضريبية نظامية معتمدة من هيئة الزكاة والضريبة والجمارك.',
    answerEn: 'Yes, we provide routine and one-time cleaning contracts for corporations, commercial offices, showrooms, and hotels in Jeddah, complete with official VAT invoices.',
    category: 'الشركات والجهات'
  },
  {
    id: 'faq-6',
    question: 'كيف يمكنني حجز موعد وما هي طرق الدفع المتاحة؟',
    questionEn: 'How can I book an appointment and what are the payment methods?',
    answer: 'يمكنك الحجز بسهولة عبر نموذج الحجز في الموقع، أو الاتصال المباشر، أو التواصل عبر واتساب. نوفر الدفع عند إتمام الخدمة نقداً أو عبر التحويل البنكي أو بطاقات مدى وفيزا.',
    answerEn: 'You can book easily via our website booking form, phone call, or WhatsApp. We accept cash on delivery, bank transfer, and Mada / credit cards upon your full satisfaction.',
    category: 'الحجز والدفع'
  }
];

// Initial Testimonials
export const INITIAL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'المهندس عادل الغامدي',
    nameEn: 'Eng. Adel Al-Ghamdi',
    customerType: 'individual',
    rating: 5,
    service: 'تنظيف فلل وتركيب طارد الحمام',
    serviceEn: 'Villa Cleaning & Bird Spikes',
    comment: 'خدمة راقية جداً والتزام تام بالوقت. تم تركيب أشواك طارد الحمام على الشبابيك والمكيفات باحترافية عالية وانتهت مشكلة الطيور تماماً، وتنظيف الفلة كان مبهراً.',
    commentEn: 'Outstanding service and punctual arrival. The stainless steel bird spikes on windows and AC units completely solved the bird issue, and the villa cleaning was immaculate.',
    date: 'منذ يومين',
    district: 'حي الشاطئ'
  },
  {
    id: 'test-2',
    name: 'الأستاذة سارة الحربي',
    nameEn: 'Sarah Al-Harbi',
    customerType: 'individual',
    rating: 5,
    service: 'تنظيف الكنب والمجالس بالبخار',
    serviceEn: 'Steam Sofa & Majlis Cleaning',
    comment: 'فريق عمل محترم وأجهزة بخار حديثة جداً. الكنب رجع كأنه جديد واختفت بقع القهوة والعصير بالكامل مع رائحة تعقيم جميلة.',
    commentEn: 'Courteous crew and state-of-the-art steam equipment. Our sofa looks brand new and all stubborn stains were removed completely.',
    date: 'منذ أسبوع',
    district: 'حي الروضة'
  },
  {
    id: 'test-3',
    name: 'شركة الأفق للتطوير والاستثمار',
    nameEn: 'Al-Ofuq Development Co.',
    customerType: 'corporate',
    rating: 5,
    service: 'تنظيف المكاتب والواجهات',
    serviceEn: 'Corporate Office Cleaning',
    comment: 'تعاملنا مع مسك كلين في تنظيف مقر شركتنا بجدة. دقة وسرعة وجودة لا غبار عليها وفريق عمل منظم، ونعتمد عليهم في عقودنا الدورية.',
    commentEn: 'We partnered with Mesk Clean for our Jeddah corporate headquarters. Exceptional quality, organized workforce, and reliable recurring service.',
    date: 'منذ أسبوعين',
    district: 'حي الزهراء'
  },
  {
    id: 'test-4',
    name: 'الدكتور طارق الشهري',
    nameEn: 'Dr. Tariq Al-Shehri',
    customerType: 'individual',
    rating: 5,
    service: 'غسيل مكيفات وتنظيف خزانات',
    serviceEn: 'AC Wash & Tank Sterilization',
    comment: 'غسيل المكيفات كان باحترافية بدون نقطة ماء على الجدران، وتنظيف الخزان الأرضي والعلوي تم بشفافية وصوروا لي مراحل التنظيف قبل وبعد.',
    commentEn: 'AC cleaning was flawless with complete wall protection. Water tank sterilization was verified with transparent before-and-after photos.',
    date: 'منذ 3 أسابيع',
    district: 'حي المرجان'
  }
];

// Initial Company Settings
export const INITIAL_COMPANY_SETTINGS: CompanySettings = {
  arabicName: COMPANY_INFO.arabicName,
  englishName: COMPANY_INFO.englishName,
  subtitle: COMPANY_INFO.subtitle,
  subtitleEn: 'Professional Service for a Cleaner Environment',
  description: COMPANY_INFO.description,
  descriptionEn: 'Mesk Clean provides professional cleaning services, tank insulation, pest control, and anti-pigeon netting installation in Jeddah, Makkah, and Rabigh with modern tools and a certified crew.',
  city: COMPANY_INFO.city,
  cityEn: 'Jeddah, Makkah & Rabigh, Kingdom of Saudi Arabia',
  address: 'جدة، مكة المكرمة، ورابغ - المملكة العربية السعودية - تغطية لجميع الأحياء',
  addressEn: 'Jeddah, Makkah & Rabigh - Kingdom of Saudi Arabia - Serving All Districts',
  phone1: COMPANY_INFO.phone1.display,
  phone2: COMPANY_INFO.phone2.display,
  whatsapp: COMPANY_INFO.phone1.waNumber,
  email: 'meskcleaning@gmail.com',
  workingHours: 'متاحون على مدار الساعة: 24/7 طوال أيام الأسبوع',
  workingHoursEn: 'Available 24/7 Round the Clock (All Days)',
  instagram: COMPANY_INFO.social.instagram,
  facebook: COMPANY_INFO.social.facebook,
  tiktok: COMPANY_INFO.social.tiktok,
  pinterest: COMPANY_INFO.social.pinterest,
};

// Store helper methods
export const getStoredServices = (): ServiceItem[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SERVICES);
    if (raw) return JSON.parse(raw);
  } catch {}
  // Merge English translations into initial services
  return SERVICES_DATA.map(item => {
    const en = SERVICES_EN_MAP[item.id] || {
      nameEn: item.name,
      descEn: item.description,
      detailsEn: item.details
    };
    return {
      ...item,
      nameEn: en.nameEn,
      descriptionEn: en.descEn,
      detailsEn: en.detailsEn,
      active: true,
    };
  });
};

export const saveStoredServices = (services: ServiceItem[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));
    window.dispatchEvent(new CustomEvent('mesk_store_updated', { detail: { type: 'services' } }));
  } catch {}
};

export const getStoredBlog = (): BlogPost[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.BLOG);
    if (raw) return JSON.parse(raw);
  } catch {}
  return BLOG_DATA;
};

export const saveStoredBlog = (posts: BlogPost[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.BLOG, JSON.stringify(posts));
    window.dispatchEvent(new CustomEvent('mesk_store_updated', { detail: { type: 'blog' } }));
  } catch {}
};

export const getStoredFAQs = (): FAQItem[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.FAQS);
    if (raw) return JSON.parse(raw);
  } catch {}
  return INITIAL_FAQS;
};

export const saveStoredFAQs = (faqs: FAQItem[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.FAQS, JSON.stringify(faqs));
    window.dispatchEvent(new CustomEvent('mesk_store_updated', { detail: { type: 'faqs' } }));
  } catch {}
};

export const getStoredTestimonials = (): TestimonialItem[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.TESTIMONIALS);
    if (raw) return JSON.parse(raw);
  } catch {}
  return INITIAL_TESTIMONIALS;
};

export const saveStoredTestimonials = (testimonials: TestimonialItem[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.TESTIMONIALS, JSON.stringify(testimonials));
    window.dispatchEvent(new CustomEvent('mesk_store_updated', { detail: { type: 'testimonials' } }));
  } catch {}
};

export const getStoredCompanySettings = (): CompanySettings => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.COMPANY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return INITIAL_COMPANY_SETTINGS;
};

export const saveStoredCompanySettings = (settings: CompanySettings): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.COMPANY, JSON.stringify(settings));
    window.dispatchEvent(new CustomEvent('mesk_store_updated', { detail: { type: 'company' } }));
  } catch {}
};

export const getStoredOrders = (): BookingRequestRecord[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ORDERS);
    if (raw) return JSON.parse(raw);
  } catch {}
  return [];
};

export const saveStoredOrder = (order: BookingRequestRecord): void => {
  try {
    const existing = getStoredOrders();
    const updated = [order, ...existing];
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('mesk_store_updated', { detail: { type: 'orders' } }));
  } catch {}
};

export const updateStoredOrderStatus = (orderId: string, status: BookingRequestRecord['status']): void => {
  try {
    const existing = getStoredOrders();
    const updated = existing.map(o => o.id === orderId ? { ...o, status } : o);
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('mesk_store_updated', { detail: { type: 'orders' } }));
  } catch {}
};

export const deleteStoredOrder = (orderId: string): void => {
  try {
    const existing = getStoredOrders();
    const updated = existing.filter(o => o.id !== orderId);
    localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent('mesk_store_updated', { detail: { type: 'orders' } }));
  } catch {}
};

// Admin Auth Session
export const isAdminAuthenticated = (): boolean => {
  try {
    return sessionStorage.getItem(STORAGE_KEYS.ADMIN_SESSION) === 'true';
  } catch {
    return false;
  }
};

export const setAdminAuthenticated = (auth: boolean): void => {
  try {
    if (auth) {
      sessionStorage.setItem(STORAGE_KEYS.ADMIN_SESSION, 'true');
    } else {
      sessionStorage.removeItem(STORAGE_KEYS.ADMIN_SESSION);
    }
  } catch {}
};
