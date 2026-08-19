import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/initial-screen",
    name: "Carideal — Seminuevos powered by Nissan",
    short_name: "Carideal",
    description:
      "Encuentra el seminuevo ideal para ti con el respaldo de Carideal.",
    start_url: "/initial-screen",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    lang: "es-AR",
    categories: ["automotive", "shopping"],
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
