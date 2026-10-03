declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

// Track custom conversion events for Google Analytics 4 & Meta Pixel
export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, params);
    }
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: eventName,
        ...params,
      });
    }
  } catch (err) {
    console.warn('Analytics event tracking error:', err);
  }
};

export const trackWhatsAppClick = (source: string, service?: string) => {
  trackEvent('whatsapp_click', {
    event_category: 'Conversion',
    event_label: source,
    service: service || 'General',
  });
};

export const trackPhoneClick = (source: string) => {
  trackEvent('phone_click', {
    event_category: 'Conversion',
    event_label: source,
  });
};

export const trackBookingSubmit = (serviceName: string, city: string) => {
  trackEvent('booking_submit', {
    event_category: 'Conversion',
    service_name: serviceName,
    city: city,
  });
};
