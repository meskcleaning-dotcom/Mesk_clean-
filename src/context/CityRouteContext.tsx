import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { CityData, CITIES_DATA } from '../data/citiesDistricts';

export type CityId = 'jeddah' | 'makkah' | 'rabigh';

interface CityRouteContextType {
  currentCityId: CityId;
  currentCity: CityData;
  pathname: string;
  navigateToCity: (cityId: CityId, sectionId?: string) => void;
  isCityRoute: boolean;
}

const CityRouteContext = createContext<CityRouteContextType | undefined>(undefined);

export const extractCityFromLocation = (): { cityId: CityId; isCityRoute: boolean } => {
  if (typeof window === 'undefined') {
    return { cityId: 'jeddah', isCityRoute: false };
  }

  const rawPath = window.location.pathname || '';
  const rawHash = window.location.hash || '';
  const rawSearch = window.location.search || '';
  const rawHref = window.location.href || '';

  let decodedPath = '';
  let decodedHash = '';
  let decodedSearch = '';
  let decodedHref = '';

  try {
    decodedPath = decodeURIComponent(rawPath).toLowerCase();
    decodedHash = decodeURIComponent(rawHash).toLowerCase();
    decodedSearch = decodeURIComponent(rawSearch).toLowerCase();
    decodedHref = decodeURIComponent(rawHref).toLowerCase();
  } catch {
    decodedPath = rawPath.toLowerCase();
    decodedHash = rawHash.toLowerCase();
    decodedSearch = rawSearch.toLowerCase();
    decodedHref = rawHref.toLowerCase();
  }

  const combined = `${decodedPath} ${decodedHash} ${decodedSearch} ${decodedHref}`;

  // 1. Check for Rabigh
  if (
    combined.includes('rabigh') ||
    combined.includes('رابغ')
  ) {
    try {
      localStorage.setItem('mesk_selected_city', 'rabigh');
    } catch {}
    return { cityId: 'rabigh', isCityRoute: true };
  }

  // 2. Check for Makkah / Mecca
  if (
    combined.includes('makkah') ||
    combined.includes('mecca') ||
    combined.includes('مكة')
  ) {
    try {
      localStorage.setItem('mesk_selected_city', 'makkah');
    } catch {}
    return { cityId: 'makkah', isCityRoute: true };
  }

  // 3. Check for Jeddah
  if (
    combined.includes('jeddah') ||
    combined.includes('جدة')
  ) {
    try {
      localStorage.setItem('mesk_selected_city', 'jeddah');
    } catch {}
    return { cityId: 'jeddah', isCityRoute: true };
  }

  // 4. Check if saved previously in localStorage
  try {
    const saved = localStorage.getItem('mesk_selected_city') as CityId;
    if (saved && ['jeddah', 'makkah', 'rabigh'].includes(saved)) {
      return { cityId: saved, isCityRoute: false };
    }
  } catch {}

  return { cityId: 'jeddah', isCityRoute: false };
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

  const updateCityFromUrl = useCallback(() => {
    const { cityId, isCityRoute: matchesRoute } = extractCityFromLocation();
    if (typeof window !== 'undefined') {
      setPathname(window.location.pathname);
    }
    setCurrentCityId(cityId);
    setIsCityRoute(matchesRoute);
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

      window.history.pushState({ cityId }, '', targetPath);
      setPathname(`/${cityId}`);
      setCurrentCityId(cityId);
      setIsCityRoute(true);

      // Dispatch custom event for immediate sync
      window.dispatchEvent(new CustomEvent('mesk_city_change', { detail: { cityId } }));

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

  const currentCity = CITIES_DATA[currentCityId] || CITIES_DATA.jeddah;

  return (
    <CityRouteContext.Provider
      value={{
        currentCityId,
        currentCity,
        pathname,
        navigateToCity,
        isCityRoute,
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
