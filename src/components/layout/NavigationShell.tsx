"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AppHeader } from "@/components/navigation/AppHeader";
import styles from "./navigation-shell.module.css";

const headerlessRoutes = new Set(["/", "/initial-screen"]);

type NavigationShellProps = {
  children: ReactNode;
};

export function NavigationShell({ children }: NavigationShellProps) {
  const pathname = usePathname();
  const normalizedPathname =
    pathname !== "/" && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

  if (headerlessRoutes.has(normalizedPathname)) {
    return <div className={styles.headerlessViewport}>{children}</div>;
  }

  return (
    <div className={styles.shell}>
      <AppHeader />
      <div className={styles.scrollArea}>{children}</div>
    </div>
  );
}
