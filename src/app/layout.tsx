import type { Metadata, Viewport } from "next";
import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-800.css";
import { NavigationShell } from "@/components/layout/NavigationShell";
import { getAbsoluteUrl, siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteConfig.url,
  applicationName: siteConfig.name,
  title: {
    default: "Carideal",
    template: "%s | Carideal",
  },
  description: siteConfig.description,
  category: "automotive",
  creator: "Carideal",
  publisher: "Carideal",
  keywords: [
    "autos seminuevos",
    "vehículos usados",
    "Nissan",
    "Carideal",
  ],
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: "Carideal — Tu próximo auto comienza aquí",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Carideal — Tu próximo auto comienza aquí",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.shortName,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  initialScale: 1,
  themeColor: "#ffffff",
  viewportFit: "cover",
  width: "device-width",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": getAbsoluteUrl("/#organization"),
      name: siteConfig.name,
      url: siteConfig.url.toString(),
      logo: getAbsoluteUrl("/logos/carideal-logo-only-color.png"),
    },
    {
      "@type": "WebSite",
      "@id": getAbsoluteUrl("/#website"),
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "es-AR",
      publisher: {
        "@id": getAbsoluteUrl("/#organization"),
      },
      url: siteConfig.url.toString(),
    },
  ],
};
const structuredDataJson = JSON.stringify(structuredData).replace(
  /</g,
  "\\u003c",
);

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>
        <NavigationShell>{children}</NavigationShell>
        <script
          dangerouslySetInnerHTML={{ __html: structuredDataJson }}
          type="application/ld+json"
        />
      </body>
    </html>
  );
}
