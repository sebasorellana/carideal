import type { Metadata } from "next";
import { PlaceholderScreen } from "@/components/layout/PlaceholderScreen";

export const metadata: Metadata = {
  title: "Simular crédito",
  robots: { index: false, follow: true },
};

export default function CreditSimulatorPage() {
  return (
    <PlaceholderScreen
      description="El simulador de crédito estará disponible próximamente."
      title="Simular crédito"
      titleId="credit-simulator-title"
    />
  );
}
