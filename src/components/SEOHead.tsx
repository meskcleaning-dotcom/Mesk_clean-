import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO } from '../data/companyInfo';
import { getStoredFAQs, getStoredServices } from '../data/store';

interface SEOHeadProps {
  customTitle?: string;
  customDescription?: string;
  activeServiceSlug?: string;
  activeBlogSlug?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  customTitle,
  customDescription,
}) => {
  const { language } = useLanguage();

  useEffect(() => {
    // 1. Dynamic Page Title
    const defaultTitleAr = 'شركة تنظيف بجدة ومكة ورابغ | عزل خزانات ومكافحة قوارض مسك كلين';
    const defaultTitleEn = 'Cleaning & Pest Control Services in Jeddah, Makkah & Rabigh | Mesk Clean';
    const baseTitle = customTitle || (language === 'ar' ? defaultTitleAr : defaultTitleEn);
    document.title = baseTitle;

    // 2. Dynamic Meta Description
    const defaultDescAr = 'مسك كلين: أفضل شركة تنظيف منازل وفلل، عزل خزانات، غسيل مكيفات، مكافحة القوارض والزواحف، وتركيب شبك حمام في جدة، مكة المكرمة، ورابغ بأحدث المعدات وأفضل الأسعار.';
    const defaultDescEn = 'Mesk Clean: Premier cleaning services, tank insulation, AC wash, rodent control, and bird spikes installation across Jeddah, Makkah, and Rabigh with certified warranty.';
    const baseDesc = customDescription || (language === 'ar' ? defaultDescAr : defaultDescEn);

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', baseDesc);

    // 3. OpenGraph and Twitter tags
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('property', 'og:title', baseTitle);
    setMeta('property', 'og:description', baseDesc);
    setMeta('property', 'og:locale', language === 'ar' ? 'ar_SA' : 'en_US');
    setMeta('name', 'twitter:title', baseTitle);
    setMeta('name', 'twitter:description', baseDesc);

    // 4. Schema.org LocalBusiness + CleaningService JSON-LD
    const services = getStoredServices();
    const faqs = getStoredFAQs();

    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://meskclean.com/#business',
      'name': language === 'ar' ? COMPANY_INFO.arabicName : COMPANY_INFO.englishName,
      'alternateName': 'Mesk Clean Jeddah',
      'url': 'https://meskclean.com/',
      'logo': 'https://meskclean.com/assets/mesk-clean-official-logo-transparent.png',
      'image': 'https://meskclean.com/assets/mesk-hero.jpg',
      'description': baseDesc,
      'telephone': COMPANY_INFO.phone1.tel.replace('tel:', ''),
      'priceRange': '$$',
      'areaServed': [
        {
          '@type': 'City',
          'name': 'Jeddah',
          'alternateName': 'جدة'
        },
        {
          '@type': 'City',
          'name': 'Makkah',
          'alternateName': 'مكة المكرمة'
        },
        {
          '@type': 'City',
          'name': 'Rabigh',
          'alternateName': 'رابغ'
        }
      ],
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Jeddah City Districts',
        'addressLocality': 'Jeddah',
        'addressRegion': 'Makkah Province',
        'addressCountry': 'SA'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': 21.5433,
        'longitude': 39.1728
      },
      'openingHoursSpecification': {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        'opens': '00:00',
        'closes': '23:59'
      },
      'sameAs': [
        COMPANY_INFO.social.instagram,
        COMPANY_INFO.social.facebook,
        COMPANY_INFO.social.tiktok,
        COMPANY_INFO.social.pinterest
      ],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': language === 'ar' ? 'خدمات مسك كلين بجدة' : 'Mesk Clean Services in Jeddah',
        'itemListElement': services.map(s => ({
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': language === 'ar' ? s.name : (s.nameEn || s.name),
            'description': language === 'ar' ? s.description : (s.descriptionEn || s.description)
          }
        }))
      }
    };

    // 5. Schema.org FAQPage JSON-LD
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map(f => ({
        '@type': 'Question',
        'name': language === 'ar' ? f.question : f.questionEn,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': language === 'ar' ? f.answer : f.answerEn
        }
      }))
    };

    // Inject JSON-LD scripts
    let businessScript = document.getElementById('schema-local-business');
    if (!businessScript) {
      businessScript = document.createElement('script');
      businessScript.id = 'schema-local-business';
      businessScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(businessScript);
    }
    businessScript.textContent = JSON.stringify(localBusinessSchema);

    let faqScript = document.getElementById('schema-faq-page');
    if (!faqScript) {
      faqScript = document.createElement('script');
      faqScript.id = 'schema-faq-page';
      faqScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(faqScript);
    }
    faqScript.textContent = JSON.stringify(faqSchema);
  }, [language, customTitle, customDescription]);

  return null;
};
