import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Conejo Valley Barber | Traditional Barbershop",
    template: "%s | Conejo Valley Barber",
  },
  description: "Traditional barbershop in Thousand Oaks, CA. Expert haircuts, fades, beard trims, and straight razor shaves. Serving the Conejo Valley since 2015.",
  keywords: ["barber", "barbershop", "haircut", "Thousand Oaks", "Conejo Valley", "fade", "beard trim", "straight razor shave"],
  openGraph: {
    title: "Conejo Valley Barber | Traditional Barbershop",
    description: "Traditional barbershop in Thousand Oaks, CA. Expert haircuts, fades, beard trims, and straight razor shaves.",
    url: "https://conejovalleybarber.com",
    siteName: "Conejo Valley Barber",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Conejo Valley Barber | Traditional Barbershop",
    description: "Traditional barbershop in Thousand Oaks, CA. Expert haircuts, fades, beard trims, and straight razor shaves.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BarberShop",
              "name": "Conejo Valley Barber",
              "description": "Traditional barbershop offering expert haircuts, fades, beard trims, and straight razor shaves in Thousand Oaks, CA.",
              "url": "https://conejovalleybarber.com",
              "telephone": "+1-805-719-7522",
              "email": "info@conejovalleybarber.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "60 Houston Dr",
                "addressLocality": "Thousand Oaks",
                "addressRegion": "CA",
                "postalCode": "91360",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 34.1808,
                "longitude": -118.8756
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "10:00",
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "17:00"
                }
              ],
              "priceRange": "$$",
              "image": "https://conejovalleybarber.com/og-image.jpg"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
