import type { Metadata } from "next";
import Image from "next/image";
import { FormField } from "@/components/forms/FormField";
import { PrimaryLink } from "@/components/forms/PrimaryLink";
import { RangeSlider } from "@/components/forms/RangeSlider";
import { ScreenIntro } from "@/components/layout/ScreenIntro";
import layoutStyles from "@/components/layout/screen-layout.module.css";
import { BorderedPanel } from "@/components/ui/BorderedPanel";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Encontremos tu próximo auto",
  description:
    "Configura tus preferencias de modelo, año, kilometraje y mensualidad.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function OnboardingFirstSetupPage() {
  return (
    <main className={`${layoutStyles.page} ${styles.page}`}>
      <section
        className={layoutStyles.content}
        aria-labelledby="onboarding-title"
      >
        <div className={styles.helpRow}>
          <Image
            alt="Ayuda"
            className={styles.helpIcon}
            height={172}
            src="/images/onboarding-first-setup/help-icon.webp"
            width={172}
          />
        </div>

        <ScreenIntro
          accent={false}
          title={
            <>
              Encontremos
              <br />
              tu próximo auto
            </>
          }
          titleId="onboarding-title"
        >
          Cuéntanos qué estás buscando.
        </ScreenIntro>

        <form className={styles.form} aria-label="Preferencias del automóvil">
          <BorderedPanel>
            <FormField
              id="desired-model"
              label="Marca y modelo deseado"
              name="desiredModel"
              placeholder="Nissan Sentra"
              size="compact"
              type="text"
            />
          </BorderedPanel>

          <BorderedPanel>
            <RangeSlider
              label="Rango de año del automóvil"
              maximum={2025}
              minimum={2020}
              name="year"
            />
          </BorderedPanel>

          <BorderedPanel>
            <RangeSlider
              format="kilometers"
              label="Kilometraje deseado"
              maximum={125000}
              minimum={0}
              name="mileage"
              step={5000}
            />
          </BorderedPanel>

          <BorderedPanel>
            <RangeSlider
              format="currency"
              label="Mensualidad deseada"
              maximum={8000}
              minimum={2000}
              name="monthlyPayment"
              step={500}
            />
          </BorderedPanel>

          <div className={styles.submit}>
            <PrimaryLink href="/car-list" shape="pill">
              Buscar autos
            </PrimaryLink>
          </div>
        </form>
      </section>
    </main>
  );
}
