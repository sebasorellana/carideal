import type { Metadata } from "next";
import { PlaceholderScreen } from "@/components/layout/PlaceholderScreen";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  robots: { index: false, follow: true },
};

export default function TermsAndConditionsPage() {
  return (
    <PlaceholderScreen
      description="El contenido de términos y condiciones estará disponible próximamente."
      title="Términos y condiciones"
      titleId="terms-title"
    />
  );
}
