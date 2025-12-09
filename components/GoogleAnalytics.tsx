import React, { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

interface GoogleAnalyticsProps {
  gaId: string;
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ gaId }) => {
  useEffect(() => {
    // Prevent loading if no ID or placeholder
    if (!gaId || gaId === 'G-XXXXXXXXXX') return;

    const scriptUrl = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;

    // Avoid adding script twice
    if (document.querySelector(`script[src="${scriptUrl}"]`)) return;

    const script = document.createElement('script');
    script.src = scriptUrl;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', gaId);
  }, [gaId]);

  return null;
};

export default GoogleAnalytics;