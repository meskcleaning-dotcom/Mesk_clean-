import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { CityData, CITIES_DATA } from '../data/citiesDistricts';
import { CENTRAL_CITIES } from '../data/centralDirectory';

export type CityId = 'jeddah' | 'makkah' | 'rabigh' | 'khulais';

export const SERVICE_SLUG_MAP: Record<string, string> = {
  'homes': 'homes',
  'تنظيف-المنازل': 'homes',
  'تنظيف-منازل': 'homes',
  'villas': 'villas',
  'تنظيف-الفلل': 'villas',
  'تنظيف-فلل': 'villas',
  'bird-netting': 'bird-netting',
  'تركيب-شبك-حمام': 'bird-netting',
  'تركيب-شبك-حمام-أو-طارد-حمام': 'bird-netting',
  'طارد-حمام': 'bird-netting',
  'شبك-حمام': 'bird-netting',
  'offices': 'offices',
  'تنظيف-المكاتب': 'offices',
  'تنظيف-مكاتب': 'offices',
  'sofas': 'sofas',
  'تنظيف-الكنب': 'sofas',
  'تنظيف-الكنب-بالبخار': 'sofas',
  'carpets': 'carpets',
  'تنظيف-السجاد': 'carpets',
  'تنظيف-السجاد-والموكيت': 'carpets',
  'rodents-reptiles': 'rodents-reptiles',
  'rodents': 'rodents-reptiles',
  'مكافحة-القوارض': 'rodents-reptiles',
  'مكافحة-الزواحف': 'rodents-reptiles',
  'مكافحة-القوارض-والزواحف': 'rodents-reptiles',
  'kitchens': 'kitchens',
  'تنظيف-المطابخ': 'kitchens',
  'تنظيف-مطابخ': 'kitchens',
  'ac': 'ac',
  'غسيل-المكيفات': 'ac',
  'تنظيف-المكيفات': 'ac',
  'tanks': 'tanks',
  'تنظيف-الخزانات': 'tanks',
  'تنظيف-وعزل-الخزانات': 'tanks',
  'عزل-الخزانات': 'tanks',
  'pest': 'pest',
  'pest-control': 'pest',
  'مكافحة-الحشرات': 'pest',
  'رش-مبيدات': 'pest',
};

interface CityRouteContextType {
  currentCityId: CityId;
  currentCity: CityData;
  pathname: string;
  navigateToCity: (cityId: CityId, sectionId?: string) => void;
  isCityRoute: boolean;
  currentServiceId: string | null;
  navigateToService: (cityId: CityId, serviceId: string) => void;
}

const CityRouteContext = createContext<CityRouteContextType | undefined>(undefined);

export const extractCityFromLocation = (): { cityId: CityId; isCityRoute: boolean; serviceId: string | null } => {
  if (typeof window === 'undefined') {
    return { cityId: 'jeddah', isCityRoute: false, serviceId: null };
  }

  const rawPath = window.location.pathname || '';
  const rawHash = window.location.hash || '';
  const rawSearch = window.location.search || '';
  const rawHref = window.location.href || '';

  let decodedPath = '';
  let decodedHash = '';

  try {
    decodedPath = decodeURIComponent(rawPath).toLowerCase();
    decodedHash = decodeURIComponent(rawHash).toLowerCase();
  } catch {
    decodedPath = rawPath.toLowerCase();
    decodedHash = rawHash.toLowerCase();
  }

  const combined = `${decodedPath} ${decodedHash} ${decodeURIComponent(rawSearch).toLowerCase()} ${decodeURIComponent(rawHref).toLowerCase()}`;

  // 0. If route is /m or /m/*, immediately redirect to /jeddah
  if (decodedPath === '/m' || decodedPath === '/m/' || decodedPath.startsWith('/m/')) {
    try {
      window.location.replace('/jeddah');
    } catch {}
    return { cityId: 'jeddah', isCityRoute: true, serviceId: null };
  }

  // 1. Check for service subpage route e.g. /(city)/services/(slug)
  const cityIdsPattern = CENTRAL_CITIES.map((c) => c.id).join('|');
  const serviceRegex = new RegExp(`(${cityIdsPattern})\\/services\\/([a-z0-9\\u0600-\\u06FF\\-_]+)`, 'i');
  const match = combined.match(serviceRegex);

  if (match) {
    const rawCity = match[1].toLowerCase() as CityId;
    const rawSlug = match[2].toLowerCase();
    const resolvedServiceId = SERVICE_SLUG_MAP[rawSlug] || rawSlug;

    try {
      localStorage.setItem('mesk_selected_city', rawCity);
    } catch {}

    return {
      cityId: rawCity,
      isCityRoute: true,
      serviceId: resolvedServiceId,
    };
  }

  // 2. Check for city roots from centralized cities
  for (const city of CENTRAL_CITIES) {
    if (
      combined.includes(city.id) ||
      combined.includes(city.nameAr) ||
      (city.shortNameAr && combined.includes(city.shortNameAr)) ||
      combined.includes(city.nameEn.toLowerCase())
    ) {
      try {
        localStorage.setItem('mesk_selected_city', city.id);
      } catch {}
      return { cityId: city.id as CityId, isCityRoute: true, serviceId: null };
    }
  }

  // 3. Check if saved previously in localStorage
  try {
    const saved = localStorage.getItem('mesk_selected_city') as CityId;
    const validCityIds = CENTRAL_CITIES.map((c) => c.id);
    if (saved && validCityIds.includes(saved as any)) {
      return { cityId: saved, isCityRoute: false, serviceId: null };
    }
  } catch {}

  return { cityId: 'jeddah', isCityRoute: false, serviceId: null };
};

