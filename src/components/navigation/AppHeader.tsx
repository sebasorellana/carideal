"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { BackIcon } from "@/components/icons/BackIcon";
import { ChevronRightIcon } from "@/components/icons/ChevronRightIcon";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { DocumentIcon } from "@/components/icons/DocumentIcon";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { PrivacyIcon } from "@/components/icons/PrivacyIcon";
import styles from "./app-header.module.css";

const subscribeToDevice = () => () => undefined;

const menuLinks = [
  { href: "/create-account", label: "Mi cuenta" },
  { href: "/favorites", label: "Favoritos" },
  { href: "/car-list", label: "Explorar autos" },
  { href: "/credit-simulator", label: "Simular crédito" },
];

const legalLinks = [
  {
    href: "/terms-and-conditions",
    icon: <DocumentIcon />,
    label: "Términos y condiciones",
  },
  {
    href: "/privacy-policy",
    icon: <PrivacyIcon />,
    label: "Políticas de privacidad",
  },
];

function getIsIOSDevice() {
  const isAppleMobile = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isModernIPad =
    navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;

  return isAppleMobile || isModernIPad;
}

export function AppHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLElement>(null);
  const isIOS = useSyncExternalStore(
    subscribeToDevice,
    getIsIOSDevice,
    () => false,
  );

  useEffect(() => {
    if (!isMenuOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !menuPanelRef.current) return;

      const focusableElements = menuPanelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements.item(0);
      const lastElement = focusableElements.item(focusableElements.length - 1);

      if (!firstElement || !lastElement) return;

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    closeButtonRef.current?.focus();
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isMenuOpen]);

  function handleBack() {
    const cameFromThisApp = document.referrer
      ? new URL(document.referrer).origin === window.location.origin
      : false;

    if (cameFromThisApp) {
      router.back();
      return;
    }

    router.push("/onboarding-first-setup");
  }

  return (
    <header className={styles.header}>
      <div className={`${styles.inner} ${isIOS ? styles.ios : ""}`}>
        {isIOS && (
          <button
            aria-label="Volver"
            className={styles.backButton}
            onClick={handleBack}
            type="button"
          >
            <BackIcon />
          </button>
        )}

        <Image
          alt="Carideal"
          className={styles.logo}
          height={55}
          loading="eager"
          src="/logos/carideal-header.png"
          width={262}
        />

        <button
          aria-label="Abrir menú"
          aria-controls="app-navigation"
          aria-expanded={isMenuOpen}
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(true)}
          type="button"
        >
          <MenuIcon />
        </button>
      </div>

      <div
        aria-hidden={!isMenuOpen}
        className={`${styles.menuLayer} ${isMenuOpen ? styles.menuOpen : ""}`}
        inert={!isMenuOpen}
      >
        <button
          aria-label="Cerrar menú"
          className={styles.backdrop}
          onClick={() => setIsMenuOpen(false)}
          tabIndex={-1}
          type="button"
        />

        <aside
          aria-label="Menú principal"
          aria-modal="true"
          className={styles.menuPanel}
          id="app-navigation"
          ref={menuPanelRef}
          role="dialog"
        >
          <div className={styles.menuTop}>
            <button
              aria-label="Cerrar menú"
              className={styles.closeButton}
              onClick={() => setIsMenuOpen(false)}
              ref={closeButtonRef}
              type="button"
            >
              <CloseIcon />
            </button>
          </div>

          <nav aria-label="Navegación principal" className={styles.navigation}>
            {menuLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={`${styles.menuLink} ${isActive ? styles.activeLink : ""}`}
                  href={link.href}
                  key={link.href}
                  onNavigate={() => setIsMenuOpen(false)}
                >
                  <span>{link.label}</span>
                  <ChevronRightIcon />
                </Link>
              );
            })}
          </nav>

          <footer className={styles.menuFooter}>
            {legalLinks.map((link) => (
              <Link
                className={styles.legalLink}
                href={link.href}
                key={link.href}
                onNavigate={() => setIsMenuOpen(false)}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </footer>
        </aside>
      </div>
    </header>
  );
}
