import type { Metadata } from "next";
import { PlaceholderScreen } from "@/components/layout/PlaceholderScreen";

export const metadata: Metadata = {
  title: "Políticas de privacidad",
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <PlaceholderScreen
      description="La política de privacidad estará disponible próximamente."
      title="Políticas de privacidad"
      titleId="privacy-policy-title"
    />
  );
}