export const CityRouteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pathname, setPathname] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  });

  const [currentCityId, setCurrentCityId] = useState<CityId>(() => {
    return extractCityFromLocation().cityId;
  });

  const [isCityRoute, setIsCityRoute] = useState<boolean>(() => {
    return extractCityFromLocation().isCityRoute;
  });

  const [currentServiceId, setCurrentServiceId] = useState<string | null>(() => {
    return extractCityFromLocation().serviceId;
  });

  const updateCityFromUrl = useCallback(() => {
    const { cityId, isCityRoute: matchesRoute, serviceId } = extractCityFromLocation();
    if (typeof window !== 'undefined') {
      setPathname(window.location.pathname);
    }
    setCurrentCityId(cityId);
    setIsCityRoute(matchesRoute);
    setCurrentServiceId(serviceId);
  }, []);

  useEffect(() => {
    updateCityFromUrl();

    const handleLocationChange = () => {
      updateCityFromUrl();
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('mesk_city_change', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('mesk_city_change', handleLocationChange);
    };
  }, [updateCityFromUrl]);

  const navigateToCity = useCallback((cityId: CityId, sectionId?: string) => {
    const targetPath = `/${cityId}${sectionId ? `#${sectionId.replace(/^#/, '')}` : ''}`;
    
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('mesk_selected_city', cityId);
      } catch {}

      window.history.pushState({ cityId, serviceId: null }, '', targetPath);
      setPathname(`/${cityId}`);
      setCurrentCityId(cityId);
      setCurrentServiceId(null);
      setIsCityRoute(true);

      window.dispatchEvent(new CustomEvent('mesk_city_change', { detail: { cityId, serviceId: null } }));

      if (sectionId) {
        const cleanId = sectionId.replace(/^#/, '');
        const targetElement = document.getElementById(cleanId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, []);

  const navigateToService = useCallback((cityId: CityId, serviceId: string) => {
    const targetPath = `/${cityId}/services/${serviceId}`;

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('mesk_selected_city', cityId);
      } catch {}

      window.history.pushState({ cityId, serviceId }, '', targetPath);
      setPathname(targetPath);
      setCurrentCityId(cityId);
      setCurrentServiceId(serviceId);
      setIsCityRoute(true);

      window.dispatchEvent(new CustomEvent('mesk_city_change', { detail: { cityId, serviceId } }));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const currentCity = CITIES_DATA[currentCityId] || CITIES_DATA.jeddah;

  return (
    <CityRouteContext.Provider
      value={{
        currentCityId,
        currentCity,
        pathname,
        navigateToCity,
        isCityRoute,
        currentServiceId,
        navigateToService,
      }}
    >
      {children}
    </CityRouteContext.Provider>
  );
};

export const useCityRoute = () => {
  const context = useContext(CityRouteContext);
  if (!context) {
    throw new Error('useCityRoute must be used within a CityRouteProvider');
  }
  return context;
};
