/**
 * Centralized source of truth for Mesk Clean (مسك كلين)
 * Used across:
 * - Routing & City Context
 * - Service & City Pages
 * - SEO Titles & Meta Descriptions
 * - HTML Pre-rendering
 * - Sitemap.xml generation
 * - Schema.org Structured Data
 */

export const MAIN_PHONE = '0547161147';
export const INTL_PHONE = '+966547161147';
export const BRAND_NAME_AR = 'مسك كلين';
export const BRAND_NAME_EN = 'Mesk Clean';
export const BRAND_ALT_NAME_AR = 'شركة مسك كلين';
export const BASE_URL = 'https://www.meskclean.com';

export interface CentralCity {
  id: 'jeddah' | 'makkah' | 'rabigh' | 'khulais';
  slug: string;
  nameAr: string;        // Official Arabic Name (e.g. جدة, مكة المكرمة, رابغ, خليص)
  shortNameAr: string;   // Short Arabic Name for preposition compounding (e.g. جدة, مكة, رابغ, خليص)
  inCityAr: string;      // Compounded Arabic preposition (e.g. بجدة, بمكة, برابغ, بخليص)
  nameEn: string;
  inCityEn: string;
  geo: {
    latitude: number;
    longitude: number;
  };
}

export interface CentralService {
  id: string;
  slug: string;
  nameAr: string;        // Full display name
  seoNameAr: string;     // Specialized SEO service name for concise, punchy titles & meta
  nameEn: string;
  seoNameEn: string;
}

export const CENTRAL_CITIES: CentralCity[] = [
  {
    id: 'jeddah',
    slug: 'jeddah',
    nameAr: 'جدة',
    shortNameAr: 'جدة',
    inCityAr: 'بجدة',
    nameEn: 'Jeddah',
    inCityEn: 'in Jeddah',
    geo: { latitude: 21.543333, longitude: 39.172778 },
  },
  {
    id: 'makkah',
    slug: 'makkah',
    nameAr: 'مكة المكرمة',
    shortNameAr: 'مكة',
    inCityAr: 'بمكة',
    nameEn: 'Makkah',
    inCityEn: 'in Makkah',
    geo: { latitude: 21.4225, longitude: 39.8261 },
  },
  {
    id: 'rabigh',
    slug: 'rabigh',
    nameAr: 'رابغ',
    shortNameAr: 'رابغ',
    inCityAr: 'برابغ',
    nameEn: 'Rabigh',
    inCityEn: 'in Rabigh',
    geo: { latitude: 22.7986, longitude: 39.0349 },
  },
  {
    id: 'khulais',
    slug: 'khulais',
    nameAr: 'خليص',
    shortNameAr: 'خليص',
    inCityAr: 'بخليص',
    nameEn: 'Khulais',
    inCityEn: 'in Khulais',
    geo: { latitude: 22.0167, longitude: 39.3167 },
  },
];

