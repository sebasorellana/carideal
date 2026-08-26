import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PrimaryLink } from "@/components/forms/PrimaryLink";
import { ScreenIntro } from "@/components/layout/ScreenIntro";
import layoutStyles from "@/components/layout/screen-layout.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Activa tu ubicación",
  description:
    "Configura tu ubicación para encontrar seminuevos disponibles cerca de ti.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function WelcomeLocationPage() {
  return (
    <main className={`${layoutStyles.page} ${styles.page}`}>
      <section
        className={layoutStyles.content}
        aria-labelledby="welcome-title"
      >
        <ScreenIntro
          title="Bienvenido"
          titleId="welcome-title"
        >
          El camino es tuyo,
          <br />
          el respaldo es nuestro
        </ScreenIntro>

        <div className={styles.locationCard}>
          <Image
            alt="Símbolo de ubicación"
            className={styles.locationSymbol}
            height={348}
            src="/images/welcome-location/location-symbol.webp"
            width={348}
          />

          <h2 className={styles.cardTitle}>Activa tu ubicación</h2>
          <p className={styles.description}>
            Permítenos conocer tu ubicación para mostrarte los seminuevos
            disponibles cerca de ti.
          </p>

          <div className={styles.actions}>
            <PrimaryLink href="/onboarding-first-setup" shape="pill">
              Permitir ubicación
            </PrimaryLink>
            <Link className={styles.skipButton} href="/onboarding-first-setup">
              Omitir
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
