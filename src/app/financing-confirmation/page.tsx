import type { Metadata } from "next";
import { SuccessScreen } from "@/components/layout/SuccessScreen";

export const metadata: Metadata = {
  title: "Solicitud enviada",
  description: "Tu financiamiento será atendido en 10 minutos.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function FinancingConfirmationPage() {
  return (
    <SuccessScreen
      actionHref="/financing-pre-approval"
      actionLabel="Entendido"
      caption="Gracias por esperar"
      message="Tu financiamiento será atendido en 10 minutos."
      title="¡Felicidades!"
      titleId="financing-confirmation-title"
    />
  );
}