export const CENTRAL_SERVICES: CentralService[] = [
  {
    id: 'homes',
    slug: 'homes',
    nameAr: 'تنظيف المنازل',
    seoNameAr: 'تنظيف منازل',
    nameEn: 'Home Cleaning',
    seoNameEn: 'Home Cleaning',
  },
  {
    id: 'villas',
    slug: 'villas',
    nameAr: 'تنظيف الفلل',
    seoNameAr: 'تنظيف فلل',
    nameEn: 'Villa Cleaning',
    seoNameEn: 'Villa Cleaning',
  },
  {
    id: 'bird-netting',
    slug: 'bird-netting',
    nameAr: 'تركيب شبك حمام أو طارد حمام',
    seoNameAr: 'تركيب شبك حمام',
    nameEn: 'Bird Netting & Spikes',
    seoNameEn: 'Bird Netting & Spikes',
  },
  {
    id: 'offices',
    slug: 'offices',
    nameAr: 'تنظيف المكاتب',
    seoNameAr: 'تنظيف مكاتب',
    nameEn: 'Office Cleaning',
    seoNameEn: 'Office Cleaning',
  },
  {
    id: 'sofas',
    slug: 'sofas',
    nameAr: 'تنظيف الكنب بالبخار',
    seoNameAr: 'تنظيف كنب بالبخار',
    nameEn: 'Steam Sofa Cleaning',
    seoNameEn: 'Steam Sofa Cleaning',
  },
  {
    id: 'carpets',
    slug: 'carpets',
    nameAr: 'تنظيف السجاد والموكيت',
    seoNameAr: 'تنظيف سجاد وموكيت',
    nameEn: 'Carpet & Rug Cleaning',
    seoNameEn: 'Carpet & Rug Cleaning',
  },
  {
    id: 'rodents-reptiles',
    slug: 'rodents-reptiles',
    nameAr: 'مكافحة الزواحف والقوارض',
    seoNameAr: 'مكافحة قوارض وزواحف',
    nameEn: 'Rodents & Reptiles Control',
    seoNameEn: 'Rodents & Reptiles Control',
  },
  {
    id: 'kitchens',
    slug: 'kitchens',
    nameAr: 'تنظيف المطابخ',
    seoNameAr: 'تنظيف مطابخ',
    nameEn: 'Kitchen Deep Cleaning',
    seoNameEn: 'Kitchen Deep Cleaning',
  },
  {
    id: 'ac',
    slug: 'ac',
    nameAr: 'غسيل وتنظيف المكيفات',
    seoNameAr: 'غسيل وتنظيف مكيفات',
    nameEn: 'Air Conditioner Cleaning',
    seoNameEn: 'Air Conditioner Cleaning',
  },
  {
    id: 'tanks',
    slug: 'tanks',
    nameAr: 'تنظيف وعزل الخزانات',
    seoNameAr: 'تنظيف وعزل خزانات',
    nameEn: 'Water Tank Cleaning & Insulation',
    seoNameEn: 'Water Tank Cleaning & Insulation',
  },
  {
    id: 'pest',
    slug: 'pest',
    nameAr: 'مكافحة الحشرات',
    seoNameAr: 'مكافحة حشرات',
    nameEn: 'Pest Control',
    seoNameEn: 'Pest Control',
  },
];

export const CITIES_ID_LIST = CENTRAL_CITIES.map((c) => c.id);
export const SERVICES_ID_LIST = CENTRAL_SERVICES.map((s) => s.id);

export function getCentralCity(cityId: string): CentralCity {
  const found = CENTRAL_CITIES.find((c) => c.id === cityId || c.slug === cityId);
  if (found) return found;
  // Fallback to first city
  return CENTRAL_CITIES[0];
}

export function getCentralService(serviceId: string): CentralService {
  const found = CENTRAL_SERVICES.find((s) => s.id === serviceId || s.slug === serviceId);
  if (found) return found;
  // Fallback
  return {
    id: serviceId,
    slug: serviceId,
    nameAr: serviceId,
    seoNameAr: serviceId,
    nameEn: serviceId,
    seoNameEn: serviceId,
  };
}

/**
 * 1. PAGE TITLES — IMPORTANT
 * Format: {الخدمة} ب{المدينة} | 0547161147 | مسك كلين
 * If title > 60 chars, remove ONLY: " | مسك كلين" from the end.
 * Never remove the phone number.
 * Never remove the service name.
 * Never remove the city name.
 * Do not add discounts, promotions, temporary offers, or prices.
 */
export function generateServiceCityTitle(
  serviceId: string,
  cityId: string,
  lang: 'ar' | 'en' = 'ar'
): string {
  const city = getCentralCity(cityId);
  const service = getCentralService(serviceId);

  if (lang === 'en') {
    const full = `${service.seoNameEn} ${city.inCityEn} | ${INTL_PHONE} | ${BRAND_NAME_EN}`;
    if (full.length > 60) {
      return `${service.seoNameEn} ${city.inCityEn} | ${INTL_PHONE}`;
    }
    return full;
  }

  // Format: {الخدمة} {بـالمدينة} | 0547161147 | مسك كلين
  const fullTitle = `${service.seoNameAr} ${city.inCityAr} | ${MAIN_PHONE} | ${BRAND_NAME_AR}`;
  if (fullTitle.length > 60) {
    // Remove ONLY: " | مسك كلين" from the end
    return `${service.seoNameAr} ${city.inCityAr} | ${MAIN_PHONE}`;
  }
  return fullTitle;
}

