"use client";

import Link from "next/link";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { ChevronRightIcon } from "@/components/icons/ChevronRightIcon";
import { HeartIcon } from "@/components/icons/HeartIcon";
import { LockIcon } from "@/components/icons/LockIcon";
import { TrashIcon } from "@/components/icons/TrashIcon";
import { FormField } from "@/components/forms/FormField";
import formStyles from "@/components/forms/form-controls.module.css";
import { ScreenIntro } from "@/components/layout/ScreenIntro";
import layoutStyles from "@/components/layout/screen-layout.module.css";
import styles from "./page.module.css";

export function AccountContent() {
  const [isPasswordSaved, setIsPasswordSaved] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const cancelDeleteRef = useRef<HTMLButtonElement>(null);
  const deleteDialogRef = useRef<HTMLDivElement>(null);

  function handlePasswordSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setIsPasswordSaved(true);
  }

  function handlePasswordReset() {
    setIsPasswordSaved(false);
  }

  useEffect(() => {
    if (!isDeleteConfirmOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsDeleteConfirmOpen(false);
        return;
      }

      if (event.key !== "Tab" || !deleteDialogRef.current) return;

      const focusableElements =
        deleteDialogRef.current.querySelectorAll<HTMLElement>(
          "button:not([disabled]), a[href]",
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

    cancelDeleteRef.current?.focus();
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isDeleteConfirmOpen]);

  return (
    <main className={layoutStyles.page}>
      <section className={layoutStyles.content} aria-labelledby="account-title">
        <ScreenIntro title="Mi cuenta" titleId="account-title">
          Gestioná tu perfil y tus preferencias.
        </ScreenIntro>

        <div className={styles.profile}>
          <span aria-hidden="true" className={styles.avatar}>
            MT
          </span>
          <div className={styles.profileDetails}>
            <p className={styles.profileName}>Mariana Torres</p>
            <p className={styles.profileEmail}>mariana.torres@email.com</p>
          </div>
        </div>

        <div className={styles.divider} />

        <Link className={styles.link} href="/favorites">
          <span className={styles.linkIcon}>
            <HeartIcon />
          </span>
          <span className={styles.linkLabel}>Mis favoritos</span>
          <span className={styles.chevron}>
            <ChevronRightIcon />
          </span>
        </Link>

        <div className={styles.divider} />

        <h2 className={styles.passwordHeading}>
          <span className={styles.linkIcon}>
            <LockIcon />
          </span>
          Cambiar contraseña
        </h2>

        <form
          aria-label="Cambiar contraseña"
          className={styles.passwordForm}
          onReset={handlePasswordReset}
          onSubmit={handlePasswordSubmit}
        >
          <div className={styles.passwordFields}>
            <FormField
              autoComplete="current-password"
              id="current-password"
              label="Contraseña actual"
              name="currentPassword"
              required
              type="password"
            />
            <FormField
              autoComplete="new-password"
              id="new-password"
              label="Nueva contraseña"
              name="newPassword"
              required
              type="password"
            />
            <FormField
              autoComplete="new-password"
              id="confirm-password"
              label="Confirmar nueva contraseña"
              name="confirmPassword"
              required
              type="password"
            />
          </div>

          <div className={styles.passwordActions}>
            <button className={styles.cancelButton} type="reset">
              Cancelar
            </button>
            <button
              className={`${formStyles.primaryButton} ${formStyles.pill} ${styles.saveButton}`}
              type="submit"
            >
              Guardar cambios
            </button>
          </div>
        </form>

        {isPasswordSaved && (
          <p className={styles.passwordSaved} role="status">
            Contraseña actualizada.
          </p>
        )}

        <div className={styles.divider} />

        <Link className={styles.logout} href="/initial-screen">
          Cerrar sesión
        </Link>

        <button
          className={styles.deleteAccount}
          onClick={() => setIsDeleteConfirmOpen(true)}
          type="button"
        >
          <span aria-hidden="true" className={styles.deleteAccountIcon}>
            <TrashIcon />
          </span>
          Eliminar cuenta
        </button>
      </section>

      {isDeleteConfirmOpen && (
        <div className={styles.deleteOverlay}>
          <button
            aria-label="No"
            className={styles.deleteBackdrop}
            onClick={() => setIsDeleteConfirmOpen(false)}
            tabIndex={-1}
            type="button"
          />

          <div
            aria-labelledby="delete-confirm-title"
            aria-modal="true"
            className={styles.deleteDialog}
            ref={deleteDialogRef}
            role="alertdialog"
          >
            <p className={styles.deleteTitle} id="delete-confirm-title">
              ¿Deseas eliminar tu cuenta y con esto perder todos los datos
              cargados de pre-calificación crediticia?
            </p>

            <div className={styles.deleteActions}>
              <button
                className={styles.deleteCancel}
                onClick={() => setIsDeleteConfirmOpen(false)}
                ref={cancelDeleteRef}
                type="button"
              >
                No
              </button>
              <Link className={styles.deleteConfirm} href="/initial-screen">
                Sí
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
