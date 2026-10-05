import { CityId } from '../context/CityRouteContext';
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
  const serviceJsonLd = {
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
          'priceRange': '$$',
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
