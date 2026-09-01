import type { Metadata } from "next";
import { SuccessScreen } from "@/components/layout/SuccessScreen";

export const metadata: Metadata = {
  title: "Financiamiento pre-aprobado",
  description: "Tu financiamiento ha sido pre-aprobado.",
  robots: {
    index: false,
    follow: true,
  },
};

const advisorPhone = "55 4643 7809";

export default function FinancingPreApprovalPage() {
  return (
    <SuccessScreen
      actionHref="/car-list"
      actionLabel="Entendido"
      caption={
        <>
          En unos minutos un asesor se contactará contigo del número{" "}
          <a href={`tel:+52${advisorPhone.replace(/\s/g, "")}`}>
            {advisorPhone}
          </a>{" "}
          para terminar tu proceso.
        </>
      }
      message={
        <>
          Tu financiamiento ha sido
          <br />
          PRE-APROBADO
        </>
      }
      title="¡Felicidades!"
      titleId="financing-pre-approval-title"
    />
  );
}
