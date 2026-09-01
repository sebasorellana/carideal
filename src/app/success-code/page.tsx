import type { Metadata } from "next";
import { SuccessScreen } from "@/components/layout/SuccessScreen";

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
      caption="A partir de ahora vas a poder disfrutar del catálogo más exclusivo de seminuevos en la palma de tu mano."
      message={
        <>
          Ahora estás más cerca de tu semi-nuevo con{" "}
          <strong>Carideal</strong>, la única agencia automotriz digital de
          México.
        </>
      }
      title="¡Código verificado!"
      titleId="success-code-title"
    />
  );
}
