const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const siteConfig = {
  description:
    "Encuentra el seminuevo ideal para ti con el respaldo de Carideal, powered by Nissan.",
  locale: "es_AR",
  name: "Carideal",
  shortName: "Carideal",
  url: new URL(configuredSiteUrl ?? "http://localhost:3000"),
  version: process.env.NEXT_PUBLIC_APP_VERSION ?? "0.0.0",
};

export function getAbsoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
