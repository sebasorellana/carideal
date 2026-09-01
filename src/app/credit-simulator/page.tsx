import type { Metadata } from "next";
import { CreditSimulatorContent } from "./CreditSimulatorContent";

export const metadata: Metadata = {
  title: "Simulación de crédito",
  description: "Simula el enganche, plazo y mensualidad de tu financiamiento.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function CreditSimulatorPage() {
  return <CreditSimulatorContent />;
}
