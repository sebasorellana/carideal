import type { Metadata } from "next";
import { PrimaryLink } from "@/components/forms/PrimaryLink";
import { ScreenIntro } from "@/components/layout/ScreenIntro";
import layoutStyles from "@/components/layout/screen-layout.module.css";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className={layoutStyles.page}>
      <section
        aria-labelledby="not-found-title"
        className={layoutStyles.content}
      >
        <ScreenIntro title="Página no encontrada" titleId="not-found-title">
          El enlace que seguiste no existe o ya no está disponible.
        </ScreenIntro>

        <PrimaryLink href="/car-list" shape="pill">
          Ir a explorar autos
        </PrimaryLink>
      </section>
    </main>
  );
}
