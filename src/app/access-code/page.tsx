import type { Metadata } from "next";
import { CodeInput } from "@/components/forms/CodeInput";
import { PrimaryLink } from "@/components/forms/PrimaryLink";
import { ScreenIntro } from "@/components/layout/ScreenIntro";
import layoutStyles from "@/components/layout/screen-layout.module.css";
import styles from "./page.module.css";

const email = "mariana.torres@email.com";

export const metadata: Metadata = {
  title: "Verifica tu código",
  description:
    "Ingresa el código de acceso que enviamos a tu correo para iniciar sesión en Carideal.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function AccessCodePage() {
  return (
    <main className={layoutStyles.page}>
      <section
        className={layoutStyles.content}
        aria-labelledby="access-code-title"
      >
        <ScreenIntro
          title="Ingresa el código de acceso"
          titleId="access-code-title"
        >
          Te enviamos un correo electrónico a {email} que contiene un código
          de acceso de 6 dígitos. Ingrésalo a continuación y comienza a
          disfrutar de <strong>Carideal</strong>.
        </ScreenIntro>

        <form className={styles.form} aria-label="Verificar código de acceso">
          <CodeInput name="accessCode" />

          <div className={styles.actions}>
            <PrimaryLink href="/success-code" shape="pill">
              Verificar código
            </PrimaryLink>
            <p className={styles.resendPrompt}>
              ¿No lo has recibido aún? Es posible que el correo que te
              enviamos llegue a la bandeja de SPAM. Revísalo.
              <br />
              <button className={styles.resendButton} type="button">
                Enviar de nuevo
              </button>
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}
