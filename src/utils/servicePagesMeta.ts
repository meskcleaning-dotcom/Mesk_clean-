import { CityId } from '../context/CityRouteContext';
import { TANKS_CITIES_CONTENT } from '../data/tanksCleaningCitiesContent';
import { HOME_CLEANING_CITIES_CONTENT } from '../data/homeCleaningCitiesContent';
import {
  CENTRAL_CITIES,
  CENTRAL_SERVICES,
  CITIES_ID_LIST,
  SERVICES_ID_LIST,
  getCentralCity,
  generateServiceCityTitle,
  generateServiceCityDescription,
  generateSitemapXml as centralGenerateSitemapXml,
  MAIN_PHONE,
  INTL_PHONE,
  BRAND_NAME_AR,
  BASE_URL
} from '../data/centralDirectory';

export interface ServicePageMetadata {
  cityId: CityId;
  serviceId: string;
  urlPath: string;
  canonical: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
}

export const CITIES_LIST: CityId[] = CITIES_ID_LIST as CityId[];
export const SERVICES_LIST: string[] = SERVICES_ID_LIST;

export function getServicePageMetadata(cityId: CityId, serviceId: string): ServicePageMetadata {
  if (serviceId === 'tanks' && TANKS_CITIES_CONTENT[cityId]) {
    const tank = TANKS_CITIES_CONTENT[cityId];
    return {
      cityId,
      serviceId,
      urlPath: `/${cityId}/services/${serviceId}`,
      canonical: tank.canonicalPath,
      title: tank.metaTitle,
      description: tank.metaDescription,
      ogTitle: tank.metaTitle,
      ogDescription: tank.metaDescription,
      ogUrl: tank.canonicalPath
    };
  }

  if (serviceId === 'homes' && HOME_CLEANING_CITIES_CONTENT[cityId]) {
    const home = HOME_CLEANING_CITIES_CONTENT[cityId];
    return {
      cityId,
      serviceId,
      urlPath: `/${cityId}/services/${serviceId}`,
      canonical: home.canonicalPath,
      title: home.metaTitle,
      description: home.metaDescription,
      ogTitle: home.metaTitle,
      ogDescription: home.metaDescription,
      ogUrl: home.canonicalPath
    };
  }

  // Use centralized automatic generation
  const title = generateServiceCityTitle(serviceId, cityId, 'ar');
  const description = generateServiceCityDescription(serviceId, cityId, 'ar');
  const canonical = `${BASE_URL}/${cityId}/services/${serviceId}`;

  return {
    cityId,
    serviceId,
    urlPath: `/${cityId}/services/${serviceId}`,
    canonical,
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogUrl: canonical
  };
}

export function getAllServicePagesMetadata(): ServicePageMetadata[] {
  const result: ServicePageMetadata[] = [];
  for (const cityId of CITIES_LIST) {
    for (const serviceId of SERVICES_LIST) {
      result.push(getServicePageMetadata(cityId, serviceId));
    }
  }
  return result;
}