/**
 * 2. META DESCRIPTION
 * Automatically generate:
 * مسك كلين، {الخدمة} ب{المدينة} بأيدي فريق محترف وأسعار مناسبة. اتصل الآن 0547161147
 * Do not add discounts or temporary promotions.
 */
export function generateServiceCityDescription(
  serviceId: string,
  cityId: string,
  lang: 'ar' | 'en' = 'ar'
): string {
  const city = getCentralCity(cityId);
  const service = getCentralService(serviceId);

  if (lang === 'en') {
    return `${BRAND_NAME_EN}, ${service.seoNameEn} ${city.inCityEn} by a professional team at competitive prices. Call now ${INTL_PHONE}`;
  }

  return `مسك كلين، ${service.seoNameAr} ${city.inCityAr} بأيدي فريق محترف وأسعار مناسبة. اتصل الآن ${MAIN_PHONE}`;
}

/**
 * 7. STRUCTURED DATA - WebSite
 */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: BRAND_NAME_AR,
    alternateName: BRAND_ALT_NAME_AR,
    url: `${BASE_URL}/`,
  };
}

/**
 * 7. STRUCTURED DATA - LocalBusiness
 */
export function getLocalBusinessSchema(activeCityId?: string) {
  const currentCity = activeCityId ? getCentralCity(activeCityId) : CENTRAL_CITIES[0];
  const canonicalUrl = activeCityId ? `${BASE_URL}/${activeCityId}` : `${BASE_URL}/`;

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${canonicalUrl}#business`,
    name: BRAND_NAME_AR,
    telephone: INTL_PHONE,
    url: `${BASE_URL}/`,
    image: `${BASE_URL}/assets/mesk-clean-official-logo.png`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: currentCity.nameAr,
      addressRegion: 'منطقة مكة المكرمة',
      addressCountry: 'SA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: currentCity.geo.latitude,
      longitude: currentCity.geo.longitude,
    },
    areaServed: CENTRAL_CITIES.map((c) => ({
      '@type': 'City',
      name: c.nameAr,
      alternateName: c.nameEn,
    })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  };
}

/**
 * 5. SITEMAP XML GENERATOR
 * Generates /sitemap.xml automatically from centralized services & cities data.
 */
export function generateSitemapXml(): string {
  const today = new Date().toISOString().split('T')[0];

  const lines: string[] = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    '',
    '  <!-- الصفحة الرئيسية -->',
    '  <url>',
    `    <loc>${BASE_URL}/</loc>`,
    `    <lastmod>${today}</lastmod>`,
    '    <changefreq>weekly</changefreq>',
    '    <priority>1.0</priority>',
    '  </url>',
    '',
  ];

  // City pages
  lines.push('  <!-- صفحات المدن الرئيسية -->');
  for (const city of CENTRAL_CITIES) {
    lines.push('  <url>');
    lines.push(`    <loc>${BASE_URL}/${city.id}</loc>`);
    lines.push(`    <lastmod>${today}</lastmod>`);
    lines.push('    <changefreq>weekly</changefreq>');
    lines.push('    <priority>0.9</priority>');
    lines.push('  </url>');
  }
  lines.push('');

  // Service + City pages
  for (const city of CENTRAL_CITIES) {
    lines.push(`  <!-- خدمات ${city.nameAr} (${city.nameEn}) -->`);
    for (const service of CENTRAL_SERVICES) {
      lines.push(
        `  <url><loc>${BASE_URL}/${city.id}/services/${service.id}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>`
      );
    }
    lines.push('');
  }

  lines.push('</urlset>');
  lines.push('');
  return lines.join('\n');
}
