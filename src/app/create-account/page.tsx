import type { Metadata } from "next";
import { AgreementField } from "@/components/forms/AgreementField";
import { FormField } from "@/components/forms/FormField";
import { PrimaryLink } from "@/components/forms/PrimaryLink";
import { ScreenIntro } from "@/components/layout/ScreenIntro";
import layoutStyles from "@/components/layout/screen-layout.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Crear cuenta",
  description:
    "Crea tu cuenta en Carideal y comienza a buscar el seminuevo ideal para ti.",
  alternates: {
    canonical: "/create-account",
  },
};

export default function CreateAccountPage() {
  return (
    <main className={layoutStyles.page}>
      <section
        className={layoutStyles.content}
        aria-labelledby="create-account-title"
      >
        <ScreenIntro title="Crear cuenta" titleId="create-account-title">
          Completa tus datos para
          <br />
          comenzar.
        </ScreenIntro>

        <form className={styles.form} aria-label="Crear cuenta">
          <div className={styles.fields}>
            <FormField
              autoComplete="given-name"
              id="first-name"
              label="Nombre"
              name="firstName"
              type="text"
            />
            <FormField
              autoComplete="family-name"
              id="last-name"
              label="Apellido"
              name="lastName"
              type="text"
            />
            <FormField
              autoComplete="email"
              id="email"
              label="Email"
              name="email"
              type="email"
            />
          </div>

          <div className={styles.actions}>
            <AgreementField id="terms-accepted" />
            <PrimaryLink href="/welcome-location" shape="pill">
              Crear cuenta
            </PrimaryLink>
          </div>
        </form>
      </section>
    </main>
  );
}
