import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCityRoute } from '../context/CityRouteContext';
import { COMPANY_INFO } from '../data/companyInfo';
import { getStoredFAQs, getStoredServices } from '../data/store';
import { BRAND_NAME_AR, BRAND_ALT_NAME_AR, INTL_PHONE, CENTRAL_CITIES } from '../data/centralDirectory';

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
  const { currentCity, currentCityId, isCityRoute } = useCityRoute();

  useEffect(() => {
    // 1. Dynamic Page Title tailored to city or general homepage
    let baseTitle = customTitle;
    if (!baseTitle) {
      if (isCityRoute) {
        baseTitle = language === 'ar' ? currentCity.metaTitleAr : currentCity.metaTitleEn;
      } else {
        baseTitle = language === 'ar'
          ? 'شركة تنظيف بجدة ومكة ورابغ وخليص | 0547161147 | مسك كلين'
          : 'Cleaning Services in Jeddah, Makkah, Rabigh & Khulais | +966547161147 | Mesk Clean';
      }
    }
    document.title = baseTitle;

    // 2. Dynamic Meta Description tailored to city or general homepage
    let baseDesc = customDescription;
    if (!baseDesc) {
      if (isCityRoute) {
        baseDesc = language === 'ar' ? currentCity.metaDescAr : currentCity.metaDescEn;
      } else {
        baseDesc = language === 'ar'
          ? 'مسك كلين: شركة تنظيف متكاملة تغطي جدة، مكة المكرمة، رابغ، وخليص. خدمات تنظيف المنازل، الفلل، عزل الخزانات، مكافحة الحشرات، غسيل المكيفات وتركيب شبك وطارد الحمام. اتصل الآن: 0547161147'
          : 'Mesk Clean: Comprehensive cleaning company covering Jeddah, Makkah, Rabigh, and Khulais. Home cleaning, villas, tank insulation, pest control, AC washing, bird netting. Call now: +966547161147';
      }
    }

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', baseDesc);

    // 3. Dynamic Canonical Link (Homepage = https://www.meskclean.com/, City = https://www.meskclean.com/[city])
    const canonicalUrl = isCityRoute 
      ? `https://www.meskclean.com/${currentCity.slug}`
      : 'https://www.meskclean.com/';

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. OpenGraph and Twitter tags
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('property', 'og:site_name', BRAND_NAME_AR);
    setMeta('property', 'og:title', baseTitle);
    setMeta('property', 'og:description', baseDesc);
    setMeta('property', 'og:url', canonicalUrl);
    setMeta('property', 'og:image', 'https://www.meskclean.com/assets/mesk-hero.jpg');
    setMeta('property', 'og:locale', language === 'ar' ? 'ar_SA' : 'en_US');
    setMeta('name', 'twitter:title', baseTitle);
    setMeta('name', 'twitter:description', baseDesc);
    setMeta('name', 'twitter:image', 'https://www.meskclean.com/assets/mesk-hero.jpg');

    // 5. Schema.org WebSite & LocalBusiness JSON-LD
    const services = getStoredServices();
    const faqs = getStoredFAQs();

    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': BRAND_NAME_AR,
      'alternateName': BRAND_ALT_NAME_AR,
      'url': 'https://www.meskclean.com/'
    };

    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${canonicalUrl}#business`,
      'name': BRAND_NAME_AR,
      'alternateName': isCityRoute ? `Mesk Clean ${currentCity.nameEn}` : 'Mesk Clean KSA',
      'url': canonicalUrl,
      'logo': 'https://www.meskclean.com/assets/mesk-clean-official-logo-transparent.png',
      'image': 'https://www.meskclean.com/assets/mesk-hero.jpg',
      'description': baseDesc,
      'telephone': INTL_PHONE,
      'areaServed': isCityRoute
        ? [{ '@type': 'City', 'name': currentCity.nameAr, 'alternateName': currentCity.nameEn }]
        : CENTRAL_CITIES.map((c) => ({
            '@type': 'City',
            'name': c.nameAr,
            'alternateName': c.nameEn
          })),
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': `${currentCity.nameAr} - كافة الأحياء والمناطق`,
        'addressLocality': currentCity.addressLocalityAr,
        'addressRegion': 'منطقة مكة المكرمة',
        'addressCountry': 'SA'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': currentCity.geo.latitude,
        'longitude': currentCity.geo.longitude
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
        'name': language === 'ar' ? `خدمات مسك كلين في ${currentCity.nameAr}` : `Mesk Clean Services in ${currentCity.nameEn}`,
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

    // 6. Schema.org FAQPage JSON-LD
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
    let websiteScript = document.getElementById('schema-website');
    if (!websiteScript) {
      websiteScript = document.createElement('script');
      websiteScript.id = 'schema-website';
      websiteScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(websiteScript);
    }
    websiteScript.textContent = JSON.stringify(websiteSchema);

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
  }, [language, customTitle, customDescription, currentCity, currentCityId, isCityRoute]);

  return null;
};
