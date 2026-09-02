import type { Metadata } from "next";
import Link from "next/link";
import { AgreementField } from "@/components/forms/AgreementField";
import { FormField } from "@/components/forms/FormField";
import { PrimaryLink } from "@/components/forms/PrimaryLink";
import { MailIcon } from "@/components/icons/MailIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { UserIcon } from "@/components/icons/UserIcon";
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
          Completa tus datos para comenzar.
        </ScreenIntro>

        <form className={styles.form} aria-label="Crear cuenta">
          <div className={styles.fields}>
            <FormField
              autoComplete="given-name"
              icon={<UserIcon />}
              id="first-name"
              label="Nombre"
              labelSpacing="tight"
              name="firstName"
              type="text"
            />
            <FormField
              autoComplete="family-name"
              icon={<UserIcon />}
              id="last-name"
              label="Apellido"
              labelSpacing="tight"
              name="lastName"
              type="text"
            />
            <FormField
              autoComplete="email"
              icon={<MailIcon />}
              id="email"
              label="Email"
              labelSpacing="tight"
              name="email"
              type="email"
            />
            <FormField
              autoComplete="tel"
              icon={<PhoneIcon />}
              id="phone"
              inputMode="tel"
              label="Celular"
              labelSpacing="tight"
              name="phone"
              placeholder="55 1234 5678"
              type="tel"
            />
          </div>

          <div className={styles.actions}>
            <div className={styles.agreements}>
              <AgreementField id="terms-accepted" />
              <AgreementField
                href="/privacy-policy"
                id="privacy-policy-accepted"
                linkLabel="Políticas de privacidad"
                prefix="Acepto las"
              />
            </div>
            <div className={styles.submitGroup}>
              <PrimaryLink href="/welcome-location" shape="pill">
                Crear cuenta
              </PrimaryLink>
              <Link className={styles.accountLink} href="/login">
                Ya tengo una cuenta
              </Link>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}
