import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { CityData, CITIES_DATA, getCityById } from '../data/citiesDistricts';

export type CityId = 'jeddah' | 'makkah' | 'rabigh';

interface CityRouteContextType {
  currentCityId: CityId;
  currentCity: CityData;
  pathname: string;
  navigateToCity: (cityId: CityId, sectionId?: string) => void;
  isCityRoute: boolean;
}

const CityRouteContext = createContext<CityRouteContextType | undefined>(undefined);

const extractCityFromPath = (path: string): { cityId: CityId; isCityRoute: boolean } => {
  const cleanPath = path.toLowerCase().replace(/^\/+|\/+$/g, '').split('?')[0].split('#')[0];
  if (cleanPath === 'makkah' || cleanPath === 'mecca') {
    return { cityId: 'makkah', isCityRoute: true };
  }
  if (cleanPath === 'rabigh') {
    return { cityId: 'rabigh', isCityRoute: true };
  }
  if (cleanPath === 'jeddah') {
    return { cityId: 'jeddah', isCityRoute: true };
  }
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
    if (typeof window !== 'undefined') {
      return extractCityFromPath(window.location.pathname).cityId;
    }
    return 'jeddah';
  });

  const [isCityRoute, setIsCityRoute] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return extractCityFromPath(window.location.pathname).isCityRoute;
    }
    return false;
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const currentPath = window.location.pathname;
      const { cityId, isCityRoute: matchesRoute } = extractCityFromPath(currentPath);
      setPathname(currentPath);
      setCurrentCityId(cityId);
      setIsCityRoute(matchesRoute);
    };

    window.addEventListener('popstate', handleLocationChange);
    // Initial sync
    handleLocationChange();

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const navigateToCity = useCallback((cityId: CityId, sectionId?: string) => {
    const targetPath = `/${cityId}${sectionId ? `#${sectionId.replace(/^#/, '')}` : ''}`;
    
    // Update browser URL without page reload
    if (typeof window !== 'undefined') {
      window.history.pushState({ cityId }, '', targetPath);
      setPathname(`/${cityId}`);
      setCurrentCityId(cityId);
      setIsCityRoute(true);

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
