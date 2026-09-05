'use client';

import { useEffect, useRef } from 'react';

export default function BookingEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const ORIGIN = "https://yescrew-dashboard.vercel.app";
    
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === "yescrew:embed:booked") {
        // GA4/GTM conversion event for confirmed bookings inside the iframe.
        const dlWindow = window as unknown as { dataLayer?: Record<string, unknown>[] };
        dlWindow.dataLayer = dlWindow.dataLayer ?? [];
        dlWindow.dataLayer.push({ event: "book_appointment" });
      }
      if (e.origin !== ORIGIN || !iframeRef.current) return;
      
      const d = e.data;
      if (d && d.type === "yescrew:embed:height" && typeof d.height === "number") {
        iframeRef.current.style.height = d.height + "px";
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      id="cvb-booking"
      src="https://yescrew-dashboard.vercel.app/book/fa5963c6-78f4-4e58-8b91-ed2235231905"
      title="Book an appointment with Conejo Valley Barber"
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      style={{
        width: '100%',
        maxWidth: '520px',
        minHeight: '840px',
        border: 0,
        display: 'block',
        margin: '0 auto',
      }}
    />
  );
}