export function injectServiceMetaIntoHtml(html: string, meta: ServicePageMetadata): string {
  let out = html;
  const centralCity = getCentralCity(meta.cityId);

  // 1. Title
  out = out.replace(/<title>[\s\S]*?<\/title>/i, `<title>${meta.title}</title>`);

  // 2. Meta description
  out = out.replace(
    /<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta name="description" content="${meta.description}" />`
  );

  // 2.1 Service-specific Meta keywords (prevents mixing services)
  if (meta.serviceId === 'homes') {
    const homeKeywordsMap: Record<CityId, string> = {
      jeddah: 'تنظيف منازل, شركة تنظيف منازل, تنظيف شقق, شركة تنظيف شقق, تنظيف بيوت, شركة تنظيف بيوت, شركة تنظيف, نظافة منازل, خدمة تنظيف المنازل, تنظيف منازل في جدة, شركة تنظيف منازل بجدة, تنظيف شقق بجدة, تنظيف بيوت بجدة',
      makkah: 'شركة تنظيف منازل, تنظيف منازل, تنظيف شقق, شركة تنظيف شقق, تنظيف بيوت, شركة تنظيف بيوت, شركة تنظيف, خدمة تنظيف المنازل, شركة تنظيف منازل بمكة, تنظيف منازل في مكة, تنظيف شقق بمكة, تنظيف بيوت بمكة',
      rabigh: 'تنظيف منازل, شركة تنظيف منازل, تنظيف بيوت, تنظيف شقق, شركة تنظيف, شركة نظافة, نظافة منازل, خدمة تنظيف المنازل, تنظيف منازل في رابغ, شركة تنظيف منازل برابغ, تنظيف شقق برابغ, تنظيف بيوت برابغ',
      khulais: 'تنظيف منازل, شركة تنظيف منازل, تنظيف شقق, تنظيف بيوت, خدمة تنظيف المنازل, شركة تنظيف, تنظيف منازل في خليص, شركة تنظيف منازل بخليص, تنظيف شقق بخليص, تنظيف بيوت بخليص'
    };
    const kw = homeKeywordsMap[meta.cityId] || '';
    if (kw) {
      out = out.replace(
        /<meta\s+name=["']keywords["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
        `<meta name="keywords" content="${kw}" />`
      );
    }
  } else if (meta.serviceId === 'tanks') {
    const tankKeywordsMap: Record<CityId, string> = {
      jeddah: 'تنظيف خزانات, عزل خزانات, شركة تنظيف خزانات, تنظيف خزانات المياه, عزل خزانات المياه, غسيل خزانات, تنظيف الخزان الأرضي, تنظيف خزانات في جدة, شركة تنظيف خزانات بجدة, عزل خزانات بجدة',
      makkah: 'تنظيف خزانات, عزل خزانات, شركة تنظيف خزانات, تنظيف خزانات المياه, عزل خزانات المياه, غسيل خزانات, تنظيف الخزان الأرضي, تنظيف خزانات في مكة, شركة تنظيف خزانات بمكة, عزل خزانات بمكة',
      rabigh: 'تنظيف خزانات, عزل خزانات, شركة تنظيف خزانات, تنظيف خزانات المياه, عزل خزانات المياه, غسيل خزانات, تنظيف الخزان الأرضي, تنظيف خزانات في رابغ, شركة تنظيف خزانات برابغ, عزل خزانات برابغ',
      khulais: 'تنظيف خزانات, عزل خزانات, شركة تنظيف خزانات, تنظيف خزانات المياه, عزل خزانات المياه, غسيل خزانات, تنظيف الخزان الأرضي, تنظيف خزانات في خليص, شركة تنظيف خزانات بخليص, عزل خزانات بخليص'
    };
    const kw = tankKeywordsMap[meta.cityId] || '';
    if (kw) {
      out = out.replace(
        /<meta\s+name=["']keywords["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
        `<meta name="keywords" content="${kw}" />`
      );
    }
  }

  // 3. Canonical link
  out = out.replace(
    /<link\s+rel=["']canonical["']\s+href=["'][\s\S]*?["']\s*\/?>/i,
    `<link rel="canonical" href="${meta.canonical}" />`
  );

  // 4. OpenGraph site_name
  out = out.replace(
    /<meta\s+property=["']og:site_name["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:site_name" content="${BRAND_NAME_AR}" />`
  );

  // 5. OpenGraph title
  out = out.replace(
    /<meta\s+property=["']og:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:title" content="${meta.ogTitle}" />`
  );

  // 6. OpenGraph description
  out = out.replace(
    /<meta\s+property=["']og:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:description" content="${meta.ogDescription}" />`
  );

  // 7. OpenGraph url
  out = out.replace(
    /<meta\s+property=["']og:url["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:url" content="${meta.ogUrl}" />`
  );

  // 8. Twitter title
  out = out.replace(
    /<meta\s+name=["']twitter:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta name="twitter:title" content="${meta.ogTitle}" />`
  );

  // 9. Twitter description
  out = out.replace(
    /<meta\s+name=["']twitter:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta name="twitter:description" content="${meta.ogDescription}" />`
  );

  // 10. Service & Breadcrumb JSON-LD Structured Data
  const isTanks = meta.serviceId === 'tanks' && Boolean(TANKS_CITIES_CONTENT[meta.cityId]);
  const tankData = isTanks ? TANKS_CITIES_CONTENT[meta.cityId] : null;

  const isHomes = meta.serviceId === 'homes' && Boolean(HOME_CLEANING_CITIES_CONTENT[meta.cityId]);
  const homeData = isHomes ? HOME_CLEANING_CITIES_CONTENT[meta.cityId] : null;

  let serviceJsonLd: any;

  if (isTanks && tankData) {
    const cityName = centralCity.nameAr;
    const citySchema = {
      '@type': 'City',
      name: centralCity.nameAr,
      alternateName: centralCity.nameEn
    };

    serviceJsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${BASE_URL}/#website`,
          'url': `${BASE_URL}/`,
          'name': BRAND_NAME_AR,
          'alternateName': 'شركة مسك كلين'
        },
        {
          '@type': 'Service',
          '@id': `${meta.canonical}#service-cleaning`,
          'name': `تنظيف خزانات المياه في ${cityName}`,
          'serviceType': 'تنظيف خزانات',
          'description': `خدمات تنظيف وغسيل خزانات المياه الأرضية والعلوية في ${cityName} من مسك كلين`,
          'url': meta.canonical,
          'provider': {
            '@type': 'LocalBusiness',
            'name': BRAND_NAME_AR,
            'telephone': INTL_PHONE,
            'url': `${BASE_URL}/`,
            'image': `${BASE_URL}/assets/mesk-clean-official-logo.png`,
            'areaServed': citySchema
          },
          'areaServed': citySchema
        },
        {
          '@type': 'Service',
          '@id': `${meta.canonical}#service-insulation`,
          'name': `عزل خزانات المياه في ${cityName}`,
          'serviceType': 'عزل خزانات',
          'description': `أعمال عزل خزانات المياه الأرضية والعلوية ومعالجة التسربات في ${cityName} بضمان 10 سنوات على أعمال العزل من مسك كلين`,
          'url': meta.canonical,
          'provider': {
            '@type': 'LocalBusiness',
            'name': BRAND_NAME_AR,
            'telephone': INTL_PHONE,
            'url': `${BASE_URL}/`,
            'image': `${BASE_URL}/assets/mesk-clean-official-logo.png`,
            'areaServed': citySchema
          },
          'areaServed': citySchema
        },
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'الرئيسية',
              'item': `${BASE_URL}/`
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': centralCity.nameAr,
              'item': `${BASE_URL}/${meta.cityId}`
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': meta.title,
              'item': meta.canonical
            }
          ]
        },
        {
          '@type': 'FAQPage',
          'mainEntity': tankData.faqs.map((faq) => ({
            '@type': 'Question',
            'name': faq.q,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': faq.a
            }
          }))
        }
      ]
    };
  } else if (isHomes && homeData) {
    const citySchema = {
      '@type': 'City',
      name: centralCity.nameAr,
      alternateName: centralCity.nameEn
    };

    serviceJsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${BASE_URL}/#website`,
          'url': `${BASE_URL}/`,
          'name': BRAND_NAME_AR,
          'alternateName': 'شركة مسك كلين'
        },
        {
          '@type': 'Service',
          '@id': `${meta.canonical}#service`,
          'name': homeData.h1Title,
          'serviceType': 'تنظيف منازل وشقق وبيوت',
          'description': meta.description,
          'url': meta.canonical,
          'provider': {
            '@type': 'LocalBusiness',
            'name': BRAND_NAME_AR,
            'telephone': INTL_PHONE,
            'url': `${BASE_URL}/`,
            'image': `${BASE_URL}/assets/mesk-clean-official-logo.png`,
            'areaServed': citySchema
          },
          'areaServed': citySchema
        },
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'الرئيسية',
              'item': `${BASE_URL}/`
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': centralCity.nameAr,
              'item': `${BASE_URL}/${meta.cityId}`
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': homeData.h1Title,
              'item': meta.canonical
            }
          ]
        },
        {
          '@type': 'FAQPage',
          'mainEntity': homeData.faqs.map((faq) => ({
            '@type': 'Question',
            'name': faq.q,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': faq.a
            }
          }))
        }
      ]
    };
  } else {
    serviceJsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${BASE_URL}/#website`,
          'url': `${BASE_URL}/`,
          'name': BRAND_NAME_AR,
          'alternateName': 'شركة مسك كلين'
        },
        {
          '@type': 'Service',
          '@id': `${meta.canonical}#service`,
          'name': meta.title,
          'description': meta.description,
          'url': meta.canonical,
          'provider': {
            '@type': 'LocalBusiness',
            'name': BRAND_NAME_AR,
            'telephone': INTL_PHONE,
            'url': `${BASE_URL}/`,
            'image': `${BASE_URL}/assets/mesk-clean-official-logo.png`,
            'areaServed': CENTRAL_CITIES.map((c) => ({
              '@type': 'City',
              'name': c.nameAr,
              'alternateName': c.nameEn
            }))
          },
          'areaServed': {
            '@type': 'City',
            'name': centralCity.nameAr,
            'alternateName': centralCity.nameEn
          }
        },
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'الرئيسية',
              'item': `${BASE_URL}/`
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': centralCity.nameAr,
              'item': `${BASE_URL}/${meta.cityId}`
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': meta.title,
              'item': meta.canonical
            }
          ]
        }
      ]
    };
  }

  const schemaScriptTag = `<script type="application/ld+json">\n${JSON.stringify(serviceJsonLd, null, 2)}\n    </script>`;

  // Replace existing ld+json script in head or append it
  if (/<script\s+type=["']application\/ld\+json["']>[\s\S]*?<\/script>/i.test(out)) {
    out = out.replace(/<script\s+type=["']application\/ld\+json["']>[\s\S]*?<\/script>/i, schemaScriptTag);
  } else {
    out = out.replace('</head>', `    ${schemaScriptTag}\n  </head>`);
  }

  return out;
}

export function generateSitemapXml(): string {
  return centralGenerateSitemapXml();
}
