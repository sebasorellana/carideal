"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { BackIcon } from "@/components/icons/BackIcon";
import { CalculatorIcon } from "@/components/icons/CalculatorIcon";
import { CarIcon } from "@/components/icons/CarIcon";
import { ChevronRightIcon } from "@/components/icons/ChevronRightIcon";
import { CloseIcon } from "@/components/icons/CloseIcon";
import { DocumentIcon } from "@/components/icons/DocumentIcon";
import { HeartIcon } from "@/components/icons/HeartIcon";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { PrivacyIcon } from "@/components/icons/PrivacyIcon";
import { UserIcon } from "@/components/icons/UserIcon";
import { siteConfig } from "@/config/site";
import styles from "./app-header.module.css";

const subscribeToDevice = () => () => undefined;

const menuLinks = [
  { href: "/account", icon: <UserIcon />, label: "Mi cuenta" },
  { href: "/favorites", icon: <HeartIcon />, label: "Favoritos" },
  { href: "/car-list", icon: <CarIcon />, label: "Explorar autos" },
  {
    href: "/credit-simulator",
    icon: <CalculatorIcon />,
    label: "Simular crédito",
  },
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
  const navigationDepthRef = useRef(0);
  const previousPathnameRef = useRef(pathname);

  useEffect(() => {
    if (previousPathnameRef.current !== pathname) {
      navigationDepthRef.current += 1;
      previousPathnameRef.current = pathname;
    }
  }, [pathname]);

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
    if (navigationDepthRef.current > 0) {
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

        <Link aria-label="Ir al inicio" className={styles.logoLink} href="/initial-screen">
          <Image
            alt="Carideal"
            className={styles.logo}
            height={55}
            loading="eager"
            src="/logos/carideal-header.png"
            width={262}
          />
        </Link>

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
            <div className={styles.menuBrand}>
              <Image
                alt="Carideal"
                className={styles.menuBrandMark}
                height={100}
                src="/logos/carideal-logo-only-color.png"
                width={476}
              />
            </div>
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
              const isActive =
                pathname === link.href || pathname === `${link.href}/`;

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={`${styles.menuLink} ${isActive ? styles.activeLink : ""}`}
                  href={link.href}
                  key={link.href}
                  onNavigate={() => setIsMenuOpen(false)}
                >
                  <span className={styles.menuLinkIcon}>{link.icon}</span>
                  <span className={styles.menuLinkLabel}>{link.label}</span>
                  <ChevronRightIcon />
                </Link>
              );
            })}
          </nav>

          <div className={styles.promoCard}>
            <Image
              alt=""
              className={styles.promoImage}
              fill
              sizes="(max-width: 400px) 70vw, 280px"
              src="/images/initial-screen/menu-promo.webp"
            />
            <p className={styles.promoCopy}>
              <span>Tu nuevo vehículo,</span>
              <strong>Hoy.</strong>
            </p>
          </div>

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

            <p className={styles.versionLabel}>Versión {siteConfig.version}</p>
          </footer>
        </aside>
      </div>
    </header>
  );
}
