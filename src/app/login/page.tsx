import type { Metadata } from "next";
import Link from "next/link";
import { FormField } from "@/components/forms/FormField";
import { PrimaryLink } from "@/components/forms/PrimaryLink";
import { MailIcon } from "@/components/icons/MailIcon";
import { ScreenIntro } from "@/components/layout/ScreenIntro";
import layoutStyles from "@/components/layout/screen-layout.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Acceder",
  description:
    "Ingresa tu correo electrónico para iniciar sesión en tu cuenta de Carideal.",
  alternates: {
    canonical: "/login",
  },
};

export default function LoginPage() {
  return (
    <main className={layoutStyles.page}>
      <section className={layoutStyles.content} aria-labelledby="login-title">
        <ScreenIntro title="Acceder" titleId="login-title">
          Bienvenido a <strong>Carideal</strong>. Ingresa tu correo electrónico
          para iniciar sesión con tu cuenta.
        </ScreenIntro>

        <form className={styles.form} aria-label="Acceder">
          <FormField
            autoComplete="email"
            hideLabel
            icon={<MailIcon />}
            id="email"
            label="Email"
            name="email"
            placeholder="Email"
            required
            type="email"
          />

          <div className={styles.actions}>
            <PrimaryLink href="/access-code" shape="pill">
              Enviar código de acceso
            </PrimaryLink>
            <p className={styles.accountPrompt}>
              ¿Aún no tienes una cuenta?{" "}
              <Link className={styles.accountLink} href="/create-account">
                Crea una ahora
              </Link>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}
