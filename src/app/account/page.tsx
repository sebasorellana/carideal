import type { Metadata } from "next";
import { AccountContent } from "./AccountContent";

export const metadata: Metadata = {
  title: "Mi cuenta",
  description: "Gestiona tus datos personales y tu contraseña.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function AccountPage() {
  return <AccountContent />;
}
