import React from 'react';
import { useCityRoute } from '../context/CityRouteContext';
import { JeddahGuideSection } from './JeddahGuideSection';
import { MakkahGuideSection } from './MakkahGuideSection';
import { RabighGuideSection } from './RabighGuideSection';
import { KhulaisGuideSection } from './KhulaisGuideSection';

export interface CityGuideSectionProps {
  cityId?: 'jeddah' | 'makkah' | 'rabigh' | 'khulais';
}

/**
 * Single unified CityGuideSection component.
 * Reads the active city from context (or prop) and renders the exact,
 * word-for-word guide content for Jeddah, Makkah, Rabigh, or Khulais
 * without altering any text, structure, or styling.
 */
export const CityGuideSection: React.FC<CityGuideSectionProps> = ({ cityId }) => {
  const { currentCityId, isCityRoute } = useCityRoute();
  const targetCityId = cityId || currentCityId;

  // Only render on city routes or when explicit cityId is provided
  if (!isCityRoute && !cityId) {
    return null;
  }

  switch (targetCityId) {
    case 'jeddah':
      return <JeddahGuideSection />;
    case 'makkah':
      return <MakkahGuideSection />;
    case 'rabigh':
      return <RabighGuideSection />;
    case 'khulais':
      return <KhulaisGuideSection />;
    default:
      return null;
  }
};
