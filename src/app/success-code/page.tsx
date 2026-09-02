import type { Metadata } from "next";
import { SuccessScreen } from "@/components/layout/SuccessScreen";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Código verificado",
  description: "Tu código de acceso fue validado con éxito.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function SuccessCodePage() {
  return (
    <SuccessScreen
      actionHref="/car-list"
      actionLabel="Comenzar a navegar"
      className={styles.page}
      message={
        <>
          Ahora estás más cerca de tu semi-nuevo con <strong>Carideal</strong>
        </>
      }
      title="¡Código verificado!"
      titleId="success-code-title"
    />
  );
}
