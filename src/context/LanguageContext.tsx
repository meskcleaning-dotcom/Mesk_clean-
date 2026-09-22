import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type Language = 'ar' | 'en';
export type Direction = 'rtl' | 'ltr';

interface LanguageContextType {
  language: Language;
  dir: Direction;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, { ar: string; en: string }> = {
  // Navigation
  'nav.home': { ar: 'الرئيسية', en: 'Home' },
  'nav.services': { ar: 'الخدمات', en: 'Services' },
  'nav.whyUs': { ar: 'لماذا مسك كلين؟', en: 'Why Mesk Clean' },
  'nav.howItWorks': { ar: 'كيف نعمل', en: 'How It Works' },
  'nav.testimonials': { ar: 'آراء العملاء', en: 'Reviews' },
  'nav.faq': { ar: 'الأسئلة الشائعة', en: 'FAQ' },
  'nav.blog': { ar: 'المدونة', en: 'Blog' },
  'nav.contact': { ar: 'تواصل معنا', en: 'Contact Us' },
  'nav.admin': { ar: 'لوحة التحكم', en: 'Admin Portal' },
  'nav.bookNow': { ar: 'احجز الآن', en: 'Book Now' },

  // Microbar & badges
  'badge.fastService': { ar: 'خدمة سريعة في جميع أحياء جدة', en: 'Fast service across all Jeddah districts' },
  'badge.whatsapp247': { ar: 'واتساب متاح 24/7', en: 'WhatsApp Available 24/7' },
  'badge.callNow': { ar: 'اتصال مباشر', en: 'Call Now' },

  // Hero Section
  'hero.line1': { ar: 'شركة تنظيف بجدة', en: 'Cleaning Company in Jeddah' },
  'hero.line2': { ar: 'خدمة احترافية...', en: 'Professional Service...' },
  'hero.highlight': { ar: 'لبيئة أنظف', en: 'For a Cleaner Environment' },
  'hero.description': {
    ar: 'نقدم أفضل خدمات التنظيف المنزلي، تنظيف الخزانات، عزل الخزانات، غسيل المكيفات وغسيل الكنب بأحدث المعدات وأفضل المواد.',
    en: 'We provide premier home cleaning services: water tank cleaning, tank insulation, AC wash, and sofa steam cleaning with the latest equipment and finest materials.'
  },
  'hero.orderNow': { ar: 'اطلب خدمة الآن', en: 'Order Service Now' },
  'hero.contactUs': { ar: 'تواصل معنا', en: 'Contact Us' },
  'hero.badge': { ar: 'خدمة احترافية لبيئة أنظف', en: 'Professional Service for a Cleaner Environment' },
  'hero.title': { ar: 'شركة تنظيف بجدة', en: 'Cleaning Company in Jeddah' },
  'hero.subtitle': { ar: 'خدمة احترافية... لبيئة أنظف', en: 'Professional Service... For a Cleaner Environment' },
  'hero.ctaPrimary': { ar: 'اطلب خدمة الآن', en: 'Order Service Now' },
  'hero.ctaSecondary': { ar: 'تواصل معنا', en: 'Contact Us' },
  'hero.ctaWhatsapp': { ar: 'اطلب خدمة الآن', en: 'Order Service Now' },

  // Services Section
  'services.badge': { ar: 'خدماتنا المعتمدة', en: 'Our Certified Services' },
  'services.title': { ar: 'حلول تنظيف متكاملة', en: 'Comprehensive Cleaning Solutions' },
  'services.subtitle': {
    ar: 'اختر الخدمة المناسبة لمنزلك أو مكتبك، واطلع على التفاصيل واحجز موعدك بسهولة.',
    en: 'Choose the ideal service for your property, view details, and book your appointment with ease.'
  },
  'services.viewDetails': { ar: 'تفاصيل الخدمة', en: 'Service Details' },
  'services.bookService': { ar: 'طلب الخدمة', en: 'Book Service' },

  // Why Us
  'whyUs.badge': { ar: 'معايير التميز', en: 'Why Choose Us' },
  'whyUs.title': { ar: 'لماذا مسك كلين؟', en: 'Why Mesk Clean?' },
  'whyUs.subtitle': {
    ar: 'نلتزم بتقديم تجربة تنظيف استثنائية تجمع بين الكفاءة والاحترافية، لنكون شريكك الدائم لبيئة أنظف وأكثر راحة في جدة.',
    en: 'We are committed to delivering an exceptional cleaning experience combining efficiency and reliability across Jeddah.'
  },

  // How It Works
  'howItWorks.badge': { ar: 'آلية العمل', en: 'Simple Process' },
  'howItWorks.title': { ar: 'خطوات واضحة وسريعة', en: 'Clear & Fast Steps' },
  'howItWorks.subtitle': {
    ar: 'خطوات بسيطة تفصلك عن بيئة نظيفة وصحية بكل سهولة وسرعة',
    en: 'Simple steps connecting you to a clean, healthy space with minimal effort'
  },
  'howItWorks.cta': { ar: 'ابدأ حجز خدمتك الآن', en: 'Start Booking Now' },

  // Booking Form
  'booking.badge': { ar: 'حجز سهل وسريع', en: 'Quick & Easy Booking' },
  'booking.title': { ar: 'احجز خدمة التنظيف أو شبك الحمام', en: 'Book Cleaning or Bird Deterrent Service' },
  'booking.subtitle': {
    ar: 'املأ بياناتك وسيقوم فريق مسك كلين بتأكيد الموعد والتنسيق الفوري معك.',
    en: 'Fill in your details and our team will promptly coordinate and confirm your appointment.'
  },
  'booking.customerType': { ar: 'نوع العميل', en: 'Customer Type' },
  'booking.individual': { ar: 'فرد (منزل / فيلا)', en: 'Individual (Home / Villa)' },
  'booking.corporate': { ar: 'شركة / مؤسسة / جهة عمل', en: 'Corporate / Business' },
  'booking.fullName': { ar: 'الاسم الكريم', en: 'Full Name' },
  'booking.phone': { ar: 'رقم الجوال (05xxxxxxxx)', en: 'Mobile Number (05xxxxxxxx)' },
  'booking.service': { ar: 'الخدمة المطلوبة', en: 'Required Service' },
  'booking.propertyType': { ar: 'نوع العقار / المكان', en: 'Property Type' },
  'booking.city': { ar: 'المدينة', en: 'City' },
  'booking.district': { ar: 'الحي', en: 'District' },
  'booking.address': { ar: 'العنوان أو موقع تقديم الخدمة (الشارع / المعلم)', en: 'Detailed Address or Landmark' },
  'booking.date': { ar: 'التاريخ المفضل', en: 'Preferred Date' },
  'booking.preferredTime': { ar: 'الوقت المناسب', en: 'Preferred Time' },
  'booking.notes': { ar: 'ملاحظات أو متطلبات إضافية', en: 'Additional Notes' },
  'booking.submit': { ar: 'إرسال طلب الخدمة', en: 'Submit Service Request' },
  'booking.successTitle': { ar: 'تم استلام طلبك بنجاح!', en: 'Request Received Successfully!' },
  'booking.refCode': { ar: 'رقم الطلب المرجعي:', en: 'Reference Booking ID:' },
  'booking.successMsg': {
    ar: 'تم حفظ طلبك وسيقوم منسق خدمة العملاء بالتواصل معك فوراً عبر واتساب أو الهاتف لتأكيد الموعد.',
    en: 'Your request is recorded. Our team will contact you promptly via WhatsApp or phone to confirm.'
  },
  'booking.openWhatsApp': { ar: 'متابعة عبر واتساب الآن', en: 'Follow-up via WhatsApp' },
  'booking.anotherOrder': { ar: 'تقديم طلب آخر', en: 'Book Another Service' },

  // Security & Anti-spam
  'security.spamChallenge': { ar: 'التحقق الأمني لمنع الرسائل الآلية', en: 'Security Verification (Anti-Spam)' },
  'security.answerPlaceholder': { ar: 'اكتب الناتج هنا...', en: 'Enter answer here...' },
  'security.spamError': { ar: 'إجابة التحقق الأمني غير صحيحة، يرجى المحاولة مرة أخرى.', en: 'Incorrect verification answer. Please try again.' },
  'security.rateLimitError': { ar: 'يرجى الانتظار قليلاً قبل إرسال طلب جديد لمنع التكرار.', en: 'Please wait a moment before sending another request.' },

  // FAQ Section
  'faq.badge': { ar: 'إجابات مباشرة', en: 'FAQ' },
  'faq.title': { ar: 'الأسئلة الشائعة حول خدماتنا', en: 'Frequently Asked Questions' },
  'faq.subtitle': {
    ar: 'كل ما ترغب بمعرفته حول آليات التنظيف، شبك وطارد الحمام، الضمان، وطرق الحجز.',
    en: 'Everything you need to know about our cleaning methods, bird spikes, warranty, and bookings.'
  },

  // Testimonials
  'testimonials.badge': { ar: 'ثقة نعتز بها', en: 'Customer Trust' },
  'testimonials.title': { ar: 'ماذا يقول عملاؤنا في جدة؟', en: 'What Our Clients in Jeddah Say' },
  'testimonials.subtitle': {
    ar: 'تجارب حقيقية من عملائنا بعد الاستفادة من خدمات التنظيف وشبك الحمام.',
    en: 'Genuine feedback from homeowners and businesses who chose Mesk Clean.'
  },
  'testimonials.verified': { ar: 'عميل موثق', en: 'Verified Client' },

  // Google Maps
  'maps.badge': { ar: 'موقعنا ونطاق التغطية', en: 'Location & Service Area' },
  'maps.title': { ar: 'تغطية شاملة لجميع أحياء جدة', en: 'Comprehensive Coverage in Jeddah' },
  'maps.subtitle': {
    ar: 'فرقنا المتنقلة تصل إلى موقعك في أي حي من أحياء جدة بسيارات مجهزة بكامل الأدوات.',
    en: 'Our mobile crews reach your location anywhere in Jeddah with fully equipped service vehicles.'
  },
  'maps.getDirections': { ar: 'الاتجاهات عبر خرائط جوجل', en: 'Open in Google Maps' },

  // Blog
  'blog.badge': { ar: 'دليل النظافة والعناية', en: 'Cleaning & Care Guide' },
  'blog.title': { ar: 'نصائح ومقالات مسك كلين', en: 'Tips & Articles by Mesk Clean' },
  'blog.subtitle': {
    ar: 'مقالات إرشادية وتثقيفية حول صيانة المكيفات، تنظيف الكنب، تعقيم الخزانات، ومكافحة الحمام.',
    en: 'Educational guides on AC maintenance, sofa care, water tank hygiene, and bird deterrence.'
  },
  'blog.readMore': { ar: 'قراءة المقال كاملاً', en: 'Read Full Article' },

  // Contact
  'contact.badge': { ar: 'تواصل فوري', en: 'Get in Touch' },
  'contact.title': { ar: 'تواصل معنا في أي وقت', en: 'Contact Us Anytime' },
  'contact.subtitle': {
    ar: 'فريقنا متاح طوال أيام الأسبوع للرد على كافة أسئلتكم واستقبال طلباتكم.',
    en: 'Our customer support team is available 7 days a week for inquiries and booking requests.'
  },
  'contact.callNow': { ar: 'اتصال مباشر', en: 'Call Now' },
  'contact.whatsappDirect': { ar: 'محادثة واتساب', en: 'WhatsApp' },

  // Footer
  'footer.quickLinks': { ar: 'روابط سريعة', en: 'Quick Links' },
  'footer.servicesTitle': { ar: 'خدماتنا في جدة', en: 'Our Services in Jeddah' },
  'footer.contactTitle': { ar: 'معلومات التواصل', en: 'Contact Info' },
  'footer.rights': { ar: 'جميع الحقوق محفوظة © شركة مسك كلين لخدمات التنظيف', en: 'All Rights Reserved © Mesk Clean Services' },
  'footer.adminLink': { ar: 'لوحة التحكم الإدارية', en: 'Admin Portal' },
  'footer.privacy': { ar: 'سياسة الخصوصية', en: 'Privacy Policy' },
  'footer.terms': { ar: 'الشروط والأحكام', en: 'Terms & Conditions' },

  // Modals
  'modal.serviceOverview': { ar: 'نظرة عامة على الخدمة', en: 'Service Overview' },
  'modal.serviceIncludes': { ar: 'ما تشمله الخدمة:', en: 'What This Service Includes:' },
  'modal.proNote': {
    ar: '💡 يتم تنفيذ الخدمة بأيدي فنيين محترفين مع استخدام أحدث الأجهزة والمواد الآمنة والفعالة لضمان أفضل نتائج النظافة المستدامة.',
    en: '💡 Delivered by certified professionals using state-of-the-art tools and eco-friendly supplies for enduring hygiene.'
  },
  'modal.close': { ar: 'إغلاق', en: 'Close' },
  'modal.bookNow': { ar: 'احجز الخدمة الآن', en: 'Book This Service' },
  'modal.whatsappInquiry': { ar: 'استفسار واتساب', en: 'WhatsApp Inquiry' },
  'modal.call': { ar: 'اتصال', en: 'Call' },
  'modal.helpNeeded': { ar: 'هل تحتاج إلى مساعدة فريق مسك كلين في جدة؟', en: 'Need assistance from Mesk Clean in Jeddah?' },
  'modal.helpDesc': { ar: 'فريقنا مجهز بأحدث المعدات لتقديم هذه الخدمة بأعلى جودة.', en: 'Our team is ready with specialized tools to deliver exceptional results.' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('mesk_clean_lang');
      if (saved === 'ar' || saved === 'en') return saved;
    } catch {}
    return 'ar';
  });

  const dir: Direction = language === 'ar' ? 'rtl' : 'ltr';

  // Synchronize DOM attributes and localStorage immediately
  const applyLanguageToDom = useCallback((lang: Language) => {
    const d: Direction = lang === 'ar' ? 'rtl' : 'ltr';
    try {
      localStorage.setItem('mesk_clean_lang', lang);
    } catch {}
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', d);
  }, []);

  useEffect(() => {
    applyLanguageToDom(language);

    // Also listen to storage events if multiple tabs are opened
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'mesk_clean_lang' && (e.newValue === 'ar' || e.newValue === 'en')) {
        setLanguageState(e.newValue);
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [language, applyLanguageToDom]);

  const toggleLanguage = () => {
    setLanguageState((prev) => {
      const next: Language = prev === 'ar' ? 'en' : 'ar';
      applyLanguageToDom(next);
      return next;
    });
  };

  const setLanguage = (lang: Language) => {
    applyLanguageToDom(lang);
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[language] || entry.ar || key;
  };

  return (
    <LanguageContext.Provider value={{ language, dir, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
