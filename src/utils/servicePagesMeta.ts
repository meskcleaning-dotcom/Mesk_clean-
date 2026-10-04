import { CityId } from '../context/CityRouteContext';
import { PEST_CITIES_CONTENT } from '../data/pestControlCitiesContent';
import { TANKS_CITIES_CONTENT } from '../data/tanksCleaningCitiesContent';
import { HOME_CLEANING_CITIES_CONTENT } from '../data/homeCleaningCitiesContent';
import { VILLAS_CITIES_CONTENT } from '../data/villasCleaningCitiesContent';
import { OFFICES_CITIES_CONTENT } from '../data/officesCleaningCitiesContent';
import { BIRD_NETTING_CITIES_CONTENT } from '../data/birdNettingCitiesContent';
import { SOFAS_CITIES_CONTENT } from '../data/sofasCleaningCitiesContent';
import { CARPETS_CITIES_CONTENT } from '../data/carpetsCleaningCitiesContent';
import { RODENTS_REPTILES_CITIES_CONTENT } from '../data/rodentsReptilesCitiesContent';
import { AC_CLEANING_CITIES_CONTENT } from '../data/acCleaningCitiesContent';
import { getCityServiceData } from '../data/cityServicesData';

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

export const CITIES_LIST: CityId[] = ['jeddah', 'makkah', 'rabigh', 'khulais'];

export const SERVICES_LIST: string[] = [
  'homes',
  'villas',
  'bird-netting',
  'offices',
  'sofas',
  'carpets',
  'rodents-reptiles',
  'kitchens',
  'ac',
  'tanks',
  'pest'
];

export function getServicePageMetadata(cityId: CityId, serviceId: string): ServicePageMetadata {
  let title = '';
  let description = '';

  if (serviceId === 'pest') {
    title = PEST_CITIES_CONTENT[cityId].metaTitle;
    description = PEST_CITIES_CONTENT[cityId].metaDescription;
  } else if (serviceId === 'tanks') {
    title = TANKS_CITIES_CONTENT[cityId].metaTitle;
    description = TANKS_CITIES_CONTENT[cityId].metaDescription;
  } else if (serviceId === 'homes') {
    title = HOME_CLEANING_CITIES_CONTENT[cityId].metaTitle;
    description = HOME_CLEANING_CITIES_CONTENT[cityId].metaDescription;
  } else if (serviceId === 'villas') {
    title = VILLAS_CITIES_CONTENT[cityId].metaTitle;
    description = VILLAS_CITIES_CONTENT[cityId].metaDescription;
  } else if (serviceId === 'offices') {
    title = OFFICES_CITIES_CONTENT[cityId].metaTitle;
    description = OFFICES_CITIES_CONTENT[cityId].metaDescription;
  } else if (serviceId === 'bird-netting') {
    title = BIRD_NETTING_CITIES_CONTENT[cityId].metaTitle;
    description = BIRD_NETTING_CITIES_CONTENT[cityId].metaDescription;
  } else if (serviceId === 'sofas') {
    title = SOFAS_CITIES_CONTENT[cityId].metaTitle;
    description = SOFAS_CITIES_CONTENT[cityId].metaDescription;
  } else if (serviceId === 'carpets') {
    title = CARPETS_CITIES_CONTENT[cityId].metaTitle;
    description = CARPETS_CITIES_CONTENT[cityId].metaDescription;
  } else if (serviceId === 'rodents-reptiles') {
    title = RODENTS_REPTILES_CITIES_CONTENT[cityId].metaTitle;
    description = RODENTS_REPTILES_CITIES_CONTENT[cityId].metaDescription;
  } else if (serviceId === 'ac') {
    title = AC_CLEANING_CITIES_CONTENT[cityId].metaTitle;
    description = AC_CLEANING_CITIES_CONTENT[cityId].metaDescription;
  } else {
    const d = getCityServiceData(serviceId, cityId);
    title = d.metaTitle;
    description = d.metaDescription;
  }

  const canonical = `https://www.meskclean.com/${cityId}/services/${serviceId}`;

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

  // 4. OpenGraph title
  out = out.replace(
    /<meta\s+property=["']og:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:title" content="${meta.ogTitle}" />`
  );

  // 5. OpenGraph description
  out = out.replace(
    /<meta\s+property=["']og:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:description" content="${meta.ogDescription}" />`
  );

  // 6. OpenGraph url
  out = out.replace(
    /<meta\s+property=["']og:url["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta property="og:url" content="${meta.ogUrl}" />`
  );

  // 7. Twitter title
  out = out.replace(
    /<meta\s+name=["']twitter:title["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta name="twitter:title" content="${meta.ogTitle}" />`
  );

  // 8. Twitter description
  out = out.replace(
    /<meta\s+name=["']twitter:description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta name="twitter:description" content="${meta.ogDescription}" />`
  );

  return out;
}
