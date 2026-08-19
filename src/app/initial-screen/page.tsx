import type { Metadata } from "next";
import Image from "next/image";
import { ScreenIntro } from "@/components/layout/ScreenIntro";
import layoutStyles from "@/components/layout/screen-layout.module.css";
import { InitialScreenCarousel } from "./InitialScreenCarousel";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Bienvenido",
  description:
    "Comienza tu búsqueda de autos seminuevos con Carideal, powered by Nissan.",
  alternates: {
    canonical: "/initial-screen",
  },
  openGraph: {
    type: "website",
    title: "Bienvenido a Carideal",
    description:
      "Comienza tu búsqueda de autos seminuevos con Carideal, powered by Nissan.",
    url: "/initial-screen",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bienvenido a Carideal",
    description:
      "Comienza tu búsqueda de autos seminuevos con Carideal, powered by Nissan.",
    images: ["/twitter-image"],
  },
};

export default function InitialScreenPage() {
  return (
    <main className={`${layoutStyles.page} ${styles.page}`}>
      <InitialScreenCarousel />

      <section
        className={`${layoutStyles.content} ${styles.content}`}
        aria-labelledby="initial-screen-title"
      >
        <Image
          alt="Carideal, powered by Nissan"
          className={styles.logo}
          height={139}
          loading="eager"
          src="/logos/carideal-logo-powered-by-nissan-color.png"
          width={476}
        />

        <ScreenIntro title="Bienvenido" titleId="initial-screen-title">
          El camino es tuyo,
          <br />
          el respaldo es nuestro.
        </ScreenIntro>
      </section>
    </main>
  );
}
